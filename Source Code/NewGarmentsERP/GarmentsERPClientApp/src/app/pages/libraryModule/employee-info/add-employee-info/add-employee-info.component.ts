import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { EmployeeInfoService } from '../../../../@core/mock/library/employee-info.service';
import { CompanyService } from '../../../../@core/mock/company.service';
import { LocationService } from '../../../../@core/mock/location.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';


@Component({
  selector: 'ngx-add-employee-info',
  templateUrl: './add-employee-info.component.html',
  styleUrls: ['./add-employee-info.component.scss']
})
export class AddEmployeeInfoComponent implements OnInit {
  religion:any[] = [];
  bloodGroup :any[] = [];
  employeeCategory : any[] = [];
  designationLebels : any []=[];
  designation:any []=[];
  functionalSuperiors :any[]=[];
  adminSuperiors:any[]=[];
  company :any[]=[];
  location:any[]=[];
  floor :any[]=[];
  division :any[]=[];
  department:any[]=[];
  section:any[]=[];
  lineNo:any[]=[];

  Tostr=new Tostr() 
  constructor( public employeeInfoService:EmployeeInfoService,
    private router:Router,
    private staticFeaturesService:StaticFeaturesService,
    private companyService :CompanyService,
    private locationService:LocationService,
    private dateResizeService:DateResizeService,
    private toastrService:NbToastrService,) { }

  ngOnInit() { 
    this.resetFormForEmployeeInfo();
    this.ReligionDDL();
    this.BloodGroupsDDL();
    this.EmployeeCategoryDDL();
    this.DesignationLebelsDDL();
    this.DesignationDDL();
    this.FunctionalSuperiorsDDL();
    this.AdminSuperiorsDDL();
    this.CompanyDDL();
    this.LocationDDL();
    this.FloorDDL();
    this.DepartmentDDL();
    this.DivisionDDL();
    this.SectionDDL();
    this.LineNoDDL();

  }

  resetFormForEmployeeInfo(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.employeeInfoService.employeeInfo= {
      id :0,
      employeeCode :'',
      employeeFirstName :'',
      employeeMiddleName :'',
      employeeLastName :'',
      employeeNameBangla :'',
      fathersName :'',
      fathersNameBangla :'',
      mothersName :'',
      mothersNameBangla :'',
      sex:'',
      birthPlace :'',
      dateofBirth :'',
      age :'',
      religionId:0,
      maritalStatus :'',
      bloodGroupId :0,
      nationality :'',
      nationalId :0,
      passportNo :0,
      employeeCategoryId :0,
      designationLebelId :0,
      designationId :0,
      functionalSuperiorId :0,
      adminSuperiorId :0,
      idCardNo :0,
      joiningDate :'',
      confirmationDate :'',
      punchCardNo :0,
      remarks :'',
      companyId :0,
      locationId :0,
      floorId :0,
      divisionId :0,
      departmentId :0,
      sectionId :0,
      lineNoId :0,
         }
    
     }
     maritalStatus: any=[
      { btn: 'Maried', val: 'Maried' },
      { btn: 'Unmaried', val: 'Unmaried' },
     ]
     gender: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Male', val: 'Male' },
        { btn: 'Female', val: 'Female' },
        { btn: 'Other', val: 'Other' }
      ]

     ReligionDDL(){
      this.staticFeaturesService.getAllReligion().
      subscribe(data=>{
      this.religion=data;
      console.log('religion list',this.religion)
      });
    } 

  BloodGroupsDDL(){
    this.staticFeaturesService.getAllBloodGroups().
    subscribe(data=>{
    this.bloodGroup=data;
    console.log('bloodGroup list',this.bloodGroup)
    });
  } 

    EmployeeCategoryDDL(){
        this.staticFeaturesService.getAllEmployeeCategories().
        subscribe(data=>{
        this.employeeCategory=data;
        console.log('employeeCategory list',this.employeeCategory)
        });
    } 


    DesignationLebelsDDL(){
      this.staticFeaturesService.getAllDesignationLebels().
      subscribe(data=>{
      this.designationLebels=data;
      console.log('designationLebels list',this.designationLebels)
      });
    } 
    DesignationDDL(){
      this.staticFeaturesService.getAllDesignations().
      subscribe(data=>{
      this.designation=data;
      console.log('designation list',this.designation)
      });
    } 

    FunctionalSuperiorsDDL(){
      this.staticFeaturesService.getAllfunctionalSuperior().
      subscribe(data=>{
      this.functionalSuperiors=data;
      console.log('functionalSuperiors list',this.functionalSuperiors)
      });
    } 

    FloorDDL(){
      this.staticFeaturesService.getAllFloors().
      subscribe(data=>{
      this.floor=data;
      console.log('floor list',this.floor)
      });
    } 

    CompanyDDL(){
      this.companyService.getAllCompany().
      subscribe(data=>{
      this.company=data;
      console.log('company list',this.company)
      });
    } 
    LocationDDL(){
      this.locationService.getAllLocations().
      subscribe(data=>{
      this.location=data;
      console.log('location list',this.location)
      });
    } 

    AdminSuperiorsDDL(){
      this.staticFeaturesService.getAllAdminSuperiors().
      subscribe(data=>{
      this.adminSuperiors=data;
      console.log('adminSuperiors list',this.adminSuperiors)
      });
    } 
    DivisionDDL(){
      this.staticFeaturesService.getAllDivisions().
      subscribe(data=>{
      this.division=data;
      console.log('division list',this.division)
      });
    } 
    DepartmentDDL(){
      this.staticFeaturesService.getAllDepartments(). 
      subscribe(data=>{
      this.department=data;
      console.log('department list',this.department)
      });
    } 
    SectionDDL(){
      this.staticFeaturesService.getAllSections().
      subscribe(data=>{
      this.section=data;
      console.log('section list',this.section)
      });
    } 
    LineNoDDL(){
      this.staticFeaturesService.getAllLineNoes().
      subscribe(data=>{
      this.lineNo=data;
      console.log('lineNo list',this.lineNo)
      });
    } 

    onSubmit(form:NgForm){
      console.log(form);
      form.value.dateofBirth=this.dateResizeService.dateResize(form.value.dateofBirth);
      form.value.joiningDate=this.dateResizeService.dateResize(form.value.joiningDate);
      form.value.confirmationDate=this.dateResizeService.dateResize(form.value.confirmationDate);
       this.employeeInfoService.add(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/EmployeeInfo-list"]);
      })
    }


}
