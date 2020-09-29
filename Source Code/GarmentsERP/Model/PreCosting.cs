using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class PreCosting
    {
        public PreCosting()
        {
            ConversionCostPreCosting = new HashSet<ConversionCostPreCosting>();
            FabricCost = new HashSet<FabricCost>();
            YarnCostPreCosting = new HashSet<YarnCostPreCosting>();
        }

        public int PrecostingId { get; set; }
        public int? OrderId { get; set; }
        public DateTime? CostingDate { get; set; }
        public string Incoterm { get; set; }
        public string IncotermPlace { get; set; }
        public double? SewEfficiency { get; set; }

        public TblInitialOrder Order { get; set; }
        public ICollection<ConversionCostPreCosting> ConversionCostPreCosting { get; set; }
        public ICollection<FabricCost> FabricCost { get; set; }
        public ICollection<YarnCostPreCosting> YarnCostPreCosting { get; set; }
    }
}
