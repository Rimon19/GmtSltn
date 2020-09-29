import { Injectable } from '@angular/core';
import { AccountingYearSubInfo } from '../../data/Library-Modul-model/accounting-year-sub-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class AccountingYearSubInfoService {

  accountingYearSubInfo:AccountingYearSubInfo; 
  constructor(public http:HttpClient) { }
  getAll():Observable<AccountingYearSubInfo[]>{
    return this.http.get<AccountingYearSubInfo[]>(BaseURL.apiUrl+'/AccountingYearSubInfoes');
  } 
  add(accountingYearSubInfo:AccountingYearSubInfo){
    console.log('service data',accountingYearSubInfo);
    return this.http.post<AccountingYearSubInfo>(BaseURL.apiUrl+'/AccountingYearSubInfoes',accountingYearSubInfo);
  }
  update(accountingYearSubInfo:AccountingYearSubInfo){
    return this.http.put(BaseURL.apiUrl+'/AccountingYearSubInfoes/'+accountingYearSubInfo.id,accountingYearSubInfo);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/AccountingYearSubInfoes/'+id);
  }
}
