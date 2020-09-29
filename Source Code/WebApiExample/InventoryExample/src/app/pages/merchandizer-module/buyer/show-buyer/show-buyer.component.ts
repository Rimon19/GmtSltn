import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbComponentStatus, NbDialogService, NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { buyer } from '../../../../@core/data/buyer';
import { LocalDataSource } from 'ng2-smart-table';
import { BuyerService } from '../../../../@core/mock/buyer.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { MatSnackBar } from '@angular/material';
import { Tostr } from '../../../../@core/data/tostr.model';
@Component({
  selector: 'ngx-show-buyer',
  templateUrl: './show-buyer.component.html',
  styleUrls: ['./show-buyer.component.scss']
})
export class ShowBuyerComponent implements OnInit,OnDestroy {
  status: NbComponentStatus = 'primary';

  Tostr=new Tostr();
  buyer:buyer;
  subscription:Subscription;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true
    },
     edit: {
       
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true
    },
    
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    details: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      buyerId: {
        title: 'Buyer Id',
        type: 'int',
        "show": false
      },
      buyerName: {
        title: 'Buyer Name',
        type: 'string',
       
      },
      details: {
        title: 'Buyer Details',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();  
  public buyerListItems: Array<buyer> = [];
  constructor(private buyerService: BuyerService,
    private mathdialogService: MatDialogService,
    private toastrService:NbToastrService) { }

  ngOnInit() {
    this.refreshbuyerList();
    if (this.settings.columns["buyerId"].hasOwnProperty("show")) {
      if (this.settings.columns["buyerId"].show ==false) {
       delete  this.settings.columns["buyerId"];
         
      }
}
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  refreshbuyerList(){
    this.subscription= this.buyerService.getAllBuyer().subscribe(data=>{
       this.source.load(data);
       this.buyerListItems=data;
       console.log(this.buyerListItems);
     });
   }
   addRecord(event) {
    this.buyer = {
       buyerId:0,
       buyerName : event.newData.buyerName,
       details : event.newData.details
                
   };
   console.log(this.buyer);
   if(this.buyer.buyerName !=""&&this.buyer.details!=""){
   this.subscription=  this.buyerService.addBuyer(this.buyer ).subscribe(s=>{
     
      this.Tostr.showToast(this.status,"", "Saved Successfully", "",this.toastrService);
      this.refreshbuyerList();

    })
  }else{
    if(this.buyer.buyerName==""){
     this.Tostr.showToast("danger","buyer Name ", "Filed is Requird ! ", "",this.toastrService);
    }
    if(this.buyer.details==""){
     this.Tostr.showToast("danger","buyer Details ", "Filed is Requird ! ", "",this.toastrService);
   }
      
  }
 }
 updateRecord(event) {
  this.buyer = {
    buyerId:event.newData.buyerId,
    buyerName :event.newData.buyerName,
    details :event.newData.details          
};
       if(this.buyer.buyerName !=""&&this.buyer.details!=""){
           this.subscription= this.buyerService.updateBuyer(this.buyer).subscribe(s=>{
             this.Tostr.showToast(this.status,"", "Updated Successfully", "",this.toastrService);
             this.refreshbuyerList();
           })
         }
         else{
           if(this.buyer.buyerName==""){
            this.Tostr.showToast("danger","Company Name ", "Filed is Requird ! ", "",this.toastrService);
           }
           if(this.buyer.details==""){
            this.Tostr.showToast("danger"," Company Details ", "Filed is Requird ! ", "",this.toastrService);
          }
       
         }
} 
deleteRecord(event){
  console.log(event.data.buyerId);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
  .afterClosed().subscribe(res=>{
   if(res){
     this.buyerService.deleteBuyer(event.data.buyerId).subscribe(res=>{
       this.Tostr.showToast(this.status,"", "Deleleted", "Successfully",this.toastrService);
       this.refreshbuyerList();
     },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService)});
   }
  });
}
}