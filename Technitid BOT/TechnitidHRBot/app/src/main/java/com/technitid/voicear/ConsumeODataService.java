package com.technitid.voicear;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.IOException;
import java.util.List;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;


public class ConsumeODataService {
    OkHttpClient client = new OkHttpClient.Builder()
            .authenticator(new NTLMAuthenticator("SUPER_ADMIN", "technitid123@"))
            // .some other init here if necessary
            .build();

    String run(String url) throws IOException
    {
        Request request = new Request.Builder()
                .url(url)
                .build();

        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }

//    @TargetApi(Build.VERSION_CODES.N)
//    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    public static void main(String[] args) throws IOException {
        ConsumeODataService example = new ConsumeODataService();
        //http://localhost:7048/DynamicsNAV/OData/Company('CRONUS International Ltd.')/Customer?$filter=City eq 'Miami'
        String response = example.run("http://192.168.1.182:8080/buerpservice/ODataV4/Company('Bangladesh%20University')/EmployeeMonthlyTDS");
        oDataMonthlyTotalTDSContext taxInfo =onResponse(response.replace("@odata.context","odataContext").toString());
        List<MonthlyTotalTDSInfo> list =taxInfo.getValues();
//        list.forEach(x -> System.out.println("Your Total TDS is "+x.getSum_TDS() +" for the month of " + x.getMonth()+ " "+ x.getYear()+"."));
        for (MonthlyTotalTDSInfo info : list) {
            System.out.println("Your Total TDS is "+info.getSum_TDS() +" for the month of " + info.getMonth()+ " "+ info.getYear()+".");
        }
    }


//    @RequiresApi(api = Build.VERSION_CODES.N)
    public static oDataMonthlyTotalTDSContext onResponse(String response) {
        Gson gson;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("M/d/yy hh:mm a");
        gson = gsonBuilder.create();

        String jsonInString = response;
        oDataMonthlyTotalTDSContext taxInfo = gson.fromJson(jsonInString, oDataMonthlyTotalTDSContext.class);
        return taxInfo;
     }
}
