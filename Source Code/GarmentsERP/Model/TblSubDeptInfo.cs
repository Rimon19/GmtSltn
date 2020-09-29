using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblSubDeptInfo
    {
        public TblSubDeptInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int SubDeptId { get; set; }
        public string SubDeptName { get; set; }
        public int? DepartmentId { get; set; }

        public TblDepartInfo Department { get; set; }
        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
