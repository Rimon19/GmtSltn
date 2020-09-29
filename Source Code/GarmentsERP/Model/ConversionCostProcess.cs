using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class ConversionCostProcess
    {
        public ConversionCostProcess()
        {
            ConversionCostPreCosting = new HashSet<ConversionCostPreCosting>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<ConversionCostPreCosting> ConversionCostPreCosting { get; set; }
    }
}
