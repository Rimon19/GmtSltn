import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';
import { InputPannelPodetails } from '../../data/marchanzider-model/input-pannel-podetails.model';

@Injectable({
  providedIn: 'root'
})
export class InputPannelPodetailsService {
  constructor(private http: HttpClient) { }
          inputPannelInfo:InputPannelPodetails;
          getInputPannelDetailsByPoDetailsId(PoDetailsId){
            return this.http.get<InputPannelPodetails[]>(BaseURL.apiUrl+'/MasterPodetailsInfroes/Details/'+PoDetailsId);
          }

          getAllInputPannelPodetails():Observable<InputPannelPodetails[]>{
            return this.http.get<InputPannelPodetails[]>(BaseURL.apiUrl+'/InputPannelPodetails');
          }
          getInputPannelPodetailsByForeignKey(id): Observable<InputPannelPodetails[]> {
            return this.http.get<InputPannelPodetails[]>(BaseURL.apiUrl+ '/InputPannelPodetails/PoDetails/'+id);
          }

          addInputPannelPodetails(inputPannelPodetails:InputPannelPodetails){
            console.log(inputPannelPodetails);
            return this.http.post<InputPannelPodetails>(BaseURL.apiUrl+'/InputPannelPodetails',inputPannelPodetails);
          }
          updateInputPannelPodetails(inputPannelPodetails:InputPannelPodetails){
            return this.http.put(BaseURL.apiUrl+'/InputPannelPodetails/'+inputPannelPodetails.input_Pannel_ID,inputPannelPodetails);
          }
          
          deleteInputPannelPodetails(id: number){
            return this.http.delete(BaseURL.apiUrl+'/InputPannelPodetails/'+id);
          }

          getGarmentsColorByPoDetailsId(PoDetailsId){
            return this.http.get<InputPannelPodetails[]>(BaseURL.apiUrl+'/MasterPodetailsInfroes/GarmentsColor/'+PoDetailsId);
          }
          getGarmentsSizeByPoDetailsId(PoDetailsId){
            return this.http.get<InputPannelPodetails[]>(BaseURL.apiUrl+'/MasterPodetailsInfroes/GarmentsSize/'+PoDetailsId);
          }
}
