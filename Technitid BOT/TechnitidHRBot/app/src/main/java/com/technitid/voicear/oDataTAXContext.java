package com.technitid.voicear;

import java.util.List;

public class oDataTAXContext {
    private String odataContext;
    private List<TAXInfo> value;

    public String getodataContext() {
        return odataContext;
    }

    public void setodataContext(String Month) {
        this.odataContext = Month;
    }

    public List<TAXInfo> getValues()
    {
        return value;
    }
}
