import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MatDialogRef } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-fabrication-details',
  templateUrl: './fabrication-details.component.html',
  styleUrls: ['./fabrication-details.component.scss']
})
export class FabricationDetailsComponent implements OnInit {

      public count=0;
      Tostr=new Tostr();
      fabricationDetailsFormInformationForm: FormArray = this.fb.array([]);
      constructor(
        public dialogbox: MatDialogRef<FabricationDetailsComponent>,
        private toastrService:NbToastrService,
        private router:Router, 
        private fb: FormBuilder,
        private datapassingService:DatapassingService
        ) { 

      }

      ngOnInit() {
        this.fabricationDetailsForm();
      }
      onClose(){
    //    this.datapassingService.subjectAddQuotationInquery.subscribe(i=>{
      //    console.log(i);
         // console.log(this.averageGreyCons);
         
        // });

       
        let fabricDescriptionValue='';
        this.fabricationDetailsFormInformationForm.value.forEach(el => {
          fabricDescriptionValue=fabricDescriptionValue+''+el.constraction+'_'+el.composition+'_'+el.gSM+'_';
       });
     let fabricDescriptionFinalValue=  fabricDescriptionValue.slice(0,-1);

        this.datapassingService.sourceFabricationDetails.next({fabricDescription:fabricDescriptionFinalValue});
        this.dialogbox.close();
      }

      fabricationDetailsForm() {
        this.count=this.count+1;
      console.log(this.count);
        this.fabricationDetailsFormInformationForm.push(this.fb.group({
          constraction:[''],
          composition: [''],
          gSM:[''],
        }));
      } 
      onDelete(fabricationDetailsFormInformationForm,i) {
            this.count=this.count-1;
            fabricationDetailsFormInformationForm.value.splice(i, 1);
            this.fabricationDetailsFormInformationForm= this.fb.array([]);
               
                (fabricationDetailsFormInformationForm.value).forEach((itemDts: any) => {
                  this.fabricationDetailsFormInformationForm.push(this.fb.group({
                    constraction:itemDts.constraction,
                    composition:itemDts.composition,
                    gSM:itemDts.gSM,
                                      
                  }));
            });                       
      }
      onSubmit(){
         
        let fabricDescriptionValue='';
        this.fabricationDetailsFormInformationForm.value.forEach(el => {
          fabricDescriptionValue=fabricDescriptionValue+''+el.constraction+'_'+el.composition+'_'+el.gSM+'_';
       });
     let fabricDescriptionFinalValue=  fabricDescriptionValue.slice(0,-1);

        this.datapassingService.sourceFabricationDetails.next({fabricDescription:fabricDescriptionFinalValue});
        this.dialogbox.close();
      }
}
