import { Injectable } from '@angular/core';
import { MultipleJobWiseEmbellishmentWorkOrder } from '../../data/marchanzider-model/multiple-job-wise-embellishment-work-order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MultipleJobWiseEmbellishmentWorkOrderService {

  multipleJobWiseEmbellishmentWorkOrder:MultipleJobWiseEmbellishmentWorkOrder; 
  constructor(public http:HttpClient) { }
  getAll():Observable<MultipleJobWiseEmbellishmentWorkOrder[]>{
    return this.http.get<MultipleJobWiseEmbellishmentWorkOrder[]>(BaseURL.apiUrl+'/MultipleJobWiseEmbellishmentWorkOrders');
  } 
  add(multipleJobWiseEmbellishmentWorkOrder:MultipleJobWiseEmbellishmentWorkOrder){
    
    return this.http.post<MultipleJobWiseEmbellishmentWorkOrder>(BaseURL.apiUrl+'/MultipleJobWiseEmbellishmentWorkOrders',multipleJobWiseEmbellishmentWorkOrder);
  }
  update(multipleJobWiseEmbellishmentWorkOrder:MultipleJobWiseEmbellishmentWorkOrder){
    return this.http.put(BaseURL.apiUrl+'/MultipleJobWiseEmbellishmentWorkOrders/'+multipleJobWiseEmbellishmentWorkOrder.id,multipleJobWiseEmbellishmentWorkOrder);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MultipleJobWiseEmbellishmentWorkOrders/'+id);
  }
}
