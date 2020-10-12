import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { CommissionCost } from '../../data/marchanzider-model/commission-cost.model';
import { HTTPService } from '../shared/http.service';
import { NbToastrService } from '@nebular/theme';
import { FormArray, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommissionCostService extends HTTPService{
  commissionInformationForm: FormArray = this.fb.array([]);
  public count=0;
  TotalCommnRate=0;
  TotalAmmount=0;
  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder,) {
    super(
      httpClient,
      BaseURL.apiUrl,
      'CommissionCosts',
      toastr
     );
     
    
  }

  commissionDetailsForm() {
    this.count=this.count+1;
  console.log(this.count);
    this.commissionInformationForm.push(this.fb.group({
      id:0,
      precostingId :0,
      particulars :'',
      commnBase :'',
      commnRate:0,
      amount:0,
      status :''
    }));
  }

  loadCommissionCostModelData(commissionInformations){
    this.commissionInformationForm= this.fb.array([]);
            
    (commissionInformations).forEach((itemDts: any) => {
      this.commissionInformationForm.push(this.fb.group({
        id:itemDts.id,
        precostingId :itemDts.poNoId,
        particulars :itemDts.particulars,
        commnBase :itemDts.commnBase,
        commnRate:itemDts.commnRate,
        amount:itemDts.amount,
        status :itemDts.status               
      }));
});  
  }
  totalCalculation(commissionInformationForm){
    this.count=0;
    this.commissionInformationForm= this.fb.array([]);
    this.TotalCommnRate=0;
    this.TotalAmmount=0;
    (commissionInformationForm.value).forEach((itemDts: any) => {
      this.count=this.count+1;
      this.TotalCommnRate +=parseInt(itemDts.commnRate) ;
        this.TotalAmmount +=parseInt(itemDts.amount);
      this.commissionInformationForm.push(this.fb.group({
        id:itemDts.id,
        poNoId :itemDts.poNoId,
        particulars :itemDts.particulars,
        commnBase :itemDts.commnBase,
        commnRate:itemDts.commnRate,
        amount:itemDts.amount,
        status :itemDts.status               
      }));
    });
  }
}
