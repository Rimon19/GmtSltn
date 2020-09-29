using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class ConsDznGmtsEmbellishmentCost
    {
        public int Id { get; set; }
        public int? EmbellishmentCostId { get; set; }
        public string PoNo { get; set; }
        public string Country { get; set; }
        public string GmtsItem { get; set; }
        public string GmtsColor { get; set; }
        public string GmtsSizes { get; set; }
        public double? Cons { get; set; }
        public double? Rate { get; set; }
        public double? Amount { get; set; }
    }
}
