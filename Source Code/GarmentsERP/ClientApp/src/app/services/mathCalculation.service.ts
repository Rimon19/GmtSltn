import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import {environment} from '../../environments/environment';


@Injectable()
export class MathCalculationService {


  arrayLength: number = 0;
  countProcessLossLength: number = 0;
  sumColorWisepcs: number = 0;
  //calculation for Avg Gre Collection
  sum_finishCons: number = 0;
  sum_processLoss: number = 0;
  sum_greyCons: number = 0;
  sum_rate: number = 0;
  sum_amount: number = 0;
  sum_pcs: number = 0;
  sum_totalQty: number = 0;
  sum_totalAmount: number = 0;

  avg_finishCons: number = 0;
  avg_processLoss: number = 0;
  avg_greyCons: number = 0;
  avg_rate: number = 0;
  avg_amount: number = 0;
  avg_pcs: number = 0;
  avg_totalQty: number = 0;
  avg_totalAmount: number = 0;
  value: any;
  //calculation for Avg Gre Collection

  mathArrayOfObject(arrayObje) {
    if (arrayObje.length > 0) {

      this.arrayLength = arrayObje.length;
      this.countProcessLossLength = 0;
      this.sumColorWisepcs = 0;
      /*   Sum Calculation   */
      this.sum_finishCons = 0;
      this.sum_processLoss = 0;
      this.sum_greyCons = 0;
      this.sum_rate = 0;
      this.sum_amount = 0;
      this.sum_pcs = 0;
      this.sum_totalQty = 0;
      this.sum_totalAmount = 0;

      /*   Avg Calculation   */
      this.avg_finishCons = 0;
      this.avg_processLoss = 0;
      this.avg_greyCons = 0;
      this.avg_rate = 0;
      this.avg_amount = 0;
      this.avg_pcs = 0;
      this.avg_totalQty = 0;
      this.avg_totalAmount = 0;



      arrayObje.map(item => {
        this.sum_finishCons += Number((item.finishCons).toFixed(4));
        this.sum_processLoss += Number((item.processLoss).toFixed(4));
        this.countProcessLossLength += Number(item.processLoss == 0 || NaN ? 0 : 1);
        this.sum_greyCons += Number((item.greyCons).toFixed(4));
        this.sum_rate += Number((item.rate).toFixed(4));

        this.sum_amount += Number((item.amount).toFixed(4));
        this.sum_pcs += Number((item.pcs).toFixed(4));
        this.sum_totalQty += Number((item.totalQty).toFixed(4));
        this.sum_totalAmount += Number((item.totalAmount).toFixed(4));

        //if (item.color )
      });



      /*   Avg Calculation */
      this.avg_finishCons = Number((this.sum_finishCons / this.arrayLength).toFixed(4));
      this.avg_processLoss = Number((this.sum_processLoss / this.countProcessLossLength).toFixed(4));
      this.avg_greyCons = Number((this.sum_greyCons / this.arrayLength).toFixed(4));
      this.avg_rate = Number((this.sum_rate / this.arrayLength).toFixed(4));
      this.avg_amount = Number((this.sum_amount / this.arrayLength).toFixed(4));
      this.avg_pcs = Number((this.sum_pcs / this.arrayLength).toFixed(4));
      this.avg_totalQty = Number((this.sum_totalQty / this.arrayLength).toFixed(4));
      this.avg_totalAmount = Number((this.sum_totalAmount / this.arrayLength).toFixed(4));

      return {

        /*   Sum Calculation   */
        sum_finishCons: this.sum_finishCons,
        sum_processLoss: this.sum_processLoss,
        sum_greyCons: this.sum_greyCons,
        sum_rate: this.sum_rate,
        sum_amount: this.sum_amount,
        sum_pcs: this.sum_pcs,
        sum_totalQty: this.sum_totalQty,
        sum_totalAmount: this.sum_totalAmount,

        avg_finishCons: this.avg_finishCons,
        avg_processLoss: this.avg_processLoss,
        avg_greyCons: this.avg_greyCons,
        avg_rate: this.avg_rate,
        avg_amount: this.avg_amount,
        avg_pcs: this.avg_pcs,
        avg_totalQty: this.avg_totalQty,
      };

      //this.FabricCosForm.controls.avgGreyCons.setValue(this.avg_greyCons);
    } else {
     
      /*   Sum Calculation   */
      this.sum_finishCons = 0;
      this.sum_processLoss = 0;
      this.sum_greyCons = 0;
      this.sum_rate = 0;
      this.sum_amount = 0;
      this.sum_pcs = 0;
      this.sum_totalQty = 0;
      this.sum_totalAmount = 0;

      /*   Avg Calculation   */
      this.avg_finishCons = 0;
      this.avg_processLoss = 0;
      this.avg_greyCons = 0;
      this.avg_rate = 0;
      this.avg_amount = 0;
      this.avg_pcs = 0;
      this.avg_totalQty = 0;
      this.avg_totalAmount = 0;
      
    }


  }

}
