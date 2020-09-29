import { Component, OnInit } from '@angular/core';
import { VariableSettingsTableService } from './../../../../@core/mock/library/variable-settings-table.service';
import { VariableListService } from '../../../../@core/mock/library/variable-list.service';
import { VariableList } from '../../../../@core/data/Library-Modul-model/variable-list.model';
import { company } from '../../../../@core/data/company';
import { CompanyService } from '../../../../@core/mock/company.service';
import { NgForm, FormBuilder, FormArray } from '@angular/forms';
import { VariableSettingsTable } from '../../../../@core/data/Library-Modul-model/variable-settings-table';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  valueOne: string = "";
  valueTwo: string = "";
  valueThree: string = "";
  valueFour: string = "";
  valueFive: string = "";
  valueSix: string = "";
  valueSeven: string = "";
  valueEight: string = "";
  valueNine: string = "";
  valueTen: string = "";
 
  valueEleven: string = "";
  valueTwelve: string = "";
  
  isUptoOne=false;
  isUptoTwo=false;

  hideNShowList=[];

  isShowListForLastProcessProdQtyControl=false;
  listForLastProcessProdQtyControl=[];

  isShowListForLastProcessProdQtyControlSweater=false;
  listForLastProcessProdQtyControlSweater=[];

  isShowListForServiceRateSource=false;
  listForServiceRateSource=[];
  
  public variableSettingsTableList:VariableSettingsTable[]=[];
  public variableList:VariableList[]=[];
  public companyListItems:company[]=[];
  public batchNoList:any[]=[];
  public barcodeGenerationList:any[]=[];
  public batchMaintainedList:any[]=[];
  public bookingApprovalNeededForKnittingPlanList:any[]=[];
  public bundleNoCreationList:any[]=[];
  public deleveryBasisList:any[]=[];
  public batchNoMandatoryList:any[]=[];
  public pieceRateWQLimitList:any[]=[];
  public fabricProductionItemCategoryList:any[]=[];
  public productionControlList:any[]=[]; 
  public fabricSourceList:any[]=[];
  public fabricinMachineLevelList:any[]=[];
  public QCMandatoryList:any[]=[];
  public processCostingMaintainList:any[]=[];
  public rateSourceList:any[]=[];
  public productionResourceAllocationList:any[]=[];
  public productionUpdateAreasList:any[]=[];
  public RMGNoCreationList:any[]=[];
  public SMVSourceList:any[]=[];
  public TXTBusinessConceptList:any[]=[];
  public workingCompanyList:any[]=[];
  public precedingProcessList:any[]=[];
  public controlList:any[]=[];
  public prodQtyCategoryList:any[]=[];
  public precedingProcessSweaterList:any[]=[];
  public controlSweaterList:any[]=[];
  public prodQtyCategorySweaterList:any[]=[];
  public serviceTypeList:any[]=[];
  public serviceRateStatusList:any[]=[];
  public itemCategoryList:any[]=[];
  public autoUpdateList:any[]=[];
  public FPOCItemCategoryList:any[]=[];
  public fabricinRollLevelList:any[]=[];
  public febricInRollUpToList:any[]=[];

  isShowSaveButton=true;
  isShowEditButton=false;
  isShowDeleteButton=false;
  Tostr=new Tostr();
  finishFabricGroupingStandardForm: FormArray = this.fb.array([]);
  greyFabricGroupingStandardForm: FormArray = this.fb.array([]);
  sewingPieceRateWQLimitStandardForm: FormArray = this.fb.array([]);
    constructor(
      private fb: FormBuilder,
      private  variableListService:VariableListService,
      private  companyService:CompanyService,
      private  toastrService:NbToastrService,
      private   mathdialogService: MatDialogService,
      public variableSettingsTableService:VariableSettingsTableService,
      private staticFeaturesService:StaticFeaturesService
      ) { }
  
    ngOnInit(){
      this.resetForm();
      this.companyDDL();
      this.variableListDDL();
      this.batchNoDDL();
      this.barcodeGenerationDDL();
      this.batchMaintainedDDl();
      this.bookingApprovalNeededForKnittingPlanDDL();
      this.bundleNoCreationLDDL();
      this.deleveryBasisDDL();
      this.batchNoMandatoryDDL();
      this.pieceRateWQLimitDDL();
      this.fabricProductionItemCategoryDDL();
      this.productionControlDDL();
      this.fabricSourceDDL();
      this.fabricinMachineLevelDDL();
      this.QCMandatorDDL();
      this.processCostingMaintainDDL()
      this.rateSourceDDL();
      this.productionResourceAllocationDDL();
      this.productionUpdateAreasDDL();
      this.RMGNoCreationDDL();
      this.SMVSourceDDL();
      this.TXTBusinessConceptDDL();
      this.workingCompanyDDL();
      this.precedingProcessDDL();
      this.controlDDL();
      this.prodQtyCategoryDDL();
      this.precedingProcessSweaterDDL();
      this.prodQtyCategorySweaterDDL();
      this.controlSweaterDDL();
      this.serviceTypeDDL();
      this.serviceRateStatusDDL();
      this.itemCategoryDDL();
      this.autoUpdateDDL();
      this.FPOCItemCategoryDDL();
      this.febricInRollUpToDDL();
      this.fabricinRollLevelDDL();


   
      


    }
    resetForm(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.variableSettingsTableService.variableSettingsTable = {
        id: 0,
     companyId: 0,
     moduleId: 0,
     countPageInputField: 0,
     variableListId: 0,
     labelOne: '',
     valueOne: '',
     labelTwo: '',
     valueTwo: '',
     labelThree: '',
     valueThree: '',
     labelFour: '',
     valueFour: '',
     labelFive: '',
     valueFive: '',
     labelSix: '',
     valueSix: '',
     labelSeven:'',
     valueSeven:''

      }
    }

    finishFabricGroupingForm() {
  
      this.finishFabricGroupingStandardForm.push(this.fb.group({
        id:0,
        fabricGrade :'',
        lowerValue :0,
        upperValue:0
        
      }));
    }

    sewingPieceRateWQLimitForm() {
  
      this.sewingPieceRateWQLimitStandardForm.push(this.fb.group({
        id:0,
        slabRangeStart :0,
        slabRangeEnd :0,
        excess:0
        
      }));
    }

    greyFabricGroupingForm() {
  
      this.greyFabricGroupingStandardForm.push(this.fb.group({
        id:0,
        fabricGrade :'',
        lowerValue :0,
        upperValue:0
        
      }));
    }
    companyDDL(){
                  this. companyService.getAllCompany().
                  subscribe(data=>{
                  this.companyListItems=data;
                  console.log('company list',this.companyListItems)
                });
               }
    variableListDDL(){
      this.variableListService.getAll().subscribe(data=>{
        let variableListForMarchandising=data.filter(f=>f.moduleId==5);
        this.variableList=variableListForMarchandising;
        console.log(this.variableList);
        
        this.variableList.forEach(element => {
          this.hideNShowList.push({id:element.id,variableName:element.variableName});
        });
       
      })
    }

   
    batchNoDDL(){
      this.batchNoList=this.staticFeaturesService.getYesOrNo();
    }
    barcodeGenerationDDL(){
      this.barcodeGenerationList=this.staticFeaturesService.getBarcodeGeneration();
    }

    batchMaintainedDDl(){

    this.batchMaintainedList= this.staticFeaturesService.getYesOrNo();
    }
    bookingApprovalNeededForKnittingPlanDDL(){
     this.bookingApprovalNeededForKnittingPlanList=this.staticFeaturesService.getYesOrNo();
    }
    bundleNoCreationLDDL(){
     this.bundleNoCreationList=this.staticFeaturesService.getBundleNoCreation();
    }
    deleveryBasisDDL(){
     this.deleveryBasisList=this.staticFeaturesService.getDeleveryBasis();
    }

    batchNoMandatoryDDL(){
     this.batchNoMandatoryList=this.staticFeaturesService.getYesOrNo();
    }
    pieceRateWQLimitDDL(){
     this.pieceRateWQLimitList=this.staticFeaturesService.getPieceRateWQLimit();
    }
    fabricProductionItemCategoryDDL(){
     this.fabricProductionItemCategoryList=this.staticFeaturesService.getFabricProductionItemCategory();
    }

    productionControlDDL(){
      this.productionControlList=this.staticFeaturesService.getYesOrNo();
    }
    fabricSourceDDL(){
      this.fabricSourceList=this.staticFeaturesService.getFabricSource();
    }
    fabricinMachineLevelDDL(){
      this.fabricinMachineLevelList=this.staticFeaturesService.getYesOrNo();
    }
    QCMandatorDDL(){
      this.QCMandatoryList=this.staticFeaturesService.getYesOrNo();
    }

    processCostingMaintainDDL(){
      this.processCostingMaintainList=this.staticFeaturesService.getYesOrNo();
    }

    rateSourceDDL(){
      this.rateSourceList= this.staticFeaturesService.getRateSource();
    }
    productionResourceAllocationDDL(){
      this.productionResourceAllocationList=this.staticFeaturesService.getYesOrNo();
    }

    productionUpdateAreasDDL(){
      this.productionUpdateAreasList= this.staticFeaturesService.getProductionUpdateAreas();
    }

    RMGNoCreationDDL(){
      this.RMGNoCreationList=this.staticFeaturesService.getRMGNoCreation();
    }

    
    SMVSourceDDL(){
      this.SMVSourceList=this.staticFeaturesService.getSMVSource();
    }

    TXTBusinessConceptDDL(){
      this.TXTBusinessConceptList=this.staticFeaturesService.getTXTBusinessConcept();
    }

    workingCompanyDDL(){
      this.workingCompanyList=this.staticFeaturesService.getYesOrNo();
    }

    precedingProcessDDL(){
      this.precedingProcessList=this.staticFeaturesService.getPrecedingProcess();
    }
    controlDDL(){
      this.controlList= this.staticFeaturesService.getYesOrNo();
    }
    prodQtyCategoryDDL(){
      this.prodQtyCategoryList= this.staticFeaturesService.getProdQtyCategory();
    }

    
    precedingProcessSweaterDDL(){
      this.precedingProcessSweaterList=this.staticFeaturesService.getPrecedingProcessSweater();
    }
    controlSweaterDDL(){
      this.controlSweaterList= this.staticFeaturesService.getYesOrNo();
    }
    prodQtyCategorySweaterDDL(){
      this.prodQtyCategorySweaterList= this.staticFeaturesService.getProdQtyCategorySweater();
    }

    serviceTypeDDL(){
      this.staticFeaturesService.getAllProductionProcess().subscribe( data=>{
         this.serviceTypeList=data;
      });
    }
    serviceRateStatusDDL(){
      this.serviceRateStatusList=this.staticFeaturesService.getYesOrNo();
    }
    itemCategoryDDL(){
      this.itemCategoryList=this.staticFeaturesService.getRBTItemCategory();
    }
    autoUpdateDDL(){
      this.autoUpdateList=this.staticFeaturesService.getYesOrNo();
    }

    FPOCItemCategoryDDL(){
      this.FPOCItemCategoryList= this.staticFeaturesService.getFPOCItemCategory();
    }

    fabricinRollLevelDDL(){
      this.fabricinRollLevelList= this.staticFeaturesService.getYesOrNo();
    }
    febricInRollUpToDDL(){
      this.febricInRollUpToList= this.staticFeaturesService.getFebricInRollUpTo();
    }



   onChangeVariableList(variableId,form:NgForm){
 
              this.variableSettingsTableService.variableSettingsTable.id=0;
              // this.variableSettingsTableService.variableSettingsTable.companyId=0;
              this.variableSettingsTableService.variableSettingsTable.countPageInputField=0;
              this.variableSettingsTableService.variableSettingsTable.variableListId=variableId;
              this.variableSettingsTableService.variableSettingsTable.labelOne='';
              this.variableSettingsTableService.variableSettingsTable.valueOne='';
              this.variableSettingsTableService.variableSettingsTable.labelTwo='';
              this.variableSettingsTableService.variableSettingsTable.valueTwo='';
              this.variableSettingsTableService.variableSettingsTable.labelThree='';
              this.variableSettingsTableService.variableSettingsTable.valueThree='';
              this.variableSettingsTableService.variableSettingsTable.labelFour='';
              this.variableSettingsTableService.variableSettingsTable.valueFour='';
              this.variableSettingsTableService.variableSettingsTable.labelFive='';
              this.variableSettingsTableService.variableSettingsTable.valueFive='';
              this.variableSettingsTableService.variableSettingsTable.labelSix='';
              this.variableSettingsTableService.variableSettingsTable.valueSix='';
              this.variableSettingsTableService.variableSettingsTable.labelSeven='';
              this.variableSettingsTableService.variableSettingsTable.valueSeven='';
              this.valueOne='';
              this.valueTwo='';
              this.valueThree='';
              this.valueFour='';
              this.valueFive='';
              this.valueSix='';
              this.valueSeven='';
              this.valueEight='';
              this.valueNine='';
              this.valueTen='';
              this.valueEleven='';
              this.valueTwelve='';


              this.isShowListForLastProcessProdQtyControl=false;
              this.isShowListForLastProcessProdQtyControlSweater=false;
              this.isShowListForServiceRateSource=false;
  


              this.variableSettingsTableService.getVariableSettingsTable().subscribe(data=>{
     
               this.variableSettingsTableList=data;
  
               let  variableSettingsTableLObjectByVariableId=this.variableSettingsTableList.find(f=>f.moduleId==5&&f.variableListId==variableId);
   
               if(variableSettingsTableLObjectByVariableId!=undefined){

             this.variableSettingsTableService.variableSettingsTable=variableSettingsTableLObjectByVariableId;
        
                   
                    if (variableId == 79 ) {

          let splitedValueOne = variableSettingsTableLObjectByVariableId.valueOne.split(",");
          this.valueOne =splitedValueOne[0];
          this.valueTwo =splitedValueOne[1];
    

          let splitedValueTwo = variableSettingsTableLObjectByVariableId.valueTwo.split(",");
         
          this.valueThree =splitedValueTwo[0];
          this.valueFour=splitedValueTwo[1];
       
                    }
                    if (variableId == 80 ) {

                        let splitedValueOne = variableSettingsTableLObjectByVariableId.valueOne.split(",");
                        this.valueOne =splitedValueOne[0];
                        this.valueTwo =splitedValueOne[1];
    

                        let splitedValueTwo = variableSettingsTableLObjectByVariableId.valueTwo.split(",");
         
                        this.valueThree =splitedValueTwo[0];
                        this.valueFour=splitedValueTwo[1];
       
                    }
                    if (variableId == 89 ) {

                        let splitedValueOne = variableSettingsTableLObjectByVariableId.valueOne.split(",");
                        this.valueOne =splitedValueOne[0];
                        this.valueTwo =splitedValueOne[1];
                        this.valueThree =splitedValueOne[2];
    

                        let splitedValueTwo = variableSettingsTableLObjectByVariableId.valueTwo.split(",");
         
                        this.valueFour =splitedValueTwo[0];
                        this.valueFive=splitedValueTwo[1];
                        this.valueSix=splitedValueTwo[2];
       
                    }
                    if (variableId == 92 ) {

                      let splitedValueOne = variableSettingsTableLObjectByVariableId.valueOne.split(",");
                      this.valueOne =splitedValueOne[0];
                      this.valueTwo =splitedValueOne[1];
                      this.valueThree= splitedValueOne[2];
                      this.valueFour= splitedValueOne[3];
                      this.valueFive=splitedValueOne[4];
                
            
                      let splitedValueTwo = variableSettingsTableLObjectByVariableId.valueTwo.split(",");
                     
                      this.valueSix =splitedValueTwo[0];
                      this.valueSeven=splitedValueTwo[1];
                      this.valueEight=splitedValueTwo[2];
                      this.valueNine=splitedValueTwo[3];
                      this.valueTen=splitedValueTwo[4];

                      let splitedValueThree = variableSettingsTableLObjectByVariableId.valueThree.split(",");
                     
                      this.valueEleven =splitedValueThree[0];
                      this.valueTwelve=splitedValueThree[1];
                     
                      if(this.valueSix=='Yes'){
                        this.isUptoOne=true;
                        this.isUptoTwo=true;
                      }else{
                       this.isUptoOne=false;
                       this.isUptoTwo=false;
                      }
                    }
                    if(variableId==93){

                      this.isShowEditButton=true;
                         this.isShowSaveButton=false;
                         this.isShowDeleteButton=false;

                   console.log('clicked',variableId);
                           let finishFabricGroupingStandardFormValue =this.variableSettingsTableList
                          .filter(f=>f.moduleId==5&&f.variableListId==variableId);
                         this.finishFabricGroupingStandardForm= this.fb.array([]);
                         finishFabricGroupingStandardFormValue.forEach(e => {
                              this.finishFabricGroupingStandardForm.push(this.fb.group({
                                   id:e.id,
                                   fabricGrade :e.valueOne,
                                   lowerValue :e.valueTwo,
                                   upperValue :e.valueThree,
                         
                              }));
                         });

                     
                         
                        
                    }
                    if(variableId==94){
                      
                      this.isShowEditButton=true;
                      this.isShowSaveButton=false;
                      this.isShowDeleteButton=false;

                   
                           let greyFabricGroupingStandardFormValue =this.variableSettingsTableList
                          .filter(f=>f.moduleId==5&&f.variableListId==variableId);
                         this.greyFabricGroupingStandardForm= this.fb.array([]);
                         greyFabricGroupingStandardFormValue.forEach(e => {
                              this.greyFabricGroupingStandardForm.push(this.fb.group({
                                   id:e.id,
                                   fabricGrade :e.valueOne,
                                   lowerValue :e.valueTwo,
                                   upperValue :e.valueThree,
                         
                              }));
                         });

                     
                         
                        
                    }

                    if(variableId==95){
                           this.isShowEditButton=false;
                           this.isShowSaveButton=true;
                            this.isShowDeleteButton=false;
                            this.isShowListForLastProcessProdQtyControl=true;
                            this.variableSettingsTableService.variableSettingsTable.id=0;
                            let RequisitionBasisTransferId=this.variableSettingsTableList.filter(f=>f.moduleId==5&&f.variableListId==variableId);
                            this.listForLastProcessProdQtyControl=RequisitionBasisTransferId;
                            this.listForLastProcessProdQtyControl.forEach(i => {


                                   //for get company Name
                                    // this.companyService.getAllCompany().subscribe(data=>{
                                    //   let companyName=data.find(f=>f.compId==i.companyId).companyName;
                                    //   i.companyName=companyName;
                                   // });

          

                            });
       
                    }
                    if(variableId==96){
                           this.isShowEditButton=false;
                           this.isShowSaveButton=true;
                           this.isShowDeleteButton=false;
                           this.isShowListForLastProcessProdQtyControlSweater=true;
                           this.variableSettingsTableService.variableSettingsTable.id=0;
                           let RequisitionBasisTransferId=this.variableSettingsTableList.filter(f=>f.moduleId==5&&f.variableListId==variableId);
                           this.listForLastProcessProdQtyControlSweater=RequisitionBasisTransferId;
                           this.listForLastProcessProdQtyControlSweater.forEach(i => {


                                     //for get company Name
                                    // this.companyService.getAllCompany().subscribe(data=>{
                                    //   let companyName=data.find(f=>f.compId==i.companyId).companyName;
                                     //   i.companyName=companyName;
                                   // });

          

                          });
       
                    }
                    if(variableId==107){
                           this.isShowEditButton=false;
                           this.isShowSaveButton=true;
                           this.isShowDeleteButton=false;
                           this.isShowListForServiceRateSource=true;
                           this.variableSettingsTableService.variableSettingsTable.id=0;
                           let RequisitionBasisTransferId=this.variableSettingsTableList.filter(f=>f.moduleId==5&&f.variableListId==variableId);
                           this.listForServiceRateSource=RequisitionBasisTransferId;
                           this.listForServiceRateSource.forEach(i => {


                                    //for get company Name
                                    this.companyService.getAllCompany().subscribe(data=>{
                                     let companyName=data.find(f=>f.compID==i.companyId).company_Name;
                                     i.companyName=companyName;
                                    });

                                   //for get PrecedingProcess Name
                                  this.staticFeaturesService.getAllProductionProcess().subscribe(data=>{
                                  let productionProcessName=data.find(f=>f.id==i.valueOne).productionProcessName;
                                  i.productionProcessName=productionProcessName;
                                   });

          

                          });
       
                    }
                    if(variableId==108){
                      
                      this.isShowEditButton=true;
                      this.isShowSaveButton=false;
                      this.isShowDeleteButton=false;

                   
                           let sewingPieceRateWQLimitStandardFormValue =this.variableSettingsTableList
                          .filter(f=>f.moduleId==5&&f.variableListId==variableId);
                         this.sewingPieceRateWQLimitStandardForm= this.fb.array([]);
                         sewingPieceRateWQLimitStandardFormValue.forEach(e => {
                              this.sewingPieceRateWQLimitStandardForm.push(this.fb.group({
                                   id:e.id,
                                   slabRangeStart :e.valueOne,
                                   slabRangeEnd :e.valueTwo,
                                   excess :e.valueThree,
                         
                              }));
                         });

                     
                         
                        
                    }
                    if (variableId == 109 ) {

                      let splitedValueOne = variableSettingsTableLObjectByVariableId.valueOne.split(",");
                      this.valueOne =splitedValueOne[0];
                      this.valueTwo =splitedValueOne[1];
                      this.valueThree= splitedValueOne[2];
                     
                
            
                      let splitedValueTwo = variableSettingsTableLObjectByVariableId.valueTwo.split(",");
                      this.valueFour= splitedValueTwo[0];
                      this.valueFive=splitedValueTwo[1];
                      this.valueSix =splitedValueTwo[2];
                   

                      let splitedValueThree = variableSettingsTableLObjectByVariableId.valueThree.split(",");
                     
                      this.valueSeven=splitedValueThree[0];
                      this.valueEight=splitedValueThree[1];
                      this.valueNine=splitedValueThree[2];
                   
                    }
       
                    else{
                    
                     this.isShowEditButton=true;
                     this.isShowSaveButton=false;
                    this.isShowDeleteButton=true;
                    }

                



  
              }else{
                this.isShowEditButton=false;
                this.isShowSaveButton=true;
                this.isShowDeleteButton=false;
              }
  
      });
  
      this.hideNShowList.forEach(element => {
                  if(element.id==variableId){
                  element.isHideNShow=true;
                  }else{
                  element.isHideNShow=false;
                  }

 
      });
 
  
    
      if(variableId==78){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Batch No';
        
      }

      if(variableId==79){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=2;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Auto Update';
        
      }
      if(variableId==80){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=2;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Auto Update';
        
      }
      if(variableId==81){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Barcode Generation';
        
      }
      if(variableId==82){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Batch Maintained';
        
      }
      if(variableId==83){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Booking Approval Needed For Knitting Plan';
        
      }
      if(variableId==84){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne=' Bundle No Creation';
        
      }
      if(variableId==85){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne=' Delevery Basis';
        
      }
      if(variableId==86){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Batch No Mandatory';
        
      }
      if(variableId==87){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Piece Rate WQ Limit';
        
      }

      if(variableId==88){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=2;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Production Control';
        
      }
      if(variableId==89){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=2;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Auto Update';
        
      }
      if(variableId==90){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Source';
        
      }
      if(variableId==91){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Fabric in Machine Level';
        
      }
      if(variableId==92){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Fabric in Roll Level';
        this.variableSettingsTableService.variableSettingsTable.labelThree='Upto';
        
      }
      if(variableId==93){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Fabric Grade';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Lower Value';
        this.variableSettingsTableService.variableSettingsTable.labelThree='Upper Value';
        
      }
      if(variableId==94){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Fabric Grade';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Lower Value';
        this.variableSettingsTableService.variableSettingsTable.labelThree='Upper Value';
        
      }
      if(variableId==95){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Category';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Control';
        this.variableSettingsTableService.variableSettingsTable.labelThree='Preceding Process';
        
      }
      if(variableId==96){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Category';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Control';
        this.variableSettingsTableService.variableSettingsTable.labelThree='Preceding Process';
        
      }
      if(variableId==97){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='QC Mandatory';
        
      }
      if(variableId==98){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Cutting Piece Rate Safety %';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Sewing Piece Rate Safety %';
        this.variableSettingsTableService.variableSettingsTable.labelThree='Ironning Piece Rate Safety %';
        this.variableSettingsTableService.variableSettingsTable.labelFour='Finishing Piece Rate Safety %';

        
      }
      if(variableId==99){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Process Costing Maintain';
        
      }

      if(variableId==100){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Rate Source';
        
      }
      if(variableId==101){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Production Resource Allocation';
        
      }

      if(variableId==102){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=7;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Cutting Update';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Sewing Production';
        this.variableSettingsTableService.variableSettingsTable.labelThree='Iron Output';
        this.variableSettingsTableService.variableSettingsTable.labelFour='Cutting delivery to Input';
        this.variableSettingsTableService.variableSettingsTable.labelFive='Printing & Embrd. Prodiction';
        this.variableSettingsTableService.variableSettingsTable.labelSix='Finishing Entry';
        this.variableSettingsTableService.variableSettingsTable.labelSeven='	Ex-Factory';
        
      }

      
      if(variableId==103){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=5;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Cutting Update';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Printing & Embrd. Prodiction';
        this.variableSettingsTableService.variableSettingsTable.labelThree='Sewing Production';
        this.variableSettingsTableService.variableSettingsTable.labelFour='	Iron Output';
        this.variableSettingsTableService.variableSettingsTable.labelFive='Finishing Entry';
    
        
      }
      if(variableId==104){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='RMG No. Creation';
        
      }
      if(variableId==105){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Maximum Roll Weight ';
        
      }
      if(variableId==106){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='SMV Source';
        
      }

      if(variableId==107){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=2;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Service Type';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Status';
        
      }
      if(variableId==108){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Slab Range Start';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Slab Range End';
        this.variableSettingsTableService.variableSettingsTable.labelThree='Excess ';
        
      }
      if(variableId==109){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Shift Name';
        this.variableSettingsTableService.variableSettingsTable.labelTwo='Production Start Time';
        this.variableSettingsTableService.variableSettingsTable.labelThree='Lunch Start Time';
        
      }

      if(variableId==110){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne='Business Concept';
        
      }

      
      if(variableId==111){
        this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
        this.variableSettingsTableService.variableSettingsTable.labelOne=' Working Company';
        
      }
 
 
    
   }
   onSubmit(form,finishFabricGroupingStandardForm,greyFabricGroupingStandardForm,sewingPieceRateWQLimitStandardForm){

    this.variableSettingsTableService.variableSettingsTable.moduleId=5;
    if(this.variableSettingsTableService.variableSettingsTable.variableListId==93){
      finishFabricGroupingStandardForm.value.forEach(element => {
                 this.variableSettingsTableService.variableSettingsTable.id=element.id;
                 this.variableSettingsTableService.variableSettingsTable.companyId=form.companyId;
                 this.variableSettingsTableService.variableSettingsTable.valueOne=element.fabricGrade;
                 this.variableSettingsTableService.variableSettingsTable.valueTwo=element.lowerValue;
                 this.variableSettingsTableService.variableSettingsTable.valueThree=element.upperValue;

                if(this.variableSettingsTableService.variableSettingsTable.id==0){
                    this.variableSettingsTableService.addVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data=>{

                    });
                }
                else{
                     this.variableSettingsTableService.updateVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data=>{

                    });
                }
            });

           this.isShowDeleteButton=false;
           this.isShowSaveButton=false;
           this.hideNShowList.forEach(element => {

                 element.isHideNShow=false;

          });
         this.resetForm();
        this.Tostr.showToast('primary','', 'Saved', '',this.toastrService);

    }
    else if(this.variableSettingsTableService.variableSettingsTable.variableListId==94){
      greyFabricGroupingStandardForm.value.forEach(element => {
                 this.variableSettingsTableService.variableSettingsTable.id=element.id;
                 this.variableSettingsTableService.variableSettingsTable.companyId=form.companyId;
                 this.variableSettingsTableService.variableSettingsTable.valueOne=element.fabricGrade;
                 this.variableSettingsTableService.variableSettingsTable.valueTwo=element.lowerValue;
                 this.variableSettingsTableService.variableSettingsTable.valueThree=element.upperValue;

                if(this.variableSettingsTableService.variableSettingsTable.id==0){
                    this.variableSettingsTableService.addVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data=>{

                    });
                }
                else{
                     this.variableSettingsTableService.updateVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data=>{

                    });
                }
            });

           this.isShowDeleteButton=false;
           this.isShowSaveButton=false;
           this.hideNShowList.forEach(element => {

                 element.isHideNShow=false;

          });
         this.resetForm();
        this.Tostr.showToast('primary','', 'Saved', '',this.toastrService);

    }
    else if(this.variableSettingsTableService.variableSettingsTable.variableListId==108){
      sewingPieceRateWQLimitStandardForm.value.forEach(element => {
                 this.variableSettingsTableService.variableSettingsTable.id=element.id;
                 this.variableSettingsTableService.variableSettingsTable.companyId=form.companyId;
                 this.variableSettingsTableService.variableSettingsTable.valueOne=element.slabRangeStart;
                 this.variableSettingsTableService.variableSettingsTable.valueTwo=element.slabRangeEnd;
                 this.variableSettingsTableService.variableSettingsTable.valueThree=element.excess;

                if(this.variableSettingsTableService.variableSettingsTable.id==0){
                    this.variableSettingsTableService.addVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data=>{

                    });
                }
                else{
                     this.variableSettingsTableService.updateVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data=>{

                    });
                }
            });

           this.isShowDeleteButton=false;
           this.isShowSaveButton=false;
           this.hideNShowList.forEach(element => {

                 element.isHideNShow=false;

          });
         this.resetForm();
        this.Tostr.showToast('primary','', 'Saved', '',this.toastrService);

    }
    else{
      if (this.variableSettingsTableService.variableSettingsTable.variableListId ==79) {
      this.variableSettingsTableService.variableSettingsTable.valueOne =
       this.valueOne +
        "," +
        this.valueTwo;

        this.variableSettingsTableService.variableSettingsTable.valueTwo =
        this.valueThree +
        "," +
        this.valueFour;
     
      }

      if (this.variableSettingsTableService.variableSettingsTable.variableListId ==80) {
      this.variableSettingsTableService.variableSettingsTable.valueOne =
       this.valueOne +
        "," +
        this.valueTwo;

        this.variableSettingsTableService.variableSettingsTable.valueTwo =
        this.valueThree +
        "," +
        this.valueFour;
     
      }
      if ( this.variableSettingsTableService.variableSettingsTable.variableListId ==89) {
      this.variableSettingsTableService.variableSettingsTable.valueOne =
       this.valueOne +
        "," +
        this.valueTwo +
        "," +
        this.valueThree;

        this.variableSettingsTableService.variableSettingsTable.valueTwo =
        this.valueFour +
        "," +
        this.valueFive+
        "," +
        this.valueSix;
     
      }
      if (this.variableSettingsTableService.variableSettingsTable.variableListId ==92) {

        if(this.valueSix == 'Yes'){
          this.valueEleven = "Upto Receive By Batch";
        }
        else{
          this.valueEleven = "";
        }
        this.variableSettingsTableService.variableSettingsTable.valueOne =
         this.valueOne +
          "," +
          this.valueTwo +
          "," +
          this.valueThree +
          "," +
          this.valueFour +
          "," +
          this.valueFive;
  
          this.variableSettingsTableService.variableSettingsTable.valueTwo =
          this.valueSix +
          "," +
          this.valueSeven +
          "," +
          this.valueEight +
          "," +
          this.valueNine +
          "," +
          this.valueTen;

          this.variableSettingsTableService.variableSettingsTable.valueThree =
          this.valueEleven +
          "," +
          this.valueTwelve;
       
        }

        if (this.variableSettingsTableService.variableSettingsTable.variableListId ==109) {
             this.valueOne='A';
             this.valueTwo='B';
             this.valueThree='C';
            
          this.variableSettingsTableService.variableSettingsTable.valueOne =
           this.valueOne +
            "," +
            this.valueTwo +
            "," +
            this.valueThree ;
         
    
            this.variableSettingsTableService.variableSettingsTable.valueTwo =
           
            this.valueFour +
            "," +
            this.valueFive +
            "," +
            this.valueSix ;
           
  
            this.variableSettingsTableService.variableSettingsTable.valueThree =
          
            this.valueSeven +
            "," +
            this.valueEight +
            "," +
            this.valueNine ;
         
          }
  
      if(this.variableSettingsTableService.variableSettingsTable.id==0){
          this.variableSettingsTableService.addVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data=>{
          this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
          this.isShowDeleteButton=false;
          this.isShowSaveButton=false;
          this.isShowListForLastProcessProdQtyControl=false;
          this.isShowListForLastProcessProdQtyControlSweater=false;
          this.isShowListForServiceRateSource=false;
          this.hideNShowList.forEach(element => {
    
             element.isHideNShow=false;
    
          });
          this.resetForm();
  
          });
      }
      else{
            this.variableSettingsTableService.updateVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data=>{
            this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
            this.isShowDeleteButton=false;
            this.isShowEditButton=false;
            this.isShowListForLastProcessProdQtyControl=false;
            this.isShowListForLastProcessProdQtyControlSweater=false;
           this.isShowListForServiceRateSource=false;
           this.hideNShowList.forEach(element => {
  
           element.isHideNShow=false;
  
           });
           this.resetForm();
           });
      }
    }
   
  } 
  onDelete(id){
  
    console.log(id);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res=>{
     if(res){
       this.variableSettingsTableService.deleteVariableSettingsTable(id).subscribe(res=>{
         
         this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
         this.isShowDeleteButton=false;
          this.isShowEditButton=false;
          this.isShowListForLastProcessProdQtyControl=false;
          this.isShowListForLastProcessProdQtyControlSweater=false;
          this.isShowListForServiceRateSource=false;
         this.hideNShowList.forEach(element => {
    
           element.isHideNShow=false;
          
          });
          this.resetForm();
          this.finishFabricGroupingStandardForm= this.fb.array([]);
          this.greyFabricGroupingStandardForm= this.fb.array([]);
          this.sewingPieceRateWQLimitStandardForm = this.fb.array([]);
          
       },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
     }
    })
  }

  onDeleteFinishFabricGrouping(id,i){
   
  
      if (id == 0)
         this.finishFabricGroupingStandardForm.removeAt(i);
      else if (confirm('Are you sure to delete this record ?'))
         this.variableSettingsTableService.deleteVariableSettingsTable(id).subscribe(
         res => {
             this.finishFabricGroupingStandardForm.removeAt(i);
             this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
         });
  }

  onDeletegreyFabricGrouping(id,i){
   
  
    if (id == 0)
       this.greyFabricGroupingStandardForm.removeAt(i);
    else if (confirm('Are you sure to delete this record ?'))
       this.variableSettingsTableService.deleteVariableSettingsTable(id).subscribe(
       res => {
           this.greyFabricGroupingStandardForm.removeAt(i);
           this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
       });
}

onDeletesewingPieceRateWQLimit(id,i){
   
  
  if (id == 0)
     this.sewingPieceRateWQLimitStandardForm.removeAt(i);
  else if (confirm('Are you sure to delete this record ?'))
     this.variableSettingsTableService.deleteVariableSettingsTable(id).subscribe(
     res => {
         this.sewingPieceRateWQLimitStandardForm.removeAt(i);
         this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
     });
}

  getEditModeDataLastProcessProdQtyControl(id){
    let LastProcessProdQtyControlId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =LastProcessProdQtyControlId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }

   getEditModeDataLastProcessProdQtyControlSweater(id){
    let LastProcessProdQtyControlSweaterId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =LastProcessProdQtyControlSweaterId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }

   getEditModeDataServiceRateSource(id){
    let ServiceRateSourceId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =ServiceRateSourceId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }


   onChangeFabricinRollLevel(value){
     console.log(value);
     if(value=='Yes'){
       this.isUptoOne=true;
       this.isUptoTwo=true;
     }else{
      this.isUptoOne=false;
      this.isUptoTwo=false;
     }

   }
}
