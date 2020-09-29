import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SampleProductionTeam } from '../../data/Library-Modul-model/sample-production-team';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleProductionTeamService {
  sampleProductionTeam:SampleProductionTeam;
  constructor(public http:HttpClient) { }
  getSampleProductionTeam():Observable<SampleProductionTeam[]>{
    return this.http.get<SampleProductionTeam[]>(BaseURL.apiUrl+'/SampleProductionTeams');
  } 
  addSampleProductionTeam(sampleProductionTeam:SampleProductionTeam){
    
    return this.http.post<SampleProductionTeam[]>(BaseURL.apiUrl+'/SampleProductionTeams',sampleProductionTeam);
  }
  updateSampleProductionTeam(sampleProductionTeam:SampleProductionTeam){
    return this.http.put(BaseURL.apiUrl+'/SampleProductionTeams/'+sampleProductionTeam.id,sampleProductionTeam);
  }
  deleteSampleProductionTeam(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SampleProductionTeams/'+id);
  }
}
