using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class ConversionCostPreCosting
    {
        public int ConversionCostId { get; set; }
        public int? PreCostingId { get; set; }
        public int? FabDescId { get; set; }
        public int? ConversionProcessId { get; set; }
        public double? ProcessLoss { get; set; }
        public double? ReqQty { get; set; }
        public double? AvgReqQty { get; set; }
        public double? ChargeUnit { get; set; }
        public double? Amount { get; set; }
        public string Status { get; set; }

        public ConversionCostProcess ConversionProcess { get; set; }
        public FabricDesPreCost FabDesc { get; set; }
        public PreCosting PreCosting { get; set; }
    }
}
