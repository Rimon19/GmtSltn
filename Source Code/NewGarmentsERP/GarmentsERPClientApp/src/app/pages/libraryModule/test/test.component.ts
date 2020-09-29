import { Component, OnInit } from '@angular/core';
import { FetchInitialOrderService } from '../../../@core/mock/fetch-initial-order.service';
import { Tostr } from '../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngx-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit  { 

  public BuyerID: string;
  show: boolean = false;
  selectedFilesForImage:FileList;
  orderImageUrlFile:File;
  output_image;
  url: string;
  base64Image:string;
  Tostr=new Tostr();
  imageSource;
    constructor( public fetchInitialOrderService:FetchInitialOrderService,
      private toastrService:NbToastrService,
     private sanitizer: DomSanitizer){
       
 
  //  this.fetchInitialOrderService.getInitialOrder().subscribe((data : any)=>{
    //console.log(data.target.files);
    //let objectURL = 'data:image/jpeg;base64,' + data.image;
   // base64Image='data:image/png;base64,';
  //  let v= this.sanitizer.bypassSecurityTrustUrl(objectURL)
   //let v=  this.sanitizer.bypassSecurityTrustResourceUrl(data.toString());
    // console.log(v);
  //  });

    }
ngOnInit(){
  // this.fetchInitialOrderService.getInitialOrder().subscribe((data : any)=>{
  
    // this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${data}`);
    
  // });
 // console.log(this.base64Image); 
 this.fetchInitialOrderService.getImageList();
 

  

}
  Clicked() {
    this.show = true;
    this.url = "http://localhost:4186/api/Report/ShowReport/"+this.BuyerID;
  }

  detectFilesForImageUrlFile(event) {
    this.selectedFilesForImage = event.target.files;
    this.orderImageUrlFile = this.selectedFilesForImage.item(0);
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.output_image = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  onSubmit(){

   if(this.orderImageUrlFile==undefined||this.orderImageUrlFile==null){
    this.Tostr.showToast('danger','', 'Please Select a Photo !', '',this.toastrService);
     return;
   }
 //  form.value.orderImageUrlFile= this.fetchInitialOrderService.startUpLoad(this.orderImageUrlFile);

  this.fetchInitialOrderService.saveOrderInitialImage(1,this.orderImageUrlFile).subscribe(s=>{
    console.log(s);
    this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  });

 }


 transform(){
  
  
    this.base64Image=`data:image/png;base64, `
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.base64Image);
   
  
}


}
