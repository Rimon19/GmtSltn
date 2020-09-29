import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { interval , Subscription } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { LiveUpdateChart, EarningData } from '../../../../@core/data/earning';
import { InvoiceDetailsService } from '../../../../@core/mock/marchandizer/invoice-details.service';

@Component({
  selector: 'ngx-earning-card-front',
  styleUrls: ['./earning-card-front.component.scss'],
  templateUrl: './earning-card-front.component.html',
})
export class EarningCardFrontComponent implements OnDestroy, OnInit {
  private alive = true;
  productInfos:any[]=[];
  dailyIncome;

  @Input() selectedCurrency: string = 'Bitcoin';

  intervalSubscription: Subscription;
  currencies: string[] = ['Bitcoin', 'Tether', 'Ethereum'];
  currentTheme: string;
  earningLiveUpdateCardData: LiveUpdateChart;
  liveUpdateChartData: { value: [string, number] }[];

  constructor(private themeService: NbThemeService,
              private earningService: EarningData,
              private productInfoService:InvoiceDetailsService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
    this.getEarningCardData(this.selectedCurrency);

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

     this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      this.productInfos=[];
       item.forEach(element => {
         var y = element.payload.toJSON();
         y["key"] = element.key;
 
        // var d=new Date(y["date"]);
      //   y["date"]=d;
       this.productInfos.push(y);
       });
      console.log(this.productInfos);


      // this.productInfos.forEach(f=>{

      //   f.entryDate=f.entryDate.substring(3);
        
      // });

      let filteredProducts = (todayDate) ?
      this.productInfos.filter(p => p.entryDate.toLowerCase()==
      todayDate.toLowerCase()) :
       this.productInfos;    
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
 
  
       console.log(result[0].PaidAmount);
       this.dailyIncome=result[0].PaidAmount;
      });

  }

  changeCurrency(currency) {
    if (this.selectedCurrency !== currency) {
      this.selectedCurrency = currency;

      this.getEarningCardData(this.selectedCurrency);
    }
  }

  private getEarningCardData(currency) {
    this.earningService.getEarningCardData(currency)
      .pipe(takeWhile(() => this.alive))
      .subscribe((earningLiveUpdateCardData: LiveUpdateChart) => {
        this.earningLiveUpdateCardData = earningLiveUpdateCardData;
        this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;

        this.startReceivingLiveData(currency);
      });
  }

  startReceivingLiveData(currency) {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(200)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.earningService.getEarningLiveUpdateCardData(currency)),
      )
      .subscribe((liveUpdateChartData: any[]) => {
        this.liveUpdateChartData = [...liveUpdateChartData];
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
