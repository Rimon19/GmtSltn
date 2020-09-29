import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { EmployeeInfo } from '../../data/Library-Modul-model/employee-info.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {

  employeeInfo :EmployeeInfo ;
 
  constructor(public http:HttpClient) { }

  getAll():Observable<EmployeeInfo[]>{
    return this.http.get<EmployeeInfo[]>(BaseURL.apiUrl+'/EmployeeInfoes');
  } 
  add(employeeInfo:EmployeeInfo){
    console.log('service data',employeeInfo);
    return this.http.post<EmployeeInfo>(BaseURL.apiUrl+'/EmployeeInfoes',employeeInfo);
  }
  update(employeeInfo:EmployeeInfo){
    return this.http.put(BaseURL.apiUrl+'/EmployeeInfoes/'+employeeInfo.id,employeeInfo);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/EmployeeInfoes/'+id);
  }
}
