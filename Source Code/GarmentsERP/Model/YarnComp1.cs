using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class YarnComp1
    {
        public YarnComp1()
        {
            YarnCostPreCosting = new HashSet<YarnCostPreCosting>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<YarnCostPreCosting> YarnCostPreCosting { get; set; }
    }
}
