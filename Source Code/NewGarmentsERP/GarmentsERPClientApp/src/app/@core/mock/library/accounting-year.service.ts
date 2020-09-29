import { Injectable } from '@angular/core';
import { AccountingYear } from '../../data/Library-Modul-model/accounting-year';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class AccountingYearService {

  accountingYear:AccountingYear; 
  constructor(public http:HttpClient) { }
  getAll():Observable<AccountingYear[]>{
    return this.http.get<AccountingYear[]>(BaseURL.apiUrl+'/AccountingYears');
  } 
  add(accountingYear:AccountingYear){
    console.log('service data',accountingYear);
    return this.http.post<AccountingYear>(BaseURL.apiUrl+'/AccountingYears',accountingYear);
  }
  update(accountingYear:AccountingYear){
    return this.http.put(BaseURL.apiUrl+'/AccountingYears/'+accountingYear.id,accountingYear);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/AccountingYears/'+id);
  }
}
