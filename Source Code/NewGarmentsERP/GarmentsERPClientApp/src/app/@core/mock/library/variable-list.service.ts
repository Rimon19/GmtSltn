import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { VariableList } from '../../data/Library-Modul-model/variable-list.model';


@Injectable({
  providedIn: 'root'
})
export class VariableListService {

  variableList : VariableList;
  constructor(public http:HttpClient) { }

  getAll():Observable<VariableList[]>{
    return this.http.get<VariableList[]>(BaseURL.apiUrl+'/VariableListTables');
  } 
  add(variableList:VariableList){ 
    console.log('service data',variableList);
    return this.http.post<VariableList>(BaseURL.apiUrl+'/VariableListTables',variableList);
  }
  update(variableList:VariableList){
    return this.http.put(BaseURL.apiUrl+'/VariableListTables/'+variableList.id,variableList);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/VariableListTables/'+id);
  }
}
