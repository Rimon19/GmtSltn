import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { BankInfoService } from '../../../../@core/mock/library/bank-info.service';


@Component({
  selector: 'ngx-edit-bank-info',
  templateUrl: './edit-bank-info.component.html',
  styleUrls: ['./edit-bank-info.component.scss']
})
export class EditBankInfoComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr()

  constructor( private route:ActivatedRoute, 
     public bankInfoService:  BankInfoService,
     private router:Router,
    private toastrService:NbToastrService) { this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.bankInfoService.getAll().subscribe(item=>{
    let items=  item.find(f=>f.id==this.editedId);
    this.bankInfoService.bankInfo=items;
    })}

  ngOnInit() {
    this.resetFormForBankInfo();
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

Active_Inactive: any = [
  
  { btn: 'Active', val: 'Active' },
  { btn: 'Inactive', val: 'Inactive' }
]

}
