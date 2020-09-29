import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddConsumptionForGmtsWashCostComponent } from '../add-consumption-for-gmts-wash-cost/add-consumption-for-gmts-wash-cost.component';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { Router, ActivatedRoute } from '@angular/router';

import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { WashCost } from '../../../../@core/data/marchanzider-model/wash-cost';
import { Tostr } from '../../../../@core/data/tostr.model';
import { AddConsumptionComponent } from '../add-consumption/add-consumption.component';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { WashCostService } from '../../../../@core/mock/marchandizer/wash-cost.service';

@Component({
  selector: 'ngx-gmts-wash',
  templateUrl: './gmts-wash.component.html',
  styleUrls: ['./gmts-wash.component.scss']
})
export class GmtsWashComponent implements OnInit,OnDestroy {
 
  public GmtsWashCostList:WashCost[];
  public typeList:any[];
  public countryList:CountryInfo[];
 public precostingId:any;

  Tostr=new  Tostr()
  
  constructor(
    private fb: FormBuilder,
    private dialog:MatDialog,
    private router:Router,
    private mathdialogService: MatDialogService,
    private countryService:CountryService,
    private staticFeatureService:StaticFeaturesService,
    private toastrService:NbToastrService,
    private WashCostService:WashCostService,
    private route:ActivatedRoute,
    private dateResizeService:DateResizeService,
    private dropdownValueService:DropdownValueService
    ) { 
     
  }
  ngOnInit() {
   
    this.dropdownValueService.getRegion();
    this.dropdownValueService.gettypeDDL();

    this.editModeDataLoadForWashCost();
   }
   ngOnDestroy(){
    this.dateResizeService.preCostingSubject.subscribe(i=>{
      console.log(i);
       this.dateResizeService.preCostingSourceObj.next({index:i.index,costComponentform:i.costComponentform,poNoId:i.poNoId,budgetedCost:1.111});
     });
  }
        
      //load edit mode data for Gmts WashCost 
   editModeDataLoadForWashCost(){
    this.WashCostService.getAll().subscribe(data=>{
       this.GmtsWashCostList=data;
       let GmtsWashCostListByPoNoId=this.GmtsWashCostList.filter(f=>f.precostingId==0);
       if(GmtsWashCostListByPoNoId.length>0){
         this.WashCostService.gmtsWashInformationForm= this.fb.array([]);
         this.WashCostService.loadGmtsWashData(GmtsWashCostListByPoNoId);
   
       }else{
         this.WashCostService.gmtsWashDetailsForm();
       }
     })
   }  
  
      onDeleteWashCost(gmtsWashInformationForm, i) {
        let idToBeDeleted = gmtsWashInformationForm.value[i].id;
    
        this.WashCostService.count = this.WashCostService.count - 1;
        gmtsWashInformationForm.value.splice(i, 1);
        this.WashCostService.count = 0;
        this.WashCostService.gmtsWashInformationForm = this.fb.array([]);
        if (idToBeDeleted == 0) {
        this.WashCostService.loadGmtsWashData(gmtsWashInformationForm.value);
        }
    
        if (idToBeDeleted > 0) {
          this.WashCostService.delete(idToBeDeleted);
           this.WashCostService.loadGmtsWashData(gmtsWashInformationForm.value);                 
        }
      }
      // onAdd(i){
      //   const dialogConfig = new MatDialogConfig();
      //   dialogConfig.disableClose = true;
      //   dialogConfig.autoFocus= true;
      //   dialogConfig.width="90%";
      //   dialogConfig.height="70%"; 
      //   dialogConfig.id=this.route.snapshot.paramMap.get('poNoId'); 
      //   //send to modal array index 
      //   this.dateResizeService.source.next(i);
     
      //   this.dialog.open(AddConsumptionComponent, dialogConfig);
      // } 
      // backToPrecostingFromFabricCost(){
      //   this.router.navigate(["/pages/show-precosting"]);
      // }
    
    
       
       
       totalCalculationWashCost(gmtsWashInformationForm){
       this.WashCostService.totalCalculationWashCost(gmtsWashInformationForm);
      }
       status	: any = [
          { btn: 'Active', val: 'Active' },
          { btn: 'InActive', val: 'InActive' },
          { btn: 'Cancelled', val: 'Cancelled' },
        ]
        washname	: any = [
          { btn: 'Wash', val: 'Wash' }
          
        ]
        recordSubmitGmtsWash(gmtsWashInformationForm){
          gmtsWashInformationForm.value.forEach(element => {
            element.precostingId=this.precostingId;
            if(element.id!=0){
              this.WashCostService.updateMultiline(element,element.id);
              
            }
            if(element.id==0){
              this.WashCostService.createMultiline(element);
            }
           
          });
          this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
          }
}
