using System;
using System.Collections.Generic;

namespace AngularCoreMVCPostgreSQL.Models
{
    public partial class Tblemployee
    {
        public int Employeeid { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Department { get; set; }
        public string Gender { get; set; }
    }
}
