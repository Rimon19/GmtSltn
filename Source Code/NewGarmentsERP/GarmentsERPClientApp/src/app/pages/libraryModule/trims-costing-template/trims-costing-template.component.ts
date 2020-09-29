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
import { TrimsCostingTemplateService } from '../../../@core/mock/library/trims-costing-template.service';
import { BuyerProfile } from '../../../@core/data/Library-Modul-model/buyer-profile';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';
import { TrimsGroup } from '../../../@core/data/Library-Modul-model/trims-groups';
import { TrimsGroupService } from '../../../@core/mock/library/trims-group.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { SupplierProfile } from '../../../@core/data/Library-Modul-model/supplier-profile';
import { SupplierProfileService } from '../../../@core/mock/library/supplier-profile.service';
import { EMLINK } from 'constants';

@Component({
  selector: 'ngx-trims-costing-template',
  templateUrl: './trims-costing-template.component.html',
  styleUrls: ['./trims-costing-template.component.scss']
})
export class TrimsCostingTemplateComponent implements OnInit {

  countryLocationMapping:CountryLocationMapping[]
  public buyerList:BuyerProfile[]=[];
  public trimsGroupList:TrimsGroup[]=[];
  public supplierList:SupplierProfile[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'buyerId','userCode','trimsGroupId','itemDesc','consUom','brandOrSupRef','consOrDznGmts','purchaseRate','amount','approvalRequired','supplierId','status'];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private trimsCostingTemplateService:TrimsCostingTemplateService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private countryService:CountryService,
     private router:Router,
     private countryLocationMappingService:CountryLocationMappingService,
     private buyerProfileService:BuyerProfileService,
     private trimsGroupService:TrimsGroupService,
     private supplierProfileService:SupplierProfileService
    ) { }

  ngOnInit() {
 this.refresList();

  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-trims-costing-template"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/edit-trims-costing-template/",element.id]);  
}

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.trimsCostingTemplateService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.trimsCostingTemplateService.getAll().subscribe(item=>{
     
      item.forEach(element => {

            this.buyerProfileService.getAll().
            subscribe(data=>{
            this.buyerList=data;
            let buyerName= this.buyerList.find(f=>f.id==element.buyerId) && this.buyerList.find(f=>f.id==element.buyerId).contactName;
            element.buyerId=buyerName;
              });  
          
          this.trimsGroupService.getAll().subscribe(data=>{
            this.trimsGroupList=data;
            let trimsGroupName= this.trimsGroupList.find(f=>f.id==element.trimsGroupId) && this.trimsGroupList.find(f=>f.id==element.trimsGroupId).trimsGroupName;
            element.trimsGroupId=trimsGroupName;
          });
          
         this.supplierProfileService.getAll().subscribe(data=>{
           this.supplierList=data;
           let supplierName= this.supplierList.find(f=>f.id==element.supplierId) && this.supplierList.find(f=>f.id==element.supplierId).supplierName;
           element.supplierId=supplierName;
         })

        });
     
      
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }


      

}
