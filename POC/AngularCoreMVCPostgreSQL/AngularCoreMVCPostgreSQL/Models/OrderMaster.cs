using System;
using System.Collections.Generic;

namespace AngularCoreMVCPostgreSQL.Models
{
    public partial class OrderMaster
    {
        public int AutoId { get; set; }
        public string OrderNo { get; set; }
        public DateTime? OrderDate { get; set; }
        public string Desc { get; set; }
    }
}
