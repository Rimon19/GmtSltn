import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../data/baseUrl';
import { ShipmentModeInfoes } from '../data/marchanzider-model/shipment-mode-infoes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentModeInfoesService {

  constructor(private http: HttpClient) { }
  getAllShipmentModeInfoes():Observable<ShipmentModeInfoes[]>{
    return this.http.get<ShipmentModeInfoes[]>(BaseURL.apiUrl+'/ShipmentModeInfoes/Index');
  }
  addShipmentModeInfoes(shipmentModeInfoes:ShipmentModeInfoes[]){
    return this.http.post<ShipmentModeInfoes>(BaseURL.apiUrl+'/ShipmentModeInfoes',shipmentModeInfoes);
  }
  updateShipmentModeInfoes(shipmentModeInfoes:ShipmentModeInfoes){
    return this.http.put(BaseURL.apiUrl+'/ShipmentModeInfoes/'+ shipmentModeInfoes.id,shipmentModeInfoes);
  }
  deleteShipmentModeInfoes(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ShipmentModeInfoes/'+id);
  }
}
