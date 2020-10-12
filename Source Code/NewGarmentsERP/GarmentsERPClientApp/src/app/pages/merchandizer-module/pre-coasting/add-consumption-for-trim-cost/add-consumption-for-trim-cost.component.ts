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
import { ConsumptionEntryFormForTrimsCostsService } from '../../../../@core/mock/marchandizer/consumption-entry-form-for-trims-costs.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-add-consumption-for-trim-cost',
  templateUrl: './add-consumption-for-trim-cost.component.html',
  styleUrls: ['./add-consumption-for-trim-cost.component.scss']
})
export class AddConsumptionForTrimCostComponent implements OnInit {
  public count=0;
  Tostr=new Tostr();
  isAllCopy=false;
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
  precostingId;
  setFabricItem;
  constructor(
    public dialogbox: MatDialogRef<AddConsumptionForTrimCostComponent>,
    private router:Router,
    private mathdialogService: MatDialogService,
    private toastrService: NbToastrService,
    private sizeWisePannelPodetailsService:SizeWisePannelPodetailsService,
    private masterPodetailsInfroesService:MasterPodetailsInfroesService,
    private inputPannelPodetailsService:InputPannelPodetailsService,
    private consumptionEntryFormForTrimsCostsService:ConsumptionEntryFormForTrimsCostsService,
    private fb: FormBuilder,
    private dropdownValueService:DropdownValueService
  ) {
    this.precostingId =dialogbox.id;
    this.dropdownValueService.getGarmentsItem();
   
    var poNoselectedItems = JSON.parse(localStorage.getItem("poNoselectedItems"));
    this.sizeWisePannelPodetailsService.getAllSizeWisePannelPodetails().subscribe(sizeWiseData=>{
      console.log(sizeWiseData);
      let sizeWiseBreakDownlistByPoId=[];
      let newsizeWiseBreakDownlistByPoId=[];
      console.log('polist',poNoselectedItems);
      poNoselectedItems.forEach(poElemnt => {
       sizeWiseBreakDownlistByPoId=sizeWiseData.filter(f=>f.poId==poElemnt.poDetID);
       newsizeWiseBreakDownlistByPoId.push(...sizeWiseBreakDownlistByPoId);
    });
    console.log(newsizeWiseBreakDownlistByPoId);
var helper = {};
var result = newsizeWiseBreakDownlistByPoId.reduce((r, o)=> {
  var key = o.itemId + '-' + o.size+ '-' + o.color;
  
  if(!helper[key]) {
    helper[key] = Object.assign({}, o); // create a copy of o
    r.push(helper[key]);
  } else {
    helper[key].quanity += o.quanity;
  }

  return r;
}, []);

console.log(result);
    this.consumptionEntryFormForTrimsCostsService.getAll().subscribe(consumptiondata=>{
      let consumptionEntryList=consumptiondata.filter(f=>f.precostingId==this.precostingId);

      if(consumptionEntryList.length <1){
              (result).forEach((itemDts: any) => {
                this.count=this.count+1;
                this.consumptionInformationForm.push(this.fb.group({
                  id:[0],
                  //same
                  poNoId:itemDts.poId,
                  poName:itemDts.poName,
                  precostingId:this.precostingId,
                  gmtsItemId:itemDts.itemId,
                  country:[''],
                  //same
                  gmtsColor:itemDts.color,
                  //same
                  gmtssizes:itemDts.size,
                  //same
                  itemSizes:itemDts.size,
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
                  pcs:[0]            
                            }));
                          });  
             }
      else{
        
         this.count=0;
       
        consumptionEntryList.forEach((itemDts: any)=> {
          console.log(itemDts);
             this.count=this.count+1;
          });
          this.averageGrayCalculation(consumptionEntryList,true);
      }
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
      poNoId:[0],
      poName:new FormControl('',[Validators.required]),
      precostingId:[0],
      gmtsItemId:[''],
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
      pcs:[0]
    }));
  } 

 

onDelete(consumptionInformationForm,i) {
 
  if(consumptionInformationForm.value[i].id==0){
    this.count=this.count-1;
    consumptionInformationForm.value.splice(i, 1);
    this.consumptionInformationForm= this.fb.array([]);
    (consumptionInformationForm.value).forEach((itemDts: any) => {
     
        this.consumptionInformationForm.push(this.fb.group({
         
          id:itemDts.id,
          //same
          poNoId:itemDts.poNoId,
          poName:itemDts.poName,
        
          
          precostingId:itemDts.precostingId,
          gmtsItemId:itemDts.gmtsItemId,
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
          pcs:itemDts.pcs
                            
        }));
      
      
}); 
  }
         
      
      if(consumptionInformationForm.value[i].id!=0){
        this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.consumptionEntryFormForTrimsCostsService.deleteWithOutSubcribe(consumptionInformationForm.value[i].id).subscribe(res=>{
                  
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  this.count=this.count-1;
                  consumptionInformationForm.value.splice(i, 1);
                  this.consumptionInformationForm= this.fb.array([]);
                  (consumptionInformationForm.value).forEach((itemDts: any) => {
                   
                      this.consumptionInformationForm.push(this.fb.group({
                        id:itemDts.id,
          poNoId:itemDts.poNoId,
          poName:itemDts.poName,
          gmtsItemId:itemDts.gmtsItemId,
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
    
    element.precostingId=this.precostingId;
    if(element.id!=0){
      this.consumptionEntryFormForTrimsCostsService.updateMultiline(element,element.id);
    }
    if(element.id==0){
      console.log(element.id);
      this.consumptionEntryFormForTrimsCostsService.createMultiline(element);
    }
    
  });
  this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  
}

averageGrayCalculation(consumptionInformationForm,updateMode:boolean){

  console.log(consumptionInformationForm);
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
        let totalprocessLoss=0;
        let totalfinishCons=0;

       
    (consumptionInformationForm).forEach((itemDts: any) => {
         console.log("test value",itemDts)
         if(updateMode){
          itemDts.sizeQuantity=itemDts.totalQty;
         }
         
      // if(itemDts.greyCons!=0){
      //   totalGreyCons=totalGreyCons+itemDts.greyCons;
      // }
      if(itemDts.processLoss!=0){
        totalprocessLoss=totalprocessLoss+itemDts.processLoss;
      }
      if(itemDts.finishCons!=0){
        totalfinishCons=totalfinishCons+itemDts.finishCons;
      }
      if(this.setFabricItem==3){
       var  greyCons:number=itemDts.finishCons;
        itemDts.amount=greyCons*itemDts.rate;
      }
      else{
        var  greyCons:number=parseFloat(itemDts.finishCons)/(100-itemDts.processLoss)*100;
      
        console.log(greyCons);

      }
      var totalAmount=itemDts.totalQty*itemDts.rate;
      this.consumptionInformationForm.push(this.fb.group({
        id:itemDts.id,
        //same
        poNoId:itemDts.poNoId,
        poName:itemDts.poName,
        precostingId:itemDts.precostingId,
        gmtsItemId:itemDts.gmtsItemId,
        country:itemDts.country,
        //same
        gmtsColor:itemDts.gmtsColor,
        //same
        gmtssizes:itemDts.gmtssizes,
        itemSizes:itemDts.itemSizes,
        cons:itemDts.cons,
        ex:itemDts.ex,
        totCons:itemDts.totCons,
        rate:itemDts.rate,
        amount:itemDts.amount,
        totalQty:itemDts.totalQty,
        totalAmount:itemDts.totalAmount,
        placement:itemDts.placement,
        pcs:itemDts.pcs        
      }));
      this.totalGreyCons +=greyCons;
      this.totalFinishCons +=parseFloat(itemDts.finishCons);
      this.totalProcessLoss +=parseInt(itemDts.processLoss);
      
      this.totalRate +=parseFloat(itemDts.rate);
      this.totalAmount +=parseFloat(itemDts.amount);
      this.totalPcs +=parseFloat(itemDts.pcs);
      this.totalTotalQty +=parseFloat(itemDts.totalQty);
      this.totalTotalAmount +=totalAmount;

console.log(this.totalGreyCons);
      this.averageGreyCons=this.totalGreyCons/consumptionInformationForm.length;
     // this.averageProcessLoss=totalprocessLoss/consumptionInformationForm.length;
     // this.averageFinishCons=totalfinishCons/consumptionInformationForm.length;
    //   this.averageFinishCons=totalfinishCons/consumptionInformationForm.length.toFixed(3);
      //Sum Calculation
      //this.totalFinishCons+=parseFloat(itemDts.finishCons).toFixed(2);
    
}); 

  }
}
