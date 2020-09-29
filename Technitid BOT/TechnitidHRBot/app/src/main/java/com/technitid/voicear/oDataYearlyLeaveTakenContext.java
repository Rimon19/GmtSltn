package com.technitid.voicear;

import java.util.List;

public class oDataYearlyLeaveTakenContext {
    private String odataContext;
    private List<YearlyLeaveTakenInfo> value;

    public String getodataContext() {
        return odataContext;
    }

    public void setodataContext(String odataContext) {
        this.odataContext = odataContext;
    }

    public List<YearlyLeaveTakenInfo> getValues()
    {
        return value;
    }
}
