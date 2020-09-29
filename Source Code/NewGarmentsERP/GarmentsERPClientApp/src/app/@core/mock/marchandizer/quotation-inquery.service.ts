import { Injectable } from '@angular/core';
import { QuotationInquery } from '../../data/marchanzider-model/quotation-inquery';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class QuotationInqueryService {
  quotationInquery:QuotationInquery;
  constructor(public http:HttpClient) { }
  getAllQuotationInquery():Observable<QuotationInquery[]>{
    return this.http.get<QuotationInquery[]>(BaseURL.apiUrl+'/QuotationInqueries');
  }
  addQuotationInquery(quotationInquery:QuotationInquery){
    return this.http.post<QuotationInquery>(BaseURL.apiUrl+'/QuotationInqueries',quotationInquery);
  }
  updateQuotationInquery(quotationInquery:QuotationInquery){
    return this.http.put(BaseURL.apiUrl+'/QuotationInqueries/'+quotationInquery.id,quotationInquery);
  }
  deleteQuotationInquery(id: number){
    return this.http.delete(BaseURL.apiUrl+'/QuotationInqueries/'+id);
  }
  uploadFile(file){
    var formData=new FormData();
    formData.append('file',file);
    return this.http.post<QuotationInquery>(BaseURL.apiUrl+'/QuotationInqueries/upload',formData);
  }
  uploadFileViewToImage(file){
    var formData=new FormData();
    formData.append('file',file);
    return this.http.post<QuotationInquery>(BaseURL.apiUrl+'/QuotationInqueries/uploadImage',formData);
  }
}
