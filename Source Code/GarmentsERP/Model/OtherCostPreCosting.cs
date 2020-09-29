using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class OtherCostPreCosting
    {
        public int Id { get; set; }
        public int? PreCostingId { get; set; }
        public string CostComponent { get; set; }
        public double? BudgetedCost { get; set; }
        public double? PercentageQPrice { get; set; }
    }
}
