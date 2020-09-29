import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatapassingService {
// ---->
  //public sourceAddQuotationInquery = new BehaviorSubject<number>(0);
 // subjectAddQuotationInquery = this.sourceAddQuotationInquery.asObservable();
//<-----
  public sourceFabricationDetails = new BehaviorSubject<any>(0);
  subjectFabricationDetails = this.sourceFabricationDetails.asObservable();
  //<------
  public sourceItemsDetails = new BehaviorSubject<any>(0);
  subjectsourceItemsDetails = this.sourceItemsDetails.asObservable();
  
  public sendInfoPageToErpImages = new BehaviorSubject<any>(0);
  sendInfoPageToErpImagesObservable= this.sendInfoPageToErpImages.asObservable();

public recievePageInfoFromErpImages = new BehaviorSubject<any>(0);
recievePageInfoFromErpImagesObservable = this.recievePageInfoFromErpImages.asObservable();



//<<------------- 
public recieveOrderAutoId = new BehaviorSubject<any>(0);
orderAutoIdDetails = this.recieveOrderAutoId.asObservable();
  
  //passing clickevent 

  private subject = new Subject<any>();
sendClickEvent() {
  this.subject.next();
}
getClickEvent(): Observable<any>{ 
  return this.subject.asObservable();
}

private routerInfo: BehaviorSubject<any>;
private jobSelectionInfo: BehaviorSubject<any>;
private bookingNoSelectInfo:BehaviorSubject<any>;
private fabricDescriptionInfo: BehaviorSubject<any>;

  constructor() {
    this.routerInfo = new BehaviorSubject<any>(0);
    this.jobSelectionInfo = new BehaviorSubject<any>(0);
    this.bookingNoSelectInfo=new BehaviorSubject<any>(0);
    this.fabricDescriptionInfo = new BehaviorSubject<any>(0);

  }

 
  setValue(newValue): void {
 this.routerInfo.next(newValue)   ;
  }
  getValue(){
    return this.routerInfo.value;
  }
  setJobSelectionFormValue(newValue): void {
    this.jobSelectionInfo.next(newValue)   ;
     }
  getJobSelectionFormValue(){
    return this.jobSelectionInfo.asObservable();
  }

  setBookingNoSelectionFormValue(newValue): void {
    this.bookingNoSelectInfo.next(newValue);
     }
  getBookingNoSelectionFormValue(){
    return this.bookingNoSelectInfo.asObservable();
  }
  setfabricDescriptionValue(newValue): void {
    this.fabricDescriptionInfo.next(newValue)   ;
     }
  getfabricDescriptionValue(){
    return this.fabricDescriptionInfo.asObservable();
  }
}
