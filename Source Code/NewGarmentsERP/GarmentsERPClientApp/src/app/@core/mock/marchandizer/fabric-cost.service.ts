import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { FabricCost } from '../../data/marchanzider-model/fabric-cost';
import { HTTPService } from '../shared/http.service';
import { NbToastrService } from '@nebular/theme';
import { SampleFabricBookingWithorder } from '../../data/marchanzider-model/sample-fabric-booking-withorder';
import { ColourEntry } from '../../data/Library-Modul-model/colour-entry';
import { FormArray, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FabricCostService extends HTTPService {
  public count = 0;
  fabricCostInformationForm: FormArray = this.fb.array([]);
  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder,) {
    super(
      httpClient,
      BaseURL.apiUrl,
      'FabricCosts',
      toastr
     );
     
    
  }
  
  fabricCostForm(precostingId) {
    
    this.count = this.count + 1;
   this.fabricCostInformationForm.push(
      this.fb.group({
        id: 0,
        poNoId: 0,
        gmtsItemId: 0,
        bodyPartId: 0,
        bodyPartTypeId: 0,
        fabNatureId: 0,
        colorTypeId: 0,
        fabricDesPreCostId: 0,
        fabricSourceId: 0,
        nominatedSuppId: 0,
        widthDiaType: "",
        gsmWeight: 0,
        colorSizeSensitive: "",
        color: "",
        consumptionBasis: "",
        uom: "",
        avgGreyCons: 0,
        rate: 0,
        amount: 0,
        totalQty: 0,
        totalAmount: 0,
        preCostingId: precostingId,
        suplierId: 0,
        fabricDescription: '' 
      })
    );
  }
  loadFabricCostFormWithData(fabricCostList){ 
    this.fabricCostInformationForm = this.fb.array([]);
    this.count = 0;
    fabricCostList.forEach(itemDts => {
      console.log(itemDts.fabricDescription);
      this.count = this.count + 1;  
      this.fabricCostInformationForm.push(
        this.fb.group({
          id: itemDts.id,
          poNoId: itemDts.poNoId,
          gmtsItemId: itemDts.gmtsItemId,
          bodyPartId: itemDts.bodyPartId,
          bodyPartTypeId: itemDts.bodyPartTypeId,
          fabNatureId: itemDts.fabNatureId,
          colorTypeId: itemDts.colorTypeId,
          fabricDesPreCostId: itemDts.fabricDesPreCostId,
          fabricSourceId: itemDts.fabricSourceId,
          suplierId: itemDts.suplierId,
          preCostingId: itemDts.preCostingId,
          nominatedSuppId: itemDts.nominatedSuppId,
          widthDiaType: itemDts.widthDiaType,
          gsmWeight: itemDts.gsmWeight,
          colorSizeSensitive: itemDts.colorSizeSensitive,
          color: itemDts.color,
          consumptionBasis: itemDts.consumptionBasis,
          uom: itemDts.uom,
          avgGreyCons: itemDts.avgGreyCons,
          rate: itemDts.rate,
          amount: itemDts.amount,
          totalQty: itemDts.totalQty,
          totalAmount: itemDts.totalAmount, 
          fabricDescription: itemDts.fabricDescription 
        })
      );
    });
   
  
  }

  }
