import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { DivisionProfileService } from '../../../../@core/mock/library/division-profile.service';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-add-division-profileng',
  templateUrl: './add-division-profileng.component.html',
  styleUrls: ['./add-division-profileng.component.scss']
})
export class AddDivisionProfilengComponent implements OnInit {
public countryList:CountryInfo[]=[];
Tostr=new Tostr()
  constructor(
    private countryService:CountryService,
    private toastrService:NbToastrService,
    private router:Router,
    public divisionProfileService:DivisionProfileService,
    public dropdownValueService:DropdownValueService
  ) { }

  ngOnInit() {
    this.countryDDL();
    this.resetFormForDivisionProfile();
    this.dropdownValueService.getCompany();

  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
    // company: any = [
    //     { btn: 'MEEK KHIT LIMITED', val: 'MEEK KHIT LIMITED' }
    //   ]
  countryDDL(){
    this.countryService.getAllCountry().
    subscribe(data=>{
    this.countryList=data;
    console.log('country list',this.countryList);       
    });
   }
   resetFormForDivisionProfile(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.divisionProfileService.divisionProfile = {
      id:0,
      divisionName:'',
      shortName:'',
      companyName:'',
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
    this.divisionProfileService.addDivisionProfile(form.value).subscribe(res=>{
     this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
     this.router.navigate(["/pages/division-profile"]);
    })
  }
  backHomePage(){
    this.router.navigate(['/pages/division-profile']);
    } 
}
