import { Component, OnInit } from '@angular/core';
import { FinancialParameterSetupService } from '../../../../@core/mock/library/financial-parameter-setup.service';
import { NgForm } from '@angular/forms';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-financial-parameter-setup',
  templateUrl: './add-financial-parameter-setup.component.html',
  styleUrls: ['./add-financial-parameter-setup.component.scss']
})
export class AddFinancialParameterSetupComponent implements OnInit {
  Tostr=new Tostr()
  constructor(
    public financialParameterSetupService:FinancialParameterSetupService,
    private dateResizeService:DateResizeService,
    private toastrService:NbToastrService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.resetFormForFinancialParameterSetup();
  }
  resetFormForFinancialParameterSetup(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.financialParameterSetupService.financialParameterSetup = {
      id:0,
      companyName:'',
      applyingPeriod:'',
      to: '',
      bepcm: 0,
      askingProfit: 0,
      askingCM: 0,
      noOfFactoryMachine: 0,
      monthlyCMExpense: 0,
      workingHour: 0,
      costPerMinute: 0,
      actualCM: 0,
      askingAVGRate: 0,
      status:'',
      maxProfi: 0,
      depreciationAndAmortization: 0,
      interestExpenses: 0,
      incomeTax: 0,
      operatingExpenses: 0
      
    }
    
   } 
  company: any = [
    { btn: 'MEEK KHIT LIMITED', val: 'MEEK KHIT LIMITED' }
  ]
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
    onSubmit(form:NgForm){
      console.log(form);
      form.value.applyingPeriod=this.dateResizeService.dateResize(form.value.applyingPeriod);
      form.value.to=this.dateResizeService.dateResize(form.value.to);
      this.financialParameterSetupService.addFinancialParameterSetup(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/financial-parameter-setup"]);
      })
    }
    backToaFinancialParameterSetupHomePage(){
      this.router.navigate(['/pages/financial-parameter-setup']);
    }
}
