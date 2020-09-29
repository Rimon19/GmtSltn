import { Injectable } from '@angular/core';
import { CutandLayEntryRollWise } from '../../data/planning-model/CutandLayEntryRollWise';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CutandLayEntryRollWiseService {

  cutandLayEntryRollWise:CutandLayEntryRollWise; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<CutandLayEntryRollWise[]>{
    return this.http.get<CutandLayEntryRollWise[]>(BaseURL.apiUrl+'/CutandLayEntryRollWises');
  } 
  add(cutandLayEntryRollWise:CutandLayEntryRollWise){
    
    return this.http.post<CutandLayEntryRollWise>(BaseURL.apiUrl+'/CutandLayEntryRollWises',cutandLayEntryRollWise);
  }
  update(cutandLayEntryRollWise:CutandLayEntryRollWise){
    return this.http.put(BaseURL.apiUrl+'/CutandLayEntryRollWises/'+cutandLayEntryRollWise.id,cutandLayEntryRollWise);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CutandLayEntryRollWises/'+id);
  }
}
