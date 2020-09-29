import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbToastrConfig, NbToastrContainerRegistry, NbToastrService } from '@nebular/theme';
import { ToasterService } from 'angular2-toaster';
import { realpathSync } from 'fs';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tostr } from '../../data/tostr.model';

@Injectable({
  providedIn: 'root'
})
export class HTTPService   {
  public items: BehaviorSubject<any[]>;
  Tostr=new Tostr()
  
  //Tostr=new Tostr();
  constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string,
    private toastr: NbToastrService
   ) {
   
    this.items = new BehaviorSubject<any[]>([]);
    
    
   }

  public create(item: any) {
     this.httpClient
      .post<any>(`${this.url}/${this.endpoint}`, item).subscribe(res=>{  
        if(res){
          this.items.next(res);
          //this.toastr.success('Saved Succesfully');
          this.Tostr.showToast('success',"", "Saved Succesfully !", "",this.toastr);
        }       
      },(err) => { this.toastr.danger("danger","", err.statusText);});
  }

  public update(item: any,id) {
    this.httpClient
     .put<any>(`${this.url}/${this.endpoint}/${id}`,
       item).subscribe(res=>{  
         if(res){
           this.items.next(res);
          // this.toastr.success('Update Succesfully');
           this.Tostr.showToast('success',"", "Update Succesfully !", "",this.toastr);
         }       
       },(err) => { this.toastr.danger("danger","", err.statusText);});
 }
  public createMultiline(item: any) {
    this.httpClient
     .post<any>(`${this.url}/${this.endpoint}`, item).subscribe(res=>{  
     },(err) => { this.toastr.danger("danger","", err.statusText);});
 }
  

  public updateMultiline(item: any,id) {
    this.httpClient
     .put<any>(`${this.url}/${this.endpoint}/${id}`,
       item).subscribe(res=>{  
       },(err) => { this.toastr.danger("danger","", err.statusText);});
 }

  public addOrUpdateMultilines(items: any[],id) {
    items.forEach(element => {
      
      if (element.id != 0) {
        this.httpClient
        .put<any>(`${this.url}/${this.endpoint}/${id}`,
        element).subscribe(res=>{     
          },(err) => { this.toastr.danger("danger","", err.statusText);});
      }
      if (element.id == 0) {
        this.httpClient
        .post<any>(`${this.url}/${this.endpoint}`,
        element).subscribe(res=>{     
          },(err) => { this.toastr.danger("danger","", err.statusText);});
      }

      this.toastr.success('Saved Succesfully');
    });
   
 }

  getById(id: number) {
     this.httpClient
      .get<any>(`${this.url}/${this.endpoint}/${id}`).subscribe(res=>{  
        if(res){
          this.items.next(res);
          let tempX = Object.assign([], res);

        }       
      },(err) => { this.toastr.danger("danger","", err.statusText);});
      
  }

getAll2() {
  
  return this.httpClient
      .get<any>(`${this.url}/${this.endpoint}`).subscribe(res=>{  
        if(res){
          console.log
          this.items.next(res);
          let tempX = Object.assign([], res);
          this.items=tempX;
        }       
      },(err) => { this.toastr.danger("danger","", err.statusText);});
  }
 getAll() {
  
  return this.httpClient
      .get<any>(`${this.url}/${this.endpoint}`);
  }

  delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`).subscribe(res=>{  
        if(res){
        
          this.toastr.success('Delete Succesfull !');
        }       
      },(err) => { this.toastr.danger("danger","", err.statusText);});;
  }

  deleteWithOutSubcribe(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }

 removeItem(items: any[], id: number) {
    items.forEach((item, i) => {
        if (item.id !== id) return;
        items.splice(i, 1);
    });
}



//for display page


createFilter() {
  let filterFunction = function (data: any, filter: string): boolean {
    let searchTerms = JSON.parse(filter);
    let isFilterSet = false;
    for (const col in searchTerms) {
      if (searchTerms[col].toString() !== '') {
        isFilterSet = true;
      } else {
        delete searchTerms[col];
      }
    }

    let nameSearch = () => {
      let found = false;
      if (isFilterSet) {
        for (const col in searchTerms) {
          searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
            if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
              found = true
            }
          });
        }
        return found
      } else {
        return true;
      }
    }
    return nameSearch()
  }
  return filterFunction
}





//apply mixins






}
 


  