package com.technitid.voicear;

import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;

/**
 * 	Description: 'SplashActivity' class is used to show user some kind of progress before the app loads completely.
 *	Invocation:  'SplashActivity' is a Launcher Activity.
 */

public class SplashActivity extends AppCompatActivity {

    //Animation animation, animation1;
    int progressStatus = 0;
    Handler handler = new Handler();
    AlertDialog.Builder alertDialog;
    /**
     * ATTENTION: This was auto-generated to implement the App Indexing API.
     * See https://g.co/AppIndexing/AndroidStudio for more information.
     */

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        getSupportActionBar().hide();
        showSplashAnimation();
    }


    @Override
    protected void onPause() {
        super.onPause();
        finish();
    }


    // Override method for checking Screen Orientation
    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);

        //LanguageManager.setLanguage(prefLang, getResources());// set selected language when screen rotate
    }

    @Override
    public void onStart() {
        super.onStart();
    }

    @Override
    public void onStop() {
        super.onStop();
    }


    /*@Override
    public void onPermissionsGranted(int requestCode, List<String> list) {
        // Do nothing.
    }*/

    private void showSplashAnimation(){
        try {

            new Thread(new Runnable() {
                public void run() {
                    while (progressStatus < 100) {
                        progressStatus += 10;
                        handler.post(new Runnable() {
                            public void run() {
                            }
                        });
                        try {
                            Thread.sleep(200);

                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    if (progressStatus == 100) {
                        Intent i = new Intent(SplashActivity.this, MainActivity.class);
                        startActivity(i);
                    }
                }
            }).start();

        } catch (Exception ex){
            ex.printStackTrace();
        }
    }
}
