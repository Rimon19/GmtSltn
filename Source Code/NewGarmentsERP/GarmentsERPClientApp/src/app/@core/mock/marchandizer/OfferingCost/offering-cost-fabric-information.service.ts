import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { BaseURL } from '../../../data/baseUrl';
import { HTTPService } from '../../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class OfferingCostFabricInformationService extends HTTPService {

  constructor(
    httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder
  ) {
    super( httpClient,
      BaseURL.apiUrl,
      'OfferingCostFabricInformations',
      toastr)
   }
   fabricInfoForm=this.fb.group({
    id:[0],
    offeringCostId:[0],
    orderAutoId:[0],
  fabrics: [0] ,
gsm: [0] ,
cottonPercent: [0] ,
polysterPercent: [0] ,
viscosePercent: [0] ,
laycraPercent: [0] ,
orQty: [0] ,
fabQty: [0] ,
yarnCount: [''] ,
yarnType: [''] ,
dpl: [0] ,
yarnQty: [0] ,
lycraQty: [0] ,
acYarn: [0] ,
lycraD: [0] ,
    
      entryDate:[''],
      entryBy:[''],
      approvedDate:[''],
      isApproved:[''],
      approvedBy:[''],
      status:['']
  })


  loadFabricInfoModelData(fabricInfoForm){
 //this.fabricInfoForm=this.fb.group({});
 this.fabricInfoForm.setValue(fabricInfoForm);
}
}
