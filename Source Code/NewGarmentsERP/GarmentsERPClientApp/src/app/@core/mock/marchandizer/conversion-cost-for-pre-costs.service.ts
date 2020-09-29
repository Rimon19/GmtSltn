import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConversionCostForPreCosts } from '../../data/marchanzider-model/conversion-cost-for-pre-costs';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { NbToastrService } from '@nebular/theme';
import { FormArray, FormBuilder } from '@angular/forms';
import { HTTPService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class ConversionCostForPreCostsService extends HTTPService {
 
  public count = 0;
  conversionCostInformationForm: FormArray = this.fb.array([]);
  conversionCostForPreCosts:ConversionCostForPreCosts;
  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder,) {
    super(
      httpClient,
      BaseURL.apiUrl,
      'ConversionCostForPreCosts',
      toastr
     );
     
    
  }
  conversionCostForm() {
    this.count = this.count + 1;
    this.conversionCostInformationForm.push(
      this.fb.group({
        id: [0],
        precostingId: [0],
        fabricDescriptionId: [""],
        processId: [""],
        poNo: [0],
        processLoss: [0],
        reqQty: [0],
        avgReqQty: [0],
        chargeUnit: [0],
        amount: [0],
        status: [""],
      })
    );
  }
   loadConversionCostFormData(conversionCostInformationForm){
   conversionCostInformationForm.forEach((itemDts: any) => {
      this.conversionCostInformationForm.push(
        this.fb.group({
          id: itemDts.id,
          precostingId: itemDts.precostingId,
          fabricDescriptionId: itemDts.fabricDescriptionId,
          processId: itemDts.processId,
          poNo: itemDts.poNo,
          processLoss: itemDts.processLoss,
          reqQty: itemDts.reqQty,
          avgReqQty: itemDts.avgReqQty,
          chargeUnit: itemDts.chargeUnit,
          amount: itemDts.amount,
          status: itemDts.status,
        })
      );
    });
   }

}
