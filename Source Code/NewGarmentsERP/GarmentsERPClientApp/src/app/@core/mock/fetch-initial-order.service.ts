import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BaseURL } from '../data/baseUrl';
import { OrderInfo } from '../data/marchanzider-model/order-info.model';
import { company } from '../data/company';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { UpImage } from '../data/Library-Modul-model/up-image.model';
@Injectable({
  providedIn: 'root'
})
export class FetchInitialOrderService {
  task:AngularFireUploadTask;
  percentage:Observable<number>;
  snapshot:Observable<any>;
  downloadURL:string;

   imageList:any[]=[];

  constructor(private http:HttpClient) { }
   
  orderInfo:OrderInfo;
  upImage:UpImage;
   getInitialAllOrderList(): Observable<OrderInfo[]> {
     return this.http.get<OrderInfo[]>(BaseURL.apiUrl+ '/TblInitialOrders');
   }
   getInitialOrder(){
     return this.http.get<UpImage[]>(BaseURL.apiUrl+ '/TblInitialOrders');
   }

  getImageList(){
    this.http.get(BaseURL.apiUrl+ '/TblInitialOrders')
    .subscribe(result=> this.imageList =result as UpImage[]) 
  }
  

  addInitialAllOrderList(orderInfo:OrderInfo){

    console.log(orderInfo);
    return this.http.post<OrderInfo>(BaseURL.apiUrl+'/TblInitialOrders',orderInfo);
  }


  //save image with web api project
  saveOrderInitialImage(orderId,orderImageUrlFile){
    var formData=new FormData();
    formData.append('orderImageUrlFile',orderImageUrlFile)
  
    console.log(formData);
    return this.http.post<any>(BaseURL.apiUrl+`/TblInitialOrders/${orderId}`,formData);
  }

    

    
    
  updateInitialAllOrder(orderInfo:OrderInfo){
  
    return this.http.put(BaseURL.apiUrl+'/TblInitialOrders/'+orderInfo.orderAutoID,orderInfo);
  }
  deleteInitialAllOrder(id: number){
    return this.http.delete(BaseURL.apiUrl+'/TblInitialOrders/'+id);
  }
  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy:string){
    this._listners.next(filterBy);
  }

  // image save into cloud firestore 

  // startUpLoad(uploadImage){
    
  //   const path=`/OrderImage/${Date.now()}_${uploadImage.imageUrlFile.name}`;
  //   uploadImage.imageUrlName=`${Date.now()}_${uploadImage.name}`;
  //   const ref=this.storage.ref(path);
    
  //   this.task=this.storage.upload(path,uploadImage);
 

  //   this.percentage=this.task.percentageChanges();
 
   
  //   this.snapshot=this.task.snapshotChanges().pipe(
  //     finalize(async()=>{
  //       await ref.getDownloadURL().toPromise().then(t=>{
           
  //         uploadImage.imageUrl=t;
       
  //       });
  //     }),
  //   );
        
  //   this.snapshot.subscribe(d=>{})

  //   return uploadImage.imageUrl;
  // }

}
