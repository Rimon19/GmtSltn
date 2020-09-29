import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class YarnComp1Service {

  constructor(private http:HttpClient) { }
  getAllYarnComp1():Observable<any[]>{
    return this.http.get<any[]>(BaseURL.apiUrl+'/YarnComp1');
  }
}
