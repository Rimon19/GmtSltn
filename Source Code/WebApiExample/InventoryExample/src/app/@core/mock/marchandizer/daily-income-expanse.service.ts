import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Company } from '../../data/marchanzider-model/assignCompanyName';

@Injectable({
  providedIn: 'root'
})
export class DailyIncomeExpanseService {
  
  constructor(private db: AngularFireDatabase) { }
  addProductInfo(obj) {
    return  this.db.list(`${Company.cName}/DailyIncomeExpanse/`).push(obj);
   }

   updateProductInfo(id, obj) {
    return this.db.object(`${Company.cName}/DailyIncomeExpanse/` + id).update(obj);
   }
   
 getByIdProductInfo(id):Observable<any>{
  return this.db.list(`${Company.cName}/DailyIncomeExpanse/` + id)
  .valueChanges()
  .pipe(catchError(err => of(null)));
 }

 
 getAllProductInfo() { 
  return this.db.list(`${Company.cName}/DailyIncomeExpanse`);
}

  deleteProductInfo(key: string) {
  return this.db.list(`${Company.cName}/DailyIncomeExpanse`).remove(key);
}
}
