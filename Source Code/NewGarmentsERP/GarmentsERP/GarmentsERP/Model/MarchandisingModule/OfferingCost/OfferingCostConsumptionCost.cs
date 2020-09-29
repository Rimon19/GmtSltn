using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model.MarchandisingModule.OfferingCost
{
    public class OfferingCostConsumptionCost
    {
        
            public int Id { get; set; }
            public int OrderAutoId { get; set; }
            public int OfferingCostId { get; set; }
            public string Measurment { get; set; }
            public double Actual { get; set; }
            public double Allowance { get; set; }
            public double GSM { get; set; }
            public double FabDzn { get; set; }
            public double SolidSixPercent { get; set; }
            public double CAD { get; set; }
            public double NeckcuffDzn { get; set; }
            public double Pocket { get; set; }
            public double TTLFabKg{ get; set; }

        public string EntryDate { get; set; }
        public string EntryBy { get; set; }
        public string ApprovedDate { get; set; }
        public string ApprovedBy { get; set; }
        public bool IsApproved { get; set; }
        public string Status { get; set; }
    
}
}
