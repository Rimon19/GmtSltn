using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model.MarchandisingModule
{
    public class EmbellishmentCost
    {
        public int Id { get; set; }
        public int PrecostingId { get; set; }
        public string EmbelName { get; set; }
        public int EmbelTypeId { get; set; }
        public int BodyPartId { get; set; }
        public int CountryId { get; set; }
        public int SupplierId { get; set; }
        public double Cons { get; set; }
        public double Amount { get; set; }
        public string Status { get; set; }
    }
}
