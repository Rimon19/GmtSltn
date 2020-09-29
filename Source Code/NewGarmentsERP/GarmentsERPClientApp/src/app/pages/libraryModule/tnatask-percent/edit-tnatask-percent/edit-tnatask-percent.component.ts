import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TNATaskPercentService } from '../../../../@core/mock/library/tnatask-percent.service';
import { TNATaskNameEntryService } from '../../../../@core/mock/library/tnatask-name-entry.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { buyer } from '../../../../@core/data/buyer';
import { TNATaskNameEntry } from '../../../../@core/data/Library-Modul-model/tnatask-name-entry';
import { NgForm } from '@angular/forms';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';

@Component({
  selector: 'ngx-edit-tnatask-percent',
  templateUrl: './edit-tnatask-percent.component.html',
  styleUrls: ['./edit-tnatask-percent.component.scss']
})
export class EditTNATaskPercentComponent implements OnInit {

  public tNATaskNameEntryListItems:TNATaskNameEntry[]=[];
  public buyerListItems:BuyerProfile[] = [];
  Tostr=new Tostr();
  editedId:any;
  constructor(
    public tNATaskNameEntryService:TNATaskNameEntryService,
    public tNATaskPercentService:TNATaskPercentService,
    private router:Router,
    private route:ActivatedRoute,
    private buyerProfileService:BuyerProfileService,
    private toastrService:NbToastrService,
    
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.tNATaskPercentService.getTNATaskPercent().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.tNATaskPercentService.tNATaskPercent=items;
    })
    }

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
      form.value.id=this.editedId;
    this.tNATaskPercentService.updateTNATaskPercent(form.value).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/tNA-task-percent']);
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
      }  
      backHomePage(){
        this.router.navigate(['/pages/tNA-task-percent']);
      }
}
