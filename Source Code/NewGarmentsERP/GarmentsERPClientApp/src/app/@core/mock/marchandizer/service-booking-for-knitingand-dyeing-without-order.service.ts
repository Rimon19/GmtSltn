import { Injectable } from '@angular/core';
import { ServiceBookingForKnitingandDyeingWithoutOrder } from '../../data/marchanzider-model/service-booking-for-knitingand-dyeing-without-order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookingForKnitingandDyeingWithoutOrderService {

  serviceBookingForKnitingandDyeingWithoutOrder:ServiceBookingForKnitingandDyeingWithoutOrder; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<ServiceBookingForKnitingandDyeingWithoutOrder[]>{
    return this.http.get<ServiceBookingForKnitingandDyeingWithoutOrder[]>(BaseURL.apiUrl+'/ServiceBookingForKnitingandDyeingWithoutOrders');
  } 
  add(serviceBookingForKnitingandDyeingWithoutOrder:ServiceBookingForKnitingandDyeingWithoutOrder){
    
    return this.http.post<ServiceBookingForKnitingandDyeingWithoutOrder>(BaseURL.apiUrl+'/ServiceBookingForKnitingandDyeingWithoutOrders',serviceBookingForKnitingandDyeingWithoutOrder);
  }
  update(serviceBookingForKnitingandDyeingWithoutOrder:ServiceBookingForKnitingandDyeingWithoutOrder){
    return this.http.put(BaseURL.apiUrl+'/ServiceBookingForKnitingandDyeingWithoutOrders/'+serviceBookingForKnitingandDyeingWithoutOrder.id,serviceBookingForKnitingandDyeingWithoutOrder);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ServiceBookingForKnitingandDyeingWithoutOrders/'+id);
  }
  
}
