import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { EmbellishmentCost } from '../../data/marchanzider-model/embellishment-cost.model';
import { FormArray, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { HTTPService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmbelishmentCostService extends HTTPService{
  public count=0;
  public TotalCons=0;//this is actualy amount
  emblCostInformationForm: FormArray = this.fb.array([]);
  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder) {
    
    super(
      httpClient,
      BaseURL.apiUrl,
      'EmbellishmentCosts',
      toastr
     );

    } 

    emblCostDetailsForm() {
      this.count=this.count+1;
      this.emblCostInformationForm.push(this.fb.group({
        id:0,
        precostingId:0,
        embelName :'',
        embelTypeId :0,
        bodyPartId:0,
        countryId :0,
        supplierId:0,
        cons:0,
        rate :0,
        amount :0,
        status :''
      }));
    } 

    loadEmblishmentCostData(embellismentCostlist){
      (embellismentCostlist).forEach((itemDts: any) => {
        this.count=this.count+1;
        this.TotalCons +=itemDts.amount;
        this.emblCostInformationForm.push(this.fb.group({
          id:itemDts.id,
          precostingId:itemDts.precostingId,
          embelName :itemDts.embelName,
          embelTypeId :itemDts.embelTypeId,
          bodyPartId:itemDts.bodyPartId,
          countryId :itemDts.countryId,
          supplierId:itemDts.supplierId,
          cons:itemDts.cons,
          rate :itemDts.rate,
          amount :itemDts.amount,
          status :itemDts.status              
        }));
  });  
    }
 
}
