import { Injectable } from '@angular/core';
import { FastReactIntgration } from '../../data/Library-Modul-model/fast-react-intgration';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class FastReactIntgrationService {

  fastReactIntgration:FastReactIntgration; 
  constructor(public http:HttpClient) { }
  getAllFastReactIntgration():Observable<FastReactIntgration[]>{
    return this.http.get<FastReactIntgration[]>(BaseURL.apiUrl+'/FastReactIntgrations');
  } 
  addFastReactIntgration(fastReactIntgration:FastReactIntgration){
 
    return this.http.post<FastReactIntgration>(BaseURL.apiUrl+'/FastReactIntgrations',fastReactIntgration);
  }
  updateFastReactIntgration(fastReactIntgration:FastReactIntgration){
    return this.http.put(BaseURL.apiUrl+'/FastReactIntgrations/'+fastReactIntgration.id,fastReactIntgration);
  }
  deleteFastReactIntgration(id: number){
    return this.http.delete(BaseURL.apiUrl+'/FastReactIntgrations/'+id);
  }
}
