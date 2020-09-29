using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblShipmentModeInfo
    {
        public TblShipmentModeInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int Id { get; set; }
        public string ShipmentMode { get; set; }

        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
