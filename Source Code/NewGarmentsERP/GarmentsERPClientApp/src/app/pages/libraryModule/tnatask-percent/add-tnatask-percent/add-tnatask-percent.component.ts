import { Component, OnInit } from '@angular/core';
import { TNATaskNameEntryService } from '../../../../@core/mock/library/tnatask-name-entry.service';
import { TNATaskNameEntry } from '../../../../@core/data/Library-Modul-model/tnatask-name-entry';
import { NgForm } from '@angular/forms';
import { TNATaskPercentService } from '../../../../@core/mock/library/tnatask-percent.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { buyer } from '../../../../@core/data/buyer';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';
@Component({
  selector: 'ngx-add-tnatask-percent',
  templateUrl: './add-tnatask-percent.component.html',
  styleUrls: ['./add-tnatask-percent.component.scss']
})
export class AddTNATaskPercentComponent implements OnInit {
  public tNATaskNameEntryListItems:TNATaskNameEntry[]=[];
  public buyerListItems:BuyerProfile[] = [];
  Tostr=new Tostr();
  constructor(
    public tNATaskNameEntryService:TNATaskNameEntryService,
    public tNATaskPercentService:TNATaskPercentService,
    private router:Router,
    private buyerProfileService:BuyerProfileService,
    private toastrService:NbToastrService,
    
    ) { }

  ngOnInit() {
    this.tnaTaskNameDDL();
    this.resetFormForTNATaskPercent();
    this.buyerDDL();
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
    tnaTaskNameDDL(){
      this.tNATaskNameEntryService.getTNATaskNameEntry().
      subscribe(data=>{
      this.tNATaskNameEntryListItems=data;
      console.log('tNATaskNameEntryListItems list',this.tNATaskNameEntryListItems)
    });
   }
   buyerDDL(){
    this.buyerProfileService.getAll().
    subscribe(data=>{
    this.buyerListItems=data;
    console.log('buyer list',this.buyerListItems)
    });
}  
   resetFormForTNATaskPercent(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.tNATaskPercentService.tNATaskPercent = {
      id:0,
      taskNameId:0,
      buyerNameId:0,
      startPercent:0,
      noticeBefore:0,
      endPercent:0,
      status:'',
    }
    
   }
   onSubmit(form:NgForm){
     console.log(form);
     this.tNATaskPercentService.addTNATaskPercent(form.value).subscribe(res=>{
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      this.router.navigate(["/pages/tNA-task-percent"]);
     })
   }

   backHomePage(){
    this.router.navigate(['/pages/tNA-task-percent']);
  }
}
