import { Injectable } from '@angular/core';
import { CountryLocationMapping } from '../../data/Library-Modul-model/country-location-mapping';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CountryLocationMappingService {
  countryLocationMapping:CountryLocationMapping;
  constructor(public http:HttpClient) { }
  getCountryLocationMapping():Observable<CountryLocationMapping[]>{
    return this.http.get<CountryLocationMapping[]>(BaseURL.apiUrl+'/countryLocationMappings');
  } 
  addCountryLocationMapping(countryLocationMapping:CountryLocationMapping){
    console.log('service data',countryLocationMapping);
    return this.http.post<CountryLocationMapping>(BaseURL.apiUrl+'/countryLocationMappings',countryLocationMapping);
  }
  updateCountryLocationMapping(countryLocationMapping:CountryLocationMapping){
    return this.http.put(BaseURL.apiUrl+'/countryLocationMappings/'+countryLocationMapping.id,countryLocationMapping);
  }
  deleteCountryLocationMapping(id: number){
    return this.http.delete(BaseURL.apiUrl+'/countryLocationMappings/'+id);
  }
}
