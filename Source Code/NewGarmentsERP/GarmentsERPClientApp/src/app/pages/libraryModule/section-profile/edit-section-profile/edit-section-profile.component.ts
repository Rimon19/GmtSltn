import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SectionProfileService } from '../../../../@core/mock/library/section-profile.service';
import { DepartmentProfileService } from '../../../../@core/mock/library/department-profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CountryService } from '../../../../@core/mock/country.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { DepartmentProfile } from '../../../../@core/data/Library-Modul-model/department-profile';
import { CountryInfo } from '../../../../@core/data/country-info.model';

@Component({
  selector: 'ngx-edit-section-profile',
  templateUrl: './edit-section-profile.component.html',
  styleUrls: ['./edit-section-profile.component.scss']
})
export class EditSectionProfileComponent implements OnInit {
  editedId:any;
  public countryList:CountryInfo[]=[];
  public DepartmentProfileList:DepartmentProfile[]=[];
  Tostr=new Tostr()
    constructor(
      private countryService:CountryService,
      private toastrService:NbToastrService,
      private router:Router,
      private route:ActivatedRoute,
      private departmentProfileService:DepartmentProfileService,
      public sectionProfileService:SectionProfileService,
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.sectionProfileService.getSectionProfile().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.sectionProfileService.sectionProfile=items;
    })

     }
  
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
     form.value.id=this.editedId;
      this.sectionProfileService.updateSectionProfile(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/section-profile']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backHomePage(){
    this.router.navigate(['/pages/section-profile']);
  }
}
