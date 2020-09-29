package com.technitid.voicear;
//"Job_No":"J00021","Job_Task_No":"1010","No":"70064","Total_Cost":374000
public class JobPlanningInfo {
    private String Job_No;
    private String Job_Task_No;
    private String No;
    private double Total_Cost;

    public JobPlanningInfo() {
    }

    public String getJob_No() {
        return Job_No;
    }
    public void setJob_No(int Year) {
        this.Job_No = Job_No;
    }

    public String getJob_Task_No() {
        return Job_Task_No;
    }
    public void setJob_Task_No(String Month) {
        this.Job_Task_No = Job_Task_No;
    }

    public String getNo() {
        return No;
    }
    public void setNo(String Sum_TDS) {
        this.No = No;
    }

    public double getTotal_Cost() {return Total_Cost;}
    public void setTotal_Cost(double Total_Cost) {
        this.Total_Cost = Total_Cost;
    }
}
