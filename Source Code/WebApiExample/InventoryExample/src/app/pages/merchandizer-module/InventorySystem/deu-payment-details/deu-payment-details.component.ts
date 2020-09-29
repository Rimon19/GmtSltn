import { DeuPaymentDetailsService } from './../../../../@core/mock/marchandizer/deu-payment-details.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { DeuPaymentDetails } from '../../../../@core/data/marchanzider-model/DeuPaymentDetails';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { InvoiceDetailsService } from '../../../../@core/mock/marchandizer/invoice-details.service';
import { InvoicEntryModel } from '../invoice-entry/ivoiceEntryModel';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-deu-payment-details',
  templateUrl: './deu-payment-details.component.html',
  styleUrls: ['./deu-payment-details.component.scss']
})
export class DeuPaymentDetailsComponent implements OnInit {
  mobileNo:string='';
  entryDate:string='';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = [ 'clienName','mobile','totalAmount','PaidAmount','DueAmount'];
  productInfos:any[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private productInfoService:InvoiceDetailsService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     ) { }

  ngOnInit() {
   this.refresList();
  }

  applyFilter(filterValue: string) {
if(this.entryDate!=''&&this.entryDate!=null&&this.entryDate!=undefined){
  var month;
  var day;
   var dateObj = new Date(this.entryDate);
   var dObj=dateObj.toLocaleDateString().split('/');
    month=parseInt(dObj[0]);
    day=parseInt(dObj[1]);
        if(month<10){
          month='0'+month;
        }
        if(day<10){
          day='0'+day;
        }

let EntryDate = day + '/' + month + '/' + dObj[2];


  this.subscription= this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
    this.productInfos=[];
    item.forEach(element => {
      var y = element.payload.toJSON();
      y["key"] = element.key;
      y['DueAmount']=y['totalAmount']-y['PaidAmount'];
   
    this.productInfos.push(y);
    })

   let   filteredProducts = (EntryDate||this.mobileNo) ?
      this.productInfos.filter(p =>p.entryDate.toLowerCase()==
      EntryDate.toLowerCase()) :
       this.productInfos;     
   

  
     var result = [];
     filteredProducts.reduce(function(res, value) {
        if (!res[value.mobile]) {
          res[value.mobile] = {entryDate:value.entryDate,clienName:value.clienName,mobile:value.mobile, tAmount:0, PAmount: 0, DAmount:0};
          result.push(res[value.mobile])
        }
        res[value.mobile].tAmount +=value.totalAmount;
        res[value.mobile].PAmount +=parseInt(value.PaidAmount) ;
        res[value.mobile].DAmount +=value.DueAmount;
        return res;
      }, {});
     
           this.dataSource=new MatTableDataSource(result);
           this.dataSource.sort = this.sort;
           this.dataSource.paginator = this.paginator;

    if(filteredProducts.length==0){
      this.Tostr.showToast('danger',"", "No Sell's Found !", "",this.toastrService);
    }
  })
}
if(this.mobileNo!=''&&this.mobileNo!=null&&this.mobileNo!=undefined){

  this.subscription= this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
    this.productInfos=[];
    item.forEach(element => {
      var y = element.payload.toJSON();
      y["key"] = element.key;
      y['DueAmount']=y['totalAmount']-y['PaidAmount'];
   
    this.productInfos.push(y);
    })

   
   let   filteredProducts = (this.mobileNo) ?
      this.productInfos.filter(p =>p.mobile.toLowerCase()==
      this.mobileNo.toLowerCase()) :
       this.productInfos;     
   

  
     var result = [];
     filteredProducts.reduce(function(res, value) {
        if (!res[value.mobile]) {
          res[value.mobile] = {entryDate:value.entryDate,clienName:value.clienName,mobile:value.mobile, tAmount:0, PAmount: 0, DAmount:0};
          result.push(res[value.mobile])
        }
        res[value.mobile].tAmount +=value.totalAmount;
        res[value.mobile].PAmount +=parseInt(value.PaidAmount) ;
        res[value.mobile].DAmount +=value.DueAmount;
        return res;
      }, {});
     
           this.dataSource=new MatTableDataSource(result);
           this.dataSource.sort = this.sort;
           this.dataSource.paginator = this.paginator;

    if(filteredProducts.length==0){
      this.Tostr.showToast('danger',"", "No Sell's Found !", "",this.toastrService);
    }
  })
}
if(this.entryDate!=''&&this.entryDate!=null&&this.entryDate!=undefined&&this.mobileNo!=''&&this.mobileNo!=null&&this.mobileNo!=undefined){
  var month;
  var day;
   var dateObj = new Date(this.entryDate);
   var dObj=dateObj.toLocaleDateString().split('/');
    month=parseInt(dObj[0]);
    day=parseInt(dObj[1]);
        if(month<10){
          month='0'+month;
        }
        if(day<10){
          day='0'+day;
        }

let EntryDate = day + '/' + month + '/' + dObj[2];


  this.subscription= this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
    this.productInfos=[];
    item.forEach(element => {
      var y = element.payload.toJSON();
      y["key"] = element.key;
      y['DueAmount']=y['totalAmount']-y['PaidAmount'];
   
    this.productInfos.push(y);
    })

   let   filteredProducts = (EntryDate||this.mobileNo) ?
      this.productInfos.filter(p =>p.entryDate.toLowerCase()==
      EntryDate.toLowerCase()&&p.mobile.toLowerCase()==
         this.mobileNo.toLowerCase()) :
       this.productInfos;     
   

  
     var result = [];
     filteredProducts.reduce(function(res, value) {
        if (!res[value.mobile]) {
          res[value.mobile] = {entryDate:value.entryDate,clienName:value.clienName,mobile:value.mobile, tAmount:0, PAmount: 0, DAmount:0};
          result.push(res[value.mobile])
        }
        res[value.mobile].tAmount +=value.totalAmount;
        res[value.mobile].PAmount +=parseInt(value.PaidAmount) ;
        res[value.mobile].DAmount +=value.DueAmount;
        return res;
      }, {});
     
           this.dataSource=new MatTableDataSource(result);
           this.dataSource.sort = this.sort;
           this.dataSource.paginator = this.paginator;

    if(filteredProducts.length==0){
      this.Tostr.showToast('danger',"", "No Sell's Found !", "",this.toastrService);
    }
  })
}
  
  }

  AddNewInpurRow(){

    this.router.navigate(['/pages/Invoice-entry']);
    // this.productInfos=[];
    // this.subscription=   this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
    //   item.forEach(element => {
    //     var y = element.payload.toJSON();
    //     y["key"] = element.key;

    //     this.productInfos.push(y as InvoiceDetails);
    //   })
     
    //   this.productInfos.unshift({ key: '', CustomerName: '', Product: '',quantity:0,date:'',totalPrice:0,paidPrice:0});
    //   this.dataSource=new MatTableDataSource(this.productInfos);
    //   console.log(this.productInfos);
    // })
  }
  payment(mobile){

    this.router.navigate(['/pages/payment/',mobile]);
  
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
        y['DueAmount']=y['totalAmount']-y['PaidAmount'];
     
      this.productInfos.push(y);
      
      })


var result = [];
this.productInfos.reduce(function(res, value) {
   if (!res[value.mobile]) {
     res[value.mobile] = {entryDate:value.entryDate,clienName:value.clienName,mobile:value.mobile, tAmount:0, PAmount: 0, DAmount:0};
     result.push(res[value.mobile])
   }
   res[value.mobile].tAmount +=value.totalAmount;
   res[value.mobile].PAmount +=parseInt(value.PaidAmount) ;
   res[value.mobile].DAmount +=value.DueAmount;
   return res;
 }, {});

      this.dataSource=new MatTableDataSource(result);
     
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      
    })
   
  }

  printInvoice(element){
    
    this.router.navigate(['/pages/Invoice-print/',element.key]);
  }

}
