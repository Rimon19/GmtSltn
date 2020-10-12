
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, Sort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { InputPannelPodetailsService } from '../../../../@core/mock/marchandizer/input-pannel-podetails.service';
import { AddInputPannelInformationComponent } from '../add-input-pannel-information/add-input-pannel-information.component';
import { CountryService } from '../../../../@core/mock/country.service';
import { PackingInfoesService } from '../../../../@core/mock/marchandizer/packing-infoes.service';
import { OrderItemsService } from '../../../../@core/mock/marchandizer/order-items.service';
import { EditInputPannelInformationComponent } from '../edit-input-pannel-information/edit-input-pannel-information.component';
import { Subscription } from 'rxjs';
import { InputPannelPodetails } from '../../../../@core/data/marchanzider-model/input-pannel-podetails.model';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { MasterPodetailsInfroesService } from '../../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { SizeWisePannelPodetailsService } from '../../../../@core/mock/marchandizer/size-wise-pannel-podetails.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
@Component({
  selector: 'ngx-show-input-pannel-information',
  templateUrl: './show-input-pannel-information.component.html',
  styleUrls: ['./show-input-pannel-information.component.scss']
})
export  class ShowInputPannelInformationComponent implements OnInit {
 
  editedId:any='';
  autoOrderId:any='';
  sizePannelIdList:any=[];


// @ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild("sort", { static: true }) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
inputPannelPodetails:InputPannelPodetails[];
dataSource = new MatTableDataSource();
subscription: Subscription;
clickEventsubscription:Subscription;
displayedColumns = ['id','cutt_off_Date','countryID','country_Type','cutt_off','country_Shipment_date','remarks','packing_ID'];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Cutt-Date',
        columnProp: 'cutt_off_Date'
      },{
        name: 'Country',
        columnProp: 'countryID'
      },{
        name: 'C-Type',
        columnProp: 'country_Type'
      },{
        name: 'Cuttoff',
        columnProp: 'cutt_off'
      },{
        name: 'C-Shipmentdate',
        columnProp: 'country_Shipment_date'
      }, 
  ]
constructor(private inputPannelPodetailsService:InputPannelPodetailsService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dialog: MatDialog,
   private route: ActivatedRoute,
   private countryService:CountryService,
   private packingInfoesService:PackingInfoesService,
   private orderItemsService: OrderItemsService,
   private datapassingService:DatapassingService,
   private masterPodetailsInfroesService:MasterPodetailsInfroesService,
   private sizeWisePannelPodetailsService:SizeWisePannelPodetailsService,
   private dropdownValueService:DropdownValueService

   ) { 

    this.editedId = this.route.snapshot.paramMap.get('poId');
    this.autoOrderId=localStorage.getItem("oderAutoId");
   }

ngOnInit() {
//this.refresList();
this.refresInputPannelInfoList(this.editedId);
this.recvClickEvent();


this.dataSource.sort = this.sort;

const sortState: Sort = {active: 'id', direction: 'desc'};
this.sort.active = sortState.active;
this.sort.direction = sortState.direction;


}

recvClickEvent(){
  this.clickEventsubscription=this.datapassingService.getClickEvent().subscribe(()=>{
    this.refresInputPannelInfoList(this.editedId);
  })
}



applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/",element.id]);  
}

onDelete(element){
         this.sizeWisePannelPodetailsService.getAllSizeWisePannelPodetails().subscribe(data=>{
               this.sizePannelIdList=data.filter(f=>f.inputPannelId==element.input_Pannel_ID)
         })
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.inputPannelPodetailsService.deleteInputPannelPodetails(element.input_Pannel_ID).subscribe(res=>{
                  this.sizePannelIdList.forEach(element => {
                    this.sizeWisePannelPodetailsService.deleteSizeWisePannelPodetails(element.sizePannelId).subscribe(res=>{

                    });
                  });
                  
                  
                 // this.refresList();
                 this.refresInputPannelInfoList(this.editedId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.inputPannelPodetailsService.getAllInputPannelPodetails().subscribe(item=>{
    item.forEach(res => {
      if(res.countryID!=0){
      let countryName=this.dropdownValueService.regionList
      .find(f=>f.regionID==res.countryID) && this.dropdownValueService.regionList
      .find(f=>f.regionID==res.countryID).region_Name;
     
      res.countryID=countryName;
     }
     else{
      res.countryID=''
     }
       if(res.packing_ID!=0){
        let packingName=this.dropdownValueService.packingInfoesItemsList
        .find(f=>f.packingID==res.packing_ID) &&this.dropdownValueService.packingInfoesItemsList
        .find(f=>f.packingID==res.packing_ID).packing_Name;
        res.packing_ID=packingName;

       }
       else{
        res.packing_ID='';
       }

       
        
      });
         
    this.dataSource=new MatTableDataSource(item);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  })
 
}
filterChange(filter, event) {
  //let filterValues = {}
  this.dataSource.filterPredicate = this.createFilter(); 
  this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
  this.dataSource.filter = JSON.stringify(this.filterValues)
}

createFilter() {
  let filterFunction = function (data: any, filter: string): boolean {
    let searchTerms = JSON.parse(filter);
    let isFilterSet = false;
    for (const col in searchTerms) {
      if (searchTerms[col].toString() !== '') {
        isFilterSet = true;
      } else {
        delete searchTerms[col];
      }
    }

    let nameSearch = () => {
      let found = false;
      if (isFilterSet) {
        for (const col in searchTerms) {
          searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
            if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
              found = true
            }
          });
        }
        return found
      } else {
        return true;
      }
    }
    return nameSearch()
  }
  return filterFunction
}

resetFilters() {
  this.filterValues = {}

  this.filterSelectObj.forEach((value:any, key) => {
    value.modelValue = undefined;
  })
  this.dataSource.filter = "";
  this.refresInputPannelInfoList(this.editedId);
}   
backTo(){
  
  // let id;
  // this.inputPannelPodetailsService.getAllInputPannelPodetails().subscribe(data=>{
  //    id=data.find(f=>f.input_Pannel_ID==this.editedId).po_details_ID;
     
  // })

        
  this.router.navigate(["/pages/show-po-information/",this.autoOrderId ]);  
  
}

refresInputPannelInfoList(id) {

  this.subscription = this.inputPannelPodetailsService
  .getInputPannelDetailsByPoDetailsId(id)
  .subscribe((data) =>{

    data.forEach(element => {


      this.countryService.getAllCountry().subscribe(data=>{
        let countryName= data.find(
         (f) => f.regionID == element.countryID
       ).region_Name;
       element.countryID = countryName;
      })

      this.packingInfoesService.getAllPackingInfoes().subscribe(data=>{
       
        let packingName=data.find(f=>f.packingID==element.packing_ID).packing_Name;
        element.packing_ID=packingName;
      })
      
    });
       
 
      this.inputPannelPodetails =data;
      this.dataSource = new MatTableDataSource(this.inputPannelPodetails);
    
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
     
  })
   
}

onAdd() {
  let initialOrderQunt:number=0;
  let sizeWiseQunt:number=0;
  let sizeWiseList :any=[];
 
   this.masterPodetailsInfroesService.getAllMasterPodetailsInfroes().subscribe(poDetails=>{
    initialOrderQunt = poDetails.find(f=>f.initialOrderID==this.autoOrderId).pO_Quantity;
   })
   this.sizeWisePannelPodetailsService.getAllSizeWisePannelPodetails().subscribe(sizePoDetails=>{
    sizeWiseList =sizePoDetails.filter(f=>f.poId==this.editedId );
    sizeWiseList.forEach(element => {
      
      sizeWiseQunt=sizeWiseQunt+element.quanity;
    });
     
    if(initialOrderQunt>sizeWiseQunt){

      localStorage.setItem("poNoPriKey", this.editedId);
     
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      dialogConfig.height = "80%";
     dialogConfig.id = '0';
      // dialogConfig.data=element;
      this.dialog.open(AddInputPannelInformationComponent, dialogConfig);
    }
    else{
      this.Tostr.showToast('danger','', 'Sum Of Po Quantity All ready Exceeds Target Po Quantity !', '',this.toastrService);
    }

   })


}


onEdit(element) {

  localStorage.setItem("poNoPriKey", this.editedId);
 // localStorage.setItem("poQuantity", element.pO_Quantity);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "80%";
  dialogConfig.height = "80%";
 dialogConfig.id = element.input_Pannel_ID;
  // dialogConfig.data=element;
  this.dialog.open(AddInputPannelInformationComponent, dialogConfig);
}
}
