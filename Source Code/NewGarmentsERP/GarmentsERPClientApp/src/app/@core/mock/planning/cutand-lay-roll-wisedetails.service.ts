import { Injectable } from '@angular/core';
import { CutandLayRollWisedetails } from '../../data/planning-model/CutandLayRollWisedetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CutandLayRollWisedetailsService {

  cutandLayRollWisedetails:CutandLayRollWisedetails; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<CutandLayRollWisedetails[]>{
    return this.http.get<CutandLayRollWisedetails[]>(BaseURL.apiUrl+'/CutandLayRollWisedetails');
  } 
  add(cutandLayRollWisedetails:CutandLayRollWisedetails){
    
    return this.http.post<CutandLayRollWisedetails>(BaseURL.apiUrl+'/CutandLayRollWisedetails',cutandLayRollWisedetails);
  }
  update(cutandLayRollWisedetails:CutandLayRollWisedetails){
    return this.http.put(BaseURL.apiUrl+'/CutandLayRollWisedetails/'+cutandLayRollWisedetails.id,cutandLayRollWisedetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CutandLayRollWisedetails/'+id);
  }
  
}
