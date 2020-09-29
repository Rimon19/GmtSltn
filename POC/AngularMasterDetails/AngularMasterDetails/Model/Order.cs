using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularMasterDetails.Model
{
    public partial class Order
    {
        public Order()
        {
            OrderItems = new HashSet<OrderItems>();
        }

        public long OrderId { get; set; }
        public int OrderNo { get; set; }
        public int? CustomerId { get; set; }
        public string Pmethod { get; set; }
        public decimal? Gtotal { get; set; }
        [NotMapped]
        public string DeletedOrderItemIDs { get; set; }
        public Customer Customer { get; set; }
        public ICollection<OrderItems> OrderItems { get; set; }
    }
}
