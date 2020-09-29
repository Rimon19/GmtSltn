using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblBuyerInfo
    {
        public TblBuyerInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int BuyerId { get; set; }
        public string BuyerName { get; set; }
        public string Details { get; set; }

        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
