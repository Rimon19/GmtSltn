using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model.MarchandisingModule
{
    public class SampleRequisitionWithBooking
    {
        public int Id { get; set; }
        public string RequisitionId { get; set; }
        public string SampleStage { get; set; }
        public string RequisitionDate { get; set; }
        public string StyleRefId { get; set; }
        public int CompanyNameId { get; set; }
        public int LocationId { get; set; }
        public int BuyerNameId { get; set; }
        public int SeasonId { get; set; }
        public string ProductDept { get; set; }
        public int DealingMerchantId { get; set; }
        public int AgentNameId { get; set; }
        public string BuyerRef { get; set; }
        public string BHMerchant { get; set; }
        public string EstShipDate { get; set; }
    public string RemarksDesc { get; set; }
    public string File { get; set; }
    public string ReadyToApproved { get; set; }
    public string MaterialDeliveryDate { get; set; }

    public string EntryDate { get; set; }
    public string EntryBy { get; set; }
    public string ApprovedDate { get; set; }
    public string ApprovedBy { get; set; }
    public bool IsApproved { get; set; }
    public string Status { get; set; }
}
}
