using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class CapacityAllocation
    {
        [Key]
        public int Id { get; set; }
        public string Company { get; set; }
        public string Location { get; set; }
        public int YearId { get; set; }
        public int MonthId { get; set; }
    }
}
