import { Component, OnInit } from '@angular/core';
import { VariableSettingsTableService } from './../../../../@core/mock/library/variable-settings-table.service';
import { VariableListService } from '../../../../@core/mock/library/variable-list.service';
import { VariableList } from '../../../../@core/data/Library-Modul-model/variable-list.model';
import { company } from '../../../../@core/data/company';
import { CompanyService } from '../../../../@core/mock/company.service';
import { NgForm } from '@angular/forms';
import { VariableSettingsTable } from '../../../../@core/data/Library-Modul-model/variable-settings-table';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';



@Component({
  selector: 'ngx-subcontract',
  templateUrl: './subcontract.component.html',
  styleUrls: ['./subcontract.component.scss']
})
export class SubcontractComponent implements OnInit {
  hideNShowList=[];
  
  public variableSettingsTableList:VariableSettingsTable[]=[];
  public variableList:VariableList[]=[];
  public companyListItems:company[]=[];
  public billOnList:any[]=[];
  public rateTypeList:any[]=[];
  public billRateTypeList:any[]=[];
  public fabricinRollLevelList:any[]=[];
  public barcodeGenerationList:any[]=[];
  public knitBillFromList:any[]=[];
  public finishingBillFromList:any[]=[];
  public inHouseBillControlList:any[]=[];
  public outBoundBillControlList:any[]=[];
  public dAndFInHouseBillControlList: any[]=[];
  public dAndFOutBoundBillControlList: any[]=[];
  public AOPAllowList:any[]=[];
  public mandatoryAOPAllowList:any[]=[];

  sourceSelectedItems = [];
  sourceDropdownList = [];
  sourceDropdownSettings:IDropdownSettings;

  isShowSaveButton=true;
  isShowEditButton=false;
  isShowDeleteButton=false;
  Tostr=new Tostr();

  constructor(
    
    private  variableListService:VariableListService,
    private  companyService:CompanyService,
    private  toastrService:NbToastrService,
    private   mathdialogService: MatDialogService,
    public variableSettingsTableService:VariableSettingsTableService,
    private staticFeaturesService:StaticFeaturesService
  ) { }


 
  ngOnInit() { 
    this.resetForm();
    this.companyDDL();
    this.variableListDDL();
    this.billOnDDL();
    this.rateTypeDDL();
    this.billRateTypeDDL();
    this.fabricinRollLevelDDL();
    this.barcodeGenerationDDL();
    this.knitBillFromDDL();
    this.finishingBillFromDDL();
    this.inHouseBillControlDDL();
    this.outBoundBillControlDDL();
    this.dAndFInHouseBillControlDDL();
    this.dAndFOutBoundBillControlDDL();
    this.AOPAllowDDL();
    this.mandotoryAOPAllowDDL();   
    this.sourceDDL(); 

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

    this.sourceDropdownSettings= {
      singleSelection: false,
      idField: 'value',
      textField: 'value',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
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
      let variableListForMarchandising=data.filter(f=>f.moduleId==8);
      this.variableList=variableListForMarchandising;
      console.log(this.variableList);
      
      this.variableList.forEach(element => {
        this.hideNShowList.push({id:element.id,variableName:element.variableName});
      });
     
    })
 }
 billOnDDL(){
   this.billOnList=this.staticFeaturesService.getBillOn();
 }
 rateTypeDDL(){
   this.rateTypeList=this.staticFeaturesService.getYesOrNo();
 }
 
billRateTypeDDL(){
  this.billRateTypeList=this.staticFeaturesService.getBillRateType();
}

fabricinRollLevelDDL(){
  this.fabricinRollLevelList=this.staticFeaturesService.getYesOrNo();
}
barcodeGenerationDDL(){
  this.barcodeGenerationList=this.staticFeaturesService.getBarcodeGeneration();
}

knitBillFromDDL(){
  this.knitBillFromList=this.staticFeaturesService.getKnitBillFrom();
}
finishingBillFromDDL(){
  this.finishingBillFromList=this.staticFeaturesService.getKnitBillFrom();
}
inHouseBillControlDDL(){
  
    this.inHouseBillControlList=this.staticFeaturesService.getBillControl();
  
}
outBoundBillControlDDL(){
  this.outBoundBillControlList=this.staticFeaturesService.getBillControl();
}
dAndFInHouseBillControlDDL(){
  this.dAndFInHouseBillControlList=this.staticFeaturesService.getBillControl();
}
dAndFOutBoundBillControlDDL(){
  this.dAndFOutBoundBillControlList=this.staticFeaturesService.getBillControl();
}

AOPAllowDDL(){
  this.AOPAllowList=this.staticFeaturesService.getYesOrNo();
}
mandotoryAOPAllowDDL(){
  this.mandatoryAOPAllowList=this.staticFeaturesService.getYesOrNo();
}

sourceDDL(){
     this.sourceDropdownList=this.staticFeaturesService.getFabricSource();
}




onChangeVariableList(variableId,form:NgForm){

  console.log(this.variableSettingsTableService.variableSettingsTable);
  console.log(variableId);
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


 this.variableSettingsTableService.getVariableSettingsTable().subscribe(data=>{
  
   this.variableSettingsTableList=data;

 let  variableSettingsTableLObjectByVariableId
 =this.variableSettingsTableList.find(f=>f.moduleId==8&&
  f.variableListId==variableId);
 
    if(variableSettingsTableLObjectByVariableId!=undefined){
      console.log(variableSettingsTableLObjectByVariableId);
     if(variableId==134){
      if(variableSettingsTableLObjectByVariableId.valueOne!=""){
        let splitedValueOne= variableSettingsTableLObjectByVariableId.valueOne.split(",");
            console.log(splitedValueOne);
            this.sourceSelectedItems=splitedValueOne;
        }
           
     }

     
      this.variableSettingsTableService.variableSettingsTable
      =variableSettingsTableLObjectByVariableId;
      this.isShowEditButton=true;
      this.isShowSaveButton=false;
      this.isShowDeleteButton=true;
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



  if(variableId==131){

    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Bill On';
   
  }
  if(variableId==132){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Rate Type';
   
  }
  if(variableId==133){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Bill Rate Type';
   
  }
  if(variableId==134){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Source';

  }

   
  
  if(variableId==135){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Fabric in Roll Level';
   
  }
  if(variableId==136){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Barcode Generation';
   
  }
  if(variableId==137){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Knit Bill From';
   
  }

  if(variableId==138){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Finishing Bill From';
   
  }
  if(variableId==139){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Bill Control';
   
  }
  if(variableId==140){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Bill Control';
   
  }
  if(variableId==141){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Bill Control';
   
  }
  if(variableId==142){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Bill Control';
   
  }
  if(variableId==143){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Allow';
   
  }
  if(variableId==144){
    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Allow';
   
  }

  
 }


 onSubmit(){

  console.log(this.variableSettingsTableService.variableSettingsTable);
  

  if(this.variableSettingsTableService.variableSettingsTable.variableListId==134){
  
    let sourceIds='';
    console.log(this.sourceSelectedItems);
   this.sourceSelectedItems.forEach(e => {
      sourceIds +=e.value+",";
    console.log( sourceIds);
    });
   let finallysourceIds=  sourceIds.slice(0, -1);
    this.variableSettingsTableService.variableSettingsTable.valueOne=finallysourceIds;
      
   }
  



  console.log();
  console.log(this.variableSettingsTableService.variableSettingsTable);
  this.variableSettingsTableService.variableSettingsTable.moduleId=8;

  if(this.variableSettingsTableService.variableSettingsTable.id==0){
   this.variableSettingsTableService.addVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data=>{
     this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
     this.isShowDeleteButton=false;
        this.isShowSaveButton=false;
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
 this.hideNShowList.forEach(element => {

  element.isHideNShow=false;

 });
     this.resetForm();
   });
  }
 
} 
onDelete(id){

  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
  .afterClosed().subscribe(res=>{
   if(res){
     this.variableSettingsTableService.deleteVariableSettingsTable(id).subscribe(res=>{
       
       this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
       this.isShowDeleteButton=false;
        this.isShowEditButton=false;
       this.hideNShowList.forEach(element => {
  
         element.isHideNShow=false;
        
        });
        this.resetForm();
        
     },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
   }
  })
}

}
