import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CurrencyConversionRateService } from '../../../../@core/mock/library/currency-conversion-rate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-currency-conversion-rate',
  templateUrl: './edit-currency-conversion-rate.component.html',
  styleUrls: ['./edit-currency-conversion-rate.component.scss']
})
export class EditCurrencyConversionRateComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr();
  constructor(
    public currencyConversionRateService:CurrencyConversionRateService,
    private router:Router,
    private route:ActivatedRoute,
    private dateResizeService:DateResizeService,
    private toastrService:NbToastrService,
    public dropdownValueService:DropdownValueService
    ) {

      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.currencyConversionRateService.getCurrencyConversionRate().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.currencyConversionRateService.currencyConversionRate=items;
    })

     }

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
      form.value.id=this.editedId;
      form.value.date= this.dateResizeService.dateResize(form.value.date);
      this.currencyConversionRateService.updateCurrencyConversionRate(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/currency-conversion-rate']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backHomePage(){
    this.router.navigate(['/pages/currency-conversion-rate']);
  }

}
