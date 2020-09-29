import { Component, OnInit } from '@angular/core';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ItemCategoryService } from '../../../../@core/mock/library/item-category.service';
import { StoreLocationService } from '../../../../@core/mock/library/store-location.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-add-store-location',
  templateUrl: './add-store-location.component.html',
  styleUrls: ['./add-store-location.component.scss']
})
export class AddStoreLocationComponent implements OnInit {
  Tostr=new Tostr();
  ItemCategorydropdownSettings:IDropdownSettings;
  itemCategorydropdownList=[];
  itemCategoryselectedItems = [];
  constructor(
    private itemCategoryService:ItemCategoryService,
    private router:Router,
    private toastrService:NbToastrService,
    public storeLocationService:StoreLocationService,
  ) { }

  ngOnInit() {
    this.itemcategoryDDL();
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.storeLocationService.storeLocation = {
      id:0,
      storeName:'',
      companyName:'',
      location:'',
      itemCategoryId:'',
      status:''
       
    }
    this.ItemCategorydropdownSettings= {
      singleSelection: false,
      idField:'id',
      textField:'itemCategoryName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  itemcategoryDDL(){
    this.itemCategoryService.getItemCategory().subscribe(data=>{
      this.itemCategorydropdownList=data;
      console.log(this.itemCategorydropdownList);
    });
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val:'Inactive' },
      { btn: 'Cancelled', val:'Cancelled' }
    ]
  company: any = [
    { btn: 'MEEK KHIT LIMITED', val: 'MEEK KHIT LIMITED' }
  ]
  locations: any = [
    { btn:'923,928 &930 Vogra,Gagipur,Bangladesh', val: '923,928 &930 Vogra,Gagipur,Bangladesh' },
    { btn: 'South Salna,Gazipur', val: 'South Salna,Gazipur' }
  ]


  onSubmit(form:NgForm){
    console.log(form.value);
 
    
    let itemCategory='';

    form.value.itemCategoryselectedItems.forEach(e => {
       itemCategory +=e.id+",";
    });
    console.log('test',itemCategory);
    let finallyitemCategoryselectedItems= itemCategory.slice(0, -1);
    console.log('test1',finallyitemCategoryselectedItems);
    form.value.itemCategoryId=finallyitemCategoryselectedItems;
    this.storeLocationService.addStoreLocation(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
     this.router.navigate(["/pages/store-location"]);
  
    });
  
  }


}
