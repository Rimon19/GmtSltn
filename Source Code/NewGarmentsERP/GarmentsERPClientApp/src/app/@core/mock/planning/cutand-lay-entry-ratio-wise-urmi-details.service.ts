import { Injectable } from '@angular/core';
import { CutandLayEntryRatioWiseUrmiDetails } from '../../data/planning-model/CutandLayEntryRatioWiseUrmiDetails';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CutandLayEntryRatioWiseUrmiDetailsService {

  cutandLayEntryRatioWiseUrmiDetails:CutandLayEntryRatioWiseUrmiDetails; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<CutandLayEntryRatioWiseUrmiDetails[]>{
    return this.http.get<CutandLayEntryRatioWiseUrmiDetails[]>(BaseURL.apiUrl+'/CutandLayEntryRatioWiseUrmiDetails');
  } 
  add(cutandLayEntryRatioWiseUrmiDetails:CutandLayEntryRatioWiseUrmiDetails){
    
    return this.http.post<CutandLayEntryRatioWiseUrmiDetails>(BaseURL.apiUrl+'/CutandLayEntryRatioWiseUrmiDetails',cutandLayEntryRatioWiseUrmiDetails);
  }
  update(cutandLayEntryRatioWiseUrmiDetails:CutandLayEntryRatioWiseUrmiDetails){
    return this.http.put(BaseURL.apiUrl+'/CutandLayEntryRatioWiseUrmiDetails/'+cutandLayEntryRatioWiseUrmiDetails.id,cutandLayEntryRatioWiseUrmiDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CutandLayEntryRatioWiseUrmiDetails/'+id);
  }
}
