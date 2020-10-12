import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { CountryLocationMapping } from '../../../@core/data/Library-Modul-model/country-location-mapping';
import { CountryInfo } from '../../../@core/data/country-info.model';
import { CountryService } from '../../../@core/mock/country.service';
import { DepoLocationMappingService } from '../../../@core/mock/library/depo-location-mapping.service';
import { CountryLocationMappingService } from '../../../@core/mock/library/country-location-mapping.service';
import { YarnRateService } from '../../../@core/mock/library/yarn-rate.service';
import { SupplierProfileService } from '../../../@core/mock/library/supplier-profile.service';
import { YarnCountsService } from '../../../@core/mock/marchandizer/yarn-counts.service';
import { CompositionEntryService } from '../../../@core/mock/library/composition-entry.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-yarn-rate',
  templateUrl: './yarn-rate.component.html',
  styleUrls: ['./yarn-rate.component.scss']
})
export class YarnRateComponent implements OnInit {

  countryLocationMapping:CountryLocationMapping[]
  public countryList:CountryInfo[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'supplierId','yarnCountId','compositionId','percentage','type','rateOrKg','effectiveDate'];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(public yarnRateService:YarnRateService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private supplierProfileService:SupplierProfileService,
     private yarnCountsService:YarnCountsService,
     private compositionEntryService:CompositionEntryService,
     private staticFeaturesService:StaticFeaturesService) { }

  ngOnInit() {
 this.refresList();

  }
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-yarn-rate"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/edit-yarn-rate/",element.id]);  
}

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.yarnRateService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.yarnRateService.getAll().subscribe(item=>{
     
      item.forEach(element => {

        this.supplierProfileService.getAllSupplier().subscribe(data=>{
          let supplierName=data.find(f=>f.id==element.supplierId).supplierName;
          element.supplierId=supplierName;
        });
        this.yarnCountsService.getAllYarnCount().subscribe(data=>{
          let yarnCountName=data.find(f=>f.id==element.yarnCountId).name;
          element.yarnCountId=yarnCountName;
        });
        this.compositionEntryService.getCompositionEntry().subscribe(data=>{
          let compositionName=data.find(f=>f.id==element.compositionId).compositionName;
          element.compositionId=compositionName;
        });

        this.staticFeaturesService.getAllType().subscribe(data=>{
           let typeName=data.find(f=>f.id==element.type) && data.find(f=>f.id==element.type).typeName 
           element.type=typeName;
        });
          
        });
     
      
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }


      
}
