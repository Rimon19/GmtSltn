
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { HTTPService } from '../../mock/shared/http.service';
import { BaseURL } from '../baseUrl';
import { YarnPurchaseRequisitionDetails } from './yarn-purchase-requisition-details.model';

@Injectable({
  providedIn: 'root'
})
export class YarnPurchaseRequisitionDetailsService extends HTTPService {
  YarnPurchaseRequisitionDetailsForm: FormArray = this.fb.array([]);
  public count=0;

  yarnPurchaseRequisitionDetails:YarnPurchaseRequisitionDetails; 

constructor(httpClient: HttpClient,
  toastr: NbToastrService,
  private fb: FormBuilder,) {
  super(
    httpClient,
    BaseURL.apiUrl,
    'YarnPurchaseRequisitionDetails',
    toastr
   );
   
  
}


YarnPurchaseRequisitionDetailsFormAction() {
  this.count=this.count+1;
  this.YarnPurchaseRequisitionDetailsForm.push(this.fb.group({
  id: [0],
  yarnPurchaseRequisitionId:[0],
  jobNo: '' ,
fabBooking: '' ,
buyerProfileId: '' ,
style: '' ,
yarnColor: '' ,
yarnCountId: '' ,
compositionId: '' ,
percentage: '' ,
yarnTypeId: '' ,
uomId: '' ,
requisitionQty:['',Validators.required],
rate: '' ,
amount: '' ,
yarnInhouseDate: '' ,
remarks: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}))
};
}
