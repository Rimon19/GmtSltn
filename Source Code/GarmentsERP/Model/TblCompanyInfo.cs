using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblCompanyInfo
    {
        public TblCompanyInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int CompId { get; set; }
        public string CompanyName { get; set; }
        public string Details { get; set; }

        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
