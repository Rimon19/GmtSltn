using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model.MarchandisingModule
{
    public class WashCost
    {
       
        public int Id { get; set;}
        public int PrecostingId { get; set; }
        public string Name { get; set; }
        public int TypeId { get; set; }
        public int CountryId { get; set; }
        public string ConsOneDznGmts { get; set; }
        public double Rate { get; set; }
        public double Amount { get; set; }
        public string Status { get; set; }
    }
}
