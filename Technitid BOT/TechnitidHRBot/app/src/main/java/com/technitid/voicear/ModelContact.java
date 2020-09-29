package com.technitid.voicear;

/**
 * Created by jamshed on 3/3/2018.
 */

public class ModelContact {
    private String Name;
    private String ContactNumber;

    public ModelContact(String name, String contactNumber) {
        Name = name;
        ContactNumber = contactNumber;
    }

    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }
    public String getContactNumber() {
        return ContactNumber;
    }

    public void setContactNumber(String contactNumber) {
        ContactNumber = contactNumber;
    }


}
