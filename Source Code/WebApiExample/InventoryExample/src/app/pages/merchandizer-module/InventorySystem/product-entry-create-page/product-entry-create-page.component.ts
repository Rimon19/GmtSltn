import { Component, OnInit } from '@angular/core';
import { ProductInfoService } from '../../../../@core/mock/marchandizer/product-info.service';
import { NbToastrService } from '@nebular/theme';
import { StockInfo } from '../../../../@core/data/marchanzider-model/stock-info';
import { ProductCategoryService } from '../../../../@core/mock/marchandizer/product-category.service';
import { StockInfoService } from '../../../../@core/mock/marchandizer/stock-info.service';
import { ProductSubCategoriesService } from '../../../../@core/mock/marchandizer/product-sub-categories.service';
import { ProductInfo } from '../../../../@core/data/ProductInfo';
import { ProductCategories } from '../../../../@core/data/marchanzider-model/product-categories';
import { ProductSubCategories } from '../../../../@core/data/marchanzider-model/product-sub-categories';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'ngx-product-entry-create-page',
  templateUrl: './product-entry-create-page.component.html',
  styleUrls: ['./product-entry-create-page.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
})
export class ProductEntryCreatePageComponent implements OnInit {
  productInfos:ProductInfo[]=[];
  Product=new ProductInfo();
  productCategories:ProductCategories[]=[];
  productSubCategories:ProductSubCategories[]=[];
  productSubCategoriesFilterd:ProductSubCategories[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  stockInfos:StockInfo[]=[];
  productInfostwo:any[]=[];
  editkey;
  startDate = new Date(2020, 0, 1);
  count=0;
  prdctList=[];
  constructor(private productInfoService:ProductInfoService,
    private toastrService:NbToastrService,
    private productCategoriesService:ProductCategoryService,
    private stockinfoService:StockInfoService,
    private productSubCategoryService:ProductSubCategoriesService,
    private router:Router,
    private route:ActivatedRoute) { }


  ngOnInit() {
    this.Product.catagory='';
    this.Product.name='';
    this.editkey = this.route.snapshot.paramMap.get('key');
    this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      this.prdctList=[];
       item.forEach(element => {
         var y = element.payload.toJSON();
         y["key"] = element.key;
 
      
         this.prdctList.push(y as StockInfo);
       });
      });

    if(this.editkey!=null){
    this.subscription= this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      this.productInfos=[];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["key"] = element.key;
       
     
      this.productInfos.push(y as ProductInfo);
      });
  this.Product= this.productInfos.find(f=>f.key==this.editkey);
  console.log(this.Product);
  
    });
  }
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
  save(element){
    
    console.log(this.prdctList);
       let stockObjByelementId=  this.prdctList.filter(f=>f.catagory==element.catagory&&
        f.subCategory==element.subCategory&&f.name.trim()==element.name.trim());
       console.log(stockObjByelementId);
        if(stockObjByelementId.length==0){
        
          if(JSON.stringify(element) !== '{}'){
      
            let Month=element.date._i.month + 1;
           let day=element.date._i.date;
          let year=element.date._i.year;
                if(Month<10){
                  Month='0'+Month;
                }
                if(day<10){
                  day='0'+day;
                }
               
        let EntryDate =day+'/'+ Month + '/' + year;
        element.date=EntryDate;
      
        
          this.productInfoService.addProductInfo(element).then(data=>{
           
            this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
            
         //  this.ngOnInit();
           const stockInfo=new StockInfo();
           stockInfo.ProductName=element.catagory;
           stockInfo.ProductSubName=element.subCategory;
           stockInfo.BrandName=element.name;
           
           stockInfo.InStock=parseInt(element.quantity);
           stockInfo.ImportedDate=element.date;
           stockInfo.ImportedBy=element.importedForm;
           stockInfo.productKey=data.key;
          // stockInfo.isIncreament=true;
      
            this.stockinfoService.addProductInfo(stockInfo).then();
           this.router.navigate(["/pages/product-info"]);
          },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
      
          }
        
        }
       else{
         alert("Product  is Already Exist! You Can Only Update..");
       }
        
       
     


     
    
      
  
   
  }

  edit(element){
   if(element.date._i!=undefined){
    let Month=element.date._i.month + 1;
    let day=element.date._i.date;
   let year=element.date._i.year;
         if(Month<10){
           Month='0'+Month;
         }
         if(day<10){
           day='0'+day;
         }
        
 let EntryDate =day+'/'+ Month + '/' + year;
 element.date=EntryDate;
   }
   

  this.stockinfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
    this.stockInfos=[];
     item.forEach(e => {
       var y = e.payload.toJSON();
       y["key"] = e.key;

    
     this.stockInfos.push(y as StockInfo);
     });
    
    let stockObj= this.stockInfos.find(f=>f.productKey== element.key);
    stockObj.ProductName=element.catagory;
    stockObj.ProductSubName=element.subCategory;
  stockObj.BrandName=element.name;
  stockObj.InStock=parseInt(element.quantity);
  stockObj.ImportedDate=element.date;
  stockObj.ImportedBy=element.importedForm;
  localStorage.setItem('stockObj', JSON.stringify(stockObj));
});

  this.productInfoService.updateProductInfo(element.key,element).then(data=>{
    var stockObj = localStorage.getItem('stockObj');

 let sObj=  JSON.parse(stockObj);
   this.stockinfoService.updateProductInfo(sObj.key,sObj).then();
  this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
  this.router.navigate(["/pages/product-info"]);
  
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
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
  backToProductInfo(){
    this.router.navigate(['/pages/product-info']);
  }
}
