import { Injectable } from '@angular/core';
import { YarnDyeingWoDetail } from '../../data/marchanzider-model/yarn-dyeing-wo-detail.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class YarnDyeingWoDetailService {

  yarnDyeingWoDetail:YarnDyeingWoDetail; 

constructor(public http:HttpClient) { 
  
}


getAll():Observable<YarnDyeingWoDetail[]>{
  return this.http.get<YarnDyeingWoDetail[]>(BaseURL.apiUrl+'/YarnDyeingWoDetails')
} 
add(yarnDyeingWoDetail:YarnDyeingWoDetail){
  
  return this.http.post<YarnDyeingWoDetail>(BaseURL.apiUrl+'/YarnDyeingWoDetails',yarnDyeingWoDetail);
}
update(yarnDyeingWoDetail:YarnDyeingWoDetail){
  return this.http.put(BaseURL.apiUrl+'/YarnDyeingWoDetails/'+yarnDyeingWoDetail.id,yarnDyeingWoDetail);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/YarnDyeingWoDetails/'+id);
}

}
