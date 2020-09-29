import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgentInfoes } from '../../data/marchanzider-model/agent-infoes.model';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class AgentInfoesService {


  constructor(public http:HttpClient) {
    
  }
 getAllAgentInfoes():Observable<AgentInfoes[]>{
   return this.http.get<AgentInfoes[]>(BaseURL.apiUrl+'/AgentInfoes/Index');
 }
 addAgentInfoes(agentInfoes:AgentInfoes[]){
   //console.log(agentInfoes);
   return this.http.post<AgentInfoes[]>(BaseURL.apiUrl+'/AgentInfoes',agentInfoes);
 }
 updateAgentInfoes(agentInfoes:AgentInfoes){
   return this.http.put(BaseURL.apiUrl+'/AgentInfoes/'+agentInfoes.agentID,agentInfoes);
 }
 deleteAgentInfoes(id: number){
   return this.http.delete(BaseURL.apiUrl+'/AgentInfoes/'+id);
 }
}
