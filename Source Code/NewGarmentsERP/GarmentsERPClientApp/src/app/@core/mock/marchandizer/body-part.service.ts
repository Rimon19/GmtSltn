import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class BodyPartService {

  constructor(private http:HttpClient) { }
        getAllBodyPart():Observable<any[]>{
          return this.http.get<any[]>(BaseURL.apiUrl+'/BodyPartofPreCostings');
        }
}
