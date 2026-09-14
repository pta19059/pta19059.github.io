package __PACKAGE__;

import android.app.Activity;
import android.app.AlertDialog;
import android.widget.EditText;
import android.widget.Toast;
import com.teamviewer.sdk.screensharing.*;

/** Integration based on TeamViewer's documented Android ScreenSharing SDK API.
 * Requires SDK repository access and an application SDK token. Device testing required. */
public final class SupportBridge {
    private final Activity activity;
    private TeamViewerSdk sdk;
    private AlertDialog authDialog;
    public SupportBridge(Activity activity) { this.activity=activity; }
    public void start() {
        if (sdk!=null) {
            new AlertDialog.Builder(activity).setTitle("TeamViewer support")
                .setMessage("A support request is already open.")
                .setPositiveButton("End",(d,w)->stop()).setNegativeButton("Continue",null).show(); return;
        }
        if (BuildConfig.TEAMVIEWER_SDK_TOKEN.isEmpty()) {
            message("The build environment is missing the SDK token."); return;
        }
        EditText code = new EditText(activity); code.setHint("Session code from your expert"); code.setSingleLine(true);
        new AlertDialog.Builder(activity).setTitle("Request support")
            .setMessage("Enter the session code from your expert. You will be asked to authorize the connection.")
            .setView(code).setNegativeButton("Cancel",null)
            .setPositiveButton("Continue",(d,w)->connect(code.getText().toString().trim())).show();
    }
    private void connect(String code) {
        if(code.isEmpty()){message("Enter a session code.");return;}
        try {
            Settings settings = new Settings();
            settings.accessControlRules.put(AccessType.RemoteControl, AccessControlRule.AfterConfirmation);
            sdk = new TeamViewerSdk.Builder(activity)
                .withToken(BuildConfig.TEAMVIEWER_SDK_TOKEN)
                .withSettings(settings)
                .withErrorCallback(error -> activity.runOnUiThread(() -> {message("TeamViewer error: "+error);stop();}))
                .withSessionCallback(new SessionCallback(){
                    @Override public void onSessionStarted(TeamViewerSession session){activity.runOnUiThread(()->message("TeamViewer session started. Menu: End support."));}
                    @Override public void onSessionEnded(){activity.runOnUiThread(()->{message("Session ended.");stop();});}
                })
                .withAuthenticationCallback(new AuthenticationCallback(){
                    @Override public void onAuthentication(AuthenticationData data){activity.runOnUiThread(()->{
                        if(activity.isFinishing()){data.getCallback().onAuthenticationResult(false);return;}
                        authDialog = new AlertDialog.Builder(activity).setTitle("Authorize the expert")
                            .setMessage("Allow "+data.getPartnerName()+" to join this session?")
                            .setPositiveButton("Allow",(d,w)->data.getCallback().onAuthenticationResult(true))
                            .setNegativeButton("Deny",(d,w)->data.getCallback().onAuthenticationResult(false)).setCancelable(false).show();
                    });}
                    @Override public void onAuthenticationCanceled(){activity.runOnUiThread(()->{if(authDialog!=null)authDialog.dismiss();});}
                })
                .withAccessControlCallback(data->activity.runOnUiThread(()->new AlertDialog.Builder(activity)
                    .setTitle("Access request").setMessage("The expert requests additional access. Do you want to allow it?")
                    .setPositiveButton("Allow",(d,w)->data.getCallback().onAccessControlResult(true))
                    .setNegativeButton("Deny",(d,w)->data.getCallback().onAccessControlResult(false)).setCancelable(false).show()))
                .build();
            sdk.connectToSessionCode(code);
        } catch(Exception error){stop();message("Unable to initialize TeamViewer. Check the token and SDK.");}
    }
    public void stop(){TeamViewerSdk current=sdk;sdk=null;if(authDialog!=null){authDialog.dismiss();authDialog=null;}if(current!=null)current.shutdown();}
    private void message(String text){Toast.makeText(activity,text,Toast.LENGTH_LONG).show();}
}
