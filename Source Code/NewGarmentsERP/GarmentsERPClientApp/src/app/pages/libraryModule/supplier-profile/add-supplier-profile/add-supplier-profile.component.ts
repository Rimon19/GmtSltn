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
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { PartyType } from '../../../../@core/data/Library-Modul-model/party-type';
import { PartyTypeService } from '../../../../@core/mock/library/party-type.service';
import { CompanyService } from '../../../../@core/mock/company.service';
import { company } from '../../../../@core/data/company';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SupplierProfileService } from '../../../../@core/mock/library/supplier-profile.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';


@Component({
  selector: 'ngx-add-supplier-profile',
  templateUrl: './add-supplier-profile.component.html',
  styleUrls: ['./add-supplier-profile.component.scss']
})
export class AddSupplierProfileComponent implements OnInit {

  public countryList:CountryInfo[]=[];
  public partyTypeList:PartyType[]=[];
  public companyList:company[]=[];
  public discountMethodList:any[]=[];
  public commercialInvoiceList:any[]=[];
  public sampleTypeList:any[]=[];
  public buyerProfileList:BuyerProfile[]=[];
  partyTypedropdownList = [];
  partyTypeselectedItems = [];
  partyTypedropdownSettings:IDropdownSettings;

  tagCompanydropdownList = [];
  tagCompanyselectedItems = [];
  tagCompanydropdownSettings:IDropdownSettings;

  //tagSampledropdownList = [];
  tagBuyerProfileSelectedItems = [];
  tagBuyerProfileSettings:IDropdownSettings;

  Tostr=new Tostr();
  constructor(
  private countryService:CountryService,
  public supplierProfileService:SupplierProfileService,
  private router:Router,
  private toastrService:NbToastrService,
  private partyTypeService:PartyTypeService,
  private companyService:CompanyService,
  private staticFeaturesService:StaticFeaturesService,
  private buyerProfileService:BuyerProfileService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService,
  private dialog:MatDialog,
 
    ) { }

  ngOnInit() {
    this.countryDDL();
    this.dropdownValueService.getCompany();
    this.discountMethodDDL();
    this.commercialInvoiceDDL();
    this.buyerProfileDDL();
    this.partyTypeDDL();
    this.companyDDL();
    this.resetForm();
  }


  countryDDL(){
    this.countryService.getAllCountry().
    subscribe(data=>{
    this.countryList=data;
     
    });
   } 
  partyTypeDDL(){
    this.partyTypeService.getPartyType().subscribe(data=>{
      this.partyTypedropdownList=data;
    });
  }
  companyDDL(){
    this.companyService.getAllCompany().subscribe(data=>{
      this.tagCompanydropdownList=data;
      
    });
  }
  supplierDDL(){
    //not implement yet please fulfil it
  }

  discountMethodDDL(){
    this.staticFeaturesService.getAllDiscountMethod().subscribe(data=>{
      this.discountMethodList=data;
      console.log(this.discountMethodList);
    });
  }
  marketingTeamDDL(){
   // not implement yet please fulfil it
  }
  commercialInvoiceDDL(){
   this.staticFeaturesService.getAllCommercialInvoice().subscribe(data=>{
     this.commercialInvoiceList=data;
     console.log(this.commercialInvoiceList);
   })
  }

  // sampleTypeDDL(){
  //   this.staticFeaturesService.getAllSampleType().subscribe(data=>{
  //     this.tagSampledropdownList=data;
  //     console.log(this.tagSampledropdownList);
  //   });
  // }

  buyerProfileDDL(){
   this.buyerProfileService.getAll().subscribe(data=>{
   this.buyerProfileList=data;
   })
  }
 
   resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.supplierProfileService.supplierProfile = {
           id :0,
          supplierName :'',
          shortName  :'',
          contactPerson :'',
          designation :'',
          contactNo :'',
          email :'',
          httpWww :'', 
          addressOne :'',
          addressTwo  :'',
          addressThree :'',
          addressFour :'',
          countryId :'',
          partyTypeIds  :'',
          tagCompany :'',
          linkToBuyer :'',
          creditLimitDays :0,
          crditLimitAmount  :0,
          crditLimitAmountType :'',
          discountMethod :'',
          secuirityDeducted :'',
          vatToBeDeducted :'',
          aitToBeDeducted  :'',
          remark :'',
          individual:'',
          status:'',
          supplierNature :'',
          image :'',
          tagBuyer :'',
          supplierRef :'',
       
    }
    
    this.partyTypedropdownSettings= {
      singleSelection: false,
      idField: 'id',
      textField: 'partyTypeName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.tagCompanydropdownSettings= {
      singleSelection: false,
      idField: 'compID',
      textField: 'company_Name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.tagBuyerProfileSettings= {
      singleSelection: false,
      idField: 'id',
      textField: 'contactName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
   }
  
  
   onSubmit(form:NgForm){
    let partyIds='';
    let companyIds='';
    let buyerProfileIds='';

    form.value.partyTypeselectedItems.forEach(e => {
      partyIds +=e.id+",";
    });
    
  let finallyPartySelectedIds=  partyIds.slice(0, -1);
  form.value.partyTypeIds=finallyPartySelectedIds;

  form.value.tagCompanyselectedItems.forEach(e => {
    companyIds +=e.compID+",";
  });
  
let finallyCompanySelectedIds=  companyIds.slice(0, -1);
form.value.tagCompany=finallyCompanySelectedIds;


form.value.tagBuyerProfileSelectedItems.forEach(e => {
  buyerProfileIds +=e.id+",";
});

let buyerProfileSelectedIds=  buyerProfileIds.slice(0, -1);
form.value.tagBuyer=buyerProfileSelectedIds;
console.log(form.value);

    this.supplierProfileService.add(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
     this.router.navigate(["/pages/supplier-profile"]);
   this.resetForm();
    });
  
  }
  backTo(){
    this.router.navigate(['/pages/supplier-profile']);
  }


  onAddImage(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width="50%"; 
    dialogConfig.height="50%";
// page id is 5 here from according to table imageOrFileHolderPages
let primaryKey=0; 
    this.datapassingService.sendInfoPageToErpImages.next({pageId: 4,primaryKey:primaryKey});

    this.dialog.open(ErpImagesComponent, dialogConfig);
  }

}

 
