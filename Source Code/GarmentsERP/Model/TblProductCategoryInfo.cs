using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblProductCategoryInfo
    {
        public TblProductCategoryInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int ProdCatId { get; set; }
        public string ProdCategoryName { get; set; }

        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
