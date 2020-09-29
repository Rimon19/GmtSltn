package com.technitid.voicear;

import java.util.List;

public class oDataJobPlanningContext {
    private String odataContext;
    private List<JobPlanningInfo> value;

    public String getodataContext() {
        return odataContext;
    }

    public void setodataContext(String odataContext) {
        this.odataContext = odataContext;
    }

    public List<JobPlanningInfo> getValues()
    {
        return value;
    }
}
