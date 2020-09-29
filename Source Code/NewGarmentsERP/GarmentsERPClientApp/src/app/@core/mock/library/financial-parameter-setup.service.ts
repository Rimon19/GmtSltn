import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FinancialParameterSetup } from '../../data/Library-Modul-model/financial-parameter-setup';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class FinancialParameterSetupService {
  financialParameterSetup:FinancialParameterSetup;
  constructor(public http:HttpClient) { }
  getFinancialParameterSetup():Observable<FinancialParameterSetup[]>{
    return this.http.get<FinancialParameterSetup[]>(BaseURL.apiUrl+'/FinancialParameterSetups');
  } 
  addFinancialParameterSetup(financialParameterSetup:FinancialParameterSetup){
    
    return this.http.post<FinancialParameterSetup>(BaseURL.apiUrl+'/FinancialParameterSetups',financialParameterSetup);
  }
  updateFinancialParameterSetup(financialParameterSetup:FinancialParameterSetup){
    return this.http.put(BaseURL.apiUrl+'/FinancialParameterSetups/'+financialParameterSetup.id,financialParameterSetup);
  }
  deleteFinancialParameterSetup(id: number){
    return this.http.delete(BaseURL.apiUrl+'/FinancialParameterSetups/'+id);
  }
}
