import { Component, OnInit } from '@angular/core';
import { MasterPodetailsInfroesService } from '../../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { NgForm } from '@angular/forms';

import { NbDateService, NbToastrService } from '@nebular/theme';
import { PackingInfoes } from '../../../../@core/data/marchanzider-model/packing-infoes.model';
import { PackingInfoesService } from '../../../../@core/mock/marchandizer/packing-infoes.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { Tostr } from '../../../../@core/data/tostr.model';
//import { MatDialogConfig} from '@angular/material/dialog/typings/dialog-config';
import { MatDialogConfig,MatDialog } from '@angular/material';
import { AddInputPannelInformationComponent } from '../../input-pannel-information/add-input-pannel-information/add-input-pannel-information.component';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'ngx-add-po-information',
  templateUrl: './add-po-information.component.html',
  styleUrls: ['./add-po-information.component.scss']
})
export class AddPoInformationComponent implements OnInit {
  editedId:any;  
  delayForListSettings:IDropdownSettings;
  Tostr=new Tostr();
        poDetailsInfo:any[]=[];
        public poOrderStatusInfoesItems:any[] = [];
        public PoStatusItems:any[] = [];
        public packingInfoesItems:PackingInfoes[] = []; 
       
  constructor(
    protected dateService:NbDateService<Date>,
    public masterPodetailsInfroesService:MasterPodetailsInfroesService,
    
    private dateResizeService:DateResizeService,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,   
    private packingInfoesService:PackingInfoesService,
    private dialog:MatDialog,
    private router:Router,
    private route:ActivatedRoute,
    private dropdownValueService:DropdownValueService
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('orderAutoId');
   
    }
    

          ngOnInit(){
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
              avg_Price:0,
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
          onSubmit(form:NgForm){
            //check poExisOrNot
            this.masterPodetailsInfroesService.getAllMasterPodetailsInfroes().subscribe(data=>{
            this.poDetailsInfo=data;
            let poDetailsInfoByPoNo = (form.value.pO_No) ?
            this.poDetailsInfo.filter(p =>p.initialOrderID==oderAutoId&& p.pO_No.toLowerCase()==
            form.value.pO_No.toLowerCase()) :
            this.poDetailsInfo; 

            if(poDetailsInfoByPoNo.length>=1){
              this.Tostr.showToast('danger','', 'Po No is Already Exist !', '',this.toastrService);
            }else{
              var oderAutoId = localStorage.getItem('oderAutoId');
               form.value.initialOrderID=parseInt(oderAutoId) ;
               form.value.pO_Received_Date=  this.dateResizeService.dateResize(form.value.pO_Received_Date);
               form.value.pub_Shipment_Date=  this.dateResizeService.dateResize(form.value.pub_Shipment_Date);
               form.value.org_Shipment_Date=  this.dateResizeService.dateResize(form.value.org_Shipment_Date);
               form.value.fac_Receive_Date=  this.dateResizeService.dateResize(form.value.fac_Receive_Date);
            
            if(form.value.delay_For!=""){
              let delayFor='';
              form.value.delay_For.forEach(element => {
                delayFor=delayFor+element.value+',';
              });
             
             form.value.delay_For=delayFor;

            }
               
              this.masterPodetailsInfroesService.addMasterPodetailsInfroes(form.value).subscribe(res=>
                {
                  this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
                  this.resetFormFormasterPodetailsInfroes(form);
                  this.router.navigate(["/pages/show-po-information",this.editedId]);
                },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);})
            
            
            }
            
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
         
       

          backTo(){
            this.router.navigate(["/pages/show-po-information",this.editedId]);
          }
}

