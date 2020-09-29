import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { YarnCounts } from '../../../pages/libraryModule/Model/YarnCounts';

@Injectable({
  providedIn: 'root'
})
export class YarnCountsService {
  yarnCounts:YarnCounts;
  constructor(public http:HttpClient) { }

  getAllYarnCount():Observable<any[]>{
    return this.http.get<any[]>(BaseURL.apiUrl+'/YarnCounts');
  }
  addYarnCount(yarnCounts:any){
    console.log(yarnCounts);
    return this.http.post<any[]>(BaseURL.apiUrl+'/YarnCounts',yarnCounts);
  }
  updateYarnCount(YarnCounts:any){
    return this.http.put(BaseURL.apiUrl+'/YarnCounts/'+YarnCounts.id,YarnCounts);
  }
  deleteYarnCount(id: number){
    return this.http.delete(BaseURL.apiUrl+'/YarnCounts/'+id);
  }
}
