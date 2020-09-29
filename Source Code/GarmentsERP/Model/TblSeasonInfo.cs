using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblSeasonInfo
    {
        public TblSeasonInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int SeasonId { get; set; }
        public string SeasonName { get; set; }

        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
