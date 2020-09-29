using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblProductionDeptInfo
    {
        public TblProductionDeptInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int Id { get; set; }
        public string ProdDeptName { get; set; }
        public int? DepartmentId { get; set; }

        public TblDepartInfo Department { get; set; }
        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
