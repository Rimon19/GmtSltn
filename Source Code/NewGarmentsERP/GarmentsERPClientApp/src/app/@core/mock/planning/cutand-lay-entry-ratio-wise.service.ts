import { Injectable } from '@angular/core';
import { CutandLayEntryRatioWise } from '../../data/planning-model/CutandLayEntryRatioWise';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CutandLayEntryRatioWiseService {

  cutandLayEntryRatioWise:CutandLayEntryRatioWise; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<CutandLayEntryRatioWise[]>{
    return this.http.get<CutandLayEntryRatioWise[]>(BaseURL.apiUrl+'/CutandLayEntryRatioWises');
  } 
  add(cutandLayEntryRatioWise:CutandLayEntryRatioWise){
    
    return this.http.post<CutandLayEntryRatioWise>(BaseURL.apiUrl+'/CutandLayEntryRatioWises',cutandLayEntryRatioWise);
  }
  update(cutandLayEntryRatioWise:CutandLayEntryRatioWise){
    return this.http.put(BaseURL.apiUrl+'/CutandLayEntryRatioWises/'+cutandLayEntryRatioWise.id,cutandLayEntryRatioWise);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CutandLayEntryRatioWises/'+id);
  }
}
