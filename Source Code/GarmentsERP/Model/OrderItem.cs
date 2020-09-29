using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class OrderItem
    {
        public OrderItem()
        {
            SizePannelPodetails = new HashSet<SizePannelPodetails>();
        }

        public int ItemId { get; set; }
        public string Name { get; set; }

        public ICollection<SizePannelPodetails> SizePannelPodetails { get; set; }
    }
}
