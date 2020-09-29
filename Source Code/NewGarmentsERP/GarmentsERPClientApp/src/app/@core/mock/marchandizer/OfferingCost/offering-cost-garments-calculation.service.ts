import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { BaseURL } from '../../../data/baseUrl';
import { HTTPService } from '../../shared/http.service';
@Injectable({
  providedIn: 'root'
})
export class OfferingCostGarmentsCalculationService extends HTTPService{
  GarmentsCalculation:FormArray = this.fb.array([]);
  constructor( httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder) {
      super( httpClient,
        BaseURL.apiUrl,
        'OfferingCostGarmentsCalculations',
        toastr)
     }
     FabricPriceCalculationBykgForm=this.fb.group({
      id:[],
      offeringCostId:[],
      orderAutoId:[],
      fabricValue: [],
      fabricValueUsePercentage: [],
      accessoriesfactory: [],
      accessoriesfactoryUsePercentage: [],
      accessoriesNomination: [],
      accessoriesNominationUsePercentage: [],
      print: [],
      printUsePercentage: [],
      embroidery: [],
      embroideryUsePercentage: [],
       alloverprint: [],
      wovenFabrics: [],
      wovenFabricsUsePercentage: [],
      cm: [],
      cmusePercentage: [],
      test: [],
      testUsePercentage: [],
      cifCost: [],
      cifCostUsePercentage: [],
      totalCost: [],
      totalCostUsePercentage: [],
       lbyCComChargePercentage: [],
      lbyCComChargeUsePercentage: [],
      totalCostUse: [],
      totalCostBypc: [],
      totalCostBypcUsePercentage: [],
      priceBypcWithprofitPercentage: [],
      priceBypcWithprofitUsePercentage: [],
      buyingCommssion: [],
      buyingCommssionUsePercentage: [],
      fobwithBComPercentage: [],
      fobwithBComUsePercentage: [],
      
        entryDate:[],
        entryBy:[],
        approvedDate:[],
        isApproved:[],
        approvedBy:[],
        status:[]
    }) 
}



  