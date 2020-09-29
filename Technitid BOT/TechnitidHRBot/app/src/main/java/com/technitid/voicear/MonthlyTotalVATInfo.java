package com.technitid.voicear;
//Year":"2018","Month":"February","Sum_TDS":"55737\
public class MonthlyTotalVATInfo {
    private int Year;
    private String Month;
    private String Sum_VAT;

    public MonthlyTotalVATInfo() {
    }

    public int getYear() {
        return Year;
    }

    public void setYear(int Year) {
        this.Year = Year;
    }

    public String getMonth() {
        return Month;
    }

    public void setMonth(String Month) {
        this.Month = Month;
    }

    public String getSum_VAT() {
        return Sum_VAT;
    }

    public void setSum_VAT(String Sum_TDS) {
        this.Sum_VAT = Sum_TDS;
    }
}
