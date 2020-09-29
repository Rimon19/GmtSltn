package com.technitid.voicear;

import java.util.List;

public class oDataMonthlyTotalTDSContext {
    private String odataContext;
    private List<MonthlyTotalTDSInfo> value;

    public String getodataContext() {
        return odataContext;
    }

    public void setodataContext(String odataContext) {
        this.odataContext = odataContext;
    }

    public List<MonthlyTotalTDSInfo> getValues()
    {
        return value;
    }
}
