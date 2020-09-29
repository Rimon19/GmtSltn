using System;
using System.Collections.Generic;

namespace AngularDynamicMenu.Models
{
    public partial class TRole2accessRight
    {
        public int RoleAccessId { get; set; }
        public int? RoleId { get; set; }
        public string AccessRightId { get; set; }
        public string AccessType { get; set; }
        public string AccessTypeCode { get; set; }

        public TAccessRight AccessRight { get; set; }
        public TRole Role { get; set; }
    }
}
