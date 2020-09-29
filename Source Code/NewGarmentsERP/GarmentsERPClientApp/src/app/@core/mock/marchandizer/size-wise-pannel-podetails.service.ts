import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { SizeWisePannelPodetails } from '../../data/marchanzider-model/size-wise-pannel-podetails.model';

@Injectable({
  providedIn: 'root'
})
export class SizeWisePannelPodetailsService {
  sizeWisePannelPodetails:SizeWisePannelPodetails;
  constructor(private http: HttpClient) { }
  getsizeWisePannelPodetailsByInputPannelId(inputPannelId){
    return this.http.get<SizeWisePannelPodetails[]>(BaseURL.apiUrl+'/InputPannelPodetails/PoDetails/'+inputPannelId); 
  }
  getAllSizeWisePannelPodetails():Observable<SizeWisePannelPodetails[]>{
    return this.http.get<SizeWisePannelPodetails[]>(BaseURL.apiUrl+'/SizePannelPodetails/Index');
  }
  getSizeWisePannelPodetailsByForignKey(sizeWisePannelPodetails:SizeWisePannelPodetails):Observable<SizeWisePannelPodetails[]>{
    return this.http.get<SizeWisePannelPodetails[]>(BaseURL.apiUrl+'/SizePannelPodetails/ByForeignKey/'+sizeWisePannelPodetails.inputPannelId);
  }
  addSizeWisePannelPodetails(sizeWisePannelPodetails:SizeWisePannelPodetails){
    console.log(sizeWisePannelPodetails);
    return this.http.post<any>(BaseURL.apiUrl+'/SizePannelPodetails',sizeWisePannelPodetails);
  }
  addOrUpdateSizeWisePannelPodetails(id,sizePannelPodetailsList:any[]){
    console.log(sizePannelPodetailsList);
    return this.http.put(BaseURL.apiUrl+'/SizePannelPodetails/'+id,sizePannelPodetailsList);
  }
  updateSizeWisePannelPodetails(sizeWisePannelPodetails:SizeWisePannelPodetails){
    return this.http.put(BaseURL.apiUrl+'/SizePannelPodetails/'+sizeWisePannelPodetails.sizePannelId,sizeWisePannelPodetails);
  }
  
  deleteSizeWisePannelPodetails(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SizePannelPodetails/'+id);
  }
}
