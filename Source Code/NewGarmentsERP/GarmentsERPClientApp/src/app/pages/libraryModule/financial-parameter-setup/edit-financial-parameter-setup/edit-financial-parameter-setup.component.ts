import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { FinancialParameterSetupService } from '../../../../@core/mock/library/financial-parameter-setup.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-edit-financial-parameter-setup',
  templateUrl: './edit-financial-parameter-setup.component.html',
  styleUrls: ['./edit-financial-parameter-setup.component.scss']
})
export class EditFinancialParameterSetupComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr()
  constructor(
    public financialParameterSetupService:FinancialParameterSetupService,
    private dateResizeService:DateResizeService,
    private toastrService:NbToastrService,
    private route:ActivatedRoute,
    private router:Router,
  ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.financialParameterSetupService.getFinancialParameterSetup().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.financialParameterSetupService.financialParameterSetup=items;
  })

   }

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
      form.value.id=this.editedId;
      form.value.applyingPeriod=this.dateResizeService.dateResize(form.value.applyingPeriod);
      form.value.to=this.dateResizeService.dateResize(form.value.to);
      this.financialParameterSetupService.updateFinancialParameterSetup(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/financial-parameter-setup']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backToaFinancialParameterSetupHomePage(){
    this.router.navigate(['/pages/financial-parameter-setup']);
  }
}
