import { Component, OnInit } from '@angular/core';
import { GarmentsItemEntriesService } from '../../../../@core/mock/library/garments-item-entries.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-add-garments-item-entries',
  templateUrl: './add-garments-item-entries.component.html',
  styleUrls: ['./add-garments-item-entries.component.scss']
})
export class AddGarmentsItemEntriesComponent implements OnInit {

  public ProductTypeList:any[]=[];
  public ProductCategoryList:any[]=[];
  Tostr=new Tostr()
    constructor(
      private staticFeaturesService:StaticFeaturesService,
      private toastrService:NbToastrService,
      private router:Router,
      public garmentsItemEntriesService:GarmentsItemEntriesService,
    ) { }
  
    ngOnInit() {
      this.productTypeDDL();
      this.productCategoryDDL();
      this.resetFormForGarmentsItemEntries();
    }  
    Active_Inactive: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Active', val: 'Active' },
        { btn: 'Inactive', val: 'Inactive' }
      ]
      productTypeDDL(){
      this.staticFeaturesService.getAllProductType().
      subscribe(data=>{
      this.ProductTypeList=data;
      console.log('ProductTypeList ',this.ProductTypeList);       
      });
     }
     productCategoryDDL(){
      this.staticFeaturesService.getAllProductCategory().
      subscribe(data=>{
      this.ProductCategoryList=data;
      console.log('ProductCategoryList ',this.ProductCategoryList);       
      });
     }
     resetFormForGarmentsItemEntries(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.garmentsItemEntriesService.garmentsItemEntries = {
        id:0,
        itemName:'',
        commercialName:'',
        productCategoryId:0,
        productTypeId:0,
        standardSMV:0,
        efficiency:0,
        status:'',
      }
      
     } 
     onSubmit(form:NgForm){
      console.log(form);
      this.garmentsItemEntriesService.addGarmentsItemEntries(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/garments-item-entries"]);
      })
    }
    backToaGarmentsitementriesHomePage(){
      this.router.navigate(['/pages/garments-item-entries']);
    }

}
