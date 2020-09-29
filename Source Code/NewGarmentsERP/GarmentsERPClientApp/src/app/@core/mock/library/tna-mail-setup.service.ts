import { Injectable } from '@angular/core';
import { TnaMailSetup } from '../../data/Library-Modul-model/tna-mail-setup.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class TnaMailSetupService {

  tnaMailSetup:TnaMailSetup; 

constructor(public http:HttpClient) { 
 
}
getAll():Observable<TnaMailSetup[]>{
  return this.http.get<TnaMailSetup[]>(BaseURL.apiUrl+'/TnaMailSetups');
} 
add(tnaMailSetup:TnaMailSetup){
  
  return this.http.post<TnaMailSetup>(BaseURL.apiUrl+'/TnaMailSetups',tnaMailSetup);
}
update(tnaMailSetup:TnaMailSetup){
  return this.http.put(BaseURL.apiUrl+'/TnaMailSetups/'+tnaMailSetup.id,tnaMailSetup);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/TnaMailSetups/'+id);
}
}
