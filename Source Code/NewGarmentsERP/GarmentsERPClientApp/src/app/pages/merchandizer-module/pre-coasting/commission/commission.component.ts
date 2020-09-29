import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { CommissionCostService } from '../../../../@core/mock/marchandizer/commission-cost.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit ,OnDestroy{
  Tostr=new Tostr();
  PoNoId:any;
  public count=0;
  commissionInformationForm: FormArray = this.fb.array([]);
  TotalCommnRate=0;
  TotalAmmount=0;
  constructor(
    private fb: FormBuilder,
    private dialog:MatDialog,
    private router:Router,
    private dateResizeService:DateResizeService,
    private mathdialogService: MatDialogService,
    private commissionCostService:CommissionCostService,
    private toastrService:NbToastrService,
    private route:ActivatedRoute
    ) { 
      this.PoNoId = this.route.snapshot.paramMap.get('poNoId');
      console.log(this.PoNoId);
      this.commissionCostService.getAllCommissionCost().subscribe(data=>{
        let commissionCosts=data.filter(f=>f.poNoId==this.PoNoId);
        if(commissionCosts.length!=0){
          
          this.commissionInformationForm= this.fb.array([]);
          this.TotalCommnRate=0;
          this.TotalAmmount=0;
          (commissionCosts).forEach((itemDts: any) => {
            this.count=this.count+1;
            this.TotalCommnRate +=parseInt(itemDts.commnRate) ;
            this.TotalAmmount +=parseInt(itemDts.amount);
            this.commissionInformationForm.push(this.fb.group({
              id:itemDts.id,
              poNoId :itemDts.poNoId,
              particulars :itemDts.particulars,
              commnBase :itemDts.commnBase,
              commnRate:itemDts.commnRate,
              amount:itemDts.amount,
              status :itemDts.status               
            }));
      });
        
        }else{
          this.commissionDetailsForm();
        }
      })
  }
  ngOnInit() {

   }
   ngOnDestroy(){
    this.dateResizeService.preCostingSubject.subscribe(i=>{
      console.log(i);
       this.dateResizeService.preCostingSourceObj.next({index:i.index,costComponentform:i.costComponentform,poNoId:i.poNoId,budgetedCost:1.111});
     });
  }
   commissionDetailsForm() {
        this.count=this.count+1;
      console.log(this.count);
        this.commissionInformationForm.push(this.fb.group({
          id:0,
          poNoId :0,
          particulars :'',
          commnBase :'',
          commnRate:0,
          amount:0,
          status :''
        }));
      }     
     onDelete(commissionInformationForm,i) {
    let idToBeDeleted=commissionInformationForm.value[i].id;
         if(idToBeDeleted==0){
          this.count=this.count-1;
          commissionInformationForm.value.splice(i, 1);
          this.commissionInformationForm= this.fb.array([]);
            
              (commissionInformationForm.value).forEach((itemDts: any) => {
                this.commissionInformationForm.push(this.fb.group({
                  id:itemDts.id,
                  poNoId :itemDts.poNoId,
                  particulars :itemDts.particulars,
                  commnBase :itemDts.commnBase,
                  commnRate:itemDts.commnRate,
                  amount:itemDts.amount,
                  status :itemDts.status               
                }));
          });  
        }
        if(idToBeDeleted>0){
          this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
          .afterClosed().subscribe(res=>{
            if(res){
              this.commissionCostService.deleteCommissionCost(idToBeDeleted).subscribe(s=>{
                          
                this.count=this.count-1;
                commissionInformationForm.value.splice(i, 1);
                this.commissionInformationForm= this.fb.array([]);
                
                    (commissionInformationForm.value).forEach((itemDts: any) => {
                      this.commissionInformationForm.push(this.fb.group({
                        id:itemDts.id,
                        poNoId :itemDts.poNoId,
                        particulars :itemDts.particulars,
                        commnBase :itemDts.commnBase,
                        commnRate:itemDts.commnRate,
                        amount:itemDts.amount,
                        status :itemDts.status               
                      }));
                });  
                          
                this.Tostr.showToast('primary','', 'Deleleted', 'Successfully',this.toastrService);
                
              },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);});
            }
          })
        }
                            
      }
      onSubmit(commissionInformationForm){
        commissionInformationForm.value.forEach(element => {
          element.poNoId=this.PoNoId ;
         
          if(element.id!=0){
            this.commissionCostService.updateCommissionCost(element).subscribe(data=>{
            });
          }
          if(element.id==0){
            console.log(element.id);
            this.commissionCostService.addCommissionCost(element).subscribe(data=>{
            
            });
          }
          
        });
       
        this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      }
      // onAdd(){
      //   const dialogConfig = new MatDialogConfig();
      //   dialogConfig.disableClose = true;
      //   dialogConfig.autoFocus= true;
      //   dialogConfig.width="90%";
      //   dialogConfig.height="70%";  
      //   this.dialog.open(AddConsumptionForEmbelCostComponent, dialogConfig);
      // }
      backToPrecostingFromFabricCost(){
        this.router.navigate(["/pages/show-precosting"]);
      }
      onChangeCommnBaseRate(commissionInformationForm){
        this.totalCalculation(commissionInformationForm);
      }
      onChangeAmount(commissionInformationForm){
        this.totalCalculation(commissionInformationForm);
      }
      totalCalculation(commissionInformationForm){
        this.commissionInformationForm= this.fb.array([]);
        this.TotalCommnRate=0;
        this.TotalAmmount=0;
        (commissionInformationForm.value).forEach((itemDts: any) => {
          this.count=this.count+1;
          this.TotalCommnRate +=parseInt(itemDts.commnRate) ;
            this.TotalAmmount +=parseInt(itemDts.amount);
          this.commissionInformationForm.push(this.fb.group({
            id:itemDts.id,
            poNoId :itemDts.poNoId,
            particulars :itemDts.particulars,
            commnBase :itemDts.commnBase,
            commnRate:itemDts.commnRate,
            amount:itemDts.amount,
            status :itemDts.status               
          }));
        });
      }

}
