import { Component, OnInit, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NgForm, FormBuilder, FormArray } from '@angular/forms';

import { YarnCountDeterminationService } from '../../../../@core/mock/library/yarn-count-determination.service';
import { AccountingYearService } from '../../../../@core/mock/library/accounting-year.service';
import { CompanyService } from '../../../../@core/mock/company.service';
import { company } from '../../../../@core/data/company';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { AccountingYearSubInfoService } from '../../../../@core/mock/library/accounting-year-sub-info.service';

@Component({
  selector: 'ngx-add-accounting-year',
  templateUrl: './add-accounting-year.component.html',
  styleUrls: ['./add-accounting-year.component.scss']
})
export class AddAccountingYearComponent implements OnInit {

  Tostr=new Tostr();
  AccountingYearSubInfoForm: FormArray = this.fb.array([]);
  public count=0;
  public companyList:company[]=[];
  public yearList:any[]=[];
  public monthList:any[]=[];
  constructor(
  private router:Router,
  private toastrService:NbToastrService,
  public accountingYearService:AccountingYearService,
  private fb: FormBuilder,
  private companyService:CompanyService,
  private staticFeaturesService:StaticFeaturesService,
  private accountingYearSubInfoService:AccountingYearSubInfoService
    ) { }

  ngOnInit() {
   
    this.resetForm();
    this.companyDDL();
    this.yearDDL();
    this.monthDDL();
  }
companyDDL(){
  this.companyService.getAllCompany().subscribe(data=>{
    this.companyList=data;
  });
}

yearDDL(){
  this.staticFeaturesService.getAllYears().subscribe(data=>{
  this.yearList=data;
  });
}
monthDDL(){
  this.staticFeaturesService.getAllMonths().subscribe(data=>{
    this.monthList=data;
  });
}
   resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.accountingYearService.accountingYear = {
      id  :0,
    companyId:0,
    startingYear :0,
    currentYear :0,
    startingMonth :'',
    endingMonth :'',
    periodName :'',
    isActive :''
    }
    
   }

  
   resetSubForm() {
    this.count=this.count+1;
    this.AccountingYearSubInfoForm.push(this.fb.group({
      id  :0,
      startingDate :'',
      endingDate :'',
      period :'',
      locked :false,
      accountingYearId :0
    
    }));
  }

  onDeleteSubForm(AccountingYearSubInfoForm,k) {
    this.count=this.count-1;
    AccountingYearSubInfoForm.value.splice(k, 1);
    this.AccountingYearSubInfoForm= this.fb.array([]);
                  (AccountingYearSubInfoForm.value).forEach((item: any) => {
                    this.AccountingYearSubInfoForm.push(this.fb.group({
                      id  :item.id,
                      startingDate :item.startingDate,
                      endingDate :item.endingDate,
                      period :item.period,
                      locked :item.locked,
                      accountingYearId :item.accountingYearId
                  
                    }));
              });                       
    }

   onSubmit(form:NgForm,AccountingYearSubInfoForm){
    console.log(form);
    console.log(AccountingYearSubInfoForm);
    this.accountingYearService.add(form.value).subscribe(res=>{
      AccountingYearSubInfoForm.value.forEach(element => {
        element.accountingYearId= res.id;
        this.accountingYearSubInfoService.add(element).subscribe(data=>{
        });
      });

    });
    this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.router.navigate(["/pages/accounting-year"]);
    this.resetForm();
  }
  backTo(){
    this.router.navigate(['/pages/accounting-year']);
  }

}
