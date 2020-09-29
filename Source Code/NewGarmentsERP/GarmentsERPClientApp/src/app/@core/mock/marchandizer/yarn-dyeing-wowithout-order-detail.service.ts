import { Injectable } from '@angular/core';
import { YarnDyeingWOWithoutOrderDetail } from '../../data/marchanzider-model/yarn-dyeing-wowithout-order-detail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class YarnDyeingWOWithoutOrderDetailService {

  yarnDyeingWOWithoutOrderDetail:YarnDyeingWOWithoutOrderDetail; 

constructor(public http:HttpClient) { 
 
}
getAll():Observable<YarnDyeingWOWithoutOrderDetail[]>{
  return this.http.get<YarnDyeingWOWithoutOrderDetail[]>(BaseURL.apiUrl+'/YarnDyeingWOWithoutOrderDetails');
} 
add(yarnDyeingWOWithoutOrderDetail:YarnDyeingWOWithoutOrderDetail){
  
  return this.http.post<YarnDyeingWOWithoutOrderDetail>(BaseURL.apiUrl+'/YarnDyeingWOWithoutOrderDetails',yarnDyeingWOWithoutOrderDetail);
}
update(yarnDyeingWOWithoutOrderDetail:YarnDyeingWOWithoutOrderDetail){
  return this.http.put(BaseURL.apiUrl+'/YarnDyeingWOWithoutOrderDetails/'+yarnDyeingWOWithoutOrderDetail.id,yarnDyeingWOWithoutOrderDetail);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/YarnDyeingWOWithoutOrderDetails/'+id);
}
}
