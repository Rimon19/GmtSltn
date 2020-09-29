import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { SectionProfileService } from '../../../../@core/mock/library/section-profile.service';
import { DepartmentProfileService } from '../../../../@core/mock/library/department-profile.service';
import { DepartmentProfile } from '../../../../@core/data/Library-Modul-model/department-profile';

@Component({
  selector: 'ngx-add-section-profile',
  templateUrl: './add-section-profile.component.html',
  styleUrls: ['./add-section-profile.component.scss']
})
export class AddSectionProfileComponent implements OnInit {

  public countryList:CountryInfo[]=[];
  public DepartmentProfileList:DepartmentProfile[]=[];
  Tostr=new Tostr()
    constructor(
      private countryService:CountryService,
      private toastrService:NbToastrService,
      private router:Router,
      private departmentProfileService:DepartmentProfileService,
      public sectionProfileService:SectionProfileService,
    ) { }
  
    ngOnInit() {
      this.countryDDL();
      this.departmentDDL();
      this.resetFormForSectionProfile();
    }
    Active_Inactive: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Active', val: 'Active' },
        { btn: 'Inactive', val: 'Inactive' }
      ]
      company: any = [
          { btn: 'MEEKKHIT LTD.', val:'MEEKKHIT LTD.'}
        ]
    countryDDL(){
      this.countryService.getAllCountry().
      subscribe(data=>{
      this.countryList=data;
      console.log('country list',this.countryList);       
      });
     }
     departmentDDL(){
      this.departmentProfileService.getDepartmentProfile().
      subscribe(data=>{
      this.DepartmentProfileList=data;
      console.log('DepartmentProfileList',this.DepartmentProfileList);       
      });
     }
     resetFormForSectionProfile(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.sectionProfileService.sectionProfile = {
        id:0,
    sectionName: '',
    shortName: '',
    departmentId:0,
    address: '',
    contactNumber: '',
    contactPerson: '',
    remark: '',
    countryId: 0,
    website: '',
    status:'',
    email: '', 
      }
      
     } 
     onSubmit(form:NgForm){
      console.log(form);
      this.sectionProfileService.addSectionProfile(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/section-profile"]);
      })
    }
    backHomePage(){
      this.router.navigate(['/pages/section-profile']);
    }

}
