using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class MinLeadTimeSlab
    {
        [Key]
        public int Id {get;set;}
        public int CompanyId {get;set;}
        public int LocationId {get;set;}
        public int YearId {get;set;}
        public int MonthId {get;set;}
    }
}
