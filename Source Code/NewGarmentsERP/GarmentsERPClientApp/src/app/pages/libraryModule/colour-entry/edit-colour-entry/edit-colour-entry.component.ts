import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { ColourEntryService } from '../../../../@core/mock/library/colour-entry.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { buyer } from '../../../../@core/data/buyer';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../../../@core/data/baseUrl';
import { HTTPService } from '../../../../@core/mock/shared/http.service';

@Component({
  selector: 'ngx-edit-colour-entry',
  templateUrl: './edit-colour-entry.component.html',
  styleUrls: ['./edit-colour-entry.component.scss']
})
export class EditColourEntryComponent extends HTTPService implements OnInit {
  editedId:any;
  public buyerListItems:BuyerProfile[] = [];
  Tostr=new Tostr()
  constructor(
    public colourEntryService:ColourEntryService,
    private buyerProfileService:BuyerProfileService,
    private router:Router,
    private route:ActivatedRoute,
  private toastrService:NbToastrService,
    httpClient: HttpClient,
    toastr: NbToastrService
  ) { 
    super(
      httpClient,
      BaseURL.apiUrl,
      'ColourEntries',
      toastr
     ); 
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.colourEntryService.getColourEntry().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.colourEntryService.colourEntry=items;
  })
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
      this.buyerProfileService.getAll().
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
        form.value.id=this.editedId;
        this.update(form.value,form.value.id),(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService)};
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/colour-entry']);
    }

    backToaColourentryHomePage(){
      this.router.navigate(['/pages/colour-entry']);
    }
}
