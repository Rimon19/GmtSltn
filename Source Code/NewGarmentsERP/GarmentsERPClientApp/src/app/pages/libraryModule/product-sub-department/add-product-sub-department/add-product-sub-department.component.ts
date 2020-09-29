import { Component, OnInit } from '@angular/core';
import { buyer } from '../../../../@core/data/buyer';
import { NgForm } from '@angular/forms';
import { ProductSubDepartmentService } from '../../../../@core/mock/library/product-sub-department.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';

@Component({
  selector: 'ngx-add-product-sub-department',
  templateUrl: './add-product-sub-department.component.html',
  styleUrls: ['./add-product-sub-department.component.scss']
})
export class AddProductSubDepartmentComponent implements OnInit {
  public buyerListItems:BuyerProfile[] = [];
  Tostr=new Tostr();
  constructor(
    private buyerProfileService:BuyerProfileService,
    private router:Router,
    private toastrService:NbToastrService,
    public productSubDepartmentService:ProductSubDepartmentService,
  ) { }

  ngOnInit() {
    this.buyerDDL();
    this.resetFormForProductSubDepartment();
  }
  resetFormForProductSubDepartment(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.productSubDepartmentService.productSubDepartment = {
  id:0,
  subDepartmentName:'',
  departnemtName:'',
  buyerNameId:0
 
  
    }
    
     }
     departmentName: any = [
      { btn: 'Mens', val:'Mens'}
    ]
  buyerDDL(){
    this.buyerProfileService.getAll().
    subscribe(data=>{
    this.buyerListItems=data;
    console.log('buyer list',this.buyerListItems)
    });
}
onSubmit(form:NgForm){
  this.productSubDepartmentService.addProductSubDepartment(form.value).subscribe(res=>{
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
   this.router.navigate(["/pages/product-sub-department"]);
  })
}
backToaproductSubDepartmentHomePage(){
  this.router.navigate(['/pages/product-sub-department']);
  }
}
