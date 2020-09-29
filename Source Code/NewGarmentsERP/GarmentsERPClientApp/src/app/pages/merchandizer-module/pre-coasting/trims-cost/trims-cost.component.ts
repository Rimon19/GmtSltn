import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormArray } from '@angular/forms';
import {MatDialogConfig, MatDialog } from '@angular/material';
import { AddConsumptionForTrimCostComponent } from '../add-consumption-for-trim-cost/add-consumption-for-trim-cost.component';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { TrimCostsService } from '../../../../@core/mock/marchandizer/trim-costs.service';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { ItemGroup } from '../../../../@core/data/Library-Modul-model/ItemGroup';
import { ItemGroupService } from '../../../../@core/mock/library/item-group.service';
import { SupplierProfileService } from '../../../../@core/mock/library/supplier-profile.service';
import { SupplierProfile } from '../../../../@core/data/Library-Modul-model/supplier-profile';
import { TrimCostService } from '../../../../@core/mock/marchandizer/trim-cost.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { TrimCosts } from '../../../../@core/data/marchanzider-model/trim-costs';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { AddConsumptionComponent } from '../add-consumption/add-consumption.component';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
@Component({
  selector: 'ngx-trims-cost',
  templateUrl: './trims-cost.component.html',
  styleUrls: ['./trims-cost.component.scss']
})
export class TrimsCostComponent implements OnInit,OnDestroy {
  
  Tostr=new Tostr();
 

  public TrimsCostsList:TrimCosts[];
  
  constructor(
    private fb: FormBuilder,
    private trimCostsService: TrimCostsService,

    private mathdialogService: MatDialogService,
    private toastrService:NbToastrService,
    private route:ActivatedRoute,
    private dateResizeService:DateResizeService,
    private router:Router,
    private dropdownValueService:DropdownValueService
    ) { 
     
  }
  ngOnInit() {
 


    this.loadeditModeDataFortrimCost();
   }
   ngOnDestroy(){
    this.dateResizeService.preCostingSubject.subscribe(i=>{
       this.dateResizeService.preCostingSourceObj.next({budgetedCost:1.111});
     });
  }

          
    
      onDelete(trimsCostInformationForm,i) {
        let idToBeDeleted=trimsCostInformationForm.value[i].id;
        console.log(idToBeDeleted);
        if(idToBeDeleted<=0){
          this.trimCostsService.count=this.trimCostsService.count-1;
          trimsCostInformationForm.value.splice(i, 1);
                    this.trimCostsService.trimsCostInformationForm= this.fb.array([]); 
                     this.trimCostsService.loadTrimsCostData(trimsCostInformationForm.value);
        }
        if(idToBeDeleted>0){
          this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
          .afterClosed().subscribe(res=>{
            if(res){
              this.trimCostsService.deleteWithOutSubcribe(idToBeDeleted).subscribe(s=>{
                this.trimCostsService.count=this.trimCostsService.count-1;
                trimsCostInformationForm.value.splice(i, 1);
                    this.trimCostsService.trimsCostInformationForm= this.fb.array([]);
                       this.trimCostsService.loadTrimsCostData(trimsCostInformationForm.value); 

                this.Tostr.showToast('primary','', 'Deleleted', 'Successfully',this.toastrService);   
              },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);});
            }
          })   
        }                       
   }
  
     
      yes_no_btn: any = [
        // { btn: 'Select', val: 'Select' },
          { btn: 'Yes', val: 'Yes' },
          { btn: 'No', val: 'No' }
        ]
   
  
     
      //load edit mode data for CommercialCosts 
   loadeditModeDataFortrimCost(){
    this.trimCostsService.getAll().subscribe(data=>{
       this.TrimsCostsList=data;
       let commercialCostsByPoNoId=this.TrimsCostsList.filter(f=>f.precostingId==this.trimCostsService.precostingId);
       if(commercialCostsByPoNoId.length>0){
         this.trimCostsService.trimsCostInformationForm= this.fb.array([]);
         
         this.trimCostsService.loadTrimsCostData(commercialCostsByPoNoId);
  
       }else{
         this.trimCostsService.trimsCostDetailsForm();
       }
     })
   }
      
      
    

     recordSubmittrimsCost(trimsCostInformationForm){
      console.log(trimsCostInformationForm.value);
      trimsCostInformationForm.value.forEach(element => {
        element.precostingId=this.trimCostsService.precostingId;
        if(element.id!=0){
          this.trimCostsService.updateMultiline(element,element.id);
          
        }
        if(element.id==0){
          this.trimCostsService.createMultiline(element);
        }
       
      });
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      }

    }


   