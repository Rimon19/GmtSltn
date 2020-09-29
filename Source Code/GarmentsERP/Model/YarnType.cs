using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class YarnType
    {
        public YarnType()
        {
            YarnCostPreCosting = new HashSet<YarnCostPreCosting>();
        }

        public int Id { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }

        public ICollection<YarnCostPreCosting> YarnCostPreCosting { get; set; }
    }
}
