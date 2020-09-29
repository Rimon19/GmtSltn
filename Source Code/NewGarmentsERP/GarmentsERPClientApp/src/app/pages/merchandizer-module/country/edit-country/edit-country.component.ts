import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Router, ActivatedRoute } from '@angular/router';
  import { NbToastrService } from '@nebular/theme';  
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
@Component({
  selector: 'ngx-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {

   
    

  editedId;
  Tostr=new Tostr();
  
  constructor(
  public countryService:CountryService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.countryService.getAllCountry().subscribe(data=>{
 let items=  data.find(f=>f.regionID==this.editedId);
 this.countryService.countryInfo=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    
  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.countryService.countryInfo = {
  regionID: 0,
  region_Name: '' ,
  cuttOff: '' 
 
}

}


  onSubmit(){  
    
  
  this.countryService.updateCountry(this.countryService.countryInfo).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/show-country"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/show-country']);
    }

    
    
  
}
