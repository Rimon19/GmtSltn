import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { EmailAddressSetupService } from '../../../../@core/mock/library/email-address-setup.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-edit-email-address-setup',
  templateUrl: './edit-email-address-setup.component.html',
  styleUrls: ['./edit-email-address-setup.component.scss']
})
export class EditEmailAddressSetupComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr();
  constructor(
    public emailAddressSetupService:EmailAddressSetupService,
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.emailAddressSetupService.getAllEmailAddressSetup().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.emailAddressSetupService.emailAddressSetup=items;
    })


     }

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
   
  

    update(emailAddressSetup){
      console.log(emailAddressSetup);
      this.emailAddressSetupService.updateEmailAddressSetup(emailAddressSetup).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/email-address-setup']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backHomePage(){
    this.router.navigate(['/pages/email-address-setup']);
  }


}
