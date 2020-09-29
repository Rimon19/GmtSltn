import { Injectable } from '@angular/core';
import { YarnCountDetermination } from '../../data/Library-Modul-model/yarn-count-determination';
import { BaseURL } from '../../data/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YarnCountDeterminationService {

  yarnCountDetermination:YarnCountDetermination; 
  constructor(public http:HttpClient) { }
  getAll():Observable<YarnCountDetermination[]>{
    return this.http.get<YarnCountDetermination[]>(BaseURL.apiUrl+'/YarnCountDeterminations');
  } 
  add(yarnCountDetermination:YarnCountDetermination){
    console.log('service data',yarnCountDetermination);
    return this.http.post<YarnCountDetermination>(BaseURL.apiUrl+'/YarnCountDeterminations',yarnCountDetermination);
  }
  update(yarnCountDetermination:YarnCountDetermination){
    return this.http.put(BaseURL.apiUrl+'/YarnCountDeterminations/'+yarnCountDetermination.id,yarnCountDetermination);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/YarnCountDeterminations/'+id);
  }
}
