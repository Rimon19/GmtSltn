using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public partial class VwFabriccost
    {
        
        public int  FabricCostID { get; set; }
        public int preCostingID { get; set; }
        public int JobNo { get; set; }
        public int OrderAutoID { get; set; }
    }
}
