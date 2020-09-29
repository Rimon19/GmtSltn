using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class ConsUnitGmtsTrimCost
    {
        public int Id { get; set; }
        public int? TrimCostId { get; set; }
        public string PoNo { get; set; }
        public string GmtsItem { get; set; }
        public string Country { get; set; }
        public string GmtsColor { get; set; }
        public double? GmtsSizes { get; set; }
        public double? ItemSizes { get; set; }
        public double? Cons { get; set; }
        public double? ExPercentage { get; set; }
        public double? TotCons { get; set; }
        public double? Rate { get; set; }
        public double? Amount { get; set; }
        public double? TotalQty { get; set; }
        public double? TotalAmount { get; set; }
        public double? Placement { get; set; }
        public double? Pcs { get; set; }
    }
}
