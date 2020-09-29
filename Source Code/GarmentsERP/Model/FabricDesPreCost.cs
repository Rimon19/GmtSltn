using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class FabricDesPreCost
    {
        public FabricDesPreCost()
        {
            ConversionCostPreCosting = new HashSet<ConversionCostPreCosting>();
            FabricCost = new HashSet<FabricCost>();
        }

        public int Id { get; set; }
        public string FabNature { get; set; }
        public string Construction { get; set; }
        public double? GsmWeight { get; set; }
        public string ColorRange { get; set; }
        public double? StichLength { get; set; }
        public double? ProcessLoss { get; set; }
        public string Composition { get; set; }

        public ICollection<ConversionCostPreCosting> ConversionCostPreCosting { get; set; }
        public ICollection<FabricCost> FabricCost { get; set; }
    }
}
