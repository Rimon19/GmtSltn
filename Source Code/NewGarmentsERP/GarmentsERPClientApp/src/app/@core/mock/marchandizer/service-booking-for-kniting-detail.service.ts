import { Injectable } from '@angular/core';
import { ServiceBookingForKnitingDetail } from '../../data/marchanzider-model/service-booking-for-kniting-detail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookingForKnitingDetailService {

  serviceBookingForKnitingDetail:ServiceBookingForKnitingDetail; 

constructor(public http:HttpClient) { 
 
}
getAll():Observable<ServiceBookingForKnitingDetail[]>{
  return this.http.get<ServiceBookingForKnitingDetail[]>(BaseURL.apiUrl+'/ServiceBookingForKnitingDetails');
} 
add(serviceBookingForKnitingDetail:ServiceBookingForKnitingDetail){
  
  return this.http.post<ServiceBookingForKnitingDetail>(BaseURL.apiUrl+'/ServiceBookingForKnitingDetails',serviceBookingForKnitingDetail);
}
update(serviceBookingForKnitingDetail:ServiceBookingForKnitingDetail){
  return this.http.put(BaseURL.apiUrl+'/ServiceBookingForKnitingDetails/'+serviceBookingForKnitingDetail.id,serviceBookingForKnitingDetail);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/ServiceBookingForKnitingDetails/'+id);
}
} 
