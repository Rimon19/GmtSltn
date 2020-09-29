using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class TNATaskPercent
    {
        [Key]
        public int Id { get; set; }
        public int TaskNameId { get; set; }
        public int BuyerNameId { get; set; }
        public int StartPercent { get; set; }
        public int NoticeBefore { get; set; }
        public int EndPercent { get; set; }
        public string Status { get; set; }
    }
}
