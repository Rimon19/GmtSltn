import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateResizeService {
      //for passing data one component to another use belows property which is built in feture comes from rxjs and reuse this service
  public source = new BehaviorSubject<number>(0);
  subject = this.source.asObservable();

  public sourceConsumptionObj = new BehaviorSubject<any>(0);
  subjectConsumptionObj = this.sourceConsumptionObj.asObservable();

  public preCostingSource = new BehaviorSubject<any>(0);
  preCostingSubject = this.preCostingSource.asObservable();

  public preCostingSourceObj = new BehaviorSubject<any>(0);
  preCostingSubjectObj = this.preCostingSourceObj.asObservable();

  public source1 = new BehaviorSubject<number>(0);
  subject1 = this.source1.asObservable();

  public setFabricDesSourceObj= new BehaviorSubject<any>(0);
  getFabricDesObj= this.setFabricDesSourceObj.asObservable();

  constructor() { }
  dateResize(formDateValue){
    let EntryDate="";
    if(formDateValue==""){
      EntryDate="";

    }else{
      var month;
      var day;
       var dateObj = new Date(formDateValue);
       var dObj=dateObj.toLocaleDateString().split('/');
        month=parseInt(dObj[0]);
        day=parseInt(dObj[1]);
            if(month<10){
              month='0'+month;
            }
            if(day<10){
              day='0'+day;
            }
  
     EntryDate =month + '/'+day+'/'+ dObj[2];

    }
   
  
    return EntryDate;
  }
}
