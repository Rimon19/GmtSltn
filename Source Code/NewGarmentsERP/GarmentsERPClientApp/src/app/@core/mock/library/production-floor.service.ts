import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductionFloor } from '../../data/Library-Modul-model/production-floor';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductionFloorService {

  productionFloor:ProductionFloor;
  constructor(public http:HttpClient) { }
  getProductionFloor():Observable<ProductionFloor[]>{
    return this.http.get<ProductionFloor[]>(BaseURL.apiUrl+'/ProductionFloors');
  } 
  addProductionFloor(productionFloor:ProductionFloor){
    
    return this.http.post<ProductionFloor[]>(BaseURL.apiUrl+'/ProductionFloors',productionFloor);
  }
  updateProductionFloor(productionFloor:ProductionFloor){
    return this.http.put(BaseURL.apiUrl+'/ProductionFloors/'+productionFloor.id,productionFloor);
  }
  deleteProductionFloor(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ProductionFloors/'+id);
  }
}
