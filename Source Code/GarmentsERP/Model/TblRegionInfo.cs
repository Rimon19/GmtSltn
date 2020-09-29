using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblRegionInfo
    {
        public TblRegionInfo()
        {
            InputPannelPodetails = new HashSet<InputPannelPodetails>();
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int RegionId { get; set; }
        public string RegionName { get; set; }

        public ICollection<InputPannelPodetails> InputPannelPodetails { get; set; }
        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
