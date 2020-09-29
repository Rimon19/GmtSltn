import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
@Component({
  selector: 'ngx-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
 
 
  
    Tostr=new Tostr();
    
    constructor(
    public countryService:CountryService,
    private router:Router,
    private dateResizeService:DateResizeService,
    
    private toastrService:NbToastrService,
    private dropdownValueService:DropdownValueService
      ) { }
  
    ngOnInit() {
      this.resetForm();
      
    }
  
     resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.countryService.countryInfo = {
      regionID: 0,
      region_Name: '',
      cuttOff: ''  
    }
    
   }
  
  
    onSubmit(){  
      
   console.log(this.countryService.countryInfo);
    this.countryService.addCountry(this.countryService.countryInfo).subscribe(res=>{
      console.log(res);       
     this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      this.resetForm();
     this.router.navigate(["/pages/show-country"]);
     
    })
      
    }
  
  
      backTo(){
        this.router.navigate(['/pages/show-country']);
      }
      
      
    
}
