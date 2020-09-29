import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { MasterPodetailsInfroes } from '../../data/marchanzider-model/master-podetails-infroes.model';

@Injectable({
  providedIn: 'root'
})
export class MasterPodetailsInfroesService {

  constructor(private http: HttpClient) { }
  podetailsInfroes:MasterPodetailsInfroes;
  getAllMasterPodetailsInfroes():Observable<MasterPodetailsInfroes[]>{
    return this.http.get<MasterPodetailsInfroes[]>(BaseURL.apiUrl+'/MasterPodetailsInfroes');
  }
  getMasterPodetailsInfroes(id): Observable<MasterPodetailsInfroes[]> {
    return this.http.get<MasterPodetailsInfroes[]>(BaseURL.apiUrl+ '/MasterPodetailsInfroes/'+id);
  }
  addMasterPodetailsInfroes(masterPodetailsInfroes:MasterPodetailsInfroes){
    return this.http.post<MasterPodetailsInfroes>(BaseURL.apiUrl+'/MasterPodetailsInfroes',masterPodetailsInfroes);
  }
  updateMasterPodetailsInfroes(masterPodetailsInfroes:MasterPodetailsInfroes){
    return this.http.put(BaseURL.apiUrl+'/MasterPodetailsInfroes/'+ masterPodetailsInfroes.poDetID,masterPodetailsInfroes);
  }
  deleteMasterPodetailsInfroes(id: number){
    console.log('initaila',id)
    return this.http.delete(BaseURL.apiUrl+'/MasterPodetailsInfroes/'+id);
  }
}
