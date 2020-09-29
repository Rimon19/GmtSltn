import { Injectable } from '@angular/core';
import { ConsumptionEntryForm } from '../../data/marchanzider-model/consumptionEntryForm';
import { BaseURL } from '../../data/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionEntryFormService {

  ConsumptionEntryForm:ConsumptionEntryForm; 
  constructor(public http:HttpClient) { }
  getAll():Observable<ConsumptionEntryForm[]>{
    return this.http.get<ConsumptionEntryForm[]>(BaseURL.apiUrl+'/ConsumptionEntryForms');
  } 
  add(ConsumptionEntryForm:ConsumptionEntryForm){
    console.log('service data',ConsumptionEntryForm);
    return this.http.post<ConsumptionEntryForm>(BaseURL.apiUrl+'/ConsumptionEntryForms',ConsumptionEntryForm);
  }
  update(ConsumptionEntryForm:ConsumptionEntryForm){
    return this.http.put(BaseURL.apiUrl+'/ConsumptionEntryForms/'+ConsumptionEntryForm.id,ConsumptionEntryForm);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ConsumptionEntryForms/'+id);
  }
}
