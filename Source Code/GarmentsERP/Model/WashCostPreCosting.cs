using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public partial class WashCostPreCosting
    {
        public int Id { get; set; }
        public int? PrecostingId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Country { get; set; }
        public string ConsDznGmts { get; set; }
        public string Rate { get; set; }
        public double? Amount { get; set; }
        public string Status { get; set; }
    }
}
