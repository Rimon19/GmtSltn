import { Component, OnInit } from '@angular/core';
import { ItemCategoryService } from '../../../../@core/mock/library/item-category.service';
import { NgForm, Form } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-item-category',
  templateUrl: './add-item-category.component.html',
  styleUrls: ['./add-item-category.component.scss']
})
export class AddItemCategoryComponent implements OnInit {
  Tostr=new Tostr();
  constructor(
    public itemCategoryService:ItemCategoryService,
    private toastrService:NbToastrService,
    private router:Router,
    
    
    ) { }

  ngOnInit() {
    this.resetFormForItemCategory();
  }
  resetFormForItemCategory(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.itemCategoryService.itemCategory = {
     id:0,
     itemCategoryName:'',
     status:''
      
    }
    
   }
   onSubmit(form:NgForm){
     console.log(form);
     this.itemCategoryService.addItemCategory(form.value).subscribe(res=>{
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      this.router.navigate(["/pages/item-category"]);
     })
   }

   backToitemCategoryHomePage(){
    this.router.navigate(['/pages/item-category']);
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
}
