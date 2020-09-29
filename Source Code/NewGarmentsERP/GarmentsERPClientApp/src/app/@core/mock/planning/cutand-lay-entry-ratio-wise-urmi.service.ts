import { Injectable } from '@angular/core';
import { CutandLayEntryRatioWiseUrmi } from '../../data/planning-model/CutandLayEntryRatioWiseUrmi';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CutandLayEntryRatioWiseUrmiService {

  cutandLayEntryRatioWiseUrmi:CutandLayEntryRatioWiseUrmi; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<CutandLayEntryRatioWiseUrmi[]>{
    return this.http.get<CutandLayEntryRatioWiseUrmi[]>(BaseURL.apiUrl+'/CutandLayEntryRatioWiseUrmis');
  } 
  add(cutandLayEntryRatioWiseUrmi:CutandLayEntryRatioWiseUrmi){
    
    return this.http.post<CutandLayEntryRatioWiseUrmi>(BaseURL.apiUrl+'/CutandLayEntryRatioWiseUrmis',cutandLayEntryRatioWiseUrmi);
  }
  update(cutandLayEntryRatioWiseUrmi:CutandLayEntryRatioWiseUrmi){
    return this.http.put(BaseURL.apiUrl+'/CutandLayEntryRatioWiseUrmis/'+cutandLayEntryRatioWiseUrmi.id,cutandLayEntryRatioWiseUrmi);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CutandLayEntryRatioWiseUrmis/'+id);
  }
}
