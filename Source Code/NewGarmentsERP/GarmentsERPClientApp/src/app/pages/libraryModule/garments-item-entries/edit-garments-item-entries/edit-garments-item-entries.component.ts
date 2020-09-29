import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GarmentsItemEntriesService } from '../../../../@core/mock/library/garments-item-entries.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { Tostr } from '../../../../@core/data/tostr.model';

@Component({
  selector: 'ngx-edit-garments-item-entries',
  templateUrl: './edit-garments-item-entries.component.html',
  styleUrls: ['./edit-garments-item-entries.component.scss']
})
export class EditGarmentsItemEntriesComponent implements OnInit {

  public ProductTypeList:any[]=[];
  public ProductCategoryList:any[]=[];
  public editedId:any;
  Tostr=new Tostr()
    constructor(
      private staticFeaturesService:StaticFeaturesService,
      private toastrService:NbToastrService,
      private router:Router,
      private route:ActivatedRoute,
      public garmentsItemEntriesService:GarmentsItemEntriesService,
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.garmentsItemEntriesService.getGarmentsItemEntries().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.garmentsItemEntriesService.garmentsItemEntries=items;
    })

     }
  
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
      form.value.id=this.editedId;
      this.garmentsItemEntriesService.updateGarmentsItemEntries(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/garments-item-entries']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backToaGarmentsitementriesHomePage(){
    this.router.navigate(['/pages/garments-item-entries']);
  }
}
