using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class SizePannelPodetails
    {
        public int SizePannelId { get; set; }
        public int? InputPannelId { get; set; }
        public int? ItemId { get; set; }
        public string ArticleNumber { get; set; }
        public string Color { get; set; }
        public double? Size { get; set; }
        public double? Quanity { get; set; }

        public InputPannelPodetails InputPannel { get; set; }
        public OrderItem Item { get; set; }
    }
}
