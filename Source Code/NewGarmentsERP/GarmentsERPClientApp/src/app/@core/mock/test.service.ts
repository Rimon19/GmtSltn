import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { BaseURL } from '../data/baseUrl';
import { ColourEntry } from '../data/Library-Modul-model/colour-entry';
import { HTTPService } from './shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class TestService extends HTTPService {
  constructor(httpClient: HttpClient,
    toastr: NbToastrService) {
    super(
      httpClient,
      BaseURL.apiUrl,
      'ColourEntries',
      toastr
     ); 
  }
  extraMethod(){

  }
  
}
