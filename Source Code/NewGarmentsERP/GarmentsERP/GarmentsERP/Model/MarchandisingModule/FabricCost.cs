using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model.MarchandisingModule
{
    public class FabricCost
    {
        public int Id { get; set; }
        public int PoNoId { get; set; }
        public int GmtsItemId { get; set; }
        public int BodyPartId { get; set; }
        public int BodyPartTypeId { get; set; }
        public int FabNatureId { get; set; }
        public int ColorTypeId { get; set; }
        public int? FabricDesPreCostId { get; set; }
        public int FabricSourceId { get; set; }
        public int NominatedSuppId { get; set; }
        public string WidthDiaType { get; set; }
        public double GsmWeight { get; set; }
        public string ColorSizeSensitive { get; set; }
        public string Color { get; set; }
        public string ConsumptionBasis { get; set; }
        public string Uom { get; set; }
        public double AvgGreyCons { get; set; }
        public double Rate { get; set; }
        public double Amount { get; set; }
        public double TotalQty { get; set; }
        public double TotalAmount { get; set; }

        public int? PreCostingId { get; set; }
        public int? SuplierId { get; set; }
        public string FabricDescription { get; set; }



    }
}
