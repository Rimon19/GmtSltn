using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class ParsialFabricBookingMaster
    {
       
        public int id { get; set; }
        public string BookingNo { get; set; }
        public string BookingMonth { get; set; }
        public string BookingYear { get; set; }
        public string CompanyName { get; set; }
        public string BuyerName { get; set; }
        public string FabricNature { get; set; }
        public string FabricSource { get; set; }
        public string BookingDate { get; set; }
        public string DeliveryDate { get; set; }
        public string PayMode { get; set; }
        public string SupplierName { get; set; }
        public string Currency { get; set; }
        public double? ExchangeRate { get; set; }
        public string Source { get; set; }
        public string Attention { get; set; }
        public double? BookingPercent { get; set; }
        public string CollarExcessCutPercentage { get; set; }
        public string CuffExcessCutPercentage { get; set; }
        public string ReadyToApproved { get; set; }
        public string InternalRefNo { get; set; }
        public string FileNo { get; set; }
        public string UnApproveRequest { get; set; }
        public string FabricComposition { get; set; }
        public string Level { get; set; }
        public string Remarks { get; set; }
    }
}
