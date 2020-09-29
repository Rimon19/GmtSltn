import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';
import { SampleFabricBookingWithoutOrderMaster } from '../../data/marchanzider-model/SampleFabricBookingWithoutorderMaster';

@Injectable({
  providedIn: 'root'
})
export class SampleFabricBookingWithoutorderMastersService {
  
  sampleFabricBookingWithoutOrderMaster:SampleFabricBookingWithoutOrderMaster; 
  constructor(public http:HttpClient) { }
  getAll():Observable<SampleFabricBookingWithoutOrderMaster[]>{
    return this.http.get<SampleFabricBookingWithoutOrderMaster[]>(BaseURL.apiUrl+'/SampleFabricBookingWithoutorderMasters');
  } 
  add(sampleFabricBookingWithoutOrderMaster:SampleFabricBookingWithoutOrderMaster){
    console.log(sampleFabricBookingWithoutOrderMaster);
    return this.http.post<SampleFabricBookingWithoutOrderMaster>(BaseURL.apiUrl+'/SampleFabricBookingWithoutorderMasters',sampleFabricBookingWithoutOrderMaster);
  }
  update(sampleFabricBookingWithoutOrderMaster:SampleFabricBookingWithoutOrderMaster){
    return this.http.put(BaseURL.apiUrl+'/SampleFabricBookingWithoutorderMasters/'+sampleFabricBookingWithoutOrderMaster.id,sampleFabricBookingWithoutOrderMaster);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SampleFabricBookingWithoutorderMasters/'+id);
  }
}
