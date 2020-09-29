import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { ItemDetailsOrderEntriesService } from '../../../../@core/mock/marchandizer/item-details-order-entries.service';
import { NgForm, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { OrderInfo } from '../../../../@core/data/marchanzider-model/order-info.model';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { AddInitialOrderComponent } from '../add-initial-order/add-initial-order.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../../@core/mock/items.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';

@Component({
  selector: 'ngx-edit-item-details',
  templateUrl: './edit-item-details.component.html',
  styleUrls: ['./edit-item-details.component.scss']
})
export class EditItemDetailsComponent implements OnInit {

  public count=0;
  Tostr=new Tostr();
  public JobNumberItems:OrderInfo[] = [];
  itemDetailsInformationForm: FormArray = this.fb.array([]);
  public totalSetRatio=0;
  public totalSewSmvPcs=0;
  public totalCutSmvPcs=0;
  public totalFinSmvPcs=0;
  public key:string='';
  constructor(
    public dialogbox: MatDialogRef<EditItemDetailsComponent>,
    private  itemDetailsOrderEntriesService:ItemDetailsOrderEntriesService,
    private toastrService:NbToastrService,
    private router:Router, 
    private fb: FormBuilder,
    private fetchInitialOrderService:FetchInitialOrderService,
    private route:ActivatedRoute,
    private mathdialogService: MatDialogService
  
    ) { 

     // this.key== this.route.snapshot.paramMap.get('key');
      
      if(dialogbox.id!=null){
         this.itemDetailsOrderEntriesService.getAllItemDetailsOrderEntries().subscribe(data=>{
           
           let searchItemDetailsByOrderAutoId = (dialogbox.id) ?
           data.filter(p => p.order_entry_id == parseInt(dialogbox.id)) :
           data;

         
          if(searchItemDetailsByOrderAutoId.length>=1){
            
 (searchItemDetailsByOrderAutoId).forEach((itemDts: any) => {
           this.count=this.count+1;
            this.itemDetailsInformationForm.push(this.fb.group({
              id:itemDts.id,
              item:itemDts.item,
              ratio: itemDts.ratio,
              sewSmvPcs: itemDts.sewSmvPcs,
              cutSmvPcs: itemDts.cutSmvPcs,
              finSmvPcs: itemDts.finSmvPcs,
              complexity:itemDts.complexity,
              print:itemDts.print,
              embroYesNo:itemDts.embroYesNo,
              embroNumber: itemDts.embroNumber,
              washYesNo:itemDts.washYesNo,
              washNumber: itemDts.washNumber,
              spWorksYesNo:itemDts.spWorksYesNo,
              spWorksNumber: itemDts.spWorksNumber,
              gmtsDyeingYesNo:itemDts.gmtsDyeingYesNo,
              gmtsDyeingNumber: itemDts.gmtsDyeingNumber,
              aopYesNo:itemDts.aopYesNo,
              aopNumber:itemDts.aopNumber
                                
                }));
           });    
          }
           

         })
      }
  }

  ngOnInit() {
    this.JobNumberDDL();
   this.resetFormItemDetailsInfo();
 //  this.itemDetailsForm();
 
   }
  onClose(){
    this.dialogbox.close();
    this.fetchInitialOrderService.filter('Register click');
  }
      item_btn: any = [
      //{ btn: 'Select', val: 'Select' },
        { btn: 'Blanket', val: 'Blanket' },
        { btn: 'Bodysuit', val: 'Bodysuit' },
        { btn: 'Burmuda', val: 'Burmuda' },
        { btn: 'Cap', val: 'Cap' },
        { btn: 'Dress', val: 'Dress' },
        { btn: 'Dungaress', val: 'Dungaress' },
        { btn: 'Hoody Jacket', val: 'Hoody Jacket' },
        { btn: 'Jacket', val: 'Jacket' },
        { btn: 'Legging', val: 'Legging' },
        { btn: 'Long Sleeve Dress with Frill', val: 'Long Sleeve Dress with Frill' },
        { btn: 'Long Sleeve Raglam Tee', val: 'Long Sleeve Raglam Tee' },
        { btn: 'Long Sleeve Tee', val: 'Long Sleeve Tee' },
        { btn: 'Necker Chief', val: 'Necker Chief' },
        { btn: 'Pant', val: 'Pant' },
        { btn: 'Playsuit', val: 'Playsuit' },
        { btn: 'Polo Shirt', val: 'Polo Shirt' },
        { btn: 'T-Shirt', val: 'T-Shirt' },
        { btn: 'TANK TOP', val: 'TANK TOP' },
        { btn: 'Trousers', val: 'Trousers' },
        { btn: 'shorts', val: 'shorts' }
      ]
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

      // onSubmit(form:NgForm){
     
      // localStorage.setItem('itemDetailsObject', JSON.stringify(form.value));
      // this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      // this.resetFormItemDetailsInfo(form);
      // this.dialogbox.close();
      // // this.itemDetailsOrderEntriesService.addItemDetailsOrderEntries(form.value).subscribe(res=>
      // //   {
  
      // //     this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      // //     this.resetFormItemDetailsInfo(form);
      // //   },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);})
    
    
    
      // }
      onSubmit(itemDetailsInformationForm){
       // localStorage.setItem('itemDetailsObject', JSON.stringify(itemDetailsInformationForm.value));
       // this.dialogbox.close();

       this.itemDetailsOrderEntriesService.updateItemDetailsOrderEntries(itemDetailsInformationForm.value).subscribe(s=>{
      
        this.Tostr.showToast('primary','', 'Update', 'Successfull !',this.toastrService);
        this.dialogbox.close();


       })

      
      }
      resetFormItemDetailsInfo(form?:NgForm){
        if(form!=null)
        form.resetForm();
        // this.itemDetailsOrderEntriesService.ItemDetails = {
        //  id: 0,
        //  orderEntryId: 0,
        //  item:'',
        //  ratio: 0,
        //  sewSmvPcs: 0,
        //  cutSmvPcs: 0,
        //  finSmvPcs: 0,
        //  complexity:'',
        //  print:'',
        //  embroYesNo:'',
        //  embroNumber: 0,
        //  washYesNo:'',
        //  washNumber: 0,
        //  spWorksYesNo:'',
        //  spWorksNumber: 0,
        //  gmtsDyeingYesNo:'',
        //  gmtsDyeingNumber: 0,
        //  aopYesNo:'',
        //  aopNumber:0,
        //  totalratio:0,
        //  totalsewSmvPcs:0,
        //  totalcutSmvPcs:0,
        //  totalfinSmvPcs:0,
        // }
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
          item:['',Validators.required],
          id:0,
          ratio: 0,
          sewSmvPcs: 0,
          cutSmvPcs: 0,
          finSmvPcs: 0,
          complexity:['',Validators.required],
          print:['',Validators.required],
          embroYesNo:['',Validators.required],
          embroNumber: 0,
          washYesNo:['',Validators.required],
          washNumber: 0,
          spWorksYesNo:['',Validators.required],
          spWorksNumber: 0,
          gmtsDyeingYesNo:['',Validators.required],
          gmtsDyeingNumber: 0,
          aopYesNo:['',Validators.required],
          aopNumber:0
          
        
        }));
      } 

     
 onDelete(itemDetailsInformationForm,i) {
  this.count=this.count-1;
 
  
            if(itemDetailsInformationForm.value[i].id==0){
              itemDetailsInformationForm.value.splice(i, 1);
              this.itemDetailsInformationForm= this.fb.array([]);  
                (itemDetailsInformationForm.value).forEach((itemDts: any) => {
                  this.itemDetailsInformationForm.push(this.fb.group({
                    item:['',Validators.required],
                    ratio: 0,
                    sewSmvPcs: 0,
                    cutSmvPcs: 0,
                    finSmvPcs: 0,
                    complexity:['',Validators.required],
                    print:['',Validators.required],
                    embroYesNo:['',Validators.required],
                    embroNumber: 0,
                    washYesNo:['',Validators.required],
                    washNumber: 0,
                    spWorksYesNo:['',Validators.required],
                    spWorksNumber: 0,
                    gmtsDyeingYesNo:['',Validators.required],
                    gmtsDyeingNumber: 0,
                    aopYesNo:['',Validators.required],
                    aopNumber:0
                                      
                  }));
            });   
            
          }else{
              this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
                        .afterClosed().subscribe(res=>{
                          if(res){
                            this.itemDetailsOrderEntriesService
                            .deleteItemDetailsOrderEntries(itemDetailsInformationForm.value[i].id)
                            .subscribe(s=>{
                            
                              this.Tostr.showToast('primary','', 'Deleleted', 'Successfully',this.toastrService);
                              this.dialogbox.close();
                            },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);});
                          }
                        })
  
             
            }
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
         this.totalSewSmvPcs +=parseInt(itemDts.sewSmvPcs);
         this.totalCutSmvPcs+=parseInt(itemDts.cutSmvPcs);
         this.totalFinSmvPcs+=parseInt(itemDts.finSmvPcs);
          // this.itemDetailsInformationForm.push(this.fb.group({
          //   item:['',Validators.required],
          //   ratio: 0,
          //   sewSmvPcs: 0,
          //   cutSmvPcs: 0,
          //   finSmvPcs: 0,
          //   complexity:['',Validators.required],
          //   print:['',Validators.required],
          //   embroYesNo:['',Validators.required],
          //   embroNumber: 0,
          //   washYesNo:['',Validators.required],
          //   washNumber: 0,
          //   spWorksYesNo:['',Validators.required],
          //   spWorksNumber: 0,
          //   gmtsDyeingYesNo:['',Validators.required],
          //   gmtsDyeingNumber: 0,
          //   aopYesNo:['',Validators.required],
          //   aopNumber:0
                              
          // }));
        });
      }


    
}
