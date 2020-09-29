using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class GarmentsItemEntry
    {
        [Key]
    public int Id { get; set; }
    public string ItemName {get;set;}
    public string   CommercialName  {get;set;}
    public int ProductCategoryId { get; set; }
    public int ProductTypeId { get; set; }
    public int StandardSMV { get; set; }
    public int Efficiency { get; set; }
    public string Status { get; set; }
    }
}
