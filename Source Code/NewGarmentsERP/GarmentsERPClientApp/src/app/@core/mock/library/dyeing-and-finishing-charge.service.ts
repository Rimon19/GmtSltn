import { Injectable } from '@angular/core';
import { DyeingAndFinishingCharge } from '../../data/Library-Modul-model/dyeing-and-finishing-charge';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class DyeingAndFinishingChargeService {
  dyeingAndFinishingCharge:DyeingAndFinishingCharge;
  constructor(public http:HttpClient) { }
  getDyeingAndFinishingCharge():Observable<DyeingAndFinishingCharge[]>{
    return this.http.get<DyeingAndFinishingCharge[]>(BaseURL.apiUrl+'/DyeingAndFinishingCharges');
  } 
  addDyeingAndFinishingCharge(dyeingAndFinishingCharge:DyeingAndFinishingCharge){
    
    return this.http.post<DyeingAndFinishingCharge>(BaseURL.apiUrl+'/DyeingAndFinishingCharges',dyeingAndFinishingCharge);
  }
  updateDyeingAndFinishingCharge(dyeingAndFinishingCharge:DyeingAndFinishingCharge){
    return this.http.put(BaseURL.apiUrl+'/DyeingAndFinishingCharges/'+dyeingAndFinishingCharge.id,dyeingAndFinishingCharge);
  }
  deleteDyeingAndFinishingCharge(id: number){
    return this.http.delete(BaseURL.apiUrl+'/DyeingAndFinishingCharges/'+id);
  }
}
