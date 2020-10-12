import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { NgForm, FormArray, FormBuilder, Form, Validators } from '@angular/forms';
import { InputPannelPodetailsService } from '../../../../@core/mock/marchandizer/input-pannel-podetails.service';
import { PackingInfoes } from '../../../../@core/data/marchanzider-model/packing-infoes.model';
import { PackingInfoesService } from '../../../../@core/mock/marchandizer/packing-infoes.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { SizeWisePannelPodetailsService } from '../../../../@core/mock/marchandizer/size-wise-pannel-podetails.service';
import { OrderItems } from '../../../../@core/data/marchanzider-model/order-items.model';
import { OrderItemsService } from '../../../../@core/mock/marchandizer/order-items.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { SizeWizeBreakDownGenericCalculationService } from '../../../../@core/mock/marchandizer/size-wize-break-down-generic-calculation.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { MasterPodetailsInfroesService } from '../../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { database } from 'firebase';
import { SizeWisePannelPodetails } from '../../../../@core/data/marchanzider-model/size-wise-pannel-podetails.model';
//import { ShowInputPannelInformationComponent } from '../show-input-pannel-information/show-input-pannel-information.component';

@Component({
  selector: 'ngx-add-input-pannel-information',
  templateUrl: './add-input-pannel-information.component.html',
  styleUrls: ['./add-input-pannel-information.component.scss']
})
export class AddInputPannelInformationComponent implements OnInit {
        Tostr=new Tostr();
        sInformationForm: FormArray = this.fb.array([]);
        public count=0;
        sizeWiseAllBreakDown=[];
        public countryList:CountryInfo[]=[];
        public countryTypelist:any[]=[];
        public cuttOfflist:any[]=[];
        public packingInfoesItems:PackingInfoes[] = [];
       // public itemsListItems:OrderItems[] = [];
        public PoStatusItems:any[] = [];
        sizeWiseBrakDownInformationForm: FormArray = this.fb.array([]);
        totalOrderQuantity:number;
        totalRate:number;
        totalAmount:number;
        totalExcessCut:number;
        totalPlanCut:number;
        poDetailsID:number=0;
        inputPannelPoId:any=0;
        poNumber:any=0;
        orderAutoId:any=0;
        editMode=false;
        objLengthNumber:number=0;
        objQuanity:number=0;
        deductQuntity:number=0;
        editedQuntity:number=0;
        isCopy=false;
        isError :boolean = false;
        quanity:number=0
        obj :any=[];
        sizeWiseList:SizeWisePannelPodetails[]=[];
       poId=parseInt( localStorage.getItem("poNoPriKey"));
      poQuantity=parseInt( localStorage.getItem("poQuantity"));
  constructor(
    public dialogbox:MatDialogRef<AddInputPannelInformationComponent>,
    private countryService:CountryService,
    public inputPannelPodetailsService:InputPannelPodetailsService,
    private packingInfoesService:PackingInfoesService,
    private sizeWisePannelPodetailsService:SizeWisePannelPodetailsService,
    private toastrService:NbToastrService,
    private staticFeaturesService:StaticFeaturesService,
    private router:Router,
    private fb: FormBuilder,
    private dateResizeService: DateResizeService,
    private orderItemsService: OrderItemsService,
    private sizeWizeBreakDownGenericCalculationService: SizeWizeBreakDownGenericCalculationService,
    private dropdownValueService:DropdownValueService,
    private mathdialogService: MatDialogService,
    private masterPodetailsInfroesService:MasterPodetailsInfroesService,
    private datapassingService:DatapassingService,
    private fetchInitialOrderService:FetchInitialOrderService,
    
    ) {
        
      
        this.inputPannelPoId=this.dialogbox.id;  //editedid
      
        if(this.inputPannelPoId>0){
         this.editMode=true;
          this.inputPannelPodetailsService.getAllInputPannelPodetails().subscribe(item=>{
            let items=  item.find(f=>f.input_Pannel_ID==this.inputPannelPoId);
            this.inputPannelPodetailsService.inputPannelInfo =items;
             });
  
             this.sizeWisePannelPodetailsService.getAllSizeWisePannelPodetails().subscribe(item=>{
              let obj={value:[]}
              var index=0;
              obj.value=item.filter(f=>f.inputPannelId==this.inputPannelPoId);
             
              (obj.value).forEach(element => {
                this.editedQuntity=this.editedQuntity+ parseInt(element.quanity);
                
              });
                 let i=undefined;
              this.CalculateTotal(obj,true,i);
                  

             })
         }
         else
         {
          this.sizeWisePannelPodetailsService.getAllSizeWisePannelPodetails().subscribe(data=>{
           
            this.sizeWiseList=data;

            // let obj={value:[]}
            // var index=0;
            // obj.value=data.filter(f=>f.poId==this.poId);
           
            // (obj.value).forEach(element => {
            //   this.editedQuntity=this.editedQuntity+ parseInt(element.quanity);
              
            // });
           
           });
         }

         this.sForm();
         

     }

        ngOnInit() {
         // this.sizeWiseBrakDownForm();
          this.cuttOffDateAutoSetFormPoOrginalShipdate();
          this.packingAutosetForminitialOrder();
          this.resetFormforInputPannelInfo();
          this.countryDDL();
          this.countryTypeDDL();
          this.cuttOffDDL();
          this.packingInfoesDDL();
          let orderAutoId=localStorage.getItem('oderAutoId');
          this.dropdownValueService.getGarmentItemsByOrderNo(orderAutoId);
          this.PoStatusDDL();
          this.dropdownValueService.getStatus();
        
        }


        onClose(){
          this.dialogbox.close();
          this.datapassingService.sendClickEvent();
        }
        cuttOffDateAutoSetFormPoOrginalShipdate(){
          this.poNumber= localStorage.getItem('PoDetID') ;
          this.masterPodetailsInfroesService.getAllMasterPodetailsInfroes().subscribe(data=>{
          let list=data.find(f=>f.poDetID==this.poNumber);
        this.inputPannelPodetailsService.inputPannelInfo.cutt_off_Date=list.org_Shipment_Date 
       
          })
        }
        packingAutosetForminitialOrder(){
          this.orderAutoId=localStorage.getItem('oderAutoId');
          this.fetchInitialOrderService.getInitialAllOrderList().subscribe(data=>{
          let item=data.find(f=>f.orderAutoID==this.orderAutoId);
          this.inputPannelPodetailsService.inputPannelInfo.packing_ID=item.packing_ID;
          })
        }          
        resetFormforInputPannelInfo(form?:NgForm){
          if(form!=null)
          form.resetForm();
          this.inputPannelPodetailsService.inputPannelInfo={
            input_Pannel_ID: 0,
            po_details_ID: 0,
            countryID:'',
            country_Type:'',
            cutt_off_Date:'',
            cutt_off:'',
            country_Shipment_date:'',
            remarks:'',
            packing_ID:'',
            quantity:0,
          }
        }
        countryDDL(){
          this.countryService.getAllCountry().
          subscribe(data=>{
          this.countryList=data;
             
          });
        }
        countryTypeDDL(){
        this.countryTypelist=this.staticFeaturesService.getCountryType();
        
        }
        cuttOffDDL(){
        this.cuttOfflist=this.staticFeaturesService.getCuttOff();
        
        }
        packingInfoesDDL(){
          this.packingInfoesService.getAllPackingInfoes().
          subscribe(data=>{
          this.packingInfoesItems=data;
         
          });
        }


        onSubmit(form:NgForm,sInformationForm){
        
                //  check validation
        var allValueIsValid=false;
        var oneTimeShowMessage=true;
        sInformationForm.value.forEach(f=>{
    

           if(f.itemId!=0){

            allValueIsValid=true;
           
           }else{
             allValueIsValid=false;
            this.Tostr.showToast('danger','', 'Please Select Gemts Item !', '',this.toastrService);
            return;
           }
           if(f.size!=""){

            allValueIsValid=true;

                 
                if(sInformationForm.value
                  .filter(x => x.size.toLowerCase()==f.size.toLowerCase()).length>1){
                    allValueIsValid=false;
                    if(oneTimeShowMessage==true){
                      this.Tostr.showToast('danger','', 'Duplicate Size Value is Not Allowed !', '',this.toastrService);
                      oneTimeShowMessage=false;
                    } 
                    return;
                }

            
           }else{
             allValueIsValid=false;
             this.Tostr.showToast('danger','', 'Please Input Size!', '',this.toastrService);
             return;
           }


           if(f.quanity!=0&&f.quanity!=""){
                if(parseInt(f.quanity)){                  
                  allValueIsValid=true;
                }else{
                  allValueIsValid=false;
                  this.Tostr.showToast('danger','', 'Quantity must be in Number!', '',this.toastrService);
                  return;
                }

           }else{
            this.Tostr.showToast('danger','', 'Please Input Quantity !', '',this.toastrService);
             allValueIsValid=false;
             return;
           }
           
         
           if(f.rate!=0&&f.rate!=""){
            if(parseInt(f.rate)){                  
              allValueIsValid=true;
            }else{
              allValueIsValid=false;
              this.Tostr.showToast('danger','', 'Rate must be in Number!', '',this.toastrService);
              return;
            }
          
           }else{
             allValueIsValid=false;
             this.Tostr.showToast('danger','', 'Please Input Rate!', '',this.toastrService);
             return;
           }
           
          

         });
       //if valueis valid then values will be save 

         form.value.po_details_ID=parseInt(localStorage.getItem("poNoPriKey"));
         this.poDetailsID=form.value.po_details_ID;

         if(allValueIsValid){
          //  let poQuantity=localStorage.getItem("poQuantity");
          var inputPannelId=0;
   
          form.value.cutt_off_Date=   this.inputPannelPodetailsService.inputPannelInfo.cutt_off_Date;
          form.value.country_Shipment_date= this.dateResizeService.dateResize(form.value.country_Shipment_date);
              
          this.inputPannelPodetailsService.getAllInputPannelPodetails().subscribe(data=>{
           let inputPannelsByPoDetailsId= data.filter(f=>f.po_details_ID==form.value.po_details_ID);
          //  if(inputPannelsByPoDetailsId.length >=1){
          //   this.Tostr.showToast('danger','', 'Po No Already Assigned !', '',this.toastrService);
          //  }else{
          if(form.value.input_Pannel_ID !=0)
          {

            inputPannelId=form.value.input_Pannel_ID;
            this.inputPannelPodetailsService.updateInputPannelPodetails(form.value).subscribe(res=>
              {
                this.Tostr.showToast('primary','', 'update Successfully', '',this.toastrService);
                    this.resetFormforInputPannelInfo(form);  
                   
  

                


                    (sInformationForm.value).forEach((sizeWiseBreakdowns: any) => {
                      
                        if(sizeWiseBreakdowns.sizePannelId==0||sizeWiseBreakdowns.sizePannelId==undefined){
                          sizeWiseBreakdowns.inputPannelId=inputPannelId;
                          sizeWiseBreakdowns.poId=this.poDetailsID;
                        
                               this.sizeWisePannelPodetailsService.addSizeWisePannelPodetails(sizeWiseBreakdowns).subscribe(s=>{});
                        }
                        else{
                          sizeWiseBreakdowns.inputPannelId=inputPannelId;
                          sizeWiseBreakdowns.poId=this.poDetailsID;
                         

                      this.sizeWisePannelPodetailsService.updateSizeWisePannelPodetails(sizeWiseBreakdowns).subscribe(s=>{});
                     
                        }
                      sizeWiseBreakdowns.inputPannelId=inputPannelId;
                      sizeWiseBreakdowns.poId=this.poDetailsID;
                    

                      this.sizeWisePannelPodetailsService.updateSizeWisePannelPodetails(sizeWiseBreakdowns).subscribe(s=>{});
                      
                    });
  
                    
                    sInformationForm.value=[];
                 this.onClose();
               // this.d.refresList();  
           
  
              });
          }
          else{
            this.inputPannelPodetailsService.addInputPannelPodetails(form.value).subscribe(res=>
              {
                this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
                    this.resetFormforInputPannelInfo(form);  
                    inputPannelId=res.input_Pannel_ID;
  

                   
                    (sInformationForm.value).forEach((sizeWiseBreakdowns: any) => {
  
                      sizeWiseBreakdowns.inputPannelId=inputPannelId;
                      sizeWiseBreakdowns.poId=this.poDetailsID;
                      
                      this.sizeWisePannelPodetailsService.addSizeWisePannelPodetails(sizeWiseBreakdowns).subscribe(s=>{});
                    });
  
  
                    sInformationForm.value=[];
                 this.onClose();
               // this.d.refresList();  
           
  
              });
          }
         

           
           //}
          });

         
         }

        }
      
        // itemsDDL(){
        //   this.orderItemsService.getAllOrderItems().
        //   subscribe(data=>{
        //   this.itemsListItems=data;
       
        //   });
        // }
        PoStatusDDL(){
       this.PoStatusItems=this.staticFeaturesService.getStatus();
        } 
        // onChangeOrderQtyCalculateTotal(sInformationForm){
        
        //   this.CalculateTotal(sInformationForm);

        // }
        // onRateOrderQtyCalculateTotal(sInformationForm)

        // {
        //   this.CalculateTotal(sInformationForm);
        // }
        // onExcessCutCalculateTotal(sInformationForm){
      
        //   this.CalculateTotal(sInformationForm);
        // }
        // onPlanCutCalculateTotal(sInformationForm){
        //   this.CalculateTotal(sInformationForm);
        // }

      
        onSizeChangeCalculateTotal(sInformationForm,fg,i){
          

       let length=sInformationForm.value.length;
          if(sInformationForm.value
            .filter(x => x.size.toLowerCase()==fg.value.size.toLowerCase() && x.itemId==fg.value.itemId).length>1){
             
              
              sInformationForm.value[i].size='' ;
              this.CalculateTotal(sInformationForm,true,i);
              this.Tostr.showToast('danger','', 'You Already Entered the Same Size !', '',this.toastrService);
                
           
          }
           
          
        }
        CalculateTotal(sInformationForm,isAddMode,i){
          this.quanity=0;
          let excuteQuntity:number=0;
      
         
          this.totalOrderQuantity=0;
          this.totalRate=0;
          this.totalAmount=0;
          this.totalExcessCut=0;
          this.totalPlanCut=0;      
          this.sInformationForm= this.fb.array([]);   
          this.count=0;
          var index=0;
          let intQuanity:number=0;
          let pQuantity :number=0;
        
   
          this.obj = this.sizeWiseList.filter(f=>f.poId==this.poId);
           
        
          this.obj.forEach(element => {
             
               this.quanity= this.quanity+element.quanity;
              });
         
          
          // (sInformationForm.value).forEach((intObj: any) =>{
          //   intQuanity=intQuanity+parseInt(intObj.quanity);
          // });

          pQuantity=this.quanity-this.editedQuntity;
       

            (sInformationForm.value).forEach((sizeWiseBreakDownObj: any) => {
         
              intQuanity=intQuanity+parseInt(sizeWiseBreakDownObj.quanity); 
              


                 let sizePannelId =parseInt(sizeWiseBreakDownObj.sizePannelId);
    
                if(sizePannelId!=0){
                   
                    if( this.obj.length!=0){
 
                       if(this.poQuantity>this.quanity){
                        if(this.editedQuntity>=intQuanity){
                             
                          excuteQuntity=this.poQuantity;
                    
                        this.totalOrderQuantity=pQuantity+intQuanity
                        }
                        else{
                          excuteQuntity=this.poQuantity;
                          this.totalOrderQuantity=pQuantity+intQuanity;
                        }
                        
                       }
                       else if (this.poQuantity==this.quanity){

                        if(this.editedQuntity>=intQuanity){
                          
                          excuteQuntity=this.poQuantity;
                          this.totalOrderQuantity=pQuantity+intQuanity;
                        }
                        else{
                          excuteQuntity=this.poQuantity;
                          this.totalOrderQuantity=pQuantity+intQuanity;
                        }

                       }
                       else{
                    
                             
                          excuteQuntity=this.poQuantity;
                    
                        this.totalOrderQuantity=pQuantity+intQuanity;
                       
                       
                      
                        
                       }
                   
                  }
                  else{
                    excuteQuntity=this.poQuantity;
                  }
                }
                else{
                
                  if( this.obj.length!=0){
                 
                   
                      excuteQuntity=this.poQuantity-this.quanity;
                      this.totalOrderQuantity= parseInt(sizeWiseBreakDownObj.quanity);
                    
                   
                  }
                  else{

                   
                    excuteQuntity=this.poQuantity;
                    this.totalOrderQuantity=intQuanity;
                  }
                }
             
             //  this.totalOrderQuantity+= parseInt(sizeWiseBreakDownObj.quanity);
   
            
              
                 if(excuteQuntity<this.totalOrderQuantity){
                  this.isError=true;
                   this.totalOrderQuantity=0;
                   this.totalOrderQuantity=this.totalOrderQuantity-sInformationForm.value[i].quanity;
                  if(isAddMode==true){
                    sInformationForm.value[i].quanity=0;
                  
                  }
                  
 
                  
                   
                 }
                 this.count=this.count+1;
                 this.sInformationForm.push(this.fb.group({
                  sizePannelId:sizeWiseBreakDownObj.sizePannelId,
                  inputPannelId: sizeWiseBreakDownObj.inputPannelId,
                  itemId: sizeWiseBreakDownObj.itemId,
                  articleNumber: sizeWiseBreakDownObj.articleNumber,
                  color: sizeWiseBreakDownObj.color,
                  size: sizeWiseBreakDownObj.size,
                  quanity: sizeWiseBreakDownObj.quanity,
                  rate: sizeWiseBreakDownObj.rate,
                  status: sizeWiseBreakDownObj.status,
                  planCutQty: sizeWiseBreakDownObj.planCutQty,
                  excessCut: sizeWiseBreakDownObj.excessCut,
                  amount: sizeWiseBreakDownObj.quanity*sizeWiseBreakDownObj.rate,
                  barCode: sizeWiseBreakDownObj.barCode,
           
                 }));
           
                
               
               
   
                this.totalRate+= parseFloat(sizeWiseBreakDownObj.rate);
                let amount=sizeWiseBreakDownObj.quanity*sizeWiseBreakDownObj.rate;
                this.totalAmount+= amount;
                this.totalExcessCut+= parseInt(sizeWiseBreakDownObj.excessCut);
                this.totalPlanCut+= parseInt(sizeWiseBreakDownObj.planCutQty);
                index++;

               
              });
            
        
              if(this.isError==true){
                this.Tostr.showToast('danger','', 'Sum Of Po Quantity Exceeds Target Po Quantity !', '',this.toastrService);
                this.isError=false;
              }
       
       //this.editMode=false;
        }
 

        test(itemId){
      
        }
        
        sForm() {
          let objArray=this.sInformationForm.value;
          if(this.isCopy&&objArray.length>0){
           console.log(objArray);
          let objElement= objArray[objArray.length-1];
           this.count=this.count+1;
            this.sInformationForm.push(this.fb.group({
              sizePannelId: [0],
              inputPannelId: objElement.inputPannelId,
              itemId: objElement.itemId,
              poId:objElement.poId,
                articleNumber:objElement.articleNumber,
                color:objElement.color,
                size:['',Validators.required] ,
                quanity:['',Validators.required] ,
                rate: [localStorage.getItem('AvgPrice')],
                status: objElement.status,
                planCutQty: objElement.planCutQty,
                excessCut: objElement.excessCut,
                amount: objElement.amount,
                barCode: objElement.barCode
            }));

            
          }else{
            this.count=this.count+1;
            this.sInformationForm.push(this.fb.group({
              sizePannelId: [0],
              inputPannelId: [0],
              itemId: ['',Validators.required],
              poId:[0],
                articleNumber: [''],
                color: [''],
                size:['',Validators.required] ,
                quanity:['',Validators.required] ,
                rate: [localStorage.getItem('AvgPrice')],
                status: [''],
                planCutQty: [0],
                excessCut: [0],
                amount: [0],
                barCode: false
            }));
  
          }
         
         

        } 

        onDelete(id, i) {
        
         
          if (id == 0|| id==undefined){
            this.count=this.count-1;
            this.sInformationForm.removeAt(i);
          }
           
          else{
         

            this.mathdialogService.openConfirmDialog("Are you sure to delete this record ?")
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.count=this.count-1;
          this.sizeWisePannelPodetailsService.deleteSizeWisePannelPodetails(id).subscribe(
              (res) => {

                this.sInformationForm.removeAt(i);
                this.Tostr.showToast("primary", "","Deleleted","Successfully",this.toastrService);
              },
              (err) => {
                this.Tostr.showToast( "danger","",err.statusText,"",this.toastrService);
              }
            );
        }
      });
            

            }
        }

        // onChangeGarmentsItem(itemId,sInformationForm,i){
   
         
        // let gmtsItem=sInformationForm.value.filter(f=>parseInt(f.itemId)==itemId);
       
        // if(gmtsItem.length>1){
        //   alert('duplicate garments item not allowed ');
        //   sInformationForm.value[i].itemId='';
        //  this.CalculateTotal(sInformationForm);
          
        // }

        // }

}
