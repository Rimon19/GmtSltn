using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class FinancialParameterSetup
    {
        [Key]
        public int   Id {get;set;}
        public string  CompanyName { get;set;}
        public string  ApplyingPeriod { get;set;}
        public string To { get;set;}
        public int BEPCM { get;set;}
        public int AskingCM { get;set;}
        public int AskingProfit {get;set;}
        public int NoOfFactoryMachine {get;set;}
        public int MonthlyCMExpense {get;set;}
        public int WorkingHour {get;set;}
        public int CostPerMinute {get;set;}
        public int ActualCM {get;set;}
        public int AskingAVGRate {get;set;}
        public string Status {get;set;}
        public int MaxProfi {get;set;}
        public int DepreciationAndAmortization {get;set;}
        public int InterestExpenses {get;set;}
        public int IncomeTax {get;set;}
        public int OperatingExpenses {get;set;}
    }
}
