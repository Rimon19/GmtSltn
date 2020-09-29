using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model.MarchandisingModule
{
    public class MultiJobWiseServiceBookingKnitting
    {
        public int Id { get; set; }
        public string BookingNo { get; set; }
        public int MonthId { get; set; }
        public int YearId { get; set; }
        public int BuyerProfileId { get; set; }
        public int CurrencyId { get; set; }
        public int ExchangeRate { get; set; }
        public string BookingDate { get; set; }
        public string DeliveryDate { get; set; }
        public string PayMode { get; set; }
        public string Source { get; set; }
        public int SupplierProfileId { get; set; }
        public string ReadyToApproved { get; set; }
        public string Attention { get; set; }
        public string Remark { get; set; }

        public string EntryDate { get; set; }
        public string EntryBy { get; set; }
        public string Status { get; set; }

        public string MerchandApprovalDate { get; set; }
        public bool MerchandApproval { get; set; }
    public string ApprovedByMerchandUserId { get; set; }

    public string AgmApprovalDate { get; set; }
    public bool AgmApproval { get; set; }
    public string ApprovedByAgmUserId { get; set; }
    public string GmApprovalDate { get; set; }
    public bool GmApproval { get; set; }
    public string ApprovedByGmUserId { get; set; }

    public string MdApprovalDate { get; set; }
    public bool MdApproval { get; set; }
    public string ApprovedByMdUserId { get; set; }
}
}
