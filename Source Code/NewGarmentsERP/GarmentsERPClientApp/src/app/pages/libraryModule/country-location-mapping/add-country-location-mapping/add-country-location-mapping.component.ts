import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { CountryLocationMappingService } from '../../../../@core/mock/library/country-location-mapping.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-add-country-location-mapping',
  templateUrl: './add-country-location-mapping.component.html',
  styleUrls: ['./add-country-location-mapping.component.scss']
})
export class AddCountryLocationMappingComponent implements OnInit {
  
  
  Tostr=new Tostr();
  constructor(
  private countryService:CountryService,
  public countryLocationMappingService:CountryLocationMappingService,
  private router:Router,
  private toastrService:NbToastrService,
  public dropdownValueService:DropdownValueService
    ) { }

  ngOnInit() {
    this.dropdownValueService.getRegion();
    this.resetCountryLocationMappingInfo();
  }
 
   resetCountryLocationMappingInfo(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.countryLocationMappingService.countryLocationMapping = {
      id: 0,
      countryId: 0,
      ultimateCountryName:'',
    }
    
   }
   onSubmit(form:NgForm){
    console.log(form);
    this.countryLocationMappingService.addCountryLocationMapping(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
     this.router.navigate(["/pages/country-location-mapping"]);
    })
  
  }

  backTo(){
    this.router.navigate(['/pages/country-location-mapping']);
  }

}
