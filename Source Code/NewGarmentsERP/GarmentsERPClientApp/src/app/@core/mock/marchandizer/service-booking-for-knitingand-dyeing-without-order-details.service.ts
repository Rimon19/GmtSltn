import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceBookingForKnitingandDyeingWithoutOrderDetails } from '../../data/marchanzider-model/service-booking-for-knitingand-dyeing-without-order-details';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookingForKnitingandDyeingWithoutOrderDetailsService {

  serviceBookingForKnitingandDyeingWithoutOrderDetails:ServiceBookingForKnitingandDyeingWithoutOrderDetails; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<ServiceBookingForKnitingandDyeingWithoutOrderDetails[]>{
    return this.http.get<ServiceBookingForKnitingandDyeingWithoutOrderDetails[]>(BaseURL.apiUrl+'/ServiceBookingForKnitingandDyeingWithoutOrderDetails');
  } 
  add(serviceBookingForKnitingandDyeingWithoutOrderDetails:ServiceBookingForKnitingandDyeingWithoutOrderDetails){
    
    return this.http.post<ServiceBookingForKnitingandDyeingWithoutOrderDetails>(BaseURL.apiUrl+'/ServiceBookingForKnitingandDyeingWithoutOrderDetails',serviceBookingForKnitingandDyeingWithoutOrderDetails);
  }
  update(serviceBookingForKnitingandDyeingWithoutOrderDetails:ServiceBookingForKnitingandDyeingWithoutOrderDetails){
    return this.http.put(BaseURL.apiUrl+'/ServiceBookingForKnitingandDyeingWithoutOrderDetails/'+serviceBookingForKnitingandDyeingWithoutOrderDetails.id,serviceBookingForKnitingandDyeingWithoutOrderDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ServiceBookingForKnitingandDyeingWithoutOrderDetails/'+id);
  }
  
}
