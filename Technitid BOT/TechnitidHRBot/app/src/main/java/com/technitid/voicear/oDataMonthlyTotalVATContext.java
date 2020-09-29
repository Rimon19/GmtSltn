package com.technitid.voicear;

import java.util.List;

public class oDataMonthlyTotalVATContext {
    private String odataContext;
    private List<MonthlyTotalVATInfo> value;

    public String getodataContext() {
        return odataContext;
    }

    public void setodataContext(String odataContext) {
        this.odataContext = odataContext;
    }

    public List<MonthlyTotalVATInfo> getValues()
    {
        return value;
    }
}
