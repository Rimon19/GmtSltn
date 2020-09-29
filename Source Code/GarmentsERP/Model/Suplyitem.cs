using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class Suplyitem
    {
        public Suplyitem()
        {
            Suplier = new HashSet<Suplier>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Suplier> Suplier { get; set; }
    }
}
