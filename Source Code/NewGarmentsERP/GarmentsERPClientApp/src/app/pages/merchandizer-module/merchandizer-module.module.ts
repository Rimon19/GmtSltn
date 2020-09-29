
import { CommonModule } from '@angular/common';
import{merchandizer} from './merchandizer';
import {MatTableModule,MatIconModule, MatButtonModule,
   MatDialogModule, MatSnackBarModule, MatSelectModule, MatNativeDateModule} from '@angular/material';
   import {HttpClientModule} from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {
  
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbInputModule, 
  NbTreeGridModule ,
  NbCheckboxModule,
  NbDialogModule,
  NbPopoverModule,
  NbTooltipModule,
  NbWindowModule,
  NbDatepickerModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchInitialOrderComponent } from './fetch-initial-order/fetch-initial-order.component';
import { AddInitialOrderComponent } from './fetch-initial-order/add-initial-order/add-initial-order.component';
import { ShowInitialOrderComponent } from './fetch-initial-order/show-initial-order/show-initial-order.component';
import { EditInitialOrderComponent } from './fetch-initial-order/edit-initial-order/edit-initial-order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ModalOverlaysRoutingModule } from '../modal-overlays/modal-overlays-routing.module';
import { CountryComponent } from './country/country.component';
import { ShowCountryComponent } from './country/show-country/show-country.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { DeleteCountryComponent } from './country/delete-country/delete-country.component';
import { ImageComponent } from './image/image.component';
import { AddImageComponent } from './image/add-image/add-image.component';
import { ShowImageComponent } from './image/show-image/show-image.component';
import { DeleteImageComponent } from './image/delete-image/delete-image.component';
import { EditImageComponent } from './image/edit-image/edit-image.component';
import { TeamleaderComponent } from './teamleader/teamleader.component';
import { AddTeamleaderComponent } from './teamleader/add-teamleader/add-teamleader.component';
import { ShowTeamleaderComponent } from './teamleader/show-teamleader/show-teamleader.component';
import { DeleteTeamleaderComponent } from './teamleader/delete-teamleader/delete-teamleader.component';
import { EditTeamleaderComponent } from './teamleader/edit-teamleader/edit-teamleader.component';
import { MerchandizerComponent } from './merchandizer/merchandizer.component';
import { AddMerchandizerComponent } from './merchandizer/add-merchandizer/add-merchandizer.component';
import { ShowMerchandizerComponent } from './merchandizer/show-merchandizer/show-merchandizer.component';
import { EditMerchandizerComponent } from './merchandizer/edit-merchandizer/edit-merchandizer.component';
import { DeleteMerchandizerComponent } from './merchandizer/delete-merchandizer/delete-merchandizer.component';

import { LocationComponent } from './location/location.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { ShowLocationComponent } from './location/show-location/show-location.component';
import { DeleteLocationComponent } from './location/delete-location/delete-location.component';
import { EditLocationComponent } from './location/edit-location/edit-location.component';
import { CompanyComponent } from './company/company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { ShowCompanyComponent } from './company/show-company/show-company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { DeleteCompanyComponent } from './company/delete-company/delete-company.component';
import { PreCoastingComponent } from './pre-coasting/pre-coasting.component';
import { ShowPreCoastingComponent } from './pre-coasting/show-pre-coasting/show-pre-coasting.component';
import { AddPreCoastingComponent } from './pre-coasting/add-pre-coasting/add-pre-coasting.component';
import { EditPreCoastingComponent } from './pre-coasting/edit-pre-coasting/edit-pre-coasting.component';
import { DeletePreCoastingComponent } from './pre-coasting/delete-pre-coasting/delete-pre-coasting.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DataTable, DataTableModule } from 'angular5-data-table';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialogService } from '../../@core/mock/mat-dialog.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AddFabricCostComponent } from './add-fabric-cost/add-fabric-cost.component';
import { AddConversionCostComponent } from './add-conversion-cost/add-conversion-cost.component';
import { ItemDetailsComponent } from './fetch-initial-order/item-details/item-details.component';
import { PoInformationComponent } from './po-information/po-information.component';
import { AddPoInformationComponent } from './po-information/add-po-information/add-po-information.component';
import { EditPoInformationComponent } from './po-information/edit-po-information/edit-po-information.component';
import { ShowPoInformationComponent } from './po-information/show-po-information/show-po-information.component';

import { InputPannelInformationComponent } from './input-pannel-information/input-pannel-information.component';
import { AddInputPannelInformationComponent } from './input-pannel-information/add-input-pannel-information/add-input-pannel-information.component';
import { ShowInputPannelInformationComponent } from './input-pannel-information/show-input-pannel-information/show-input-pannel-information.component';
import { EditInputPannelInformationComponent } from './input-pannel-information/edit-input-pannel-information/edit-input-pannel-information.component';
import { InputPannelInfoComponent } from './fetch-initial-order/input-pannel-info/input-pannel-info.component';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AddCostComponent } from './add-cost/add-cost.component';

import { AddConsumptionComponent } from './pre-coasting/add-consumption/add-consumption.component';
import { TrimsCostComponent } from './pre-coasting/trims-cost/trims-cost.component';
import { EmbelCostComponent } from './pre-coasting/embel-cost/embel-cost.component';
import { GmtsWashComponent } from './pre-coasting/gmts-wash/gmts-wash.component';
import { EditItemDetailsComponent } from './fetch-initial-order/edit-item-details/edit-item-details.component';
import { AddConsumptionForTrimCostComponent } from './pre-coasting/add-consumption-for-trim-cost/add-consumption-for-trim-cost.component';
import { AddConsumptionForGmtsWashCostComponent } from './pre-coasting/add-consumption-for-gmts-wash-cost/add-consumption-for-gmts-wash-cost.component';
import { AddConsumptionForEmbelCostComponent } from './pre-coasting/add-consumption-for-embel-cost/add-consumption-for-embel-cost.component';
import { CommlCostComponent } from './pre-coasting/comml-cost/comml-cost.component';
import { DepcAmortComponent } from './pre-coasting/depc-amort/depc-amort.component';
import { CommissionComponent } from './pre-coasting/commission/commission.component';
import { NgKnifeModule } from 'ng-knife';
import { FabricDesPreCostComponent } from './fabric-des-pre-cost/fabric-des-pre-cost.component';
import { AddFabricDesPreCostComponent } from './fabric-des-pre-cost/add-fabric-des-pre-cost/add-fabric-des-pre-cost.component';
import { EditFabricDesPreCostComponent } from './fabric-des-pre-cost/edit-fabric-des-pre-cost/edit-fabric-des-pre-cost.component';
import { QuotationInqueryComponent } from './quotation-inquery/quotation-inquery.component';
import { AddQuotationInqueryComponent } from './quotation-inquery/add-quotation-inquery/add-quotation-inquery.component';
import { EditQuotationInqueryComponent } from './quotation-inquery/edit-quotation-inquery/edit-quotation-inquery.component';
import { FabricationDetailsComponent } from './quotation-inquery/fabrication-details/fabrication-details.component';
import { OrderOrJobSelectionFormComponent } from './order-or-job-selection-form/order-or-job-selection-form.component';
import { SampleFabricBookingWithoutorderDetailsComponent } from './sample-fabric-booking-withoutorder-details/sample-fabric-booking-withoutorder-details.component';
import { SampleFabricBookingWithoutorderMastersComponent } from './sample-fabric-booking-withoutorder-masters/sample-fabric-booking-withoutorder-masters.component';
import { AddSampleFabricBookingWithoutorderDetailsComponent } from './sample-fabric-booking-withoutorder-details/add-sample-fabric-booking-withoutorder-details/add-sample-fabric-booking-withoutorder-details.component';
import { EditSampleFabricBookingWithoutorderDetailsComponent } from './sample-fabric-booking-withoutorder-details/edit-sample-fabric-booking-withoutorder-details/edit-sample-fabric-booking-withoutorder-details.component';
import { AddSampleFabricBookingWithoutorderMastersComponent } from './sample-fabric-booking-withoutorder-masters/add-sample-fabric-booking-withoutorder-masters/add-sample-fabric-booking-withoutorder-masters.component';
import { EditSampleFabricBookingWithoutorderMastersComponent } from './sample-fabric-booking-withoutorder-masters/edit-sample-fabric-booking-withoutorder-masters/edit-sample-fabric-booking-withoutorder-masters.component';
import { ShortTrimsBookingComponent } from './short-trims-booking/short-trims-booking.component';
import { AddShortTrimsBookingComponent } from './short-trims-booking/add-short-trims-booking/add-short-trims-booking.component';
import { EditShortTrimsBookingComponent } from './short-trims-booking/edit-short-trims-booking/edit-short-trims-booking.component';
import { SalesForecastEntryComponent } from './sales-forecast-entry/sales-forecast-entry.component';
import { SampleDevelopmentOrderDetailsComponent } from './sample-development-order-details/sample-development-order-details.component';

import { EditSampleDevelopmentOrderDetailsComponent } from './sample-development-order-details/edit-sample-development-order-details/edit-sample-development-order-details.component';
import { AddSampleDevelopmentOrderDetailsComponent } from './sample-development-order-details/add-sample-development-order-details/add-sample-development-order-details.component';
import { MultipleJobWiseTrimsBookingV2Component } from './multiple-job-wise-trims-booking-v2/multiple-job-wise-trims-booking-v2.component';
import { AddMultipleJobWiseTrimsBookingV2Component } from './multiple-job-wise-trims-booking-v2/add-multiple-job-wise-trims-booking-v2/add-multiple-job-wise-trims-booking-v2.component';
import { EditMultipleJobWiseTrimsBookingV2Component } from './multiple-job-wise-trims-booking-v2/edit-multiple-job-wise-trims-booking-v2/edit-multiple-job-wise-trims-booking-v2.component';
import { SizeDitsComponent } from './sample-development-order-details/add-sample-development-order-details/size-dits/size-dits.component';
import { AddSizeDitsComponent } from './sample-development-order-details/add-sample-development-order-details/size-dits/add-size-dits/add-size-dits.component';
import { EditSizeDitsComponent } from './sample-development-order-details/add-sample-development-order-details/size-dits/edit-size-dits/edit-size-dits.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MultipleJobWiseShortTrimsBookingV2Component } from './multiple-job-wise-short-trims-booking-v2/multiple-job-wise-short-trims-booking-v2.component';
import { AddMultipleJobWiseShortTrimsBookingV2Component } from './multiple-job-wise-short-trims-booking-v2/add-multiple-job-wise-short-trims-booking-v2/add-multiple-job-wise-short-trims-booking-v2.component';
import { EditMultipleJobWiseShortTrimsBookingV2Component } from './multiple-job-wise-short-trims-booking-v2/edit-multiple-job-wise-short-trims-booking-v2/edit-multiple-job-wise-short-trims-booking-v2.component';
import { MultipleJobWiseEmbellishmentWorkOrderComponent } from './multiple-job-wise-embellishment-work-order/multiple-job-wise-embellishment-work-order.component';
import { AddMultipleJobWiseEmbellishmentWorkOrderComponent } from './multiple-job-wise-embellishment-work-order/add-multiple-job-wise-embellishment-work-order/add-multiple-job-wise-embellishment-work-order.component';
import { EditMultipleJobWiseEmbellishmentWorkOrderComponent } from './multiple-job-wise-embellishment-work-order/edit-multiple-job-wise-embellishment-work-order/edit-multiple-job-wise-embellishment-work-order.component';
import { YarnDyeingWorkOrderComponent } from './yarn-dyeing-work-order/yarn-dyeing-work-order.component';

import { AddServiceBookingForAOPWithoutOrderComponent } from './service-booking-for-aopwithout-order/add-service-booking-for-aopwithout-order/add-service-booking-for-aopwithout-order.component';
import { EditServiceBookingForAOPWithoutOrderComponent } from './service-booking-for-aopwithout-order/edit-service-booking-for-aopwithout-order/edit-service-booking-for-aopwithout-order.component';
import { ServiceBookingForAOPWithoutOrderComponent } from './service-booking-for-aopwithout-order/service-booking-for-aopwithout-order.component';
import { ShowYarnDyeingWorkOrderComponent } from './yarn-dyeing-work-order/show-yarn-dyeing-work-order/show-yarn-dyeing-work-order.component';
import { YarnDyeingWODetailsComponent } from './yarn-dyeing-work-order/yarn-dyeing-wodetails/yarn-dyeing-wodetails.component';
import { ShowYarnDyeingWODetailsComponent } from './yarn-dyeing-work-order/yarn-dyeing-wodetails/show-yarn-dyeing-wodetails/show-yarn-dyeing-wodetails.component';
import { MainFabricBookingV2Component } from './main-fabric-booking-v2/main-fabric-booking-v2.component';
import { AddMainFabricBookingV2Component } from './main-fabric-booking-v2/add-main-fabric-booking-v2/add-main-fabric-booking-v2.component';
import { EditMainFabricBookingV2Component } from './main-fabric-booking-v2/edit-main-fabric-booking-v2/edit-main-fabric-booking-v2.component';
import { PartialFabricBookingComponent } from './partial-fabric-booking/partial-fabric-booking.component';
import { AddPartialFabricBookingComponent } from './partial-fabric-booking/add-partial-fabric-booking/add-partial-fabric-booking.component';
import { EditPartialFabricBookingComponent } from './partial-fabric-booking/edit-partial-fabric-booking/edit-partial-fabric-booking.component';
import { PricequotationComponent } from './pricequotation/pricequotation.component';
import { AddpricequotationComponent } from './pricequotation/addpricequotation/addpricequotation.component';
import { EditpricequotationComponent } from './pricequotation/editpricequotation/editpricequotation.component';
import { SampleFabricBookingWithorderComponent } from './sample-fabric-booking-withorder/sample-fabric-booking-withorder.component';
import { AddSampleFabricBookingWithorderComponent } from './sample-fabric-booking-withorder/add-sample-fabric-booking-withorder/add-sample-fabric-booking-withorder.component';
import { EditSampleFabricBookingWithorderComponent } from './sample-fabric-booking-withorder/edit-sample-fabric-booking-withorder/edit-sample-fabric-booking-withorder.component';
import { YarnDyeingWOWithoutOrderMasterComponent } from './yarn-dyeing-wowithout-order-master/yarn-dyeing-wowithout-order-master.component';
import { AddYarnDyeingWOWithoutOrderMasterComponent } from './yarn-dyeing-wowithout-order-master/add-yarn-dyeing-wowithout-order-master/add-yarn-dyeing-wowithout-order-master.component';
import { EditYarnDyeingWOWithoutOrderMasterComponent } from './yarn-dyeing-wowithout-order-master/edit-yarn-dyeing-wowithout-order-master/edit-yarn-dyeing-wowithout-order-master.component';
import { YarnDyeingWOWithoutOrderDetailsComponent } from './yarn-dyeing-wowithout-order-details/yarn-dyeing-wowithout-order-details.component';
import { AddYarnDyeingWOWithoutOrderDetailsComponent } from './yarn-dyeing-wowithout-order-details/add-yarn-dyeing-wowithout-order-details/add-yarn-dyeing-wowithout-order-details.component';
import { EditYarnDyeingWOWithoutOrderDetailsComponent } from './yarn-dyeing-wowithout-order-details/edit-yarn-dyeing-wowithout-order-details/edit-yarn-dyeing-wowithout-order-details.component';
import { ServiceBookingForDyeingComponent } from './service-booking-for-dyeing/service-booking-for-dyeing.component';
import { AddServiceBookingForDyeingComponent } from './service-booking-for-dyeing/add-service-booking-for-dyeing/add-service-booking-for-dyeing.component';
import { EditServiceBookingForDyeingComponent } from './service-booking-for-dyeing/edit-service-booking-for-dyeing/edit-service-booking-for-dyeing.component';
import { ServiceBookingForAOPV2Component } from './service-booking-for-aopv2/service-booking-for-aopv2.component';
import { AddServiceBookingForAOPV2Component } from './service-booking-for-aopv2/add-service-booking-for-aopv2/add-service-booking-for-aopv2.component';
import { EditServiceBookingForAOPV2Component } from './service-booking-for-aopv2/edit-service-booking-for-aopv2/edit-service-booking-for-aopv2.component';
import { ShowServiceBookingForAOPWithoutOrderDetailsComponent } from './ServiceBookingForAOPWithoutOrderDetails/show-service-booking-for-aopwithout-order-details/show-service-booking-for-aopwithout-order-details.component';
import { AddServiceBookingForAOPWithoutOrderDetailsComponent } from './ServiceBookingForAOPWithoutOrderDetails/add-service-booking-for-aopwithout-order-details/add-service-booking-for-aopwithout-order-details.component';
import { EditServiceBookingForAOPWithoutOrderDetailsComponent } from './ServiceBookingForAOPWithoutOrderDetails/edit-service-booking-for-aopwithout-order-details/edit-service-booking-for-aopwithout-order-details.component';
import { AddServiceBookingForKnitingComponent } from './service-booking-for-kniting-and-dyeing/add-service-booking-for-kniting/add-service-booking-for-kniting.component';
import { EditServiceBookingForKnitingComponent } from './service-booking-for-kniting-and-dyeing/edit-service-booking-for-kniting/edit-service-booking-for-kniting.component';
import { EditServiceBookingForKnitingDetailsComponent } from './service-booking-for-kniting-and-dyeing-details/edit-service-booking-for-kniting-details/edit-service-booking-for-kniting-details.component';
import { AddServiceBookingForKnitingDetailsComponent } from './service-booking-for-kniting-and-dyeing-details/add-service-booking-for-kniting-details/add-service-booking-for-kniting-details.component';
import { ShortFabricBookingComponent } from './short-fabric-booking/short-fabric-booking.component';
import { AddShortFabricBookingComponent } from './short-fabric-booking/add-short-fabric-booking/add-short-fabric-booking.component';
import { EditShortFabricBookingComponent } from './short-fabric-booking/edit-short-fabric-booking/edit-short-fabric-booking.component';
import { ServiceBookingForKnitingAndDyeingComponent } from './service-booking-for-kniting-and-dyeing/service-booking-for-kniting-and-dyeing.component';
import { ServiceBookingForKnitingAndDyeingDetailsComponent } from './service-booking-for-kniting-and-dyeing-details/service-booking-for-kniting-and-dyeing-details.component';
import { FabricServiceBookingComponent } from './fabric-service-booking/fabric-service-booking.component';
import { AddFabricServiceBookingComponent } from './fabric-service-booking/add-fabric-service-booking/add-fabric-service-booking.component';
import { EditFabricServiceBookingComponent } from './fabric-service-booking/edit-fabric-service-booking/edit-fabric-service-booking.component';

import { ShortFabricBookingDetailsComponent } from './short-fabric-booking/short-fabric-booking-details/short-fabric-booking-details.component';
import { AddShortFabricBookingDetailsComponent } from './short-fabric-booking/short-fabric-booking-details/add-short-fabric-booking-details/add-short-fabric-booking-details.component';
import { EditShortFabricBookingDetailsComponent } from './short-fabric-booking/short-fabric-booking-details/edit-short-fabric-booking-details/edit-short-fabric-booking-details.component';
import { SampleRequisitionWithBookingComponent } from './sample-requisition-with-booking/sample-requisition-with-booking.component';
import { AddSampleRequisitionWithBookingComponent } from './sample-requisition-with-booking/add-sample-requisition-with-booking/add-sample-requisition-with-booking.component';
import { EditSampleRequisitionWithBookingComponent } from './sample-requisition-with-booking/edit-sample-requisition-with-booking/edit-sample-requisition-with-booking.component';
import { SampleFabricBookingComponent } from './sample-fabric-booking/sample-fabric-booking.component';
import { AddSampleFabricBookingComponent } from './sample-fabric-booking/add-sample-fabric-booking/add-sample-fabric-booking.component';
import { EditSampleFabricBookingComponent } from './sample-fabric-booking/edit-sample-fabric-booking/edit-sample-fabric-booking.component';
import { SampleFabricBookingWoDtlsComponent } from './sample-fabric-booking-withorder/sample-fabric-booking-wo-dtls/sample-fabric-booking-wo-dtls.component';
import { AddSampleFabricBookingWoDtlsComponent } from './sample-fabric-booking-withorder/sample-fabric-booking-wo-dtls/add-sample-fabric-booking-wo-dtls/add-sample-fabric-booking-wo-dtls.component';
import { EditSampleFabricBookingWoDtlsComponent } from './sample-fabric-booking-withorder/sample-fabric-booking-wo-dtls/edit-sample-fabric-booking-wo-dtls/edit-sample-fabric-booking-wo-dtls.component';
import { SampleRequisitionRequiredDetailsComponent } from './sample-requisition-required-details/sample-requisition-required-details.component';
import { ServiceBookingForKnittingComponent } from './service-booking-for-knitting/service-booking-for-knitting.component';
import { AddServiceBookingForKnittingComponent } from './service-booking-for-knitting/add-service-booking-for-knitting/add-service-booking-for-knitting.component';
import { EditServiceBookingForKnittingComponent } from './service-booking-for-knitting/edit-service-booking-for-knitting/edit-service-booking-for-knitting.component';
import { YarnServiceWorkOrderComponent } from './yarn-service-work-order/yarn-service-work-order.component';
import { AddYarnServiceWorkOrderComponent } from './yarn-service-work-order/add-yarn-service-work-order/add-yarn-service-work-order.component';
import { EditYarnServiceWorkOrderComponent } from './yarn-service-work-order/edit-yarn-service-work-order/edit-yarn-service-work-order.component';
import { YarnServiceWorkOrderDetailsComponent } from './yarn-service-work-order-details/yarn-service-work-order-details.component';
import { AddYarnServiceWorkOrderDetailsComponent } from './yarn-service-work-order-details/add-yarn-service-work-order-details/add-yarn-service-work-order-details.component';
import { EditYarnServiceWorkOrderDetailsComponent } from './yarn-service-work-order-details/edit-yarn-service-work-order-details/edit-yarn-service-work-order-details.component';
import { EmbellishmentWorkOrderV2Component } from './embellishment-work-order-v2/embellishment-work-order-v2.component';
import { AddEmbellishmentWorkOrderV2Component } from './embellishment-work-order-v2/add-embellishment-work-order-v2/add-embellishment-work-order-v2.component';
import { EditEmbellishmentWorkOrderV2Component } from './embellishment-work-order-v2/edit-embellishment-work-order-v2/edit-embellishment-work-order-v2.component';
import { EmbellishmentWorkOrderV2DetailsComponent } from './embellishment-work-order-v2-details/embellishment-work-order-v2-details.component';
import { AddEmbellishmentWorkOrderV2DetailsComponent } from './embellishment-work-order-v2-details/add-embellishment-work-order-v2-details/add-embellishment-work-order-v2-details.component';
import { EditEmbellishmentWorkOrderV2DetailsComponent } from './embellishment-work-order-v2-details/edit-embellishment-work-order-v2-details/edit-embellishment-work-order-v2-details.component';
import { MultiJobWiseServiceBookingKnittingComponent } from './multi-job-wise-service-booking-knitting/multi-job-wise-service-booking-knitting.component';
import { AddMultiJobWiseServiceBookingKnittingComponent } from './multi-job-wise-service-booking-knitting/add-multi-job-wise-service-booking-knitting/add-multi-job-wise-service-booking-knitting.component';
import { EditMultiJobWiseServiceBookingKnittingComponent } from './multi-job-wise-service-booking-knitting/edit-multi-job-wise-service-booking-knitting/edit-multi-job-wise-service-booking-knitting.component';
import { MultiJobWSBKnittingDetailsComponent } from './multi-job-wsbknitting-details/multi-job-wsbknitting-details.component';
import { AddMultiJobWSBKnittingDetailsComponent } from './multi-job-wsbknitting-details/add-multi-job-wsbknitting-details/add-multi-job-wsbknitting-details.component';
import { EditMultiJobWSBKnittingDetailsComponent } from './multi-job-wsbknitting-details/edit-multi-job-wsbknitting-details/edit-multi-job-wsbknitting-details.component';
import { ServiceBookingForKnitingDetailComponent } from './service-booking-for-kniting-detail/service-booking-for-kniting-detail.component';
import { AddSBForKnitingDetailComponent } from './service-booking-for-kniting-detail/add-sbfor-kniting-detail/add-sbfor-kniting-detail.component';
import { EditSBForKnitingDetailComponent } from './service-booking-for-kniting-detail/edit-sbfor-kniting-detail/edit-sbfor-kniting-detail.component';
import { MerchandizerRoutingModule } from './merchandizer-routing.module';
import { BookingNoSelectionFormComponent } from './booking-no-selection-form/booking-no-selection-form.component';

import { FabricDescriptionComponent } from './fabric-description/fabric-description.component';
import { DemoComponent } from './demo/demo.component';
import { DropdownValueService } from '../../@core/mock/shared/dropdown-value.service';
import { StripeColorComponent } from './stripe-color/stripe-color.component';
import { StripeColorDetailsComponent } from './stripe-color-details/stripe-color-details.component';
import { OfferingCostComponent } from './offering-cost/offering-cost.component';
//import { SizeInfoComponent } from './size-info/size-info.component';

@NgModule({
  declarations: [
    merchandizer,
    FetchInitialOrderComponent,
    AddInitialOrderComponent,
    ShowInitialOrderComponent,
    EditInitialOrderComponent,
    CountryComponent,
    ShowCountryComponent,
    AddCountryComponent,
    EditCountryComponent,
    DeleteCountryComponent,
    ImageComponent,
    AddImageComponent,
    ShowImageComponent,
    DeleteImageComponent,
    EditImageComponent,
    TeamleaderComponent,
    AddTeamleaderComponent,
    ShowTeamleaderComponent,
    DeleteTeamleaderComponent,
    EditTeamleaderComponent,
    MerchandizerComponent,
    AddMerchandizerComponent,
    ShowMerchandizerComponent,
    EditMerchandizerComponent,
    DeleteMerchandizerComponent,
    LocationComponent,
    AddLocationComponent,
    ShowLocationComponent,
    DeleteLocationComponent,
    EditLocationComponent,
    CompanyComponent,
    AddCompanyComponent,
    ShowCompanyComponent,
    EditCompanyComponent,
    DeleteCompanyComponent,
    PreCoastingComponent,
    ShowPreCoastingComponent,
    AddPreCoastingComponent,
    EditPreCoastingComponent,
    DeletePreCoastingComponent,
    MatConfirmDialogComponent,
    AddFabricCostComponent,
    AddConversionCostComponent,
    ItemDetailsComponent,
    PoInformationComponent,
    AddPoInformationComponent,
    EditPoInformationComponent,
    ShowPoInformationComponent,
    InputPannelInformationComponent,
    AddInputPannelInformationComponent,
    ShowInputPannelInformationComponent,
    EditInputPannelInformationComponent,
    ShowPoInformationComponent,
    ItemDetailsComponent,
    InputPannelInfoComponent,
    AddCostComponent,
  
    AddConsumptionComponent,
    TrimsCostComponent,
    EmbelCostComponent,
    GmtsWashComponent,
    EditItemDetailsComponent,
    AddConsumptionForTrimCostComponent,
    AddConsumptionForGmtsWashCostComponent,
    AddConsumptionForEmbelCostComponent,
    CommlCostComponent,
    DepcAmortComponent,
    CommissionComponent,
    FabricDesPreCostComponent,
    AddFabricDesPreCostComponent,
    EditFabricDesPreCostComponent,
    QuotationInqueryComponent,
    AddQuotationInqueryComponent,
    EditQuotationInqueryComponent,
    FabricationDetailsComponent,
    OrderOrJobSelectionFormComponent,
    ShortTrimsBookingComponent,
    AddShortTrimsBookingComponent,
    EditShortTrimsBookingComponent,
    SampleFabricBookingWithoutorderDetailsComponent,
    SampleFabricBookingWithoutorderMastersComponent,
    AddSampleFabricBookingWithoutorderDetailsComponent,
    EditSampleFabricBookingWithoutorderDetailsComponent,
    AddSampleFabricBookingWithoutorderMastersComponent,
    EditSampleFabricBookingWithoutorderMastersComponent,
    SalesForecastEntryComponent,
    SampleDevelopmentOrderDetailsComponent,
    AddSampleDevelopmentOrderDetailsComponent,
    EditSampleDevelopmentOrderDetailsComponent,
    MultipleJobWiseTrimsBookingV2Component,
    AddMultipleJobWiseTrimsBookingV2Component,
    EditMultipleJobWiseTrimsBookingV2Component,
    SizeDitsComponent,
    AddSizeDitsComponent,
    EditSizeDitsComponent,
    MultipleJobWiseShortTrimsBookingV2Component,
    AddMultipleJobWiseShortTrimsBookingV2Component,
    EditMultipleJobWiseShortTrimsBookingV2Component,
    MultipleJobWiseEmbellishmentWorkOrderComponent,
    AddMultipleJobWiseEmbellishmentWorkOrderComponent,
    EditMultipleJobWiseEmbellishmentWorkOrderComponent,
    YarnDyeingWorkOrderComponent,
    ServiceBookingForAOPWithoutOrderComponent,
    AddServiceBookingForAOPWithoutOrderComponent,
    EditServiceBookingForAOPWithoutOrderComponent,
    ShowYarnDyeingWorkOrderComponent,
    YarnDyeingWODetailsComponent,
    ShowYarnDyeingWODetailsComponent,
    MainFabricBookingV2Component,
    AddMainFabricBookingV2Component,
    EditMainFabricBookingV2Component,
    PartialFabricBookingComponent,
    AddPartialFabricBookingComponent,
    EditPartialFabricBookingComponent,
    PricequotationComponent,
    AddpricequotationComponent,
    EditpricequotationComponent,
    SampleFabricBookingWithorderComponent,
    AddSampleFabricBookingWithorderComponent,
    EditSampleFabricBookingWithorderComponent,
    YarnDyeingWOWithoutOrderMasterComponent,
    AddYarnDyeingWOWithoutOrderMasterComponent,
    EditYarnDyeingWOWithoutOrderMasterComponent,
    YarnDyeingWOWithoutOrderDetailsComponent,
    AddYarnDyeingWOWithoutOrderDetailsComponent,
    EditYarnDyeingWOWithoutOrderDetailsComponent,
    ShowServiceBookingForAOPWithoutOrderDetailsComponent,
    AddServiceBookingForAOPWithoutOrderDetailsComponent,
    EditServiceBookingForAOPWithoutOrderDetailsComponent,
    ServiceBookingForDyeingComponent,
    AddServiceBookingForDyeingComponent,
    EditServiceBookingForDyeingComponent,
    ServiceBookingForAOPV2Component,
    AddServiceBookingForAOPV2Component,
    EditServiceBookingForAOPV2Component,
    AddServiceBookingForKnitingComponent,
    EditServiceBookingForKnitingComponent,
    EditServiceBookingForKnitingDetailsComponent,
    AddServiceBookingForKnitingDetailsComponent,
    ShortFabricBookingComponent,
    AddShortFabricBookingComponent,
    EditShortFabricBookingComponent,
    ShortFabricBookingDetailsComponent,
    AddShortFabricBookingDetailsComponent,
    EditShortFabricBookingDetailsComponent,
    AddServiceBookingForKnitingDetailsComponent,
    ServiceBookingForKnitingAndDyeingComponent,
    ServiceBookingForKnitingAndDyeingDetailsComponent,
    ServiceBookingForKnitingAndDyeingDetailsComponent,
    SampleRequisitionWithBookingComponent,
    AddSampleRequisitionWithBookingComponent,
    EditSampleRequisitionWithBookingComponent,
    SampleFabricBookingComponent,
    AddSampleFabricBookingComponent,
    EditSampleFabricBookingComponent,
    SampleFabricBookingWoDtlsComponent,
    AddSampleFabricBookingWoDtlsComponent,
    EditSampleFabricBookingWoDtlsComponent,
    SampleRequisitionRequiredDetailsComponent,
    FabricServiceBookingComponent,
    AddFabricServiceBookingComponent,
    EditFabricServiceBookingComponent,
    ServiceBookingForKnittingComponent,
    AddServiceBookingForKnittingComponent,
    EditServiceBookingForKnittingComponent,
    YarnServiceWorkOrderComponent,
    AddYarnServiceWorkOrderComponent,
    EditYarnServiceWorkOrderComponent,
    YarnServiceWorkOrderDetailsComponent,
    AddYarnServiceWorkOrderDetailsComponent,
    EditYarnServiceWorkOrderDetailsComponent,
    EmbellishmentWorkOrderV2Component,
    AddEmbellishmentWorkOrderV2Component,
    EditEmbellishmentWorkOrderV2Component,
    EmbellishmentWorkOrderV2DetailsComponent,
    AddEmbellishmentWorkOrderV2DetailsComponent,
    EditEmbellishmentWorkOrderV2DetailsComponent,
    MultiJobWiseServiceBookingKnittingComponent,
    AddMultiJobWiseServiceBookingKnittingComponent,
    EditMultiJobWiseServiceBookingKnittingComponent,
    MultiJobWSBKnittingDetailsComponent,
    AddMultiJobWSBKnittingDetailsComponent,
    EditMultiJobWSBKnittingDetailsComponent,
    //SizeInfoComponent, 
    ServiceBookingForKnitingDetailComponent,
    AddSBForKnitingDetailComponent,
    EditSBForKnitingDetailComponent,
    BookingNoSelectionFormComponent,
    
    FabricDescriptionComponent,
    DemoComponent,
    StripeColorComponent,
    StripeColorDetailsComponent,
    OfferingCostComponent,
    //SizeInfoComponent,
   
    
  ],
  imports: [
    MerchandizerRoutingModule,
    MatCheckboxModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NgxEchartsModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule, 
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCheckboxModule,
    NbPopoverModule,
    NbTooltipModule,
    //metarial
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    DataTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSortModule,
    MatSelectModule,
    
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,

    ScrollingModule,
    NbDatepickerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgKnifeModule,
    NgMultiSelectDropDownModule.forRoot(),

   
  ],
  exports:[
 
  ],
  providers:[
    MatDialogService,AngularFireStorage
  ],
  entryComponents:[
    //SizeInfoComponent,
    FabricDescriptionComponent,
    StripeColorComponent,
    StripeColorDetailsComponent,
    BookingNoSelectionFormComponent,
    AddInputPannelInformationComponent,AddCompanyComponent,
    MatConfirmDialogComponent,EditInitialOrderComponent,ItemDetailsComponent,
    AddConsumptionComponent,EditItemDetailsComponent,
    AddConsumptionForTrimCostComponent,AddConsumptionForGmtsWashCostComponent,
    AddConsumptionForEmbelCostComponent,FabricationDetailsComponent,OrderOrJobSelectionFormComponent
  ]
})
export class MerchandizerModuleModule { 
 
}
