package com.technitid.voicear;

import android.annotation.TargetApi;
import android.os.Build;
import android.util.Log;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.Date;
import java.util.Base64;

/**
 * Description:         The manager is responsible for POST and GET service, in order to manage network connectivity.
 * Invocation:          Invoked where ever API call is needed for GET and POST services.
 * Implementation Flow:
 *                      a. Call API for GET request.
 *                      b. Call API for POST request.
 */
public class ServiceManager {
    // Implementation Flow: a ----------------------- START
    public static String CallGetService(String url){
        String jsonResult = "";

        try {
//            Log.d("getServiceStart",url + " : " + new Date());
//            URL requestUrl = new URL(url);
//            URLConnection urlConnection = requestUrl.openConnection();
            String credentials = "SUPER_ADMIN" + ":" + "technitid123@";
//
//            // Encode String
            String encoding = URLEncoder.encode(credentials, "UTF-8");
//            String encoding = String.valueOf(Base64Converter.encode(credentials.getBytes("UTF-8")));
////            String encoding = org.apache.catalina.util.Base64.encode(userPassword.getBytes("UTF-8"));
////            org.apache.tools.ant.util.Base64Converter
//            urlConnection.setRequestProperty("Authorization", "UTF-8" + encoding);
//            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
//            StringBuilder stringBuilder = new StringBuilder();
//            int cp;
//
//            while ((cp = bufferedReader.read()) != -1) {
//                stringBuilder.append((char) cp);
//            }
//
//            jsonResult = stringBuilder.toString();
////            Log.d("getServiceEnd",url + " : " + new Date());

            URL Url = new URL(url);

            HttpURLConnection connection = (HttpURLConnection) Url.openConnection();
            connection.setRequestProperty("Authorization", "UTF-8" + encoding);
            connection.setRequestMethod("GET");
            connection.setDoInput(true);
            connection.connect();

            int responseCode = connection.getResponseCode();

            if (responseCode == 200)
            { InputStream is = connection.getInputStream();
                if (is != null)
                { BufferedReader rd = new BufferedReader(new InputStreamReader(is));
                    jsonResult = rd.readLine();
                }
            } else { InputStream is = connection.getErrorStream();

                BufferedReader rd = new BufferedReader(new InputStreamReader(is));

                jsonResult = rd.readLine();

            } if (jsonResult != null)
//                jsonResult= jsonResult;
            return jsonResult;

        } catch (Exception e) {
            e.printStackTrace();
            //ExceptionManager.InsertErrorInfo(Constants.FCM.SENDER_USER_KEY_FOR_TRACING_LOCATION, e);
        }
        return null;
    }
    public String CallGetService1(String url){
        String jsonResult = "";

        try {
            Log.d("getServiceStart",url + " : " + new Date());
            URL requestUrl = new URL(url);
            URLConnection urlConnection = requestUrl.openConnection();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            StringBuilder stringBuilder = new StringBuilder();
            int cp;

            while ((cp = bufferedReader.read()) != -1) {
                stringBuilder.append((char) cp);
            }

            jsonResult = stringBuilder.toString();
            Log.d("getServiceEnd",url + " : " + new Date());
            return jsonResult;

        } catch (Exception e) {
            e.printStackTrace();
            //ExceptionManager.InsertErrorInfo(Constants.FCM.SENDER_USER_KEY_FOR_TRACING_LOCATION, e);
        }
        return null;
    }
    // Implementation Flow: a ----------------------- END

    // Implementation Flow: b ----------------------- START
    @TargetApi(Build.VERSION_CODES.KITKAT)
    public static String CallPostService(String url, String param)throws Exception{
        String charset = "UTF-8";
        Log.d("postServiceStart",url + " : " + new Date());
        URLConnection connection = new URL(url).openConnection();
        connection.setDoOutput(true); // Triggers POST.
        connection.setRequestProperty("Accept-Charset", charset);
        connection.setRequestProperty("Content-Type", "application/json;charset=" + charset);

        try (OutputStream output = connection.getOutputStream()) {
            Log.d("postServiceOutputWrite",url + " : " + new Date());
            output.write(param.getBytes(charset));
        } catch (Exception ex) {
            //Constants.hasCallTimedOut = true;
            //ExceptionManager.InsertErrorInfo(Constants.USER_KEY_INT_FROM_SERVER, ex);
        }

        InputStream in = connection.getInputStream();/* your InputStream */

        StringBuilder sb = new StringBuilder();
        Log.d("BufferedReader init",url + " : " + new Date());
        BufferedReader br = new BufferedReader(new InputStreamReader(in));
        String read;

        while ((read = br.readLine()) != null) {
            Log.d("postServiceBufRdrOpen",url + " : " + new Date());
            sb.append(read);
        }
        Log.d("postServiceBufRdrClosed",url + " : " + new Date());
        br.close();

        Log.d("postServiceEnd",url + " : " + new Date());
        return sb.toString();
    }
    // Implementation Flow: b ----------------------- END
}
