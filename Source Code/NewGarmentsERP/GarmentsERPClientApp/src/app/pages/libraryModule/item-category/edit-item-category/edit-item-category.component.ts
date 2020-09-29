import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCategoryService } from '../../../../@core/mock/library/item-category.service';
import { ItemCategory } from '../../../../@core/data/Library-Modul-model/item-category';
import { NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';

@Component({
  selector: 'ngx-edit-item-category',
  templateUrl: './edit-item-category.component.html',
  styleUrls: ['./edit-item-category.component.scss']
})
export class EditItemCategoryComponent implements OnInit {
  editedId:any;
  itemCategory:ItemCategory;
  Tostr=new Tostr();
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private toastrService:NbToastrService,
    public itemCategoryService:ItemCategoryService
  ) { 

    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.itemCategoryService.getItemCategory().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.itemCategoryService.itemCategory=items;
  })

}
ngOnInit() {
  this.resetFormItemCategoryInfo();
}
resetFormItemCategoryInfo(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.itemCategoryService.itemCategory = {
    id:0,
    itemCategoryName:'',
    status:''
  }
}
onSubmit(form:NgForm){
 form.value.id=this.editedId;
 this.itemCategoryService.updateItemCategory(form.value).subscribe(s=>{
   this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
   this.router.navigate(['/pages/item-category']);
 },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
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
