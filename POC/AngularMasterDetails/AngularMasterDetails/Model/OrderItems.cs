using System;
using System.Collections.Generic;

namespace AngularMasterDetails.Model
{
    public partial class OrderItems
    {
        public int OrderItemId { get; set; }
        public long? OrderId { get; set; }
        public int? ItemId { get; set; }
        public int? Quantity { get; set; }

        public Item Item { get; set; }
        public Order Order { get; set; }
    }
}
