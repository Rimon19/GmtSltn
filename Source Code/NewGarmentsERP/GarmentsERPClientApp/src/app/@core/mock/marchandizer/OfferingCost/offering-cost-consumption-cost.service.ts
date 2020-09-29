import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { BaseURL } from '../../../data/baseUrl';
import { HTTPService } from '../../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class OfferingCostConsumptionCostService extends HTTPService {
  ConsumptionCost:FormArray = this.fb.array([]);
  constructor(
    httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder
  ) { 
    super(
      httpClient,
      BaseURL.apiUrl,
      'OfferingCostConsumptionCosts',
      toastr
    );  
    }
    CostConsumptionCostForm=this.fb.group({
      id:[],
      offeringCostId:[],
      orderAutoId:[],
      fabrics:[],
      gsm:[],
      cottonPercent :[],
      polysterPercent :[],
      viscosePercent :[],
      laycraPercent :[],
      orQty:[],
      fabQty :[],
      yarnCount:[],
      yarnType:[],
      dpl:[],
      yarnQty :[],
      lycraQty :[],
      acYarn :[],
      lycraD :[],
      
        entryDate:[],
        entryBy:[],
        approvedDate:[],
        isApproved:[],
        approvedBy:[],
        status:[]
    })
    }
