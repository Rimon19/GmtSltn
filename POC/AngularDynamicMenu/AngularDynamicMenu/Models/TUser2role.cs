using System;
using System.Collections.Generic;

namespace AngularDynamicMenu.Models
{
    public partial class TUser2role
    {
        public int UserRoleId { get; set; }
        public int? UserId { get; set; }
        public int? RoleId { get; set; }

        public TRole Role { get; set; }
        public TUser User { get; set; }
    }
}
