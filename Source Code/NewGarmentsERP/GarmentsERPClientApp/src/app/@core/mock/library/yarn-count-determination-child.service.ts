import { Injectable } from '@angular/core';
import { YarnCountDeterminationChild } from '../../data/Library-Modul-model/yarn-count-determination-child';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YarnCountDetermination } from '../../data/Library-Modul-model/yarn-count-determination';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class YarnCountDeterminationChildService {
  yarnCountDeterminationChild:YarnCountDeterminationChild; 
  constructor(public http:HttpClient) { }
  getAll():Observable<YarnCountDeterminationChild[]>{
    return this.http.get<YarnCountDeterminationChild[]>(BaseURL.apiUrl+'/YarnCountDeterminationChilds');
  } 
}
