using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model.MarchandisingModule.OfferingCost
{
    public class OfferingCostGarmentsCalculation
    {
        
            public int Id { get; set; }
            public int OfferingCostId { get; set; }
            public int OrderAutoId { get; set; }
            public double FabricValue { get; set; }
            public double FabricValueUsePercentage { get; set; }
            public double Accessoriesfactory { get; set; }
            public double AccessoriesfactoryUsePercentage { get; set; }
            public double AccessoriesNomination { get; set; }
            public double AccessoriesNominationUsePercentage { get; set; }
            public double Print { get; set; }
            public double PrintUsePercentage { get; set; }
            public double Embroidery { get; set; }
            public double EmbroideryUsePercentage { get; set; }
            public double Alloverprint { get; set; }
            public double WovenFabrics { get; set; }
            public double WovenFabricsUsePercentage { get; set; }
            public double CM { get; set; }
            public double CMUsePercentage { get; set; }
            public double TEST { get; set; }
            public double TESTUsePercentage { get; set; }
            public double CIFCost { get; set; }
            public double CIFCostUsePercentage { get; set; }
            public double TotalCost { get; set; }
            public double TotalCostUsePercentage { get; set; }
            public double LByCComChargePercentage { get; set; }
            public double LByCComChargeUsePercentage { get; set; }
            public double TotalCostUse { get; set; }
            public double TotalCostBypc { get; set; }
            public double TotalCostBypcUsePercentage { get; set; }
            public double PriceBypcWithprofitPercentage { get; set; }
            public double PriceBypcWithprofitUsePercentage { get; set; }
            public double BuyingCommssion { get; set; }
            public double BuyingCommssionUsePercentage { get; set; }
            public double FOBWithBComPercentage { get; set; }
            public double FOBWithBComUsePercentage { get; set; }

            public string EntryDate { get; set; }
            public string EntryBy { get; set; }
            public string ApprovedDate { get; set; }
            public string ApprovedBy { get; set; }
            public bool IsApproved { get; set; }
            public string Status { get; set; }
        
    }
}
