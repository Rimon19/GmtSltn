import { Component, OnInit } from '@angular/core'; 
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';  



@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html'
})



export class ImageUploadComponent {
  public progress: number;
  public message: string;
  public url: any;


  constructor(public http: HttpClient) { }

  upload(files, event: any) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files) 
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST','/api/OrderImageUploadTbls/upload',formData, {
        reportProgress: true,
      });
           
      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response)
        { }
        
      });
  
    this.readUrl(event);
    alert("upload has been successfully !! ");
   
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


}
