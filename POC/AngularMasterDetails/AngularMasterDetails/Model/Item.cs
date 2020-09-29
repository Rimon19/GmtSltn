using System;
using System.Collections.Generic;

namespace AngularMasterDetails.Model
{
    public partial class Item
    {
        public Item()
        {
            OrderItems = new HashSet<OrderItems>();
        }

        public int ItemId { get; set; }
        public string Name { get; set; }
        public decimal? Price { get; set; }

        public ICollection<OrderItems> OrderItems { get; set; }
    }
}
