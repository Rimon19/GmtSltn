import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { BuyerWiesSeasonService } from '../../../../@core/mock/library/buyer-wies-season.service';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';

@Component({
  selector: 'ngx-edit-buyer-wies-season',
  templateUrl: './edit-buyer-wies-season.component.html',
  styleUrls: ['./edit-buyer-wies-season.component.scss']
})
export class EditBuyerWiesSeasonComponent implements OnInit {

  editedId:any;
  Tostr=new Tostr();

  constructor( private route:ActivatedRoute,
    private router:Router,
    private toastrService:NbToastrService,
    public buyerWiesSeasonService:BuyerWiesSeasonService,
    private buyerProfileService:BuyerProfileService) { 

      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.buyerWiesSeasonService.getAll().subscribe(item=>{
      let items=  item.find(f=>f.id==this.editedId);
      this.buyerWiesSeasonService.buyerWiesSeason=items;
      })

    }
    public buyerProfileListItems:BuyerProfile[]=[];
  ngOnInit() { 
    this.buyerNameDDL();
    this.resetFormForBuyerWiesSeasonEdit();
  }

  buyerNameDDL(){
    this.buyerProfileService.getAll().
    subscribe(data=>{
    this.buyerProfileListItems=data;
    console.log('buyerProfileListItems list',this.buyerProfileListItems)
  });
 }

  resetFormForBuyerWiesSeasonEdit(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.buyerWiesSeasonService.buyerWiesSeason = {
      id:0,
      buyerId:0,
      seasonName:''
    }
  }
  onSubmit(form:NgForm){
      form.value.id=this.editedId;
       this.buyerWiesSeasonService.update(form.value).subscribe(s=>{
       this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
       this.router.navigate(['/pages/Buyer-Wies-Season-list']);
       },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  } 
  backHomePage(){
    this.router.navigate(['/pages/Buyer-Wies-Season-list']);
  }

}
