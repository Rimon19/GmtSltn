import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { TrimCosts } from '../../data/marchanzider-model/trim-costs';
import { HTTPService } from '../shared/http.service';
import { NbToastrService } from '@nebular/theme';
import { FormArray, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TrimCostsService extends HTTPService{
  trimCosts:TrimCosts;
  public count=0;

  public ConsUnitGmts=0;
  public Rate=0;
  public precostingId:any;
  public Amount=0;
  public TotalAmount=0;

  trimsCostInformationForm: FormArray = this.fb.array([]);
  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder) {
    
    super(
      httpClient,
      BaseURL.apiUrl,
      'TrimCosts',
      toastr
     );

     
  }

  trimsCostDetailsForm() {
    this.count=this.count+1;
  console.log(this.count);
        this.trimsCostInformationForm.push(this.fb.group({
    id:[0],
    precostingId:[0],
    groupId:[0],
    countryId: [0],
    description:[''],
    brandSupRef:[''],
    remarks:[''],
    nominatedSuppId: [0],
    consUOMId: [0],
    consUnitGmts: [0],
    rate: [0],
    amount: [0],
    totalQty:[0],
    totalAmount:[0],
    apvlReq:[''],
    imagePath:[''],
        }));
  }

  loadTrimsCostData(trimsCostInformationList){
    (trimsCostInformationList).forEach((itemDts: any) => {
      this.count=this.count+1;
      this.trimsCostInformationForm.push(this.fb.group({
      id:itemDts.id,
      precostingId:itemDts.precostingId,
      groupId:itemDts.groupId,
      countryId: itemDts.countryId,
      description:itemDts.description,
      brandSupRef:itemDts.brandSupRef,
      remarks:itemDts.remarks,
      nominatedSuppId:itemDts.nominatedSuppId,
      consUOMId: itemDts.consUOMId,
      consUnitGmts: itemDts.consUnitGmts,
      rate: itemDts.rate,
      amount: itemDts.amount,
      totalQty:itemDts.totalQty,
      totalAmount:itemDts.totalAmount,
      apvlReq:itemDts.apvlReq,
      imagePath:itemDts.imagePath, 
            }));
      });  
  }

  totalCalculation(trimsCostInformationForm){
    console.log(trimsCostInformationForm.value);
    this.ConsUnitGmts=0;
    this.Rate=0;
    this.Amount=0;
    this.TotalAmount=0;
    (trimsCostInformationForm.value).forEach((itemDts: any) => {
     this.ConsUnitGmts+=parseFloat(itemDts.consUnitGmts);
     this.Rate+=parseFloat(itemDts.rate); 
     this.Amount+=parseFloat(itemDts.amount); 
     this.TotalAmount+=parseFloat(itemDts.totalAmount); 
    });
  }
}
