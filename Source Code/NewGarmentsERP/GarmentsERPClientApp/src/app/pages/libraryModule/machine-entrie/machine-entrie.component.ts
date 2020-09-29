import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { MachineEntrie } from '../../../@core/data/Library-Modul-model/machine-entrie';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { MachineEntrieService } from '../../../@core/mock/library/machine-entrie.service';
import { CompanyService } from '../../../@core/mock/company.service';
import { LocationService } from '../../../@core/mock/location.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-machine-entrie',
  templateUrl: './machine-entrie.component.html',
  styleUrls: ['./machine-entrie.component.scss']
})
export class MachineEntrieComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
'id',
'location',
'floorNo',
'machineNo',
'category',
'group',
'diaWidth',
'gauge',
'sequenceNo'   
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  machineEntrie:MachineEntrie[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     public machineEntrieService:MachineEntrieService,
     private companyServicec:CompanyService,
     private locationService:LocationService,
     private staticFeaturesService:StaticFeaturesService
     ) { }
    

  ngOnInit() {
 this.getMachineEntrie();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-machine-entrie"]);
   
  }
    delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.machineEntrieService.deleteMachineEntrie(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getMachineEntrie();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
    }
  getMachineEntrie(){
    this.subscription=this.machineEntrieService.getAllMachineEntrie().subscribe(data=>{
      data.forEach(element => {

        this.staticFeaturesService.getAllFloors().subscribe(item=>{
          let floorName=item.find(f=>f.id=element.floorNo)&&item.find(f=>f.id=element.floorNo).floorName;
          element.floorNo=floorName;
        })

        this.locationService.getAllLocations().subscribe(items=>{
          let locationName= items.find(f=>f.locationId=element.location)&&items.find(f=>f.locationId=element.location).location_Name;
          element.location=locationName;
        })
        
      });


    this.machineEntrie=data;

  
    this.dataSource=new MatTableDataSource(this.machineEntrie);
    console.log('MachineEntrie',this.machineEntrie);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-machine-entrie/",element.id]);  
      }

}
