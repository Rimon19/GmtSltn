import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { BankInfoService } from '../../../../@core/mock/library/bank-info.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { AccountInfoService } from '../../../../@core/mock/library/account-info.service';
import { CompanyService } from '../../../../@core/mock/company.service';

@Component({
  selector: 'ngx-edit-bank-info',
  templateUrl: './edit-bank-info.component.html',
  styleUrls: ['./edit-bank-info.component.scss']
})
export class EditBankInfoComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr()
  bankAccountForms: FormArray = this.formBuilder.array([]);

  company:any[] = [];
  bankName:any[] = [];
  currency:any[] = [];
  accountType:any[] = [];
  public count=0;
  notification = null;

  AccountNo :any='';
  accountList:any[]=[];

  constructor( private route:ActivatedRoute, 
     public bankInfoService:  BankInfoService,
     private router:Router,
    private toastrService:NbToastrService,
    private formBuilder: FormBuilder,
    private staticFeaturesService:StaticFeaturesService,
    private CompanyService:CompanyService,
    private accountInfoService:AccountInfoService,
    
    ) { this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.bankInfoService.getAll().subscribe(item=>{
    let items=  item.find(f=>f.id==this.editedId);
    this.bankInfoService.bankInfo=items;
    })}

  ngOnInit() {
    this.resetFormForBankInfo();
    this.companyDDL();
    this.currencyDDL();
    this.accountTypeDDL();
    this.bankNameDDL();
    this.accountDDL();
   
   // this.refreshList();
  } 

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
      status:'',
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

update(journalSetupEdit){
  console.log(journalSetupEdit);
  this.bankInfoService.update(journalSetupEdit).subscribe(s=>{
  this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
  this.router.navigate(['/pages/BankInfo-list']);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
} 
backHomePage(){
this.router.navigate(['/pages/BankInfo-list']);
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

accountDDL(){
  this.accountInfoService.getAll().subscribe(data=>{
    let accountNo = data.filter(f=>f.bankInfoId==this.editedId)
    this.accountList=accountNo;
    
  })
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

searchAccountByAccountNo(AccountNo){
     this.count=0;
  
this.accountInfoService.getAll().subscribe(
  accountData => {
         let accountDataList = accountData.filter(f=>f.id == AccountNo)
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
// this.accountInfoService.getAll().subscribe(
//   res => {
//     if (res == [])
//       this.addBankAccountForm(); 
//     else {
//       //generate formarray as per the data received from BankAccont table
//       this.bankAccountForms= this.formBuilder.array([]);
//       (res as []).forEach((accountInfo: any) => {
       
//         this.count=this.count+1;
//         this.bankAccountForms.push(this.formBuilder.group({
//           id: [accountInfo.id],
//           bankInfoId: [accountInfo.bankInfoId,Validators.required],
//           accountTypeId: [accountInfo.accountTypeId, Validators.required],
//           accountNo: [accountInfo.accountNo, Validators.required],
//           currencyId: [accountInfo.currencyId, Validators.required],
//           loanLimit: [accountInfo.loanLimit],
//           limitType: [accountInfo.limitType],
//           companyId: [accountInfo.companyId],
//           chartOfAccount: [accountInfo.chartOfAccount],
//           status: [accountInfo.status]
          
//         }));
//       });
//     }
//   }
// );
// } 
addBankAccountForm() {
this.bankAccountForms= this.formBuilder.array([]);
this.count=0;
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

}
