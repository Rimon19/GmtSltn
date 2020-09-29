import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { BaseURL } from '../../../data/baseUrl';
import { HTTPService } from '../../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class OfferingCostInformationService extends HTTPService{
  CostInformation:FormArray = this.fb.array([]);
  constructor( httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder) {
      super( httpClient,
        BaseURL.apiUrl,
        'OfferingCostInformations',
        toastr)
     }
     CostInformationForm=this.fb.group({
      id:[],
      offeringCostId:[],
      orderAutoId:[],
      mcosting:[],
      cost:[],
      preCosting:[],
      targetCost:[],
      postCost:[],
      remarks:[],
      
      
        entryDate:[],
        entryBy:[],
        approvedDate:[],
        isApproved:[],
        approvedBy:[],
        status:[]
    }) 
}
