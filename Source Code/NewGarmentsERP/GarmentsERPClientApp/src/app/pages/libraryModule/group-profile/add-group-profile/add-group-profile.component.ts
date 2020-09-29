import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { NgForm } from '@angular/forms';
import { GroupProfileService } from '../../../../@core/mock/library/group-profile.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-add-group-profile',
  templateUrl: './add-group-profile.component.html',
  styleUrls: ['./add-group-profile.component.scss']
})
export class AddGroupProfileComponent implements OnInit {
  public countryList:CountryInfo[]=[];
  Tostr=new Tostr()
  constructor(
    private countryService:CountryService,
    private router:Router,
    private toastrService:NbToastrService,
    public groupProfileService:GroupProfileService
    
    ) { }

  ngOnInit() {
    this.countryDDL();
    this.resetFormForAddGroupProfile()
  }
  resetFormForAddGroupProfile(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.groupProfileService.groupProfile = {
      id:0,
    groupName:'',
    contactPerson:'',
    contactNumber:'',
    countryId:0,
    website:'',
    email:'',
    address:'',
    remark:'',
    status:''
    
      
    }
    
   }
  countryDDL(){
    this.countryService.getAllCountry().
    subscribe(data=>{
    this.countryList=data;
    console.log('country list',this.countryList);       
    });
   } 
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
    onSubmit(form:NgForm){
      console.log(form);
      this.groupProfileService.addGroupProfile(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/group-profile"]);
      })
    }

    backHomePage(){
      this.router.navigate(['/pages/group-profile']);
    }
}
