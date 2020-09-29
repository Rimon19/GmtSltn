import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { CountryLocationMappingService } from '../../../../@core/mock/library/country-location-mapping.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { DepoLocationMappingService } from '../../../../@core/mock/library/depo-location-mapping.service';
import { CountryLocationMapping } from '../../../../@core/data/Library-Modul-model/country-location-mapping';
import { ItemCategoryService } from '../../../../@core/mock/library/item-category.service';
import { ItemGroupService } from '../../../../@core/mock/library/item-group.service';
import { ItemCategory } from '../../../../@core/data/Library-Modul-model/item-category';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-edit-item-group',
  templateUrl: './edit-item-group.component.html',
  styleUrls: ['./edit-item-group.component.scss']
})
export class EditItemGroupComponent implements OnInit {

  public itemCategoryList:ItemCategory[]=[];
  public uomList:any[]=[];
  
  Tostr=new Tostr();
  editedId;
  constructor(
  private countryService:CountryService,
  public itemGroupService:ItemGroupService,
  private router:Router,
  private toastrService:NbToastrService,
  private itemCategoryService:ItemCategoryService,
  private staticFeatureService:StaticFeaturesService,

    private route:ActivatedRoute
   ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.itemGroupService.getAll().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.itemGroupService.itemGroup =items;
    });
   }

  ngOnInit() {
   
    this.itemCategoryDDL();
    this. uomDDL();
    this.resetForm();
  }

  itemCategoryDDL(){
    this.itemCategoryService.getItemCategory().
    subscribe(data=>{
    this.itemCategoryList=data;
        console.log(this.itemCategoryList);
    });
   } 
 uomDDL(){
   this.staticFeatureService.getAllUOM().subscribe(data=>{
     this.uomList=data;
     console.log(this.uomList);
   })
 }
   
 
   resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.itemGroupService.itemGroup = {
      id:0,
    itemCategoryId:0,
    groupCode:'',
    itemGroupName:'',
    itemType:'',
    orderUom:'',
    consUom:'',
    convFactor:0,
    fancyItem:'',
    calParameter:'',
    status:''
    }
    
   }
   onSubmit(form:NgForm){
    console.log(form);
    form.value.id=this.editedId;
    this.itemGroupService.update(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
     this.router.navigate(["/pages/item-group"]);
   this.resetForm();
    })
  
  }
  backTo(){
    this.router.navigate(['/pages/item-group']);
  }





}
