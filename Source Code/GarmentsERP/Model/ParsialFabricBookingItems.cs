using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class ParsialFabricBookingItems
    {
        public int id { get; set; }
        public string jobNo { get; set; }
        public int? orderId { get; set; }
        public int? bookingMasterId { get; set; }
        public string poNumber { get; set; }
        public string bodyPart { get; set; }
        public string Item { get; set; }
        public string colorType { get; set; }
        public string diaWidthType { get; set; }
        public string construction { get; set; }
        public string composition { get; set; }
        public string gsm { get; set; }
        public string gmtsColor { get; set; }
        public string fabricNature { get; set; }
        public string fabricSource { get; set; }
        public string uom { get; set; }
        public string itemColor { get; set; }
        public double? dia { get; set; }
        public double? woQnty { get; set; }
        public double? adjQnty { get; set; }
        public double? acWoQnty { get; set; }
        public double? rate { get; set; }
        public double? amount { get; set; }
        
    
    
      
      
      

    }
}
