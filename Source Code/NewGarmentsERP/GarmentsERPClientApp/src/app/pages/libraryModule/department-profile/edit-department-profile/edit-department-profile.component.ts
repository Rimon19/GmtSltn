import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentProfileService } from '../../../../@core/mock/library/department-profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CountryService } from '../../../../@core/mock/country.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { DivisionProfileService } from '../../../../@core/mock/library/division-profile.service';
import { DivisionProfile } from '../../../../@core/data/Library-Modul-model/division-profile';

@Component({
  selector: 'ngx-edit-department-profile',
  templateUrl: './edit-department-profile.component.html',
  styleUrls: ['./edit-department-profile.component.scss']
})
export class EditDepartmentProfileComponent implements OnInit {
  editedId:any;
  public countryList:CountryInfo[]=[];
  public divisionList:DivisionProfile[]=[];
  Tostr=new Tostr()
    constructor(
      private countryService:CountryService,
      private toastrService:NbToastrService,
      private router:Router,
      private route:ActivatedRoute,
      public departmentProfileService:DepartmentProfileService,
      private divisionProfileService:DivisionProfileService
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.departmentProfileService.getDepartmentProfile().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.departmentProfileService.departmentProfile=items;
    })

    }
  
    ngOnInit() {
      this.countryDDL();
      this.resetFormForDivisionProfile();
    }
    Active_Inactive: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Active', val: 'Active' },
        { btn: 'Inactive', val: 'Inactive' }
      ]
      division: any = [
          { btn: 'MEEKKHIT AND PRODUCTION LTD.', val:'MEEKKHIT AND PRODUCTION LTD.'}
        ]
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
     form.value.id=this.editedId;
      this.departmentProfileService.updateDepartmentProfile(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/department-profile']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  } 

  backHomePage(){
    this.router.navigate(['/pages/department-profile']);
    } 

}
