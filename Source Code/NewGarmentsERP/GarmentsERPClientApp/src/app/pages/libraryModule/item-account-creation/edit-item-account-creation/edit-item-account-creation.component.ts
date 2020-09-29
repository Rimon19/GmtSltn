import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
//import { CountryLocationMappingService } from '../../../../@core/mock/library/country-location-mapping.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
//import { DepoLocationMappingService } from '../../../../@core/mock/library/depo-location-mapping.service';
import { CountryLocationMapping } from '../../../../@core/data/Library-Modul-model/country-location-mapping';
import { ItemAccountCreationService } from '../../../../@core/mock/library/item-account-creation.service';
import { CompanyService } from '../../../../@core/mock/company.service';
import { company } from '../../../../@core/data/company';
import { ItemCategoryService } from '../../../../@core/mock/library/item-category.service';
import { ItemCategory } from '../../../../@core/data/Library-Modul-model/item-category';
import { ItemGroupService } from '../../../../@core/mock/library/item-group.service';
import { ItemGroup } from '../../../../@core/data/Library-Modul-model/ItemGroup';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-edit-item-account-creation',
  templateUrl: './edit-item-account-creation.component.html',
  styleUrls: ['./edit-item-account-creation.component.scss']
})
export class EditItemAccountCreationComponent implements OnInit {
  editedId;
  public countryList:CountryInfo[]=[];
  public companyList:company[]=[];
  public itemCategoryList:ItemCategory[]=[];
  public itemGroupList:ItemGroup[]=[];
  public uomList:any[]=[];
  Tostr=new Tostr();
  constructor(
  private countryService:CountryService,
  private router:Router,
  private toastrService:NbToastrService,
  public itemAccountCreationService:ItemAccountCreationService,
  private companyService:CompanyService,
  private itemCategoryService:ItemCategoryService,
  private itemGroupService:ItemGroupService,
  private staticFeaturesService:StaticFeaturesService,
  private route:ActivatedRoute
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.itemAccountCreationService.getAll().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.itemAccountCreationService.itemAccountCreation =items;
      });
     }

  ngOnInit() {
    this.companyDDL();
    this.itemCategoryDDL();
    this.itemGroupDDL();
    this.uomDDL();
    this.countryDDL();   
    this.resetForm();
  }

    companyDDL(){
      this.companyService.getAllCompany().subscribe(data=>{
        this.companyList=data;
        
      })
    }
  itemCategoryDDL(){
    this.itemCategoryService.getItemCategory().subscribe(data=>{
      this.itemCategoryList=data;
    });
  }
    itemGroupDDL(){
      this.itemGroupService.getAll().subscribe(data=>{
        this.itemGroupList=data;
      });
    }
    uomDDL(){
     this.staticFeaturesService.getAllUOM().subscribe(data=>{
       this.uomList=data;
       console.log(this.uomList);
     })
    }
  countryDDL(){
    this.countryService.getAllCountry().
    subscribe(data=>{
    this.countryList=data;
     
    });
   } 


   resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.itemAccountCreationService.itemAccountCreation = {
      id: 0,
      companyId:0,
    itemCategoryId:0,
    itemGroupId:0,
    subGroupCode:'',
    subGroupName:'',
    itemCode:'',
    itemSize:'',
    itemDescription:'',
    reOrderLabel:'',
    minLabel:'',
    maxLabel:'',
    orderUom:'',
    consUom:'',
    itemAccount:'',
    status:'',
    brand:'',
    originOrCountryId:0,
    model:''
    }
    
   }
   onSubmit(form:NgForm){
    console.log(form);
    form.value.id=this.editedId;
    this.itemAccountCreationService.update(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      this.router.navigate(["/pages/item-account-creation"]);
   this.resetForm();
    })
  
  }
  backTo(){
    this.router.navigate(['/pages/item-account-creation']);
  }



}
