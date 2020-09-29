import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { ItemDetailsOrderEntries } from '../../data/marchanzider-model/item-details-order-entries.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsOrderEntriesService {
     ItemDetails:ItemDetailsOrderEntries;
    constructor(public http:HttpClient) {
        }
        getItemDetailsByOrderAutoId(OrderAutoId){
            return this.http.get<ItemDetailsOrderEntries[]>(BaseURL.apiUrl+ '/ItemDetailsOrderEntries/ByOrderEntryId/'+OrderAutoId);
        }
        getAllItemDetailsOrderEntries():Observable<ItemDetailsOrderEntries[]>{
          return this.http.get<ItemDetailsOrderEntries[]>(BaseURL.apiUrl+'/ItemDetailsOrderEntries');
        }
        addItemDetailsOrderEntries(itemDetailsOrderEntries:ItemDetailsOrderEntries){
          // console.log(packingInfoes);
          return this.http.post<ItemDetailsOrderEntries>(BaseURL.apiUrl+'/ItemDetailsOrderEntries',itemDetailsOrderEntries);
        }
        updateItemDetailsOrderEntries(itemDetailsOrderEntriy:ItemDetailsOrderEntries){
          return this.http.put(BaseURL.apiUrl+'/ItemDetailsOrderEntries/'+itemDetailsOrderEntriy.id,itemDetailsOrderEntriy);
        }
        deleteItemDetailsOrderEntries(id: number){
          return this.http.delete(BaseURL.apiUrl+'/ItemDetailsOrderEntries/ByOrderEntryId/'+id);
        }
}
