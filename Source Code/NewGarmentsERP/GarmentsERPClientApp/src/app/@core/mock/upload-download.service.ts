import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadDownloadService {

  private baseApiUrl: string;
  private apiDownloadUrl: string;
  private apiUploadUrl: string;
  private apiFileUrl: string;
 
  constructor(private httpClient: HttpClient) {
    this.baseApiUrl = 'http://localhost:4200/api/TblInitialOrders/';
    this.apiDownloadUrl = this.baseApiUrl + 'download';
    this.apiUploadUrl = this.baseApiUrl + 'upload';
    this.apiFileUrl = this.baseApiUrl + 'files';
  }
  public downloadFile(file: string): Observable<HttpEvent<Blob>> {
    return this.httpClient.request(new HttpRequest(
      'GET',
      `${this.apiDownloadUrl}?file=${file}`,
      null,
      {
        reportProgress: true, 
        responseType: 'blob'
      }));
  }
  public uploadFile(file: Blob): Observable<HttpEvent<void>> {
    const formData = new FormData();
    formData.append('file', file);
 
    return this.httpClient.request(new HttpRequest(
      'POST',
      this.apiUploadUrl,
      formData,
      {
        reportProgress: true
      }));
  }
  public getFiles(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiFileUrl);
  }
}
