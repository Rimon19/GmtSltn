import { Injectable } from '@angular/core';
import { LabTestRateChart } from '../../data/Library-Modul-model/lab-test-rate-chart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class LabTestRateChartService {

  labTestRateChart:LabTestRateChart;
  constructor(public http:HttpClient) { }
  getLabTestRateChart():Observable<LabTestRateChart[]>{
    return this.http.get<LabTestRateChart[]>(BaseURL.apiUrl+'/LabTestRateCharts');
  } 
  addLabTestRateChart(labTestRateChart:LabTestRateChart){

    return this.http.post<LabTestRateChart[]>(BaseURL.apiUrl+'/LabTestRateCharts',labTestRateChart);
  }
  updateLabTestRateChart(labTestRateChart:LabTestRateChart){
    return this.http.put(BaseURL.apiUrl+'/LabTestRateCharts/'+labTestRateChart.id,labTestRateChart);
  }
  deleteLabTestRateChart(id: number){
    return this.http.delete(BaseURL.apiUrl+'/LabTestRateCharts/'+id);
  }
}
