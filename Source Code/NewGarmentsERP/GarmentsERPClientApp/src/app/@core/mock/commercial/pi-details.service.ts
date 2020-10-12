import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { PiDetails } from '../../data/commercial/pi-details.model';
import { HTTPService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class PiDetailsService extends HTTPService {

  piDetails:PiDetails; 
  filterSelectObj  = [
    {
        name: 'Item Category',
        columnProp: 'itemCategoryName'
      },{
        name: 'importer',
        columnProp: 'importer'
      },{
        name: 'Supplier Profile',
        columnProp: 'supplierProfileName'
      },{
        name: 'PI No',
        columnProp: 'piNo'
      },{
        name: 'PI Date',
        columnProp: 'piDate'
      },{
        name: 'Currency',
        columnProp: 'currencyName'
      },{
        name: 'Source',
        columnProp: 'source'
      },{
        name: 'PI Basis',
        columnProp: 'piBasis'
      },{
        name: 'Goods Rcv Status',
        columnProp: 'goodsRcvStatus'
      }, 
  ]
  constructor(httpClient: HttpClient,
    toastr: NbToastrService
    ) {
    super(
      httpClient,
      BaseURL.apiUrl,
      'PiDetails',
      toastr
     );

  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.piDetails = {
      id: 0,
      itemCategoryId: '' ,
    importer: '' ,
    supplierProfileId: '' ,
    piNo: '' ,
    piDate: '' ,
    lastShipmentDate: '' ,
    piValidityDate: '' ,
    currencyId: '' ,
    source: '' ,
    hsCode: '' ,
    internalFileNo: 0 ,
    indentorName: '' ,
    piBasis: '' ,
    goodsRcvStatus: '' ,
    lcGroupNo: 0 ,
    remarks: '' ,
    readyToApproved: '' ,
    requestedBy: '' ,
    
      entryDate :'',
      entryBy :'',
      approvedDate :'',
      approvedBy :'',
      isApproved :false,
      status :''
    }
    
    }

  resetFilters() {
    this.filterValues = {}
  
    this.filterSelectObj.forEach((value:any, key) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
    this.getDataSource();
  }   
  

}
