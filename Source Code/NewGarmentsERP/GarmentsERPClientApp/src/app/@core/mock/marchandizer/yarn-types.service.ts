import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class YarnTypesService {

  constructor(public http:HttpClient) { }

  getAllYarnTypes():Observable<any[]>{
    return this.http.get<any[]>(BaseURL.apiUrl+'/YarnCounts');
  }
}
