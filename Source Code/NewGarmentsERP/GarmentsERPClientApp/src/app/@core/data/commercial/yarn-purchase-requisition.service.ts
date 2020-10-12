import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { HTTPService } from '../../mock/shared/http.service';
import { BaseURL } from '../baseUrl';
import { YarnPurchaseRequisition } from './yarn-purchase-requisition.model';

@Injectable({
  providedIn: 'root'
})
export class YarnPurchaseRequisitionService extends HTTPService {
  yarnPurchaseRequisition:YarnPurchaseRequisition; 

  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder,) {
    super(
      httpClient,
      BaseURL.apiUrl,
      'YarnPurchaseRequisitions',
      toastr
     );
}


resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.yarnPurchaseRequisition = {
    id: 0,
    requisitionNo: '' ,
itemCategoryId: '' ,
requiredDate: '' ,
payMode: '' ,
requisitionDate: '' ,
currencyId: '' ,
source: '' ,
doNo: '' ,
attention: '' ,
dealingMerchant: '' ,
piBasis: '' ,
readytoApprove: '' ,
remarks: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }

 filterSelectObj  = [
  {
      name: 'Requisition No',
      columnProp: 'requisitionNo'
    },{
      name: 'Item Category',
      columnProp: 'itemCategoryName'
    },{
      name: 'Required Date',
      columnProp: 'requiredDate'
    },{
      name: 'Requisition Date',
      columnProp: 'requisitionDate'
    }, 
]

resetFilters() {
  this.filterValues = {}

  this.filterSelectObj.forEach((value:any, key) => {
    value.modelValue = undefined;
  })
  this.dataSource.filter = "";
  this.getDataSource();
}  



}
