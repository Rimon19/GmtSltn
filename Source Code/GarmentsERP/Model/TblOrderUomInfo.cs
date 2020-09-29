using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblOrderUomInfo
    {
        public TblOrderUomInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int Uomid { get; set; }
        public string OrderUomName { get; set; }

        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
