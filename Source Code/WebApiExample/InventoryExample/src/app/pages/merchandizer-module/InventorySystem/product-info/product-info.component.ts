import { StockInfoService } from './../../../../@core/mock/marchandizer/stock-info.service';
import { ProductCategories } from './../../../../@core/data/marchanzider-model/product-categories';
import { ProductCategoryService } from './../../../../@core/mock/marchandizer/product-category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductInfoService } from '../../../../@core/mock/marchandizer/product-info.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ProductInfo } from '../../../../@core/data/ProductInfo';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { StockInfo } from '../../../../@core/data/marchanzider-model/stock-info';
import { ProductSubCategoriesService } from '../../../../@core/mock/marchandizer/product-sub-categories.service';
import { ProductSubCategories } from '../../../../@core/data/marchanzider-model/product-sub-categories';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'ngx-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['key', 'catagory','subCategory', 'name','quantity','date','importedForm','cost'];
  productInfos:any[]=[];
 
  productCategories:ProductCategories[]=[];
  productSubCategories:ProductSubCategories[]=[];
  productSubCategoriesFilterd:ProductSubCategories[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  stockInfos:any[]=[];
  productInfostwo:any[]=[];
  constructor(private productInfoService:ProductInfoService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private productCategoriesService:ProductCategoryService,
     private stockinfoService:StockInfoService,
     private productSubCategoryService:ProductSubCategoriesService,
     private router:Router) { }

  ngOnInit() {
  
   this.refresList();
  this.productCategoriesService.getAllProductInfo().snapshotChanges().subscribe(item=>{
    item.forEach(element => {
      var y = element.payload.toJSON();
      y["key"] = element.key;

      this.productCategories.push(y as ProductCategories);
    })
    
  })

  this.productSubCategoryService.getAllProductInfo().snapshotChanges().subscribe(item=>{
    item.forEach(element => {
      var y = element.payload.toJSON();
      y["key"] = element.key;

      this.productSubCategories.push(y as ProductSubCategories);
    })
    
  })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  OnCategoryDDLChange(catagory){

this.productSubCategories=[];

this.productSubCategoryService.getAllProductInfo().snapshotChanges().subscribe(item=>{
  item.forEach(element => {
    var y = element.payload.toJSON();
    y["key"] = element.key;

    this.productSubCategories.push(y as ProductSubCategories);
  })
  
  let filterproductSubCategories = (catagory) ?
   this.productSubCategories.filter(p => p.productCategoriesId==catagory):
    this.productSubCategories;      
    this.productSubCategories=filterproductSubCategories;
});

  }
  AddNewInpurRow(){
    this.router.navigate(["/pages/product-info-create"]);
    // this.productInfos=[];
    // this.subscription=   this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
    //   item.forEach(element => {
    //     var y = element.payload.toJSON();
    //     y["key"] = element.key;

    //     this.productInfos.push(y as ProductInfo);
    //   })
     
    //   this.productInfos.unshift({ key: '', catagory: '',subCategory:'', name: '',quantity:0,date:'',importedForm:'',cost:0});
    //   this.dataSource=new MatTableDataSource(this.productInfos);
    //   console.log(this.productInfos);
    // })
  }


  save(element){

   

 

  }

  edit(element){
this.router.navigate(["/pages/product-info-create/",element.key])
    // this.productInfoService.updateProductInfo(element.key,element).then(data=>{
    //   console.log(data);
    //   this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
    //   this.refresList();
    //   this.ngOnInit();
    // },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }

  delete(element){
  
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.productInfoService.deleteProductInfo(element.key).then(res=>{

                    //then delete froms stock
                          this.stockinfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
                            let stockInfo=[];
                            item.forEach(element => {
                              var y = element.payload.toJSON();
                              y["key"] = element.key;
                      
                            
                              stockInfo.push(y as StockInfo);
                            });
                            
                        let stockListByelementId=  stockInfo.filter(f=>f.productKey==element.key);
                       
                          stockListByelementId.forEach(e => {
                            this.stockinfoService.deleteProductInfo(e.key).then(t=>console.log(t));
                          });
                         
                        
                     

                      });
                   
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
      // let sortDate= y["date"].split("/");
      // sortDate=sortDate[0]+sortDate[1]+sortDate[2];
      // y["eDate"]=parseInt(sortDate);
      this.productInfos.push(y);
      
      });
      console.log(this.productInfos);

      //  this.productInfos.sort((a:any,b:any)=>{
      //     if(a.quantity>b.quantity) return 1;
      //     if(a.quantity>b.quantity) return 0;
          
      //   })
      this.dataSource=new MatTableDataSource(this.productInfos);
      console.log(this.productInfos);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }
   
}
