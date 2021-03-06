﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class AccountingYearSubInfo
    {
        [Key]
        public int Id { get; set; }
        public string StartingDate { get; set; }
        public string EndingDate { get; set; }
        public string Period { get; set; }
        public bool Locked { get; set; }
        public int AccountingYearId { get; set; }
    }
}
