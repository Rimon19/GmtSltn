import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CurrencyConversionRateService } from '../../../../@core/mock/library/currency-conversion-rate.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-add-currency-conversion-rate',
  templateUrl: './add-currency-conversion-rate.component.html',
  styleUrls: ['./add-currency-conversion-rate.component.scss']
})
export class AddCurrencyConversionRateComponent implements OnInit {

  Tostr=new Tostr();
  constructor(
    public currencyConversionRateService:CurrencyConversionRateService,
    private router:Router,
    private dateResizeService:DateResizeService,
    private toastrService:NbToastrService,
    public dropdownValueService:DropdownValueService
    ) { }

  ngOnInit() {
    this.resetFormForCurrencyConversionRate();
    this.dropdownValueService.getCurrency();
  }
  resetFormForCurrencyConversionRate(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.currencyConversionRateService.currencyConversionRate = {
      id: 0,
      currency:'',
      conversionRate:0,
      marketingRate:0,
      date:'',
    }
  }
  // currency: any = [
  //   // { btn: 'Select', val: 'Select' },
  //     { btn: 'USD', val: 'USD' },
  //     { btn: 'EURO', val:'EURO' },
  //     { btn: 'CHF', val:'CHF' },
  //     { btn: 'SGD', val:'SGD' },
  //     { btn: 'Pound', val:'Pound' },
  //     { btn: 'YEN', val:'YEN' }
  //   ]
   
    onSubmit(form:NgForm){
      form.value.date= this.dateResizeService.dateResize(form.value.date);
      this.currencyConversionRateService.addCurrencyConversionRate(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/currency-conversion-rate"]);
      })
    } 

    backHomePage(){
      this.router.navigate(['/pages/currency-conversion-rate']);
    }

}
