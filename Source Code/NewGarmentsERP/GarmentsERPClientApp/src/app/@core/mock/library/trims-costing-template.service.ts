import { Injectable } from '@angular/core';
import { TrimsCostingTemplate } from '../../data/Library-Modul-model/trims-costing-template';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class TrimsCostingTemplateService {

  trimsCostingTemplate:TrimsCostingTemplate; 
  constructor(public http:HttpClient) { }
  getAll():Observable<TrimsCostingTemplate[]>{
    return this.http.get<TrimsCostingTemplate[]>(BaseURL.apiUrl+'/TrimsCostingTemplates');
  } 
  add(trimsCostingTemplate:any){
    console.log('service data',trimsCostingTemplate);
    return this.http.post<any[]>(BaseURL.apiUrl+'/TrimsCostingTemplates',trimsCostingTemplate);
  }
  update(trimsCostingTemplate:TrimsCostingTemplate){
    return this.http.put(BaseURL.apiUrl+'/TrimsCostingTemplates/'+trimsCostingTemplate.id,trimsCostingTemplate);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/TrimsCostingTemplates/'+id);
  }
}
