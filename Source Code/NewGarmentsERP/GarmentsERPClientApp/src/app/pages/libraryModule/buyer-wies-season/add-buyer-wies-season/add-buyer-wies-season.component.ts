import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { BuyerWiesSeasonService } from '../../../../@core/mock/library/buyer-wies-season.service';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';

@Component({
  selector: 'ngx-add-buyer-wies-season',
  templateUrl: './add-buyer-wies-season.component.html',
  styleUrls: ['./add-buyer-wies-season.component.scss']
})
export class AddBuyerWiesSeasonComponent implements OnInit { 

  Tostr=new Tostr()
  constructor(
    private toastrService:NbToastrService, 
    private router:Router,
    private buyerProfileService:BuyerProfileService,
    public buyerWiesSeasonService:BuyerWiesSeasonService,
    
    ) { }
  public buyerProfileListItems:BuyerProfile[]=[]; 
  ngOnInit() {
    this.buyerNameDDL();
    this.resetFormForBuyerWiesSeasonEntries();
  }

  buyerNameDDL(){
    this.buyerProfileService.getAll().
    subscribe(data=>{
    this.buyerProfileListItems=data;
    console.log('buyerProfileListItems list',this.buyerProfileListItems)
  });
 }
   resetFormForBuyerWiesSeasonEntries(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.buyerWiesSeasonService.buyerWiesSeason = {
      id:0,
      buyerId:0,
      seasonName:''
    }
  }

  onSubmit(form:NgForm){
    console.log(form);
    this.buyerWiesSeasonService.add(form.value).subscribe(res=>{
     this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
     this.router.navigate(["/pages/Buyer-Wies-Season-list"]);
    })
  }

  backHomePage(){
    this.router.navigate(['/pages/Buyer-Wies-Season-list']);
  }
}
