import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VariableSettingsTable } from '../../data/Library-Modul-model/variable-settings-table';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class VariableSettingsTableService {

  variableSettingsTable:VariableSettingsTable; 
  constructor(public http:HttpClient) { }
  getVariableSettingsTable():Observable<VariableSettingsTable[]>{
    return this.http.get<VariableSettingsTable[]>(BaseURL.apiUrl+'/VariableSettingsTables');
  } 
  addVariableSettingsTable(variableSettingsTable:VariableSettingsTable){
    return this.http.post<VariableSettingsTable>(BaseURL.apiUrl+'/VariableSettingsTables',variableSettingsTable);
  }
  updateVariableSettingsTable(variableSettingsTable:VariableSettingsTable){
    return this.http.put(BaseURL.apiUrl+'/VariableSettingsTables/'+variableSettingsTable.id,variableSettingsTable);
  }
  deleteVariableSettingsTable(id: number){
    return this.http.delete(BaseURL.apiUrl+'/VariableSettingsTables/'+id);
  }
}
