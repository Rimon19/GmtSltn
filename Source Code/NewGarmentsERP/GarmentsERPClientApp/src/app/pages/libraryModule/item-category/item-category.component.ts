import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { YarnBrandInfoService } from '../../../@core/mock/library/yarn-brand-info.service';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { YarnCountsService } from '../../../@core/mock/marchandizer/yarn-counts.service';
import { YarnBrandInfo } from '../../../@core/data/Library-Modul-model/yarn-brand-info';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { ItemCategoryService } from '../../../@core/mock/library/item-category.service';
import { ItemCategory } from '../../../@core/data/Library-Modul-model/item-category';

@Component({
  selector: 'ngx-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'itemCategoryName','status'];
  yarnCountInfo:any[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  itemCategory: ItemCategory[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private itemCategoryService:ItemCategoryService,) { }
    

  ngOnInit() {
 this.getItemCategoryInfoDetails();

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
    this.router.navigate(["/pages/add-item-category"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.itemCategoryService.deleteItemCategory(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getItemCategoryInfoDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getItemCategoryInfoDetails(){
    this.subscription=   this.itemCategoryService.getItemCategory().subscribe(data=>{
    this.itemCategory=data;
    
    this.dataSource=new MatTableDataSource(this.itemCategory);
    console.log('po details',this.itemCategory);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-item-category/",element.id]);  
      }
  
}
