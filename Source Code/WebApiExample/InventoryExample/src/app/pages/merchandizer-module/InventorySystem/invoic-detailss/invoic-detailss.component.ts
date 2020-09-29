import { InvoiceDetailsService } from './../../../../@core/mock/marchandizer/invoice-details.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { InvoiceDetails } from '../../../../@core/data/marchanzider-model/Invoice-Details';

import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StockInfoService } from '../../../../@core/mock/marchandizer/stock-info.service';
import { StockInfo } from '../../../../@core/data/marchanzider-model/stock-info';


@Component({
  selector: 'ngx-invoic-detailss',
  templateUrl: './invoic-detailss.component.html',
  styleUrls: ['./invoic-detailss.component.scss']
})
export class InvoicDetailssComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['key', 'entryDate','clienName','totalAmount','PaidAmount','DueAmount'];
  productInfos:any[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private productInfoService:InvoiceDetailsService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private stockInfoService:StockInfoService
     ) { }

  ngOnInit() {
   this.refresList();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
                    
            //then delete froms stock
            this.stockInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
              let stockInfo=[];
              item.forEach(element => {
                var y = element.payload.toJSON();
                y["key"] = element.key;

              
                stockInfo.push(y as StockInfo);
              });
              console.log(stockInfo);
          let stockListByelementId=  stockInfo.filter(f=>f.invoiceKey==element.key);

            stockListByelementId.forEach(e => {
              this.stockInfoService.deleteProductInfo(e.key).then(t=>console.log(t));
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
        y['DueAmount']=y['totalAmount']-y['PaidAmount'];
     
      this.productInfos.push(y);
      })
     console.log(this.productInfos);
      this.dataSource=new MatTableDataSource(this.productInfos);
      console.log(this.productInfos);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }

  printInvoice(element){
    console.log(element);
    this.router.navigate(['/pages/Invoice-print/',element.key]);
  }

}
