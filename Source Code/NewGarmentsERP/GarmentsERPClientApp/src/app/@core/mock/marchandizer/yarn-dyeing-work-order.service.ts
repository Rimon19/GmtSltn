import { Injectable } from '@angular/core';
import { YarnDyeingWorkOrder } from '../../data/marchanzider-model/yarn-dyeing-work-order.model';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YarnDyeingWorkOrderService {
  yarnDyeingWorkOrder:YarnDyeingWorkOrder; 
  constructor(public http:HttpClient) { }


  getAll():Observable<YarnDyeingWorkOrder[]>{
    return this.http.get<YarnDyeingWorkOrder[]>(BaseURL.apiUrl+'/YarnDyeingWorkOrders');
  } 
  add(yarnDyeingWorkOrder:YarnDyeingWorkOrder){
    
    return this.http.post<YarnDyeingWorkOrder>(BaseURL.apiUrl+'/YarnDyeingWorkOrders',yarnDyeingWorkOrder);
  }
  update(yarnDyeingWorkOrder:YarnDyeingWorkOrder){
    return this.http.put(BaseURL.apiUrl+'/YarnDyeingWorkOrders/'+yarnDyeingWorkOrder.id,yarnDyeingWorkOrder);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/YarnDyeingWorkOrders/'+id);
  }
}
