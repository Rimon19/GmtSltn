import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { YarnPurchaseRequisitionService } from '../../../@core/data/commercial/yarn-purchase-requisition.service';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-yarn-purchase-requisition',
  templateUrl: './yarn-purchase-requisition.component.html',
  styleUrls: ['./yarn-purchase-requisition.component.scss']
})
export class YarnPurchaseRequisitionComponent implements OnInit {

  displayedColumns = ['id','requisitionNo','itemCategoryId','requiredDate','payMode','requisitionDate','currencyId','source','doNo','attention','dealingMerchant','piBasis','readytoApprove','remarks',];
  Tostr=new Tostr();
  
  
  constructor(private yarnPurchaseRequisitionService:YarnPurchaseRequisitionService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dropdownValueService:DropdownValueService
     ) { }
  
  ngOnInit() {
  
 
  
  this.yarnPurchaseRequisitionService.getDataSource();
  }
  yarnPurchaseRequisitionDetails(masterId){
    localStorage.setItem("yarnPurchaseRequisitionId", masterId);
    this.router.navigate(["/pages/commercial/YarnPurchaseRequisition-Details",masterId]);
  }
  
  redirectToAddPage(){
    this.router.navigate(["/pages/commercial/Add-YarnPurchaseRequisition"]);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/commercial/Edit-YarnPurchaseRequisition",element.id]);  
  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.yarnPurchaseRequisitionService.deleteWithOutSubcribe(element.id).subscribe(res=>{
                   // this.refresList();
                   this.yarnPurchaseRequisitionService.getDataSource();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  
 

}
