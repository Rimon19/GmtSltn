using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class ItemDetailsOrderEntry
    {
        public int Id { get; set; }
        public int? OrderEntryId { get; set; }
        public string Item { get; set; }
        public double? Ratio { get; set; }
        public double? SewSmvPcs { get; set; }
        public double? CutSmvPcs { get; set; }
        public double? FinSmvPcs { get; set; }
        public string Complexity { get; set; }
        public string Print { get; set; }
        public string EmbroYesNo { get; set; }
        public double? EmbroNumber { get; set; }
        public string WashYesNo { get; set; }
        public double? WashNumber { get; set; }
        public string SpWorksYesNo { get; set; }
        public double? SpWorksNumber { get; set; }
        public string GmtsDyeingYesNo { get; set; }
        public double? GmtsDyeingNumber { get; set; }
        public string AopYesNo { get; set; }
        public double? AopNumber { get; set; }
    }
}
