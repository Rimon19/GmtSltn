using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblTeamlederInfoes
    {
        public TblTeamlederInfoes()
        {
            TblDealingMrcndiserInfo = new HashSet<TblDealingMrcndiserInfo>();
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int TeamleaderId { get; set; }
        public int? UserId { get; set; }

        public TblUserInfo User { get; set; }
        public ICollection<TblDealingMrcndiserInfo> TblDealingMrcndiserInfo { get; set; }
        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
