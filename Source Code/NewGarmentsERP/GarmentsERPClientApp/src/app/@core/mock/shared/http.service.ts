import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NbToastrConfig, NbToastrContainerRegistry, NbToastrService } from '@nebular/theme';
import { ToasterService } from 'angular2-toaster';
import { realpathSync } from 'fs';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApprovedBy } from '../../data/Shared/approved-by';
import { EntryBy } from '../../data/Shared/entry-by';
import { Tostr } from '../../data/tostr.model';
import { DateResizeService } from '../marchandizer/date-resize.service';

@Injectable({
  providedIn: 'root'
})
export class HTTPService   {
 // public items: BehaviorSubject<any[]>;
  Tostr=new Tostr()
  public items:any[]=[];



  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();

  filterValues:any={};
  
  subscription:Subscription;

  constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string,
    private toastr: NbToastrService,
    //private dateResizeService:DateResizeService
   ) {
   
   // this.items = new BehaviorSubject<any[]>([]);
    
    // this.getAllAll.subscribe(s=>{
    //   console.log('Life is not bed of roses');
    // });

   }

  public create(item: any) {

   // item.entryBy=EntryBy.userName;
   // item.status='Active';
    //item.entryDate=this.dateResizeService.dateResize(new Date);
    //item.approvedDate=this.dateResizeService.dateResize(new Date);
    //item.modifyiedDate=this.dateResizeService.dateResize(new Date);
    item.approvedBy=ApprovedBy.userName;
    //item.isApproved=true;
    item.isModifyied=false;

    this.subscription= this.httpClient
      .post<any>(`${this.url}/${this.endpoint}`, item).subscribe(res=>{  
        if(res){
         // this.items.next(res);
          //this.toastr.success('Saved Succesfully');
          this.Tostr.showToast('success',"", "Saved Succesfully !", "",this.toastr);
        }       
      },(err) => { this.toastr.danger("danger","", err.statusText);});
  }

  public update(item: any,id) {

   // item.entryBy=EntryBy.userName;
   // item.status='Active';
    //item.entryDate=this.dateResizeService.dateResize(new Date);
    //item.approvedDate=this.dateResizeService.dateResize(new Date);
   // item.approvedBy=ApprovedBy.userName;
   // item.isApproved=true;
   //item.modifyiedDate=this.dateResizeService.dateResize(new Date);
   // item.isModifyied=true;

   this.subscription= this.httpClient
     .put<any>(`${this.url}/${this.endpoint}/${id}`,
       item).subscribe(res=>{  
         if(res){
          // this.items.next(res);
          // this.toastr.success('Update Succesfully');
           this.Tostr.showToast('success',"", "Update Succesfully !", "",this.toastr);
         }       
       },(err) => { this.toastr.danger("danger","", err.statusText);});
 }
  public createMultiline(item: any) {
    this.subscription= this.httpClient
     .post<any>(`${this.url}/${this.endpoint}`, item).subscribe(res=>{  
     },(err) => { this.toastr.danger("danger","", err.statusText);});
 }
  

  public updateMultiline(item: any,id) {
    this.subscription= this.httpClient
     .put<any>(`${this.url}/${this.endpoint}/${id}`,
       item).subscribe(res=>{  
       },(err) => { this.toastr.danger("danger","", err.statusText);});
 }

  public addOrUpdateMultilines(items: any[]) {
    items.forEach(element => {
      
      if (element.id != 0) {
        this.subscription= this.httpClient
        .put<any>(`${this.url}/${this.endpoint}/${element.id}`,
        element).subscribe(res=>{     
          },(err) => { this.toastr.danger("danger","", err.statusText);});
      }
      if (element.id == 0) {
        this.subscription=this.httpClient
        .post<any>(`${this.url}/${this.endpoint}`,
        element).subscribe(res=>{     
          },(err) => { this.toastr.danger("danger","", err.statusText);});
      }

      this.toastr.success('Saved Succesfully');
    });
   
 }

  getById(id: number) {
    this.subscription= this.httpClient
      .get<any>(`${this.url}/${this.endpoint}/${id}`).subscribe(res=>{  
        if(res){
          //this.items.next(res);
         
          let test=[...res];      
          this.items.push(...test);  
        //  let tempX = Object.assign([], res);

        }       
      },(err) => { this.toastr.danger("danger","", err.statusText);});
      
  }

getDataSource():Observable<any> {
  
 this.subscription=this.httpClient
      .get<any>(`${this.url}/${this.endpoint}`).subscribe(res=>{  
        if(res){
            
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      let test=[...res];      
      this.items.push(...test);  

        }       
      },(err) => { this.toastr.danger("danger","", err.statusText);});

      return ;
    }

GetOnlyArrayList():Observable<any> {
  
this.subscription=this.httpClient
           .get<any>(`${this.url}/${this.endpoint}`).subscribe(res=>{  
             if(res){
           let test=[...res];      
           this.items.push(...test);  
           console.log(this.items)
             }       
           },(err) => { this.toastr.danger("danger","", err.statusText);});
     
           return ;
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

applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  filterChange(filter, event) {
    //let filterValues = {}
    this.dataSource.filterPredicate = this.createFilter(); 
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }
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
            if (data[col].toString().toLowerCase().indexOf(word)
 != -1 && isFilterSet) {
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
 