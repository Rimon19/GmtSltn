import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryLocationMappingService } from '../../../../@core/mock/library/country-location-mapping.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-country-location-mapping',
  templateUrl: './edit-country-location-mapping.component.html',
  styleUrls: ['./edit-country-location-mapping.component.scss']
})
export class EditCountryLocationMappingComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr();
  constructor(
  private countryService:CountryService,
  public countryLocationMappingService:CountryLocationMappingService,
  private router:Router,
  private toastrService:NbToastrService,
  public dropdownValueService:DropdownValueService,
  private route:ActivatedRoute
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
     
      this.countryLocationMappingService.getCountryLocationMapping().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.countryLocationMappingService.countryLocationMapping=items;
      })
    }

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
    form.value.id=this.editedId;
    this.countryLocationMappingService.updateCountryLocationMapping(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
     this.router.navigate(["/pages/country-location-mapping"]);
    })
  
  }

  backTo(){
    this.router.navigate(['/pages/country-location-mapping']);
  }

}
