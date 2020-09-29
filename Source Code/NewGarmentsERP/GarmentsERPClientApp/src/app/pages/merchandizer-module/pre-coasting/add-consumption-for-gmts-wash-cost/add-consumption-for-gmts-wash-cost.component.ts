import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormArray, FormBuilder } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-consumption-for-gmts-wash-cost',
  templateUrl: './add-consumption-for-gmts-wash-cost.component.html',
  styleUrls: ['./add-consumption-for-gmts-wash-cost.component.scss']
})
export class AddConsumptionForGmtsWashCostComponent implements OnInit {
  public count=0;
  Tostr=new Tostr();
  embelCostConsumptionInformationForm: FormArray = this.fb.array([]);
  constructor(
    public dialogbox: MatDialogRef<AddConsumptionForGmtsWashCostComponent>,
   
    private toastrService:NbToastrService,
    private router:Router, 
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }
  onClose(){
    this.dialogbox.close();
    
  }
  embelCostConsumptionForm() {
    this.count=this.count+1;
  console.log(this.count);
    this.embelCostConsumptionInformationForm.push(this.fb.group({
      sl:[''],
      poNo:[''],
      country:[''],
      gmtsItem:[''],
      gmtsColor:[''],
      gmtssizes:[''],
      cons:[0],
      rate:[0],
      amount:[0]
   
    }));
  } 
onDelete(embelCostConsumptionInformationForm,i) {
this.count=this.count-1;
embelCostConsumptionInformationForm.value.splice(i, 1);
        this.embelCostConsumptionInformationForm= this.fb.array([]);
            this.embelCostConsumptionInformationForm= this.fb.array([]);
            (embelCostConsumptionInformationForm.value).forEach((itemDts: any) => {
              this.embelCostConsumptionInformationForm.push(this.fb.group({
                sl:[''],
                poNo:[''],
                country:[''],
                gmtsItem:[''],
                gmtsColor:[''],
                gmtssizes:[''],
                cons:[0],
                rate:[0],
                amount:[0]
             
              }));
        });                       
  }
  onSubmit(embelCostConsumptionInformationForm){

  }

}
