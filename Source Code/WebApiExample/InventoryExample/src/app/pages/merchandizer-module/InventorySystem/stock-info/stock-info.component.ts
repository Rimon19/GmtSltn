import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

import { StockInfo } from '../../../../@core/data/marchanzider-model/stock-info';

import { NbToastrService } from '@nebular/theme';

import { StockInfoService } from '../../../../@core/mock/marchandizer/stock-info.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { ProductCategoryService } from '../../../../@core/mock/marchandizer/product-category.service';
import { ProductCategories } from '../../../../@core/data/marchanzider-model/product-categories';

@Component({
  selector: 'ngx-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})
export class StockInfoComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['ProductName', 'BrandName','InStock'];
  productInfos:StockInfo[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  productCategories:ProductCategories[]=[];
  constructor(private productInfoService:StockInfoService,
    private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private productCategoriesService:ProductCategoryService) { }

  ngOnInit() {
    this.refresList();
    this.productCategoriesService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["key"] = element.key;
  
        this.productCategories.push(y as ProductCategories);
      })
      
    })
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
 
         this.productInfos.push(y as StockInfo);
       })
      
       this.productInfos.unshift({ key: '', ProductName: '',ProductSubName:'', BrandName: '',InStock:0,ImportedBy:'',ImportedDate:'',productKey:'',invoiceKey:''});
       this.dataSource=new MatTableDataSource(this.productInfos);
       
     })
   }
 
   save(element){
     
     this.productInfoService.addProductInfo(element).then(data=>{
       
       this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
       this.refresList();
     },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
 
   }
 
   edit(element){
     
     this.productInfoService.updateProductInfo(element.key,element).then(data=>{
      
       this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
       this.refresList();
     },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
   }
 
   delete(element){
     
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
 
      
       this.productInfos.push(y as StockInfo);
       })
       //distinct stock product categories and sum instock

       var result = [];
       this.productInfos.reduce(function(res, value) {
          if (!res[value.BrandName]) {
            res[value.BrandName] = { ProductName: value.ProductName,BrandName:value.BrandName, InStock: 0 };
            result.push(res[value.BrandName])
          }
          res[value.BrandName].InStock +=value.InStock;
          return res;
        }, {});

   

      
       this.dataSource=new MatTableDataSource(result);
     
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
     })
    
   }

}
