using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class InputPannelPodetails
    {
        public InputPannelPodetails()
        {
            SizePannelPodetails = new HashSet<SizePannelPodetails>();
        }

        public int InputPannelId { get; set; }
        public int? PoDetailsId { get; set; }
        public int? CountryId { get; set; }
        public string CountryType { get; set; }
        public DateTime? CuttOffDate { get; set; }
        public string CuttOff { get; set; }
        public DateTime? CountryShipmentDate { get; set; }
        public string Remarks { get; set; }
        public int? PackingId { get; set; }
        public double? Quantity { get; set; }

        public TblRegionInfo Country { get; set; }
        public TblPackingInfo Packing { get; set; }
        public TblPodetailsInfro PoDetails { get; set; }
        public ICollection<SizePannelPodetails> SizePannelPodetails { get; set; }
    }
}
