import { Injectable } from '@angular/core';
import { ItemCategory } from '../../data/Library-Modul-model/item-category';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemCategoryService {

  itemCategory:ItemCategory;
  constructor(public http:HttpClient) { }
  getItemCategory():Observable<ItemCategory[]>{
    return this.http.get<ItemCategory[]>(BaseURL.apiUrl+'/ItemCategories');
  } 
  addItemCategory(itemCategory:ItemCategory){
    console.log('service data',itemCategory);
    return this.http.post<ItemCategory[]>(BaseURL.apiUrl+'/ItemCategories',itemCategory);
  }
  updateItemCategory(itemCategory:ItemCategory){
    return this.http.put(BaseURL.apiUrl+'/ItemCategories/'+itemCategory.id,itemCategory);
  }
  deleteItemCategory(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ItemCategories/'+id);
  }
}
