import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {
  baseUrl: string = "";
  constructor(private http: HttpClient, @Inject('BASE_URL') pBaseUrl: string) {
    this.baseUrl = pBaseUrl;
  }
  getCustomerList() {
    //return this.http.get(this.baseUrl + 'api/Customers')
    //  .map((response) => response);
    return this.http.get(this.baseUrl+'api/Customers').toPromise();
   }
}
