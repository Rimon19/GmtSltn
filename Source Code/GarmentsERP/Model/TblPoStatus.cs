using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblPoStatus
    {
        public TblPoStatus()
        {
            TblPodetailsInfro = new HashSet<TblPodetailsInfro>();
        }

        public int Id { get; set; }
        public string Status { get; set; }

        public ICollection<TblPodetailsInfro> TblPodetailsInfro { get; set; }
    }
}
