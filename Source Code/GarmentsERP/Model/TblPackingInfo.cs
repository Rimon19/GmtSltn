using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblPackingInfo
    {
        public TblPackingInfo()
        {
            InputPannelPodetails = new HashSet<InputPannelPodetails>();
            TblInitialOrder = new HashSet<TblInitialOrder>();
            TblPodetailsInfro = new HashSet<TblPodetailsInfro>();
        }

        public int PackingId { get; set; }
        public string PackingName { get; set; }

        public ICollection<InputPannelPodetails> InputPannelPodetails { get; set; }
        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
        public ICollection<TblPodetailsInfro> TblPodetailsInfro { get; set; }
    }
}
