import { Injectable, OnInit } from '@angular/core';
import { MasterPodetailsInfroesService } from '../master-podetails-infroes.service';
import { InputPannelPodetailsService } from '../input-pannel-podetails.service';
import { SizeWisePannelPodetailsService } from '../size-wise-pannel-podetails.service';
import { OrderInfo } from '../../../data/marchanzider-model/order-info.model';
import { MasterPodetailsInfroes } from '../../../data/marchanzider-model/master-podetails-infroes.model';
import { InputPannelPodetails } from '../../../data/marchanzider-model/input-pannel-podetails.model';
import { SizeWisePannelPodetails } from '../../../data/marchanzider-model/size-wise-pannel-podetails.model';
import { FetchInitialOrderService } from '../../fetch-initial-order.service';
import { JobOrOrderNoSelectionForm } from '../../../data/marchanzider-model/ViewModel/job-or-order-no-selectionform';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../../data/baseUrl';
import { EmbellishmentWOV2SelectionFrom } from '../../../data/marchanzider-model/ViewModel/embellishment-wov2-selection-from.model';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  jobOrOrderNoSelectionFormList:JobOrOrderNoSelectionForm[]=[];
  embellishmentWOV2SelectionFromList:EmbellishmentWOV2SelectionFrom[]=[];

  constructor(public http:HttpClient ) {
   }

  getOrderOrJobSelectionFromView():Observable<JobOrOrderNoSelectionForm[]>{
    return this.http.get<JobOrOrderNoSelectionForm[]>(BaseURL.apiUrl+'/MerchandisingTableViews/JobOrOrderSelectionViews');
  }

  getEmbellishmentWOV2Views():Observable<EmbellishmentWOV2SelectionFrom[]>{
    return this.http.get<EmbellishmentWOV2SelectionFrom[]>(BaseURL.apiUrl+'/MerchandisingTableViews/EmbellishmentWOV2Views');
  }
}
