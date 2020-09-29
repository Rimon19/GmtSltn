import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProductionFloor } from '../../../@core/data/Library-Modul-model/production-floor';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { ProductionFloorService } from '../../../@core/mock/library/production-floor.service';
import { NbToastrService } from '@nebular/theme';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { LocationService } from '../../../@core/mock/location.service';

@Component({
  selector: 'ngx-production-floor',
  templateUrl: './production-floor.component.html',
  styleUrls: ['./production-floor.component.scss']
})
export class ProductionFloorComponent implements OnInit {
  ProductionProcess:any=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
'id',
'location',
'floor',
'productionProcessId',
'status'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  productionFloor:ProductionFloor[]; 
  constructor(
     private mathdialogService: MatDialogService,
     private toastrService: NbToastrService,
     private router:Router,
     private staticFeaturesService:StaticFeaturesService,
     public productionFloorService:ProductionFloorService,
     private locationService:LocationService

     ) { }
    

  ngOnInit() {
 this.getProductionFloor();

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
    this.router.navigate(["/pages/add-production-floor"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.productionFloorService.deleteProductionFloor(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getProductionFloor();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getProductionFloor(){
    this.subscription=this.productionFloorService.getProductionFloor().subscribe(data=>{
    this.productionFloor=data;
    
    this.productionFloor.forEach(res=>{
    
    
        this.staticFeaturesService.getAllFloors().subscribe(item=>{ 
          let floorName =item.find(f=>f.id==res.floor) && item.find(f=>f.id==res.floor).floorName
          res.floor=floorName;
        })

        this.locationService.getAllLocations().subscribe(ele=>{
          let locationName=ele.find(f=>f.locationId==res.location) && ele.find(f=>f.locationId==res.location).location_Name;
          res.location=locationName;
        })
     
      this.staticFeaturesService.getAllProductionProcess().
      subscribe(data=>{

      
      this.ProductionProcess=data;
      console.log('ProductionProcess list',this.ProductionProcess)
       let ProductionProcessName=this.ProductionProcess.find(data=>data.id==res.productionProcessId).productionProcessName;
        res.productionProcessId=ProductionProcessName;
        
    });
  
  })


    this.dataSource=new MatTableDataSource(this.productionFloor);
    console.log('productionFloor',this.productionFloor);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-production-floor/",element.id]);  
      }

}
