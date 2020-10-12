import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { SmartTableService } from './smart-table.service';
import { UserActivityService } from './user-activity.service';
import { OrdersChartService } from './orders-chart.service';
import { ProfitChartService } from './profit-chart.service';
import { TrafficListService } from './traffic-list.service';
import { PeriodsService } from './periods.service';
import { EarningService } from './earning.service';
import { OrdersProfitChartService } from './orders-profit-chart.service';
import { TrafficBarService } from './traffic-bar.service';
import { ProfitBarAnimationChartService } from './profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './temperature-humidity.service';
import { SolarService } from './solar.service';
import { TrafficChartService } from './traffic-chart.service';
import { StatsBarService } from './stats-bar.service';
import { CountryOrderService } from './country-order.service';
import { StatsProgressBarService } from './stats-progress-bar.service';
import { VisitorsAnalyticsService } from './visitors-analytics.service';
import { SecurityCamerasService } from './security-cameras.service';
import { FetchInitialOrderService } from './fetch-initial-order.service';
import { AddInitialOrderComponent } from '../../pages/merchandizer-module/fetch-initial-order/add-initial-order/add-initial-order.component';
import { LocationService } from './location.service';
import { ItemsService } from './items.service';
import { ProductionDeptInfoesService } from './production-dept-infoes.service';
import { OrderinfoService } from './marchandizer/orderinfo.service';
import { PrecostingService } from './marchandizer/precosting.service';

import { CompanyService } from './company.service';
import { CountryService } from './country.service';
import { MarchandizerInfoService } from './marchandizer/marchandizer-info.service';
import { ImageUploadService } from './marchandizer/image-upload.service';
import { TeamLeaderInfoService } from './marchandizer/team-leader-info.service';
import { MatDialogService } from './mat-dialog.service';
import { ShipmentModeInfoesService } from './shipment-mode-infoes.service';
import { PackingInfoesService } from './marchandizer/packing-infoes.service';
import { SeasonInfoesService } from './marchandizer/season-infoes.service';
import { AgentInfoesService } from './marchandizer/agent-infoes.service';
import { SubDeptInfoesService } from './marchandizer/sub-dept-infoes.service';
import { BodyPartService } from './marchandizer/body-part.service';
import { YarnCountsService } from './marchandizer/yarn-counts.service';
import { YarnComp1Service } from './marchandizer/yarn-comp1.service';
import { YarnTypesService } from './marchandizer/yarn-types.service';


import { MasterPodetailsInfroesService } from './marchandizer/master-podetails-infroes.service';
import { InputPannelPodetailsService } from './marchandizer/input-pannel-podetails.service';
import { SizeWisePannelPodetailsService } from './marchandizer/size-wise-pannel-podetails.service';
import { OrderItemsService } from './marchandizer/order-items.service';
import { ItemDetailsOrderEntriesService } from './marchandizer/item-details-order-entries.service';
import { OtherCostService } from './marchandizer/other-cost.service';

import { DateResizeService } from './marchandizer/date-resize.service';
import { SizeWizeBreakDownGenericCalculationService } from './marchandizer/size-wize-break-down-generic-calculation.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { CostComponentsMasterService } from './marchandizer/cost-components-master.service';
import { YarnBrandInfoService } from './library/yarn-brand-info.service';
import { ItemCategoryService } from './library/item-category.service';
import { PartyTypeService } from './library/party-type.service';
import { TNATaskEntriesService } from './library/tnatask-entries.service';
import { TNATaskNameEntryService } from './library/tnatask-name-entry.service';
import { OtherPartyProfileService } from './library/other-party-profile.service';
import { GroupProfileService } from './library/group-profile.service';
import { DepartmentProfileService } from './library/department-profile.service';
import { DivisionProfileService } from './library/division-profile.service';
import { GarmentsSampleEntrieService } from './library/garments-sample-entrie.service';
import { GarmentsItemEntriesService } from './library/garments-item-entries.service';
import { MinLeadTimeSlabsService } from './library/min-lead-time-slabs.service';
import { FinancialParameterSetupService } from './library/financial-parameter-setup.service';
import { CapacityAllocationsService } from './library/capacity-allocations.service';
import { ColourEntryService } from './library/colour-entry.service';
import { ProductSubDepartmentService } from './library/product-sub-department.service';
import { TNATaskPercentService } from './library/tnatask-percent.service';
import { SewingLineService } from './library/sewing-line.service';
import { SewingOperationService } from './library/sewing-operation.service';
import { MachineEntrieService } from './library/machine-entrie.service';
import { ProductionFloorService } from './library/production-floor.service';
import { SampleProductionTeamService } from './library/sample-production-team.service';
import { LabTestRateChartService } from './library/lab-test-rate-chart.service';
import { KnittingChargeService } from './library/knitting-charge.service';
import { DyeingAndFinishingChargeService } from './library/dyeing-and-finishing-charge.service';
import { EmailAddressSetupService } from './library/email-address-setup.service';
import { MailRecipientGroupService } from './library/mail-recipient-group.service';
import { FastReactIntgrationService } from './library/fast-react-intgration.service';
import { CurrencyConversionRateService } from './library/currency-conversion-rate.service';
import { StoreLocationService } from './library/store-location.service';
import { FabricNaturesService } from './marchandizer/fabric-natures.service';
import { ConversionCostForPreCostsService } from './marchandizer/conversion-cost-for-pre-costs.service';

import { TrimCostsService } from './marchandizer/trim-costs.service';

import { QuotationInqueryService } from './marchandizer/quotation-inquery.service';
import { UserMappingService } from './user-mapping.service';
import { DatapassingService } from './shared/datapassing.service';
import { ErpImagesService } from './shared/erp-images.service';
import { ShortTrimsBookingService } from './marchandizer/short-trims-booking.service';
import { MultipleJobWiseTrimsBookingV2Service } from './marchandizer/multiple-job-wise-trims-booking-v2.service';
import { MultipleJobWiseShortTrimsBookingV2Service } from './marchandizer/multiple-job-wise-short-trims-booking-v2.service';
import { MultipleJobWiseEmbellishmentWorkOrderService } from './marchandizer/multiple-job-wise-embellishment-work-order.service';
import { ServiceBookingForAOPWithoutOrderService } from './marchandizer/service-booking-for-aopwithout-order.service';
import { ServiceBookingForAOPWithoutOrderDetailsService } from './marchandizer/service-booking-for-aopwithout-order-details.service';
import { ServiceBookingForDyeingService } from './marchandizer/service-booking-for-dyeing.service';
import { ServiceBookingForAOPV2Service } from './marchandizer/service-booking-for-aopv2.service';
import { ServiceBookingForKnitingandDyeingWithoutOrderDetails } from '../data/marchanzider-model/service-booking-for-knitingand-dyeing-without-order-details';
import { ServiceBookingForKnitingandDyeingWithoutOrder } from '../data/marchanzider-model/service-booking-for-knitingand-dyeing-without-order';
import { SampleRequisitionWithBookingService } from './marchandizer/sample-requisition-with-booking.service';
import { SampleFabricBookingService } from './marchandizer/sample-fabric-booking.service';
import { RequiredEmbellishmentService } from './marchandizer/required-embellishment.service';
import { RequiredAccessoriesService } from './marchandizer/required-accessories.service';
import { RequiredFabricService } from './marchandizer/required-fabric.service';
import { SampledetailsService } from './marchandizer/sampledetails.service';
import { ServiceBookingForKnittingService } from './marchandizer/service-booking-for-knitting.service';
import { UtilityService } from './shared/utility.service';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material';
import { WashCostService } from './marchandizer/wash-cost.service';
import { CommercialCostService } from './marchandizer/commercial-cost.service';

const SERVICES = [
  ServiceBookingForKnittingService,
  SampledetailsService,
  RequiredFabricService,
  RequiredAccessoriesService,
  RequiredEmbellishmentService,
  SampleRequisitionWithBookingService,
  SampleFabricBookingService,
  ServiceBookingForKnitingandDyeingWithoutOrderDetails,
  ServiceBookingForKnitingandDyeingWithoutOrder,
  ServiceBookingForAOPV2Service,
  ServiceBookingForDyeingService,
  ServiceBookingForAOPWithoutOrderDetailsService,
  ServiceBookingForAOPWithoutOrderService,
  MultipleJobWiseEmbellishmentWorkOrderService,
  MultipleJobWiseShortTrimsBookingV2Service,
  ShortTrimsBookingService,
  ErpImagesService,
  DatapassingService,
  UserMappingService,
  WashCostService,
  QuotationInqueryService,
  TrimCostsService,
  CommercialCostService,
  ConversionCostForPreCostsService,
  StoreLocationService,
  FabricNaturesService,
  CurrencyConversionRateService,
  FastReactIntgrationService,
  MailRecipientGroupService,
  EmailAddressSetupService,
  DyeingAndFinishingChargeService,
  KnittingChargeService,
  LabTestRateChartService,
  SampleProductionTeamService,
  ProductionFloorService,
  MachineEntrieService,
  SewingOperationService,
  SewingLineService,
  TNATaskPercentService,
  ProductSubDepartmentService,
  ColourEntryService,
  CapacityAllocationsService,
  FinancialParameterSetupService,
  MinLeadTimeSlabsService,
  GarmentsItemEntriesService,
  GarmentsSampleEntrieService,
  DivisionProfileService,
  DepartmentProfileService,
  GroupProfileService,
  OtherPartyProfileService,
  TNATaskNameEntryService,
  TNATaskEntriesService,
  PartyTypeService,
  ItemCategoryService,
  UserService,
  ElectricityService,
  SmartTableService,
  UserActivityService,
  OrdersChartService,
  ProfitChartService,
  TrafficListService,
  PeriodsService,
  EarningService,
  OrdersProfitChartService,
  TrafficBarService,
  ProfitBarAnimationChartService,
  TemperatureHumidityService,
  SolarService,
  TrafficChartService,
  StatsBarService,
  CountryOrderService,
  StatsProgressBarService,
  VisitorsAnalyticsService,
  SecurityCamerasService,
  FetchInitialOrderService,
  LocationService,
  ItemsService,
  ProductionDeptInfoesService,
  OrderinfoService,
  PrecostingService,
  MultipleJobWiseTrimsBookingV2Service,
  CompanyService,
  CountryService,
  ShipmentModeInfoesService,
  MarchandizerInfoService,
  ImageUploadService,
  TeamLeaderInfoService,
  MatDialogService,
  PackingInfoesService,
  SeasonInfoesService,
  AgentInfoesService,
  UserService,
  SubDeptInfoesService ,
  BodyPartService,
  YarnCountsService,
  YarnComp1Service,
  YarnTypesService,
  SubDeptInfoesService,
  MasterPodetailsInfroesService,
  InputPannelPodetailsService,
  SizeWisePannelPodetailsService,
  OrderItemsService,
  ItemDetailsOrderEntriesService,
  OtherCostService,
  ItemDetailsOrderEntriesService,
  DateResizeService,
  SizeWizeBreakDownGenericCalculationService,
  CostComponentsMasterService,
  YarnBrandInfoService,
  UtilityService
  
];

@NgModule({
  imports: [
 
CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    ...SERVICES,AddInitialOrderComponent,AngularFireStorage
  ],
  declarations: [],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
