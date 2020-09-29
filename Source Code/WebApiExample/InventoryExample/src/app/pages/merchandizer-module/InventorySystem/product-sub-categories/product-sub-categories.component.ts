import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ProductSubCategories } from '../../../../@core/data/marchanzider-model/product-sub-categories';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { ProductSubCategoriesService } from '../../../../@core/mock/marchandizer/product-sub-categories.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { ProductCategoryService } from '../../../../@core/mock/marchandizer/product-category.service';
import { ProductCategories } from '../../../../@core/data/marchanzider-model/product-categories';

@Component({
  selector: 'ngx-product-sub-categories',
  templateUrl: './product-sub-categories.component.html',
  styleUrls: ['./product-sub-categories.component.scss']
})
export class ProductSubCategoriesComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['key', 'productCategoriesId','SubCategoreisName'];
  productInfos:ProductSubCategories[]=[];
  PCategory:ProductCategories[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private productInfoService:ProductSubCategoriesService,
    private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private productCategoriesService:ProductCategoryService) { }

  ngOnInit() {
    this.refresList();
 this.productCategoriesService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["key"] = element.key;

        this.PCategory.push(y as ProductCategories);
      });

      console.log(this.PCategory);
    });

   }
 
   applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }
 
   AddNewInpurRow(){
     this.productInfos=[];
     this.subscription=   this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
       item.forEach(element => {
         var y = element.payload.toJSON();
         y["key"] = element.key;
 
         this.productInfos.push(y as ProductSubCategories);
       })
      
       this.productInfos.unshift({ key: '',productCategoriesId:'', SubCategoreisName:''});
       this.dataSource=new MatTableDataSource(this.productInfos);
       console.log(this.productInfos);
     })
   }
 
   save(element){
     console.log(element);
     this.productInfoService.addProductInfo(element).then(data=>{
       console.log(data);
       this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
       this.refresList();
     },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
 
   }
 
   edit(element){
     console.log(element);
     this.productInfoService.updateProductInfo(element.key,element).then(data=>{
       console.log(data);
       this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
       this.refresList();
     },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
   }
 
   delete(element){
     console.log(element);
     this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
                .afterClosed().subscribe(res=>{
                 if(res){
                   this.productInfoService.deleteProductInfo(element.key).then(res=>{
                     this.refresList();
                     this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                   },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                 }
                })
   }
 
   refresList(){
    
     this.subscription= this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      this.productInfos=[];
       item.forEach(element => {
         var y = element.payload.toJSON();
         y["key"] = element.key;
 
      
       this.productInfos.push(y as ProductSubCategories);
       })
      console.log(this.productInfos);
       this.dataSource=new MatTableDataSource(this.productInfos);
       console.log(this.productInfos);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
     })
    
   }

}
