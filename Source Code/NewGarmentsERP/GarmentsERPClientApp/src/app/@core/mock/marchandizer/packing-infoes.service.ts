import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PackingInfoes } from '../../data/marchanzider-model/packing-infoes.model';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class PackingInfoesService {

  constructor(public http:HttpClient) {
   
  }
  getAllPackingInfoes():Observable<PackingInfoes[]>{
   return this.http.get<PackingInfoes[]>(BaseURL.apiUrl+'/PackingInfoes/Index');
 }
 addPackingInfoes(packingInfoes:PackingInfoes){
  // console.log(packingInfoes);
   return this.http.post<PackingInfoes>(BaseURL.apiUrl+'/PackingInfoes',packingInfoes);
 }
 updatePackingInfoes(packingInfoes:PackingInfoes){
   return this.http.put(BaseURL.apiUrl+'/PackingInfoes/'+packingInfoes.packingID,packingInfoes);
 }
 deletePackingInfoes(id: number){
   return this.http.delete(BaseURL.apiUrl+'/PackingInfoes/'+id);
 }
}
