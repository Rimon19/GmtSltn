import { Injectable } from '@angular/core';
import { SeasonInfoes } from '../../data/marchanzider-model/season-infoes.model';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeasonInfoesService {

  constructor(public http:HttpClient) {
  
  }
          getAllSeasonInfoes():Observable<SeasonInfoes[]>{
          return this.http.get<SeasonInfoes[]>(BaseURL.apiUrl+'/SeasonInfoes/Index');
        } 
          addSeasonInfoes(seasonInfoes:SeasonInfoes){
            //console.log(seasonInfoes);
            return this.http.post<SeasonInfoes>(BaseURL.apiUrl+'/SeasonInfoes',seasonInfoes);
          }
          updateSeasonInfoes(seasonInfoes:SeasonInfoes){
            return this.http.put(BaseURL.apiUrl+'/SeasonInfoes/'+seasonInfoes.seasonId,seasonInfoes);
          }
          deleteSeasonInfoes(id: number){
            return this.http.delete(BaseURL.apiUrl+'/SeasonInfoes/'+id);
          }
}
