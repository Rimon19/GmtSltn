import { Component, OnInit } from '@angular/core';
import { ConversionCost } from '../../../@core/data/marchanzider-model/conversion-cost.model';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-add-conversion-cost',
  templateUrl: './add-conversion-cost.component.html',
  styleUrls: ['./add-conversion-cost.component.scss']
})
export class AddConversionCostComponent implements OnInit {
conversionCost: ConversionCost;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.resetForm();

    
  }

  resetForm(){
    this.conversionCost={
      nominatedSupplierId:0,
      conversionCostId: 0,
    preCostingId: 0,
    fabDescId: 0,
    conversionProcessId: 0,
    processLoss: 0,
    reqQty: 0,
    avgReqQty: 0,
    chargeUnit: 0,
    amount: 0,
    status: ''
   
    };
  }
  onSubmit(form){
    
  }
}
