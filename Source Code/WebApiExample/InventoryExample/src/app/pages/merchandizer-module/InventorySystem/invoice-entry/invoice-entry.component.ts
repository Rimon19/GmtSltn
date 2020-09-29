import { ProductInfo } from './../../../../@core/data/ProductInfo';
import { Component, OnInit } from '@angular/core';
import { InvoiceDetailsService } from '../../../../@core/mock/marchandizer/invoice-details.service';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { ProductCategoryService } from '../../../../@core/mock/marchandizer/product-category.service';
import { ProductCategories } from '../../../../@core/data/marchanzider-model/product-categories';
import { ProductSubCategories } from '../../../../@core/data/marchanzider-model/product-sub-categories';
import { ProductSubCategoriesService } from '../../../../@core/mock/marchandizer/product-sub-categories.service';
import { Subscription, Observable } from 'rxjs';
import { InvoiceDetails } from '../../../../@core/data/marchanzider-model/Invoice-Details';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { invoice } from '../../../../@core/data/marchanzider-model/invoice';
import { Router } from '@angular/router';
import { items } from '../../../../@core/data/items';
import { InvoicEntryModel } from './ivoiceEntryModel';
import { StockInfo } from '../../../../@core/data/marchanzider-model/stock-info';
import { StockInfoService } from '../../../../@core/mock/marchandizer/stock-info.service';
import { ProductInfoService } from '../../../../@core/mock/marchandizer/product-info.service';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

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
  selector: 'ngx-invoice-entry',
  templateUrl: './invoice-entry.component.html',
  styleUrls: ['./invoice-entry.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
})
export class InvoiceEntryComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;




  productCategories:ProductCategories[]=[];
  productSubCategories:ProductSubCategories[]=[];
  productBrands:ProductInfo[]=[];
  invoiceEntryForm: FormArray = this.fb.array([]);
  invoicelist:any[]=[];
  productInfos:invoice[]=[];
  stockInfo:StockInfo[]=[];
  subscription:Subscription;
  Tostr=new Tostr();
  totalAmount:number=0;
  entryDate:any='';
  clinentName:string='';
  Mobile:string='';
  PaidAmount:number=0;
  InvoicEntryModel =new InvoicEntryModel();
  startDate = new Date(2020, 0, 1);
  filterproductSubCategories1=[];
  isProductDefine:boolean=false;
  constructor(private invoiceService:InvoiceDetailsService,
    private productCategoriesService:ProductCategoryService,
    private productSubCategoryService:ProductSubCategoriesService,
    private fb: FormBuilder,
    private productInfoService:InvoiceDetailsService,
    private toastrService:NbToastrService,
    private router:Router ,
    private stockinfoService:StockInfoService,
    private productInfosServicess:ProductInfoService,
    private productSubCategoriesService:ProductSubCategoriesService

    ) { }

    private _filter(value: any): any[] {
      const filterValue = value.toLowerCase();
  
      return this.productBrands.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
   
  ngOnInit() {
console.log(this.myControl);

      // this.refresList();
      this.productCategoriesDDL();
      this.productBrandDDL();
      this.productSubCategoryDDL();
      this.getStockInfo();
console.log(this.productBrands);

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  
    // this.invoiceService.getAllProductInfo().snapshotChanges().subscribe(item=>{
    //  console.log('test4',item)
    //  this.invoicelist=[];
    //  item.forEach(element => {
        
    //   var y = element.payload.toJSON();
    //   console.log("item",y)
    //   y["key"] = element.key;

    //   this.invoicelist.push(y);
    // })
    // console.log('test6',this.invoicelist);
    //   if(this.invoicelist==[]){        
    //     this.addInvoiceRecord();  
    //  }
    //  else {
    //   //generate formarray as per the data received from invoiceDetails table
    //   this.invoiceEntryForm= this.fb.array([]);
    //   (this.invoicelist as []).forEach((invoiceDetails: any) => {
    //     console.log('test2',invoiceDetails);
       
    //     this.invoiceEntryForm.push(this.fb.group({
    //       ProductCategory: invoiceDetails.ProductCategory,
    //       ProductSubCategory: invoiceDetails.ProductSubCategory,
    //       Quantity: invoiceDetails.Quantity,
    //       Rate: invoiceDetails.Rate,
    //       Amount: invoiceDetails.Amount,
    //       Key:invoiceDetails.Key
    //     }));
    //   });
    // }
      
    // })
      // this.addInvoiceRecord();

     


  }
  getStockInfo(){
    this.subscription= this.stockinfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      this.productInfos=[];
       item.forEach(element => {
         var y = element.payload.toJSON();
         y["key"] = element.key;
    
      
       this.stockInfo.push(y as StockInfo);
       })
       //distinct stock product categories and sum instock
    
     
    
      
      });
  }
      productCategoriesDDL(){
        this.productCategoriesService.getAllProductInfo().snapshotChanges().subscribe(item=>{
          item.forEach(element => {
            var y = element.payload.toJSON();
            y["key"] = element.key;
      
            this.productCategories.push(y as ProductCategories);
          })
          
        })
      }
      productBrandDDL(){
        
        //this is actualy product info information loaded
        this.productInfosServicess.getAllProductInfo().snapshotChanges().subscribe(item=>{
          item.forEach(element => {
            var y = element.payload.toJSON();
            y["key"] = element.key;
      
            this.productBrands.push(y as ProductInfo);
          })
      
        })
      }
      
      productSubCategoryDDL(){
        
        //this is actualy product info information loaded
        this.productSubCategoriesService.getAllProductInfo().snapshotChanges().subscribe(item=>{
          item.forEach(element => {
            var y = element.payload.toJSON();
            y["key"] = element.key;
      
            this.productSubCategories.push(y as ProductSubCategories);
          })
        
        })
      }
      addInvoiceRecord() {
        this.invoiceEntryForm.push(this.fb.group({
          ProductCategory: ['', Validators.required],
          ProductSubCategory:[, Validators.required],
          ProductBrand:[, Validators.required],
          Quantity: [0],
          Rate: [0],
          Amount: [0],
          key:['']
        }));
      }
  
      recordSubmit(fg: FormGroup) {
     
            // if(fg.value.Key=='')
            // {
            //   this.invoiceService.addProductInfo(fg.value).then(
            //     (res: any) => {   
            //       console.log(res)   ;   
            //       fg.patchValue({ Key:res.key });
            //       this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
            //     });
            
            // } 
            // else
           // this.invoiceService.updateProductInfo(fg.value.Key,fg.value).then(
              // (res: any) => {
              //   console.log(fg.value.Key);
              //   this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
           //   }
           //   );

           //   console.log(fg.value.Key);
      }

      CalculateTotal(invoiceEntryForm){
        this.totalAmount=0;
        (invoiceEntryForm.value).forEach((invoiceDetails: any) => {
        
         this.totalAmount+= parseInt(invoiceDetails.Amount);
        });
       
      }
      onDelete(invoiceEntryForm,i) {
       invoiceEntryForm.value.splice(i, 1);
       this.invoiceEntryForm.removeAt(i);
     //  this.OnChangeActions(invoiceEntryForm);
          // this.invoiceEntryForm= this.fb.array([]);
          // (invoiceEntryForm.value).forEach((invoiceDetails: any) => {
          //   this.invoiceEntryForm.push(this.fb.group({
          //     ProductCategory: invoiceDetails.ProductCategory,
          //     ProductBrand: invoiceDetails.ProductBrand,
          //     ProductSubCategory: invoiceDetails.ProductSubCategory,
          //     Quantity: invoiceDetails.Quantity,
          //     Rate: invoiceDetails.Rate,
          //     Amount: invoiceDetails.Amount
          //   }));
          // });
         // this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
      }
      onUpdate(fg: FormGroup,invoiceEntryForm, i) {

for (var j = 0, l = invoiceEntryForm.value.length; j < l; j++) {
    if (invoiceEntryForm.value[j] === i) {
      invoiceEntryForm.value[j].ProductSubCategory = invoiceEntryForm.value.ProductSubCategory;
      invoiceEntryForm.value[j].Quantity = invoiceEntryForm.value.Quantity;
      invoiceEntryForm.value[j].Rate = invoiceEntryForm.value.Rate;
      invoiceEntryForm.value[j].Amount = invoiceEntryForm.value.Amount;
     // this.totalamnt=+invoiceEntryForm.value.amn;
        break;
    }
}
       }

allSubmit(invoiceEntryForm){
  let tAmount=0;

  (invoiceEntryForm.value).forEach((invoiceDetails: any) => {
    tAmount+= parseInt(invoiceDetails.Amount);
  });

let Month=this.entryDate._i.month + 1;
let day=this.entryDate._i.date;
let year=this.entryDate._i.year;
     if(Month<10){
       Month='0'+Month;
     }
     if(day<10){
       day='0'+day;
     }
    
let EntryDate =day+'/'+ Month + '/' + year;
console.log(EntryDate);
 
 //let isProductDefine=true;
 let invoiceEntryDetails=new InvoicEntryModel();
 
 invoiceEntryDetails.items=invoiceEntryForm.value;

 invoiceEntryDetails.totalAmount=tAmount;
 invoiceEntryDetails.entryDate=EntryDate;
 invoiceEntryDetails.PaidAmount=this.PaidAmount;
 invoiceEntryDetails.clienName=this.clinentName;

invoiceEntryDetails.mobile=this.Mobile;

this.invoiceService.addProductInfo(invoiceEntryDetails).then(t=>{
  let invoiceKey=t.key;
  this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);

  (invoiceEntryForm.value).forEach((invoiceDetails: any) => {
 
        const stockInfo=new StockInfo();
      
      stockInfo.ProductName=invoiceDetails.ProductCategory;
      stockInfo.BrandName=invoiceDetails.ProductBrand;
      stockInfo.ProductSubName=invoiceDetails.ProductSubCategory;
      
    stockInfo.InStock= -parseInt(invoiceDetails.Quantity);
      stockInfo.ImportedDate=EntryDate;
     stockInfo.ImportedBy="";
    
    stockInfo.productKey=invoiceDetails.key;
    stockInfo.invoiceKey=invoiceKey;
       this.stockinfoService.addProductInfo(stockInfo).then();
       console.log(invoiceDetails);
     
     });
  this.router.navigate(['/pages/Invoice-Details']);
});

}


       onQuantityChange(invoiceEntryForm){
        this.OnChangeActions(invoiceEntryForm);
    }
    onRateChange(invoiceEntryForm){

      this.OnChangeActions(invoiceEntryForm);
     
  }

  backToInvoiceInfo(){
    this.router.navigate(['/pages/Invoice-Details']);
  }

  OnChangeActions(invoiceEntryForm){

      invoiceEntryForm.value.forEach(element => {
          element.ProductCategory= element.ProductCategory;
          element.ProductSubCategory= element.ProductSubCategory;
          element.ProductBrand= element.ProductBrand;
          element.Quantity= element.Quantity;
          element.Rate= element.Rate;
          element.Amount= parseInt(element.Quantity)*parseInt( element.Rate);
          element.key=element.key;
       });
}


productSelection(key){
console.log(key);
console.log(this.productBrands);

let filterObj=this.productBrands.find(f=>f.key==key);
console.log(filterObj);


   //distinct stock product categories and sum instock

   var result = [];
   this.stockInfo.reduce(function(res, value) {
      if (!res[value.BrandName]) {
        res[value.BrandName] = { ProductName: value.ProductName,BrandName:value.BrandName, InStock: 0 };
        result.push(res[value.BrandName])
      }
      res[value.BrandName].InStock +=value.InStock;
      return res;
    }, {});
console.log(result);

let resultObj=  result.find(f=>f.BrandName.toLowerCase()==filterObj.name.toLocaleLowerCase());


if(resultObj.InStock<=0){
  this.Tostr.showToast('danger',"", ""+filterObj.name+" Stock is Already Finished !", "",this.toastrService);

}else{
  this.invoiceEntryForm.push(this.fb.group({
    ProductCategory:filterObj.catagory ,
    ProductSubCategory:filterObj.subCategory,
    ProductBrand:filterObj.name,
    Quantity: [0],
    Rate: filterObj.cost,
    Amount: [0],
    key:filterObj.key,
    filterproductSubCategories:[]
  }));
}



}




}

