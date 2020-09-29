package com.technitid.voicear;

import android.Manifest;
import android.annotation.TargetApi;
import android.app.ProgressDialog;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.AsyncTask;
import android.os.Build;
import android.preference.PreferenceManager;
import android.speech.RecognizerIntent;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URLEncoder;
import java.text.DateFormatSymbols;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import android.widget.Toast;

import com.github.mikephil.charting.charts.BarChart;
import com.github.mikephil.charting.charts.PieChart;
import com.github.mikephil.charting.data.BarData;
import com.github.mikephil.charting.data.BarDataSet;
import com.github.mikephil.charting.data.BarEntry;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.PieData;
import com.github.mikephil.charting.data.PieDataSet;
import com.github.mikephil.charting.utils.ColorTemplate;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity {
    private ProgressDialog dialog;
    LinearLayout layOut, layOut1, llLogoEkush, llFooter;
    ImageView btnSpeak;
    private MediaPlayer mediaPlayer = new MediaPlayer();
    TextView txtInput, txtResponse;
    private static final int VOICE_RECOGNITION_REQUEST_CODE = 1234;
    private static final int WRITE_EXTERNAL_STORAGE_PERMISSIONS_REQUEST = 123;
    String TARGET_URL = "";
    boolean isResponseDone = true;


//    public String run(String url) throws IOException
//    {
//        Request request = new Request.Builder()
//                .url(url)
//                .build();
//
//        try (Response response = client.newCall(request).execute()) {
//            return response.body().string();
//        }
//    }

    public oDataMonthlyTotalTDSContext onResponse(String response) {
        Gson gson;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("M/d/yy hh:mm a");
        gson = gsonBuilder.create();

        String jsonInString = response;
        oDataMonthlyTotalTDSContext taxInfo = gson.fromJson(jsonInString, oDataMonthlyTotalTDSContext.class);
        return taxInfo;
    }

    public oDataJobPlanningContext onJobPlanningResponse(String response) {
        Gson gson;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("M/d/yy hh:mm a");
        gson = gsonBuilder.create();

        String jsonInString = response;
        oDataJobPlanningContext jobplanningInfo = gson.fromJson(jsonInString, oDataJobPlanningContext.class);
        return jobplanningInfo;
    }

    public oDataMonthlyTotalSalaryContext onMonthlyTotalSalaryResponse(String response) {
        Gson gson;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("M/d/yy hh:mm a");
        gson = gsonBuilder.create();

        String jsonInString = response;
        oDataMonthlyTotalSalaryContext monthlyTotalSalaryInfo = gson.fromJson(jsonInString, oDataMonthlyTotalSalaryContext.class);
        return monthlyTotalSalaryInfo;
    }

    public oDataMonthlyTotalVATContext onMonthlyTotalVATInfoResponse(String response) {
        Gson gson;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("M/d/yy hh:mm a");
        gson = gsonBuilder.create();

        String jsonInString = response;
        oDataMonthlyTotalVATContext monthlyTotalVATInfo = gson.fromJson(jsonInString, oDataMonthlyTotalVATContext.class);
        return monthlyTotalVATInfo;
    }

    public oDataMonthlyLeaveTakenContext onMonthlyLeaveTakenInfoResponse(String response) {
        Gson gson;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("M/d/yy hh:mm a");
        gson = gsonBuilder.create();

        String jsonInString = response;
        oDataMonthlyLeaveTakenContext monthlyLeaveTakenInfo = gson.fromJson(jsonInString, oDataMonthlyLeaveTakenContext.class);
        return monthlyLeaveTakenInfo;
    }

    public oDataYearlyLeaveTakenContext onYearlyLeaveTakenInfoResponse(String response) {
        Gson gson;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("M/d/yy hh:mm a");
        gson = gsonBuilder.create();

        String jsonInString = response;
        oDataYearlyLeaveTakenContext yearlyLeaveTakenInfo = gson.fromJson(jsonInString, oDataYearlyLeaveTakenContext.class);
        return yearlyLeaveTakenInfo;
    }

    public oDataMonthlyTotalSalaryAndTDSContext onMonthlyTotalSalaryAndTDSInfoResponse(String response) {
        Gson gson;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("M/d/yy hh:mm a");
        gson = gsonBuilder.create();

        String jsonInString = response;
        oDataMonthlyTotalSalaryAndTDSContext monthlyTotalSalaryAndTDSInfo = gson.fromJson(jsonInString, oDataMonthlyTotalSalaryAndTDSContext.class);
        return monthlyTotalSalaryAndTDSInfo;
    }

    public oDataPBITotalEmployeeByDeptContext onPBITotalEmployeeByDeptResponse(String response) {
        Gson gson;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("M/d/yy hh:mm a");
        gson = gsonBuilder.create();

        String jsonInString = response;
        oDataPBITotalEmployeeByDeptContext PBITotalEmployeeByDept = gson.fromJson(jsonInString, oDataPBITotalEmployeeByDeptContext.class);
        return PBITotalEmployeeByDept;
    }

    public oDataPBITotalEmployeeByGenderContext onPBITotalEmployeeByGenderResponse(String response) {
        Gson gson;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("M/d/yy hh:mm a");
        gson = gsonBuilder.create();

        String jsonInString = response;
        oDataPBITotalEmployeeByGenderContext PBITotalEmployeeByGender = gson.fromJson(jsonInString, oDataPBITotalEmployeeByGenderContext.class);
        return PBITotalEmployeeByGender;
    }

    @Override
    public void onResume() {
        super.onResume();
        if (mediaPlayer != null)
            mediaPlayer.release();
        // put your code here...

    }

    protected void onStart() {
        super.onStart();
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        dialog = new ProgressDialog(this);
        layOut = (LinearLayout) findViewById(R.id.layout);
        layOut1 = (LinearLayout) findViewById(R.id.layout1);
        llLogoEkush = (LinearLayout) findViewById(R.id.llLogoEkush);
        llFooter = (LinearLayout) findViewById(R.id.llFooter);

        mediaPlayer = new MediaPlayer();

        initActionBar(getSupportActionBar());
        txtInput = (TextView) findViewById(R.id.txtInput);
        txtResponse = (TextView) findViewById(R.id.txtResponse);
        //textToSpeech = new TextToSpeech(MainActivity.this, MainActivity.this);

        btnSpeak = (ImageView) findViewById(R.id.btnSpeak);
        btnSpeak.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                btnSpeak.setBackgroundResource(R.drawable.mic_white_big);
                if (mediaPlayer != null)
                    mediaPlayer.release();
                startVoiceRecognitionActivityBangla();
            }
        });
        //layoutDefaultersPiChart();
        //layoutRevenueMonthBarChart();
        //speakeInit(" মাইক্রোফোন চেপে আপনার প্রশ্নটি জিজ্ঞাসা করুন।");
    }


    private void CustomHashMapReply(String bengaliSpokenText) {
        llLogoEkush.setVisibility(View.GONE);

        if ((bengaliSpokenText.contains("february") || bengaliSpokenText.contains("ফেব্রুয়ারী")
                || bengaliSpokenText.contains("মাস") || bengaliSpokenText.contains("স্যালারি") ||
                bengaliSpokenText.contains("সেলারি") || bengaliSpokenText.contains("বেতন")
        ) &&
                (bengaliSpokenText.contains("ভ্যাট") ||
                        bengaliSpokenText.contains("vat")
                )) {
            speakeBengali("ফেব্রুয়ারী মাসে ৯০৫৫ টাকা, মার্চ মাসে ২৪৫১ টাকা এবং এপ্রিল মাসে ২৯৩৪ টাকা ভ্যাট দেওয়া হয়েছে।");
            layoutSalaryVatBarChart();
        } else if ((bengaliSpokenText.contains("february") || bengaliSpokenText.contains("ফেব্রুয়ারী")
                || bengaliSpokenText.contains("মাস")) &&
                (bengaliSpokenText.contains("স্যালারি") ||
                        bengaliSpokenText.contains("salary") ||
                        bengaliSpokenText.contains("সেলারি") || bengaliSpokenText.contains("বেতন")
                )) {
            speakeBengali("ফেব্রুয়ারী মাসে ৬১৮৭৮৯৩ টাকা, মার্চ মাসে ৬১৮৭৮৯৩ টাকা এবং এপ্রিল মাসে ৬১৮৭৮৯৩ টাকা স্যালারি দেওয়া হয়েছে।");
            layoutSalaryBarChart();
//        } else if ((bengaliSpokenText.contains("বছর")) &&
//                (bengaliSpokenText.contains("লিভ") ||
//                        bengaliSpokenText.contains("leave") ||
//                        bengaliSpokenText.contains("live") ||
//                        bengaliSpokenText.contains("ছুটি")
//                )) {
//            speakeBengali("এই বছরে মিঃ সোহেল নিপুন ১৪ দিন, সাদিক ইকবাল ১৮ দিন, ইয়াসির রুমি ১৯ দিন ছুটি নিয়েছেন।");
//            layoutYearlyLeaveBarChart();
//        } else if ((bengaliSpokenText.contains("মাস")) &&
//                (bengaliSpokenText.contains("লিভ") ||
//                        bengaliSpokenText.contains("leave") ||
//                        bengaliSpokenText.contains("live") ||
//                        bengaliSpokenText.contains("ছুটি")
//                )) {
//            speakeBengali("এই মাসে মিঃ সোহেল নিপুন ১৪ দিন, উজ্জল প্রধান ৮ দিন, ইয়াসির রুমি ১০ দিন ছুটি নিয়েছেন।");
//            layoutMonthlyLeaveBarChart();
        } else if ((bengaliSpokenText.contains("in") ||
                bengaliSpokenText.contains("ইন")) &&
                (bengaliSpokenText.contains("ভ্যাট") ||
                        bengaliSpokenText.contains("vat")
                )) {
            speakeBengali("মোট ইনভয়েসের ১৩% ভ্যাট দেওয়া হয়েছে এবং ৮৭% ভ্যাট দেওয়া হয়নি।");
            layoutVATPiChart();
        } else if ((bengaliSpokenText.contains("in") ||
                bengaliSpokenText.contains("ইন")) &&
                (bengaliSpokenText.contains("এআইটি") ||
                        bengaliSpokenText.contains("ait") ||
                        bengaliSpokenText.contains("ট্যাক্স") ||
                        bengaliSpokenText.contains("tax")
                )) {
            speakeBengali("মোট ইনভয়েসের ১০০% এআইটি(ট্যাক্স) দেওয়া হয়নি।");
            layoutAITPiChart();
        } else if ((bengaliSpokenText.contains("মনিটর") ||
                bengaliSpokenText.contains("monitor")) &&
                (bengaliSpokenText.contains("অর্ডার") ||
                        bengaliSpokenText.contains("order")
                )) {
            speakeBengali("ওয়ালটন থেকে ২ টি অর্ডার করা হয়েছ এবং চায়না বাজার থেকে ১ টি মনিটর অর্ডার করা হয়েছে।");
            layoutOrderBarChart();
        } else if ((bengaliSpokenText.contains("রিকুইজিশন") ||
                bengaliSpokenText.contains("requisition"))
                ) {
            speakeBengali("রিকুইজিশন ৬০% রিলিজড হয়েছে এবং ৪০% ওপেন আছে।");
            layoutRequisitionPiChart();
        } else if ((bengaliSpokenText.contains("project planning") ||
                bengaliSpokenText.contains("Cost") ||
                bengaliSpokenText.contains("HSBC") ||
                bengaliSpokenText.contains("Exim Tower"))
                ) {
            String response = null;
            String url = "http://192.168.1.182:8080/buerpservice/ODataV4/Company('CRONUS%20International%20Ltd.')/Job_Planning_Lines?$filter=Job_No eq 'J00021'";
//            String url ="";
            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"JobPlanningInfo");
            MyTask.execute();

//            speakeBengali("The total project cost for the HSBC Banani Complex is 10863500 and EXIM Tower is 9475550.");
//            //Creating Array string for BarChart
//            String jobString = "J00021,J00024";
//            String costString = "10863500,9475550";
//            String[] jobNo = jobString.split(",");
//            String[] totCost = costString.split(",");
//
//            layoutEmployeeTDSBarChart(jobNo, totCost);

        } else if ((bengaliSpokenText.contains("budget and expense") ||
                bengaliSpokenText.contains("expense"))
                ) {
//            String response = null;
//////            String url = "http://192.168.1.75:7048/DynamicsNAV110/ODataV4/Company('CRONUS%20International%20Ltd.')/Job_Planning_Lines?$filter=Job_No eq 'J00021'";
////            String url ="";
////            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"JobBudget");
////            MyTask.execute();

            speakeBengali("The total budget for the HSBC Banani Complex is 10863500  and the usage is 6072900. The total budget for the EXIM Tower is 9475550 and the usage is 8773500.");
            //Creating Array string for BarChart
            String jobBudgetString = "10863500,9475550";
            String costBudgetString = "6072900,8773500";
            String[] jobBudgetNo = jobBudgetString.split(",");
            String[] totBudgetCost = costBudgetString.split(",");
            layoutEmployeeTDSBarChart(jobBudgetNo, totBudgetCost);

        } else if ((bengaliSpokenText.contains("monthly total salary") ||
                bengaliSpokenText.contains("monthly salary"))
                ) {
            String url = "http://192.168.1.182:7048/buerpservice/ODataV4/Company('Bangladesh%20University')/MonthlyTotalSalary";
            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"MonthlyTotalSalary");
            MyTask.execute();

        } else if ((bengaliSpokenText.contains("monthly total VAT") ||
                bengaliSpokenText.contains("monthly VAT"))
                ) {
            String url = "http://192.168.1.182:7048/buerpservice/ODataV4/Company('Bangladesh%20University')/MonthlyTotalVAT";
            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"MonthlyTotalVAT");
            MyTask.execute();

        } else if ((bengaliSpokenText.contains("monthly total TDS") ||
                bengaliSpokenText.contains("monthly TDS"))
                ) {
            String url = "http://192.168.1.182:7048/buerpservice/ODataV4/Company('Bangladesh%20University')/MonthlyTotalTDS";
            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"MonthlyTotalTDS");
            MyTask.execute();
        } else if ((bengaliSpokenText.contains("leave taken") && bengaliSpokenText.contains("for this month"))
                || (bengaliSpokenText.contains("leave taken") && bengaliSpokenText.contains("for the current month"))
                || (bengaliSpokenText.contains("leave taken") && bengaliSpokenText.contains("for the previous month"))
                ) {
            String url = getLeaveURL(bengaliSpokenText);
            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"MonthlyLeaveTaken");
            MyTask.execute();
        } else if ((bengaliSpokenText.contains("yearly leave taken") ||
                bengaliSpokenText.contains("yearly leave") ||  bengaliSpokenText.contains("leave taken yearly"))
                ) {
            String url = "http://192.168.1.182:7048/buerpservice/ODataV4/Company('Bangladesh%20University')/YearlyLeaveTaken";
            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"YearlyLeaveTaken");
            MyTask.execute();
        } else if ((bengaliSpokenText.contains("total salary") && bengaliSpokenText.contains("for this month"))
                || (bengaliSpokenText.contains("total salary") && bengaliSpokenText.contains("for the current month"))
                || (bengaliSpokenText.contains("total salary") && bengaliSpokenText.contains("for the previous month"))
                || (bengaliSpokenText.contains("yearly total salary details"))

                ) {
            //String url = "http://192.168.1.182:7048/buerpservice/ODataV4/Company('Bangladesh%20University')/MonthlyTotalSalaryAndTDS?$filter=Salary_Statement_Code eq 'MARCH-2018'&$select=Salary_Statement_Code,Employee_Job_Status_Code,Sum_Net_Salary";
            //Getting Current Date
//            String currdate = new SimpleDateFormat("MMMM-yyyy").format(new Date());
            String url = getSalaryURL(bengaliSpokenText);

            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"JobCodeWiseMonthlyTotalSalary");
            MyTask.execute();
        } else if ((bengaliSpokenText.contains("total TDS") && bengaliSpokenText.contains("for this month"))
                || (bengaliSpokenText.contains("total TDS") && bengaliSpokenText.contains("for the current month"))
                || (bengaliSpokenText.contains("total TDS") && bengaliSpokenText.contains("for the previous month"))
                || (bengaliSpokenText.contains("yearly total TDS details"))
                ) {
            //String url = "http://192.168.1.182:7048/BUERPSERVICE/ODataV4/Company('Bangladesh%20University')/MonthlyTotalSalaryAndTDS?$filter=Salary_Statement_Code eq 'MARCH-2018'&$select=Salary_Statement_Code,Employee_Job_Status_Code,Sum_TDS";
            String url = getSalaryURL(bengaliSpokenText);
            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"JobCodeWiseMonthlyTotalTDS");
            MyTask.execute();
        } else if ((bengaliSpokenText.contains("total deductions") && bengaliSpokenText.contains("for this month"))
                || (bengaliSpokenText.contains("total deductions") && bengaliSpokenText.contains("for the current month"))
                || (bengaliSpokenText.contains("total deductions") && bengaliSpokenText.contains("for the previous month"))
                || (bengaliSpokenText.contains("yearly total deduction details"))
                ) {
//            http://192.168.4.105:7048/BUERPSERVICE/ODataV4/Company('Bangladesh%20University')/MonthlyTotalSalaryAndTDS?$filter=Salary_Statement_Code eq 'MARCH-2018'&$select=Salary_Statement_Code,Employee_Job_Status_Code,Sum_VAT
            String url = getSalaryURL(bengaliSpokenText);
            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"JobCodeWiseMonthlyTotalDeduct");
            MyTask.execute();
        } else if ((bengaliSpokenText.contains("total bonus") && bengaliSpokenText.contains("for this month"))
                || (bengaliSpokenText.contains("total bonus") && bengaliSpokenText.contains("for the current month"))
                || (bengaliSpokenText.contains("total bonus") && bengaliSpokenText.contains("for the previous month"))
                || (bengaliSpokenText.contains("yearly total bonus details"))
                ) {
//            http://192.168.4.105:7048/BUERPSERVICE/ODataV4/Company('Bangladesh%20University')/MonthlyTotalSalaryAndTDS?$filter=Salary_Statement_Code eq 'MARCH-2018'&$select=Salary_Statement_Code,Employee_Job_Status_Code,Sum_VAT
            String url = getSalaryURL(bengaliSpokenText);
            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"JobCodeWiseMonthlyTotalBonus");
            MyTask.execute();
        } else if ((bengaliSpokenText.contains("total allowances") && bengaliSpokenText.contains("for this month"))
                || (bengaliSpokenText.contains("total allowances") && bengaliSpokenText.contains("for the current month"))
                || (bengaliSpokenText.contains("total allowances") && bengaliSpokenText.contains("for the previous month"))
                || (bengaliSpokenText.contains("yearly total allowance details"))
                ) {
//            http://192.168.4.105:7048/BUERPSERVICE/ODataV4/Company('Bangladesh%20University')/MonthlyTotalSalaryAndTDS?$filter=Salary_Statement_Code eq 'MARCH-2018'&$select=Salary_Statement_Code,Employee_Job_Status_Code,Sum_VAT
            String url = getSalaryURL(bengaliSpokenText);
            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"JobCodeWiseMonthlyTotalAllowances");
            MyTask.execute();
        } else if ((bengaliSpokenText.contains("department wise total employee"))
                ) {
            String url = "http://" +
                        Constants.COMMON_IP + ":" + Constants.COMMON_PORT + "/" + Constants.NAV_DOMAIN + "/ODataV4/Company('"
                        + Constants.COMMON_COMPANY + "')/PBITotalEmployeeByDept";

            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"PBITotalEmployeeByDept");
            MyTask.execute();
        } else if ((bengaliSpokenText.contains("gender wise total employee"))
                ) {
            String url = "http://" +
                    Constants.COMMON_IP + ":" + Constants.COMMON_PORT + "/" + Constants.NAV_DOMAIN + "/ODataV4/Company('"
                    + Constants.COMMON_COMPANY + "')/PBITotalEmployeeByGender";

            taskGetoDataServiceResult MyTask = new taskGetoDataServiceResult(url,"PBITotalEmployeeByGender");
            MyTask.execute();
        } else {
            speakeBengali(" Sorry! Could not found the answer.");
            layOut1.removeAllViews();
            //llLogoEkush.setVisibility(View.VISIBLE);

        }
    }

    @NonNull
    private String getSalaryURL(String bengaliSpokenText) {
        String url="";
        if(bengaliSpokenText.contains("for the previous month"))
        {
            url = "http://" +
                    Constants.COMMON_IP + ":" + Constants.COMMON_PORT + "/" + Constants.NAV_DOMAIN + "/ODataV4/Company('"
                    + Constants.COMMON_COMPANY + "')/Power_BI_Total_Salary_and_TDS_of_Previous_Month";
        }
        else if(bengaliSpokenText.contains("for the current month") || bengaliSpokenText.contains("for this month"))
        {
            url = "http://" +
                    Constants.COMMON_IP + ":" + Constants.COMMON_PORT + "/" + Constants.NAV_DOMAIN + "/ODataV4/Company('"
                    + Constants.COMMON_COMPANY + "')/Power_BI_Total_Salary_and_TDS_of_Current_Month";
        }
        else if(bengaliSpokenText.contains("yearly total"))
        {
            url = "http://" +
                    Constants.COMMON_IP + ":" + Constants.COMMON_PORT + "/" + Constants.NAV_DOMAIN + "/ODataV4/Company('"
                    + Constants.COMMON_COMPANY + "')/Power_BI_Yearly_Total_Salary_Details";
        }

        return url;
    }

    @NonNull
    private String getLeaveURL(String bengaliSpokenText) {
        String url="";
        if(bengaliSpokenText.contains("for the previous month"))
        {
            url = "http://" +
                    Constants.COMMON_IP + ":" + Constants.COMMON_PORT + "/" + Constants.NAV_DOMAIN + "/ODataV4/Company('"
                    + Constants.COMMON_COMPANY + "')/Power_BI_Monthly_Leave_Taken_of_Previous_Month";
        }
        else if(bengaliSpokenText.contains("for the current month") || bengaliSpokenText.contains("for this month"))
        {
            url = "http://" +
                    Constants.COMMON_IP + ":" + Constants.COMMON_PORT + "/" + Constants.NAV_DOMAIN + "/ODataV4/Company('"
                    + Constants.COMMON_COMPANY + "')/Power_BI_Monthly_Leave_Taken_of_Current_Month";
        }

        return url;
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        //getMenuInflater().inflate(R.menu.menu_main, menu);
        return
                true;
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        //String wordStr = null;
        String[] words = null;
        String firstWord = null;
        String secondWord = null;
        if (requestCode == VOICE_RECOGNITION_REQUEST_CODE
                && resultCode == RESULT_OK) {
            ArrayList<String> matches = data
                    .getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
            final String wordStr = matches.get(0);


            txtInput.setText("\n" + wordStr + "\n");

            CustomHashMapReply(wordStr);


        }


    } // end of activityOnResult method

    public void layoutEmployeeTDSBarChart(String[] months, String[] Totals) {

        LayoutInflater factory = LayoutInflater.from(MainActivity.this);

        final View f = factory.inflate(R.layout.layout_bar_chart, null);


        final BarChart barChart = (BarChart) f.findViewById(R.id.chart);


//        String[] dates = {"February","March","April"};//Constants.RiskTrend.dateList.toArray(new String[Constants.RiskTrend.dateList.size()]);
//        String[] Scors = {"6187893","6187893","6187893"};//Constants.RiskTrend.scoreList.toArray(new String[Constants.RiskTrend.scoreList.size()]);
        int n = 0;

        ArrayList<BarEntry> entries = new ArrayList<>();
        for (int i = 0; i < Totals.length; i++) {
            entries.add(new BarEntry(Float.parseFloat(Totals[i]), i));
        }

        BarDataSet dataset = new BarDataSet(entries, "");

        dataset.setColors(ColorTemplate.COLORFUL_COLORS);

        ArrayList<String> labels = new ArrayList<String>();

        for (int i = 0; i < months.length; i++) {
            labels.add(months[i]);
        }


        BarData data = new BarData(labels, dataset);
        barChart.setData(data);
        barChart.setDescription("");
        barChart.animateY(2000);
        layOut1.removeAllViews();
        layOut1.setVisibility(View.VISIBLE);
        layOut1.addView(f);
    }

    void startVoiceRecognitionActivityBangla() {


        Intent intent = new Intent(
                RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        //intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, Locale.FRANCE);
        //intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, "bn-BD");

        String languagePref = "en-US";
        //Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, languagePref);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, languagePref);
        intent.putExtra(RecognizerIntent.EXTRA_ONLY_RETURN_LANGUAGE_PREFERENCE, languagePref);


        try {
            startActivityForResult(intent, VOICE_RECOGNITION_REQUEST_CODE);
            //txtInput.setText("");
        } catch (ActivityNotFoundException a) {
            Toast t = Toast.makeText(getApplicationContext(),
                    "Ops! Your device doesn't support Speech to Text",
                    Toast.LENGTH_SHORT);
            t.show();
        }


    }

    public void initActionBar(ActionBar supportActionBar) {
        final ViewGroup actionBarLayout = (ViewGroup) getLayoutInflater().inflate(
                R.layout.custom_actiobar, null);

        // Set up ActionBar
        supportActionBar.setDisplayShowHomeEnabled(true);
        supportActionBar.setDisplayShowTitleEnabled(false);
        supportActionBar.setDisplayShowCustomEnabled(true);
        //supportActionBar.setDisplayHomeAsUpEnabled(true);
        //supportActionBar.setHomeAsUpIndicator(R.drawable.back_arrow_3);
        supportActionBar.setCustomView(actionBarLayout);
        supportActionBar.setElevation(0);
        // customization
        //supportActionBar.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#F48744")));
        supportActionBar.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#453FF0")));

        //supportActionBar.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#999999")));
        TextView actionBarTitle = (TextView) findViewById(R.id.textView14);
        actionBarTitle.setText("NAV Bot");
        //actionBarTitle.setTypeface(actionBarTitleFont);
    }


    void speakeBengali(String text) {
        taskTextToSpech task = new taskTextToSpech();
        task.textToSpech = text;


        if (Build.VERSION.SDK_INT >= 11) {
            task.executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR);
        } else
            task.execute();

    }

    class taskTextToSpech extends AsyncTask {
        String textToSpech;

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            //btnSpeak.setVisibility(View.GONE);
            txtResponse.setText("");
            dialog.setMessage("প্রসেসিং হচ্ছে...");
            dialog.show();
            isResponseDone = false;
            btnSpeak.setBackgroundResource(R.drawable.mic_red_big);
        }

        @Override
        protected Object doInBackground(Object[] params) {
            try {
                HttpURLConnection connection = null;
                try {
                    if (mediaPlayer != null)
                        mediaPlayer.release();
                    String URL_PREFIX = "https://translate.google.com.vn/translate_tts?ie=UTF-8&q=";
                    String URL_ENCODER_UTF_8 = "UTF-8";
                    String URL_POSTFIX = "&tl=en&client=tw-ob";

                    TARGET_URL = URL_PREFIX + URLEncoder.encode(textToSpech, URL_ENCODER_UTF_8) + URL_POSTFIX;
                    //mediaPlayer.release();
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (connection != null) {
                        connection.disconnect();
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return null;
        }

        @Override
        protected void onPostExecute(Object o) {
            super.onPostExecute(o);
            try {

                mediaPlayer = new MediaPlayer();
                mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
                mediaPlayer.setDataSource(TARGET_URL);
                mediaPlayer.prepare(); // might take long! (for buffering, etc)
                if (dialog.isShowing()) {
                    dialog.dismiss();
                }
                txtResponse.setText(textToSpech);
                mediaPlayer.start();
                mediaPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
                    @Override
                    public void onCompletion(MediaPlayer mp) {

                        mediaPlayer.release();
                        //btnSpeak.setVisibility(View.VISIBLE);

                            isResponseDone = true;
                            btnSpeak.setBackgroundResource(R.drawable.mic_white_big);



                    }
                });

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @TargetApi(Build.VERSION_CODES.M)
    public void getPermission() {
        // 1) Use the support library version ContextCompat.checkSelfPermission(...) to avoid
        // checking the build version since Context.checkSelfPermission(...) is only available
        // in Marshmallow
        // 2) Always check for permission (even if permission has already been granted)
        // since the user can revoke permissions at any time through Settings
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.READ_CONTACTS)
                != PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(this, Manifest.permission.CALL_PHONE)
                        != PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(this, Manifest.permission.SEND_SMS)
                        != PackageManager.PERMISSION_GRANTED


                ) {

            // The permission is NOT already granted.
            // Check if the user has been asked about this permission already and denied
            // it. If so, we want to give more explanation about why the permission is needed.
            if (shouldShowRequestPermissionRationale(
                    Manifest.permission.READ_CONTACTS)) {
                // Show our own UI to explain to the user why we need to read the contacts
                // before actually requesting the permission and showing the default UI
            }

            // Fire off an async request to actually get the permission
            // This will show the standard permission request dialog UI
            ActivityCompat.requestPermissions(MainActivity.this, new String[]{Manifest.permission.READ_CONTACTS, Manifest.permission.CALL_PHONE
                            , Manifest.permission.SEND_SMS},
                    WRITE_EXTERNAL_STORAGE_PERMISSIONS_REQUEST);


            /*requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},
                    WRITE_EXTERNAL_STORAGE_PERMISSIONS_REQUEST);*/
        } else {

        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode,
                                           @NonNull String permissions[],
                                           @NonNull int[] grantResults) {
        //super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        // Make sure it's our original WRITE_EXTERNAL_STORAGE request
        if (requestCode == WRITE_EXTERNAL_STORAGE_PERMISSIONS_REQUEST) {
            if (grantResults.length > 0 &&
                    grantResults[0] == PackageManager.PERMISSION_GRANTED &&
                    grantResults[1] == PackageManager.PERMISSION_GRANTED &&
                    grantResults[2] == PackageManager.PERMISSION_GRANTED
                    ) {
                Toast.makeText(this, "Permission granted .", Toast.LENGTH_SHORT).show();
                //textToSpecchGeneration("  স্বাগতম ,দয়া করে মাইক্রোফোন চেপে ডায়াল বা টেক্সট করার নির্দেশনা দিন");


                SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
                SharedPreferences.Editor editor = preferences.edit();
                editor.putString("installed", "yes");
                editor.commit();


            } else {
                Toast.makeText(this, "As the permission is denied, you cannot do anything!", Toast.LENGTH_LONG).show();
            }
        } /*else if (requestCode == CALL_PERMISSIONS_REQUEST) {
            if (grantResults.length > 0 &&
                    grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                Toast.makeText(this, "call Permission granted!", Toast.LENGTH_SHORT).show();
                *//*Intent intent = new Intent(Intent.ACTION_CALL);
                intent.setData(Uri.parse("tel:+88029033442"));
                getApplicationContext().startActivity(intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK));*//*
            } else {
                Toast.makeText(this, "Permission denied!", Toast.LENGTH_SHORT).show();
            }
        }*/ else {
            super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        }


    }


    private static final int CALL_PERMISSIONS_REQUEST = 12345;


    @Override
    protected void onStop() {
        super.onStop();
        if (mediaPlayer != null) {
            //mediaPlayer.stop();
            mediaPlayer.release();
        }
    }

    @Override
    public void onDestroy() {

        if (mediaPlayer != null)
            mediaPlayer.release();
        super.onDestroy();
    }

    public void layoutSalaryVatBarChart() {

        LayoutInflater factory = LayoutInflater.from(MainActivity.this);

        final View f = factory.inflate(R.layout.layout_bar_chart, null);


        final BarChart barChart = (BarChart) f.findViewById(R.id.chart);


        String[] dates = {"February", "March", "April"};//Constants.RiskTrend.dateList.toArray(new String[Constants.RiskTrend.dateList.size()]);
        String[] Scors = {"9055", "2451", "2934"};//Constants.RiskTrend.scoreList.toArray(new String[Constants.RiskTrend.scoreList.size()]);
        int n = 0;

        ArrayList<BarEntry> entries = new ArrayList<>();
        for (int i = 0; i < Scors.length; i++) {
            entries.add(new BarEntry(Float.parseFloat(Scors[i]), i));
        }

        BarDataSet dataset = new BarDataSet(entries, "");

        dataset.setColors(ColorTemplate.COLORFUL_COLORS);

        ArrayList<String> labels = new ArrayList<String>();

        for (int i = 0; i < dates.length; i++) {
            labels.add(dates[i]);
        }


        BarData data = new BarData(labels, dataset);
        barChart.setData(data);
        barChart.setDescription("");
        barChart.animateY(2000);
        layOut1.removeAllViews();
        layOut1.setVisibility(View.VISIBLE);
        layOut1.addView(f);
    }

    public void layoutSalaryBarChart() {

        LayoutInflater factory = LayoutInflater.from(MainActivity.this);

        final View f = factory.inflate(R.layout.layout_bar_chart, null);


        final BarChart barChart = (BarChart) f.findViewById(R.id.chart);


        String[] dates = {"February", "March", "April"};//Constants.RiskTrend.dateList.toArray(new String[Constants.RiskTrend.dateList.size()]);
        String[] Scors = {"6187893", "6187893", "6187893"};//Constants.RiskTrend.scoreList.toArray(new String[Constants.RiskTrend.scoreList.size()]);
        int n = 0;

        ArrayList<BarEntry> entries = new ArrayList<>();
        for (int i = 0; i < Scors.length; i++) {
            entries.add(new BarEntry(Float.parseFloat(Scors[i]), i));
        }

        BarDataSet dataset = new BarDataSet(entries, "");

        dataset.setColors(ColorTemplate.COLORFUL_COLORS);

        ArrayList<String> labels = new ArrayList<String>();

        for (int i = 0; i < dates.length; i++) {
            labels.add(dates[i]);
        }


        BarData data = new BarData(labels, dataset);
        barChart.setData(data);
        barChart.setDescription("");
        barChart.animateY(2000);
        layOut1.removeAllViews();
        layOut1.setVisibility(View.VISIBLE);
        layOut1.addView(f);
    }

    public void layoutYearlyLeaveBarChart() {

        LayoutInflater factory = LayoutInflater.from(MainActivity.this);

        final View f = factory.inflate(R.layout.layout_bar_chart, null);


        final BarChart barChart = (BarChart) f.findViewById(R.id.chart);


        String[] dates = {"Nipu", "Sadiq", "Yeasir"};//Constants.RiskTrend.dateList.toArray(new String[Constants.RiskTrend.dateList.size()]);
        String[] Scors = {"14", "18", "19"};//Constants.RiskTrend.scoreList.toArray(new String[Constants.RiskTrend.scoreList.size()]);
        int n = 0;

        ArrayList<BarEntry> entries = new ArrayList<>();
        for (int i = 0; i < Scors.length; i++) {
            entries.add(new BarEntry(Float.parseFloat(Scors[i]), i));
        }

        BarDataSet dataset = new BarDataSet(entries, "");

        dataset.setColors(ColorTemplate.COLORFUL_COLORS);

        ArrayList<String> labels = new ArrayList<String>();

        for (int i = 0; i < dates.length; i++) {
            labels.add(dates[i]);
        }


        BarData data = new BarData(labels, dataset);
        barChart.setData(data);
        barChart.setDescription("");
        barChart.animateY(2000);
        layOut1.removeAllViews();
        layOut1.setVisibility(View.VISIBLE);
        layOut1.addView(f);
    }

    public void layoutMonthlyLeaveBarChart() {

        LayoutInflater factory = LayoutInflater.from(MainActivity.this);

        final View f = factory.inflate(R.layout.layout_bar_chart, null);


        final BarChart barChart = (BarChart) f.findViewById(R.id.chart);


        String[] dates = {"Nipu", "Uzzal", "Yeasir"};//Constants.RiskTrend.dateList.toArray(new String[Constants.RiskTrend.dateList.size()]);
        String[] Scors = {"14", "8", "10"};//Constants.RiskTrend.scoreList.toArray(new String[Constants.RiskTrend.scoreList.size()]);
        int n = 0;

        ArrayList<BarEntry> entries = new ArrayList<>();
        for (int i = 0; i < Scors.length; i++) {
            entries.add(new BarEntry(Float.parseFloat(Scors[i]), i));
        }

        BarDataSet dataset = new BarDataSet(entries, "");

        dataset.setColors(ColorTemplate.COLORFUL_COLORS);

        ArrayList<String> labels = new ArrayList<String>();

        for (int i = 0; i < dates.length; i++) {
            labels.add(dates[i]);
        }


        BarData data = new BarData(labels, dataset);
        barChart.setData(data);
        barChart.setDescription("");
        barChart.animateY(2000);
        layOut1.removeAllViews();
        layOut1.setVisibility(View.VISIBLE);
        layOut1.addView(f);
    }

    public void layoutOrderBarChart() {

        LayoutInflater factory = LayoutInflater.from(MainActivity.this);

        final View f = factory.inflate(R.layout.layout_bar_chart, null);


        final BarChart barChart = (BarChart) f.findViewById(R.id.chart);


        String[] dates = {"Walton", "China Bazar"};//Constants.RiskTrend.dateList.toArray(new String[Constants.RiskTrend.dateList.size()]);
        String[] Scors = {"2", "1"};//Constants.RiskTrend.scoreList.toArray(new String[Constants.RiskTrend.scoreList.size()]);
        int n = 0;

        ArrayList<BarEntry> entries = new ArrayList<>();
        for (int i = 0; i < Scors.length; i++) {
            entries.add(new BarEntry(Float.parseFloat(Scors[i]), i));
        }

        BarDataSet dataset = new BarDataSet(entries, "");

        dataset.setColors(ColorTemplate.COLORFUL_COLORS);

        ArrayList<String> labels = new ArrayList<String>();

        for (int i = 0; i < dates.length; i++) {
            labels.add(dates[i]);
        }


        BarData data = new BarData(labels, dataset);
        barChart.setData(data);
        barChart.setDescription("");
        barChart.animateY(2000);
        layOut1.removeAllViews();
        layOut1.setVisibility(View.VISIBLE);
        layOut1.addView(f);
    }

    public void layoutVATPiChart() {


        LayoutInflater factory = LayoutInflater.from(MainActivity.this);

        final View f = factory.inflate(R.layout.layout_pi_chart, null);


        final PieChart pieChart = (PieChart) f.findViewById(R.id.chart);

        ArrayList<Entry> entries = new ArrayList<>();
        entries.add(new Entry(13f, 0));
        entries.add(new Entry(87f, 1));

        PieDataSet dataset = new PieDataSet(entries, "");

        ArrayList<String> labels = new ArrayList<String>();
        labels.add("Paid");
        labels.add("Unpaid");


        PieData data = new PieData(labels, dataset);
        dataset.setColors(ColorTemplate.COLORFUL_COLORS); //
        pieChart.setDescription("VAT");
        pieChart.setData(data);

        pieChart.animateY(5000);

        layOut1.removeAllViews();
        layOut1.setVisibility(View.VISIBLE);
        layOut1.addView(f);
    }

    public void layoutAITPiChart() {


        LayoutInflater factory = LayoutInflater.from(MainActivity.this);

        final View f = factory.inflate(R.layout.layout_pi_chart, null);


        final PieChart pieChart = (PieChart) f.findViewById(R.id.chart);

        ArrayList<Entry> entries = new ArrayList<>();
        entries.add(new Entry(100f, 0));
        entries.add(new Entry(0f, 1));

        PieDataSet dataset = new PieDataSet(entries, "");

        ArrayList<String> labels = new ArrayList<String>();
        labels.add("Unpaid");
        labels.add("Paid");


        PieData data = new PieData(labels, dataset);
        dataset.setColors(ColorTemplate.COLORFUL_COLORS); //
        pieChart.setDescription("AIT");
        pieChart.setData(data);

        pieChart.animateY(5000);

        layOut1.removeAllViews();
        layOut1.setVisibility(View.VISIBLE);
        layOut1.addView(f);
    }

    public void layoutRequisitionPiChart() {


        LayoutInflater factory = LayoutInflater.from(MainActivity.this);

        final View f = factory.inflate(R.layout.layout_pi_chart, null);


        final PieChart pieChart = (PieChart) f.findViewById(R.id.chart);

        ArrayList<Entry> entries = new ArrayList<>();
        entries.add(new Entry(60f, 0));
        entries.add(new Entry(40f, 1));

        PieDataSet dataset = new PieDataSet(entries, "");

        ArrayList<String> labels = new ArrayList<String>();
        labels.add("Released");
        labels.add("Open");


        PieData data = new PieData(labels, dataset);
        dataset.setColors(ColorTemplate.COLORFUL_COLORS); //
        pieChart.setDescription("Requisition");
        pieChart.setData(data);

        pieChart.animateY(5000);

        layOut1.removeAllViews();
        layOut1.setVisibility(View.VISIBLE);
        layOut1.addView(f);
    }

    class taskGetoDataServiceResult extends AsyncTask<String, Integer, String> {


        String URL;
        String DataDesc;

        private ProgressDialog pDialog;

        public taskGetoDataServiceResult(String url,String dataDesc) {
            this.URL = url;
            this.DataDesc =dataDesc;
        }

        @Override
        protected String doInBackground(String... strings) {
            if (URL!="") {
                OkHttpClient client = new OkHttpClient.Builder()
                        .authenticator(new NTLMAuthenticator("SUPER_ADMIN", "technitid123@"))
//                        .authenticator(new NTLMAuthenticator("AHASAN", "ahasanbu"))
                        // .some other init here if necessary
                        .build();
                Request request = new Request.Builder()
                        .url(URL)
                        .build();

                try (Response response = client.newCall(request).execute()) {
                    return response.body().string();

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return null;
        }

        @Override
        protected void onPreExecute() {
            super.onPreExecute();

        }
        public String getMonth(int month) {
            return new DateFormatSymbols().getMonths()[month-1];
        }

        @Override
        protected void onPostExecute(String result) {
            String[] Titles = null;
            String[] Figures = null;
            try {

                switch (DataDesc) {
                    case "MonthlyTotalTDS":
                        oDataMonthlyTotalTDSContext taxInfo = onResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<MonthlyTotalTDSInfo> list = taxInfo.getValues();
                        String SpeakText = "";
                        for (MonthlyTotalTDSInfo info : list) {
                            SpeakText += (info.getMonth() + " " + info.getYear() + " is " + info.getSum_TDS() + ". And ");
                        }
                        SpeakText = SpeakText.substring(0, SpeakText.length() - 4);
                        speakeBengali("The total TDS for the month of " + SpeakText);

                        //Creating Array string for BarChart
                        String monthString = "";
                        for (MonthlyTotalTDSInfo info : list) {
                            monthString += info.getMonth() + ',';
                        }
                        monthString = monthString.substring(0, monthString.length() - 1);
                        String TDSString = "";
                        for (MonthlyTotalTDSInfo info : list) {
                            TDSString += info.getSum_TDS() + ',';
                        }
                        TDSString = TDSString.substring(0, TDSString.length() - 1);

                        String[] dates = monthString.split(",");
                        String[] Scors = TDSString.split(",");

                        layoutEmployeeTDSBarChart(dates, Scors);
                        super.onPostExecute(result);
                        break;
                    case "JobPlanningInfo":
                        oDataJobPlanningContext jobPlanningInfo = onJobPlanningResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<JobPlanningInfo> jobList = jobPlanningInfo.getValues();
                        String SpeakJobText = "The total cost is ";
                        double totJobCost = 0;
                        for (JobPlanningInfo info : jobList) {

                            totJobCost += info.getTotal_Cost();
                        }
                        SpeakText = SpeakJobText + totJobCost;
                        speakeBengali(SpeakText);
                        super.onPostExecute(result);
                        break;
                    case "JobBudget":
//                        oDataJobPlanningContext jobPlanningInfo = onResponse(result.toString().replace("@odata.context", "odataContext").toString());
//                        List<JobPlanningInfo> jobList = jobPlanningInfo.getValues();
//                        String SpeakJobText = "The total";
//                        double totJobCost = 0;
//                        for (JobPlanningInfo info : jobList) {
//
//                            totJobCost+=info.getTotal_Cost();
//                        }
//                        SpeakText = SpeakJobText.substring(0, SpeakJobText.length() - 4);
                        speakeBengali("The total budget for the HSBC Banani Complex is 10863500  and the usage is 6072900. The total budget for the EXIM Tower is 9475550 and the usage is 8773500.");

                        //Creating Array string for BarChart
                        String jobBudgetString = "10863500,9475550";
//                        for (TAXInfo info : list) {
//                            monthString += info.getMonth() + ',';
//                        }
//                        monthString = monthString.substring(0, monthString.length() - 1);
                        String costBudgetString = "6072900,8773500";
//                        for (TAXInfo info : list) {
//                            TDSString += info.getSum_TDS() + ',';
//                        }
//                        TDSString = TDSString.substring(0, TDSString.length() - 1);

                        String[] jobBudgetNo = jobBudgetString.split(",");
                        String[] totBudgetCost = costBudgetString.split(",");

                        layoutEmployeeTDSBarChart(jobBudgetNo, totBudgetCost);
                        super.onPostExecute(result);
                        break;
                    case "MonthlyTotalSalary":
                        oDataMonthlyTotalSalaryContext monthlyTotalSalaryInfo = onMonthlyTotalSalaryResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<MonthlyTotalSalaryInfo> listSalaryInfo = monthlyTotalSalaryInfo.getValues();
                        String SpeakMonthlyTotalSalaryText = "";
                        for (MonthlyTotalSalaryInfo info : listSalaryInfo) {
                            SpeakMonthlyTotalSalaryText += (info.getMonth() + " " + info.getYear() + " is " + info.getSum_Net_Salary() + ". And ");
                        }
                        SpeakText = SpeakMonthlyTotalSalaryText.substring(0, SpeakMonthlyTotalSalaryText.length() - 4);
                        speakeBengali("The total Salary for the month of " + SpeakText);

                        //Creating Array string for BarChart
                        String strSalaryMonth = "";
                        for (MonthlyTotalSalaryInfo info : listSalaryInfo) {
                            strSalaryMonth += info.getMonth() + ',';
                        }
                        strSalaryMonth = strSalaryMonth.substring(0, strSalaryMonth.length() - 1);
                        String strSalaryInfo = "";
                        for (MonthlyTotalSalaryInfo info : listSalaryInfo) {
                            strSalaryInfo += info.getSum_Net_Salary() + ',';
                        }
                        strSalaryInfo = strSalaryInfo.substring(0, strSalaryInfo.length() - 1);

                        String[] months = strSalaryMonth.split(",");
                        String[] Salaries = strSalaryInfo.split(",");

                        layoutEmployeeTDSBarChart(months, Salaries);
                        super.onPostExecute(result);
                        break;
                    case "MonthlyTotalVAT":
                        oDataMonthlyTotalVATContext monthlyTotalVATInfo = onMonthlyTotalVATInfoResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<MonthlyTotalVATInfo> listMonthlyTotalVAT = monthlyTotalVATInfo.getValues();
                        String SpeakmonthlyTotalVATInfoText = "";
                        for (MonthlyTotalVATInfo info : listMonthlyTotalVAT) {
                            SpeakmonthlyTotalVATInfoText += (info.getMonth() + " " + info.getYear() + " is " + info.getSum_VAT() + ". And ");
                        }
                        SpeakText = SpeakmonthlyTotalVATInfoText.substring(0, SpeakmonthlyTotalVATInfoText.length() - 4);
                        speakeBengali("The total VAT for the month of " + SpeakText);

                        //Creating Array string for BarChart
                        String strVATMonth = "";
                        for (MonthlyTotalVATInfo info : listMonthlyTotalVAT) {
                            strVATMonth += info.getMonth() + ',';
                        }
                        strVATMonth = strVATMonth.substring(0, strVATMonth.length() - 1);
                        String strrVATInfo = "";
                        for (MonthlyTotalVATInfo info : listMonthlyTotalVAT) {
                            strrVATInfo += info.getSum_VAT() + ',';
                        }
                        strrVATInfo = strrVATInfo.substring(0, strrVATInfo.length() - 1);

                        String[] VATmonths = strVATMonth.split(",");
                        String[] VATFigures = strrVATInfo.split(",");

                        layoutEmployeeTDSBarChart(VATmonths, VATFigures);
                        super.onPostExecute(result);
                        break;
                    case "MonthlyLeaveTaken":
                        oDataMonthlyLeaveTakenContext monthlyLeaveTakenInfo = onMonthlyLeaveTakenInfoResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<MonthlyLeaveTakenInfo> listMonthlyLeaveTaken = monthlyLeaveTakenInfo.getValues();
                        String SpeakmonthlyLeaveTakenInfoText = "";
                        for (MonthlyLeaveTakenInfo info : listMonthlyLeaveTaken) {
                            SpeakmonthlyLeaveTakenInfoText += (info.getFirst_Name() + " for the month of " + getMonth(Integer.parseInt(info.getMonth_From_Date())) + " is " + info.getSum_Quantity() + ". And ");
                        }

                        if (SpeakmonthlyLeaveTakenInfoText.length() > 0) {
                            SpeakText = "The total Leave taken by " + SpeakmonthlyLeaveTakenInfoText.substring(0, SpeakmonthlyLeaveTakenInfoText.length() - 4);
                        } else {
                            SpeakText = "No data found from server.";
                        }

                        speakeBengali(SpeakText);

                        //Creating Array string for BarChart
                        String strLeaveTakenMonth = "";
                        for (MonthlyLeaveTakenInfo info : listMonthlyLeaveTaken) {
                            strLeaveTakenMonth += info.getMonth_From_Date() + ',';
                        }
                        if (strLeaveTakenMonth.length() > 0) {
                            strLeaveTakenMonth = strLeaveTakenMonth.substring(0, strLeaveTakenMonth.length() - 1);
                        }
                        String strLeaveTakenInfo = "";
                        for (MonthlyLeaveTakenInfo info : listMonthlyLeaveTaken) {
                            strLeaveTakenInfo += info.getSum_Quantity() + ',';
                        }
                        if (strLeaveTakenInfo.length() > 0) {
                            strLeaveTakenInfo = strLeaveTakenInfo.substring(0, strLeaveTakenInfo.length() - 1);
                        }
                        String[] strLeaveTakenmonths = strLeaveTakenMonth.split(",");
                        String[] LeaveTakenFigures = strLeaveTakenInfo.split(",");
                        if (strLeaveTakenInfo.length() > 0) {
                            layoutEmployeeTDSBarChart(strLeaveTakenmonths, LeaveTakenFigures);
                        }
                        super.onPostExecute(result);
                        break;
                    case "YearlyLeaveTaken":
                        oDataYearlyLeaveTakenContext yearlyLeaveTakenInfo = onYearlyLeaveTakenInfoResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<YearlyLeaveTakenInfo> listYearlyLeaveTaken = yearlyLeaveTakenInfo.getValues();
                        String SpeakYearlyLeaveTakenInfoText = "";
                        for (YearlyLeaveTakenInfo info : listYearlyLeaveTaken) {
                            SpeakYearlyLeaveTakenInfoText += (info.getEmployee_Last_Name() + " is " + info.getSum_Leave_Taken() + " for year " + info.getYear() + ". And ");
                        }
                        SpeakText = SpeakYearlyLeaveTakenInfoText.substring(0, SpeakYearlyLeaveTakenInfoText.length() - 4);
                        speakeBengali("The total yearly Leave taken by Mr.  " + SpeakText);

                        //Creating Array string for BarChart
                        String strLeaveTakenYear = "";
                        for (YearlyLeaveTakenInfo info : listYearlyLeaveTaken) {
                            strLeaveTakenYear += info.getYear() + ',';
                        }
                        strLeaveTakenYear = strLeaveTakenYear.substring(0, strLeaveTakenYear.length() - 1);
                        String strLeaveTakenYearlyInfo = "";
                        for (YearlyLeaveTakenInfo info : listYearlyLeaveTaken) {
                            strLeaveTakenYearlyInfo += info.getSum_Leave_Taken() + ',';
                        }
                        strLeaveTakenYearlyInfo = strLeaveTakenYearlyInfo.substring(0, strLeaveTakenYearlyInfo.length() - 1);

                        String[] strLeaveTakenYears = strLeaveTakenYear.split(",");
                        String[] LeaveTakenYearlyFigures = strLeaveTakenYearlyInfo.split(",");

                        layoutEmployeeTDSBarChart(strLeaveTakenYears, LeaveTakenYearlyFigures);
                        super.onPostExecute(result);
                        break;
                    case "JobCodeWiseMonthlyTotalSalary":
                        oDataMonthlyTotalSalaryAndTDSContext monthlyTotalSalaryAndTDSInfo = onMonthlyTotalSalaryAndTDSInfoResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<MonthlyTotalSalaryAndTDSInfo> listJobCodeWiseMonthlyTotalSalary = monthlyTotalSalaryAndTDSInfo.getValues();

                        // Job Code Wise Monthly Total Salary Info
                        String SpeakMonthlyTotalSalaryInfoText = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalSalary) {
                            if (info.getStatus().length() > 0) {
                                SpeakMonthlyTotalSalaryInfoText += (info.getStatus() + " Employee for the month of " + info.getMonth() + " " + info.getYear() + " is " + info.getSum_Net_Pay() + ". And ");
                            }
                        }
                        if (SpeakMonthlyTotalSalaryInfoText.length() > 0) {
                            SpeakText = "The total salary of " + SpeakMonthlyTotalSalaryInfoText.substring(0, SpeakMonthlyTotalSalaryInfoText.length() - 4);
                        } else {
                            SpeakText = "No data found from server.";
                        }

                        speakeBengali(SpeakText);
//                        speakeBengali("The total salary of " );

                        //Creating Array string for BarChart
                        String strJobCodeWiseMonthlyTotalSalaryTitle = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalSalary) {
                            if (info.getStatus().length() > 0) {
                                strJobCodeWiseMonthlyTotalSalaryTitle += info.getStatus().toLowerCase() + ' ' + info.getMonth().toLowerCase() + ' ' + info.getYear().toLowerCase() + ',';
                            }
                        }
                        if (strJobCodeWiseMonthlyTotalSalaryTitle.length() > 0) {
                            strJobCodeWiseMonthlyTotalSalaryTitle = strJobCodeWiseMonthlyTotalSalaryTitle.substring(0, strJobCodeWiseMonthlyTotalSalaryTitle.length() - 1);
                        }

                        String strJobCodeWiseMonthlyTotalSalary = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalSalary) {
                            if (info.getStatus().length() > 0) {
                                strJobCodeWiseMonthlyTotalSalary += info.getSum_Net_Pay() + ',';
                            }
                        }
                        if (strJobCodeWiseMonthlyTotalSalary.length() > 0) {
                            strJobCodeWiseMonthlyTotalSalary = strJobCodeWiseMonthlyTotalSalary.substring(0, strJobCodeWiseMonthlyTotalSalary.length() - 1);
                        }

                        String[] strJobCodeWiseTotalSalaryTitle = strJobCodeWiseMonthlyTotalSalaryTitle.split(",");
                        String[] strJobCodeWiseTotalSalaryFigures = strJobCodeWiseMonthlyTotalSalary.split(",");

                        if (strJobCodeWiseMonthlyTotalSalary.length() > 0) {
                            layoutEmployeeTDSBarChart(strJobCodeWiseTotalSalaryTitle, strJobCodeWiseTotalSalaryFigures);
                        }
                        super.onPostExecute(result);
                        break;
                    case "JobCodeWiseMonthlyTotalTDS":
                        oDataMonthlyTotalSalaryAndTDSContext monthlyTotalTDSInfo = onMonthlyTotalSalaryAndTDSInfoResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<MonthlyTotalSalaryAndTDSInfo> listJobCodeWiseMonthlyTotalTDS = monthlyTotalTDSInfo.getValues();

                        // Job Code Wise Monthly Total TDS Info
                        String SpeakMonthlyTotalTDSInfoText = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalTDS) {
                            if (info.getStatus().length() > 0) {
                                SpeakMonthlyTotalTDSInfoText += (info.getStatus() + " Employee for the month of " + info.getMonth() + " " + info.getYear() + " is " + info.getSum_Total_TDS() + ". And ");
                            }
                        }

                        if (SpeakMonthlyTotalTDSInfoText.length() > 0) {
                            SpeakText = "The total TDS of " + SpeakMonthlyTotalTDSInfoText.substring(0, SpeakMonthlyTotalTDSInfoText.length() - 4);
                        } else {
                            SpeakText = "No data found from server.";
                        }

                        speakeBengali(SpeakText);

                        //Creating Array string for BarChart
                        String strJobCodeWiseMonthlyTotalTDSTitle = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalTDS) {
                            if (info.getStatus().length()> 0) {
                                strJobCodeWiseMonthlyTotalTDSTitle += info.getStatus().toLowerCase() + ' ' + info.getMonth().toLowerCase()+" "+ info.getYear().toLowerCase() + ',';
                            }
                        }
                        if (strJobCodeWiseMonthlyTotalTDSTitle.length() > 0) {
                            strJobCodeWiseMonthlyTotalTDSTitle = strJobCodeWiseMonthlyTotalTDSTitle.substring(0, strJobCodeWiseMonthlyTotalTDSTitle.length() - 1);
                        }
                        String strJobCodeWiseMonthlyTotalSalaryAndTDS = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalTDS) {
                            if (info.getStatus().length()> 0) {
                                strJobCodeWiseMonthlyTotalSalaryAndTDS += info.getSum_Total_TDS() + ',';
                            }
                        }

                        if (strJobCodeWiseMonthlyTotalSalaryAndTDS.length() > 0) {
                            strJobCodeWiseMonthlyTotalSalaryAndTDS = strJobCodeWiseMonthlyTotalSalaryAndTDS.substring(0, strJobCodeWiseMonthlyTotalSalaryAndTDS.length() - 1);
                        }
                        String[] strJobCodeWiseTotalTDSTitle = strJobCodeWiseMonthlyTotalTDSTitle.split(",");
                        String[] strJobCodeWiseTotalTDSFigures = strJobCodeWiseMonthlyTotalSalaryAndTDS.split(",");

                        if (strJobCodeWiseMonthlyTotalSalaryAndTDS.length() > 0) {
                            layoutEmployeeTDSBarChart(strJobCodeWiseTotalTDSTitle, strJobCodeWiseTotalTDSFigures);
                        }
                        super.onPostExecute(result);
                        break;
                    case "PBITotalEmployeeByDept":
                        oDataPBITotalEmployeeByDeptContext totalEmployeeByDept = onPBITotalEmployeeByDeptResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<PBITotalEmployeeByDept> listTotalEmployeeByDept = totalEmployeeByDept.getValues();
                        String SpeakTotalEmployeeByDeptInfoText = "";
                        for (PBITotalEmployeeByDept info : listTotalEmployeeByDept) {
                            if (info.getCount_().length()> 0) {
                                SpeakTotalEmployeeByDeptInfoText += (info.getDepartment() + " department is " + info.getCount_() + ". And ");
                            }
                        }

                        if (SpeakTotalEmployeeByDeptInfoText.length() > 0) {
                            SpeakText = "The total employee of " + SpeakTotalEmployeeByDeptInfoText.substring(0, SpeakTotalEmployeeByDeptInfoText.length() - 4);
                        } else {
                            SpeakText = "No data found from server.";
                        }

                        speakeBengali(SpeakText);


                        //Creating Array string for BarChart
                        String strDeptName = "";
                        for (PBITotalEmployeeByDept info : listTotalEmployeeByDept) {
                            if (info.getCount_().length()> 0) {
                                strDeptName += info.getDepartment() + ',';
                            }
                        }
                        if (strDeptName.length() > 0) {
                            strDeptName = strDeptName.substring(0, strDeptName.length() - 1);
                        }
                        String strDeptCount = "";
                        for (PBITotalEmployeeByDept info : listTotalEmployeeByDept) {
                            if (info.getCount_().length()> 0) {
                                strDeptCount += info.getCount_() + ',';
                            }
                        }
                        if (strDeptCount.length() > 0) {
                            strDeptCount = strDeptCount.substring(0, strDeptCount.length() - 1);
                        }
                        Titles = null;
                        Figures = null;
                        Titles = strDeptName.split(",");
                        Figures = strDeptCount.split(",");

                        if (strDeptCount.length() > 0) {
                            layoutEmployeeTDSBarChart(Titles, Figures);
                        }
                        super.onPostExecute(result);
                        break;
                    case "PBITotalEmployeeByGender":
                        oDataPBITotalEmployeeByGenderContext totalEmployeeByGender = onPBITotalEmployeeByGenderResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<PBITotalEmployeeByGender> listTotalEmployeeByGender = totalEmployeeByGender.getValues();
                        String SpeakTotalEmployeeByGenderInfoText = "";
                        for (PBITotalEmployeeByGender info : listTotalEmployeeByGender) {
                            if (info.getCount_().length()> 0) {
                                SpeakTotalEmployeeByGenderInfoText += (info.getGender() + " is " + info.getCount_() + ". And ");
                            }
                        }

                        if (SpeakTotalEmployeeByGenderInfoText.length() > 0) {
                            SpeakText = "The total employee of " + SpeakTotalEmployeeByGenderInfoText.substring(0, SpeakTotalEmployeeByGenderInfoText.length() - 4);
                        } else {
                            SpeakText = "No data found from server.";
                        }

                        speakeBengali(SpeakText);


                        //Creating Array string for BarChart
                        String strGenderName = "";
                        for (PBITotalEmployeeByGender info : listTotalEmployeeByGender) {
                            if (info.getCount_().length()> 0) {
                                strGenderName += info.getGender() + ',';
                            }
                        }
                        if (strGenderName.length() > 0) {
                        strGenderName = strGenderName.substring(0, strGenderName.length() - 1);
                    }
                        String strGenderCount = "";
                        for (PBITotalEmployeeByGender info : listTotalEmployeeByGender) {
                            if (info.getCount_().length()> 0) {
                                strGenderCount += info.getCount_() + ',';
                            }
                        }
                        if (strGenderCount.length() > 0) {
                            strGenderCount = strGenderCount.substring(0, strGenderCount.length() - 1);
                        }
                        Titles = null;
                        Figures = null;
                        Titles = strGenderName.split(",");
                        Figures = strGenderCount.split(",");
                        if (strGenderCount.length() > 0) {
                            layoutEmployeeTDSBarChart(Titles, Figures);
                        }
                        super.onPostExecute(result);
                        break;
                    case "JobCodeWiseMonthlyTotalBonus":
                        oDataMonthlyTotalSalaryAndTDSContext monthlyTotalBonusInfo = onMonthlyTotalSalaryAndTDSInfoResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<MonthlyTotalSalaryAndTDSInfo> listJobCodeWiseMonthlyTotalBonus = monthlyTotalBonusInfo.getValues();

                        // Job Code Wise Monthly Total Bonus Info
                        String SpeakMonthlyTotalBonusInfoText = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalBonus) {
                            if (info.getStatus().length()> 0) {
                                SpeakMonthlyTotalBonusInfoText += (info.getStatus() + " Employee for the month of " + info.getMonth()+" "+ info.getYear() + " is " + info.getSum_Total_Bonus() + ". And ");
                            }
                        }

                        if (SpeakMonthlyTotalBonusInfoText.length() > 0) {
                            SpeakText = "The total Bonus of " + SpeakMonthlyTotalBonusInfoText.substring(0, SpeakMonthlyTotalBonusInfoText.length() - 4);
                        } else {
                            SpeakText = "No data found from server.";
                        }

                        speakeBengali(SpeakText);

                        //Creating Array string for BarChart
                        String strJobCodeWiseMonthlyTotalBonusTitle = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalBonus) {
                            if (info.getStatus().length()> 0) {
                                strJobCodeWiseMonthlyTotalBonusTitle += info.getStatus().toLowerCase() + ' ' + info.getMonth().toLowerCase()+" "+ info.getYear().toLowerCase() + ',';
                            }
                        }
                        if (strJobCodeWiseMonthlyTotalBonusTitle.length() > 0) {
                            strJobCodeWiseMonthlyTotalBonusTitle = strJobCodeWiseMonthlyTotalBonusTitle.substring(0, strJobCodeWiseMonthlyTotalBonusTitle.length() - 1);
                        }
                        String strJobCodeWiseMonthlyTotalSalaryAndBonus = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalBonus) {
                            if (info.getStatus().length()> 0) {
                                strJobCodeWiseMonthlyTotalSalaryAndBonus += info.getSum_Total_Bonus() + ',';
                            }
                        }
                        if (strJobCodeWiseMonthlyTotalSalaryAndBonus.length() > 0) {
                            strJobCodeWiseMonthlyTotalSalaryAndBonus = strJobCodeWiseMonthlyTotalSalaryAndBonus.substring(0, strJobCodeWiseMonthlyTotalSalaryAndBonus.length() - 1);
                        }
                        String[] strJobCodeWiseTotalBonusTitle = strJobCodeWiseMonthlyTotalBonusTitle.split(",");
                        String[] strJobCodeWiseTotalBonusFigures = strJobCodeWiseMonthlyTotalSalaryAndBonus.split(",");
                        if (strJobCodeWiseMonthlyTotalSalaryAndBonus.length() > 0) {
                            layoutEmployeeTDSBarChart(strJobCodeWiseTotalBonusTitle, strJobCodeWiseTotalBonusFigures);
                        }
                        super.onPostExecute(result);
                        break;
                    case "JobCodeWiseMonthlyTotalAllowances":
                        oDataMonthlyTotalSalaryAndTDSContext monthlyTotalAllowancesInfo = onMonthlyTotalSalaryAndTDSInfoResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<MonthlyTotalSalaryAndTDSInfo> listJobCodeWiseMonthlyTotalAllowances = monthlyTotalAllowancesInfo.getValues();

                        // Job Code Wise Monthly Total Allowances Info
                        String SpeakMonthlyTotalAllowancesInfoText = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalAllowances) {
                            if (info.getStatus().length()> 0) {
                                SpeakMonthlyTotalAllowancesInfoText += (info.getStatus() + " Employee for the month of " + info.getMonth()+" "+ info.getYear() + " is " + info.getSum_Total_Allowances() + ". And ");
                            }
                        }

                        if (SpeakMonthlyTotalAllowancesInfoText.length() > 0) {
                            SpeakText = "The total Allowances of " + SpeakMonthlyTotalAllowancesInfoText.substring(0, SpeakMonthlyTotalAllowancesInfoText.length() - 4);
                        } else {
                            SpeakText = "No data found from server.";
                        }

                        speakeBengali(SpeakText);

                        //Creating Array string for BarChart
                        String strJobCodeWiseMonthlyTotalAllowancesTitle = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalAllowances) {
                            if (info.getStatus().length()> 0) {
                                strJobCodeWiseMonthlyTotalAllowancesTitle += info.getStatus().toLowerCase() + ' ' + info.getMonth().toLowerCase()+" "+ info.getYear().toLowerCase() + ',';
                            }
                        }
                        if (strJobCodeWiseMonthlyTotalAllowancesTitle.length() > 0) {
                            strJobCodeWiseMonthlyTotalAllowancesTitle = strJobCodeWiseMonthlyTotalAllowancesTitle.substring(0, strJobCodeWiseMonthlyTotalAllowancesTitle.length() - 1);
                        }
                        String strJobCodeWiseMonthlyTotalSalaryAndAllowances = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listJobCodeWiseMonthlyTotalAllowances) {
                            if (info.getStatus().length()> 0) {
                                strJobCodeWiseMonthlyTotalSalaryAndAllowances += info.getSum_Total_Allowances() + ',';
                            }
                        }
                        if (strJobCodeWiseMonthlyTotalSalaryAndAllowances.length() > 0) {
                            strJobCodeWiseMonthlyTotalSalaryAndAllowances = strJobCodeWiseMonthlyTotalSalaryAndAllowances.substring(0, strJobCodeWiseMonthlyTotalSalaryAndAllowances.length() - 1);
                        }
                        String[] strJobCodeWiseTotalAllowancesTitle = strJobCodeWiseMonthlyTotalAllowancesTitle.split(",");
                        String[] strJobCodeWiseTotalAllowancesFigures = strJobCodeWiseMonthlyTotalSalaryAndAllowances.split(",");
                        if (strJobCodeWiseMonthlyTotalSalaryAndAllowances.length() > 0) {
                            layoutEmployeeTDSBarChart(strJobCodeWiseTotalAllowancesTitle, strJobCodeWiseTotalAllowancesFigures);
                        }
                        super.onPostExecute(result);
                        break;
                    case "JobCodeWiseMonthlyTotalDeduct":
                        oDataMonthlyTotalSalaryAndTDSContext jobCodeWiseMonthlyTotalDeductInfo = onMonthlyTotalSalaryAndTDSInfoResponse(result.toString().replace("@odata.context", "odataContext").toString());
                        List<MonthlyTotalSalaryAndTDSInfo> listjobCodeWiseMonthlyTotalDeduct = jobCodeWiseMonthlyTotalDeductInfo.getValues();


                        // Job Code Wise Monthly Total Deduct Info
                        String SpeakJobCodeWiseMonthlyTotalDeductInfoText = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listjobCodeWiseMonthlyTotalDeduct) {
                            if (info.getStatus().length()> 0) {
                                SpeakJobCodeWiseMonthlyTotalDeductInfoText += (info.getStatus() + " employee for the month of " + info.getMonth().toLowerCase()+" "+ info.getYear().toLowerCase() + " is " + info.getSum_Total_Deductions() + ". And ");
                            }
                        }

                        if (SpeakJobCodeWiseMonthlyTotalDeductInfoText.length() > 0) {
                            SpeakText = "The total Deduction of " + SpeakJobCodeWiseMonthlyTotalDeductInfoText.substring(0, SpeakJobCodeWiseMonthlyTotalDeductInfoText.length() - 4);
                        } else {
                            SpeakText = "No data found from server.";
                        }

                        speakeBengali(SpeakText);

                        //Creating Array string for BarChart
                        String strJobCodeWiseMonthlyTotalDeductYear = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listjobCodeWiseMonthlyTotalDeduct) {
                            if (info.getStatus().length()> 0) {
                                strJobCodeWiseMonthlyTotalDeductYear += info.getStatus().toLowerCase() + ' ' + info.getMonth().toLowerCase()+" "+ info.getYear().toLowerCase() + ',';
                            }
                        }
                        if (strJobCodeWiseMonthlyTotalDeductYear.length() > 0) {
                            strJobCodeWiseMonthlyTotalDeductYear = strJobCodeWiseMonthlyTotalDeductYear.substring(0, strJobCodeWiseMonthlyTotalDeductYear.length() - 1);
                        }
                        String strJobCodeWiseMonthlyTotalDeductInfo = "";
                        for (MonthlyTotalSalaryAndTDSInfo info : listjobCodeWiseMonthlyTotalDeduct) {
                            if (info.getStatus().length()> 0) {
                                strJobCodeWiseMonthlyTotalDeductInfo += info.getSum_Total_Deductions() + ',';
                            }
                        }
                        if (strJobCodeWiseMonthlyTotalDeductInfo.length() > 0) {
                            strJobCodeWiseMonthlyTotalDeductInfo = strJobCodeWiseMonthlyTotalDeductInfo.substring(0, strJobCodeWiseMonthlyTotalDeductInfo.length() - 1);
                        }
                        String[] strJobCodeWiseTotalDeductYears = strJobCodeWiseMonthlyTotalDeductYear.split(",");
                        String[] JobCodeWiseTotalDeductYearlyFigures = strJobCodeWiseMonthlyTotalDeductInfo.split(",");
                        if (strJobCodeWiseMonthlyTotalDeductInfo.length() > 0) {
                            layoutEmployeeTDSBarChart(strJobCodeWiseTotalDeductYears, JobCodeWiseTotalDeductYearlyFigures);
                        }
                        super.onPostExecute(result);
                        break;
                    default: break;
                }


            } catch(Exception e)  {
                speakeBengali("Sorry! Could not connect to the server.");
                layOut1.removeAllViews();
            }
        }
    }
}