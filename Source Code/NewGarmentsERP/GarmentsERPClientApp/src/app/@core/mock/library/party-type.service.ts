import { Injectable } from '@angular/core';
import { PartyType } from '../../data/Library-Modul-model/party-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class PartyTypeService {

  partyType:PartyType;
  constructor(public http:HttpClient) { }
  getPartyType():Observable<PartyType[]>{
    return this.http.get<PartyType[]>(BaseURL.apiUrl+'/PartyTypes');
  } 
  addPartyType(partyType:PartyType){
    console.log('service data',partyType);
    return this.http.post<PartyType[]>(BaseURL.apiUrl+'/PartyTypes',partyType);
  }
  updatePartyType(partyType:PartyType){
    return this.http.put(BaseURL.apiUrl+'/PartyTypes/'+partyType.id,partyType);
  }
  deletePartyType(id: number){
    return this.http.delete(BaseURL.apiUrl+'/PartyTypes/'+id);
  }
}
