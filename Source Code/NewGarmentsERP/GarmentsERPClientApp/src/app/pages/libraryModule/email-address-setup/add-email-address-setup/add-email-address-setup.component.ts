import { Component, OnInit } from '@angular/core';
import { EmailAddressSetupService } from '../../../../@core/mock/library/email-address-setup.service';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';


@Component({
  selector: 'ngx-add-email-address-setup',
  templateUrl: './add-email-address-setup.component.html',
  styleUrls: ['./add-email-address-setup.component.scss']
})
export class AddEmailAddressSetupComponent implements OnInit {
  Tostr=new Tostr();
  constructor(
    public emailAddressSetupService:EmailAddressSetupService,
    private router:Router,
    private toastrService:NbToastrService,
    ) { }

  ngOnInit() {
    this.resetFormForEmailAddressSetup();
  }
  resetFormForEmailAddressSetup(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.emailAddressSetupService.emailAddressSetup = {
      id: 0,
      userType:'',
      recipientName: '',
      emailAddress:''
    }
  }
   usertype: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Management', val: 'Management' },
      { btn: 'Marketing', val:'Marketing' },
      { btn: 'General', val:'General' }
    ]
   
    onSubmit(form:NgForm){
      this.emailAddressSetupService.addEmailAddressSetup(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/email-address-setup"]);
      })
    } 
}
