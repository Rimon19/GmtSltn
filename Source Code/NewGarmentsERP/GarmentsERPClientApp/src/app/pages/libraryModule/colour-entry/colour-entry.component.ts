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
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { TrimCosts } from './../../../@core/data/marchanzider-model/trim-costs';
import { FabricCostService } from './../../../@core/mock/marchandizer/fabric-cost.service';

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
    private  dropdownValueService:DropdownValueService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private colourEntryService:ColourEntryService,
     private testService:TestService,
     private utilityService:UtilityService,
     private fabricCostService:FabricCostService,
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
 this.getColourEntry();
this.fabricCostService.GetOnlyArrayList();
console.log(this.fabricCostService.items);

  }
 
 
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  AddNewInpurRow(){
    this.router.navigate(["/pages/add-colour-entry"]);
   
  }
  onDelete(element){
    this.delete(element.id);
  }
  getColourEntry(){
    this.subscription= this.colourEntryService.getColourEntry().subscribe(data=>{
    this.colourEntry=data; 
    this.dataSource=new MatTableDataSource(this.colourEntry);
    console.log('colourEntry',this.colourEntry);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-colour-entry/",element.id]);  
      }
      // getColorList(){
      //  console.log(this.dropdownValueService.colorList)
      // }

}
