import { Injectable } from '@angular/core';
import { CutandLayEntryRatioWiseDetails } from '../../data/planning-model/CutandLayEntryRatioWiseDetails';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CutandLayEntryRatioWiseDetailsService {

  cutandLayEntryRatioWiseDetails:CutandLayEntryRatioWiseDetails; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<CutandLayEntryRatioWiseDetails[]>{
    return this.http.get<CutandLayEntryRatioWiseDetails[]>(BaseURL.apiUrl+'/CutandLayEntryRatioWiseDetails');
  } 
  add(cutandLayEntryRatioWiseDetails:CutandLayEntryRatioWiseDetails){
    
    return this.http.post<CutandLayEntryRatioWiseDetails>(BaseURL.apiUrl+'/CutandLayEntryRatioWiseDetails',cutandLayEntryRatioWiseDetails);
  }
  update(cutandLayEntryRatioWiseDetails:CutandLayEntryRatioWiseDetails){
    return this.http.put(BaseURL.apiUrl+'/CutandLayEntryRatioWiseDetails/'+cutandLayEntryRatioWiseDetails.id,cutandLayEntryRatioWiseDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CutandLayEntryRatioWiseDetails/'+id);
  }
}
