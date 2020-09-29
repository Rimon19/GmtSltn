import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';

import { DailyIncomeExpanseService } from '../../../../@core/mock/marchandizer/daily-income-expanse.service';
import { DailyIncomeExpanse } from '../../../../@core/data/marchanzider-model/DailyIncomeExpanse';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-daily-income-expanse',
  templateUrl: './daily-income-expanse.component.html',
  styleUrls: ['./daily-income-expanse.component.scss']
})
export class DailyIncomeExpanseComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['key','date', 'totalExpense','purpsose'];
  productInfos:DailyIncomeExpanse[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private productInfoService:DailyIncomeExpanseService,
    private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private router:Router) { }

    ngOnInit() {
      this.refresList();
     }
   
     applyFilter(filterValue: string) {
       filterValue = filterValue.trim(); // Remove whitespace
       filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
       this.dataSource.filter = filterValue;
     }
   
     AddNewInpurRow(){
   this.router.navigate(["/pages/daily-Expense-create"]);
      
      //  this.productInfos=[];
      //  this.subscription=   this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      //    item.forEach(element => {
      //      var y = element.payload.toJSON();
      //      y["key"] = element.key;
      //      var d=new Date(y["date"]);
      //      y["date"]=d;
      //      this.productInfos.push(y as DailyIncomeExpanse);
      //    })
        
      //    this.productInfos.unshift({key:'', date:'', totalExpense:0,purpose:''});
      //    this.dataSource=new MatTableDataSource(this.productInfos);
      //    console.log(this.productInfos);
      //  })
     }
   
     save(element){
      
   
     }
   
     edit(element){
    
  
   this.router.navigate(["/pages/daily-Expense-create/",element.key])
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
   
          // var d=new Date(y["date"]);
        //   y["date"]=d;
         this.productInfos.push(y as DailyIncomeExpanse);
         })
        //console.log(this.productInfos);
         this.dataSource=new MatTableDataSource(this.productInfos);
       //  console.log(this.productInfos);
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
       })
      
     }

}
