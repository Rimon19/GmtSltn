import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { ReportSetting } from '../../data/Library-Modul-model/report-setting.model';


@Injectable({
  providedIn: 'root'
})
export class ReportSettingService {
   reportSetting:ReportSetting;
  constructor(public http:HttpClient) { }

  getAll():Observable<ReportSetting[]>{
    return this.http.get<ReportSetting[]>(BaseURL.apiUrl+'/ReportSettings');
  } 
  add(reportSetting:ReportSetting){
    console.log('service data',reportSetting);
    return this.http.post<ReportSetting>(BaseURL.apiUrl+'/ReportSettings',reportSetting);
  }
  update(reportSetting:ReportSetting){
    return this.http.put(BaseURL.apiUrl+'/ReportSettings/'+reportSetting.id,reportSetting);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ReportSettings/'+id);
  }
} 
