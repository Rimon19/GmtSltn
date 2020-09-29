import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Tostr } from '../../data/tostr.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService{
  private toastrService:NbToastrService;
  Tostr=new Tostr()
  constructor(){
  }
  getAll(){
  return 'this.getAll().subscribe(data=>{console.log(data)});' ;
  }
 
  // getAll():Observable<T[]> {
  //   return this._http.get(this.actionUrl).map(resp=>resp.json() as T[]);
  // }
  // getOne(id:number):Observable<T> {
  //   return this._http.get(`${this.actionUrl}${id}`).map(resp=>resp.json() as T);
  // }
  // saveNotification(){
  //     this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  // }
}
