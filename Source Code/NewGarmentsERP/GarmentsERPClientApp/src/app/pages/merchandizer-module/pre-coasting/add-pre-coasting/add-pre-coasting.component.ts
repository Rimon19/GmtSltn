import { Component, OnInit } from '@angular/core';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { OrderInfo } from '../../../../@core/data/marchanzider-model/order-info.model';
import { MasterPodetailsInfroesService } from '../../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { MasterPodetailsInfroes } from '../../../../@core/data/marchanzider-model/master-podetails-infroes.model';
import { PreCosting } from '../../../../@core/data/marchanzider-model/pre-costing.model';
import { CompanyService } from '../../../../@core/mock/company.service';
import { company } from '../../../../@core/data/company';
import { buyer } from '../../../../@core/data/buyer';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { Currency } from '../../../../@core/data/marchanzider-model/currency.model';
import { NgForm, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PrecostingService } from '../../../../@core/mock/marchandizer/precosting.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { OrderOrJobSelectionFormComponent } from '../../order-or-job-selection-form/order-or-job-selection-form.component';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'ngx-add-pre-coasting',
  templateUrl: './add-pre-coasting.component.html',
  styleUrls: ['./add-pre-coasting.component.scss']
})
export class AddPreCoastingComponent implements OnInit {
  Tostr=new Tostr();
  public JobNumberItems:OrderInfo[] = [];
  public currencyList:any[]=[];
  public PobNumberItems:MasterPodetailsInfroes[] = [];
  preCosting=new PreCosting();
  //SearchPobNumberItems: MasterPodetailsInfroes[]=[];
  companyInfo:company[]=[];
  byerInfo:BuyerProfile[]=[];
  countryInfo:CountryInfo[]=[];

  jobNoWPodropdownList : MasterPodetailsInfroes[] = [];
  poselectedItems = [];
  podropdownSettings:IDropdownSettings; 

  jobQuntity :number=0;


  orderUomInfo:any[]=[];
  editedId;
  constructor(private fetchInitialOrderService:FetchInitialOrderService,
    private masterPodetailsInfroesService:MasterPodetailsInfroesService,
    private companyService:CompanyService,
    private countryService:CountryService,
    private router:Router,
    private dateResizeService:DateResizeService,
    private toastrService:NbToastrService,
    private staticFeaturesService:StaticFeaturesService,
    public precostingService:PrecostingService,
    private byerService:BuyerProfileService,
    
    private route:ActivatedRoute,
    private dropdownValueService:DropdownValueService,
  private dialog: MatDialog,
  private datapassingService:DatapassingService) {

     


     }

  ngOnInit() {
    let defaltPoSelected=[];
this.dropdownValueService.getInitialOrder();
   this.datapassingService.getJobSelectionFormValue().subscribe(data=>{
   console.log(data);
   console.log(data.jobNo);
   if(data!=0){
    this.precostingService.preCosting.orderId=data.orderAutoId;
    this.precostingService.preCosting.JobNo=this.dropdownValueService.initialOrderList.find(f=>f.orderAutoID==data.orderAutoId).jobNo;
    this.precostingService.preCosting.styleRef=data.styleRefNo;
    this.precostingService.preCosting.poId=data.poDetId;
    
    this.precostingService.preCosting.styleDesc=data.style_Description;
    this.precostingService.preCosting.buyerId=data.buyerId;
    this.precostingService.preCosting.currencyId=data.currencyId;
    //this.precostingService.preCosting.jobQty=data.jobQty;
    this.precostingService.preCosting.orderUOMId=data.orderUomId;
    this.precostingService.preCosting.companyId=data.companyId;
    this.precostingService.preCosting.regionId=data.regionID;
    this.precostingService.preCosting.sewSMV=data.smv;
    this.precostingService.preCosting.costingDate=data.costingDate;

    this.jobNoWPodropdownList= this.PobNumberItems.filter(p => p.initialOrderID ==  this.precostingService.preCosting.orderId);
   

   }

    
  //for default set  all po  number in multiple dropdown
    this.poselectedItems=this.jobNoWPodropdownList;
   });



    this.JobNumberDDL();
    this.PoDDL();
    this.resetprecostingInfo();
    this.companyService.getAllCompany().subscribe(data=>{
     this.companyInfo=data;
    });

    this.byerService.getAll().subscribe(data=>{
      this.byerInfo=data;
    });
    this.countryService.getAllCountry().subscribe(data=>{
      this.countryInfo=data;
    });
    this.staticFeaturesService.getAllDiscountMethod().subscribe(data=>{
      this.currencyList=data;
    });
    this.staticFeaturesService.getAllUOM().subscribe(data=>{
      this.orderUomInfo=data;
    });
this.dropdownValueService.getAgents();
this.dropdownValueService.getYesNo();


    this.editedId = this.route.snapshot.paramMap.get('Id');
    console.log( this.editedId);
    if(this.editedId!=null){
     this.precostingService.getPrecostingById(this.editedId).subscribe(preCostingObj=>{
      this.precostingService.preCosting=preCostingObj;
      this.precostingService.preCosting.JobNo=this.dropdownValueService.initialOrderList.find(f=>f.orderAutoID==preCostingObj.orderId).jobNo;
      this.jobNoWPodropdownList= this.PobNumberItems.filter(p => p.initialOrderID ==  preCostingObj.orderId);
       
      if(preCostingObj.poId!=""){

             let poId= preCostingObj.poId.split(',');
             let array=[];
             poId.forEach(ele => {
               let obj= this.PobNumberItems.find(f=>f.poDetID==parseInt(ele));
             
             array.push(obj);
               
             });
             console.log(array);
             this.poselectedItems=array;
            
      
    }

     });

    }
   
  
  }
   JobNumberDDL(){
    this.fetchInitialOrderService.getInitialAllOrderList().
    subscribe(data=>{
    this.JobNumberItems=data;
    console.log('OrderInfo list',this.JobNumberItems)
    });
      }
         PoDDL(){
        this.masterPodetailsInfroesService.getAllMasterPodetailsInfroes().
        subscribe(data=>{
        this.PobNumberItems=data;
       // console.log('PoInfo list',this.PobNumberItems)
        });
          }
          currencyDDL(){
            this.staticFeaturesService.getAllDiscountMethod().
            subscribe(data=>{
              this.currencyList=data;
              console.log('Currency list',this.currencyList);       
            });
           }
           
           onItemDeSelect(item: any){
             this.jobQuntity=0;
            this.poselectedItems.forEach(element => {
              let obj= this.PobNumberItems.find(f=>f.poDetID==element.poDetID).pO_Quantity;
            
              this.jobQuntity =this.precostingService.preCosting.jobQty-obj
             });

             this.precostingService.preCosting.jobQty=this.jobQuntity;
           }
           onDeSelectAll(items: any){
            this.precostingService.preCosting.jobQty=0;
           }

           onItemSelect(item: any) {
            //this.precostingService.preCosting.jobQty=0;
             this.jobQuntity=0;
             this.poselectedItems.forEach(element => {
              let obj= this.PobNumberItems.find(f=>f.poDetID==element.poDetID).pO_Quantity;
            
              this.jobQuntity =this.jobQuntity+obj
             });
             
              
             
             this.precostingService.preCosting.jobQty=this.jobQuntity;
          }
          onSelectAll(items: any) {
            // this.precostingService.preCosting.jobQty=0;
              this.jobQuntity=0;
             items.forEach(element => {
              let obj= this.PobNumberItems.find(f=>f.poDetID==element.poDetID).pO_Quantity;
            
              this.jobQuntity =this.jobQuntity+obj;
              
             });
             this.precostingService.preCosting.jobQty=this.jobQuntity;
          }
      
    onChangeJobNo(orderId){
        // console.log(orderId);
       // console.log(this.JobNumberItems);
        if(orderId!=null||orderId!=undefined){
          var objpreCosting= this.JobNumberItems.find(f=>f.orderAutoID==orderId);
          console.log(objpreCosting);
         //  Object.assign(this.precostingService.preCosting,objpreCosting);
console.log(this.precostingService.preCosting);

           //this.jobNoWPodropdownList= this.PobNumberItems.filter(p => p.initialOrderID == orderId);
           //console.log( this.jobNoWPodropdownList);
        }
     }
     onChangePoNo(){
    
     
      // if(poselectedItems!=null||poselectedItems!=undefined){

      //   var objpreCostingForPo= this.PobNumberItems.find(f=>f.poDetID==PoNo);
      //      Object.assign(this.preCosting,objpreCostingForPo);
      //      console.log(this.preCosting);
      //      this.precostingService.preCosting.jobQty=objpreCostingForPo.pO_Quantity;
      // }

     }
     
  

     resetprecostingInfo(form?:NgForm){
      if(form!=null)
      form.resetForm();     
      this.precostingService.preCosting = {
        precostingId:0,
        orderId: '',
        costingDate:'',
        incoterm:'',
        incotermPlace:'',
        poId:'',
        buyerId:0,
        quotationId:0,
        approvedId:0,
        currencyId:0,
        jobQty:0,
        companyId:0,
       
        regionId:0,
        budgetMinuite:0,
        eR:0,
        cutSMV:0,
        cutEfficiency:0,
        sewSMV:0,
        sewEfficiency:0,
        styleRef:'',
        styleDesc:'',
        remark:'',
        agent:'',
        machineLine:'',
        prodLineHr:'',
        readyToApproved:'',
        imagesPath:'',
        fileno:'',
        internalRef:'',
        copyFrom:'',
        unapproverequest:'',
        style_Description: '',
        orderUOMId:0,
        
        //NameProprty
        JobNo:'',
        companyName:'',
        buyerName:'',
        regionName:'',
        currencyName:'',
        orderUOMName:'',
        costingPer:'',
        
        status :'',
        entryDate :'',
        entryBy :'',
    
        merchandApprovalDate :'',
        merchandApproval: false,
        approvedByMerchandUserId :'',
    
        agmApprovalDate :'',
        agmApproval:  false,
        approvedByAgmUserId :'',
    
         gmApprovalDate :'',
         gmApproval:  false,
         approvedByGmUserId :'',
    
         mdApprovalDate :'',
         mdApproval:  false,
         approvedByMdUserId :'',
      }

      this.podropdownSettings= {
        singleSelection: false,
        idField: 'poDetID',
        textField: 'pO_No',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
      
     }

     
     onSubmit(preCosting,poselectedItems){
        console.log(poselectedItems)

        let poIds='';
         poselectedItems.forEach(e => {
          poIds +=e.poDetID+",";
        });
        
         let finallyPoNo=  poIds.slice(0, -1);
         preCosting.poId=finallyPoNo;
      
        preCosting.costingDate= this.dateResizeService.dateResize(preCosting.costingDate);
        this.precostingService.addPrecosting(preCosting).subscribe(data=>{
        this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
        this.router.navigate(["/pages/show-precosting"]);
        
       },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);})
     }
     editPreCOsting(Precosting,poselectedItems){
       console.log(poselectedItems);
      let poIds='';
      poselectedItems.forEach(e => {
       poIds +=e.poDetID+",";
     });
     
      let finallyPoNo=  poIds.slice(0, -1);
      Precosting.poId=finallyPoNo;

      Precosting.costingDate= this.dateResizeService.dateResize(Precosting.costingDate);
      this.precostingService.updatePrecosting(Precosting).subscribe(data=>{
        console.log(data);
        this.Tostr.showToast('primary','', 'Updated Successfully', '',this.toastrService);
        this.router.navigate(["/pages/show-precosting"]);
      },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);})
      }
      backTo(){
        this.router.navigate(["/pages/show-precosting"]); 
      } 

      onLoadOrderOrJobSelectionFormComponent() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "90%";
        dialogConfig.height = "70%";
      
        this.dialog.open(OrderOrJobSelectionFormComponent, dialogConfig);
      }

      onAdd(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus= true;
        dialogConfig.width="50%"; 
        dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    let primaryKey=0; 
        this.datapassingService.sendInfoPageToErpImages.next({pageId:2,primaryKey:primaryKey});
    
        this.dialog.open(ErpImagesComponent, dialogConfig);
      }
      
}
