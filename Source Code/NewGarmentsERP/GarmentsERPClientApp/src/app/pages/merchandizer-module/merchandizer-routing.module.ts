import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SalesForecastEntryComponent } from "./sales-forecast-entry/sales-forecast-entry.component";
import { ShowInitialOrderComponent } from "./fetch-initial-order/show-initial-order/show-initial-order.component";
import { AddInitialOrderComponent } from "./fetch-initial-order/add-initial-order/add-initial-order.component";
import { EditInitialOrderComponent } from "./fetch-initial-order/edit-initial-order/edit-initial-order.component";
import { AddPoInformationComponent } from "./po-information/add-po-information/add-po-information.component";
import { EditPoInformationComponent } from "./po-information/edit-po-information/edit-po-information.component";
import { ShowPoInformationComponent } from "./po-information/show-po-information/show-po-information.component";
import { InputPannelInfoComponent } from "./fetch-initial-order/input-pannel-info/input-pannel-info.component";
import { AddInputPannelInformationComponent } from "./input-pannel-information/add-input-pannel-information/add-input-pannel-information.component";
import { ShowInputPannelInformationComponent } from "./input-pannel-information/show-input-pannel-information/show-input-pannel-information.component";
import { ShowPreCoastingComponent } from "./pre-coasting/show-pre-coasting/show-pre-coasting.component";
import { AddFabricCostComponent } from "./add-fabric-cost/add-fabric-cost.component";
import { AddConversionCostComponent } from "./add-conversion-cost/add-conversion-cost.component";
import { ShowCompanyComponent } from "./company/show-company/show-company.component";
import { ShowLocationComponent } from "./location/show-location/show-location.component";
import { AddCountryComponent } from "./country/add-country/add-country.component";
import { EditCountryComponent } from "./country/edit-country/edit-country.component";
import { ShowCountryComponent } from "./country/show-country/show-country.component";
import { ShowMerchandizerComponent } from "./merchandizer/show-merchandizer/show-merchandizer.component";
import { ShowTeamleaderComponent } from "./teamleader/show-teamleader/show-teamleader.component";
import { AddPreCoastingComponent } from "./pre-coasting/add-pre-coasting/add-pre-coasting.component";
import { AddCostComponent } from "./add-cost/add-cost.component";
import { ShowImageComponent } from "./image/show-image/show-image.component";
import { TrimsCostComponent } from "./pre-coasting/trims-cost/trims-cost.component";
import { GmtsWashComponent } from "./pre-coasting/gmts-wash/gmts-wash.component";
import { EmbelCostComponent } from "./pre-coasting/embel-cost/embel-cost.component";
import { EditItemDetailsComponent } from "./fetch-initial-order/edit-item-details/edit-item-details.component";
import { ShortTrimsBookingComponent } from "./short-trims-booking/short-trims-booking.component";
import { AddShortTrimsBookingComponent } from "./short-trims-booking/add-short-trims-booking/add-short-trims-booking.component";
import { EditShortTrimsBookingComponent } from "./short-trims-booking/edit-short-trims-booking/edit-short-trims-booking.component";
import { MultipleJobWiseTrimsBookingV2Component } from "./multiple-job-wise-trims-booking-v2/multiple-job-wise-trims-booking-v2.component";
import { AddMultipleJobWiseTrimsBookingV2Component } from "./multiple-job-wise-trims-booking-v2/add-multiple-job-wise-trims-booking-v2/add-multiple-job-wise-trims-booking-v2.component";
import { EditMultipleJobWiseTrimsBookingV2Component } from "./multiple-job-wise-trims-booking-v2/edit-multiple-job-wise-trims-booking-v2/edit-multiple-job-wise-trims-booking-v2.component";
import { MultipleJobWiseShortTrimsBookingV2Component } from "./multiple-job-wise-short-trims-booking-v2/multiple-job-wise-short-trims-booking-v2.component";
import { AddMultipleJobWiseShortTrimsBookingV2Component } from "./multiple-job-wise-short-trims-booking-v2/add-multiple-job-wise-short-trims-booking-v2/add-multiple-job-wise-short-trims-booking-v2.component";
import { EditMultipleJobWiseShortTrimsBookingV2Component } from "./multiple-job-wise-short-trims-booking-v2/edit-multiple-job-wise-short-trims-booking-v2/edit-multiple-job-wise-short-trims-booking-v2.component";
import { MultipleJobWiseEmbellishmentWorkOrderComponent } from "./multiple-job-wise-embellishment-work-order/multiple-job-wise-embellishment-work-order.component";
import { AddMultipleJobWiseEmbellishmentWorkOrderComponent } from "./multiple-job-wise-embellishment-work-order/add-multiple-job-wise-embellishment-work-order/add-multiple-job-wise-embellishment-work-order.component";
import { EditMultipleJobWiseEmbellishmentWorkOrderComponent } from "./multiple-job-wise-embellishment-work-order/edit-multiple-job-wise-embellishment-work-order/edit-multiple-job-wise-embellishment-work-order.component";
import { ServiceBookingForAOPWithoutOrderComponent } from "./service-booking-for-aopwithout-order/service-booking-for-aopwithout-order.component";
import { AddServiceBookingForAOPWithoutOrderComponent } from "./service-booking-for-aopwithout-order/add-service-booking-for-aopwithout-order/add-service-booking-for-aopwithout-order.component";
import { EditServiceBookingForAOPWithoutOrderComponent } from "./service-booking-for-aopwithout-order/edit-service-booking-for-aopwithout-order/edit-service-booking-for-aopwithout-order.component";
import { ShowServiceBookingForAOPWithoutOrderDetailsComponent } from "./ServiceBookingForAOPWithoutOrderDetails/show-service-booking-for-aopwithout-order-details/show-service-booking-for-aopwithout-order-details.component";
import { AddServiceBookingForAOPWithoutOrderDetailsComponent } from "./ServiceBookingForAOPWithoutOrderDetails/add-service-booking-for-aopwithout-order-details/add-service-booking-for-aopwithout-order-details.component";
import { EditServiceBookingForAOPWithoutOrderDetailsComponent } from "./ServiceBookingForAOPWithoutOrderDetails/edit-service-booking-for-aopwithout-order-details/edit-service-booking-for-aopwithout-order-details.component";
import { ServiceBookingForDyeingComponent } from "./service-booking-for-dyeing/service-booking-for-dyeing.component";
import { AddServiceBookingForDyeingComponent } from "./service-booking-for-dyeing/add-service-booking-for-dyeing/add-service-booking-for-dyeing.component";
import { EditServiceBookingForDyeingComponent } from "./service-booking-for-dyeing/edit-service-booking-for-dyeing/edit-service-booking-for-dyeing.component";
import { ServiceBookingForAOPV2Component } from "./service-booking-for-aopv2/service-booking-for-aopv2.component";
import { AddServiceBookingForAOPV2Component } from "./service-booking-for-aopv2/add-service-booking-for-aopv2/add-service-booking-for-aopv2.component";
import { EditServiceBookingForAOPV2Component } from "./service-booking-for-aopv2/edit-service-booking-for-aopv2/edit-service-booking-for-aopv2.component";
import { ServiceBookingForKnitingAndDyeingComponent } from "./service-booking-for-kniting-and-dyeing/service-booking-for-kniting-and-dyeing.component";
import { AddServiceBookingForKnitingComponent } from "./service-booking-for-kniting-and-dyeing/add-service-booking-for-kniting/add-service-booking-for-kniting.component";
import { EditServiceBookingForKnitingComponent } from "./service-booking-for-kniting-and-dyeing/edit-service-booking-for-kniting/edit-service-booking-for-kniting.component";
import { ServiceBookingForKnitingAndDyeingDetailsComponent } from "./service-booking-for-kniting-and-dyeing-details/service-booking-for-kniting-and-dyeing-details.component";
import { AddServiceBookingForKnitingDetailsComponent } from "./service-booking-for-kniting-and-dyeing-details/add-service-booking-for-kniting-details/add-service-booking-for-kniting-details.component";
import { EditServiceBookingForKnitingDetailsComponent } from "./service-booking-for-kniting-and-dyeing-details/edit-service-booking-for-kniting-details/edit-service-booking-for-kniting-details.component";
import { SampleRequisitionWithBookingComponent } from "./sample-requisition-with-booking/sample-requisition-with-booking.component";
import { AddSampleRequisitionWithBookingComponent } from "./sample-requisition-with-booking/add-sample-requisition-with-booking/add-sample-requisition-with-booking.component";
import { EditSampleRequisitionWithBookingComponent } from "./sample-requisition-with-booking/edit-sample-requisition-with-booking/edit-sample-requisition-with-booking.component";
import { SampleFabricBookingComponent } from "./sample-fabric-booking/sample-fabric-booking.component";
import { AddSampleFabricBookingComponent } from "./sample-fabric-booking/add-sample-fabric-booking/add-sample-fabric-booking.component";
import { EditSampleFabricBookingComponent } from "./sample-fabric-booking/edit-sample-fabric-booking/edit-sample-fabric-booking.component";
import { SampleRequisitionRequiredDetailsComponent } from "./sample-requisition-required-details/sample-requisition-required-details.component";
import { DepcAmortComponent } from "./pre-coasting/depc-amort/depc-amort.component";
import { CommlCostComponent } from "./pre-coasting/comml-cost/comml-cost.component";
import { CommissionComponent } from "./pre-coasting/commission/commission.component";
import { FabricServiceBookingComponent } from "./fabric-service-booking/fabric-service-booking.component";
import { AddFabricServiceBookingComponent } from "./fabric-service-booking/add-fabric-service-booking/add-fabric-service-booking.component";
import { EditFabricServiceBookingComponent } from "./fabric-service-booking/edit-fabric-service-booking/edit-fabric-service-booking.component";
import { ServiceBookingForKnittingComponent } from "./service-booking-for-knitting/service-booking-for-knitting.component";
import { AddServiceBookingForKnittingComponent } from "./service-booking-for-knitting/add-service-booking-for-knitting/add-service-booking-for-knitting.component";
import { EditServiceBookingForKnittingComponent } from "./service-booking-for-knitting/edit-service-booking-for-knitting/edit-service-booking-for-knitting.component";
import { ServiceBookingForKnitingDetailComponent } from "./service-booking-for-kniting-detail/service-booking-for-kniting-detail.component";
import { AddSBForKnitingDetailComponent } from "./service-booking-for-kniting-detail/add-sbfor-kniting-detail/add-sbfor-kniting-detail.component";
import { EditSBForKnitingDetailComponent } from "./service-booking-for-kniting-detail/edit-sbfor-kniting-detail/edit-sbfor-kniting-detail.component";
import { EmbellishmentWorkOrderV2Component } from "./embellishment-work-order-v2/embellishment-work-order-v2.component";
import { AddEmbellishmentWorkOrderV2Component } from "./embellishment-work-order-v2/add-embellishment-work-order-v2/add-embellishment-work-order-v2.component";
import { EditEmbellishmentWorkOrderV2Component } from "./embellishment-work-order-v2/edit-embellishment-work-order-v2/edit-embellishment-work-order-v2.component";
import { EmbellishmentWorkOrderV2Details } from "../../@core/data/marchanzider-model/embellishment-work-order-v2-details";
import { AddEmbellishmentWorkOrderV2DetailsComponent } from "./embellishment-work-order-v2-details/add-embellishment-work-order-v2-details/add-embellishment-work-order-v2-details.component";
import { EditEmbellishmentWorkOrderV2DetailsComponent } from "./embellishment-work-order-v2-details/edit-embellishment-work-order-v2-details/edit-embellishment-work-order-v2-details.component";
import { SampleFabricBookingWithoutorderMastersComponent } from "./sample-fabric-booking-withoutorder-masters/sample-fabric-booking-withoutorder-masters.component";
import { AddSampleFabricBookingWithoutorderMastersComponent } from "./sample-fabric-booking-withoutorder-masters/add-sample-fabric-booking-withoutorder-masters/add-sample-fabric-booking-withoutorder-masters.component";
import { EditSampleFabricBookingWithoutorderMastersComponent } from "./sample-fabric-booking-withoutorder-masters/edit-sample-fabric-booking-withoutorder-masters/edit-sample-fabric-booking-withoutorder-masters.component";
import { AddSampleFabricBookingWithoutorderDetailsComponent } from "./sample-fabric-booking-withoutorder-details/add-sample-fabric-booking-withoutorder-details/add-sample-fabric-booking-withoutorder-details.component";
import { EditSampleFabricBookingWithoutorderDetailsComponent } from "./sample-fabric-booking-withoutorder-details/edit-sample-fabric-booking-withoutorder-details/edit-sample-fabric-booking-withoutorder-details.component";
import { AddSampleFabricBookingWithorderComponent } from "./sample-fabric-booking-withorder/add-sample-fabric-booking-withorder/add-sample-fabric-booking-withorder.component";
import { EditSampleFabricBookingWithorderComponent } from "./sample-fabric-booking-withorder/edit-sample-fabric-booking-withorder/edit-sample-fabric-booking-withorder.component";
import { SampleFabricBookingWithorderComponent } from "./sample-fabric-booking-withorder/sample-fabric-booking-withorder.component";
import { AddSampleFabricBookingWoDtlsComponent } from "./sample-fabric-booking-withorder/sample-fabric-booking-wo-dtls/add-sample-fabric-booking-wo-dtls/add-sample-fabric-booking-wo-dtls.component";
import { EditSampleFabricBookingWoDtlsComponent } from "./sample-fabric-booking-withorder/sample-fabric-booking-wo-dtls/edit-sample-fabric-booking-wo-dtls/edit-sample-fabric-booking-wo-dtls.component";
import { AddMainFabricBookingV2Component } from "./main-fabric-booking-v2/add-main-fabric-booking-v2/add-main-fabric-booking-v2.component";
import { EditMainFabricBookingV2Component } from "./main-fabric-booking-v2/edit-main-fabric-booking-v2/edit-main-fabric-booking-v2.component";
import { MainFabricBookingV2Component } from "./main-fabric-booking-v2/main-fabric-booking-v2.component";
import { AddPartialFabricBookingComponent } from "./partial-fabric-booking/add-partial-fabric-booking/add-partial-fabric-booking.component";
import { EditPartialFabricBookingComponent } from "./partial-fabric-booking/edit-partial-fabric-booking/edit-partial-fabric-booking.component";
import { PartialFabricBookingComponent } from "./partial-fabric-booking/partial-fabric-booking.component";
import { AddShortFabricBookingComponent } from "./short-fabric-booking/add-short-fabric-booking/add-short-fabric-booking.component";
import { EditShortFabricBookingComponent } from "./short-fabric-booking/edit-short-fabric-booking/edit-short-fabric-booking.component";
import { ShortFabricBookingComponent } from "./short-fabric-booking/short-fabric-booking.component";
import { AddShortFabricBookingDetailsComponent } from "./short-fabric-booking/short-fabric-booking-details/add-short-fabric-booking-details/add-short-fabric-booking-details.component";
import { EditShortFabricBookingDetailsComponent } from "./short-fabric-booking/short-fabric-booking-details/edit-short-fabric-booking-details/edit-short-fabric-booking-details.component";
import { PageobjectcreatorComponent } from "../Shared/pageobjectcreator/pageobjectcreator.component";
import { MultiJobWiseServiceBookingKnittingComponent } from "./multi-job-wise-service-booking-knitting/multi-job-wise-service-booking-knitting.component";
import { AddMultiJobWiseServiceBookingKnittingComponent } from "./multi-job-wise-service-booking-knitting/add-multi-job-wise-service-booking-knitting/add-multi-job-wise-service-booking-knitting.component";
import { EditMultiJobWiseServiceBookingKnittingComponent } from "./multi-job-wise-service-booking-knitting/edit-multi-job-wise-service-booking-knitting/edit-multi-job-wise-service-booking-knitting.component";
import { MultiJobWSBKnittingDetailsComponent } from "./multi-job-wsbknitting-details/multi-job-wsbknitting-details.component";
import { AddMultiJobWSBKnittingDetailsComponent } from "./multi-job-wsbknitting-details/add-multi-job-wsbknitting-details/add-multi-job-wsbknitting-details.component";
import { EditMultiJobWSBKnittingDetailsComponent } from "./multi-job-wsbknitting-details/edit-multi-job-wsbknitting-details/edit-multi-job-wsbknitting-details.component";
import { DemoComponent } from "./demo/demo.component";
import { OfferingCostComponent } from './offering-cost/offering-cost.component';

const routes: Routes = [
  { path: "marchandizer", component: ShowInitialOrderComponent },
  { path: "SalesForecastEntry", component: SalesForecastEntryComponent },
  { path: "add-initial-order", component: AddInitialOrderComponent },
  { path: "edit-initial-order/:id", component: EditInitialOrderComponent },
  {
    path: "add-po-information/:orderAutoId",
    component: AddPoInformationComponent,
  },
  {
    path: "offering-cost",
    component: OfferingCostComponent,
  },
  {
    path: "edit-po-information/:poDetId",
    component: EditPoInformationComponent,
  },
  {
    path: "show-po-information/:orderAutoId",
    component: ShowPoInformationComponent,
  },

  {
    path: "input-pannel",
    component: InputPannelInfoComponent,
  },
  {
    path: "add-input-pannel-information",
    component: AddInputPannelInformationComponent,
  },
  {
    path: "show-input-pannel-information/:poId",
    component: ShowInputPannelInformationComponent,
  },
  {
    path: "D",
    component: DemoComponent,
  },
  {
    path: "show-precosting",
    component: ShowPreCoastingComponent,
  },
  {
    path: "add-fabric-cost",
    component: AddFabricCostComponent,
  },
  {
    path: "add-conversion-cost",
    component: AddConversionCostComponent,
  },
  {
    path: "show-company",
    component: ShowCompanyComponent,
  },
  {
    path: "show-location",
    component: ShowLocationComponent,
  },

  {
    path: "add-country",
    component: AddCountryComponent,
  },
  {
    path: "edit-country/:id",
    component: EditCountryComponent,
  },
  {
    path: "show-country",
    component: ShowCountryComponent,
  },
  {
    path: "show-marchandizer-info",
    component: ShowMerchandizerComponent,
  },
  {
    path: "show-teamleader-info",
    component: ShowTeamleaderComponent,
  },
  {
    path: "add-precosting",
    component: AddPreCoastingComponent,
  },
  {
    path: "add-cost/:poNoId",
    component: AddCostComponent,
  },
  {
    path: "add-precosting/:Id",
    component: AddPreCoastingComponent,
  },
  {
    path: "show-image",
    component: ShowImageComponent,
  },
  {
    path: "trim-cost/:poNoId",
    component: TrimsCostComponent,
  },

  {
    path: "wash-cost/:poNoId",
    component: GmtsWashComponent,
  },
  {
    path: "embel-cost/:poNoId",
    component: EmbelCostComponent,
  },
  {
    path: "edit-item-details/:key",
    component: EditItemDetailsComponent,
  },
  {
    path: "short-trims-booking",
    component: ShortTrimsBookingComponent,
  },
  {
    path: "add-short-trims-booking",
    component: AddShortTrimsBookingComponent,
  },
  {
    path: "edit-short-trims-booking/:id",
    component: EditShortTrimsBookingComponent,
  },
  {
    path: "multiple-jobWise-trimsBookingV2",
    component: MultipleJobWiseTrimsBookingV2Component,
  },
  {
    path: "add-multiple-jobWise-trimsBookingV2",
    component: AddMultipleJobWiseTrimsBookingV2Component,
  },
  {
    path: "edit-multiple-jobWise-trimsBookingV2/:id",
    component: EditMultipleJobWiseTrimsBookingV2Component,
  },
  {
    path: "multiple-jobWise-short-BookingV2",
    component: MultipleJobWiseShortTrimsBookingV2Component,
  },
  {
    path: "add-multiple-jobWise-short-BookingV2",
    component: AddMultipleJobWiseShortTrimsBookingV2Component,
  },
  {
    path: "edit-multiple-jobWise-short-BookingV2/:id",
    component: EditMultipleJobWiseShortTrimsBookingV2Component,
  },
  {
    path: "Multiple-Job-Wise-Embelisment-Work-Order",
    component: MultipleJobWiseEmbellishmentWorkOrderComponent,
  },
  {
    path: "add-Multiple-Job-Wise-Embelisment-Work-Order",
    component: AddMultipleJobWiseEmbellishmentWorkOrderComponent,
  },
  {
    path: "edit-Multiple-Job-Wise-Embelisment-Work-Order/:id",
    component: EditMultipleJobWiseEmbellishmentWorkOrderComponent,
  },
  {
    path: "service-booking-forAOP-withoutOrder",
    component: ServiceBookingForAOPWithoutOrderComponent,
  },
  {
    path: "add-service-booking-forAOP-withoutOrder",
    component: AddServiceBookingForAOPWithoutOrderComponent,
  },
  {
    path: "edit-service-booking-forAOP-withoutOrder/:id",
    component: EditServiceBookingForAOPWithoutOrderComponent,
  },
  {
    path: "show-serviceBooking-forAOP-withoutOrderDetails",
    component: ShowServiceBookingForAOPWithoutOrderDetailsComponent,
  },
  {
    path: "add-serviceBooking-forAOP-withoutOrderDetails",
    component: AddServiceBookingForAOPWithoutOrderDetailsComponent,
  },
  {
    path: "edit-serviceBooking-forAOP-withoutOrderDetails/:id",
    component: EditServiceBookingForAOPWithoutOrderDetailsComponent,
  },
  {
    path: "service-booking-for-dyeing",
    component: ServiceBookingForDyeingComponent,
  },
  {
    path: "add-service-booking-for-dyeing",
    component: AddServiceBookingForDyeingComponent,
  },
  {
    path: "edit-service-booking-for-dyeing/:id",
    component: EditServiceBookingForDyeingComponent,
  },
  {
    path: "service-booking-for-aopv2",
    component: ServiceBookingForAOPV2Component,
  },
  {
    path: "add-service-booking-for-aopv2",
    component: AddServiceBookingForAOPV2Component,
  },
  {
    path: "edit-service-booking-for-aopv2/:id",
    component: EditServiceBookingForAOPV2Component,
  },
  {
    path: "service-bookingFor-knitingAnd-dyeing",
    component: ServiceBookingForKnitingAndDyeingComponent,
  },
  {
    path: "add-service-bookingFor-knitingAnd-dyeing",
    component: AddServiceBookingForKnitingComponent,
  },
  {
    path: "edit-service-bookingFor-knitingAnd-dyeing/:id",
    component: EditServiceBookingForKnitingComponent,
  },
  {
    path: "service-bookingFor-knitingAnd-dyeing-details",
    component: ServiceBookingForKnitingAndDyeingDetailsComponent,
  },
  {
    path: "add-service-bookingFor-knitingAnd-dyeing-details",
    component: AddServiceBookingForKnitingDetailsComponent,
  },
  {
    path: "edit-service-bookingFor-knitingAnd-dyeing-details/:id",
    component: EditServiceBookingForKnitingDetailsComponent,
  },
  {
    path: "sample-requisition-withBooking",
    component: SampleRequisitionWithBookingComponent,
  },
  {
    path: "add-sample-requisition-withBooking",
    component: AddSampleRequisitionWithBookingComponent,
  },
  {
    path: "edit-sample-requisition-withBooking/:id",
    component: EditSampleRequisitionWithBookingComponent,
  },
  {
    path: "sample-fabric-booking",
    component: SampleFabricBookingComponent,
  },
  {
    path: "add-sample-fabric-booking",
    component: AddSampleFabricBookingComponent,
  },
  {
    path: "edit-sample-fabric-booking/:id",
    component: EditSampleFabricBookingComponent,
  },
  {
    path: "sample-requisition-required-details",
    component: SampleRequisitionRequiredDetailsComponent,
  },

  {
    path: "demo",
    component: DepcAmortComponent,
  },
  {
    path: "comml-cost/:poNoId",
    component: CommlCostComponent,
  },
  {
    path: "commission-cost/:poNoId",
    component: CommissionComponent,
  },

  {
    path: "FabricServiceBooking",
    component: FabricServiceBookingComponent,
  },
  {
    path: "add-FabricServiceBooking",
    component: AddFabricServiceBookingComponent,
  },
  {
    path: "edit-FabricServiceBooking/:id",
    component: EditFabricServiceBookingComponent,
  },

  {
    path: "ServiceBookingForKnitting",
    component: ServiceBookingForKnittingComponent,
  },
  {
    path: "add-ServiceBookingForKnitting",
    component: AddServiceBookingForKnittingComponent,
  },
  {
    path: "edit-ServiceBookingForKnitting/:id",
    component: EditServiceBookingForKnittingComponent,
  },

  {
    path: "ServiceBookingForKnittingDetail",
    component: ServiceBookingForKnitingDetailComponent,
  },
  {
    path: "add-ServiceBookingForKnittingDetail",
    component: AddSBForKnitingDetailComponent,
  },
  {
    path: "edit-ServiceBookingForKnittingDetail/:id",
    component: EditSBForKnitingDetailComponent,
  },

  {
    path: "EmbellishmentWorkOrderV2",
    component: EmbellishmentWorkOrderV2Component,
  },
  {
    path: "add-EmbellishmentWorkOrderV2",
    component: AddEmbellishmentWorkOrderV2Component,
  },
  {
    path: "edit-EmbellishmentWorkOrderV2/:id",
    component: EditEmbellishmentWorkOrderV2Component,
  },

  {
    path: "EmbellishmentWorkOrderV2Details",
    component: EmbellishmentWorkOrderV2Details,
  },
  {
    path: "add-EmbellishmentWorkOrderV2Details",
    component: AddEmbellishmentWorkOrderV2DetailsComponent,
  },
  {
    path: "edit-EmbellishmentWorkOrderV2Details/:id",
    component: EditEmbellishmentWorkOrderV2DetailsComponent,
  },

  {
    path: "sample-fabric-booking-without-order",
    component: SampleFabricBookingWithoutorderMastersComponent,
  },
  {
    path: "add-sample-fabric-booking-without-order",
    component: AddSampleFabricBookingWithoutorderMastersComponent,
  },
  {
    path: "edit-sample-fabric-booking-without-order/:id",
    component: EditSampleFabricBookingWithoutorderMastersComponent,
  },
  {
    path: "add-sample-fabric-booking-without-order-details",
    component: AddSampleFabricBookingWithoutorderDetailsComponent,
  },
  {
    path: "edit-sample-fabric-booking-without-order-details/:id",
    component: EditSampleFabricBookingWithoutorderDetailsComponent,
  },
  {
    path: "add-sample-fabric-booking-withorder",
    component: AddSampleFabricBookingWithorderComponent,
  },
  {
    path: "edit-sample-fabric-booking-withorder/:id",
    component: EditSampleFabricBookingWithorderComponent,
  },
  {
    path: "sample-fabric-booking-withorder",
    component: SampleFabricBookingWithorderComponent,
  },
  {
    path: "add-sample-fabric-booking-Details",
    component: AddSampleFabricBookingWoDtlsComponent,
  },
  {
    path: "edit-sample-fabric-booking-Details/:id",
    component: EditSampleFabricBookingWoDtlsComponent,
  },
  {
    path: "add-main-fabric-bookingV2",
    component: AddMainFabricBookingV2Component,
  },
  {
    path: "edit-main-fabric-bookingV2/:id",
    component: EditMainFabricBookingV2Component,
  },
  {
    path: "main-fabric-bookingV2",
    component: MainFabricBookingV2Component,
  },
  {
    path: "add-partial-fabric-booking",
    component: AddPartialFabricBookingComponent,
  },
  {
    path: "edit-partial-fabric-booking/:id",
    component: EditPartialFabricBookingComponent,
  },
  {
    path: "partial-fabric-booking",
    component: PartialFabricBookingComponent,
  },
  {
    path: "add-short-fabric-booking",
    component: AddShortFabricBookingComponent,
  },
  {
    path: "edit-short-fabric-booking/:id",
    component: EditShortFabricBookingComponent,
  },
  {
    path: "short-fabric-booking",
    component: ShortFabricBookingComponent,
  },
  {
    path: "add-short-fabric-booking-Details",
    component: AddShortFabricBookingDetailsComponent,
  },
  {
    path: "edit-short-fabric-booking-Details/:id",
    component: EditShortFabricBookingDetailsComponent,
  },
  {
    path: "MultiJobWiseServiceBookingKnitting",
    component: MultiJobWiseServiceBookingKnittingComponent,
  },
  {
    path: "add-MultiJobWiseServiceBookingKnitting",
    component: AddMultiJobWiseServiceBookingKnittingComponent,
  },
  {
    path: "edit-MultiJobWiseServiceBookingKnitting/:id",
    component: EditMultiJobWiseServiceBookingKnittingComponent,
  },
  {
    path: "MultiJobWSBKnittingDetails",
    component: MultiJobWSBKnittingDetailsComponent,
  },
  {
    path: "add-MultiJobWSBKnittingDetails",
    component: AddMultiJobWSBKnittingDetailsComponent,
  },
  {
    path: "edit-MultiJobWSBKnittingDetails/:id",
    component: EditMultiJobWSBKnittingDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchandizerRoutingModule {}
