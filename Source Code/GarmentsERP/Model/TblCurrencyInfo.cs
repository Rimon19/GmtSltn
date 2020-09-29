using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblCurrencyInfo
    {
        public TblCurrencyInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int CurrencyId { get; set; }
        public string CurrencyName { get; set; }

        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
