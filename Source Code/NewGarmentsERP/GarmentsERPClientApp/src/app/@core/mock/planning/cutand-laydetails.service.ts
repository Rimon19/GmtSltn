import { Injectable } from '@angular/core';
import { CutandLaydetails } from '../../data/planning-model/CutandLaydetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CutandLaydetailsService {

  cutandLaydetails:CutandLaydetails; 

constructor(public http:HttpClient) { 
 
}
getAll():Observable<CutandLaydetails[]>{
  return this.http.get<CutandLaydetails[]>(BaseURL.apiUrl+'/CutandLaydetails');
} 
add(cutandLaydetails:CutandLaydetails){
  
  return this.http.post<CutandLaydetails>(BaseURL.apiUrl+'/CutandLaydetails',cutandLaydetails);
}
update(cutandLaydetails:CutandLaydetails){
  return this.http.put(BaseURL.apiUrl+'/CutandLaydetails/'+cutandLaydetails.id,cutandLaydetails);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/CutandLaydetails/'+id);
}

}
