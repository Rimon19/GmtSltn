import { Injectable } from '@angular/core';
import { ProductSubDepartment } from '../../data/Library-Modul-model/product-sub-department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductSubDepartmentService {

  productSubDepartment:ProductSubDepartment;
  constructor(public http:HttpClient) { }
  getProductSubDepartment():Observable<ProductSubDepartment[]>{
    return this.http.get<ProductSubDepartment[]>(BaseURL.apiUrl+'/ProductSubDepartments');
  } 
  addProductSubDepartment(productSubDepartment:ProductSubDepartment){
    
    return this.http.post<ProductSubDepartment[]>(BaseURL.apiUrl+'/ProductSubDepartments',productSubDepartment);
  }
  updateProductSubDepartment(productSubDepartment:ProductSubDepartment){
    return this.http.put(BaseURL.apiUrl+'/ProductSubDepartments/'+productSubDepartment.id,productSubDepartment);
  }
  deleteProductSubDepartment(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ProductSubDepartments/'+id);
  }
}
