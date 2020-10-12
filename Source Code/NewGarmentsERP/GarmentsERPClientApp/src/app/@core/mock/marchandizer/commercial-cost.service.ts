import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { CommercialCost } from '../../data/marchanzider-model/commercial-cost.model';
import { HTTPService } from '../shared/http.service';
import { NbToastrService } from '@nebular/theme';
import { FormArray, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommercialCostService extends HTTPService {
  commercialCost:CommercialCost
  public totalRateIn=0;
  public totalAmount=0;
  public count=0;
  commlCostInformationForm: FormArray = this.fb.array([]);
  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder,) {
    super(
      httpClient,
      BaseURL.apiUrl,
      'CommercialCosts',
      toastr
     );
     
    
  }
  commlCostDetailsForm() {
    this.count=this.count+1;
    this.commlCostInformationForm.push(this.fb.group({
      id:[0],
      item:[''],
      precostingId:[0],
      rateIn:[0],
      amount:[0],
      status:['']
    }));
  }   

  loadCommercialDataModel(commercialCosts){
    this.commlCostInformationForm= this.fb.array([]);
    (commercialCosts).forEach((itemDts: any) => {
      this.count=this.count+1;
     this.commlCostInformationForm.push(this.fb.group({
       id:itemDts.id,
       item:itemDts.item,
       precostingId:itemDts.precostingId,
       rateIn:itemDts.rateIn,
       amount:itemDts.amount,
       status:itemDts.status,   
     }));
     }); 
  }

  totalCalculation(commlCostInformationForm){
    console.log(commlCostInformationForm.value);
    this.totalRateIn=0;
    this.totalAmount=0;
    (commlCostInformationForm.value).forEach((itemDts: any) => {
     this.totalRateIn+=parseFloat(itemDts.rateIn);
     this.totalAmount +=parseFloat(itemDts.amount); 
    });
  }
}
