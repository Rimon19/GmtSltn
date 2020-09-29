import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { AccountInfo } from '../../data/Library-Modul-model/account-info.model';


@Injectable({
  providedIn: 'root'
})
export class AccountInfoService { 

  accountInfo : AccountInfo;
  constructor(public http:HttpClient) { }

  getAll():Observable<AccountInfo[]>{
    return this.http.get<AccountInfo[]>(BaseURL.apiUrl+'/AccountInfoes');
  } 
  add(accountInfo:AccountInfo){
    console.log('service data',accountInfo);
    return this.http.post<AccountInfo>(BaseURL.apiUrl+'/AccountInfoes',accountInfo);
  }
  update(accountInfo:AccountInfo){
    return this.http.put(BaseURL.apiUrl+'/AccountInfoes/'+accountInfo.id,accountInfo);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/AccountInfoes/'+id);
  }

}
