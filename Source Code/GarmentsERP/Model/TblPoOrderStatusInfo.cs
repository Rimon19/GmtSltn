using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblPoOrderStatusInfo
    {
        public TblPoOrderStatusInfo()
        {
            TblPodetailsInfro = new HashSet<TblPodetailsInfro>();
        }

        public int Id { get; set; }
        public string OrderStatus { get; set; }

        public ICollection<TblPodetailsInfro> TblPodetailsInfro { get; set; }
    }
}
