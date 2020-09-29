using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model.MarchandisingModule.OfferingCost
{
    public class OfferingCostFabricPriceCalculationBykg
    {
        public int Id { get; set; }
        public int OfferingCostId { get; set; }
        public int OrderAutoId { get; set; }
        public string YarnCount { get; set; }
        public double YarnPrice { get; set; }
        public double YarnPriceUse { get; set; }
        public double LycraYarnPrice { get; set; }
        public double LycraYarnPriceUse { get; set; }
        public double KnittingChargeTk { get; set; }
        public double KnittingChargeTkUse { get; set; }
        public double FabDyeChargeWithEPlusS { get; set; }
        public double FabDyeChargeWithEPlusSUse { get; set; }
        public double YarnDeyingCharge { get; set; }
        public double YarnDeyingChargeUse { get; set; }
        public double WashWithEPlusS { get; set; }
        public double WashWithEPlusSUse { get; set; }
        public double PeachFinish { get; set; }
        public double PeachFinishUse { get; set; }
        public double StanderPlusCompecting { get; set; }
        public double Total { get; set; }
        public double TotalUse { get; set; }
        public double DeyingProcessLostPercentage { get; set; }
        public double DeyingProcessLostPercentageUse { get; set; }
        public double FabricPriceTotal { get; set; }

        public string EntryDate { get; set; }
        public string EntryBy { get; set; }
        public string ApprovedDate { get; set; }
        public string ApprovedBy { get; set; }
        public bool IsApproved { get; set; }
        public string Status { get; set; }
    }
}
