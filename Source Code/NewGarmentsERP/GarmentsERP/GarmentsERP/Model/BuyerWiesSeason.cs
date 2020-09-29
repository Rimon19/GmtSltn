using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class BuyerWiesSeason
    {
        [Key]
        public int Id { get; set; }
        public int BuyerId { get; set; }
        public string SeasonName { get; set; }
       
    }
}
