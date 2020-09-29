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
  selector: 'ngx-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  hideNShowList=[];
  
  public variableSettingsTableList:VariableSettingsTable[]=[];
  public variableList:VariableList[]=[];
  public companyListItems:company[]=[];
  public planningBoardStripCaptionList:any[]=[];
  public  distributeQuantityList:any[]=[];
  public autoAllocateYarnFromRequisitionList:any[]=[];
  public rmsAutoAllocateYarnFromRequisitionList:any[]=[];
  public colorTypeMandatoryList:any[]=[];
  public workStudyIntegratedList:any[]=[];
  public sizeDisableStatusList:any[]=[];
  public planLevelEntryList:any[]=[];
  public rnDList:any[]=[];
  public marketingList:any[]=[];
  public budgetList:any[]=[];
  public productionList:any[]=[];

  isShowSaveButton=true;
  isShowEditButton=false;
  isShowDeleteButton=false;
  Tostr=new Tostr();

  constructor( private  variableListService:VariableListService,
    private  companyService:CompanyService,
    private  toastrService:NbToastrService,
    private   mathdialogService: MatDialogService,
    public variableSettingsTableService:VariableSettingsTableService,
    private staticFeaturesService:StaticFeaturesService) { }

  ngOnInit() {
    this.resetForm();
    this.companyDDL();
    this.variableListDDL();
    this.planningBoardStripCaptionDDL();
    this.distributeQuantityDDL();
    this.autoAllocateYarnFromRequisitionDDL();
    this.rmsAutoAllocateYarnFromRequisitionDDL();
    this.colorTypeMandatoryDDL();
    this.workStudyIntegratedDDL();
    this.sizeDisableStatusDDL();
    this.planLevelEntryDDL();
    this.rnDDDL();
    this.marketingDDL();
    this.productionDDL();
    this.budgetDDL();
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
   companyDDL(){
                this. companyService.getAllCompany().
                subscribe(data=>{
                this.companyListItems=data;
                console.log('company list',this.companyListItems)
              });
             }
   variableListDDL(){
    this.variableListService.getAll().subscribe(data=>{
      let variableListForMarchandising=data.filter(f=>f.moduleId==3);
      this.variableList=variableListForMarchandising;
      console.log(this.variableList);
      
      this.variableList.forEach(element => {
        this.hideNShowList.push({id:element.id,variableName:element.variableName});
      });
     
    })
 }

 planningBoardStripCaptionDDL(){
   this.planningBoardStripCaptionList=this.staticFeaturesService.getPlanningBoardStripCaption();
 }
 
autoAllocateYarnFromRequisitionDDL(){
  this.autoAllocateYarnFromRequisitionList=this.staticFeaturesService.getYesOrNo();
}
rmsAutoAllocateYarnFromRequisitionDDL(){
  this.rmsAutoAllocateYarnFromRequisitionList=this.staticFeaturesService.getYesOrNo();
}


 
distributeQuantityDDL(){
  this.distributeQuantityList=this.staticFeaturesService.getYesOrNo();
}

colorTypeMandatoryDDL(){
  this.colorTypeMandatoryList=this.staticFeaturesService.getYesOrNo();
}
workStudyIntegratedDDL(){
  this.workStudyIntegratedList=this.staticFeaturesService.getYesOrNo();
}

sizeDisableStatusDDL(){
  this.sizeDisableStatusList=this.staticFeaturesService.getYesOrNo();
}
planLevelEntryDDL(){
  this.planLevelEntryList=this.staticFeaturesService.getPlanLevelEntry();
}
rnDDDL(){
  this.rnDList=this.staticFeaturesService.getYesOrNo();
}
marketingDDL(){
  this.marketingList=this.staticFeaturesService.getYesOrNo();
}
budgetDDL(){
  this.budgetList=this.staticFeaturesService.getYesOrNo();
}
productionDDL(){
  this.productionList=this.staticFeaturesService.getYesOrNo();
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
 =this.variableSettingsTableList.find(f=>f.moduleId==3&&
  f.variableListId==variableId);
 
    if(variableSettingsTableLObjectByVariableId!=undefined){
      console.log(variableSettingsTableLObjectByVariableId);
    

     
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



  if(variableId==56){

    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Planning Board Strip Caption';
   
  }

  
  if(variableId==57){

    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Distribute Quantity';
   
  }

  if(variableId==58){

    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Auto Allocate Yarn From Requisition';
   
  }
  if(variableId==59){

    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Auto Allocate Yarn From Requisition';
   
  }

  if(variableId==60){

    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Color Type Mandatory';
   
  }
 
  if(variableId==61){

    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Work Study Integrated';
   
  }

  if(variableId==62){

    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Size Disable Status';
   
  }
  if(variableId==63){

    this.variableSettingsTableService.variableSettingsTable.countPageInputField=4;
    this.variableSettingsTableService.variableSettingsTable.labelOne='RnD';
    this.variableSettingsTableService.variableSettingsTable.labelTwo='Marketing';
    this.variableSettingsTableService.variableSettingsTable.labelThree='Budget';
    this.variableSettingsTableService.variableSettingsTable.labelFour='Production';
   
  }

  if(variableId==64){

    this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
    this.variableSettingsTableService.variableSettingsTable.labelOne='Plan Level Entry';
   
  }

  
 }


 onSubmit(){

  this.variableSettingsTableService.variableSettingsTable.moduleId=3;

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
