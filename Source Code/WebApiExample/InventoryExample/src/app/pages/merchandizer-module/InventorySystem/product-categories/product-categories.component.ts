import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ProductCategories } from '../../../../@core/data/marchanzider-model/product-categories';
import { ProductCategoryService } from '../../../../@core/mock/marchandizer/product-category.service';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';

@Component({
  selector: 'ngx-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['key', 'ProductName'];
  productInfos:ProductCategories[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private productInfoService:ProductCategoryService,
    private toastrService:NbToastrService,
    private mathdialogService: MatDialogService) { }

  ngOnInit() {
    this.refresList();
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
 
         this.productInfos.push(y as ProductCategories);
       })
      
       this.productInfos.unshift({ key: '', ProductName: ''});
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
 
      
       this.productInfos.push(y as ProductCategories);
       })
      console.log(this.productInfos);
       this.dataSource=new MatTableDataSource(this.productInfos);
       console.log(this.productInfos);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
     })
    
   }
}
