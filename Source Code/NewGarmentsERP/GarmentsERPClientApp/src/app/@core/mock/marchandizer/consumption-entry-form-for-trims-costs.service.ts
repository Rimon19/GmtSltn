import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { BaseURL } from '../../data/baseUrl';
import { HTTPService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionEntryFormForTrimsCostsService extends HTTPService {

  constructor(httpClient: HttpClient,
    toastr: NbToastrService,
    private fb: FormBuilder,) {
    super(
      httpClient,
      BaseURL.apiUrl,
      'ConsumptionEntryFormForTrimsCosts',
      toastr
     );
     
    
  }

  
}
