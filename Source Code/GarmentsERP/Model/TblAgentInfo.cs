using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblAgentInfo
    {
        public TblAgentInfo()
        {
            TblInitialOrder = new HashSet<TblInitialOrder>();
        }

        public int AgentId { get; set; }
        public string AgentName { get; set; }

        public ICollection<TblInitialOrder> TblInitialOrder { get; set; }
    }
}
