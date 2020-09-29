using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class StoreLocation
    {
        [Key]
public int Id {get;set;}
public string StoreName {get;set;}
public string CompanyName {get;set;}
public string Location {get;set;}
public string ItemCategoryId {get;set;}
public string Status {get;set;}
    }
}
