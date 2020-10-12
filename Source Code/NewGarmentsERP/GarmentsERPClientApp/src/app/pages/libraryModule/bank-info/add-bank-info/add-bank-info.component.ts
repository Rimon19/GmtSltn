import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { BankInfoService } from '../../../../@core/mock/library/bank-info.service';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { CompanyService } from '../../../../@core/mock/company.service';
import { AccountInfoService } from '../../../../@core/mock/library/account-info.service';


@Component({
  selector: 'ngx-add-bank-info',
  templateUrl: './add-bank-info.component.html',
  styleUrls: ['./add-bank-info.component.scss']
})
export class AddBankInfoComponent implements OnInit {
  bankAccountForms: FormArray = this.formBuilder.array([]);
  Tostr=new Tostr()
  company:any[] = [];
  bankName:any[] = [];
  currency:any[] = [];
  accountType:any[] = [];
  public count=0;
  notification = null;

  BankId :any[]=[];

  constructor(private formBuilder: FormBuilder,
    public bankInfoService:BankInfoService,
    private staticFeaturesService:StaticFeaturesService,
    private CompanyService:CompanyService,
    private accountInfoService:AccountInfoService,
    private router:Router,
    private toastrService:NbToastrService) { }
 
    BankInfo:boolean=false;
    AccountInfo:boolean=false;
   

    BankInfoFunction(){
        this.BankInfo=true;
        this.AccountInfo=false;
       
    }

    AccountInfoFunction(){
        this.AccountInfo=true;
        this.BankInfo=false;
        
    }

   

  ngOnInit() {
    this.resetFormForBankInfo();
    this.companyDDL();
    this.currencyDDL();
    this.accountTypeDDL();
    this.bankNameDDL();
   
    //this.refreshList();
 
  }

  // for Bankinfo
  resetFormForBankInfo(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.bankInfoService.bankInfo= {
      id : 0,
      bankName : '',
      branchName: '',
      bankCode: '', 
      address : '',
      email : '',
      swiftCode : '',
      webSite : '',
      contactPerson : '',
      phoneNo : '',
      lienBank : '',
      issuingBank : '',
      salaryBank : '',
      advisingBank : '',
      remarks : '',
      status :'',
      totalAccount:0
         }
    
     }


     lienBankCheckValue(event: any){
      console.log(event);
      this.bankInfoService.bankInfo.lienBank=event;
      
   }
   issuingBankCheckValue(event: any){
    console.log(event);
    this.bankInfoService.bankInfo.issuingBank=event;
    
 }
 salaryBankCheckValue(event: any){
  console.log(event);
  this.bankInfoService.bankInfo.salaryBank=event;
  
}
advisingBankCheckValue(event: any){
  console.log(event);
  this.bankInfoService.bankInfo.advisingBank=event;
  
}
     
onSubmit(form:NgForm){
  console.log(form);

  this.bankInfoService.add(form.value).subscribe(res=>{
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
   this.router.navigate(["/pages/BankInfo-list"]);
  })  
}

// for accountinfo

Active_Inactive: any = [
  
    { btn: 'Active', val: 'Active' },
    { btn: 'Inactive', val: 'Inactive' }
  ]

  limitType: any = [
  
    { btn: 'Percent', val: 'Percent' },
    { btn: 'Fixed', val: 'Fixed' }
  ]

  companyDDL(){
    this.CompanyService.getAllCompany().
    subscribe(data=>{
    this.company=data;
    console.log('company list',this.company)
    });
} 

bankNameDDL(){
  this.bankInfoService.getAll().
  subscribe(data=>{
  this.bankName=data;
  console.log('bankName list',this.bankName)
  });
} 

currencyDDL(){
  this.staticFeaturesService.getAllDiscountMethod().
  subscribe(data=>{
  this.currency=data;
  console.log('currency list',this.currency)
  });
} 


accountTypeDDL(){
  this.staticFeaturesService.getAccountTypes().
  subscribe(data=>{
  this.accountType=data;
  console.log('accountType list',this.accountType)
  });
} 

searchAccountByBankId(BankId){
  this.accountInfoService.getAll().subscribe(
    accountData => {
           let accountDataList = accountData.filter(f=>f.bankInfoId == BankId)
           this.bankAccountForms= this.formBuilder.array([]);
           (accountDataList as []).forEach((accountInfo: any) => {
            
             this.count=this.count+1;
             this.bankAccountForms.push(this.formBuilder.group({
               id: [accountInfo.id],
               bankInfoId: [accountInfo.bankInfoId,Validators.required],
               accountTypeId: [accountInfo.accountTypeId, Validators.required],
               accountNo: [accountInfo.accountNo, Validators.required],
               currencyId: [accountInfo.currencyId, Validators.required],
               loanLimit: [accountInfo.loanLimit],
               limitType: [accountInfo.limitType],
               companyId: [accountInfo.companyId],
               chartOfAccount: [accountInfo.chartOfAccount],
               status: [accountInfo.status]
               
             }));
           });
    }
  )
}


// refreshList(){
//   this.accountInfoService.getAll().subscribe(
//     res => {
//       if (res == [])
//         this.addBankAccountForm(); 
//       else {
//         //generate formarray as per the data received from BankAccont table
//         this.bankAccountForms= this.formBuilder.array([]);
//         (res as []).forEach((accountInfo: any) => {
         
//           this.count=this.count+1;
//           this.bankAccountForms.push(this.formBuilder.group({
//             id: [accountInfo.id],
//             bankInfoId: [accountInfo.bankInfoId,Validators.required],
//             accountTypeId: [accountInfo.accountTypeId, Validators.required],
//             accountNo: [accountInfo.accountNo, Validators.required],
//             currencyId: [accountInfo.currencyId, Validators.required],
//             loanLimit: [accountInfo.loanLimit],
//             limitType: [accountInfo.limitType],
//             companyId: [accountInfo.companyId],
//             chartOfAccount: [accountInfo.chartOfAccount],
//             status: [accountInfo.status]
            
//           }));
//         });
//       }
//     }
//   );
// } 
addBankAccountForm() {
  //this.bankAccountForms= this.formBuilder.array([]);
  //this.count=0;
  this.count=this.count+1;   
  this.bankAccountForms.push(this.formBuilder.group({
    id: [0],
    bankInfoId: [0, Validators.required],
    accountTypeId: [0, Validators.required],
    accountNo: ['', Validators.required],
    currencyId: [0, Validators.required],
    loanLimit:[0],
    limitType:[''],
    companyId:[''],
    chartOfAccount:[''],
    status:['']
  }));
}

recordSubmit(bankAccountForms) {
  console.log(bankAccountForms);
  bankAccountForms.forEach(fg => {
    if (fg.id == 0)
    this.accountInfoService.add(fg).subscribe(
      (res: any) => {
       // fg.patchValue({ id: res.id });
        this.showNotification('insert');
        //this.refreshList();
         this.bankAccountForms= this.formBuilder.array([]);
       

      });
      
  else
    this.accountInfoService.update(fg).subscribe(
      (res: any) => {
        this.showNotification('update');
       
      });
  });
  
}

onDelete(id, i) {
  this.count=this.count-1;
  if (id == 0)
    this.bankAccountForms.removeAt(i);
  else if (confirm('Are you sure to delete this record ?'))
    this.accountInfoService.delete(id).subscribe(
      res => {
        this.bankAccountForms.removeAt(i);
        this.showNotification('delete');
      });
}

showNotification(category) {
  switch (category) {
    case 'insert':
      this.notification = { class: 'text-success', message: 'saved successfully !' };
      break;
    case 'update':
      this.notification = { class: 'text-primary', message: 'updated successfully !' };
      break;
    case 'delete':
      this.notification = { class: 'text-danger', message: 'deleted successfully !' };
      break;
  
    default:
      break;
  }
  setTimeout(() => {
    this.notification = null;
  }, 3000);
  }

back(){
  this.router.navigate(["/pages/BankInfo-create"]);
}

backHomePage(){
  this.router.navigate(['/pages/BankInfo-list']);
  }

}
