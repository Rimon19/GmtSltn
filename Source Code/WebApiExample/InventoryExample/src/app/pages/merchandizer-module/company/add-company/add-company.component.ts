import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../../../../@core/mock/company.service';

@Component({
  selector: 'ngx-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  details;
  constructor(protected ref: NbDialogRef<AddCompanyComponent>,
    private companyService: CompanyService
    ) { }
  dismiss() {
    this.ref.close();
  }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.companyService.companyFormData = {
      compId:0,
      companyName:'',
      details:''
    }
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.companyService.addCompany(form.value).subscribe(data=>{
      
    });
 }
}