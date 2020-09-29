import { Injectable } from '@angular/core';
import { SupplierProfile } from '../../data/Library-Modul-model/supplier-profile';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SupplierProfileService {
  private obj: BehaviorSubject<any>;
  supplierProfile:SupplierProfile; 
  constructor(public http:HttpClient) {
    this.obj = new BehaviorSubject<any>(0);
   }
  getAll():Observable<SupplierProfile[]>{
     this.http.get<SupplierProfile[]>(BaseURL.apiUrl+'/SupplierProfiles').subscribe(data=>{
      this.setValue(data);
      });
      return this.getValue();
  } 
  add(supplierProfile:SupplierProfile){
    console.log('service data',supplierProfile);
    return this.http.post<SupplierProfile>(BaseURL.apiUrl+'/SupplierProfiles',supplierProfile);
  }
  update(supplierProfile:SupplierProfile){
    return this.http.put(BaseURL.apiUrl+'/SupplierProfiles/'+supplierProfile.id,supplierProfile);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SupplierProfiles/'+id);
  }
  getValue(): Observable<any> {  
    return this.obj.asObservable();
  }
  setValue(newValue): void {
    this.obj.next(newValue);
  }
}
