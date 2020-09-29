import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../data/tostr.model';

@Injectable({
  providedIn: 'root'
})
export class SizeWizeBreakDownGenericCalculationService {
  sizeWiseBrakDownInformationForm= this.fb.array([]);
  Tostr=new Tostr();
  constructor( 
    private fb: FormBuilder,
    private toastrService:NbToastrService) { }
  OrderQtyCalculateTotal(sizeWiseBrakDownInformationForm)
  {
  
    (sizeWiseBrakDownInformationForm.value).forEach((sizeWiseBreakDownObj: any) => {
      sizeWiseBrakDownInformationForm.totalOrderQuantity+= parseInt(sizeWiseBreakDownObj.quanity);
      console.log(sizeWiseBrakDownInformationForm.totalOrderQuantity+'   '+sizeWiseBrakDownInformationForm.poQuantity);

      if(sizeWiseBrakDownInformationForm.totalOrderQuantity>sizeWiseBrakDownInformationForm.poQuantity){
        sizeWiseBrakDownInformationForm.totalOrderQuantity=sizeWiseBrakDownInformationForm.totalOrderQuantity-sizeWiseBreakDownObj.quanity;
        sizeWiseBreakDownObj.quanity=0;
        this.Tostr.showToast('danger','', 'Sum Of Po Quantity Exceeds Target Po Quantity !', '',this.toastrService);
        
      }

      this.sizeWiseBrakDownInformationForm.push(this.fb.group({
       inputPannelId: sizeWiseBreakDownObj.inputPannelId,
       itemId: sizeWiseBreakDownObj.itemId,
       articleNumber: sizeWiseBreakDownObj.articleNumber,
       color: sizeWiseBreakDownObj.color,
       size: sizeWiseBreakDownObj.size,
       quanity: sizeWiseBreakDownObj.quanity,
       rate: sizeWiseBreakDownObj.rate,
       status: sizeWiseBreakDownObj.status,
       planCutQty: sizeWiseBreakDownObj.planCutQty,
       excessCut: sizeWiseBreakDownObj.excessCut,
       amount: sizeWiseBreakDownObj.quanity*sizeWiseBreakDownObj.rate,
       barCode: sizeWiseBreakDownObj.barCode,

      }));

      sizeWiseBrakDownInformationForm.totalRate+= parseInt(sizeWiseBreakDownObj.rate);
      let amount=sizeWiseBreakDownObj.quanity*sizeWiseBreakDownObj.rate;
      sizeWiseBrakDownInformationForm.totalAmount+= amount;
      sizeWiseBrakDownInformationForm.totalExcessCut+= parseInt(sizeWiseBreakDownObj.excessCut);
      sizeWiseBrakDownInformationForm.totalPlanCut+= parseInt(sizeWiseBreakDownObj.planCutQty);
      
    });
return sizeWiseBrakDownInformationForm;
  }

}
