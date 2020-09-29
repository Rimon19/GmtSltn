import { Injectable } from '@angular/core';
import { ShareholderNomineeDetails } from '../../data/Library-Modul-model/shareholder-nominee-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ShareholderNomineeDetailsService {

  ShareholderNomineeDetails:ShareholderNomineeDetails; 
  constructor(public http:HttpClient) { }
  getAll():Observable<ShareholderNomineeDetails[]>{
    return this.http.get<ShareholderNomineeDetails[]>(BaseURL.apiUrl+'/ShareholderNomineeDetails');
  } 
  add(ShareholderNomineeDetails:ShareholderNomineeDetails){
    console.log('service data',ShareholderNomineeDetails);
    return this.http.post<ShareholderNomineeDetails[]>(BaseURL.apiUrl+'/ShareholderNomineeDetails',ShareholderNomineeDetails);
  }
  update(ShareholderNomineeDetails:ShareholderNomineeDetails){
    return this.http.put(BaseURL.apiUrl+'/ShareholderNomineeDetails/'+ShareholderNomineeDetails.id,ShareholderNomineeDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ShareholderNomineeDetails/'+id);
  }
}
