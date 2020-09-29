using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblPodetailsInfro
    {
        public TblPodetailsInfro()
        {
            InputPannelPodetails = new HashSet<InputPannelPodetails>();
        }

        public int PoDetId { get; set; }
        public int? InitialOrderId { get; set; }
        public int? PoorderStatusId { get; set; }
        public string PoNo { get; set; }
        public DateTime? PoReceivedDate { get; set; }
        public DateTime? PubShipmentDate { get; set; }
        public DateTime? OrgShipmentDate { get; set; }
        public DateTime? FacReceiveDate { get; set; }
        public double? PoQuantity { get; set; }
        public double? AvgPrice { get; set; }
        public double? Amount { get; set; }
        public double? ExcessCut { get; set; }
        public double? PlanCut { get; set; }
        public int? PoStatusId { get; set; }
        public string ProjectedPo { get; set; }
        public DateTime? TnaFromOrUpto { get; set; }
        public string InternalRefOrGrouping { get; set; }
        public string DelayFor { get; set; }
        public int? PackingId { get; set; }
        public string FileNo { get; set; }
        public string ScorLc { get; set; }
        public string Remarks { get; set; }

        public TblInitialOrder InitialOrder { get; set; }
        public TblPackingInfo Packing { get; set; }
        public TblPoStatus PoStatus { get; set; }
        public TblPoOrderStatusInfo PoorderStatus { get; set; }
        public ICollection<InputPannelPodetails> InputPannelPodetails { get; set; }
    }
}
