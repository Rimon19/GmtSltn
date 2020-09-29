import { Component, OnInit } from '@angular/core';
import { buyer } from '../../../../@core/data/buyer';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ProductSubDepartmentService } from '../../../../@core/mock/library/product-sub-department.service';
import { NgForm } from '@angular/forms';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';

@Component({
  selector: 'ngx-edit-product-sub-department',
  templateUrl: './edit-product-sub-department.component.html',
  styleUrls: ['./edit-product-sub-department.component.scss']
})
export class EditProductSubDepartmentComponent implements OnInit {
  editedId:any;
  public buyerListItems:BuyerProfile[] = [];
  Tostr=new Tostr();
  constructor(
    private buyerProfileService:BuyerProfileService,
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    public productSubDepartmentService:ProductSubDepartmentService,
  ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.productSubDepartmentService.getProductSubDepartment().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.productSubDepartmentService.productSubDepartment=items;
  })
   }

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
  form.value.id=this.editedId;
  this.productSubDepartmentService.updateProductSubDepartment(form.value).subscribe(s=>{
    this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
    this.router.navigate(['/pages/product-sub-department']);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}
backToaproductSubDepartmentHomePage(){
this.router.navigate(['/pages/product-sub-department']);
}
}
