using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class ProductionFloor
    {
           [Key]
            public int Id {get;set;}
            public string Company {get;set;}
            public string Location {get;set;}
            public int Floor {get;set;}
            public int FloorSequence {get;set;}
            public int ProductionProcessId {get;set;}
            public string Status {get;set;}

    }
}
