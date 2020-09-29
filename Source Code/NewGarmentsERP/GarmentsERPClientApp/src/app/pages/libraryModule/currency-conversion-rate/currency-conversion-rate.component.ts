import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { CurrencyConversionRate } from '../../../@core/data/Library-Modul-model/currency-conversion-rate';
import { CurrencyConversionRateService } from '../../../@core/mock/library/currency-conversion-rate.service';

@Component({
  selector: 'ngx-currency-conversion-rate',
  templateUrl: './currency-conversion-rate.component.html',
  styleUrls: ['./currency-conversion-rate.component.scss']
})
export class CurrencyConversionRateComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'currency',
    'conversionRate',
    'marketingRate',
    'date'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  currencyConversionRate:CurrencyConversionRate[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     public currencyConversionRateService:CurrencyConversionRateService,
     ) { }
    

  ngOnInit() {
 this.getCurrencyConversionRate();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-currency-conversion-rate"]);
   
  }
    delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.currencyConversionRateService.deleteCurrencyConversionRate(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getCurrencyConversionRate();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
    }
  getCurrencyConversionRate(){
    this.subscription=this.currencyConversionRateService.getCurrencyConversionRate().subscribe(data=>{
    this.currencyConversionRate=data;
  
    this.dataSource=new MatTableDataSource(this.currencyConversionRate);
    console.log('currencyConversionRate',this.currencyConversionRate);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-currency-conversion-rate/",element.id]);  
      }



}
