import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductionDeptInfoes } from '../data/ProductionDeptInfoes';
import { BaseURL } from '../data/baseUrl';
@Injectable({
  providedIn: 'root'
})
export class ProductionDeptInfoesService  {
  
  constructor(public http:HttpClient) { 
   
  }
  getProductionDeptInfoesDDL():Observable<ProductionDeptInfoes[]>{
    return this.http.get<ProductionDeptInfoes[]>(BaseURL.apiUrl+'/ProductionDeptInfoes/Index');
  }
}
