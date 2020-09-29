import { Injectable } from '@angular/core';
import { CutandLayEntryRatioWise2Details } from '../../data/planning-model/CutandLayEntryRatioWise2Details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CutandLayEntryRatioWise2DetailsService {

  cutandLayEntryRatioWise2Details:CutandLayEntryRatioWise2Details; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<CutandLayEntryRatioWise2Details[]>{
    return this.http.get<CutandLayEntryRatioWise2Details[]>(BaseURL.apiUrl+'/CutandLayEntryRatioWise2Details');
  } 
  add(cutandLayEntryRatioWise2Details:CutandLayEntryRatioWise2Details){
    
    return this.http.post<CutandLayEntryRatioWise2Details>(BaseURL.apiUrl+'/CutandLayEntryRatioWise2Details',cutandLayEntryRatioWise2Details);
  }
  update(cutandLayEntryRatioWise2Details:CutandLayEntryRatioWise2Details){
    return this.http.put(BaseURL.apiUrl+'/CutandLayEntryRatioWise2Details/'+cutandLayEntryRatioWise2Details.id,cutandLayEntryRatioWise2Details);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CutandLayEntryRatioWise2Details/'+id);
  }
}
