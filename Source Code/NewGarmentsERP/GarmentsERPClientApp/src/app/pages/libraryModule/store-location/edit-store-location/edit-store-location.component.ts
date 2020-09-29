import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { ItemCategoryService } from '../../../../@core/mock/library/item-category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { StoreLocationService } from '../../../../@core/mock/library/store-location.service';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'ngx-edit-store-location',
  templateUrl: './edit-store-location.component.html',
  styleUrls: ['./edit-store-location.component.scss']
})
export class EditStoreLocationComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr();
  ItemCategorydropdownSettings:IDropdownSettings;
  itemCategorydropdownList=[];
  itemCategoryselectedItems = [];
  constructor(
    private itemCategoryService:ItemCategoryService,
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    public storeLocationService:StoreLocationService,
  ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.storeLocationService.getStoreLocation().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.storeLocationService.storeLocation=items;

     
   if(items.itemCategoryId!=""){
    this.itemCategoryService.getItemCategory().subscribe(data=>{
         let itemCategoryId= items.itemCategoryId.split(',');
         console.log(itemCategoryId)
   let array=[];
   itemCategoryId.forEach(ele => {
           let obj= data.find(f=>f.id==parseInt(ele));
           console.log(obj);
         array.push(obj);
           
         });
         this.itemCategoryselectedItems=array;
        
   });
}


   });
  }
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




//   update(storeLocation){

//     console.log(storeLocation);
//     let itemCategory='';
//     storeLocation.itemCategoryselectedItems.forEach(e => {
//        itemCategory +=e.id+",";
//     });
//     console.log('test',itemCategory);
//     let finallyitemCategoryselectedItems= itemCategory.slice(0, -1);
//     console.log('test1',finallyitemCategoryselectedItems);
//     storeLocation.itemCategoryId=finallyitemCategoryselectedItems;

//     this.storeLocationService.updateStoreLocation(storeLocation).subscribe(s=>{
//       this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
//       this.router.navigate(['/pages/store-location']);
//     },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
// }
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
  form.value.id=this.editedId;
  this.storeLocationService.updateStoreLocation(form.value).subscribe(res=>{
     console.log(res);       
    this.Tostr.showToast('primary','', 'update Successfully', '',this.toastrService);
   this.router.navigate(["/pages/store-location"]);

  });

}
backTo(){
  this.router.navigate(['/pages/store-location']);
}


}
