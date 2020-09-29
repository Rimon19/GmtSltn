import { Injectable } from '@angular/core';
import { YarnDyeingWOWithoutOrderMaster } from '../../data/marchanzider-model/yarn-dyeing-wowithout-order-master.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class YarnDyeingWOWithoutOrderMasterService {
  yarnDyeingWOWithoutOrderMaster:YarnDyeingWOWithoutOrderMaster; 

  constructor(public http:HttpClient) { 
       
  }
  getAll():Observable<YarnDyeingWOWithoutOrderMaster[]>{
    return this.http.get<YarnDyeingWOWithoutOrderMaster[]>(BaseURL.apiUrl+'/YarnDyeingWOWithoutOrderMasters');
  } 
  add(yarnDyeingWOWithoutOrderMaster:YarnDyeingWOWithoutOrderMaster){
    
    return this.http.post<YarnDyeingWOWithoutOrderMaster>(BaseURL.apiUrl+'/YarnDyeingWOWithoutOrderMasters',yarnDyeingWOWithoutOrderMaster);
  }
  update(yarnDyeingWOWithoutOrderMaster:YarnDyeingWOWithoutOrderMaster){
    return this.http.put(BaseURL.apiUrl+'/YarnDyeingWOWithoutOrderMasters/'+yarnDyeingWOWithoutOrderMaster.id,yarnDyeingWOWithoutOrderMaster);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/YarnDyeingWOWithoutOrderMasters/'+id);
  }
}
