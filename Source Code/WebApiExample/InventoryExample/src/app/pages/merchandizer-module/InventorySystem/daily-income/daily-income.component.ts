import { DailyIncomeExpanseService } from './../../../../@core/mock/marchandizer/daily-income-expanse.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { InvoiceDetailsService } from '../../../../@core/mock/marchandizer/invoice-details.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DailyIncomeExpanse } from '../../../../@core/data/marchanzider-model/DailyIncomeExpanse';

@Component({
  selector: 'ngx-daily-income',
  templateUrl: './daily-income.component.html',
  styleUrls: ['./daily-income.component.scss']
})
export class DailyIncomeComponent implements OnInit {

  entryDate:string='';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['entryDate', 'PaidAmount','totalExpense'];
  productInfos:any[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  dailyIncomeExpanses:DailyIncomeExpanse[]=[];
  constructor(private productInfoService:InvoiceDetailsService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dailyIncomeExpanseService:DailyIncomeExpanseService
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
        this.Tostr.showToast('danger',"", "No Sell's Found !", "",this.toastrService);
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

  // this.dailyIncomeExpanseService.getAllProductInfo().snapshotChanges().subscribe(item=>{
  //   this.productInfos=[];
  //    item.forEach(element => {
  //      var y = element.payload.toJSON();
  //      y["key"] = element.key;

  //    this.dailyIncomeExpanses.push(y as DailyIncomeExpanse);
  //    });
   


  
  //    let filteredExpenses = (todayDate) ?
  //    this.dailyIncomeExpanses.filter(p => p.date.toLowerCase()==
  //    todayDate.toLowerCase()) :
  //     this.dailyIncomeExpanses;      

  //     var ExpResult = [];
  //     filteredExpenses.reduce(function(res, value) {
  //         if (!res[value.date]) {
  //           res[value.date] = { date: value.date,totalExpense:0 };
  //           ExpResult.push(res[value.date])
  //         }
  //         res[value.date].totalExpense +=value.totalExpense;
  //         return res;
  //       }, {});
  //       localStorage.setItem('ExpenseObj', JSON.stringify(ExpResult));
  //  });


    this.subscription= this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      this.productInfos=[];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["key"] = element.key;
      
     
      this.productInfos.push(y);
      });


    

       let filteredProducts = (todayDate) ?
       this.productInfos.filter(p => p.entryDate.toLowerCase()==
       todayDate.toLowerCase()) :
        this.productInfos;      
        
        var ExpenseObj = localStorage.getItem('ExpenseObj');
        var ExpenseObjDD=JSON.parse(ExpenseObj);
  //  if(ExpenseObjDD[0].totalExpense=undefined||ExpenseObjDD[0].totalExpense==null||ExpenseObjDD[0].totalExpense==''){
  //   ExpenseObjDD[0].totalExpense=0;
  //  }
  console.log(filteredProducts);
        var result = [];
       filteredProducts.reduce(function(res, value) {
           if (!res[value.entryDate]) {
             res[value.entryDate] = { entryDate: value.entryDate,PaidAmount:0,DueAmount:0};
             result.push(res[value.entryDate])
           }
           res[value.entryDate].PaidAmount +=parseInt(value.PaidAmount);
           res[value.entryDate].DueAmount +=parseInt(value.totalAmount)-parseInt(value.PaidAmount);
           return res;
         }, {});
   
    
         console.log(result);
   
   
   
   
       this.dataSource=new MatTableDataSource(result);
      
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;

    
    });
  }

  printInvoice(element){
  
    this.router.navigate(['/pages/Invoice-print/',element.key]);
  }

}
