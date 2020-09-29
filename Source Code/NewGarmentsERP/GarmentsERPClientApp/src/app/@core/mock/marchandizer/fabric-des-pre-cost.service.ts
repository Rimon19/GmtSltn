import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { FabricDesPreCost } from '../../data/marchanzider-model/fabric-des-pre-cost.model';
import { YarnCountDeterminationService } from '../library/yarn-count-determination.service';
import { DropdownValueService } from '../shared/dropdown-value.service';
import { YarnCountDetermination } from '../../data/Library-Modul-model/yarn-count-determination';


@Injectable({
  providedIn: 'root'
})
export class FabricDesPreCostService { 
  fabricDesPreCost =new  FabricDesPreCost();
 

  constructor(public http:HttpClient,
    
   ) {
     
     }

  getAll():Observable<FabricDesPreCost[]>{

   return this.http.get<FabricDesPreCost[]>(BaseURL.apiUrl+'/FabricDesPreCosts');
  } 
  add(fabricDesPreCost:FabricDesPreCost){
    console.log('service data',fabricDesPreCost);
    return this.http.post<FabricDesPreCost>(BaseURL.apiUrl+'/FabricDesPreCosts',fabricDesPreCost);
  }
  update(fabricDesPreCost:FabricDesPreCost){
    return this.http.put(BaseURL.apiUrl+'/FabricDesPreCosts/'+fabricDesPreCost.id,fabricDesPreCost);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/FabricDesPreCosts/'+id);
  }
}
