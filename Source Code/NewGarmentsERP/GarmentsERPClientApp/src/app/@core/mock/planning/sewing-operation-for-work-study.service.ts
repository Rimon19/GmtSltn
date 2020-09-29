import { Injectable } from '@angular/core';
import { SewingOperationForWorkStudy } from '../../data/planning-model/sewing-operation-for-work-study';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SewingOperationForWorkStudyService {

  sewingOperationForWorkStudy:SewingOperationForWorkStudy; 

constructor(public http:HttpClient) { 
 
}
getAll():Observable<SewingOperationForWorkStudy[]>{
  return this.http.get<SewingOperationForWorkStudy[]>(BaseURL.apiUrl+'/SewingOperationForWorkStudies');
} 
add(sewingOperationForWorkStudy:SewingOperationForWorkStudy){
  
  return this.http.post<SewingOperationForWorkStudy>(BaseURL.apiUrl+'/SewingOperationForWorkStudies',sewingOperationForWorkStudy);
}
update(sewingOperationForWorkStudy:SewingOperationForWorkStudy){
  return this.http.put(BaseURL.apiUrl+'/SewingOperationForWorkStudies/'+sewingOperationForWorkStudy.id,sewingOperationForWorkStudy);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/SewingOperationForWorkStudies/'+id);
}

}
