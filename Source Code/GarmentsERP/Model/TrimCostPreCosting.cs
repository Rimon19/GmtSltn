using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class TrimCostPreCosting
    {
        public int Id { get; set; }
        public int? PrecostingId { get; set; }
        public string GroupName { get; set; }
        public string Country { get; set; }
        public string Description { get; set; }
        public string BandSupRef { get; set; }
        public string Remarks { get; set; }
        public int? NominatedSupp { get; set; }
        public string ConsUom { get; set; }
        public string ConsUnitGmts { get; set; }
        public string Rate { get; set; }
        public double? Amount { get; set; }
        public double? TotalQty { get; set; }
        public double? TotalAmount { get; set; }
        public string ApvlReq { get; set; }
        public string Image { get; set; }
    }
}
