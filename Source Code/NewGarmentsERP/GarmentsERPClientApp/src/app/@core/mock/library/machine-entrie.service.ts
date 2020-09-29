import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MachineEntrie } from '../../data/Library-Modul-model/machine-entrie';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MachineEntrieService {

  machineEntrie:MachineEntrie; 
  constructor(public http:HttpClient) { }
  getAllMachineEntrie():Observable<MachineEntrie[]>{
    return this.http.get<MachineEntrie[]>(BaseURL.apiUrl+'/MachineEntries');
  } 
  addMachineEntrie(machineEntrie:MachineEntrie){
 
    return this.http.post<MachineEntrie>(BaseURL.apiUrl+'/MachineEntries',machineEntrie);
  }
  updateMachineEntrie(machineEntrie:MachineEntrie){
    return this.http.put(BaseURL.apiUrl+'/MachineEntries/'+machineEntrie.id,machineEntrie);
  }
  deleteMachineEntrie(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MachineEntries/'+id);
  }
}
