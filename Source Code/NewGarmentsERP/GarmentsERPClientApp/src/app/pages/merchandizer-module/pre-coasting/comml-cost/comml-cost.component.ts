import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CommercialCosts } from '../../../../@core/data/commercial-costs';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { CommercialCostService } from '../../../../@core/mock/marchandizer/commercial-cost.service';
import { CommercialCost } from '../../../../@core/data/marchanzider-model/commercial-cost.model';

@Component({
  selector: 'ngx-comml-cost',
  templateUrl: './comml-cost.component.html',
  styleUrls: ['./comml-cost.component.scss']
})
export class CommlCostComponent implements OnInit,OnDestroy {
  Tostr=new Tostr();

 public commercialCostsList:CommercialCost[];
 public precostingId:any;

  
  constructor(
    private fb: FormBuilder,
    private dialog:MatDialog,
    private router:Router,
    private mathdialogService: MatDialogService,
    private toastrService:NbToastrService,
    private commercialCostsService:CommercialCostService,
    private route:ActivatedRoute,
    private dateResizeService:DateResizeService
    ) { 
     
      
  }
  ngOnInit() {
    this.editForCommercialCosts();
   }
   //load edit mode data for CommercialCosts 
   editForCommercialCosts(){
    this.commercialCostsService.getAll().subscribe(data=>{
      console.log(data);
       this.commercialCostsList=data;
       let commercialCostsByPoNoId=this.commercialCostsList.filter(f=>f.precostingId==0);
       if(commercialCostsByPoNoId.length>0){
     this.commercialCostsService.loadCommercialDataModel(commercialCostsByPoNoId);
       }else{
         this.commercialCostsService.commlCostDetailsForm();
       }
     })
   }
    
   
   ngOnDestroy(){
    this.dateResizeService.preCostingSubject.subscribe(i=>{
      console.log(i);
       this.dateResizeService.preCostingSourceObj.next({index:i.index,costComponentform:i.costComponentform,poNoId:i.poNoId,budgetedCost:1.111});
     });
  }
  
  onDeleteCommercialCost(commlCostInformationForm, i) {
    let idToBeDeleted = commlCostInformationForm.value[i].id;

    this.commercialCostsService.count = this.commercialCostsService.count - 1;
    commlCostInformationForm.value.splice(i, 1);
    this.commercialCostsService.count = 0;
    if (idToBeDeleted == 0) {
    this.commercialCostsService.loadCommercialDataModel(commlCostInformationForm.value);
    }

    if (idToBeDeleted > 0) {
      this.commercialCostsService.delete(idToBeDeleted);
       this.commercialCostsService.loadCommercialDataModel(commlCostInformationForm.value);                 
    }
  }
     
      // onAdd(){
      //   const dialogConfig = new MatDialogConfig();
      //   dialogConfig.disableClose = true;
      //   dialogConfig.autoFocus= true;
      //   dialogConfig.width="90%";
      //   dialogConfig.height="70%";  
      //   this.dialog.open(AddConsumptionForEmbelCostComponent, dialogConfig);
      // }
      Active_Inactive: any = [
        // { btn: 'Select', val: 'Select' },
          { btn: 'Active', val: 'Active' },
          { btn: 'Inactive', val:'Inactive' },
          { btn: 'Cancelled', val:'Cancelled' }
        ]
      items: any = [
        // { btn: 'Select', val: 'Select' },
          { btn: 'LC Cost ', val: 'LC Cost ' },
          { btn: 'Port & Clearing', val:'Port & Clearing' },
          { btn: 'Transportation', val:'Transportation' },
          { btn: 'All Together', val:'All Together' },
        ]

     
      recordSubmitcommlCost(commlCostInformationForm){
      commlCostInformationForm.value.forEach(element => {
        element.precostingId=this.precostingId;
        if(element.id!=0){
          this.commercialCostsService.updateMultiline(element,element.id);
          
        }
        if(element.id==0){
          this.commercialCostsService.createMultiline(element);
         
        }
       
      });
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      }

    }

