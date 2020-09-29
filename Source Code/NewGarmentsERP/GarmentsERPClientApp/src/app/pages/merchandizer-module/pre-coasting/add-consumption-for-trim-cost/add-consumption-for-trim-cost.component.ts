import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputPannelPodetailsService } from '../../../../@core/mock/marchandizer/input-pannel-podetails.service';
import { MasterPodetailsInfroesService } from '../../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { ConsumptionEntryFormService } from '../../../../@core/mock/marchandizer/consumption-entry-form.service';
import { SizeWisePannelPodetailsService } from '../../../../@core/mock/marchandizer/size-wise-pannel-podetails.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-add-consumption-for-trim-cost',
  templateUrl: './add-consumption-for-trim-cost.component.html',
  styleUrls: ['./add-consumption-for-trim-cost.component.scss']
})
export class AddConsumptionForTrimCostComponent implements OnInit {
  public count=0;
  Tostr=new Tostr();
  consumptionInformationForm: FormArray = this.fb.array([]);
  public averageGreyCons=0;
  public totalFinishCons=0;
  public totalProcessLoss=0;
  public totalGreyCons=0;
  public totalRate=0;
  public totalAmount=0;
  public totalPcs=0;
  public totalTotalQty=0;
  public totalTotalAmount=0;
  poNoId;
  
  constructor(
    public dialogbox: MatDialogRef<AddConsumptionForTrimCostComponent>,
    private router:Router,
    private mathdialogService: MatDialogService,
    private toastrService: NbToastrService,
    private sizeWisePannelPodetailsService:SizeWisePannelPodetailsService,
    private masterPodetailsInfroesService:MasterPodetailsInfroesService,
    private inputPannelPodetailsService:InputPannelPodetailsService,
    private consumptionEntryFormService:ConsumptionEntryFormService,
    private fb: FormBuilder,
  ) {
    this.poNoId =dialogbox.id;
    console.log('ck po',this.poNoId);
    this.inputPannelPodetailsService.getAllInputPannelPodetails().subscribe(data=>{
      console.log(data);
      let inputPannelIdByPoNoId=data.find(f=>f.po_details_ID==this.poNoId).input_Pannel_ID;
   console.log(inputPannelIdByPoNoId)   
   this.masterPodetailsInfroesService.getAllMasterPodetailsInfroes().subscribe(poData=>{
     let poName=poData.find(f=>f.poDetID==this.poNoId).pO_No;
   this.consumptionEntryFormService.getAll().subscribe(data=>{
       let consumptionEntryList=data.filter(f=>f.poNoId==this.poNoId);
       console.log(consumptionEntryList);
       if(consumptionEntryList.length <1){
        
         if(poName!=undefined){
           this.sizeWisePannelPodetailsService.getsizeWisePannelPodetailsByInputPannelId(inputPannelIdByPoNoId).subscribe(data=>{
             let sizeWizeBreakDownsByInputPannelId= data;
             console.log(sizeWizeBreakDownsByInputPannelId);
             (sizeWizeBreakDownsByInputPannelId).forEach((itemDts: any) => {
               this.count=this.count+1;
               this.consumptionInformationForm.push(this.fb.group({
                 id:0,
                 poNoId:poName,
                 color:itemDts.color,
                 gmtsSizes:itemDts.size,
                 dia:[''],
                 itemSizes:[''],
                 finishCons:[0],
                 processLoss:[0],
                 greyCons:[0],
                 rate:[0],
                 amount:[0],
                 pcs:[0],
                 totalQty:[0],
                 totalAmount:[0],
                 remarks:['']
                                   
               }));
              });  
           });
       
         }
       }else{
         
         this.consumptionInformationForm= this.fb.array([]);

         this. averageGreyCons=0;
         this. totalFinishCons=0;
         this. totalProcessLoss=0;
         this. totalGreyCons=0;
         this. totalRate=0;
         this. totalAmount=0;
         this. totalPcs=0;
         this. totalTotalQty=0;
         this. totalTotalAmount=0;
               let totalGreyCons=0;
               this.count=0;
               (consumptionEntryList).forEach((itemDts: any) => {
                 this.count=this.count+1;
                 if(itemDts.greyCons!=0){
                   totalGreyCons=totalGreyCons+itemDts.greyCons;
                 }
                 
                 let greyCons=parseInt(itemDts.finishCons) +(itemDts.processLoss/100);
                 let amount=greyCons*itemDts.rate;
                 let totalAmount=itemDts.totalQty*itemDts.rate;
                 let poName;
               
                   this.masterPodetailsInfroesService.getAllMasterPodetailsInfroes().subscribe(poData=>{
                      poName=poData.find(f=>f.poDetID==this.poNoId).pO_No;
                      console.log(poName);
   
                      this.consumptionInformationForm.push(this.fb.group({
                       id:itemDts.id,
                       poNoId:poName,
                       color:itemDts.color,
                       gmtsSizes:itemDts.gmtsSizes,
                       dia:itemDts.dia,
                       itemSizes:itemDts.itemSizes,
                       finishCons:itemDts.finishCons,
                       processLoss:itemDts.processLoss,
                       greyCons:greyCons,
                       rate:itemDts.rate,
                       amount:amount,
                       pcs:itemDts.pcs,
                       totalQty:itemDts.totalQty,
                       totalAmount:totalAmount,
                       remarks:itemDts.remarks
                                         
                     }));
                   });
              
               
               
                 this.averageGreyCons=totalGreyCons/consumptionEntryList.length;
   
                 //Sum Calculation
                 this.totalFinishCons +=parseInt(itemDts.finishCons);
                 this.totalProcessLoss +=parseInt(itemDts.processLoss);
                 this.totalGreyCons +=greyCons;
                 this.totalRate +=parseInt(itemDts.rate);
                 this.totalAmount +=amount;
                 this.totalPcs +=parseInt(itemDts.pcs);
                 this.totalTotalQty +=parseInt(itemDts.totalQty);
                 this.totalTotalAmount +=totalAmount;
           });  
           
           
       }
   });
   
 
   });
 });
   }

  ngOnInit() {
  }
  onClose(){
    this.dialogbox.close();
    
  }
  consumptionForm() {
    this.count=this.count+1;
  console.log(this.count);
    this.consumptionInformationForm.push(this.fb.group({
      id:[0],
      //same
      poNoId:new FormControl('',[Validators.required]),
      gmtsItem:[''],
      country:[''],
      //same
      gmtsColor:[''],
      //same
      gmtssizes:[''],
      //same
      itemSizes:[0],
      cons:[0],
      ex:[0],
      totCons:[0],
      //same
      rate:[0],
      //same
      amount:new FormControl(0,[Validators.required]),
      //same
      totalQty:new FormControl(0,[Validators.required]),
      //same
      totalAmount:[0],
      placement:[''],
      //same
      pcs:[0],
    }));
  } 

 
// onDelete(consumptionInformationForm,i) {
// this.count=this.count-1;
// consumptionInformationForm.value.splice(i, 1);
//         this.consumptionInformationForm= this.fb.array([]);
//             this.consumptionInformationForm= this.fb.array([]);
//             (consumptionInformationForm.value).forEach((itemDts: any) => {
//               this.consumptionInformationForm.push(this.fb.group({
//                 sl:[''],
//                 poNo:[''],
//                 gmtsItem:[''],
//                 country:[''],
//                 gmtsColor:[''],
//                 gmtssizes:[''],
//                 itemSizes:[''],
//                 cons:[0],
//                 ex:[0],
//                 totCons:[0],
//                 rate:[0],
//                 amount:[0],
//                 totalQty:[0],
//                 totalAmount:[0],
//                 placement:[''],
//                 pcs:[''],
                                  
//               }));
//         });                       
//   }

onDelete(consumptionInformationForm,i) {
 
  if(consumptionInformationForm.value[i].id==0){
    this.count=this.count-1;
    consumptionInformationForm.value.splice(i, 1);
    this.consumptionInformationForm= this.fb.array([]);
    (consumptionInformationForm.value).forEach((itemDts: any) => {
     
        this.consumptionInformationForm.push(this.fb.group({
          // id:itemDts.id,
          // poNoId:itemDts.poNoId,
          // color:itemDts.color,
          // gmtsSizes:itemDts.gmtsSizes,
          // dia:itemDts.dia,
          // itemSizes:itemDts.itemSizes,
          // finishCons:itemDts.finishCons,
          // processLoss:itemDts.processLoss,
          // greyCons:itemDts.greyCons,
          // rate:itemDts.rate,
          // amount:itemDts.amount,
          // pcs:itemDts.pcs,
          // totalQty:itemDts.totalQty,
          // totalAmount:itemDts.totalAmount,
          // remarks:itemDts.remarks
          id:itemDts.id,
          poNoId:itemDts.poNoId,
          gmtsItem:itemDts.gmtsItem,
          country:itemDts.country,
          //same
          gmtsColor:itemDts.gmtsColor,
          //same
          gmtssizes:itemDts.gmtssizes,
          //same
          itemSizes:itemDts.itemSizes,
          cons:itemDts.cons,
          ex:itemDts.ex,
          totCons:itemDts.totCons,
          //same
          rate:itemDts.rate,
          //same
          amount:itemDts.amount,
          //same
          totalQty:itemDts.totalQty,
          //same
          totalAmount:itemDts.totalAmount,
          placement:itemDts.placement,
          //same
          pcs:itemDts.pcs,
                            
        }));
      
      
}); 
  }
         
      
      if(consumptionInformationForm.value[i].id!=0){
        this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.consumptionEntryFormService.delete(consumptionInformationForm.value[i].id).subscribe(res=>{
                  
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  this.count=this.count-1;
                  consumptionInformationForm.value.splice(i, 1);
                  this.consumptionInformationForm= this.fb.array([]);
                  (consumptionInformationForm.value).forEach((itemDts: any) => {
                   
                      this.consumptionInformationForm.push(this.fb.group({
                        id:itemDts.id,
          poNoId:itemDts.poNoId,
          gmtsItem:itemDts.gmtsItem,
          country:itemDts.country,
          //same
          gmtsColor:itemDts.gmtsColor,
          //same
          gmtssizes:itemDts.gmtssizes,
          //same
          itemSizes:itemDts.itemSizes,
          cons:itemDts.cons,
          ex:itemDts.ex,
          totCons:itemDts.totCons,
          //same
          rate:itemDts.rate,
          //same
          amount:itemDts.amount,
          //same
          totalQty:itemDts.totalQty,
          //same
          totalAmount:itemDts.totalAmount,
          placement:itemDts.placement,
          //same
          pcs:itemDts.pcs,
                                          
                      }));
                    
                    
              }); 
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
      }
}
onSubmit(consumptionInformationForm){
  console.log(consumptionInformationForm.value);
  consumptionInformationForm.value.forEach(element => {
    element.poNoId=this.poNoId;
    if(element.id!=0){
      this.consumptionEntryFormService.update(element).subscribe(data=>{
      
      });
    }
    if(element.id==0){
      console.log(element.id);
      this.consumptionEntryFormService.add(element).subscribe(data=>{
      
      });
    }
    
  });
  this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  
}
}
