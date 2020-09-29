import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubDeptInfoes } from '../../data/SubDeptInfoes';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubDeptInfoesService {

  constructor(private http: HttpClient) { }
  getAllSubDeptInfoes():Observable<SubDeptInfoes[]>{
    return this.http.get<SubDeptInfoes[]>(BaseURL.apiUrl+'/SubDeptInfoes/Index');
  }
  
  addSubDeptInfoes(subDeptInfoes:SubDeptInfoes[]){
    return this.http.post<SubDeptInfoes>(BaseURL.apiUrl+'/SubDeptInfoes',subDeptInfoes);
  }
  updateSubDeptInfoes(subDeptInfoes:SubDeptInfoes){
    return this.http.put(BaseURL.apiUrl+'/SubDeptInfoes/'+ subDeptInfoes.subDeptId,subDeptInfoes);
  }
  deleteSubDeptInfoes(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SubDeptInfoes/'+id);
  }
}
