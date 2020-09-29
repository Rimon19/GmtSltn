using System;
using System.Collections.Generic;

namespace AngularDynamicMenu.Models
{
    public partial class TRole
    {
        public TRole()
        {
            TRole2accessRight = new HashSet<TRole2accessRight>();
            TUser2role = new HashSet<TUser2role>();
        }

        public int RoleId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CreatedById { get; set; }
        public int EditedById { get; set; }
        public DateTime CreatedDate { get; set; }

        public ICollection<TRole2accessRight> TRole2accessRight { get; set; }
        public ICollection<TUser2role> TUser2role { get; set; }
    }
}
