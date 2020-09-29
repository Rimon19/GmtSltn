import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class PackingInfoesService {

  myAppUrl: string = "";
  private EndPoint = `${this.myAppUrl}/api/PackingInfoes`;



  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl
  }

  // GET: api/PackingInfoes/Index
  getAll(): Observable<any> {
    return this.http.get(this.EndPoint + '/Index')
      .map((response) => response);
  }

  // GET: api/PackingInfoes/5
  getById(id): Observable<any> {
    return this.http.get(this.EndPoint + '/' + id)
      .map((response) => response);
  }


  // POST: api/PackingInfoes
  insert(data): Observable<any> {
    return this.http.post(this.EndPoint, data)
      .map((response) => response);
  }
  // DELETE: api/PackingInfoes/5
  delete(id): Observable<any> {
    // get users from api
    return this.http.delete(`${this.EndPoint}/${id}`)
      .map((response) => response);
  }

  // PUT: api/PackingInfoes/5
  update(id: number, data: any) {
    return this.http.put(`${this.EndPoint}/${id}`, data)
      .map((response) => response);
  }

}
