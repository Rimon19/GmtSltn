package com.technitid.voicear;
//Year, Employee_No, Employee_First_Name, Employee_Last_Name, Sum_Leave_Taken
public class YearlyLeaveTakenInfo {
    private String Year;
    private String Employee_No;
    private String Employee_First_Name;
    private String Employee_Last_Name;
    private String Sum_Leave_Taken;

    public YearlyLeaveTakenInfo() {
    }

    public String getYear() {
        return Year;
    }

    public void setYear(String Year) {
        this.Year = Year;
    }

    public String getEmployee_First_Name() {
        return Employee_First_Name;
    }

    public void setEmployee_First_Name(String Employee_First_Name) {
        this.Employee_First_Name = Employee_First_Name;
    }

    public String getEmployee_Last_Name() {
        return Employee_Last_Name;
    }

    public void setEmployee_Last_Name(String Employee_Last_Name) { this.Employee_Last_Name = Employee_Last_Name; }

    public String getEmployee_No() {
        return Employee_No;
    }

    public void setEmployee_No(String Employee_No) { this.Employee_No = Employee_No; }

    public String getSum_Leave_Taken() {
        return Sum_Leave_Taken;
    }

    public void setSum_Leave_Taken(String Sum_Leave_Taken) {this.Sum_Leave_Taken = Sum_Leave_Taken;}
}
