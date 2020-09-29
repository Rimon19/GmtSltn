package com.technitid.voicear;
//Year":"2018","Month":"February","Sum_TDS":"55737\
//"value":[{"Status":"Active","Year":"2018","Month":"December","Sum_Net_Pay":4579102.4,"Sum_Total_TDS":0,"Sum_Total_Bonus":0,"Sum_Total_Allowances":0,"Sum_Total_Deductions":0}]}
public class MonthlyTotalSalaryAndTDSInfo {
    private String Status="";
    private String Year="";
    private String Month="";
    private String Sum_Total_Bonus;
    private String Sum_Total_Allowances;
    private String Sum_Net_Pay;
    private String Sum_Total_Deductions;
    private String Sum_Total_TDS;

    public MonthlyTotalSalaryAndTDSInfo() {
    }

    public String getStatus() {
        return Status;
    }
    public void setEmployee_Job_Status_Code(String v) {
        this.Status = Status;
    }

    public String getYear() {
        return Year;
    }
    public void setYear(String Year) {
        this.Year = Year;
    }

    public String getMonth() {
        return Month;
    }
    public void setMonth(String Month) {
        this.Month = Month;
    }

    public String getSum_Total_Bonus() {
        return Sum_Total_Bonus;
    }
    public void setSum_Total_Bonus(String Sum_Total_Bonus) {
        this.Sum_Total_Bonus = Sum_Total_Bonus;
    }

    public String getSum_Total_Allowances() {
        return Sum_Total_Allowances;
    }
    public void setSum_Total_Allowances(String Sum_Total_Allowances) {
        this.Sum_Total_Allowances = Sum_Total_Allowances;
    }

    public String getSum_Net_Pay() {
        return Sum_Net_Pay;
    }
    public void setSum_Net_Pay(String Sum_Net_Pay) {
        this.Sum_Net_Pay = Sum_Net_Pay;
    }

    public String getSum_Total_Deductions() {
        return Sum_Total_Deductions;
    }
    public void setSum_Total_Deductions(String Sum_Total_Deductions) {
        this.Sum_Total_Deductions = Sum_Total_Deductions;
    }

    public String getSum_Total_TDS() {
        return Sum_Total_TDS;
    }
    public void setSum_Total_TDS(String Sum_Total_TDS) {
        this.Sum_Total_TDS = Sum_Total_TDS;
    }
}
