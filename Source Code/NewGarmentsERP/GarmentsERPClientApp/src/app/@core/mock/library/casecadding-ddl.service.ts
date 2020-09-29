import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { CountryVM } from '../../data/Library-Modul-model/country-vm.model';
import { StateVM } from '../../data/Library-Modul-model/state-vm.model';

@Injectable({
  providedIn: 'root'
})
export class CasecaddingDDLService {

  constructor(private http:HttpClient) { }
  CountryDDL(): Observable<CountryVM[]>  
  {  
    return this.http.get<CountryVM[]>(BaseURL.apiUrl+ '/Utility/CountryData');  
  }  
  StateDDL(CountryId: string): Observable<StateVM[]>  
  {  debugger;  
    return this.http.get<StateVM[]>(BaseURL.apiUrl+ '/Utility/StateData?CountryId='+CountryId);  
  }  

  StatesDDL(): Observable<StateVM[]>  
  {    
    return this.http.get<StateVM[]>(BaseURL.apiUrl+ '/Utility/StatesData');  
  } 
}
 