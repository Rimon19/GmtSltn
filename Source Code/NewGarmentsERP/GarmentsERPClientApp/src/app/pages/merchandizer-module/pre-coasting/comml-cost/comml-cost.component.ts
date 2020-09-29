import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CommercialCostsService } from '../../../../@core/mock/commercial-costs.service';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CommercialCosts } from '../../../../@core/data/commercial-costs';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';

@Component({
  selector: 'ngx-comml-cost',
  templateUrl: './comml-cost.component.html',
  styleUrls: ['./comml-cost.component.scss']
})
export class CommlCostComponent implements OnInit,OnDestroy {
  Tostr=new Tostr();
 public count=0;
 public commercialCostsList:CommercialCosts[];
 public PoNoId:any;
 public totalRateIn=0;
 public totalAmount=0;
  commlCostInformationForm: FormArray = this.fb.array([]);
  constructor(
    private fb: FormBuilder,
    private dialog:MatDialog,
    private router:Router,
    private mathdialogService: MatDialogService,
    private toastrService:NbToastrService,
    private commercialCostsService:CommercialCostsService,
    private route:ActivatedRoute,
    private dateResizeService:DateResizeService
    ) { 
      this.PoNoId = this.route.snapshot.paramMap.get('poNoId');
      console.log(this.PoNoId);
      
  }
  ngOnInit() {
    this.editForCommercialCosts();
   }
   //load edit mode data for CommercialCosts 
   editForCommercialCosts(){
    this.commercialCostsService.getAllCommercialCosts().subscribe(data=>{
      console.log(data);
       this.commercialCostsList=data;
       let commercialCostsByPoNoId=this.commercialCostsList.filter(f=>f.poNo==this.PoNoId);
       if(commercialCostsByPoNoId.length>0){
         this.commlCostInformationForm= this.fb.array([]);
         
         (commercialCostsByPoNoId).forEach((itemDts: any) => {
           this.count=this.count+1;
          console.log(this.count);
          this.commlCostInformationForm.push(this.fb.group({
            id:itemDts.id,
            item:itemDts.item,
            poNo:itemDts.poNo,
            rateIn:itemDts.rateIn,
            amount:itemDts.amount,
            status:itemDts.status,   
          }));
          }); 
  
       }else{
         this.commlCostDetailsForm();
       }
     })
   }
    
   
   ngOnDestroy(){
    this.dateResizeService.preCostingSubject.subscribe(i=>{
      console.log(i);
       this.dateResizeService.preCostingSourceObj.next({index:i.index,costComponentform:i.costComponentform,poNoId:i.poNoId,budgetedCost:1.111});
     });
  }
   commlCostDetailsForm() {
        this.count=this.count+1;
      console.log(this.count);
        this.commlCostInformationForm.push(this.fb.group({
          id:[0],
          item:[''],
          poNo:[0],
          rateIn:[0],
          amount:[0],
          status:['']
        }));
      }     
     onDelete(commlCostInformationForm,i) {
      let idToBeDeleted=commlCostInformationForm.value[i].id;
      console.log(idToBeDeleted);
      if(idToBeDeleted<=0){
        this.count=this.count-1;
        commlCostInformationForm.value.splice(i, 1);
                  this.commlCostInformationForm= this.fb.array([]); 
                      (commlCostInformationForm.value).forEach((itemDts: any) => {
                        this.commlCostInformationForm.push(this.fb.group({
                          id:itemDts.id,
                          item:itemDts.item,
                          poNo:itemDts.poNo,
                          rateIn:itemDts.rateIn,
                          amount:itemDts.amount,
                          status:itemDts.status, 
                        }));
                  });  
      }
      if(idToBeDeleted>0){
        this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
        .afterClosed().subscribe(res=>{
          if(res){
            this.commercialCostsService.deleteCommercialCosts(idToBeDeleted).subscribe(s=>{
              this.count=this.count-1;
              commlCostInformationForm.value.splice(i, 1);
                  this.commlCostInformationForm= this.fb.array([]);
                      (commlCostInformationForm.value).forEach((itemDts: any) => {
                        this.commlCostInformationForm.push(this.fb.group({
                          id:itemDts.id,
                          item:itemDts.item,
                          poNo:itemDts.poNo,
                          rateIn:itemDts.rateIn,
                          amount:itemDts.amount,
                          status:itemDts.status,        
                        }));
                  });                      
              this.Tostr.showToast('primary','', 'Deleleted', 'Successfully',this.toastrService);   
            },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);});
          }
        })   
      }                       
 }
      // onAdd(){
      //   const dialogConfig = new MatDialogConfig();
      //   dialogConfig.disableClose = true;
      //   dialogConfig.autoFocus= true;
      //   dialogConfig.width="90%";
      //   dialogConfig.height="70%";  
      //   this.dialog.open(AddConsumptionForEmbelCostComponent, dialogConfig);
      // }
      Active_Inactive: any = [
        // { btn: 'Select', val: 'Select' },
          { btn: 'Active', val: 'Active' },
          { btn: 'Inactive', val:'Inactive' },
          { btn: 'Cancelled', val:'Cancelled' }
        ]
      items: any = [
        // { btn: 'Select', val: 'Select' },
          { btn: 'LC Cost ', val: 'LC Cost ' },
          { btn: 'Port & Clearing', val:'Port & Clearing' },
          { btn: 'Transportation', val:'Transportation' },
          { btn: 'All Together', val:'All Together' },
        ]
      backToPrecostingFromFabricCost(){
        this.router.navigate(["/pages/show-precosting"]);
      }
      onChangeRateIn(commlCostInformationForm){
        this.totalCalculation(commlCostInformationForm);
      }  
      onChangeAmount(commlCostInformationForm){
       this.totalCalculation(commlCostInformationForm);
      }  
      
      totalCalculation(commlCostInformationForm){
       console.log(commlCostInformationForm.value);
       this.totalRateIn=0;
       this.totalAmount=0;
       (commlCostInformationForm.value).forEach((itemDts: any) => {
        this.totalRateIn+=parseFloat(itemDts.rateIn);
        this.totalAmount +=parseFloat(itemDts.amount); 
       });
     }
      recordSubmitcommlCost(commlCostInformationForm){
      console.log(commlCostInformationForm.value);
      commlCostInformationForm.value.forEach(element => {
        element.poNo=this.PoNoId;
        if(element.id!=0){
          this.commercialCostsService.updateCommercialCosts(element).subscribe(data=>{
            
          });
          
        }
        if(element.id==0){
          this.commercialCostsService.addCommercialCosts(element)
          .subscribe(data=>{
            
          })
         
        }
       
      });
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      }

    }

