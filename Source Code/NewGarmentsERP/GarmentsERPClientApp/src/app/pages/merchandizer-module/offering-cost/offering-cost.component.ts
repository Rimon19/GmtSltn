import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";
import { OfferingCostObj } from "../../../@core/data/marchanzider-model/OfferingCost/offering-cost";
import { OfferingCostBuyerInformationService } from "../../../@core/mock/marchandizer/OfferingCost/offering-cost-buyer-information.service";
import { OfferingCostConsumptionCostService } from "../../../@core/mock/marchandizer/OfferingCost/offering-cost-consumption-cost.service";
import { OfferingCostFabricInformationService } from "../../../@core/mock/marchandizer/OfferingCost/offering-cost-fabric-information.service";
import { OfferingCostFabricPriceCalculationBykgService } from "../../../@core/mock/marchandizer/OfferingCost/offering-cost-fabric-price-calculation-bykg.service";
import { OfferingCostGarmentsCalculationService } from "../../../@core/mock/marchandizer/OfferingCost/offering-cost-garments-calculation.service";
import { OfferingCostInformationService } from "../../../@core/mock/marchandizer/OfferingCost/offering-cost-information.service";
import { StaticFeaturesService } from "./../../../@core/mock/library/static-features.service";

@Component({
  selector: "ngx-offering-cost",
  templateUrl: "./offering-cost.component.html",
  styleUrls: ["./offering-cost.component.scss"],
})
export class OfferingCostComponent implements OnInit {
  offeringCostObj = new OfferingCostObj();
  yarnCount='';
  constructor(
    private fb: FormBuilder,
    private oCfabInfoService: OfferingCostFabricInformationService,
    private oCBuyerInfoService: OfferingCostBuyerInformationService,
    private oCConsumCostService: OfferingCostConsumptionCostService,
    private oCFabPriceCalBykgService: OfferingCostFabricPriceCalculationBykgService,
    private oCGarmentsCalService: OfferingCostGarmentsCalculationService,
    private offeringCostInformationService: OfferingCostInformationService,
    private staticFeaturesService: StaticFeaturesService
  ) {}

  ngOnInit() {
    this.staticFeaturesService.getOfferingCostTypeInfoes().subscribe((data) => {
      console.log(data);
      this.offeringCostInformationService.CostInformationForm = this.fb.array(
        []
      );
      data.forEach((element) => {
        this.offeringCostInformationService.CostInformationForm.push(
          this.fb.group({
            id: [0],
            offeringCostId: [0],
            orderAutoId: [0],
            costingId: [0],
            preCostingId: [0],
            tergetCostingId: [0],
            postCostingId: [0],

            yarnCount: [''],
            offeringCostTypeId: element.id,
            offeringCostTypeName: element.offeringCostTypeName,

            yarnCountMeaurment: [0],
            use: [0],
            total: [0],

            mcosting: [0],
            cost: [0],
            preCosting: [0],
            targetCost: [0],
            postCost: [0],
            remarks: [],

            entryDate: [],
            entryBy: [],
            approvedDate: [],
            isApproved: [],
            approvedBy: [],
            status: [],
          })
        );
      });
    });
  }

  offeringCostCalculation(index) {
   // Property optimise
    let offeringCostArray = this.offeringCostInformationService
    .CostInformationForm.value;

    console.log(this.oCConsumCostService.costConsumCostForm.value);

    this.offeringCostObj.orQty = this.oCfabInfoService.fabricInfoForm.value.orQty;
    this.offeringCostObj.fabQty = this.oCfabInfoService.fabricInfoForm.value.fabQty;
    this.offeringCostObj.measurmentTotal = this.oCConsumCostService.costConsumCostForm.value.total;
    this.offeringCostObj.lacra = this.oCfabInfoService.fabricInfoForm.value.laycraPercent;
    this.offeringCostObj.dpl = this.oCfabInfoService.fabricInfoForm.value.dpl;
    //  this.offeringCostObj.lacraQty = this.oCfabInfoService.fabricInfoForm.value.lycraQty;
    // this.offeringCostObj.yarnQty = this.oCfabInfoService.fabricInfoForm.value.yarnQty;

    this.offeringCostObj.actualWith = this.oCConsumCostService.costConsumCostForm.value.actualWith;
    this.offeringCostObj.actualLength = this.oCConsumCostService.costConsumCostForm.value.actualLength;
    this.offeringCostObj.actualSleevLength = this.oCConsumCostService.costConsumCostForm.value.actualSleevLength;
    this.offeringCostObj.allowanceWith = this.oCConsumCostService.costConsumCostForm.value.allowanceWith;
    this.offeringCostObj.allowanceLength = this.oCConsumCostService.costConsumCostForm.value.allowanceLength;
    this.offeringCostObj.allowanceSleevLength = this.oCConsumCostService.costConsumCostForm.value.allowanceSleevLength;
    this.offeringCostObj.gsm = this.oCfabInfoService.fabricInfoForm.value.gsm;
    this.offeringCostObj.fabByDznWidth = this.oCConsumCostService.costConsumCostForm.value.fabByDznWidth;
    this.offeringCostObj.sixPercentWith = this.oCConsumCostService.costConsumCostForm.value.sixPercentWith;
    this.offeringCostObj.fabricTypePercentage = this.oCConsumCostService.costConsumCostForm.value.fabricTypePercentage;
    this.offeringCostObj.cadWith = this.oCConsumCostService.costConsumCostForm.value.cadWith;
    this.offeringCostObj.neckPluscuffByDznWith = this.oCConsumCostService.costConsumCostForm.value.neckPluscuffByDznWith;
    this.offeringCostObj.pocketWith = this.oCConsumCostService.costConsumCostForm.value.pocketWith;
    this.offeringCostObj.additionalFabricFor = this.oCConsumCostService.costConsumCostForm.value.additionalFabricFor;

    //this.offeringCostObj.additionalFabricFor = this.oCFabPriceCalBykgService.fabPriceCalBykgForm.value.additionalFabricFor;
    //fabric GSM==Cunsumption GSM
    this.oCConsumCostService.costConsumCostForm.value.gsm = this.offeringCostObj.gsm;
    //this.oCfabInfoService.fabricInfoForm.value.acYarn = this.offeringCostObj.gsm;
console.log(this.offeringCostInformationService.CostInformationForm.value)
    this.yarnCount= this.oCfabInfoService.fabricInfoForm.value.yarnCount;
    console.log(this.offeringCostInformationService.CostInformationForm.value.yarnCount)
    let calculationResult = this.offeringCostInformationService.offeringCostCalculation(
      this.offeringCostObj
    );
    console.log(calculationResult);
    this.oCfabInfoService.fabricInfoForm.value.fabQty =
      calculationResult.fabQty;
    this.oCfabInfoService.fabricInfoForm.value.lycraQty =
      calculationResult.lacraQty;
    this.oCfabInfoService.fabricInfoForm.value.yarnQty =
      calculationResult.yarnQty;
    this.oCfabInfoService.fabricInfoForm.value.acYarn =
      calculationResult.acYarn;
   

    this.oCConsumCostService.costConsumCostForm.value.fabByDznWidth =
      calculationResult.fabByDznWidth;
    this.oCConsumCostService.costConsumCostForm.value.sixPercentWith =
      calculationResult.sixPercentWith;
    this.oCConsumCostService.costConsumCostForm.value.ttlFabKgWith =
      calculationResult.ttlFabKgWith;
    this.oCConsumCostService.costConsumCostForm.value.total =
      calculationResult.measurmentTotal;
    console.log(calculationResult);

    if (index != undefined) {
      if (index == 0 || index == 1) {
         //Start Total Column Calculation 
        offeringCostArray[index].total =
          (parseFloat(offeringCostArray[index].yarnCountMeaurment) *
            parseFloat(offeringCostArray[index].use)) /
          100;
      
          
         //End Total Column Calculation 

          //Start Mcost Column Calculation 
           if(index == 0 ){
            offeringCostArray[index].mcosting =
            this.oCfabInfoService.fabricInfoForm.value.acYarn*(parseFloat(offeringCostArray[index].yarnCountMeaurment));
             //Auto set value from fabricInfoForm
            offeringCostArray[index].use =this.oCfabInfoService.fabricInfoForm.value.cottonPercent;

         this.offeringCostInformationService.loadOfferingCostFormWithData(
           offeringCostArray
         );
           }
           else if(index == 1){
            offeringCostArray[index].mcosting =
            this.oCfabInfoService.fabricInfoForm.value.lycraQty*(parseFloat(offeringCostArray[index].yarnCountMeaurment));
              //Auto set value from fabricInfoForm
            offeringCostArray[index].use =this.oCfabInfoService.fabricInfoForm.value.laycraPercent;

         this.offeringCostInformationService.loadOfferingCostFormWithData(
           offeringCostArray
         );
           }
            //End Mcost Column Calculation 
       
      } 
       else if (
        index == 2 ||
        index == 3 ||
        index == 5 ||
        index == 6 ||
        index == 7
      ) {
         //Start Total Column Calculation 
     
        offeringCostArray[index].total =
          parseFloat(offeringCostArray[index].yarnCountMeaurment) / 80;
        this.offeringCostInformationService.loadOfferingCostFormWithData(
          offeringCostArray
        );
         //End Total Column Calculation 



         //Start Mcost Column Calculation 
        if(index==2){
          offeringCostArray[index].mcosting =
          offeringCostArray[index].total*this.oCfabInfoService.fabricInfoForm.value.yarnQty ;
        
        }
       else if(index==3){
          offeringCostArray[index].mcosting =
          offeringCostArray[index].total*this.oCfabInfoService.fabricInfoForm.value.yarnQty ;
        
        }
       else if(index==5){
          offeringCostArray[index].mcosting =
          offeringCostArray[index].total*this.oCfabInfoService.fabricInfoForm.value.yarnQty ;
        
        }
       else if(index==6){
          offeringCostArray[index].mcosting =
          offeringCostArray[index].total*this.oCfabInfoService.fabricInfoForm.value.fabQty;
        
        }
       else if(index==7){
          offeringCostArray[index].mcosting =
          offeringCostArray[index].total*this.oCfabInfoService.fabricInfoForm.value.yarnQty;
        
        }
       //End Mcost Column Calculation

      }
       else if (index == 4) {
         //Start Total Column Calculation 
        
        offeringCostArray[index].total = parseFloat(
          offeringCostArray[index].yarnCountMeaurment
        );
          //End Total Column Calculation 

        //Start Mcost Column Calculation   
        offeringCostArray[index].mcosting =
        offeringCostArray[index].total*this.oCfabInfoService.fabricInfoForm.value.acYarn ;
        //End Mcost Column Calculation  

        this.offeringCostInformationService.loadOfferingCostFormWithData(
          offeringCostArray
        );
        
      } 
     
      else if (index == 9) {
       
        offeringCostArray[index].total =
          (parseFloat(offeringCostArray[8].total) * 100) /
            (100 - parseFloat(offeringCostArray[index].use)) -
          parseFloat(offeringCostArray[8].total);

          offeringCostArray[index].use =this.oCfabInfoService.fabricInfoForm.value.dpl;
        this.offeringCostInformationService.loadOfferingCostFormWithData(
          offeringCostArray
        );
      }
       else if (index == 10) {
    
        offeringCostArray[index].total =
          parseFloat(offeringCostArray[8].total) +
          parseFloat(offeringCostArray[9].total);
        this.offeringCostInformationService.loadOfferingCostFormWithData(
          offeringCostArray
        );
      } 
      else if (index == 11) {
          //Start Total Column Calculation 
          offeringCostArray[index].total =
          this.oCConsumCostService.costConsumCostForm.value.total *
          offeringCostArray[10].total;
          //End Total Column Calculation 


          //Start Mcost Column Calculation 
          offeringCostArray[index].mcosting =
          (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
          //End Mcost Column Calculation 


        this.offeringCostInformationService.loadOfferingCostFormWithData(
          offeringCostArray
        );
      }
      else if(index==12){

        //Start Mcost Column Calculation 
        offeringCostArray[index].mcosting =
        (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
        //End Mcost Column Calculation 
        
      }
      else if(index==13){

        //Start Mcost Column Calculation 
        let offeringCostArray = this.offeringCostInformationService
        .CostInformationForm.value;
        offeringCostArray[index].mcosting =
        (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
        //End Mcost Column Calculation 

      }
      else if(index==14){

        //Start Mcost Column Calculation 
        let offeringCostArray = this.offeringCostInformationService
        .CostInformationForm.value;
        offeringCostArray[index].mcosting =
        (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
        //End Mcost Column Calculation 

      }
      else if(index==15){

        //Start Mcost Column Calculation 
        offeringCostArray[index].mcosting =
        (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
        //End Mcost Column Calculation 

      }
       else if (index == 16) {
         //Start Total Column Calculation
        offeringCostArray[index].total =
        this.oCConsumCostService.costConsumCostForm.value.sixPercentWith*
          offeringCostArray[index].use;
        //End Total Column Calculation


        //Start Mcost Column Calculation
        offeringCostArray[index].mcosting =
        (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
        ////End Mcost Column Calculation

        this.offeringCostInformationService.loadOfferingCostFormWithData(
          offeringCostArray
        );
      }
      else if(index==17){
        //Start Mcost Column Calculation
        offeringCostArray[index].mcosting =
        (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
        ////End Mcost Column Calculation
      }
      else if(index==18){
        //Start Mcost Column Calculation
        offeringCostArray[index].mcosting =
        (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
        ////End Mcost Column Calculation
      }
      else if(index==19){
        //Start Mcost Column Calculation
        offeringCostArray[index].mcosting =
        (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
        ////End Mcost Column Calculation
      }
      else if(index==20){
        //Start Mcost Column Calculation
        offeringCostArray[index].mcosting =
        (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
        ////End Mcost Column Calculation
      }
       else if (index == 21) {
         //Start Total & Mcost Column Calculation
        var totalSum = 0;
        var totalMcost = 0;
        this.offeringCostInformationService.CostInformationForm.value.forEach(
          (element, foreachindex) => {
            if ((foreachindex>=11)&&(foreachindex<=19)) {
              totalSum += element.total;
              totalMcost += element.mcosting;
            }
          }
        );
        
        offeringCostArray[index].total = totalSum;
        offeringCostArray[index].mcosting = totalMcost;
        //End Total & Mcost Column Calculation
        this.offeringCostInformationService.loadOfferingCostFormWithData(
          offeringCostArray
        );
       
      }
       else if (index ==22) {
        
        //Start  Total Column Calculation
       offeringCostArray[index].total =
      (((parseFloat(offeringCostArray[21].total)*(100+(parseFloat(offeringCostArray[index].yarnCountMeaurment))))/100)*(parseFloat(offeringCostArray[index].yarnCountMeaurment)))/100;
       //End  Total Column Calculation


            //Start  Mcost Column Calculation
      offeringCostArray[index].mcosting =
        (this.offeringCostObj.orQty/12)*offeringCostArray[index].total;
        //End  Mcost Column Calculation

      this.offeringCostInformationService.loadOfferingCostFormWithData(
        offeringCostArray
      );
      }
       else if (index==23) {
        let offeringCostArray = this.offeringCostInformationService
        .CostInformationForm.value;

        //Start  Total Column Calculation
        offeringCostArray[index].total =
        parseFloat(offeringCostArray[21].total) +
        parseFloat(offeringCostArray[22].total);
        //End  Total Column Calculation

        //Start  Mcost Column Calculation
        offeringCostArray[index].mcosting =
        parseFloat(offeringCostArray[21].mcosting) +
        parseFloat(offeringCostArray[22].mcosting);
        //End  Mcost Column Calculation

        this.offeringCostInformationService.loadOfferingCostFormWithData(
        offeringCostArray
      );
     
      }
       else if (index==24) {
        
      offeringCostArray[index].total=
        parseFloat(offeringCostArray[23].total)/12 
      this.offeringCostInformationService.loadOfferingCostFormWithData(
        offeringCostArray
      );
     
      }
       else if (index==25) {
         //Start  Total Column Calculation
      offeringCostArray[index].total=((parseFloat(offeringCostArray[24].total)*100)/(100-parseFloat(offeringCostArray[index].yarnCountMeaurment)))
        //End  Total Column Calculation


        //Start  Mcost Column Calculation
        offeringCostArray[index].mcosting =
        (parseFloat(offeringCostArray[25].total) -
        parseFloat(offeringCostArray[24].total))*this.offeringCostObj.orQty;       
        //End  Mcost Column Calculation


      this.offeringCostInformationService.loadOfferingCostFormWithData(
        offeringCostArray
      );
     
      }
       else if (index==26) {
         //Start  Total Column Calculation
      offeringCostArray[index].total=((parseFloat(offeringCostArray[25].total)*100)/(100-parseFloat(offeringCostArray[index].yarnCountMeaurment)))-(parseFloat(offeringCostArray[25].total))
        //End  Total Column Calculation
      
       //Start  Mcost Column Calculation
        offeringCostArray[index].mcosting =
        parseFloat(offeringCostArray[index].total)*this.offeringCostObj.orQty;
        //End  Mcost Column Calculation

      this.offeringCostInformationService.loadOfferingCostFormWithData(
        offeringCostArray
      );
     
      }
       else if (index==27) {
         
        //Start  Total Column Calculation
        offeringCostArray[index].total =
        parseFloat(offeringCostArray[25].total) +
        parseFloat(offeringCostArray[26].total);
       //End  Total Column Calculation

        //Start  Mcost Column Calculation
        offeringCostArray[index].mcosting =
        parseFloat(offeringCostArray[index].total)*this.offeringCostObj.orQty;
        //End  Mcost Column Calculation
      this.offeringCostInformationService.loadOfferingCostFormWithData(
        offeringCostArray
      );
     
      }

  //Start Total & Mcost Calculation
  var totalSum = 0;
  var totalMcost = 0;
  this.offeringCostInformationService.CostInformationForm.value.forEach(
    (element, foreachindex) => {
      if (foreachindex <= 7) {
        totalSum += element.total;
        totalMcost += element.mcosting;
      }
    }
  );
  
  offeringCostArray[8].total = totalSum;

  offeringCostArray[8].mcosting = totalMcost;
     //End  Total  & Mcost Calculation

  this.offeringCostInformationService.loadOfferingCostFormWithData(
    offeringCostArray
  );

    }

    this.oCConsumCostService.loadConsumptionInfoModelData(
      this.oCConsumCostService.costConsumCostForm.value
    );

    this.oCfabInfoService.loadFabricInfoModelData(
      this.oCfabInfoService.fabricInfoForm.value
    );
  }
}
