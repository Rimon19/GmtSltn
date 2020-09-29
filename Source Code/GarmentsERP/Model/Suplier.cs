using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class Suplier
    {
        public Suplier()
        {
            FabricCost = new HashSet<FabricCost>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Designation { get; set; }
        public string CompanyName { get; set; }
        public string ContactPerson { get; set; }
        public string ContactPersionDesignation { get; set; }
        public string SuplierType { get; set; }
        public int? SuplyItemId { get; set; }
        public string Nominated { get; set; }

        public Suplyitem SuplyItem { get; set; }
        public ICollection<FabricCost> FabricCost { get; set; }
    }
}
