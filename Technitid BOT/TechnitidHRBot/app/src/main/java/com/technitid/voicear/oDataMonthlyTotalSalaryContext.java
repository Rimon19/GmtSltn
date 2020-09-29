package com.technitid.voicear;

import java.util.List;

public class oDataMonthlyTotalSalaryContext {
    private String odataContext;
    private List<MonthlyTotalSalaryInfo> value;

    public String getodataContext() {
        return odataContext;
    }

    public void setodataContext(String odataContext) {
        this.odataContext = odataContext;
    }

    public List<MonthlyTotalSalaryInfo> getValues()
    {
        return value;
    }
}
