import { Component, OnInit } from '@angular/core';
import { DailyIncomeExpanse } from '../../../../@core/data/marchanzider-model/DailyIncomeExpanse';
import { DailyIncomeExpanseService } from '../../../../@core/mock/marchandizer/daily-income-expanse.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
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
  selector: 'ngx-daily-expanse-create-page',
  templateUrl: './daily-expanse-create-page.component.html',
  styleUrls: ['./daily-expanse-create-page.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
})


export class DailyExpanseCreatePageComponent implements OnInit {
  Tostr=new Tostr();
  dailyIncomeExpanse=new DailyIncomeExpanse();
  editkey;
  productInfos:DailyIncomeExpanse[]=[];
  startDate = new Date(2020, 0, 1);
  constructor(private productInfoService:DailyIncomeExpanseService,
    private toastrService:NbToastrService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.editkey = this.route.snapshot.paramMap.get('key');
    console.log( this.editkey);
    if(this.editkey!=null){
       this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
        this.productInfos=[];
         item.forEach(element => {
           var y = element.payload.toJSON();
           y["key"] = element.key;
         this.productInfos.push(y as DailyIncomeExpanse);
         });

          this.dailyIncomeExpanse= this.productInfos.find(f=>f.key==this.editkey);
          console.log(this.dailyIncomeExpanse);
        });
      }   
  }
  save(element){
  // element.Odate=new Date(element.date._d).getTime();
  
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

 

  element.totalExpense=parseInt(element.totalExpense);
    this.productInfoService.addProductInfo(element).then(data=>{
    
      this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
     this.router.navigate(["/pages/daily-Expense"])
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

  }


  backToExpenseInfo(){
    this.router.navigate(['/pages/daily-Expense']);
  }
  edit(element){
  //   var month;
  //   var day;
  //    var dateObj = new Date(element.date);
  //    var dObj=dateObj.toLocaleDateString().split('/');
  //     month=parseInt(dObj[0]);
  //     day=parseInt(dObj[1]);
  //         if(month<10){
  //           month='0'+month;
  //         }
  //         if(day<10){
  //           day='0'+day;
  //         }

  // let EntryDate =day+'/'+ month + '/' + dObj[2];
  // element.date=EntryDate;
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

     this.productInfoService.updateProductInfo(element.key,element).then(data=>{
       
       this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
       this.router.navigate(["/pages/daily-Expense"])
     },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
   }
}
