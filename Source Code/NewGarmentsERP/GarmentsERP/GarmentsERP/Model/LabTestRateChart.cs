using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class LabTestRateChart
    {
        [Key]
                public int Id  {get;set;}
                public string TestCatagory {get;set;}
                public string TestFor {get;set;}
                public string TestItem {get;set;}
                public int Rate {get;set;}
                public int Upcharge {get;set;}
                public int UpchargeAmout {get;set;}
                public int NetRate {get;set;}
                public string Currency {get;set;}
                public string TestingCompany {get;set;}
    }
}
