import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { BaseURL } from '../../../data/baseUrl';
import { HTTPService } from '../../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class OfferingCostFabricPriceCalculationBykgService extends HTTPService{
  constructor( httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder) {
      super( httpClient,
        BaseURL.apiUrl,
        'OfferingCostFabricPriceCalculationBykgs',
        toastr)
     }
     fabPriceCalBykgForm=this.fb.group({
      id:[],
      offeringCostId:[],
      orderAutoId:[],
      yarnCount:[],
      thirtyFourByOne:[],
    yarnPrice:[],
    yarnPriceUse:[],
    lycraYarnPrice:[],
    lycraYarnPriceUse:[],
    knittingChargeTk:[],
    knittingChargeTkUse:[],
    fabDyeChargeWithEPlusS:[],
    fabDyeChargeWithEPlusSUse:[],
    yarnDeyingCharge:[],
    yarnDeyingChargeUse:[],
    washWithEPlusS:[],
    washWithEPlusSUse:[],
    peachFinish:[],
    peachFinishUse:[],
    standerPlusCompecting:[],
    standerPlusCompectingUse:[],
    total:[],
    totalUse:[],
    deyingProcessLostPercentage:[],
    deyingProcessLostPercentageUse:[],
    fabricPriceTotal:[],
      
        entryDate:[],
        entryBy:[],
        approvedDate:[],
        isApproved:[],
        approvedBy:[],
        status:[]
    })
}
