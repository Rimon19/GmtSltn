import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../@core/mock/users.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { UserMapping } from './../../../@core/data/user-mapping';
import { UserMappingService } from './../../../@core/mock/user-mapping.service';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { EmpCategory } from '../../../@core/data/emp-category';
import { Departments } from '../../../@core/data/departments';
import { EmpDesignation } from '../../../@core/data/emp-designation';
import { EmpAdditionalDesignation } from '../../../@core/data/emp-additional-designation';

@Component({
  selector: 'ngx-add-user-mapping',
  templateUrl: './add-user-mapping.component.html',
  styleUrls: ['./add-user-mapping.component.scss']
})
export class AddUserMappingComponent implements OnInit {
public userList:UserData[]=[];
public empCategoryList:EmpCategory[]=[];
public empDepartmentList:Departments[]=[];
public empEmpDesignationsList:EmpDesignation[]=[];
public empAdditionalDesignationsList:EmpAdditionalDesignation[]=[];
Tostr=new Tostr()
  constructor(
    private userService:UserService,
    private staticFeaturesService:StaticFeaturesService,
    public  userMappingService:UserMappingService,
    private toastrService:NbToastrService,
    private router:Router,
  ) { }
  ngOnInit() {
    this.userDDL();
    this.empEmpCategorieDDL();
    this.empDepartmentDDL();
    this.empDesignationsDDL();
    this.empAdditionalDesignationsDDL();
    this.resetFormForUserMapping();
  }
   userDDL(){
     this.userService.getAllUser().subscribe(data=>{
       this.userList=data;
       console.log(this.userList);
     })
   }
   empEmpCategorieDDL(){
     this.staticFeaturesService.getEmpCategorie().subscribe(data=>{
       this.empCategoryList=data;
       console.log( this.empCategoryList);
     })
   }
   empDepartmentDDL(){
     this.staticFeaturesService.getEmpDepartments().subscribe(data=>{
        this.empDepartmentList=data;
        
     })
   }
   empDesignationsDDL(){
     this.staticFeaturesService.getEmpDesignations().subscribe(data=>{
        this.empEmpDesignationsList=data;
        console.log(this.empEmpDesignationsList)
        
     })
   }
   empAdditionalDesignationsDDL(){
     this.staticFeaturesService.getEmpAdditionalDesignations().subscribe(data=>{
        this.empAdditionalDesignationsList=data;
        console.log(this.empAdditionalDesignationsList)
        
     })
   }
   resetFormForUserMapping(form?:NgForm){
    if(form!=null)
    form.resetForm();
   
    this.userMappingService.userMapping = {
      id: 0,
      userId: 0,
      empCategoryId: 0,
      departmentId: 0,
      designationId: 0,
      additionDesignationId: 0
      
    }
    
   }
   onSubmit(form:NgForm){
                console.log(form.value);
                this.userMappingService.addUserMapping(form.value).subscribe(data=>{

                });
                this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
                  this.resetFormForUserMapping(form);
                  this.router.navigate(["/pages/user-mapping"]);
   }
  }
    


