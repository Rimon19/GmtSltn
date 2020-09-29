import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Company } from '../../data/marchanzider-model/assignCompanyName';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailsService {
 
  constructor(private db: AngularFireDatabase) { }

 
  addProductInfo(obj) {
    console.log('test1',obj)
    return  this.db.list(`${Company.cName}/InvoiceDetails/`).push(obj);
   }

   updateProductInfo(id, obj) {
    return this.db.object(`${Company.cName}/InvoiceDetails/` + id).update(obj);
   }
   
 getByIdProductInfo(id):Observable<any>{
  return this.db.list(`${Company.cName}/InvoiceDetails/` + id)
  .valueChanges()
  .pipe(catchError(err => of(null)));
 }

 
 getAllProductInfo() { 
  return this.db.list(`${Company.cName}/InvoiceDetails`);
}

  deleteProductInfo(key: string) {
  return this.db.list(`${Company.cName}/InvoiceDetails`).remove(key);
}






}
