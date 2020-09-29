using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblDealingMrcndiserInfo
    {
        public TblDealingMrcndiserInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int Id { get; set; }
        public int? TeamleaderId { get; set; }
        public int? UserId { get; set; }

        public TblTeamlederInfoes Teamleader { get; set; }
        public TblUserInfo User { get; set; }
        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
