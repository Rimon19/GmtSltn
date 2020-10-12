import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,Sort, MatSort, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { MasterPodetailsInfroesService } from '../../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { Subscription } from 'rxjs';
import { MasterPodetailsInfroes } from '../../../../@core/data/marchanzider-model/master-podetails-infroes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs/operators';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { AddInputPannelInformationComponent } from '../../input-pannel-information/add-input-pannel-information/add-input-pannel-information.component';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { InputPannelPodetailsService } from '../../../../@core/mock/marchandizer/input-pannel-podetails.service';

@Component({
  selector: 'ngx-show-po-information',
  templateUrl: './show-po-information.component.html',
  styleUrls: ['./show-po-information.component.scss']
})
export class ShowPoInformationComponent implements OnInit {
  editedId:any;
  @ViewChild("sortPoDetails", { static: true }) sortPoDetails: MatSort;
  @ViewChild("PoDetails", { static: false }) set contentFabricCost(
    sortPoDetails: MatSort
  ) {
    this.dataSourcePoDetails.sort = sortPoDetails;
  }
  @ViewChild("InitialOrderMatPaginator", { static: true })
  InitialOrderpaginator: MatPaginator;
  Tostr = new Tostr();
 
  poDetailsInfo: MasterPodetailsInfroes[];
  dataSourcePoDetails = new MatTableDataSource();
  subscription: Subscription;
  applyFilterForPoDetails(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourcePoDetails.filter = filterValue;
  }
  displayedColumnsPoDetails = [
    "Action",
    //"itemDetails",
    "pO_No",
    "pO_Received_Date",
    "pub_Shipment_Date",
    "org_Shipment_Date",
    "fac_Receive_Date",
    "pO_Quantity",
    // "avg_Price",
    // "amount",
    // "excess_Cut",
    // "plan_Cut",
    // "poStatusID",
    // "projected_Po",
    // "tnA_FromOrUpto",
    // "internal_RefOrGrouping",
    // "delay_For",
    // "packing_ID",
    // "file_No",
    // "sCorLC",
    // "remarks"
  ];
  constructor(
   private masterPodetailsInfroesService:MasterPodetailsInfroesService,
   private route:ActivatedRoute,
   private router:Router,
   private dialog: MatDialog,
   private datapassingService:DatapassingService,
   private mathdialogService: MatDialogService,
   private toastrService: NbToastrService,
   private inputPannelPodetailsService:InputPannelPodetailsService
  ) 
  {
    this.editedId = this.route.snapshot.paramMap.get('orderAutoId');  
    
   }

  ngOnInit() {
    this.refresPODetailsInfoList(this.editedId);

    
this.dataSourcePoDetails.sort = this.sortPoDetails;

const sortState: Sort = {active: 'pO_No', direction: 'desc'};
this.sortPoDetails.active = sortState.active;
this.sortPoDetails.direction = sortState.direction;

    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  AddPO() {
    this.router.navigate(["/pages/add-po-information/",this.editedId]);
  }
  onAdd(element) {
  
    localStorage.setItem("poNoPriKey", element.poDetID);
    //localStorage.setItem("poQuantity", element.pO_Quantity);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.height = "80%";
    dialogConfig.id = element.poDetId;
    // dialogConfig.data=element;
    this.dialog.open(AddInputPannelInformationComponent, dialogConfig);
  }
  refresPODetailsInfoList(id) {
    this.subscription = this.masterPodetailsInfroesService
      .getMasterPodetailsInfroes(id)
      .subscribe((data) => {

       
        this.poDetailsInfo =data;
        this.dataSourcePoDetails = new MatTableDataSource(this.poDetailsInfo);
     
        this.dataSourcePoDetails.sort = this.sortPoDetails;
        this.dataSourcePoDetails.paginator = this.InitialOrderpaginator;
      
      });
  }
  editPODetails(poDetID) {
    
    this.router.navigate(["/pages/edit-po-information/",poDetID]);

  
}
  backTo(){
    this.router.navigate(['/pages/marchandizer']);
  } 
  
  redirectToCountryByPoId(element,poId){
  
    localStorage.setItem("PoDetID",poId);
    localStorage.setItem("poQuantity", element.pO_Quantity);
    localStorage.setItem("AvgPrice",element.avg_Price.toString());
    console.log(typeof(element.avg_Price));

    this.router.navigate(['/pages/show-input-pannel-information/',poId]);
  }
   
  deletePODetails(element) {
    // let inputPPOData ;
    // this.inputPannelPodetailsService.getAllInputPannelPodetails().subscribe(data=>{
    //    inputPPOData=data.find(f=>f.po_details_ID==element.poDetID);
    // })

    this.mathdialogService
      .openConfirmDialog("Are you sure to delete this record ?")
      .afterClosed()
      .subscribe((res) => {
        if (res ) {
          // if(inputPPOData==undefined){
          this.masterPodetailsInfroesService
            .deleteMasterPodetailsInfroes(element.poDetID)
            .subscribe(
              (res) => {
              
                this.Tostr.showToast(
                  "primary",
                  "",
                  "Deleleted",
                  "Successfully",
                  this.toastrService
                  
                );
                this.refresPODetailsInfoList(this.editedId);
              },
              (err) => {
                this.Tostr.showToast(
                  "danger",
                  "",
                 "Hanging",
                  "",
                  this.toastrService
                );
                this.refresPODetailsInfoList(this.editedId);
              }
            
            );
          // }
          // else{
          //   this.Tostr.showToast(
          //     "danger",
          //     "",
          //    "Please Delete Child fast",
          //     "",
          //     this.toastrService
          //   );
          //   this.refresPODetailsInfoList(this.editedId);
          // }
        }
      
      });
  }
}
