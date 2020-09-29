import { Injectable } from '@angular/core';
import { MainFabricBookingV2 } from '../../data/marchanzider-model/main-fabric-booking-v2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MainFabricBookingV2Service {
  mainFabricBookingV2:MainFabricBookingV2; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<MainFabricBookingV2[]>{
    return this.http.get<MainFabricBookingV2[]>(BaseURL.apiUrl+'/MainFabricBookingV2');
  } 
  add(mainFabricBookingV2:MainFabricBookingV2){
    
    return this.http.post<MainFabricBookingV2>(BaseURL.apiUrl+'/MainFabricBookingV2',mainFabricBookingV2);
  }
  update(mainFabricBookingV2:MainFabricBookingV2){
    return this.http.put(BaseURL.apiUrl+'/MainFabricBookingV2/'+mainFabricBookingV2.id,mainFabricBookingV2);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MainFabricBookingV2/'+id);
  }
}
