package com.technitid.voicear;
//"value":[{"First_Name":"MD. Nazrul  Islam","Last_Name":"","Month_From_Date":11,
// "Employee_No":"191011002","Sum_Quantity":3}]}
public class MonthlyLeaveTakenInfo {
    private String First_Name;
    private String Last_Name;
    private String Month_From_Date;
    private String Employee_No;
    private String Sum_Quantity;

    public MonthlyLeaveTakenInfo() {
    }

    public String getFirst_Name() {
        return First_Name;
    }

    public void setFirst_Name(String First_Name) {
        this.First_Name = First_Name;
    }

    public String getLast_Name() {
        return Last_Name;
    }

    public void setLast_Name(String Last_Name) {
        this.Last_Name = Last_Name;
    }

    public String getMonth_From_Date() {
        return Month_From_Date;
    }

    public void setMonth_From_Date(String Month_From_Date) { this.Month_From_Date = Month_From_Date; }

    public String getEmployee_No() {
        return Employee_No;
    }

    public void setEmployee_No(String Employee_No) { this.Employee_No = Employee_No; }

    public String getSum_Quantity() {
        return Sum_Quantity;
    }

    public void setSum_Quantity(String Sum_Quantity) {this.Sum_Quantity = Sum_Quantity;}
}
