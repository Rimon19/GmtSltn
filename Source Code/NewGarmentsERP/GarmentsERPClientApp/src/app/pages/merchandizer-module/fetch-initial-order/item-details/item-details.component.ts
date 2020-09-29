import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { ItemDetailsOrderEntriesService } from '../../../../@core/mock/marchandizer/item-details-order-entries.service';
import { NgForm, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { OrderInfo } from '../../../../@core/data/marchanzider-model/order-info.model';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { AddInitialOrderComponent } from '../add-initial-order/add-initial-order.component';
import { Router } from '@angular/router';
import { items } from './../../../../@core/data/items';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  orderAutoId :any =0
  public count=0;
  Tostr=new Tostr();
   totalSMV:number=0;
  public JobNumberItems:OrderInfo[] = [];
  itemDetailsInformationForm: FormArray = this.fb.array([]);
  public totalSetRatio=0;
  public totalSewSmvPcs=0;
  public totalCutSmvPcs=0;
  public totalFinSmvPcs=0;
  subscription:Subscription;
  setOrPcs:any;
  constructor(
    public dialogbox: MatDialogRef<ItemDetailsComponent>,
    private  itemDetailsOrderEntriesService:ItemDetailsOrderEntriesService,
    private toastrService:NbToastrService,
    private datapassingService:DatapassingService,
    private router:Router, 
    private fb: FormBuilder,
    private dropdownValueService: DropdownValueService,
    private fetchInitialOrderService:FetchInitialOrderService,
    ) { 
      this.orderAutoId=this.dialogbox.id;
    
     
     
      this.itemDetailsOrderEntriesService.getAllItemDetailsOrderEntries().subscribe(data=>{
       
      let itemDtls=data.filter(f=>f.order_entry_id==parseInt(this.orderAutoId));
     
    //  this.itemDetailsInformationForm = this.fb.array([]);
      this.totalSetRatio=0;
      this.totalSewSmvPcs=0;
      this.totalCutSmvPcs=0;
      this.totalFinSmvPcs=0;
      itemDtls.forEach(element => {
        this.count=this.count+1;
        this.totalSetRatio +=element.ratio;
         this.totalSewSmvPcs +=element.sew_smv_pcs;
         this.totalCutSmvPcs+=element.cut_smv_pcs;
         this.totalFinSmvPcs+=element.fin_smv_pcs;

          this.itemDetailsInformationForm.push(this.fb.group({
            id:element.id,
            order_entry_id:element.order_entry_id,
            item:element.item,
            ratio: element.ratio,
            sew_smv_pcs: element.sew_smv_pcs,
            cut_smv_pcs: element.cut_smv_pcs,
            fin_smv_pcs: element.fin_smv_pcs,
            complexity:element.complexity,
            print:element.print,
            embro_yes_no:element.embro_yes_no,
            embro_number:element.embro_number,
            wash_yes_no:element.wash_yes_no,
            wash_number:element.wash_number,
            sp_works_yes_no:element.sp_works_yes_no,
            sp_works_number: element.sp_works_number,
            gmts_dyeing_yes_no:element.gmts_dyeing_yes_no,
            gmts_dyeing_number:element.gmts_dyeing_number,
            aop_yes_no:element.aop_yes_no,
            aop_number:element.aop_number
            
          
          }));
      }); 
     
      })
    
  }

  ngOnInit() {
    this.JobNumberDDL();
    this.itemDetailsForm();
   this.dropdownValueService.getGarmentsItem();
    this.setOrPcs=localStorage.getItem('Uom');
   }
   test(){
    if(this.setOrPcs=='31'){
      this.itemDetailsForm();
    } 
   }
  onClose(){
    this.dialogbox.close();
  }

      
     
      complexity_btn: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Fancy', val: 'Fancy' },
        { btn: 'Critical', val: 'Critical' },
        { btn: 'Average', val: 'Average' }
      ]
      yes_no_btn: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Yes', val: 'Yes' },
        { btn: 'No', val: 'No' }
      ]
      yes_no_btn1: any = [
        // { btn: 'Select', val: 'Select' },
          { btn: 'Yes', val: 'Yes' },
          { btn: 'No', val: 'No' }
        ] 
      
      onSubmit(itemDetailsInformationForm){
        this.itemDetailsInformationForm.value.forEach(element => {
          this.totalSMV =this.totalSMV+(parseInt(element.ratio) *parseInt(element.sew_smv_pcs)) ;
        });
       
       this.datapassingService.sourceItemsDetails.next({SMV:this.totalSMV,ItemDetailsInformationForm:itemDetailsInformationForm.value});
       this.dialogbox.close();
      }
      
      JobNumberDDL(){
        this.fetchInitialOrderService.getInitialAllOrderList().
        subscribe(data=>{
        this.JobNumberItems=data;
       
        });
      }  
         
    
      
      itemDetailsForm() {
        this.count=this.count+1;
     
        this.itemDetailsInformationForm.push(this.fb.group({
          id:0,
          order_entry_id:0,
          item:['',Validators.required],
          ratio: 0,
          sew_smv_pcs: 0,
          cut_smv_pcs: 0,
          fin_smv_pcs: 0,
          complexity:[''],
          print:[''],
          embro_yes_no:[''],
          embro_number: 0,
          wash_yes_no:[''],
          wash_number: 0,
          sp_works_yes_no:[''],
          sp_works_number: 0,
          gmts_dyeing_yes_no:[''],
          gmts_dyeing_number:[0] ,
          aop_yes_no:[''],
          aop_number:0
          
        
        }));
      } 

     
 onDelete(order_entry_id,i) {
  this.count=this.count-1;
   //itemDetailsInformationForm.value.splice(i, 1);
   if (order_entry_id == 0){
    this.itemDetailsInformationForm.removeAt(i);
    this.totalCalculation(this.itemDetailsInformationForm);
   }
  
    else
     this.itemDetailsOrderEntriesService.deleteItemDetailsOrderEntries(order_entry_id).subscribe(
      res => {
       this.itemDetailsInformationForm.removeAt(i);
        this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
      
       this.totalCalculation(this.itemDetailsInformationForm);
      

      });
      
                          
      }
onChangeSetRation(itemDetailsInformationForm){
  this.totalCalculation(itemDetailsInformationForm);
}

onChangeSewSmv(itemDetailsInformationForm){
  this.totalCalculation(itemDetailsInformationForm);
}
onChangeCutSmv(itemDetailsInformationForm){
  this.totalCalculation(itemDetailsInformationForm);
}
onChangeFinSmv(itemDetailsInformationForm){
  this.totalCalculation(itemDetailsInformationForm);
}
      totalCalculation(itemDetailsInformationForm){
        
        this.totalSetRatio=0;
        this.totalSewSmvPcs=0;
        this.totalCutSmvPcs=0;
        this.totalFinSmvPcs=0;

        (itemDetailsInformationForm.value).forEach((itemDts: any) => {
         this.totalSetRatio +=parseInt(itemDts.ratio);
         this.totalSewSmvPcs +=parseInt(itemDts.sew_smv_pcs);
         this.totalCutSmvPcs+=parseInt(itemDts.cut_smv_pcs);
         this.totalFinSmvPcs+=parseInt(itemDts.fin_smv_pcs);
        });
      }

      onChangeGarmentsItem(item,itemDetailsInformationForm,i){
   
         
        let gmtsItem=itemDetailsInformationForm.value.filter(f=>parseInt(f.item)==item);
      
        if(gmtsItem.length>1){
          alert('duplicate garments item not allowed ');
          itemDetailsInformationForm.value[i].item='';
          this.itemDetailsInformationForm= this.fb.array([]);
          itemDetailsInformationForm.value.forEach(element => {
            this.itemDetailsInformationForm.push(this.fb.group({

              id:element.id,
              order_entry_id:element.order_entry_id,
              item:element.item,
              ratio: element.ratio,
              sew_smv_pcs: element.sew_smv_pcs,
              cut_smv_pcs: element.cut_smv_pcs,
              fin_smv_pcs: element.fin_smv_pcs,
              complexity:element.complexity,
              print:element.print,
              embro_yes_no:element.embro_yes_no,
              embro_number:element.embro_number,
              wash_yes_no:element.wash_yes_no,
              wash_number:element.wash_number,
              sp_works_yes_no:element.sp_works_yes_no,
              sp_works_number: element.sp_works_number,
              gmts_dyeing_yes_no:element.gmts_dyeing_yes_no,
              gmts_dyeing_number:element.gmts_dyeing_number ,
              aop_yes_no:element.aop_yes_no,
              aop_number:element.aop_number
              
            
            }));
          });
         
      
          
        }
      }  
}