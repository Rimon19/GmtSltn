import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { PreCosting } from '../../../@core/data/marchanzider-model/pre-costing.model';
import { OrderInfo } from '../../../@core/data/marchanzider-model/order-info.model';
import { Tostr } from '../../../@core/data/tostr.model';
import { MasterPodetailsInfroes } from '../../../@core/data/marchanzider-model/master-podetails-infroes.model';
import { PrecostingService } from '../../../@core/mock/marchandizer/precosting.service';
import { FetchInitialOrderService } from '../../../@core/mock/fetch-initial-order.service';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { FabricCostService } from '../../../@core/mock/marchandizer/fabric-cost.service';
import { TrimCostService } from '../../../@core/mock/marchandizer/trim-cost.service';
import { EmbelishmentCostService } from '../../../@core/mock/marchandizer/embelishment-cost.service';

import { CommercialCostService } from '../../../@core/mock/marchandizer/commercial-cost.service';
import { ConversionCostService } from '../../../@core/mock/marchandizer/conversion-cost.service';
import { YarnCostService } from '../../../@core/mock/marchandizer/yarn-cost.service';
import { CommissionCostService } from '../../../@core/mock/marchandizer/commission-cost.service';
import { BodyPartService } from '../../../@core/mock/marchandizer/body-part.service';
import { YarnCountsService } from '../../../@core/mock/marchandizer/yarn-counts.service';
import { YarnComp1Service } from '../../../@core/mock/marchandizer/yarn-comp1.service';
import { SupplierProfileService } from '../../../@core/mock/library/supplier-profile.service';
import { Router } from '@angular/router';
import { DateResizeService } from '../../../@core/mock/marchandizer/date-resize.service';
import { OtherCostService } from '../../../@core/mock/marchandizer/other-cost.service';
import { YarnTypesService } from '../../../@core/mock/marchandizer/yarn-types.service';
import { CostComponentsMasterService } from '../../../@core/mock/marchandizer/cost-components-master.service';
import { MasterPodetailsInfroesService } from '../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { WashCostService } from '../../../@core/mock/marchandizer/wash-cost.service';

@Component({
  selector: 'ngx-pricequotation',
  templateUrl: './pricequotation.component.html',
  styleUrls: ['./pricequotation.component.scss']
})
export class PricequotationComponent implements OnInit {

  @ViewChild('sort', {static: true}) sort: MatSort;
  @ViewChild('MatPaginator', {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();

  bodyPartList:any;

  displayedColumns=
   [
   'actions',
   'orderId',
   'costingDate',
   'incoterm',
   'incotermPlace',
   'sewEfficiency',
   'jobQty',
   'sewSMV',
   'cutSMV',
   'remark',
  ];
  
 
   /*Commercial Cost button Start*/
   commercialItem: any = [
    { btn: 'Lc Cost', val: 'Lc Cost' },
    { btn: 'Port & Clearing', val: 'Port & Clearing' },
    { btn: 'Transpotation', val: 'Transpotation' },
    { btn: 'All to Gether', val: 'All to Gether' }
  ]
  commnBase: any = [
    { btn: 'In Percentage', val: 'In Percentage' },
    { btn: 'Per Pcs', val: 'Per Pcs' },
    { btn: 'Per Dzn', val: 'Per Dzn' }
  ]
precostings:PreCosting[];
OrderInfo:OrderInfo[];
subscription:Subscription;
Tostr=new Tostr();
//load dropdwn property
YarnCountInfo:any[];
YarnComp1Info:any[];
YarnTypesInfo:any[];
SupliersInfo:any[];
status: any = [
  { btn: 'Active', val: 'Active' },
  { btn: 'InActive', val: 'InActive' },
  { btn: 'Cancelled', val: 'Cancelled' }
];

costComponentMasterInfo:any[]=[];

costComponentForm: FormArray = this.fb.array([]);
public PobNumberItems:MasterPodetailsInfroes[] = [];
poId:number=0;
  constructor(private precostingService:PrecostingService,
   private fetchInitialOrderService: FetchInitialOrderService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
 
   private yarnCountService:YarnCountsService,
   private yarnComp1Service:YarnComp1Service,
   private yarnTypesService:YarnTypesService,
   private supliersService:SupplierProfileService,
   private router:Router,
   private CostComponentsMasterService:CostComponentsMasterService,
   private fb: FormBuilder,
   private MasterPodetailsInfroesService:MasterPodetailsInfroesService,
   private dateResizeService:DateResizeService
   ) {
      this.refresList();
    }

  ngOnInit() {
    
   this.PoDDL();

    this.fetchInitialOrderService.getInitialAllOrderList().subscribe(data=>{
     this.OrderInfo=data;
    
    });
   
   

     this.yarnCountService.getAllYarnCount().subscribe(data=>{
     this.YarnCountInfo=data;
    
     });

     this.yarnComp1Service.getAllYarnComp1().subscribe(data=>{
       this.YarnComp1Info=data;
     });
     
     this.yarnTypesService.getAllYarnTypes().subscribe(data=>{
      this.YarnTypesInfo=data;
     
     });

  




  this.dateResizeService.preCostingSubjectObj.subscribe(data=>{
    console.log("hello! budget cost and index is here:",data)

    if(data==0){
      //initialy page loaded here
    this.refreshCostComponentList();
    }
    else{

      //after visiting other page and edit mode data load here
      console.log('after visiting',this.costComponentForm.value);

      this.poId=data.poNoId;
      this.costComponentForm = this.fb.array([]);
      data.costComponentform[data.index].budgetedCost=data.budgetedCost;
      data.costComponentform.forEach(itmDts => {
          this.costComponentForm.push(this.fb.group({
            id:itmDts.id,
            costComponetId:itmDts.costComponetId,
            costComponentName:itmDts.costComponentName,
            budgetedCost: itmDts.budgetedCost,
            qPrice:itmDts.qPrice,
            jobNoId:itmDts.jobNoId,
            poNoId:itmDts.poNoId
          }));
       
    });
     

  }

  });

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    }
    PoDDL(){
      this.MasterPodetailsInfroesService.getAllMasterPodetailsInfroes().
      subscribe(data=>{
      this.PobNumberItems=data;
    
      });}

 

   
     
  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
   
    addnewPreCostingInputform(){
      this.router.navigate(['/pages/add-precosting']);
    }
      //precosting crud
      save(element){
     
        this.precostingService.addPrecosting(element).subscribe(data=>{
        
          this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
          this.refresList();
        },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
    
      }
    
      edit(element){
        this.router.navigate(["pages/add-precosting/",element.precostingId]);

      }
    
      delete(element){
        this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
                   .afterClosed().subscribe(res=>{
                    if(res){
                      this.precostingService.deletePrecosting(element.precostingId).subscribe(res=>{
                        this.refresList();
                        this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                    }
                   })
      }
    
      refresList(){
        this.subscription=this.precostingService.getAllPrecosting().subscribe(data=>{
          this.precostings=data;
          this.dataSource=new MatTableDataSource(this.precostings);     
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
     
        })
       
      }
  
  
      onChangePoNo(poId){
        if(poId!=0){
          this.CostComponentsMasterService.getAllCostComponentsMasterDetails().subscribe(data=>{
            data.sort((a, b) => parseInt(a.costComponetId) - parseInt(b.costComponetId));
          let costComponentMasterDetailsInfoByPoNoId= data.filter(f=>f.poNoId==poId);
          if(costComponentMasterDetailsInfoByPoNoId.length!=0){
        
            this.costComponentForm = this.fb.array([]);
            costComponentMasterDetailsInfoByPoNoId.forEach(itmDts => {
                this.costComponentForm.push(this.fb.group({
                  id:itmDts.id,
                  costComponetId:itmDts.costComponetId,
                  costComponentName:itmDts.costComponentName,
                  budgetedCost: itmDts.budgetedCost,
                  qPrice:itmDts.qPrice,
                  jobNoId:itmDts.jobNoId,
                  poNoId:itmDts.poNoId
                }));
             
          });
           
        
          }else{
           this.refreshCostComponentList();
        
          }
          });
        }else{
         this.refreshCostComponentList();
      
        }
      
      }
      submitCostComponent(costComponentForm){
      
        if(this.poId==undefined||this.poId==0){
          this.Tostr.showToast("danger","", "Please Select Po No !", "",this.toastrService);
          return;
        }
        costComponentForm.value.forEach(element => {
          element.poNoId=this.poId ;
          element.jobNoId=1 ;// test job number
          if(element.id!=0){
           
            this.CostComponentsMasterService.update(element).subscribe(data=>{
            
            });
          }
          if(element.id==0){
            element.poNoId=this.poId ;
            element.jobNoId=1 ;
           
            this.CostComponentsMasterService.add(element).subscribe(data=>{
            
            });
          }
          
        });
        this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
        //refresh code below
        this.poId=0;
       this.refreshCostComponentList();
      }
      deletCostComponent(costComponentForm){
      
        if(this.poId==undefined||this.poId==0){
          this.Tostr.showToast("danger","", "Please Select Po No !", "",this.toastrService);
          return;
        }
      
          this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
          .afterClosed().subscribe(res=>{
           if(res){
            costComponentForm.value.forEach(element => {
              this.CostComponentsMasterService.delete(element.id).subscribe(res=>{
              
               
              },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
             });
             this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
            
             this.poId=0;
             this.refreshCostComponentList();
          
            }
          })
       
      }
      refreshCostComponentList(){
        this.CostComponentsMasterService.getAllCostComponentsMaster().subscribe(data=>{
          this.costComponentMasterInfo=data;
         
          this.costComponentForm = this.fb.array([]);
          this.costComponentMasterInfo.forEach(element => {
            this.costComponentForm.push(this.fb.group({
              id:0,
              costComponetId:element.id,
              costComponentName:element.cost_ComponetName,
              budgetedCost: 0,
              qPrice: 0,
              jobNoId:0,
                poNoId:0
            }));
          });
      });
      
      }
      addCostMultipleRow(i,poNoId){
 
        if(poNoId==undefined||poNoId==0){
          this.Tostr.showToast("danger","", "Please Select Po No !", "",this.toastrService);
          return;
        }
        if(i==0){
              this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
              this.router.navigate(['/pages/add-cost',poNoId]);       
            }
            if(i==1){
               this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
             
              this.router.navigate(['/pages/trim-cost',poNoId]);      
            }
            if(i==2){
              this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
              this.router.navigate(['/pages/embel-cost',poNoId]);    
            }
            if(i==3){
              this.router.navigate(['/pages/wash-cost',poNoId]); 
              this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
              this.router.navigate(['/pages/wash-cost',poNoId]);   
            }
            if(i==4){
              this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
              this.router.navigate(['/pages/comml-cost',poNoId]); 
            }
            if(i==18){
              this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
              this.router.navigate(['/pages/commission-cost',poNoId]); 
            }
       
       
        
       }


}
