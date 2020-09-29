import { Component, OnInit } from '@angular/core'; 
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';  
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html'
})



export class ImageUploadComponent {
  public progress: number;
  public message: string;
  public url: any;
  public productImageList: ProductImage[];


  constructor(public http: HttpClient) {
    this.url = "";
    this.getProductImage(1);
    //this.url = "/Upload/1_20181110_131911.jpg";
  }

  upload(files, event: any) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files) 
      formData.append(file.name, file);

      const uploadReq = new HttpRequest('POST', '/api/ProductImages/upload', formData, {
        reportProgress: true,
      });
           
      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response)
        { }
         
      });
  
    
    this.readUrl(event);
    //alert("upload has been successfully !! ");
   
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  getProductImage(prdID) {
    this.http.get<ProductImage>('/api/ProductImages/' + prdID).subscribe(result => {
      this.url = result[0].imagePath;
    }, error => console.error(error));
  }
  //fileToUpload: File = null;
  //  httpClient: any;

  //handleFileInput(files: FileList) {
  //  this.fileToUpload = files.item(0);
  //}

  //uploadFileToActivity() {
  //  this.postFile(this.fileToUpload).subscribe(data => {
  //    // do something, if upload success
  //  }, error => {
  //    console.log(error);
  //  });
  //}


  //postFile(fileToUpload: File): Observable<boolean> {
  //  const endpoint = 'your-destination-url';
  //  const formData: FormData = new FormData();
  //  formData.append('fileKey', fileToUpload, fileToUpload.name);
  //  return this.httpClient
  //    .post(endpoint, formData, { headers: yourHeadersConfig })
  //    .map(() => { return true; })
  //    .catch((e) => this.handleError(e));
  //}
 
}
export interface ProductImage {
  fileUploadId: number;
  fileName: string;
  fileSize: string;
  imagePath: string;
  productId: string;
}
