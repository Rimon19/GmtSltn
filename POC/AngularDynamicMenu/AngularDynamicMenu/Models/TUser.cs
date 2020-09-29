using System;
using System.Collections.Generic;

namespace AngularDynamicMenu.Models
{
    public partial class TUser
    {
        public TUser()
        {
            TUser2role = new HashSet<TUser2role>();
        }

        public int UserId { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string Title { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string EmailAddress { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string LoginTries { get; set; }
        public DateTime LastLoginDate { get; set; }
        public char Active { get; set; }
        public int EditedById { get; set; }
        public int CreatedById { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastPasswordChangeDate { get; set; }

        public ICollection<TUser2role> TUser2role { get; set; }
    }
}
