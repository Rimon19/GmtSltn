import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { PackingInfoes } from '../../../../@core/data/marchanzider-model/packing-infoes.model';
import { NbDateService, NbToastrService } from '@nebular/theme';
import { MasterPodetailsInfroesService } from '../../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { PackingInfoesService } from '../../../../@core/mock/marchandizer/packing-infoes.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddInputPannelInformationComponent } from '../../input-pannel-information/add-input-pannel-information/add-input-pannel-information.component';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'ngx-edit-po-information',
  templateUrl: './edit-po-information.component.html',
  styleUrls: ['./edit-po-information.component.scss']
})
export class EditPoInformationComponent implements OnInit {
  editedId:any;
  autoOrderId:any;
  poShowpage:any;
  Tostr=new Tostr();
  poDetailsInfo:any[]=[];
  public poOrderStatusInfoesItems:any[] = [];
  public PoStatusItems:any[] = [];
  public packingInfoesItems:PackingInfoes[] = [];
  delayForListSettings:IDropdownSettings;
 delayForList=[];
  constructor( protected dateService:NbDateService<Date>,
    public masterPodetailsInfroesService:MasterPodetailsInfroesService,
    private dropdownValueService:DropdownValueService,
    private dateResizeService:DateResizeService,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,   
    private packingInfoesService:PackingInfoesService,
    private dialog:MatDialog,
    private datapassingService:DatapassingService,
    private router:Router,
    private route:ActivatedRoute) {
       this.editedId = this.route.snapshot.paramMap.get('poDetId');
      // this.poShowpage= this.route.snapshot.paramMap.get('orderAutoId');
      this.autoOrderId= parseInt(localStorage.getItem("oderAutoId"));

    
      this.masterPodetailsInfroesService.getAllMasterPodetailsInfroes().subscribe(item=>{
      let items=  item.find(f=>f.poDetID==this.editedId);
      this.masterPodetailsInfroesService.podetailsInfroes=items;
      if(items.delay_For!=""){
       
        let delayFors= items.delay_For.split(',');
        
         let array=[];
         delayFors.forEach(ele => {
         
                 let obj={value:ele};    
                array.push(obj);
                 
               });
             
             this.delayForList =array;
           
         
      }
     
      
      

   });
  }

  ngOnInit() {
    this.resetFormFormasterPodetailsInfroes();
    this.PoOrderStatusInfoesDDL();
    this.PoStatusDDL();
    this.packingInfoesDDL();
    this.dropdownValueService.getDelayFor();
    this.delayForListSettings= {
      singleSelection: false,
      idField: 'value',
      textField: 'value',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }

  resetFormFormasterPodetailsInfroes(form?:NgForm){
    if(form!=null)
    form.resetForm(); 
    this.masterPodetailsInfroesService.podetailsInfroes = {
      poDetID:0,
      initialOrderID: 0,
      poOrderStatusID:'',
      pO_No:'',
      pO_Received_Date:'',
      pub_Shipment_Date:'',
      org_Shipment_Date:'',
      fac_Receive_Date:'',
      pO_Quantity:'',
      avg_Price:'',
      amount:'',
      excess_Cut: 0,
      plan_Cut: 0,
      poStatusID:'',
      projected_Po:'',
      tnA_FromOrUpto:'',
      internal_RefOrGrouping:'',
      delay_For:'',
      packing_ID:'',
      file_No:'',
      sCorLC:'',
      remarks: '',
    }   
  }

  PoOrderStatusInfoesDDL(){
    this.poOrderStatusInfoesItems=this.staticFeaturesService.getPoOrderStatus();
  
    }
    PoStatusDDL(){
     this.PoStatusItems=  this.staticFeaturesService.getStatus();
  
    }         
    packingInfoesDDL(){
      this.packingInfoesService.getAllPackingInfoes().
      subscribe(data=>{
      this.packingInfoesItems=data;
     
      });
    } 

    onAdd(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="80%";
      dialogConfig.height="80%"; 
      this.dialog.open(AddInputPannelInformationComponent, dialogConfig);
    }
    poQuantityCalculate(formObj){
      formObj.podetailsInfroes.amount=formObj.podetailsInfroes.pO_Quantity*formObj.podetailsInfroes.avg_Price;
    }
    avrPriceCalculate(formObj){
      formObj.podetailsInfroes.amount=formObj.podetailsInfroes.pO_Quantity*formObj.podetailsInfroes.avg_Price;
    }

    onSubmit(form:NgForm){
      //check poExisOrNot
      this.masterPodetailsInfroesService.getAllMasterPodetailsInfroes().subscribe(data=>{
      this.poDetailsInfo=data;
      let poDetailsInfoByPoNo = (form.value.pO_No) ?
      this.poDetailsInfo.filter(p => p.pO_No.toLowerCase()==
      form.value.pO_No.toLowerCase()) :
      this.poDetailsInfo; 

      if(poDetailsInfoByPoNo.length!=1){
        this.Tostr.showToast('danger','', 'Po No is Already Exist !', '',this.toastrService);
      }else{
       
        var oderAutoId = localStorage.getItem('oderAutoId');
         form.value.initialOrderID=parseInt(oderAutoId) ;
         form.value.pO_Received_Date=  this.dateResizeService.dateResize(form.value.pO_Received_Date);
         form.value.pub_Shipment_Date=  this.dateResizeService.dateResize(form.value.pub_Shipment_Date);
         form.value.org_Shipment_Date=  this.dateResizeService.dateResize(form.value.org_Shipment_Date);
         form.value.fac_Receive_Date=  this.dateResizeService.dateResize(form.value.fac_Receive_Date);
        
         let delayFor='';
         this.delayForList.forEach(element => {
           delayFor=delayFor+element.value+',';
         });
        
        form.value.delay_For=delayFor;

         this.masterPodetailsInfroesService.updateMasterPodetailsInfroes(form.value).subscribe(res=>
          {
            this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
            this.resetFormFormasterPodetailsInfroes(form);
            this.datapassingService.orderAutoIdDetails.subscribe(data=>{
             
              this.router.navigate(["/pages/show-po-information/",data.orderId]);
            })
          },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);})
      
      
      }
      
    });



   
    }
    backTo(){
      
      
        this.router.navigate(["/pages/show-po-information/", this.autoOrderId]);

     
    }
}
