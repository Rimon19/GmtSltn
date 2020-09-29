import { Injectable } from '@angular/core';
import { EfficiencyPercentageSlab } from '../../data/planning-model/efficiency-percentage-slab';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EfficiencyPercentageSlabService {

  efficiencyPercentageSlab:EfficiencyPercentageSlab; 

constructor(public http:HttpClient) { 
 
}
getAll():Observable<EfficiencyPercentageSlab[]>{
  return this.http.get<EfficiencyPercentageSlab[]>(BaseURL.apiUrl+'/EfficiencyPercentageSlabs');
} 
add(efficiencyPercentageSlab:EfficiencyPercentageSlab){
  
  return this.http.post<EfficiencyPercentageSlab>(BaseURL.apiUrl+'/EfficiencyPercentageSlabs',efficiencyPercentageSlab);
}
update(efficiencyPercentageSlab:EfficiencyPercentageSlab){
  return this.http.put(BaseURL.apiUrl+'/EfficiencyPercentageSlabs/'+efficiencyPercentageSlab.id,efficiencyPercentageSlab);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/EfficiencyPercentageSlabs/'+id);
}

}
