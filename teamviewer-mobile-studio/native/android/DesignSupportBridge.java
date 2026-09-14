package __PACKAGE__;
import android.app.Activity;
import android.app.AlertDialog;
/** Design-only build: contains no TeamViewer SDK. */
public final class SupportBridge {
    private final Activity activity;
    public SupportBridge(Activity activity){this.activity=activity;}
    public void start(){new AlertDialog.Builder(activity).setTitle("Design build")
        .setMessage("This build previews the interface. For remote support, build the TeamViewer variant with an SDK token and repository access.")
        .setPositiveButton("OK",null).show();}
    public void stop(){}
}
