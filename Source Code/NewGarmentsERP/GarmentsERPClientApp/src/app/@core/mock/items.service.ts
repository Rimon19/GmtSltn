import { Injectable } from '@angular/core';
import { items } from '../data/items';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ItemsService  {
  constructor(public http:HttpClient) { 
  }
  getItemsDropDownValues():Observable<items[]>{
    return this.http.get<items[]>(BaseURL.apiUrl+'/ItemDetailsOrderEntries');
  }

 
}
