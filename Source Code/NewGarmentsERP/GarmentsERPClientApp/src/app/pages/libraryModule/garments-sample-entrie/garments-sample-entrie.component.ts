import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { GarmentsSampleEntrie } from '../../../@core/data/Library-Modul-model/garments-sample-entrie';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { GarmentsSampleEntrieService } from '../../../@core/mock/library/garments-sample-entrie.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-garments-sample-entrie',
  templateUrl: './garments-sample-entrie.component.html',
  styleUrls: ['./garments-sample-entrie.component.scss']
})
export class GarmentsSampleEntrieComponent implements OnInit {
  public sampleTypeList:any[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'sampleName',
    'sampleTypeId',
    'status',
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  garmentsSampleEntrie:GarmentsSampleEntrie[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private staticFeaturesService:StaticFeaturesService,
     private garmentsSampleEntrieService:GarmentsSampleEntrieService,) { }
    

  ngOnInit() {
 this.getGarmentsSampleEntrie();

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
    this.router.navigate(["/pages/add-garments-sample-entrie"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.garmentsSampleEntrieService.deleteGarmentsSampleEntrie(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getGarmentsSampleEntrie();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getGarmentsSampleEntrie(){
    this.subscription=   this.garmentsSampleEntrieService.getGarmentsSampleEntrie().subscribe(data=>{
    this.garmentsSampleEntrie=data;
    this.garmentsSampleEntrie.forEach(res=>{
    
      this.staticFeaturesService.getAllSampleType().
      subscribe(data=>{
      this.sampleTypeList=data;
      console.log('sampleTypeList list',this.sampleTypeList)
        let sampleName=this.sampleTypeList.find(data=>data.id==res.sampleTypeId).sampleTypeName;
       res.sampleTypeId=sampleName;
        
    });

        
    })
    this.dataSource=new MatTableDataSource(this.garmentsSampleEntrie);
    console.log('garmentsSampleEntrie',this.garmentsSampleEntrie);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-garments-sample-entrie/",element.id]);  
      }

}
