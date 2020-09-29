import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { WashCost } from '../../data/marchanzider-model/wash-cost.model';
import { HTTPService } from '../shared/http.service';
import { NbToastrService } from '@nebular/theme';
import { FormArray, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WashCostService extends HTTPService{

  washCost:WashCost;
  gmtsWashInformationForm: FormArray = this.fb.array([]);
  public count=0;
  public totalRateIn=0;
  public totalAmount=0;
  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder,) {
    super(
      httpClient,
      BaseURL.apiUrl,
      'WashCosts',
      toastr
     );
     
    
  }


  gmtsWashDetailsForm() {
    this.count=this.count+1;
  console.log(this.count);
    this.gmtsWashInformationForm.push(this.fb.group({
    id:[0],
    precostingId:[0],
    name:[''],
    typeId:[0],
    countryId:[0],
    consOneDznGmts:[''],
    rate:[0],
    amount:[0],
    status: ['']
          
    }));
  } 

  loadGmtsWashData(GmtsWashCostList){
    console.log(GmtsWashCostList);
    (GmtsWashCostList).forEach((itemDts: any) => {
      this.count=this.count+1;
      this.gmtsWashInformationForm.push(this.fb.group({
        id:itemDts.id,
        precostingId:itemDts.poNo,
        name:itemDts.name,
        typeId:itemDts.typeId,
        countryId:itemDts.countryId,
        consOneDznGmts:itemDts.consOneDznGmts,
        rate:itemDts.rate,
        amount:itemDts.amount,
        status: itemDts.status,
      }));
     }); 
  
  }
 
  totalCalculationWashCost(gmtsWashInformationForm){
    this.totalAmount=0;
    (gmtsWashInformationForm.value).forEach((itemDts: any) => {
     this.totalAmount +=parseFloat(itemDts.amount); 
    });
  }
}
