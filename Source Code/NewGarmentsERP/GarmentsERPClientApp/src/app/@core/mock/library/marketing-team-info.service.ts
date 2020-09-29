import { Injectable } from '@angular/core';
import { MarketingTeamInfo } from '../../data/Library-Modul-model/marketing-team-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MarketingTeamInfoService {

  marketingTeamInfo:MarketingTeamInfo; 
  constructor(public http:HttpClient) { }
  getAll():Observable<any[]>{
    return this.http.get<MarketingTeamInfo[]>(BaseURL.apiUrl+'/MarketingTeamInfoes');
  }   
  add(marketingTeamInfo:MarketingTeamInfo){
    console.log('service data',marketingTeamInfo);
    return this.http.post<MarketingTeamInfo>(BaseURL.apiUrl+'/MarketingTeamInfoes',marketingTeamInfo);
  }
  update(marketingTeamInfo:MarketingTeamInfo){
    return this.http.put(BaseURL.apiUrl+'/MarketingTeamInfoes/'+marketingTeamInfo.id,marketingTeamInfo);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MarketingTeamInfoes/'+id);
  }
}
