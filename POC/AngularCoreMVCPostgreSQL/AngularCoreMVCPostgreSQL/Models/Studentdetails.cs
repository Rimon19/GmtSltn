using System;
using System.Collections.Generic;

namespace AngularCoreMVCPostgreSQL.Models
{
    public partial class Studentdetails
    {
        public int Stddtlid { get; set; }
        public int? Stdid { get; set; }
        public string Major { get; set; }
        public string Year { get; set; }
        public string Term { get; set; }
        public string Grade { get; set; }
    }
}
