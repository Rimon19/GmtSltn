package com.technitid.voicear;

import java.util.List;

public class oDataMonthlyTotalSalaryAndTDSContext {
    private String odataContext;
    private List<MonthlyTotalSalaryAndTDSInfo> value;

    public String getodataContext() {
        return odataContext;
    }

    public void setodataContext(String odataContext) {
        this.odataContext = odataContext;
    }

    public List<MonthlyTotalSalaryAndTDSInfo> getValues()
    {
        return value;
    }
}
