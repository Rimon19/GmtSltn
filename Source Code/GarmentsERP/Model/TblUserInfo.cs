using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblUserInfo
    {
        public TblUserInfo()
        {
            TblDealingMrcndiserInfo = new HashSet<TblDealingMrcndiserInfo>();
            TblInitialOrder = new HashSet<TblInitialOrder>();
            TblTeamlederInfoes = new HashSet<TblTeamlederInfoes>();
        }

        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Contact { get; set; }
        public DateTime? RegDate { get; set; }
        public string UserName { get; set; }
        public string UserPassword { get; set; }
        public int? UserTypeId { get; set; }
        public int? DeptId { get; set; }

        public TblDepartInfo Dept { get; set; }
        public TblUserTypeInfo UserType { get; set; }
        public ICollection<TblDealingMrcndiserInfo> TblDealingMrcndiserInfo { get; set; }
        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
        public ICollection<TblTeamlederInfoes> TblTeamlederInfoes { get; set; }
    }
}
