package com.technitid.voicear;

import java.util.List;

public class oDataMonthlyLeaveTakenContext {
    private String odataContext;
    private List<MonthlyLeaveTakenInfo> value;

    public String getodataContext() {
        return odataContext;
    }

    public void setodataContext(String odataContext) {
        this.odataContext = odataContext;
    }

    public List<MonthlyLeaveTakenInfo> getValues()
    {
        return value;
    }
}
