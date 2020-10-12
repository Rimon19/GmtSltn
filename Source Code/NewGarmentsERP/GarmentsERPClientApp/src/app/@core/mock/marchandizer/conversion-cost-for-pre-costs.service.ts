import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConversionCostForPreCosts } from '../../data/marchanzider-model/conversion-cost-for-pre-costs';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { NbToastrService } from '@nebular/theme';
import { FormArray, FormBuilder } from '@angular/forms';
import { HTTPService } from '../shared/http.service';
import { BodyPartEntry } from '../../data/Library-Modul-model/BodyPartEntry';
import { BodyPartEntryService } from '../library/body-part-entry.service';
import { FabricCostService } from './fabric-cost.service';

@Injectable({
  providedIn: 'root'
})
export class ConversionCostForPreCostsService extends HTTPService {
  fabricDescriptionList:any[]=[];
  public count = 0;
  public totalProcessLoss = 0;
  
 public totalReqQty = 0;
 public totalAvgReqQty = 0;
 public totalAvgChargeOrUnit = 0;

  conversionCostInformationForm: FormArray = this.fb.array([]);
  conversionCostForPreCosts:ConversionCostForPreCosts;
  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder,
    private bodyPartEntryService:BodyPartEntryService,
    private fabricCostService:FabricCostService) {
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
    this.conversionCostInformationForm = this.fb.array([]);
    this.count =0;
   conversionCostInformationForm.forEach((itemDts: any) => {
    this.count = this.count + 1;
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
          amount:itemDts.reqQty* itemDts.chargeUnit,
          status: itemDts.status,
        })
      );
    });
   }

   loadFabricDescriptionValues(fabricCostFormValue){
   console.log(fabricCostFormValue)
   this.fabricDescriptionList=fabricCostFormValue;
    this.bodyPartEntryService.getAll().subscribe(data=>{
      
      this.fabricDescriptionList.forEach(element => {
        element.bodyPartFullName=data.find(f=>f.id==element.bodyPartId)&&data.find(f=>f.id==element.bodyPartId).bodyPartFullName;
      });
      console.log(this.fabricDescriptionList);
    });
   
   }
   onChangeFabricDescConvCost(index){
    
   let avgGrayConsByIndexWise= this.fabricCostService.fabricCostInformationForm.value[index].avgGreyCons;
   let fabricDesPreCostId= this.fabricCostService.fabricCostInformationForm.value[index].fabricDesPreCostId;
   console.log(avgGrayConsByIndexWise);
   console.log(fabricDesPreCostId);
//this.conversionCostInformationForm.value.find(f=>f.fabricDescriptionId==index).reqQty=avgGrayConsByIndexWise;
this.conversionCostInformationForm.value.forEach(element => {
  if(element.fabricDescriptionId==index){
    element.reqQty=avgGrayConsByIndexWise;
    element.avgReqQty=avgGrayConsByIndexWise;
    
  }
});
let values=this.conversionCostInformationForm.value;
console.log(values);
  // this.conversionCostInformationForm.value.map(a => a.fabricDescriptionId === index ? avgGrayConsByIndexWise :a.reqQty);
    //  this.conversionCostInformationForm= this.fb.array([]);
    // this.count=0;
   this.totalCalculationForConversionCost(values);
  
   }


   totalCalculationForConversionCost(conversionCost) {
    console.log(conversionCost);
    this.totalProcessLoss = 0;
    this.totalReqQty = 0;
    this.totalAvgReqQty = 0;
    this.totalAvgChargeOrUnit = 0;
    this.conversionCostInformationForm= this.fb.array([]);
    this.count=0;
    this.loadConversionCostFormData(conversionCost);

    conversionCost.forEach((itemDts: any) => {
      this.totalProcessLoss += parseFloat(itemDts.processLoss);
      this.totalReqQty += parseFloat(itemDts.reqQty);
      this.totalAvgReqQty += parseFloat(itemDts.avgReqQty);
      this.totalAvgChargeOrUnit += parseFloat(itemDts.chargeUnit);
    });

    
  }

  
}
