import { Injectable } from '@angular/core';
import { SizeDits } from '../../data/marchanzider-model/size-dits.modelt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SizeDitsService { 
  sizeDits:SizeDits; 
constructor(public http:HttpClient) { }
getAll():Observable<SizeDits[]>{
  return this.http.get<SizeDits[]>(BaseURL.apiUrl+'/SizeDits');
} 
add(sizeDits:SizeDits){
  
  return this.http.post<SizeDits>(BaseURL.apiUrl+'/SizeDits',sizeDits);
}
update(sizeDits:SizeDits){
  return this.http.put(BaseURL.apiUrl+'/SizeDits/'+sizeDits.id,sizeDits);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/SizeDits/'+id);
}
}
