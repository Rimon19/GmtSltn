import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CountryService } from '../../../../@core/mock/country.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { DivisionProfileService } from '../../../../@core/mock/library/division-profile.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-division-profileng',
  templateUrl: './edit-division-profileng.component.html',
  styleUrls: ['./edit-division-profileng.component.scss']
})
export class EditDivisionProfilengComponent implements OnInit {
  editedId:any;
  public countryList:CountryInfo[]=[];
Tostr=new Tostr()
  constructor(
    private countryService:CountryService,
    private toastrService:NbToastrService,
    private router:Router,
    private route:ActivatedRoute,
    public divisionProfileService:DivisionProfileService,
    public dropdownValueService:DropdownValueService
  ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.divisionProfileService.getDivisionProfile().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.divisionProfileService.divisionProfile=items;
  })

   }

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
     form.value.id=this.editedId;
    this.divisionProfileService.updateDivisionProfile(form.value).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/division-profile']);
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}
backHomePage(){
  this.router.navigate(['/pages/division-profile']);
  } 
}
