import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

import { Subscription } from 'rxjs';

import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { DailySells } from '../../../../@core/data/marchanzider-model/DailySells';
import { DailySellsService } from '../../../../@core/mock/marchandizer/daily-sells.service';
import { InvoiceDetailsService } from '../../../../@core/mock/marchandizer/invoice-details.service';
import { Router } from '@angular/router';




@Component({
  selector: 'ngx-daily-sells',
  templateUrl: './daily-sells.component.html',
  styleUrls: ['./daily-sells.component.scss']
})
export class DailySellsComponent implements OnInit {
  entryDate:string='';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['key','entryDate', 'clienName','totalAmount','PaidAmount','DueAmount'];
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

      let filteredProducts = (EntryDate) ?
      this.productInfos.filter(p => p.entryDate.toLowerCase()==
      EntryDate.toLowerCase()) :
       this.productInfos;      
       

    
      this.dataSource=new MatTableDataSource(filteredProducts);
     
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      if(filteredProducts.length==0){
      //  this.Tostr.showToast('danger',"", "No Sell's Found !", "",this.toastrService);
      }
    })
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
      });
      var month;
      var day;
       var dateObj = new Date();
       var dObj=dateObj.toLocaleDateString().split('/');
        month=parseInt(dObj[0]);
        day=parseInt(dObj[1]);
            if(month<10){
              month='0'+month;
            }
            if(day<10){
              day='0'+day;
            }
  
    let todayDate = day + '/' + month + '/' + dObj[2];
    let filteredProducts = (todayDate) ?
    this.productInfos.filter(p => p.entryDate.toLowerCase()==
    todayDate.toLowerCase()) :
     this.productInfos;      
     

  
    this.dataSource=new MatTableDataSource(filteredProducts);
   
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    });
  }

  printInvoice(element){
    console.log(element);
    this.router.navigate(['/pages/Invoice-print/',element.key]);
  }

}
