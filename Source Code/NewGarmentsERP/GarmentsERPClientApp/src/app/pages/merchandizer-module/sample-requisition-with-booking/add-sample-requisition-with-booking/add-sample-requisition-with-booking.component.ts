import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { NbToastrService } from "@nebular/theme";
import { ErpFileComponent } from "../../../Shared/erp-file/erp-file.component";
import { MatDialogConfig, MatDialog } from "@angular/material";
import { Tostr } from "../../../../@core/data/tostr.model";
import { SampleRequisitionWithBookingService } from "../../../../@core/mock/marchandizer/sample-requisition-with-booking.service";
import { DateResizeService } from "../../../../@core/mock/marchandizer/date-resize.service";
import { DropdownValueService } from "../../../../@core/mock/shared/dropdown-value.service";
import { ApprovedBy } from "../../../../@core/data/Shared/approved-by";
import { EntryBy } from "../../../../@core/data/Shared/entry-by";
import { DatapassingService } from "../../../../@core/mock/shared/datapassing.service";

@Component({
  selector: "ngx-add-sample-requisition-with-booking",
  templateUrl: "./add-sample-requisition-with-booking.component.html",
  styleUrls: ["./add-sample-requisition-with-booking.component.scss"],
})
export class AddSampleRequisitionWithBookingComponent implements OnInit {
  Tostr = new Tostr();

  constructor(
    public sampleRequisitionWithBookingService: SampleRequisitionWithBookingService,
    private router: Router,
    private dialog: MatDialog,
    private dateResizeService: DateResizeService,
    private datapassingService: DatapassingService,
    private toastrService: NbToastrService,
    private dropdownValueService: DropdownValueService
  ) {}

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getSampleStage();
    this.dropdownValueService.getCompany();
    this.dropdownValueService.getLocation();
    this.dropdownValueService.getBuyers();
    this.dropdownValueService.getBuyerWiseSeason(0);
    this.dropdownValueService.getProductDept();
    this.dropdownValueService.getDealingMerchant();
    this.dropdownValueService.getAgents();
    this.dropdownValueService.getYesNo();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking = {
      id: 0,
      requisitionId: "",
      sampleStage: "",
      requisitionDate: "",
      styleRefId: "",
      companyNameId: "",
      locationId: "",
      buyerNameId: "",
      seasonId: "",
      productDept: "",
      dealingMerchantId: "",
      agentNameId: "",
      buyerRef: "",
      bHMerchant: "",
      estShipDate: "",
      remarksDesc: "",
      file: "",
      readyToApproved: "",
      materialDeliveryDate: "",

      entryDate: "",
      entryBy: "",
      approvedDate: "",
      approvedBy: "",
      isApproved: false,
      status: "",
    };
  }

  onSubmit() {
    if (
      this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking
        .agentNameId == ""
    ) {
      this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking.agentNameId = 0;
    }

    this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking.approvedDate = this.dateResizeService.dateResize(
      new Date()
    );
    this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking.requisitionDate = this.dateResizeService.dateResize(
      this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking
        .requisitionDate
    );
    this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking.estShipDate = this.dateResizeService.dateResize(
      this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking
        .estShipDate
    );
    this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking.materialDeliveryDate = this.dateResizeService.dateResize(
      this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking
        .materialDeliveryDate
    );
    this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking.approvedBy =
      ApprovedBy.userName;
    this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking.isApproved = true;
    this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking.entryBy =
      EntryBy.userName;
    this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking.status =
      "Active";
    this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking.entryDate = this.dateResizeService.dateResize(
      new Date()
    );
    this.sampleRequisitionWithBookingService
      .add(
        this.sampleRequisitionWithBookingService.sampleRequisitionWithBooking
      )
      .subscribe((res) => {
        console.log(res);
        this.Tostr.showToast(
          "primary",
          "",
          "Saved Successfully",
          "",
          this.toastrService
        );
        this.resetForm();
        this.router.navigate(["/pages/sample-requisition-withBooking"]);
      });
  }
  onChangeBuyer(buyerId){
    this.dropdownValueService.getBuyerWiseSeason(buyerId);
  }
  backTo() {
    this.router.navigate(["/pages/sample-requisition-withBooking"]);
  }

  //  onAddFile(){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus= true;
  //   dialogConfig.width="50%";
  //   dialogConfig.height="50%";
  // // page id is 2 here from according to table imageOrFileHolderPages

  //  // this.datapassingService.setValue();

  //   this.dialog.open(ErpFileComponent, dialogConfig);
  // }
}
