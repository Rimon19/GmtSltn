using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblInitialOrder
    {
        public TblInitialOrder()
        {
            PreCosting = new HashSet<PreCosting>();
            TblPodetailsInfro = new HashSet<TblPodetailsInfro>();
        }

        public int OrderAutoId { get; set; }
        public string JobNo { get; set; }
        public int? CompanyId { get; set; }
        public int? LocationId { get; set; }
        public int? BuyerId { get; set; }
        public string StyleRef { get; set; }
        public string StyleDescription { get; set; }
        public int? ProdDeptId { get; set; }
        public int? SubDeptId { get; set; }
        public int? CurrencyId { get; set; }
        public int? RegionId { get; set; }
        public int? ProductCatId { get; set; }
        public int? TeamLeaderId { get; set; }
        public int? DealingMerchantId { get; set; }
        public string BhMerchant { get; set; }
        public string Remarks { get; set; }
        public int? ShipmentModeId { get; set; }
        public int? OrderUomId { get; set; }
        public double? Smv { get; set; }
        public int? PackingId { get; set; }
        public int? SeasonId { get; set; }
        public int? AgentId { get; set; }
        public int? UserId { get; set; }
        public string RepeatNoJob { get; set; }
        public string OrderNumber { get; set; }

        public TblAgentInfo Agent { get; set; }
        public TblBuyerInfo Buyer { get; set; }
        public TblCompanyInfo Company { get; set; }
        public TblCurrencyInfo Currency { get; set; }
        public TblDealingMrcndiserInfo DealingMerchant { get; set; }
        public TblLocationInfo Location { get; set; }
        public TblOrderUomInfo OrderUom { get; set; }
        public TblPackingInfo Packing { get; set; }
        public TblProductionDeptInfo ProdDept { get; set; }
        public TblProductCategoryInfo ProductCat { get; set; }
        public TblRegionInfo Region { get; set; }
        public TblSeasonInfo Season { get; set; }
        public TblShipmentModeInfo ShipmentMode { get; set; }
        public TblSubDeptInfo SubDept { get; set; }
        public TblTeamlederInfoes TeamLeader { get; set; }
        public TblUserInfo User { get; set; }
        public ICollection<PreCosting> PreCosting { get; set; }
        public ICollection<TblPodetailsInfro> TblPodetailsInfro { get; set; }
    }
}
