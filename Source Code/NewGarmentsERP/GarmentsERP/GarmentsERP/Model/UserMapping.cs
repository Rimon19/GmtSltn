using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model
{
    public class UserMapping
    {
        [Key]
 public int Id {get;set;}
public int UserId {get;set;}
public int EmpCategoryId {get;set;}
public int DepartmentId {get;set;}
public int DesignationId {get;set;}
public int AdditionDesignationId { get;set;}
    }
}
