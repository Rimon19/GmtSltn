using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class TrimCost
    {
             [Key]
                public int  Id {get;set;}
                public int PrecostingId { get;set;}
                public int  GroupId {get;set;}
                public int  CountryId {get;set;}
                public string  Description {get;set;}
                public string  BrandSupRef {get;set;}
                public string  Remarks {get;set;}
                public int  NominatedSuppId {get;set;}
                public int  ConsUOMId  {get;set;}
                public double  ConsUnitGmts {get;set;}
                public double  Rate {get;set;}
                public double Amount {get;set;}
                public double TotalQty {get;set;}
                public double TotalAmount {get;set;}
                public string  ApvlReq {get;set;}
                public string  ImagePath {get;set;}
    }
}
