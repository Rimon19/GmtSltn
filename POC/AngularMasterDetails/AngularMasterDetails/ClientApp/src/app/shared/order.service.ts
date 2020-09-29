import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';

@Injectable()
export class OrderService {
  baseUrl: string="";
  formData: Order;
  orderItems: OrderItem[];

  constructor(private http: HttpClient, @Inject('BASE_URL') pBaseUrl: string) {
    this.baseUrl= pBaseUrl;
  }

  saveOrUpdateOrder() {
    var body = {
      ...this.formData,
      OrderItems: this.orderItems
    };
    return this.http.post(this.baseUrl + 'api/Orders', body);
  }

  getOrderList() {
    return this.http.get(this.baseUrl + 'api/Orders').toPromise();
  }

  getOrderByID(id:number):any {
    return this.http.get(this.baseUrl + 'api/Orders/'+id).toPromise();
  }

  deleteOrder(id:number) {
    return this.http.delete(this.baseUrl + 'api/Order/'+id).toPromise();
  }

}
