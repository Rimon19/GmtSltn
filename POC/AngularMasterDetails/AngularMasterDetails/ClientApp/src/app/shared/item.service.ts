import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {

  baseUrl: string="";
  constructor(private http: HttpClient, @Inject('BASE_URL') pBaseUrl: string) {
    this.baseUrl = pBaseUrl;
  }

  getItemList(){
    return this.http.get(this.baseUrl+'api/Items').toPromise();
  }
}
