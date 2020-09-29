import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { CostComponenetsMasterDetails } from '../../data/marchanzider-model/cost-component-master-details';

@Injectable({
  providedIn: 'root'
})
export class CostComponentsMasterService {

  constructor(public http:HttpClient) { }
  getAllCostComponentsMaster():Observable<any[]>{
    return this.http.get<any[]>(BaseURL.apiUrl+'/CostComponentsMaster');
  }
  getAllCostComponentsMasterDetails():Observable<any[]>{
    return this.http.get<any[]>(BaseURL.apiUrl+'/CostComponenetsMasterDetails');
  }
  add(costComponentsMasterDetails:CostComponenetsMasterDetails){
   
    return this.http.post<any>(BaseURL.apiUrl+'/CostComponenetsMasterDetails',costComponentsMasterDetails);
  }
  update(componentsMasterDetails:CostComponenetsMasterDetails){
    return this.http.put(BaseURL.apiUrl+'/CostComponenetsMasterDetails/'+componentsMasterDetails.id,componentsMasterDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CostComponenetsMasterDetails/'+id);
  }
}
