import { Injectable } from '@angular/core';
import { ErpImages } from '../../data/Shared/erp-images';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ErpImagesService {

  erpImages:ErpImages; 
  constructor(public http:HttpClient) { }
  getAll():Observable<ErpImages[]>{
    return this.http.get<ErpImages[]>(BaseURL.apiUrl+'/ErpImages');
  } 
  add(erpImages:ErpImages){
    console.log('service data',erpImages);
    return this.http.post<ErpImages>(BaseURL.apiUrl+'/ErpImages',erpImages);
  }
  update(erpImages:ErpImages){
    return this.http.put(BaseURL.apiUrl+'/ErpImages/'+erpImages.id,erpImages);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ErpImages/'+id);
  }

  uploadImage(file){
    var formData=new FormData();
    formData.append('file',file);
    return this.http.post<any>(BaseURL.apiUrl+'/ErpImages/uploadImage',formData);
  }
}
