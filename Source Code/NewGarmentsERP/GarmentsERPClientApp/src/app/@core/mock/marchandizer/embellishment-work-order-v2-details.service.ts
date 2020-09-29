import { Injectable } from '@angular/core';
import { EmbellishmentWorkOrderV2Details } from '../../data/marchanzider-model/embellishment-work-order-v2-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class EmbellishmentWorkOrderV2DetailsService {

  embellishmentWorkOrderV2Details:EmbellishmentWorkOrderV2Details; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<EmbellishmentWorkOrderV2Details[]>{
    return this.http.get<EmbellishmentWorkOrderV2Details[]>(BaseURL.apiUrl+'/EmbellishmentWorkOrderV2Details');
  } 
  add(embellishmentWorkOrderV2Details:EmbellishmentWorkOrderV2Details){
    
    return this.http.post<EmbellishmentWorkOrderV2Details>(BaseURL.apiUrl+'/EmbellishmentWorkOrderV2Details',embellishmentWorkOrderV2Details);
  }
  update(embellishmentWorkOrderV2Details:EmbellishmentWorkOrderV2Details){
    return this.http.put(BaseURL.apiUrl+'/EmbellishmentWorkOrderV2Details/'+embellishmentWorkOrderV2Details.id,embellishmentWorkOrderV2Details);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/EmbellishmentWorkOrderV2Details/'+id);
  }
} 
