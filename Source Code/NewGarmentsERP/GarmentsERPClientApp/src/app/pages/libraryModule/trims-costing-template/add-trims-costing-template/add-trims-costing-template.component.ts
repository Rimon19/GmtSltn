import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { CountryLocationMappingService } from '../../../../@core/mock/library/country-location-mapping.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { DepoLocationMappingService } from '../../../../@core/mock/library/depo-location-mapping.service';
import { CountryLocationMapping } from '../../../../@core/data/Library-Modul-model/country-location-mapping';
import { TrimsCostingTemplateService } from '../../../../@core/mock/library/trims-costing-template.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { TrimsGroup } from '../../../../@core/data/Library-Modul-model/trims-groups';
import { TrimsGroupService } from '../../../../@core/mock/library/trims-group.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { SupplierProfileService } from '../../../../@core/mock/library/supplier-profile.service';
import { SupplierProfile } from '../../../../@core/data/Library-Modul-model/supplier-profile';
import { format } from 'url';
@Component({
  selector: 'ngx-add-trims-costing-template',
  templateUrl: './add-trims-costing-template.component.html',
  styleUrls: ['./add-trims-costing-template.component.scss']
})
export class AddTrimsCostingTemplateComponent implements OnInit {

  public trimsGroupList:TrimsGroup[]=[];
  public consUomList:any[]=[];
  public supplierList:SupplierProfile[]=[];
  Tostr=new Tostr();
  buyerdropdownList = [];
  buyerselectedItems = [];
  buyerdropdownSettings:IDropdownSettings;

  constructor(
  private countryService:CountryService,
  public trimsCostingTemplateService:TrimsCostingTemplateService,
  private router:Router,
  private toastrService:NbToastrService,
  private countryLocationMappingService:CountryLocationMappingService,
  private buyerProfileService:BuyerProfileService,
  private trimsGroupService:TrimsGroupService,
  private staticFeaturesService:StaticFeaturesService,
  private supplierProfileService:SupplierProfileService
    ) { }

  ngOnInit() {
  
    this.resetForm();
    this.buyerDDL();
    this.trimsGroupDDL();
    this.uomDDL();
    this.supplierDDL();
  }

 
buyerDDL(){
  this.buyerProfileService.getAll().subscribe(data=>{
    this.buyerdropdownList=data;
  })
}
  
trimsGroupDDL(){
this.trimsGroupService.getAll().subscribe(data=>{
  this.trimsGroupList=data;
})
}

uomDDL(){
  this.staticFeaturesService.getAllUOM().subscribe(data=>{
    this.consUomList=data;
  })
}
supplierDDL(){
  this.supplierProfileService.getAllSupplier().subscribe(data=>{
    this.supplierList=data;
  })
}
   resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.trimsCostingTemplateService.trimsCostingTemplate = {
      id   :0, 
      buyerId :'',
      userCode :'',
      trimsGroupId :'',
      itemDesc :'',
      consUom :'',
      brandOrSupRef :'',
      consOrDznGmts :0,
      purchaseRate :0,
      amount :0,
      approvalRequired :'',
      supplierId :'',
      status :''
    }
    this.buyerdropdownSettings= {
      singleSelection: false,
      idField: 'id',
      textField: 'contactName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
   }

   onChangeconsOrDznGmts(consOrDznGmts){
    
      if(this.trimsCostingTemplateService.trimsCostingTemplate.purchaseRate==0){
        this.trimsCostingTemplateService.trimsCostingTemplate.amount=consOrDznGmts;
      }else{
        this.trimsCostingTemplateService.trimsCostingTemplate.amount=this.trimsCostingTemplateService.trimsCostingTemplate.purchaseRate*consOrDznGmts;
      }
    
   }

   onChangeParchaseRate(purchaseRate){
    
    if(this.trimsCostingTemplateService.trimsCostingTemplate.consOrDznGmts==0){
      this.trimsCostingTemplateService.trimsCostingTemplate.amount=purchaseRate;
    }else{
      this.trimsCostingTemplateService.trimsCostingTemplate.amount=this.trimsCostingTemplateService.trimsCostingTemplate.consOrDznGmts*purchaseRate;
    }
  
 }


   onSubmit(form:NgForm){
     console.log(form);
    this.trimsCostingTemplateService.add(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      this.router.navigate(["/pages/trims-costing-template"]);
   this.resetForm();
    })
  
  }
  backTo(){
    this.router.navigate(['/pages/trims-costing-template']);
  }

}
