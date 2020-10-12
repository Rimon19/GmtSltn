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
    costConsumCostForm=this.fb.group({
      id:[0],
      offeringCostId:[0],
      orderAutoId:[0],
      actualWith:[0],
actualLength:[0],
actualSleevLength:[0],
allowanceWith:[0],
allowanceLength:[0],
allowanceSleevLength:[0],
gsm:[0],
fabByDznWidth:[0],
fabByDznLength:[0],
fabByDznSleevLength:[0],
sixPercentWith:[0],
fabricTypePercentage:[0],
fabricType:[''],
cadWith:[0],
cadLength:[0],
cadSleevLength:[0],
neckPluscuffByDznWith:[0],
neckPluscuffByDznLength:[0],
neckPluscuffByDznSleevLength:[0],
pocketWith:[0],
pocketLength:[0],
pocketSleevLength:[0],
ttlFabKgWith:[0],
ttlFabKgLength:[0],
ttlFabKgSleevLength:[0],
additionalFabricFor:[0],
total:[0],

  entryDate :[''],
  entryBy :[''],
  approvedDate :[''],
  approvedBy :[''],
  isApproved :false,
  status :[''],
    })
    loadConsumptionInfoModelData(costConsumCostForm){
      //this.fabricInfoForm=this.fb.group({});
      console.log(costConsumCostForm);
      this.costConsumCostForm.setValue(costConsumCostForm);
      console.log(this.costConsumCostForm.value);
     
     }
    }
