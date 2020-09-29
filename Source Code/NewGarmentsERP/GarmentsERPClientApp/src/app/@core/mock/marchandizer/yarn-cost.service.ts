import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';
import { YarnCost } from '../../data/marchanzider-model/yarn-cost.model';
import { NbToastrService } from '@nebular/theme';
import { FormArray, FormBuilder } from '@angular/forms';
import { HTTPService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class YarnCostService extends HTTPService {
  public count = 0;
  yarnCostInformationForm: FormArray = this.fb.array([]);
  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder,) {
    super(
      httpClient,
      BaseURL.apiUrl,
      'YarnCosts',
      toastr
     );
     
    
  }
  
  yarnCostForm() {
    this.count = this.count + 1;
    this.yarnCostInformationForm.push(
      this.fb.group({
        id: 0,
        countId: 0,
        precostingId: 0,
        comp1Id: 0,
        percentage: 0,
        color: "",
        typeId: 0,
        consQnty: 0,
        supplierId: 0,
        rate: 0,
        amount: 0,
      })
    );
  }

  loadYarnCostWithData(yarnCostInformationForm){
    this.count=0;
    this.yarnCostInformationForm = this.fb.array([]);
      yarnCostInformationForm.forEach((itemDts: any) => {
        this.count = this.count + 1;
        this.yarnCostInformationForm.push(
          this.fb.group({
            id: itemDts.id,
            countId: itemDts.countId,
            precostingId: itemDts.precostingId,
            comp1Id: itemDts.comp1Id,
            percentage: itemDts.percentage,
            color: itemDts.color,
            typeId: itemDts.typeId,
            consQnty: itemDts.consQnty,
            supplierId: itemDts.supplierId,
            rate: itemDts.rate,
            amount: itemDts.amount,
          })
        );
      });
    } 
}
