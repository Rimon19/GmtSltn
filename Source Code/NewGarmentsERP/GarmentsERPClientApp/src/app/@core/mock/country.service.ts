import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryInfo } from '../data/country-info.model';
import { BaseURL } from '../data/baseUrl';
import { HttpClient } from '@angular/common/http';
import { location } from '../data/location';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
   
public countryInfo:any;
  constructor(private http: HttpClient) { }
  getAllCountry():Observable<CountryInfo[]>{
    return this.http.get<CountryInfo[]>(BaseURL.apiUrl+'/RegionInfoes/Index');
  }
  addCountry(country:CountryInfo){
    return this.http.post<CountryInfo>(BaseURL.apiUrl+'/RegionInfoes',country);
  }
  updateCountry(country:CountryInfo){
    return this.http.put(BaseURL.apiUrl+'/RegionInfoes/'+country.regionID,country);
  }
  deleteCountry(id: number){
    return this.http.delete(BaseURL.apiUrl+'/RegionInfoes/'+id);
  }
}
