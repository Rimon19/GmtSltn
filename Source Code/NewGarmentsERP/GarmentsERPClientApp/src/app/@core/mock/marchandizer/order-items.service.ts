import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { OrderItems } from '../../data/marchanzider-model/order-items.model';

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  constructor(private http: HttpClient) { }
  getAllOrderItems():Observable<OrderItems[]>{
    return this.http.get<OrderItems[]>(BaseURL.apiUrl+'/OrderItems');
  }
  addOrderItems(orderItems:OrderItems){
    return this.http.post<OrderItems>(BaseURL.apiUrl+'/OrderItems',orderItems);
  }
  updateOrderItems(orderItems:OrderItems){
    return this.http.put(BaseURL.apiUrl+'/OrderItems/'+orderItems.itemId,orderItems);
  }
  deleteOrderItems(id: number){
    return this.http.delete(BaseURL.apiUrl+'/OrderItems/'+id);
  }
}
