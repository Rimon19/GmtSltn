import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { ColourEntry } from '../../../@core/data/Library-Modul-model/colour-entry';
import { ColourEntryService } from '../../../@core/mock/library/colour-entry.service';
import { TestService } from '../../../@core/mock/test.service';
import { UtilityService } from '../../../@core/mock/shared/utility.service';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../../@core/data/baseUrl';
import { HTTPService } from '../../../@core/mock/shared/http.service';

@Component({
  selector: 'ngx-colour-entry',
  templateUrl: './colour-entry.component.html',
  styleUrls: ['./colour-entry.component.scss']
})
export class ColourEntryComponent  extends HTTPService implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'colorName',
    'status',
  ];
  color:ColourEntry;
  Tostr=new Tostr();
  subscription:Subscription;
  colourEntry:ColourEntry[]; 
  constructor(
    private  toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private colourEntryService:ColourEntryService,
     private testService:TestService,
     private utilityService:UtilityService,
     httpClient: HttpClient,
      toastr: NbToastrService) {
      super(
        httpClient,
        BaseURL.apiUrl,
        'ColourEntries',
        toastr
       ); 
      }

  ngOnInit() {
this.getAll();
 //console.log(this.items.getValue());
 //console.log(this.colourEntryService.getList());
 //console.log(this.items.complete());
 this.getColourEntry();
 
 

  }

  //  test(){
  //    let data:any=[];
  //    this.getValue().subscribe(d=>{
  //      data=d;
  //    })
  //    console.log(data);
  //  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  AddNewInpurRow(){
    this.router.navigate(["/pages/add-colour-entry"]);
   
  }
  onDelete(element){
    console.log(element);
    this.delete(element.id);
    // this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
    //            .afterClosed().subscribe(res=>{
    //             if(res){
    //               this.colourEntryService.deleteColourEntry(element.id).subscribe(res=>{
                    
    //                 this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
    //                 this.getColourEntry();
    //               },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
    //             }
    //            })
  }
  getColourEntry(){
    this.subscription=   this.colourEntryService.getColourEntry().subscribe(data=>{
    this.colourEntry=data; 
  
    this.dataSource=new MatTableDataSource(this.colourEntry);
    console.log('colourEntry',this.colourEntry);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-colour-entry/",element.id]);  
      }


}
