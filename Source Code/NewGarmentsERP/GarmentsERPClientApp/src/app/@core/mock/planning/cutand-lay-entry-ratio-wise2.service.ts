import { Injectable } from '@angular/core';
import { CutandLayEntryRatioWise2 } from '../../data/planning-model/CutandLayEntryRatioWise2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CutandLayEntryRatioWise2Service {

  cutandLayEntryRatioWise2:CutandLayEntryRatioWise2; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<CutandLayEntryRatioWise2[]>{
    return this.http.get<CutandLayEntryRatioWise2[]>(BaseURL.apiUrl+'/CutandLayEntryRatioWise2');
  } 
  add(cutandLayEntryRatioWise2:CutandLayEntryRatioWise2){
    
    return this.http.post<CutandLayEntryRatioWise2>(BaseURL.apiUrl+'/CutandLayEntryRatioWise2',cutandLayEntryRatioWise2);
  }
  update(cutandLayEntryRatioWise2:CutandLayEntryRatioWise2){
    return this.http.put(BaseURL.apiUrl+'/CutandLayEntryRatioWise2/'+cutandLayEntryRatioWise2.id,cutandLayEntryRatioWise2);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CutandLayEntryRatioWise2/'+id);
  }
}
