import { Injectable } from '@angular/core';
import { PageInfo } from '../../data/Library-Modul-model/page-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  pageInfo:PageInfo; 
  constructor(public http:HttpClient) { }
  getAll():Observable<PageInfo[]>{
    return this.http.get<PageInfo[]>(BaseURL.apiUrl+'/PageInfoes');
  } 
  add(pageInfo:PageInfo){
    console.log('service data',pageInfo);
    return this.http.post<PageInfo[]>(BaseURL.apiUrl+'/PageInfoes',pageInfo);
  }
  update(pageInfo:PageInfo){
    return this.http.put(BaseURL.apiUrl+'/PageInfoes/'+pageInfo.id,pageInfo);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/PageInfoes/'+id);
  }
}
