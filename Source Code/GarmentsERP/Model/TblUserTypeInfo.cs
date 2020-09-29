using System;
using System.Collections.Generic;

namespace GarmentsERP.Model
{
    public partial class TblUserTypeInfo
    {
        public TblUserTypeInfo()
        {
            TblUserInfo = new HashSet<TblUserInfo>();
        }

        public int UserTypeId { get; set; }
        public string UserType { get; set; }

        public ICollection<TblUserInfo> TblUserInfo { get; set; }
    }
}
