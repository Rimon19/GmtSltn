import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'ngx-add-consumption-for-embel-cost',
  templateUrl: './add-consumption-for-embel-cost.component.html',
  styleUrls: ['./add-consumption-for-embel-cost.component.scss']
})
export class AddConsumptionForEmbelCostComponent implements OnInit {

  public count=0;
  Tostr=new Tostr();
  embelCostConsumptionInformationForm: FormArray = this.fb.array([]);
 

  
  constructor(
    public dialogbox: MatDialogRef<AddConsumptionForEmbelCostComponent>,
   
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

  onSubmit(embelCostConsumptionInformationForm){}
  
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

}
