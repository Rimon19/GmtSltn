import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SewingLine } from '../../data/Library-Modul-model/sewing-line';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SewingLineService {
  sewingLine:SewingLine;
  constructor(public http:HttpClient) { }
  getSewingLine():Observable<SewingLine[]>{
    return this.http.get<SewingLine[]>(BaseURL.apiUrl+'/SewingLines');
  } 
  addSewingLine(sewingLine:SewingLine){
    
    return this.http.post<SewingLine[]>(BaseURL.apiUrl+'/SewingLines',sewingLine);
  }
  updateSewingLine(sewingLine:SewingLine){
    return this.http.put(BaseURL.apiUrl+'/SewingLines/'+sewingLine.id,sewingLine);
  }
  deleteSewingLine(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SewingLines/'+id);
  }
}
