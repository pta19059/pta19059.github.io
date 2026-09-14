package __PACKAGE__;

import android.app.*;
import android.os.Bundle;
import android.graphics.*;
import android.content.Context;
import android.text.*;
import android.view.*;
import android.widget.*;
import android.util.Base64;
import org.json.*;
import java.nio.charset.StandardCharsets;

public class MainActivity extends Activity {
    private SupportBridge support;
    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        support = new SupportBridge(this);
        try {
            java.io.ByteArrayOutputStream bytes = new java.io.ByteArrayOutputStream();
            try (java.io.InputStream input = getAssets().open("design.json")) {
                byte[] buffer = new byte[8192]; int count;
                while ((count = input.read(buffer)) != -1) bytes.write(buffer, 0, count);
            }
            String json = new String(bytes.toByteArray(), StandardCharsets.UTF_8);
            setContentView(new DesignView(this, new JSONObject(json)));
        } catch (Exception e) {
            TextView error = new TextView(this); error.setText("Unable to load the design."); setContentView(error);
        }
    }
    @Override public boolean onCreateOptionsMenu(Menu menu) {
        menu.add("End support").setOnMenuItemClickListener(item -> { support.stop(); return true; }); return true;
    }
    @Override public void onBackPressed() { support.stop(); super.onBackPressed(); }
    @Override protected void onDestroy() { support.stop(); super.onDestroy(); }
    class DesignView extends View {
        final JSONObject project;
        final JSONArray elements;
        final java.util.Map<String, Bitmap> images = new java.util.HashMap<>();
        final Paint paint = new Paint(Paint.ANTI_ALIAS_FLAG);
        float scale = 1, dx, dy;
        DesignView(Context c, JSONObject p) throws Exception {
            super(c); project=p; elements=p.getJSONArray("elements");
            load("background", p.optString("backgroundImage"));
            for(int i=0;i<elements.length();i++){ JSONObject e=elements.getJSONObject(i);load(e.getString("id"),e.optString("src")); }
            setContentDescription(p.optString("name"));
        }
        void load(String id,String uri) {try{if(uri.isEmpty())return;byte[] data=Base64.decode(uri.substring(uri.indexOf(',')+1),Base64.DEFAULT);Bitmap b=BitmapFactory.decodeByteArray(data,0,data.length);if(b!=null)images.put(id,b);}catch(Exception ignored){}}
        int color(String value){return value.equals("transparent")?Color.TRANSPARENT:Color.parseColor(value);}
        void drawBitmap(Canvas c,Bitmap b,RectF dest,boolean cover){float s=cover?Math.max(dest.width()/b.getWidth(),dest.height()/b.getHeight()):Math.min(dest.width()/b.getWidth(),dest.height()/b.getHeight());float w=b.getWidth()*s,h=b.getHeight()*s;c.drawBitmap(b,null,new RectF(dest.centerX()-w/2,dest.centerY()-h/2,dest.centerX()+w/2,dest.centerY()+h/2),paint);}
        @Override protected void onDraw(Canvas c){
            super.onDraw(c);scale=Math.min(getWidth()/390f,getHeight()/844f);dx=(getWidth()-390*scale)/2;dy=(getHeight()-844*scale)/2;
            c.drawColor(color(project.optString("background","#ffffff")));c.save();c.translate(dx,dy);c.scale(scale,scale);c.clipRect(0,0,390,844);
            if(images.containsKey("background")){paint.setAlpha(255);drawBitmap(c,images.get("background"),new RectF(0,0,390,844),true);}
            for(int i=0;i<elements.length();i++){try{
                JSONObject e=elements.getJSONObject(i);float x=(float)e.getDouble("x"),y=(float)e.getDouble("y"),w=(float)e.getDouble("w"),h=(float)e.getDouble("h"),r=(float)e.getDouble("radius");
                c.save();c.translate(x,y);Path clip=new Path();clip.addRoundRect(new RectF(0,0,w,h),r,r,Path.Direction.CW);c.clipPath(clip);
                paint.setColor(color(e.getString("fill")));paint.setAlpha((int)(e.getDouble("opacity")*2.55));c.drawRect(0,0,w,h,paint);
                if(e.getString("type").equals("image")){Bitmap b=images.get(e.getString("id"));if(b!=null){paint.setColor(Color.WHITE);paint.setAlpha((int)(e.getDouble("opacity")*2.55));drawBitmap(c,b,new RectF(0,0,w,h),e.optString("fit").equals("cover"));}}
                else {
                    TextPaint text=new TextPaint(Paint.ANTI_ALIAS_FLAG);text.setColor(color(e.getString("color")));text.setAlpha((int)(e.getDouble("opacity")*2.55));text.setTextSize((float)e.getDouble("fontSize"));
                    String font=project.optString("font");Typeface face=font.equals("Manrope")?Typeface.createFromAsset(getAssets(),"Manrope.ttf"):Typeface.create(font.equals("Georgia")?"serif":font.equals("monospace")?"monospace":"sans-serif",Typeface.NORMAL);
                    text.setTypeface(Typeface.create(face,e.getBoolean("bold")?Typeface.BOLD:Typeface.NORMAL));
                    String alignment=e.getString("align");Layout.Alignment a=alignment.equals("center")?Layout.Alignment.ALIGN_CENTER:alignment.equals("right")?Layout.Alignment.ALIGN_OPPOSITE:Layout.Alignment.ALIGN_NORMAL;
                    StaticLayout layout=StaticLayout.Builder.obtain(e.getString("text"),0,e.getString("text").length(),text,(int)w).setAlignment(a).setIncludePad(false).setLineSpacing(0,1.4f).build();
                    c.translate(0,(h-layout.getHeight())/2f);layout.draw(c);
                }c.restore();
            }catch(Exception ignored){}}
            c.restore();
        }
        @Override public boolean onTouchEvent(MotionEvent event){
            if(event.getAction()==MotionEvent.ACTION_UP){performClick();float x=(event.getX()-dx)/scale,y=(event.getY()-dy)/scale;
                for(int i=elements.length()-1;i>=0;i--){JSONObject e=elements.optJSONObject(i);if(e==null)continue;
                    if(x>=e.optDouble("x")&&x<=e.optDouble("x")+e.optDouble("w")&&y>=e.optDouble("y")&&y<=e.optDouble("y")+e.optDouble("h")){
                        String type=e.optString("type");if(type.equals("support")){support.start();return true;}
                        if(type.equals("button")){new AlertDialog.Builder(MainActivity.this).setTitle(e.optString("text")).setMessage("Connect your app action here.").setPositiveButton("OK",null).show();return true;}
                        return true;
                    }
                }
            }return true;
        }
        @Override public boolean performClick(){super.performClick();return true;}
    }
}
