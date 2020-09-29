import { Injectable } from '@angular/core';
import { TermsNCondition } from '../../data/Library-Modul-model/terms-and-condition';
import { BaseURL } from '../../data/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TermsAndConditionService {

 
  TermsNCondition:TermsNCondition; 
  constructor(public http:HttpClient) { }
  getAll():Observable<TermsNCondition[]>{
    return this.http.get<TermsNCondition[]>(BaseURL.apiUrl+'/TermsNConditions');
  } 
  add(TermsNCondition:TermsNCondition){
    console.log('service data',TermsNCondition);
    return this.http.post<TermsNCondition>(BaseURL.apiUrl+'/TermsNConditions',TermsNCondition);
  }
  update(TermsNCondition:TermsNCondition){
    return this.http.put(BaseURL.apiUrl+'/TermsNConditions/'+TermsNCondition.id,TermsNCondition);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/TermsNConditions/'+id);
  }


  getAllSubTable():Observable<any[]>{
    return this.http.get<any[]>(BaseURL.apiUrl+'/TermsNConditionSubTables');
  } 
  addSubTable(TermsNConditionSubTables:any){
    console.log('service data',TermsNConditionSubTables);
    return this.http.post<any[]>(BaseURL.apiUrl+'/TermsNConditionSubTables',TermsNConditionSubTables);
  }
  updateSubTable(TermsNConditionSubTables:any){
    return this.http.put(BaseURL.apiUrl+'/TermsNConditionSubTables/'+TermsNConditionSubTables.id,TermsNConditionSubTables);
  }
  deleteSubTable(id: number){
    return this.http.delete(BaseURL.apiUrl+'/TermsNConditionSubTables/'+id);
  }
}
