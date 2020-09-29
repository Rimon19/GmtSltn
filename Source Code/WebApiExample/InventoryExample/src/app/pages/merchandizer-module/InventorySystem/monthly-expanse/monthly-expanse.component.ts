import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { DailyIncomeExpanse } from '../../../../@core/data/marchanzider-model/DailyIncomeExpanse';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { DailyIncomeExpanseService } from '../../../../@core/mock/marchandizer/daily-income-expanse.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-monthly-expanse',
  templateUrl: './monthly-expanse.component.html',
  styleUrls: ['./monthly-expanse.component.scss']
})
export class MonthlyExpanseComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['date', 'totalExpense'];
  productInfos:DailyIncomeExpanse[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  entryDate:string='';
  constructor(private productInfoService:DailyIncomeExpanseService,
    private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private router:Router) { }

  ngOnInit() {
    this.subscription= this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      this.productInfos=[];
       item.forEach(element => {
         var y = element.payload.toJSON();
         y["key"] = element.key;
 
        // var d=new Date(y["date"]);
      //   y["date"]=d;
       this.productInfos.push(y as DailyIncomeExpanse);
       });
      console.log(this.productInfos);


      this.productInfos.forEach(f=>{

        f.date=f.date.substring(3);
        
      });

      console.log(this.productInfos);
      var result = [];
      this.productInfos.reduce(function(res, value) {
         if (!res[value.date]) {
           res[value.date] = { date:value.date,totalExpense: 0 };
           result.push(res[value.date])
         }
         res[value.date].totalExpense +=value.totalExpense;
         return res;
       }, {});

       this.dataSource=new MatTableDataSource(result);
     //  console.log(this.productInfos);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
      });
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

  let EntryDate =month + '/' + dObj[2];

  

  this.subscription= this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
    this.productInfos=[];
     item.forEach(element => {
       var y = element.payload.toJSON();
       y["key"] = element.key;

      // var d=new Date(y["date"]);
    //   y["date"]=d;
     this.productInfos.push(y as DailyIncomeExpanse);
     });
    console.log(this.productInfos);


    this.productInfos.forEach(f=>{

      f.date=f.date.substring(3);
      
    });


      let filteredProducts = (EntryDate) ?
      this.productInfos.filter(p => p.date.toLowerCase()==
      EntryDate.toLowerCase()) :
       this.productInfos;      
       

    
       var result = [];
       filteredProducts.reduce(function(res, value) {
          if (!res[value.date]) {
            res[value.date] = { date:value.date,totalExpense: 0 };
            result.push(res[value.date])
          }
          res[value.date].totalExpense +=value.totalExpense;
          return res;
        }, {});
 
        this.dataSource=new MatTableDataSource(result);
     
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      if(filteredProducts.length==0){
        this.Tostr.showToast('danger',"", "No Expanse Found !", "",this.toastrService);
      }
   
    });

    }
    AddNewInpurRow(){}
    save(element){}
  
    edit(element){}
    delete(element){}
}
