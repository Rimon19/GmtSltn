using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblDepartInfo
    {
        public TblDepartInfo()
        {
            TblProductionDeptInfo = new HashSet<TblProductionDeptInfo>();
            TblSubDeptInfo = new HashSet<TblSubDeptInfo>();
            TblUserInfo = new HashSet<TblUserInfo>();
        }

        public int DepId { get; set; }
        public string DepartmentName { get; set; }
        public string Details { get; set; }

        public ICollection<TblProductionDeptInfo> TblProductionDeptInfo { get; set; }
        public ICollection<TblSubDeptInfo> TblSubDeptInfo { get; set; }
        public ICollection<TblUserInfo> TblUserInfo { get; set; }
    }
}
