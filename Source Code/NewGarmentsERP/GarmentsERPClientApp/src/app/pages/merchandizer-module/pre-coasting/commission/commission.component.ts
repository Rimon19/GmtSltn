import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { CommissionCostService } from '../../../../@core/mock/marchandizer/commission-cost.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit ,OnDestroy{
  Tostr=new Tostr();
  precostingId:any=0;
 
  
  constructor(
    private fb: FormBuilder,
    private dialog:MatDialog,
    private router:Router,
    private dateResizeService:DateResizeService,
    private mathdialogService: MatDialogService,
    private commissionCostService:CommissionCostService,
    private toastrService:NbToastrService,
    private route:ActivatedRoute
    ) { 
    
      
  }
  ngOnInit() {
this.loadEditModeDataForCommisionCost();
   }
   ngOnDestroy(){
    this.dateResizeService.preCostingSubject.subscribe(i=>{
      console.log(i);
       this.dateResizeService.preCostingSourceObj.next({index:i.index,costComponentform:i.costComponentform,poNoId:i.poNoId,budgetedCost:1.111});
     });
  }
        
     
loadEditModeDataForCommisionCost(){
  this.commissionCostService.getAll().subscribe(data=>{
    let commissionCosts=data.filter(f=>f.precostingId==this.precostingId);
    if(commissionCosts.length!=0){
      
      this.commissionCostService.commissionInformationForm= this.fb.array([]);
      this.commissionCostService.TotalCommnRate=0;
      this.commissionCostService.TotalAmmount=0;
      (commissionCosts).forEach((itemDts: any) => {
        this.commissionCostService.count=this.commissionCostService.count+1;
        this.commissionCostService.TotalCommnRate +=parseInt(itemDts.commnRate) ;
        this.commissionCostService.TotalAmmount +=parseInt(itemDts.amount);
        this.commissionCostService.commissionInformationForm.push(this.fb.group({
          id:itemDts.id,
          poNoId :itemDts.poNoId,
          particulars :itemDts.particulars,
          commnBase :itemDts.commnBase,
          commnRate:itemDts.commnRate,
          amount:itemDts.amount,
          status :itemDts.status               
        }));
  });
    
    }else{
      this.commissionCostService.commissionDetailsForm();
    }
  })
} 
  onDeleteCommisionCost(commissionInformationForm, i) {
    let idToBeDeleted = commissionInformationForm.value[i].id;

    this.commissionCostService.count = this.commissionCostService.count - 1;
    commissionInformationForm.value.splice(i, 1);
    
    if (idToBeDeleted == 0) {
    this.commissionCostService.loadCommissionCostModelData(commissionInformationForm.value);
    }

    if (idToBeDeleted > 0) {
      this.commissionCostService.delete(idToBeDeleted);
       this.commissionCostService.loadCommissionCostModelData(commissionInformationForm.value);                 
    }
  }
     
      onSubmitCommisionCost(commissionInformationForm){
        commissionInformationForm.value.forEach(element => {
          element.precostingId=this.precostingId ;
         
          if(element.id!=0){
            this.commissionCostService.updateMultiline(element,element.id);
          }
          if(element.id==0){
            console.log(element.id);
            this.commissionCostService.createMultiline(element);
          }
          
        });
       
        this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
        this.commissionCostService.commissionInformationForm= this.fb.array([]);
      }
      // onAdd(){
      //   const dialogConfig = new MatDialogConfig();
      //   dialogConfig.disableClose = true;
      //   dialogConfig.autoFocus= true;
      //   dialogConfig.width="90%";
      //   dialogConfig.height="70%";  
      //   this.dialog.open(AddConsumptionForEmbelCostComponent, dialogConfig);
      // }
      backToPrecostingFromFabricCost(){
        this.router.navigate(["/pages/show-precosting"]);
      }
      
    

}
