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
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { PartyType } from '../../../../@core/data/Library-Modul-model/party-type';
import { PartyTypeService } from '../../../../@core/mock/library/party-type.service';
import { CompanyService } from '../../../../@core/mock/company.service';
import { company } from '../../../../@core/data/company';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';

@Component({
  selector: 'ngx-edit-buyer-profile',
  templateUrl: './edit-buyer-profile.component.html',
  styleUrls: ['./edit-buyer-profile.component.scss']
})
export class EditBuyerProfileComponent implements OnInit {
  editedId;
 
  public countryList:CountryInfo[]=[];
  public partyTypeList:PartyType[]=[];
  public companyList:company[]=[];
  public discountMethodList:any[]=[];
  public commercialInvoiceList:any[]=[];
  public sampleTypeList:any[]=[];
  partyTypedropdownList = [];
  partyTypeselectedItems = [];
  partyTypedropdownSettings:IDropdownSettings;

  tagCompanydropdownList = [];
  tagCompanyselectedItems = [];
  tagCompanydropdownSettings:IDropdownSettings;

  tagSampledropdownList = [];
  tagSampleselectedItems = [];
  tagSampledropdownSettings:IDropdownSettings;

  Tostr=new Tostr();
  constructor(
  private countryService:CountryService,
  public buyerProfileService:BuyerProfileService,
  private router:Router,
  private toastrService:NbToastrService,
  private partyTypeService:PartyTypeService,
  private companyService:CompanyService,
  private staticFeaturesService:StaticFeaturesService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService,
  private dialog: MatDialog,
  private datapassingService: DatapassingService
  
 
    ) { 

      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.buyerProfileService.getAll().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.buyerProfileService.buyerProfile =items;

     if(items.partyTypeIds!=""){
         this.partyTypeService.getPartyType().subscribe(data=>{
              let partyTypesIds= items.partyTypeIds.split(',');
        let array=[];
        partyTypesIds.forEach(ele => {
                let obj= data.find(f=>f.id==parseInt(ele));
                
              array.push(obj);
                
              });
              this.partyTypeselectedItems=array;
             
        });
     }

        if(items.tagCompany!=""){
          this.companyService.getAllCompany().subscribe(data=>{
              let companyIds= items.tagCompany.split(',');
        let array=[];
        companyIds.forEach(ele => {
                let obj= data.find(f=>f.compID==parseInt(ele));
                console.log(obj);
              array.push(obj);
                
              });
              this.tagCompanyselectedItems=array;
              
        });
      }

      if(items.tagSample!=""){
        this.staticFeaturesService.getAllSampleType().subscribe(data=>{
            let sampleIds= items.tagSample.split(',');
      let array=[];
      sampleIds.forEach(ele => {
              let obj= data.find(f=>f.id==parseInt(ele));
              console.log(obj);
            array.push(obj);
              
            });
            this.tagSampleselectedItems=array;
            
      });
    }     
   
      });

    }

  ngOnInit() {
    this.countryDDL();
    this.discountMethodDDL();
    this.commercialInvoiceDDL();
    this.sampleTypeDDL();
    this.partyTypeDDL();
    this.companyDDL();
    this.resetForm();
    this.dropdownValueService.getSuppliers();
    this.dropdownValueService.getMarketingTeamInfo();
  }

  onAddImage(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width="50%"; 
    dialogConfig.height="50%";
// page id is 5 here from according to table imageOrFileHolderPages
let primaryKey=0; 
    this.datapassingService.sendInfoPageToErpImages.next({pageId:5,primaryKey:primaryKey});

    this.dialog.open(ErpImagesComponent, dialogConfig);
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

  sampleTypeDDL(){
    this.staticFeaturesService.getAllSampleType().subscribe(data=>{
      this.tagSampledropdownList=data;
      console.log(this.tagSampledropdownList);
    });
  }

 
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.buyerProfileService.buyerProfile = {
      id: 0,
      contactName: '' ,
      shortName: '' ,
      contactPerson: '' ,
      designation: '' ,
      exportersRef: '' ,
      email: '' ,
      httpWww: '' ,
      addressOne: '' ,
      addressTwo: '' ,
      addressThree: '' ,
      addressFour: '' ,
      countryId : '',
      partyTypeIds: '' ,
      tagCompany: '' ,
      linkToSupplier: '' ,
      creditLimitDays : 0 ,
      crditLimitAmount :'',
      crditLimitAmountType : '' ,
      discountMethod : '' ,
      secuirityDeducted : '' ,
      vatToBeDeducted : '' ,
      aitToBeDeducted : '' ,
      remark :'' ,
      marketingTeamId : 0,
      sewingEffiMkt:0,
      sewingEffiPlaning:0,
      deffdLcCost:0,
      cutOffUsed : '' ,
      controlDelivery : '' ,
      deliveryBufferDays : 0,
      minQuotedProfit :0,
      minBudgetedProfit :0,
      status : '' ,
      commercialInvoice: '' ,
      tagSample: '' ,
      imagePath:'',
      imageName :''
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
    this.tagSampledropdownSettings= {
      singleSelection: false,
      idField: 'id',
      textField: 'sampleTypeName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
   }
  
  
   onSubmit(form:NgForm){


    let partyIds='';
    let companyIds='';
    let sampleIds='';

    form.value.partyTypeselectedItems.forEach(e => {
      partyIds +=e.id+",";
    });
    
  let finallyPartySelectedIds=  partyIds.slice(0, -1);
  form.value.partyTypeIds=finallyPartySelectedIds;

  form.value.tagCompanyselectedItems.forEach(e => {
    companyIds +=e.compId+",";
  });
  
let finallyCompanySelectedIds=  companyIds.slice(0, -1);
form.value.tagCompany=finallyCompanySelectedIds;


form.value.tagSampleselectedItems.forEach(e => {
  sampleIds +=e.id+",";
});

let finallySampleSelectedIds=  sampleIds.slice(0, -1);
form.value.tagSample=finallySampleSelectedIds;
console.log(form.value);
form.value.id=this.editedId;
    this.buyerProfileService.update(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  this.router.navigate(["/pages/buyer-profile"]);
   this.resetForm();
    });
  
  }
  backTo(){
    this.router.navigate(['/pages/buyer-profile']);
  }


}
