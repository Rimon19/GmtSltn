import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Validators, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemDetailsOrderEntriesService } from '../../../../@core/mock/marchandizer/item-details-order-entries.service';
import { SizeWisePannelPodetailsService } from '../../../../@core/mock/marchandizer/size-wise-pannel-podetails.service';
import { InputPannelPodetailsService } from '../../../../@core/mock/marchandizer/input-pannel-podetails.service';
import { MasterPodetailsInfroesService } from '../../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { ConsumptionEntryFormService } from '../../../../@core/mock/marchandizer/consumption-entry-form.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-add-consumption',
  templateUrl: './add-consumption.component.html',
  styleUrls: ['./add-consumption.component.scss']
})
export class AddConsumptionComponent implements OnInit {
  public count=0;
  setFabricItem:any;
  Tostr=new Tostr();
  consumptionInformationForm: FormArray = this.fb.array([]);
public averageGreyCons=0;
public averageProcessLoss=0;
public averageFinishCons=0;
public totalFinishCons:number=0;
public totalProcessLoss=0;
public totalGreyCons=0;
public totalRate=0;
public totalAmount=0;
public totalPcs=0;
public totalTotalQty=0;
public totalTotalAmount=0;

poNoId;
precostingId;
  constructor(
    public dialogbox: MatDialogRef<AddConsumptionComponent>,
    private  itemDetailsOrderEntriesService:ItemDetailsOrderEntriesService,
    private toastrService:NbToastrService,
    private router:Router, 
    private fb: FormBuilder,
    private sizeWisePannelPodetailsService:SizeWisePannelPodetailsService,
    private route:ActivatedRoute,
    private inputPannelPodetailsService:InputPannelPodetailsService,
    private masterPodetailsInfroesService:MasterPodetailsInfroesService,
    private consumptionEntryFormService:ConsumptionEntryFormService,
    private mathdialogService: MatDialogService,
    private dateResizeService:DateResizeService,
    private dropdownValueService:DropdownValueService
    
  ) { 
    var precostingId = parseInt(localStorage.getItem("PreCostingId"));
    this.precostingId = precostingId;
    var poNoselectedItems = JSON.parse(localStorage.getItem("poNoselectedItems"));
    this.sizeWisePannelPodetailsService.getAllSizeWisePannelPodetails().subscribe(sizeWiseData=>{
      let sizeWiseBreakDownlistByPoId=[];
      let newsizeWiseBreakDownlistByPoId=[];
      console.log(poNoselectedItems);
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
    this.consumptionEntryFormService.getAll().subscribe(consumptiondata=>{
      let consumptionEntryList=consumptiondata.filter(f=>f.precostingId==this.precostingId);

      if(consumptionEntryList.length <1){
              (result).forEach((itemDts: any) => {
                this.count=this.count+1;
                this.consumptionInformationForm.push(this.fb.group({
                  id:0,
                  poNoId:itemDts.poId,
                  color:itemDts.color,
                  precostingId:this.precostingId,
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
                  remarks:[''],
                  sizeQuantity:itemDts.quanity                 
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
this.setFabricItem=localStorage.getItem('fabricSource');
  }
  onClose(){
    this.dateResizeService.subject.subscribe(i=>{
     console.log(i);
     console.log(this.averageGreyCons);
      this.dateResizeService.sourceConsumptionObj.next({index:i,averageGreyCons:this.averageGreyCons,rate:this.totalRate,amount:this.totalAmount,totalQty:this.totalTotalQty,totalAmount:this.totalTotalAmount});
    });

    this.dialogbox.close();
    
  }
  consumptionForm() {
    this.count=this.count+1;
  console.log(this.count);
    this.consumptionInformationForm.push(this.fb.group({
      id:0,
      poNoId:new FormControl('',[Validators.required]),
      precostingId:0,
      color:[''],
      gmtsSizes:[''],
      dia:[''],
      itemSizes:[''],
      finishCons:new FormControl(0,[Validators.required]),
      processLoss:new FormControl(0,[Validators.required]),
      greyCons:new FormControl(0,[Validators.required]),
      rate:[0],
      amount:new FormControl(0,[Validators.required]),
      pcs:[0],
      totalQty:[0],
      totalAmount:[0],
      remarks:[''],
      sizeQuantity:0
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
            poNoId:itemDts.poNoId,
            color:itemDts.color,
            gmtsSizes:itemDts.gmtsSizes,
            dia:itemDts.dia,
            itemSizes:itemDts.itemSizes,
            finishCons:itemDts.finishCons,
            processLoss:itemDts.processLoss,
            greyCons:itemDts.greyCons,
            rate:itemDts.rate,
            amount:itemDts.amount.toFixed(3),
            pcs:itemDts.pcs,
            totalQty:itemDts.totalQty,
            totalAmount:itemDts.totalAmount,
            remarks:itemDts.remarks,
            sizeQuantity:itemDts.sizeQuantity                   
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
                          color:itemDts.color,
                          gmtsSizes:itemDts.gmtsSizes,
                          dia:itemDts.dia,
                          itemSizes:itemDts.itemSizes,
                          finishCons:itemDts.finishCons,
                          processLoss:itemDts.processLoss,
                          greyCons:itemDts.greyCons,
                          rate:itemDts.rate,
                          amount:itemDts.amount.toFixed(3),
                          pcs:itemDts.pcs,
                          totalQty:itemDts.totalQty,
                          totalAmount:itemDts.totalAmount,
                          remarks:itemDts.remarks,
                          sizeQuantity:itemDts.sizeQuantity                    
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
    //  element.poNoId=this.poNoId;
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
            poNoId:itemDts.poNoId,
            precostingId:itemDts.precostingId,
            color:itemDts.color,
            gmtsSizes:itemDts.gmtsSizes,
            dia:itemDts.dia,
            itemSizes:itemDts.itemSizes,
            finishCons:itemDts.finishCons,
            processLoss:itemDts.processLoss,
            greyCons:greyCons,
            rate:itemDts.rate,
           // amount:parseInt(itemDts.amount).toFixed(3),
            amount:itemDts.amount,
            pcs:itemDts.pcs,     
            totalQty:(itemDts.sizeQuantity/12)*greyCons,
            totalAmount:totalAmount.toFixed(3),
            remarks:itemDts.remarks,
            sizeQuantity:itemDts.sizeQuantity           
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
          this.averageProcessLoss=totalprocessLoss/consumptionInformationForm.length;
         // this.averageFinishCons=totalfinishCons/consumptionInformationForm.length;
           this.averageFinishCons=totalfinishCons/consumptionInformationForm.length.toFixed(3);
          //Sum Calculation
          //this.totalFinishCons+=parseFloat(itemDts.finishCons).toFixed(2);
        
    }); 

      }
}
