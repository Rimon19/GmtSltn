import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { YarnPurchaseRequisitionService } from '../../../../@core/data/commercial/yarn-purchase-requisition.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';


@Component({
  selector: 'ngx-add-yarn-purchase-requisition',
  templateUrl: './add-yarn-purchase-requisition.component.html',
  styleUrls: ['./add-yarn-purchase-requisition.component.scss']
})
export class AddYarnPurchaseRequisitionComponent implements OnInit {


  
  constructor(
  public yarnPurchaseRequisitionService:YarnPurchaseRequisitionService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService
    ) { }

  ngOnInit() {
    this.yarnPurchaseRequisitionService.resetForm();
    this.dropdownValueService.getItemCategory();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getSource();
this.dropdownValueService.getPIBasis();
this.dropdownValueService.getYesNo();

  }



  onSubmit(){  
    
      if(this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.currencyId==''){
        this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.currencyId=0;
      }

      if(this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.itemCategoryId==''){
        this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.itemCategoryId=0;

      }
       this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.requiredDate=this.dateResizeService.dateResize(this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.requiredDate);
       this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.requisitionDate=this.dateResizeService.dateResize(this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.requisitionDate);
    

  
  this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.approvedDate=this.dateResizeService.dateResize(new Date);
  this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.approvedBy=ApprovedBy.userName;
  this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.isApproved=true;
  this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.entryBy=EntryBy.userName;
  this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.status='Active';
this.yarnPurchaseRequisitionService.yarnPurchaseRequisition.entryDate=this.dateResizeService.dateResize(new Date);
  this.yarnPurchaseRequisitionService.create(this.yarnPurchaseRequisitionService.yarnPurchaseRequisition);
        
    this.yarnPurchaseRequisitionService.resetForm();
   this.router.navigate(["/pages/commercial/YarnPurchaseRequisition"]);
   
 
    
  }


    backTo(){
      this.router.navigate(['/pages/commercial/YarnPurchaseRequisition']);
    }

}
