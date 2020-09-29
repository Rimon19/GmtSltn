using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblLocationInfo
    {
        public TblLocationInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int LocationId { get; set; }
        public string LocationName { get; set; }

        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
