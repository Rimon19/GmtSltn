
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { SampleFabricBookingWithoutorderMastersService } from '../../../@core/mock/marchandizer/sample-fabric-booking-withoutorder-masters.service';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../@core/data/Library-Modul-model/buyer-profile';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { DatapassingService } from '../../../@core/mock/shared/datapassing.service';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { SupplierProfile } from '../../../@core/data/Library-Modul-model/supplier-profile';
import { SupplierProfileService } from '../../../@core/mock/library/supplier-profile.service';
import { SampleFabricBookingWithoutorderDetailsService } from '../../../@core/mock/marchandizer/sample-fabric-booking-withoutorder-details.service';

@Component({
  selector: 'ngx-sample-fabric-booking-withoutorder-masters',
  templateUrl: './sample-fabric-booking-withoutorder-masters.component.html',
  styleUrls: ['./sample-fabric-booking-withoutorder-masters.component.scss']
})
export class SampleFabricBookingWithoutorderMastersComponent implements OnInit {
  

 
@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','bookingNo','buyerProfileId','fabricNature','fabricSource','bookingDate','currency','exchangeRate','deliveryDate','payMode','supplierProfileId','teamLeaderId','dealingMerchantId','readyToApproved'];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Buyer Profile',
        columnProp: 'buyerProfileId'
      },{
        name: 'Fabric Nature',
        columnProp: 'fabricNature'
      },{
        name: 'Fabric Source',
        columnProp: 'fabricSource'
      },{
        name: 'Exchange Rate',
        columnProp: 'exchangeRate'
      },{
        name: 'Delivery Date',
        columnProp: 'deliveryDate'
      },{
        name: 'Pay Mode',
        columnProp: 'payMode'
      },{
        name: 'Supplier',
        columnProp: 'supplierProfileId'
      },{
        name: 'TeamLeader',
        columnProp: 'teamLeaderId'
      }, 
  ]


  //private buyerList: BehaviorSubject<BuyerProfile[]>;
  
constructor(private sampleFabricBookingWithoutOrderMasterService:SampleFabricBookingWithoutorderMastersService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private buyerProfileService:BuyerProfileService,
   private supplierProfileService:SupplierProfileService,
   private datapassingService:DatapassingService,
   private fb: FormBuilder,
   private dropdownValueService:DropdownValueService,
   private sampleFabricBookingWithoutorderDetailsService:SampleFabricBookingWithoutorderDetailsService

   ) { 
   // this.buyerList = new BehaviorSubject<BuyerProfile[]>();
   }

ngOnInit() {

this.dropdownValueService.getBuyers();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getTeamleaders();
this.dropdownValueService.getDealingMerchant();
this.dropdownValueService.getUsers();
this.refresList();

  
}

applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/add-sample-fabric-booking-without-order"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/edit-sample-fabric-booking-without-order/",element.id]);  
}

onDelete(element){

  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.sampleFabricBookingWithoutOrderMasterService.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){ 
 
  

  this.sampleFabricBookingWithoutOrderMasterService.getAll()
  .subscribe(items=>{
   
    items.forEach(element => {
      
      if(element.buyerProfileId!=0){
      let buyerName=this.dropdownValueService.buyerList
      .find(f=>f.id==element.buyerProfileId).contactName;
          element.buyerProfileId=buyerName;
      }else{
        element.buyerProfileId='';
      }  
      
      if(element.supplierProfileId!=0){
        let supplierName=this.dropdownValueService.subpplierList
        .find(f=>f.id==element.supplierProfileId).supplierName;
            element.supplierProfileId=supplierName;
        }else{
          element.supplierProfileId='';
        } 

       
        if(element.teamLeaderId!=0){
         
            let teamLeader=this.dropdownValueService.teamleaderList.find(f=>f.id==element.teamLeaderId).userId;
          element.teamLeaderId=  this.dropdownValueService.userList.find(f=>f.userID==teamLeader).fullName;
           }else{
            element.teamLeaderId='';
          } 

          if(element.dealingMerchantId!=0){
            let dealingMerchant=this.dropdownValueService.dealiningMarchandList.find(f=>f.id==element.dealingMerchantId).userId;
  
                element.dealingMerchantId=this.dropdownValueService.userList.find(f=>f.userID==dealingMerchant).fullName;
            }else{
              element.dealingMerchantId='';
            } 
         
         
   });
   
  
    this.dataSource=new MatTableDataSource(items);
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
  this.refresList();
}   

onDetails(element){
  
  this.sampleFabricBookingWithoutorderDetailsService.getAll().subscribe(data=>{
    console.log(data);

  let buyerProfileId=this.dropdownValueService.buyerList
  .find(f=>f.contactName.toString()==element.buyerProfileId.toString()).id;
     
  

 //localStorage.setItem('sampleFabBWOMasterInfo', JSON.stringify({pkId:element.id,buyerProfileId:buyerProfileId}));
 let obj= data.find(f=>f.sfbWithoutOrderId==element.id);
 console.log(obj)
  if(obj==undefined){
    console.log('save cakk')
    this.router.navigate(["/pages/add-sample-fabric-booking-without-order-details/"]);
    this.datapassingService.setValue({buyerProfileId:buyerProfileId,element: element});  
   
  }else{
    console.log('edit cakk');
    this.router.navigate(["/pages/edit-sample-fabric-booking-without-order-details/",element.id]);  
  }
  });
 
 
}
}
