import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { GarmentsItemEntries } from '../../../@core/data/Library-Modul-model/garments-item-entries';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { GarmentsItemEntriesService } from '../../../@core/mock/library/garments-item-entries.service';

@Component({
  selector: 'ngx-garments-item-entries',
  templateUrl: './garments-item-entries.component.html',
  styleUrls: ['./garments-item-entries.component.scss']
})
export class GarmentsItemEntriesComponent implements OnInit {

  public sampleTypeList:any[]=[];
  public ProductTypeList:any[]=[];
  public ProductCategoryList:any[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'itemName',
    'commercialName',
    'productCategoryId',
    'productTypeId',
    'standardSMV',
    'efficiency',
    'status'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  garmentsItemEntries:GarmentsItemEntries[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private staticFeaturesService:StaticFeaturesService,
     private garmentsItemEntriesService:GarmentsItemEntriesService,) { }
    

  ngOnInit() {
 this.getGarmentsItemEntries();

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
    this.router.navigate(["/pages/add-garments-item-entries"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.garmentsItemEntriesService.deleteGarmentsItemEntries(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getGarmentsItemEntries();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getGarmentsItemEntries(){
    this.subscription=   this.garmentsItemEntriesService.getGarmentsItemEntries().subscribe(data=>{
    this.garmentsItemEntries=data;  
    this.garmentsItemEntries.forEach(res=>{
    
      this.staticFeaturesService.getAllProductType().
      subscribe(data=>{
      this.ProductTypeList=data;
      console.log('ProductTypeList list',this.ProductTypeList)
        let ProductTypeName=this.ProductTypeList.find(data=>data.id==res.productTypeId).productTypeName;
       res.productTypeId=ProductTypeName;
        
    });

        
    })
    this.garmentsItemEntries.forEach(res=>{
    
      this.staticFeaturesService.getAllProductCategory().
      subscribe(data=>{
      this.ProductCategoryList=data;
      console.log('ProductCategoryList list',this.ProductCategoryList)
        let ProductCategoryName=this.ProductCategoryList.find(data=>data.id==res.productCategoryId).productCategoryName;
       res.productCategoryId=ProductCategoryName;
        
    });

        
    })
    this.dataSource=new MatTableDataSource(this.garmentsItemEntries);
    console.log('garmentsSampleEntrie',this.garmentsItemEntries);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-garments-item-entries/",element.id]);  
      }


}
