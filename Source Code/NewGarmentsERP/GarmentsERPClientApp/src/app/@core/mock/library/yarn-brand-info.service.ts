import { Injectable } from '@angular/core';
import { YarnBrandInfo } from '../../data/Library-Modul-model/yarn-brand-info';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YarnBrandInfoService {
  yarnBrandInfo:YarnBrandInfo; 
  constructor(public http:HttpClient) { }
  getYarnBrandInfo():Observable<YarnBrandInfo[]>{
    return this.http.get<YarnBrandInfo[]>(BaseURL.apiUrl+'/yarnBrandInfoes');
  } 
  addYarnBrandInfo(yarnBrandInfo:YarnBrandInfo){
    console.log('service data',yarnBrandInfo);
    return this.http.post<YarnBrandInfo[]>(BaseURL.apiUrl+'/yarnBrandInfoes',yarnBrandInfo);
  }
  updateYarnBrandInfo(yarnBrandInfo:YarnBrandInfo){
    return this.http.put(BaseURL.apiUrl+'/yarnBrandInfoes/'+yarnBrandInfo.yarnBrandId,yarnBrandInfo);
  }
  deleteYarnBrandInfo(id: number){
    return this.http.delete(BaseURL.apiUrl+'/yarnBrandInfoes/'+id);
  }
}
