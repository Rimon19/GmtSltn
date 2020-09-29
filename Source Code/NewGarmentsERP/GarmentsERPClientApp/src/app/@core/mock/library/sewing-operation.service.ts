import { Injectable } from '@angular/core';
import { SewingOperation } from '../../data/Library-Modul-model/sewing-operation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SewingOperationService {

  sewingOperation:SewingOperation;
  constructor(public http:HttpClient) { }
  getSewingOperation():Observable<SewingOperation[]>{
    return this.http.get<SewingOperation[]>(BaseURL.apiUrl+'/SewingOperations');
  } 
  addSewingOperation(sewingOperation:SewingOperation){
    
    return this.http.post<SewingOperation[]>(BaseURL.apiUrl+'/SewingOperations',sewingOperation);
  }
  updateSewingOperation(sewingOperation:SewingOperation){
    return this.http.put(BaseURL.apiUrl+'/SewingOperations/'+sewingOperation.id,sewingOperation);
  }
  deleteSewingOperation(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SewingOperations/'+id);
  }
}
