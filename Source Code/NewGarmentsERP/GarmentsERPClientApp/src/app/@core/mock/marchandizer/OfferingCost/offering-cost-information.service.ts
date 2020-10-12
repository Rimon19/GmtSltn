import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";
import { NbToastrService } from "@nebular/theme";
import { BaseURL } from "../../../data/baseUrl";
import { OfferingCostObj } from "../../../data/marchanzider-model/OfferingCost/offering-cost";
import { HTTPService } from "../../shared/http.service";

@Injectable({
  providedIn: "root",
})
export class OfferingCostInformationService extends HTTPService {
  CostInformationForm: FormArray = this.fb.array([]);
 count=0;
  constructor(
    httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder
  ) 
  {
    super(httpClient, BaseURL.apiUrl, "OfferingCostInformations", toastr);

    this.CostInformationForm.push(this.fb.group({
      id: [0],
      offeringCostId: [0],
      orderAutoId: [0],
      costingId: [0],
      preCostingId : [0],
      tergetCostingId: [0],
      postCostingId : [0],
 
       yarnCount: [''],
  
      offeringCostTypeId: [0],
      offeringCostTypeName: [0],
  
      yarnCountMeaurment: [0],
      use: [0],
      total: [0],
  
      mcosting: [0],
      cost: [0],
      preCosting: [0],
      targetCost: [0],
      postCost: [0],
      remarks: [''],
  
      entryDate: [''],
      entryBy: [''],
      approvedDate: [''],
      isApproved: [''],
      approvedBy: [''],
      status: [''],
    }));
  
  }

  loadOfferingCostFormWithData(offeringCostList){ 
    console.log(offeringCostList);
    this.CostInformationForm= this.fb.array([]);
    offeringCostList.forEach(itemDts => {
      this.count = this.count + 1;  
      
      this.CostInformationForm.push(
        this.fb.group({
          id: itemDts.id,
      offeringCostId: itemDts.offeringCostId,
      orderAutoId: itemDts.orderAutoId,
      costingId: itemDts.costingId,
      preCostingId : itemDts.preCostingId,
      tergetCostingId: itemDts.tergetCostingId,
      postCostingId : itemDts.postCostingId,
 
       yarnCountId : itemDts.yarnCountId,
  
      offeringCostTypeId: itemDts.offeringCostTypeId,
      offeringCostTypeName: itemDts.offeringCostTypeName,
  
      yarnCountMeaurment: itemDts.yarnCountMeaurment,
      use:itemDts.use, 
      total: itemDts.total,
  
      mcosting: itemDts.mcosting,
      cost: itemDts.cost,
      preCosting: itemDts.preCosting,
      targetCost: itemDts.targetCost,
      postCost: itemDts.postCost,
      remarks: itemDts.remarks,
  
      entryDate: itemDts.entryDate,
      entryBy: itemDts.entryBy,
      approvedDate: itemDts.approvedDate,
      isApproved: itemDts.isApproved,
      approvedBy: itemDts.approvedBy,
      status: itemDts.status
        })
      );
    });

  }
  offeringCostCalculation(offCstObj: OfferingCostObj) {
    offCstObj.fabByDznWidth =
      (((offCstObj.actualLength +
        offCstObj.allowanceLength +
        offCstObj.actualSleevLength +
        offCstObj.allowanceSleevLength) *
        (offCstObj.actualWith + offCstObj.allowanceWith) *
        2 *
        offCstObj.gsm) /
        10000000) *
      12;

    offCstObj.sixPercentWith =
      (offCstObj.fabByDznWidth * offCstObj.fabricTypePercentage) / 100 + offCstObj.fabByDznWidth;

    offCstObj.ttlFabKgWith =
    offCstObj.sixPercentWith +
    offCstObj.cadWith +
    offCstObj.neckPluscuffByDznWith +
    offCstObj.pocketWith;

  offCstObj.measurmentTotal = offCstObj.ttlFabKgWith + offCstObj.additionalFabricFor;

    offCstObj.fabQty = (offCstObj.orQty / 12) *offCstObj.measurmentTotal;
    offCstObj.yarnQty = (offCstObj.fabQty * 100) / (100 - offCstObj.dpl);
    offCstObj.lacraQty = (offCstObj.yarnQty * offCstObj.lacra) / 100;
   
    offCstObj.acYarn = offCstObj.yarnQty - offCstObj.lacraQty;





  
    return offCstObj;
  }

  submitCostComponent(){

  }
  deletCostComponent(){

  }


}
