import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColourEntryService } from '../../../../@core/mock/library/colour-entry.service';
import { buyer } from '../../../../@core/data/buyer';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';
import { BaseURL } from '../../../../@core/data/baseUrl';
import { HTTPService } from '../../../../@core/mock/shared/http.service';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../../../../@core/mock/shared/utility.service';

@Component({
  selector: 'ngx-add-colour-entry',
  templateUrl: './add-colour-entry.component.html',
  styleUrls: ['./add-colour-entry.component.scss']
})
export class AddColourEntryComponent  extends HTTPService  implements OnInit {
  public buyerListItems:BuyerProfile[] = [];
  Tostr=new Tostr()
  constructor(
    public colourEntryService:ColourEntryService,
    private buyerService:BuyerProfileService,
    private router:Router,
    private toastrService:NbToastrService,
    private utilityService:UtilityService,
    httpClient: HttpClient,
    toastr: NbToastrService
  ) {
     super(
    httpClient,
    BaseURL.apiUrl,
    'ColourEntries',
    toastr
   ); 
   }

  ngOnInit() {
    this.resetFormForColourEntry();
    this.buyerDDL();
  }
  resetFormForColourEntry(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.colourEntryService.colourEntry = {
  id:0,
  colorName:'',
  status:'',
  buyerNameId:''
      
    }
    
     }
     buyerDDL(){
      this.buyerService.getAll().
      subscribe(data=>{
      this.buyerListItems=data;
      console.log('buyer list',this.buyerListItems)
      });
}  

  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
    division: any = [
        { btn: 'MEEKKHIT AND PRODUCTION LTD.', val:'MEEKKHIT AND PRODUCTION LTD.'}
      ]
      onSubmit(form:NgForm){
        this.create(form.value);
        this.resetFormForColourEntry();
         this.router.navigate(["/pages/colour-entry"]);
       
      }
      backToaColourentryHomePage(){
        this.router.navigate(['/pages/colour-entry']);
      }
}

