import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { BaseURL } from '../../../data/baseUrl';
import { HTTPService } from '../../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class OfferingCostBuyerInformationService extends HTTPService
   { 
    BuyerInformation:FormArray = this.fb.array([]);
   constructor(
    httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder,) 
    { 
    super(
      httpClient,
      BaseURL.apiUrl,
      'OfferingCostBuyerInformations',
      toastr
    );
  
  }
    OfferingCostBuyerInformation=this.fb.group
      ({
    id:[0],
    orderAutoId:[0], 
    buyingHouse:[''], 
    customer:[''], 
    item:[''], 
    styleNo:[''], 
    sizeRangeStart:[''], 
    sizeRangeEnd:[''], 
    costing:[''], 
    entryDate:[''], 
    entryBy:[''], 
    epprovedDate:[''], 
    isApproved:[''],
    approvedBy:[''], 
    status:[''],  
    });

}