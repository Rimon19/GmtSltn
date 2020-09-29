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
import { ItemAccountCreationService } from '../../../@core/mock/library/item-account-creation.service';
import { ItemCategoryService } from '../../../@core/mock/library/item-category.service';
import { ItemCategory } from '../../../@core/data/Library-Modul-model/item-category';
import { ItemGroupService } from '../../../@core/mock/library/item-group.service';
import { ItemGroup } from '../../../@core/data/Library-Modul-model/ItemGroup';

@Component({
  selector: 'ngx-item-account-creation',
  templateUrl: './item-account-creation.component.html',
  styleUrls: ['./item-account-creation.component.scss']
})
export class ItemAccountCreationComponent implements OnInit {

  countryLocationMapping:CountryLocationMapping[]
  public itemCategoryList:ItemCategory[]=[];
  public itemGroupList:ItemGroup[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'itemAccount','itemCategoryId','itemGroupId','subGroupName','itemDescription','itemSize','consUom','status'];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private itemCategoryService:ItemCategoryService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private countryService:CountryService,
     private router:Router,
     private itemAccountCreationService:ItemAccountCreationService,
     private itemGroupService:ItemGroupService) { }

  ngOnInit() {
 this.refresList();

  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-item-account-creation"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/edit-item-account-creation/",element.id]);  
}

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.itemAccountCreationService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.itemAccountCreationService.getAll().subscribe(item=>{
     
      item.forEach(element => {

        this.itemCategoryService.getItemCategory().
        subscribe(data=>{
        this.itemCategoryList=data;
        let itemCategoryName=this.itemCategoryList.find(f=>f.id==element.itemCategoryId).itemCategoryName;
        element.itemCategoryId=itemCategoryName;
          });  


       this.itemGroupService.getAll().subscribe(data=>{
         this.itemGroupList=data;
         let itemGroupName=this.itemGroupList.find(f=>f.id==element.itemGroupId).itemGroupName;
         element.itemGroupId=itemGroupName;
       })

        });
     
      
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  } 

}
