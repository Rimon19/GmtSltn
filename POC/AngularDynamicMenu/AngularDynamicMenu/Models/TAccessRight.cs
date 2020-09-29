using System;
using System.Collections.Generic;

namespace AngularDynamicMenu.Models
{
    public partial class TAccessRight
    {
        public TAccessRight()
        {
            InverseParentAccessRight = new HashSet<TAccessRight>();
            TRole2accessRight = new HashSet<TRole2accessRight>();
        }

        public string AccessRightId { get; set; }
        public string AccessType { get; set; }
        public string Description { get; set; }
        public string ParentAccessRightId { get; set; }
        public string routepath { get; set; }

        public TAccessRight ParentAccessRight { get; set; }
        public ICollection<TAccessRight> InverseParentAccessRight { get; set; }
        public ICollection<TRole2accessRight> TRole2accessRight { get; set; }
    }
}
