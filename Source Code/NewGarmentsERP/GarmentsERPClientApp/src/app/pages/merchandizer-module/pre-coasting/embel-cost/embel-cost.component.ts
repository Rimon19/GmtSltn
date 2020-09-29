import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { FormBuilder, FormArray } from '@angular/forms';
import { AddConsumptionForEmbelCostComponent } from '../add-consumption-for-embel-cost/add-consumption-for-embel-cost.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { CountryService } from '../../../../@core/mock/country.service';
import { SupplierProfileService } from '../../../../@core/mock/library/supplier-profile.service';
import { SupplierProfile } from '../../../../@core/data/Library-Modul-model/supplier-profile';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { BodyPartEntryService } from '../../../../@core/mock/library/body-part-entry.service';
import { BodyPartEntry } from '../../../../@core/data/Library-Modul-model/BodyPartEntry';
import { AddConsumptionComponent } from '../add-consumption/add-consumption.component';
import { EmbelishmentCostService } from '../../../../@core/mock/marchandizer/embelishment-cost.service';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-embel-cost',
  templateUrl: './embel-cost.component.html',
  styleUrls: ['./embel-cost.component.scss']
})
export class EmbelCostComponent implements OnInit,OnDestroy {

  Tostr=new Tostr();
  PoNoId:any;
  public  ebelTypeList:any[]=[];

  
  constructor(
    private fb: FormBuilder,
    private dialog:MatDialog,
    private router:Router,
    private dateResizeService:DateResizeService,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private embelishmentCostService:EmbelishmentCostService,
    private dropdownValueService:DropdownValueService

    ) { 
     
  }
  ngOnInit() {

    
  this.loadEmblishmentEditModeData();

   }
   ngOnDestroy(){
    this.dateResizeService.preCostingSubject.subscribe(i=>{
      console.log(i);
       this.dateResizeService.preCostingSourceObj.next({index:i.index,costComponentform:i.costComponentform,poNoId:i.poNoId,budgetedCost:1.111});
       this.dateResizeService.sourceConsumptionObj.next(0);
      });

  }


 loadEmblishmentEditModeData(){
  this.PoNoId = this.route.snapshot.paramMap.get('poNoId');
  this.embelishmentCostService.getAll().subscribe(data=>{
    let embellismentCostByPoId=data.filter(f=>f.poNoId==this.PoNoId);
    if(embellismentCostByPoId.length>0){
      //load  data( edit mode data)
      
      this.embelishmentCostService.count=0;      
      this.embelishmentCostService.TotalCons=0;   
      this.embelishmentCostService.emblCostInformationForm= this.fb.array([]);
      this.embelishmentCostService.loadEmblishmentCostData(embellismentCostByPoId);

    }else{
     this.embelishmentCostService.emblCostDetailsForm();
    }
  })


 }
  


      onDeleteEmbelishmentCost(emblCostInformationForm, i) {
        let idToBeDeleted = emblCostInformationForm.value[i].id;
    
        if (idToBeDeleted == 0) {
          this.embelishmentCostService.count = this.embelishmentCostService.count - 1;
          emblCostInformationForm.value.splice(i, 1);
    
          this.embelishmentCostService.emblCostInformationForm = this.fb.array([]);
          this.embelishmentCostService.count = 0;
        this.embelishmentCostService.loadEmblishmentCostData(emblCostInformationForm.value);
        }
    
        if (idToBeDeleted > 0) {
          this.mathdialogService
            .openConfirmDialog("Are you sure to delete this record ?")
            .afterClosed()
            .subscribe((res) => {
              if (res) {
                this.embelishmentCostService.deleteWithOutSubcribe(idToBeDeleted).subscribe(
                  (s) => {
                   
                    emblCostInformationForm.value.splice(i, 1);
                    this.embelishmentCostService.emblCostInformationForm = this.fb.array([]);
                    this.embelishmentCostService.count = 0;
                    this.embelishmentCostService.loadEmblishmentCostData(emblCostInformationForm.value);
    
                    this.Tostr.showToast(
                      "primary",
                      "",
                      "Deleleted",
                      "Successfully",
                      this.toastrService
                    );
                  },
                  (err) => {
                    this.Tostr.showToast(
                      "danger",
                      "",
                      err.statusText,
                      "",
                      this.toastrService
                    );
                  }
                );
              }
            });
        }
      }
     
          onSubmitEmbelishmentCost(emblCostInformationForm){
            this.embelishmentCostService.emblCostInformationForm.value.forEach(element => {
              element.poNoId=this.PoNoId ;
             
              if(element.id!=0){
                this.embelishmentCostService.updateMultiline(element,element.id);
              }
              if(element.id==0){
                console.log(element.id);
                this.embelishmentCostService.createMultiline(element);
              }
              
            });
           
            this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
          }
}
