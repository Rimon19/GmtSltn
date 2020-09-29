import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { DepartmentProfileService } from '../../../../@core/mock/library/department-profile.service';
import { NgForm } from '@angular/forms';
import { DivisionProfileService } from '../../../../@core/mock/library/division-profile.service';
import { DivisionProfile } from '../../../../@core/data/Library-Modul-model/division-profile';

@Component({
  selector: 'ngx-add-department-profile',
  templateUrl: './add-department-profile.component.html',
  styleUrls: ['./add-department-profile.component.scss']
})
export class AddDepartmentProfileComponent implements OnInit {
  public countryList:CountryInfo[]=[];
  public divisionList:DivisionProfile[]=[];
  Tostr=new Tostr()
    constructor(
      private countryService:CountryService,
      private toastrService:NbToastrService,
      private router:Router,
      public departmentProfileService:DepartmentProfileService,
      private divisionProfileService:DivisionProfileService
    ) { }
  
    ngOnInit() {
      this.countryDDL();
      this.divisionDDL();
      this.resetFormForDivisionProfile();
    }
    Active_Inactive: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Active', val: 'Active' },
        { btn: 'Inactive', val: 'Inactive' }
      ]
      // division: any = [
      //     { btn: 'MEEKKHIT AND PRODUCTION LTD.', val:'MEEKKHIT AND PRODUCTION LTD.'}
      //   ]
    countryDDL(){
      this.countryService.getAllCountry().
      subscribe(data=>{
      this.countryList=data;
      console.log('country list',this.countryList);       
      });
     }
     divisionDDL(){
       this.divisionProfileService.getDivisionProfile().subscribe(data=>{
             this.divisionList=data;
       })
     }
     resetFormForDivisionProfile(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.departmentProfileService.departmentProfile = {
        id:0,
        departmentName:'',
        shortName:'',
        division:'',
        address: '',
        contactNumber: '',
        remark: '',
        countryId:0,
        website: '',
        status: '',
        email: '',
        contactPerson:'',
        
      }
      
     } 
     onSubmit(form:NgForm){
      console.log(form);
      this.departmentProfileService.addDepartmentProfile(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/department-profile"]);
      })
    }
    backHomePage(){
      this.router.navigate(['/pages/department-profile']);
      } 
}
