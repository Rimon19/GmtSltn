﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class Years
    {
        [Key]
        public int Id { get; set; }
        public int Year { get; set; }
        public string status { get; set; }
    }
}
