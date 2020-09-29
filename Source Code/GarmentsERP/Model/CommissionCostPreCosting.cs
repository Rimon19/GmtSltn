using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class CommissionCostPreCosting
    {
        public int Id { get; set; }
        public int? PrecostingId { get; set; }
        public string Particulars { get; set; }
        public string CommnBase { get; set; }
        public string CommnRate { get; set; }
        public double? Amount { get; set; }
        public string Status { get; set; }
    }
}
