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
import { ItemCategoryService } from '../../../../@core/mock/library/item-category.service';
import { ItemGroupService } from '../../../../@core/mock/library/item-group.service';
import { ItemCategory } from '../../../../@core/data/Library-Modul-model/item-category';
import { ItemGroup } from '../../../../@core/data/Library-Modul-model/ItemGroup';
import { PageInfoService } from '../../../../@core/mock/library/page-info.service';
import { PageInfo } from '../../../../@core/data/Library-Modul-model/page-info';



@Component({
  selector: 'ngx-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  hideNShowList=[];

  
  isShowListForItemRateManageInMRR=false;
  isShowListForUsergivenitemcode=false;
  ListForItemRateManageInMRR=[];
  listForUsergivenitemcode=[];
  isShowListForBookKeepingMethod=false;
  ListForBookKeepingMethod=[];
  isShowListForAllocatedQuantity=false;
  listForAllocatedQuantity=[];
  isShowListForReceiveControll=false;
  listForReceiveControll=[];
  isShowListForIndependentbasiscontroll=false;
  listForIndependentbasiscontroll=[];
  isShowListForRackWiseBalanceShow=false;
  listForRackWiseBalanceShow=[];
  isShowListForRequisitionBasisTransfer=false;
  listForRequisitionBasisTransfer=[];

  public variableSettingsTableList:VariableSettingsTable[]=[];
  public variableList:VariableList[]=[];
  public companyListItems:company[]=[];
  public itemCategoryList:ItemCategory[]=[];
  public itemGroupList:ItemGroup[]=[];
  public costStandardSourceList:any[]=[];
  public rateOptionalList:any[]=[];
  public isEditableList:any[]=[];
  public overRcvPaymentList:any[]=[];
  public issueRequisitionMandatoryList:any[]=[];
  public duringIssueList:any[]=[];
  public wovenFinishFabricDescChangeList:any[]=[];
  public autoTransferReceiveList:any[]=[];
  public yarnIssueBasisList:any[]=[];
  public dyesChemicalLotMaintainList:any[]=[];
  public codeRequiredList:any[]=[];
  public bookKeepingMethodList:any[]=[];
  public allocatedList:any[]=[];
  public receiveControllList:any[]=[];
  public rateEditList:any[]=[];
  public independentControllList:any[]=[];
  public pageNameList:PageInfo[]=[];
  public rackWiseBalanceShowList:any[]=[];
  public upToList:any[]=[];
  public rbtItemCategoryList:any[]=[];
  public requisitionTypeList:any[]=[];



  isShowSaveButton=true;
  isShowEditButton=false;
  isShowDeleteButton=false;
  Tostr=new Tostr();
  constructor( public  variableListService:VariableListService,
    private  companyService:CompanyService,
    private  toastrService:NbToastrService,
    private   mathdialogService: MatDialogService,
    public variableSettingsTableService:VariableSettingsTableService,
    private staticFeaturesService:StaticFeaturesService,
    private itemCategoryService:ItemCategoryService,
    private itemGroupService:ItemGroupService,
    private pageInfoService:PageInfoService
    ) { }

  ngOnInit() {
    this.resetForm();
      this.companyDDL();
      this.variableListDDL();
      this.itemCategoryDDL();
      this.itemGroupDDL();
      this.costStandardSourceDDL();
      this.isEditableDDL();
      this.rateOptionalDDL();
      this.overRcvPaymentDDL();
      this.issueRequisitionMandatoryDDL();
      this.duringIssueDDL();
      this.WovenFinishFabricDescChangeDDL();
      this.autoTransferReceiveDDL();
      this.yarnIssueBasisDDL();
      this.dyesChemicalLotMaintainDDL();
      this.codeRequiredDDL();
      this.bookKeepingMethodDDL();
      this.allocatedDDL();
      this.receiveControllDDL();
      this.pageNameDDL();
      this.independentControllDDL();
      this.rateEditDDL();
      this.rackWiseBalanceShowDDL();
      this.upToDDL();
      this.rtbItemCategoryDDL();
      this.requisitionTypeDDL();

 
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
      let variableListForMarchandising=data.filter(f=>f.moduleId==6);
      this.variableList=variableListForMarchandising;
      console.log(this.variableList);
      
      this.variableList.forEach(element => {
        this.hideNShowList.push({id:element.id,variableName:element.variableName});
      });
     
    })
 }

 itemCategoryDDL(){
  this.itemCategoryService.getItemCategory().
  subscribe(data=>{
  this.itemCategoryList=data;
  console.log('item Category List',this.itemCategoryList)
});
}

itemGroupDDL(){
  this.itemGroupService.getAll().
  subscribe(data=>{
  this.itemGroupList=data;
  console.log('item Group List',this.itemGroupList)
});
}

costStandardSourceDDL(){
 this.costStandardSourceList= this.staticFeaturesService.getInvetoryILEorLandedCostStandardSource();

};

rateOptionalDDL(){
  this.rateOptionalList = this.staticFeaturesService.getYesOrNo();
}

isEditableDDL(){
  this.isEditableList= this.staticFeaturesService.getYesOrNo();
}

overRcvPaymentDDL(){
  this.overRcvPaymentList=this.staticFeaturesService.getYesOrNo();
}
issueRequisitionMandatoryDDL(){
  this.issueRequisitionMandatoryList=this.staticFeaturesService.getYesOrNo();
}

duringIssueDDL(){
  this.duringIssueList=this.staticFeaturesService.getYesOrNo();
}
WovenFinishFabricDescChangeDDL(){
  this.wovenFinishFabricDescChangeList=this.staticFeaturesService.getYesOrNo();
}
autoTransferReceiveDDL(){
  this.autoTransferReceiveList=this.staticFeaturesService.getYesOrNo();
}
yarnIssueBasisDDL(){
  this.yarnIssueBasisList=this.staticFeaturesService.getYesOrNo();
}
dyesChemicalLotMaintainDDL(){
  this.dyesChemicalLotMaintainList=this.staticFeaturesService.getYesOrNo();
}

codeRequiredDDL(){
  this.codeRequiredList=this.staticFeaturesService.getYesOrNo();
}
bookKeepingMethodDDL(){
   this.bookKeepingMethodList=this.staticFeaturesService.getBookKeepingMethod();
}

allocatedDDL(){
  this.allocatedList=this.staticFeaturesService.getYesOrNo();
}
receiveControllDDL(){
  this.receiveControllList=this.staticFeaturesService.getYesOrNo();
}

pageNameDDL(){
 this.pageInfoService.getAll().
 subscribe(data=>{
  this.pageNameList=data;
 
});
}

independentControllDDL(){
  this.independentControllList=this.staticFeaturesService.getYesOrNo();
}
rateEditDDL(){
  this.rateEditList=this.staticFeaturesService.getYesOrNo();
}
rackWiseBalanceShowDDL(){
  this.rackWiseBalanceShowList=this.staticFeaturesService.getYesOrNo();
}
upToDDL(){
  this.upToList=this.staticFeaturesService.getUpTo();
}

rtbItemCategoryDDL(){
  this.rbtItemCategoryList=this.staticFeaturesService.getRBTItemCategory();
}

requisitionTypeDDL(){
  this.requisitionTypeList=this.staticFeaturesService.getYesOrNo();
}







   onChangeVariableList(variableId,form:NgForm){ 

    console.log(form.value);
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
  
  
     this.isShowListForItemRateManageInMRR=false;
     this.isShowListForUsergivenitemcode=false;
     this.isShowListForBookKeepingMethod=false;
     this.isShowListForAllocatedQuantity=false;
     this.isShowListForReceiveControll=false;
     this.isShowListForIndependentbasiscontroll=false;
     this.isShowListForRackWiseBalanceShow=false;
    this.isShowListForRequisitionBasisTransfer=false;
     
   this.variableSettingsTableService.getVariableSettingsTable().subscribe(data=>{
     console.log(data);
     this.variableSettingsTableList=data;
  
   let  variableSettingsTableLObjectByVariableId
   =this.variableSettingsTableList.find(f=>f.moduleId==6&&
    f.variableListId==variableId);
    console.log(variableSettingsTableLObjectByVariableId);
      if(variableSettingsTableLObjectByVariableId!=undefined){

        if(variableId==114){
          this.isShowEditButton=false;
          this.isShowSaveButton=true;
          this.isShowDeleteButton=false;
          this.isShowListForItemRateManageInMRR=true;
          this.variableSettingsTableService.variableSettingsTable.id=0;
          let  variableSettingsTableLListByVariableId
          =this.variableSettingsTableList.filter(f=>f.moduleId==6&&
           f.variableListId==variableId);
        this.ListForItemRateManageInMRR=variableSettingsTableLListByVariableId;
        this.ListForItemRateManageInMRR.forEach(i => {


          //for get company Name
          this.companyService.getAllCompany().subscribe(data=>{
            let companyName=data.find(f=>f.compID==i.companyId).company_Name;
            i.companyName=companyName;
          });

          //for get item category name
          this.itemCategoryService.getItemCategory().subscribe(data=>{
            let itemCategoryName=data.find(f=>f.id==i.valueOne).itemCategoryName;
            i.itemCategoryName=itemCategoryName;
          });

        });
        console.log(this.ListForItemRateManageInMRR);
        }

       else if(variableId==116){
          this.isShowEditButton=false;
          this.isShowSaveButton=true;
          this.isShowDeleteButton=false;
          this.isShowListForUsergivenitemcode=true;
          this.variableSettingsTableService.variableSettingsTable.id=0;
          let usergivenitemcodeId
          =this.variableSettingsTableList.filter(f=>f.moduleId==6&&
           f.variableListId==variableId);
        this.listForUsergivenitemcode=usergivenitemcodeId;
        this.listForUsergivenitemcode.forEach(i => {


          //for get company Name
          this.companyService.getAllCompany().subscribe(data=>{
            let companyName=data.find(f=>f.compID==i.companyId).company_Name;
            i.companyName=companyName;
          });

          //for get item category name
          this.itemCategoryService.getItemCategory().subscribe(data=>{
            let itemCategoryName=data.find(f=>f.id==i.valueOne).itemCategoryName;
            i.itemCategoryName=itemCategoryName;
          });

        });
       
        }

        else if(variableId==117){
          this.isShowEditButton=false;
          this.isShowSaveButton=true;
          this.isShowDeleteButton=false;
          this.isShowListForBookKeepingMethod=true;
          this.variableSettingsTableService.variableSettingsTable.id=0;
          let bookKeepingMethodId
          =this.variableSettingsTableList.filter(f=>f.moduleId==6&&
           f.variableListId==variableId);
        this.ListForBookKeepingMethod=bookKeepingMethodId;
        this.ListForBookKeepingMethod.forEach(i => {


          //for get company Name
          this.companyService.getAllCompany().subscribe(data=>{
            let companyName=data.find(f=>f.compID==i.companyId).company_Name;
            i.companyName=companyName;
          });

          //for get item category name
          this.itemCategoryService.getItemCategory().subscribe(data=>{
            let itemCategoryName=data.find(f=>f.id==i.valueOne).itemCategoryName;
            i.itemCategoryName=itemCategoryName;
          });

        });
       
        }

        else if(variableId==118){
          this.isShowEditButton=false;
          this.isShowSaveButton=true;
          this.isShowDeleteButton=false;
          this.isShowListForAllocatedQuantity=true;
          this.variableSettingsTableService.variableSettingsTable.id=0;
          let allocatedQuantityId
          =this.variableSettingsTableList.filter(f=>f.moduleId==6&&
           f.variableListId==variableId);
        this.listForAllocatedQuantity=allocatedQuantityId;
        this.listForAllocatedQuantity.forEach(i => {


          //for get company Name
          this.companyService.getAllCompany().subscribe(data=>{
            let companyName=data.find(f=>f.compID==i.companyId).company_Name;
            i.companyName=companyName;
          });

          //for get item category name
          this.itemCategoryService.getItemCategory().subscribe(data=>{
            let itemCategoryName=data.find(f=>f.id==i.valueOne).itemCategoryName;
            i.itemCategoryName=itemCategoryName;
          });

        });
       
        }
        else if(variableId==119){
          this.isShowEditButton=false;
          this.isShowSaveButton=true;
          this.isShowDeleteButton=false;
          this.isShowListForReceiveControll=true;
          this.variableSettingsTableService.variableSettingsTable.id=0;
          let receiveControlId
          =this.variableSettingsTableList.filter(f=>f.moduleId==6&&
           f.variableListId==variableId);
        this.listForReceiveControll=receiveControlId;
        this.listForReceiveControll.forEach(i => {


          //for get company Name
          this.companyService.getAllCompany().subscribe(data=>{
            let companyName=data.find(f=>f.compID==i.companyId).company_Name;
            i.companyName=companyName;
          });

          //for get item category name
          this.itemCategoryService.getItemCategory().subscribe(data=>{
            let itemCategoryName=data.find(f=>f.id==i.valueOne).itemCategoryName;
            i.itemCategoryName=itemCategoryName;
          });

        });
       
        }

        else if(variableId==120){
          this.isShowEditButton=false;
          this.isShowSaveButton=true;
          this.isShowDeleteButton=false;
          this.isShowListForIndependentbasiscontroll=true;
          this.variableSettingsTableService.variableSettingsTable.id=0;
          let IndependentbasiscontrollId
          =this.variableSettingsTableList.filter(f=>f.moduleId==6&&
           f.variableListId==variableId);
        this.listForIndependentbasiscontroll=IndependentbasiscontrollId;
        this.listForIndependentbasiscontroll.forEach(i => {


          //for get company Name
          this.companyService.getAllCompany().subscribe(data=>{
            let companyName=data.find(f=>f.compID==i.companyId).company_Name;
            i.companyName=companyName;
          });

          //for get item category name
          this.pageInfoService.getAll().subscribe(data=>{
            let pageName=data.find(f=>f.id==i.valueOne).pageName;
            i.pageName=pageName;
          });

        });
       
        }
        else if(variableId==121){
          this.isShowEditButton=false;
          this.isShowSaveButton=true;
          this.isShowDeleteButton=false;
          this.isShowListForRackWiseBalanceShow=true;
          this.variableSettingsTableService.variableSettingsTable.id=0;
          let RackWiseBalanceShowId
          =this.variableSettingsTableList.filter(f=>f.moduleId==6&&
           f.variableListId==variableId);
        this.listForRackWiseBalanceShow=RackWiseBalanceShowId;
        this.listForRackWiseBalanceShow.forEach(i => {


          //for get company Name
          this.companyService.getAllCompany().subscribe(data=>{
            let companyName=data.find(f=>f.compID==i.companyId).company_Name;
            i.companyName=companyName;
          });

          //for get item category name
           this.itemCategoryService.getItemCategory().subscribe(data=>{
             let itemCategoryName=data.find(f=>f.id==i.valueOne).itemCategoryName;
           i.itemCategoryName=itemCategoryName;
          });

        });
       
        }
        else if(variableId==129){
          this.isShowEditButton=false;
          this.isShowSaveButton=true;
          this.isShowDeleteButton=false;
          this.isShowListForRequisitionBasisTransfer=true;
          this.variableSettingsTableService.variableSettingsTable.id=0;
          let RequisitionBasisTransferId
          =this.variableSettingsTableList.filter(f=>f.moduleId==6&&
           f.variableListId==variableId);
        this.listForRequisitionBasisTransfer=RequisitionBasisTransferId;
        this.listForRequisitionBasisTransfer.forEach(i => {


          //for get company Name
          this.companyService.getAllCompany().subscribe(data=>{
            let companyName=data.find(f=>f.compID==i.companyId).company_Name;
            i.companyName=companyName;
          });

          

        });
       
        }
        // else if(){
            //next list show logic write here
        // }
        else{
          this.variableSettingsTableService.variableSettingsTable
          =variableSettingsTableLObjectByVariableId;
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

  
    
    if(variableId==112){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=4;
       this.variableSettingsTableService.variableSettingsTable.labelOne=' Category';
       this.variableSettingsTableService.variableSettingsTable.labelTwo='Item Group';
       this.variableSettingsTableService.variableSettingsTable.labelThree='Source';
       this.variableSettingsTableService.variableSettingsTable.labelFour='Standard';
    }
    if(variableId==114){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
       this.variableSettingsTableService.variableSettingsTable.labelTwo='Rate Optional';
       this.variableSettingsTableService.variableSettingsTable.labelThree='Is Editable';
      
    }
    if(variableId==116){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=2;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
       this.variableSettingsTableService.variableSettingsTable.labelTwo='Code Required';
 
      
    }
    if(variableId==117){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=2;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
       this.variableSettingsTableService.variableSettingsTable.labelTwo='Method';
 
      
    }
    if(variableId==118){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=2;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
       this.variableSettingsTableService.variableSettingsTable.labelTwo='Allocated';
 
      
    }
    if(variableId==119){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=2;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
       this.variableSettingsTableService.variableSettingsTable.labelTwo='ReceiveControll';
 
      
    }
    if(variableId==120){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Page Name';
       this.variableSettingsTableService.variableSettingsTable.labelTwo='Independent Controll';
       this.variableSettingsTableService.variableSettingsTable.labelThree='Rate Edit';
 
      
    }
    if(variableId==120){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
       this.variableSettingsTableService.variableSettingsTable.labelTwo='Rack Wise Balance Show';
       this.variableSettingsTableService.variableSettingsTable.labelThree='Up To';
 
      
    }
    if(variableId==122){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=3;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
       this.variableSettingsTableService.variableSettingsTable.labelTwo='Over Rcv. (%)';
       this.variableSettingsTableService.variableSettingsTable.labelThree='Over Rcv. Payment';
       
    }
    if(variableId==123){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Issue Requisition Mandatory';

    }
    if(variableId==124){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
       this.variableSettingsTableService.variableSettingsTable.labelOne='During Issue';

    }

    if(variableId==125){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Woven Finish Fabric Desc Change';

    }

    if(variableId==126){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Auto Transfer Receive';

    }
    if(variableId==127){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Basis';

    }
    if(variableId==128){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=1;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Lot Maintain';

    }
    if(variableId==129){
      this.variableSettingsTableService.variableSettingsTable.countPageInputField=2;
       this.variableSettingsTableService.variableSettingsTable.labelOne='Item Category';
       this.variableSettingsTableService.variableSettingsTable.labelTwo='Requisition Type';
 
      
    }

   
    
   }
   onSubmit(){
     console.log();
     this.variableSettingsTableService.variableSettingsTable.moduleId=6;
     if(this.variableSettingsTableService.variableSettingsTable.id==0){
      this.variableSettingsTableService.addVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data=>{
        this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
        this.isShowDeleteButton=false;
           this.isShowSaveButton=false;
           this.isShowListForItemRateManageInMRR=false;
           this.isShowListForUsergivenitemcode=false;
           this.isShowListForBookKeepingMethod=false;
           this.isShowListForAllocatedQuantity=false;
           this.isShowListForReceiveControll=false;
           this.isShowListForIndependentbasiscontroll=false;
           this.isShowListForRackWiseBalanceShow=false;
           this.isShowListForRequisitionBasisTransfer=false;
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
        this.isShowListForItemRateManageInMRR=false;
        this.isShowListForUsergivenitemcode=false;
        this.isShowListForBookKeepingMethod=false;
        this.isShowListForAllocatedQuantity=false;
        this.isShowListForReceiveControll=false;
        this.isShowListForIndependentbasiscontroll=false;
        this.isShowListForRackWiseBalanceShow=false;
        this.isShowListForRequisitionBasisTransfer=false;
        
    this.hideNShowList.forEach(element => {
  
     element.isHideNShow=false;
  
    });
        this.resetForm();
      });
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
           this.isShowListForItemRateManageInMRR=false;
           this.isShowListForUsergivenitemcode=false;
           this.isShowListForBookKeepingMethod=false;
           this.isShowListForAllocatedQuantity=false;
           this.isShowListForReceiveControll=false;
           this.isShowListForIndependentbasiscontroll=false;
           this.isShowListForRackWiseBalanceShow=false;
           this.isShowListForRequisitionBasisTransfer=false;
          this.hideNShowList.forEach(element => {
     
            element.isHideNShow=false;
           
           });
           this.resetForm();
           
        },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
      }
     })
   }



   getEditModeDataForItemRateManageInMRR(id){
    let  variableSettingsTableLObjectByVariableId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =variableSettingsTableLObjectByVariableId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }

   getEditModeDataUsergivenitemcode(id){
    let usergivenitemcodeId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =usergivenitemcodeId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }

   getEditModeDataBookKeepingMethod(id){
    let bookKeepingMethodId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =bookKeepingMethodId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }

   getEditModeDataAllocatedQuantity(id){
    let allocatedQuantityId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =allocatedQuantityId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }

   getEditModeDataReceiveControll(id){
    let receiveControllId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =receiveControllId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }
   getEditModeDataIndependentbasiscontroll(id){
    let IndependentbasiscontrollId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =IndependentbasiscontrollId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }

   getEditModeDataRackWiseBalanceShow(id){
    let RackWiseBalanceShowId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =RackWiseBalanceShowId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }

   
   getEditModeDataRequisitionBasisTransfer(id){
    let RequisitionBasisTransferId
    =this.variableSettingsTableList.find(f=>f.id==id);
     this.variableSettingsTableService.variableSettingsTable
     =RequisitionBasisTransferId;
     this.isShowEditButton=true;
     this.isShowSaveButton=false;
     this.isShowDeleteButton=true;
   }
}
