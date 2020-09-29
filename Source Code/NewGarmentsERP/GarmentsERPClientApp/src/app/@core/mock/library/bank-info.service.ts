import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { BankInfo } from '../../data/Library-Modul-model/bank-info.model';


@Injectable({
  providedIn: 'root'
})
export class BankInfoService {

  bankInfo : BankInfo;
  constructor(public http:HttpClient) { }

  getAll():Observable<BankInfo[]>{
    return this.http.get<BankInfo[]>(BaseURL.apiUrl+'/BankInfoes');
  } 
  add(bankInfo:BankInfo){
    console.log('service data',bankInfo);
    return this.http.post<BankInfo>(BaseURL.apiUrl+'/BankInfoes',bankInfo);
  }
  update(bankInfo:BankInfo){
    return this.http.put(BaseURL.apiUrl+'/BankInfoes/'+bankInfo.id,bankInfo);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/BankInfoes/'+id);
  }
}
