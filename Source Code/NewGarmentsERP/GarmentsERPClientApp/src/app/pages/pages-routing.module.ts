import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import { YarnCountComponent } from './libraryModule/yarn-count/yarn-count.component';
import { YarnCountCreateComponent } from './libraryModule/yarn-count/yarn-count-create/yarn-count-create.component';
import { YarnCountEditComponent } from './libraryModule/yarn-count/yarn-count-edit/yarn-count-edit.component';
import { YarnBrandComponent } from './libraryModule/yarn-brand/yarn-brand.component';
import { AddYarnBrandComponent } from './libraryModule/yarn-brand/add-yarn-brand/add-yarn-brand.component';
import { SizeEntryComponent } from './libraryModule/size-entry/size-entry.component';
import { SizeEntryCreateComponent } from './libraryModule/size-entry/size-entry-create/size-entry-create.component';
import { SizeEntryEditComponent } from './libraryModule/size-entry/size-entry-edit/size-entry-edit.component';
import { CompositionComponent } from './libraryModule/composition/composition.component';
import { CompositionCreateComponent } from './libraryModule/composition/composition-create/composition-create.component';
import { CompositionEditComponent } from './libraryModule/composition/composition-edit/composition-edit.component';
import { CountryLocationMappingComponent } from './libraryModule/country-location-mapping/country-location-mapping.component';
import { AddCountryLocationMappingComponent } from './libraryModule/country-location-mapping/add-country-location-mapping/add-country-location-mapping.component';
import { EditCountryLocationMappingComponent } from './libraryModule/country-location-mapping/edit-country-location-mapping/edit-country-location-mapping.component';
import { TrimsGroupComponent } from './libraryModule/trims-group/trims-group.component';
import { TrimsGroupCreateComponent } from './libraryModule/trims-group/trims-group-create/trims-group-create.component';
import { TrimsGroupEditComponent } from './libraryModule/trims-group/trims-group-edit/trims-group-edit.component';
import { ItemCategoryComponent } from './libraryModule/item-category/item-category.component';
import { PartyTypeComponent } from './libraryModule/party-type/party-type.component';
import { TNATaskEntriesComponent } from './libraryModule/tnatask-entries/tnatask-entries.component';
import { TNATaskNameEntryComponent } from './libraryModule/tnatask-name-entry/tnatask-name-entry.component';
import { AddItemCategoryComponent } from './libraryModule/item-category/add-item-category/add-item-category.component';
import { EditItemCategoryComponent } from './libraryModule/item-category/edit-item-category/edit-item-category.component';
import { AddPartyTypeComponent } from './libraryModule/party-type/add-party-type/add-party-type.component';
import { EditPartyTypeComponent } from './libraryModule/party-type/edit-party-type/edit-party-type.component';
import { AddTNATaskNameEntryComponent } from './libraryModule/tnatask-name-entry/add-tnatask-name-entry/add-tnatask-name-entry.component';
import { EditTNATaskNameEntryComponent } from './libraryModule/tnatask-name-entry/edit-tnatask-name-entry/edit-tnatask-name-entry.component';
import { AddTNATaskEntriesComponent } from './libraryModule/tnatask-entries/add-tnatask-entries/add-tnatask-entries.component';
import { EditTNATaskEntriesComponent } from './libraryModule/tnatask-entries/edit-tnatask-entries/edit-tnatask-entries.component';
import { PageInfoComponent } from './libraryModule/page-info/page-info.component';
import { PageInfoCreateComponent } from './libraryModule/page-info/page-info-create/page-info-create.component';
import { PageInfoEditComponent } from './libraryModule/page-info/page-info-edit/page-info-edit.component';
import { TestComponent } from './libraryModule/test/test.component';
import { OtherPartyProfileComponent } from './libraryModule/other-party-profile/other-party-profile.component';
import { AddOtherPartyProfileComponent } from './libraryModule/other-party-profile/add-other-party-profile/add-other-party-profile.component';
import { EditOtherPartyProfileComponent } from './libraryModule/other-party-profile/edit-other-party-profile/edit-other-party-profile.component';
import { GroupProfileComponent } from './libraryModule/group-profile/group-profile.component';
import { AddGroupProfileComponent } from './libraryModule/group-profile/add-group-profile/add-group-profile.component';
import { EditGroupProfileComponent } from './libraryModule/group-profile/edit-group-profile/edit-group-profile.component';
import { DepartmentProfileComponent } from './libraryModule/department-profile/department-profile.component';
import { AddDepartmentProfileComponent } from './libraryModule/department-profile/add-department-profile/add-department-profile.component';
import { EditDepartmentProfileComponent } from './libraryModule/department-profile/edit-department-profile/edit-department-profile.component';
import { DivisionProfileComponent } from './libraryModule/division-profile/division-profile.component';
import { AddDivisionProfilengComponent } from './libraryModule/division-profile/add-division-profileng/add-division-profileng.component';
import { EditDivisionProfilengComponent } from './libraryModule/division-profile/edit-division-profileng/edit-division-profileng.component';
import { TermsAndConditionComponent } from './libraryModule/terms-and-condition/terms-and-condition.component';
import { TermsNdConditionCreateComponent } from './libraryModule/terms-and-condition/terms-nd-condition-create/terms-nd-condition-create.component';
import { TermsNdConditionEditComponent } from './libraryModule/terms-and-condition/terms-nd-condition-edit/terms-nd-condition-edit.component';

import { AddSectionProfileComponent } from './libraryModule/section-profile/add-section-profile/add-section-profile.component';
import { EditSectionProfileComponent } from './libraryModule/section-profile/edit-section-profile/edit-section-profile.component';
import { ProfitCenterComponent } from './libraryModule/profit-center/profit-center.component';
import { AddProfitCenterComponent } from './libraryModule/profit-center/add-profit-center/add-profit-center.component';
import { EditProfitCenterComponent } from './libraryModule/profit-center/edit-profit-center/edit-profit-center.component';
import { BodyPartEntryComponent } from './libraryModule/body-part-entry/body-part-entry.component';
import { BodyPartCreateComponent } from './libraryModule/body-part-entry/body-part-create/body-part-create.component';
import { DepoLocationMappingComponent } from './libraryModule/depo-location-mapping/depo-location-mapping.component';
import { DepoLocationMappingCreateComponent } from './libraryModule/depo-location-mapping/depo-location-mapping-create/depo-location-mapping-create.component';
import { DepoLocationMappingEditComponent } from './libraryModule/depo-location-mapping/depo-location-mapping-edit/depo-location-mapping-edit.component';
import { BodyPartEditComponent } from './libraryModule/body-part-entry/body-part-edit/body-part-edit.component';
import { SectionProfileComponent } from './libraryModule/section-profile/section-profile.component';
import { AddGarmentsSampleEntrieComponent } from './libraryModule/garments-sample-entrie/add-garments-sample-entrie/add-garments-sample-entrie.component';
import { GarmentsSampleEntrieComponent } from './libraryModule/garments-sample-entrie/garments-sample-entrie.component';
import { EditGarmentsSampleEntrieComponent } from './libraryModule/garments-sample-entrie/edit-garments-sample-entrie/edit-garments-sample-entrie.component';
import { ItemGroup } from '../@core/data/Library-Modul-model/ItemGroup';
import { ItemGroupComponent } from './libraryModule/item-group/item-group.component';
import { EditItemGroupComponent } from './libraryModule/item-group/edit-item-group/edit-item-group.component';
import { AddItemGroupComponent } from './libraryModule/item-group/add-item-group/add-item-group.component';
import { ItemAccountCreationComponent } from './libraryModule/item-account-creation/item-account-creation.component';
import { AddItemAccountCreationComponent } from './libraryModule/item-account-creation/add-item-account-creation/add-item-account-creation.component';
import { EditItemAccountCreationComponent } from './libraryModule/item-account-creation/edit-item-account-creation/edit-item-account-creation.component';
import { GarmentsItemEntriesComponent } from './libraryModule/garments-item-entries/garments-item-entries.component';
import { AddGarmentsItemEntriesComponent } from './libraryModule/garments-item-entries/add-garments-item-entries/add-garments-item-entries.component';
import { EditGarmentsItemEntriesComponent } from './libraryModule/garments-item-entries/edit-garments-item-entries/edit-garments-item-entries.component';
import { MinLeadTimeSlabsComponent } from './libraryModule/min-lead-time-slabs/min-lead-time-slabs.component';
import { AddMinLeadTimeSlabsComponent } from './libraryModule/min-lead-time-slabs/add-min-lead-time-slabs/add-min-lead-time-slabs.component';
import { EditMinLeadTimeSlabsComponent } from './libraryModule/min-lead-time-slabs/edit-min-lead-time-slabs/edit-min-lead-time-slabs.component';
import { BuyerProfileComponent } from './libraryModule/buyer-profile/buyer-profile.component';
import { AddBuyerProfileComponent } from './libraryModule/buyer-profile/add-buyer-profile/add-buyer-profile.component';
import { EditBuyerProfileComponent } from './libraryModule/buyer-profile/edit-buyer-profile/edit-buyer-profile.component';
import { FinancialParameterSetupComponent } from './libraryModule/financial-parameter-setup/financial-parameter-setup.component';
import { AddFinancialParameterSetupComponent } from './libraryModule/financial-parameter-setup/add-financial-parameter-setup/add-financial-parameter-setup.component';
import { EditFinancialParameterSetupComponent } from './libraryModule/financial-parameter-setup/edit-financial-parameter-setup/edit-financial-parameter-setup.component';
import { CapacityAllocationsComponent } from './libraryModule/capacity-allocations/capacity-allocations.component';
import { AddCapacityAllocationsComponent } from './libraryModule/capacity-allocations/add-capacity-allocations/add-capacity-allocations.component';
import { EditCapacityAllocationsComponent } from './libraryModule/capacity-allocations/edit-capacity-allocations/edit-capacity-allocations.component';
//import { BuyerWiesSeason } from '../@core/data/Library-Modul-model/buyer-wies-season.model';
import { SupplierProfileComponent } from './libraryModule/supplier-profile/supplier-profile.component';
import { AddSupplierProfileComponent } from './libraryModule/supplier-profile/add-supplier-profile/add-supplier-profile.component';
import { EditSupplierProfileComponent } from './libraryModule/supplier-profile/edit-supplier-profile/edit-supplier-profile.component';
import { ColourEntryComponent } from './libraryModule/colour-entry/colour-entry.component';
import { AddColourEntryComponent } from './libraryModule/colour-entry/add-colour-entry/add-colour-entry.component';
import { EditColourEntryComponent } from './libraryModule/colour-entry/edit-colour-entry/edit-colour-entry.component';
import { ProductSubDepartmentComponent } from './libraryModule/product-sub-department/product-sub-department.component';
import { AddProductSubDepartmentComponent } from './libraryModule/product-sub-department/add-product-sub-department/add-product-sub-department.component';
import { EditProductSubDepartmentComponent } from './libraryModule/product-sub-department/edit-product-sub-department/edit-product-sub-department.component';
import { BuyerWiesSeasonComponent } from './libraryModule/buyer-wies-season/buyer-wies-season.component';
import { AddBuyerWiesSeasonComponent } from './libraryModule/buyer-wies-season/add-buyer-wies-season/add-buyer-wies-season.component';
import { EditBuyerWiesSeasonComponent } from './libraryModule/buyer-wies-season/edit-buyer-wies-season/edit-buyer-wies-season.component';
import { JournalSetupComponent } from './libraryModule/journal-setup/journal-setup.component';
import { AddJournalSetupComponent } from './libraryModule/journal-setup/add-journal-setup/add-journal-setup.component';
import { EditJournalSetupComponent } from './libraryModule/journal-setup/edit-journal-setup/edit-journal-setup.component';
import { TNATaskPercentComponent } from './libraryModule/tnatask-percent/tnatask-percent.component';
import { AddTNATaskPercentComponent } from './libraryModule/tnatask-percent/add-tnatask-percent/add-tnatask-percent.component';
import { EditTNATaskPercentComponent } from './libraryModule/tnatask-percent/edit-tnatask-percent/edit-tnatask-percent.component';
import { SewingLineComponent } from './libraryModule/sewing-line/sewing-line.component';
import { AddSewingLineComponent } from './libraryModule/sewing-line/add-sewing-line/add-sewing-line.component';
import { EditSewingLineComponent } from './libraryModule/sewing-line/edit-sewing-line/edit-sewing-line.component';
import { SewingOperationComponent } from './libraryModule/sewing-operation/sewing-operation.component';
import { AddSewingOperationComponent } from './libraryModule/sewing-operation/add-sewing-operation/add-sewing-operation.component';
import { EditSewingOperationComponent } from './libraryModule/sewing-operation/edit-sewing-operation/edit-sewing-operation.component';
import { MachineEntrieComponent } from './libraryModule/machine-entrie/machine-entrie.component';
import { AddMachineEntrieComponent } from './libraryModule/machine-entrie/add-machine-entrie/add-machine-entrie.component';
import { EditMachineEntrieComponent } from './libraryModule/machine-entrie/edit-machine-entrie/edit-machine-entrie.component';
import { ProductionFloorComponent } from './libraryModule/production-floor/production-floor.component';
import { AddProductionFloorComponent } from './libraryModule/production-floor/add-production-floor/add-production-floor.component';
import { EditProductionFloorComponent } from './libraryModule/production-floor/edit-production-floor/edit-production-floor.component';
import { SampleProductionTeamComponent } from './libraryModule/sample-production-team/sample-production-team.component';
import { AddSampleProductionTeamComponent } from './libraryModule/sample-production-team/add-sample-production-team/add-sample-production-team.component';
import { EditSampleProductionTeamComponent } from './libraryModule/sample-production-team/edit-sample-production-team/edit-sample-production-team.component';
import { YarnCountDeterminationComponent } from './libraryModule/yarn-count-determination/yarn-count-determination.component';
import { AddYarnCountDeterminationComponent } from './libraryModule/yarn-count-determination/add-yarn-count-determination/add-yarn-count-determination.component';
import { EditYarnCountDeterminationComponent } from './libraryModule/yarn-count-determination/edit-yarn-count-determination/edit-yarn-count-determination.component';
import { LabTestRateChartComponent } from './libraryModule/lab-test-rate-chart/lab-test-rate-chart.component';
import { AddLabTestRateChartComponent } from './libraryModule/lab-test-rate-chart/add-lab-test-rate-chart/add-lab-test-rate-chart.component';
import { EditLabTestRateChartComponent } from './libraryModule/lab-test-rate-chart/edit-lab-test-rate-chart/edit-lab-test-rate-chart.component';
import { TrimsCostingTemplateComponent } from './libraryModule/trims-costing-template/trims-costing-template.component';
import { AddTrimsCostingTemplateComponent } from './libraryModule/trims-costing-template/add-trims-costing-template/add-trims-costing-template.component';
import { EditTrimsCostingTemplateComponent } from './libraryModule/trims-costing-template/edit-trims-costing-template/edit-trims-costing-template.component';
import { KnittingChargeComponent } from './libraryModule/knitting-charge/knitting-charge.component';
import { EditKnittingChargeComponent } from './libraryModule/knitting-charge/edit-knitting-charge/edit-knitting-charge.component';
import { AddKnittingChargeComponent } from './libraryModule/knitting-charge/add-knitting-charge/add-knitting-charge.component';
import { MarketingTeamInfoComponent } from './libraryModule/marketing-team-info/marketing-team-info.component';
import { AddMarketingTeamInfoComponent } from './libraryModule/marketing-team-info/add-marketing-team-info/add-marketing-team-info.component';
import { EditMarketingTeamInfoComponent } from './libraryModule/marketing-team-info/edit-marketing-team-info/edit-marketing-team-info.component';
import { MembersInfoComponent } from './libraryModule/members-info/members-info.component';
import { AddMembersInfoComponent } from './libraryModule/members-info/add-members-info/add-members-info.component';
import { EditMembersInfoComponent } from './libraryModule/members-info/edit-members-info/edit-members-info.component';
import { CapacityCalculationComponent } from './libraryModule/capacity-calculation/capacity-calculation.component';
import { AddCapacityCalculationComponent } from './libraryModule/capacity-calculation/add-capacity-calculation/add-capacity-calculation.component';
import { FinishGmtsCapacityCalculationComponent } from './libraryModule/finish-gmts-capacity-calculation/finish-gmts-capacity-calculation.component';
import { DyeingAndFinishingChargeComponent } from './libraryModule/dyeing-and-finishing-charge/dyeing-and-finishing-charge.component';
import { EditDyeingAndFinishingChargeComponent } from './libraryModule/dyeing-and-finishing-charge/edit-dyeing-and-finishing-charge/edit-dyeing-and-finishing-charge.component';
import { AddDyeingAndFinishingChargeComponent } from './libraryModule/dyeing-and-finishing-charge/add-dyeing-and-finishing-charge/add-dyeing-and-finishing-charge.component';
import { EmailAddressSetupComponent } from './libraryModule/email-address-setup/email-address-setup.component';
import { AddEmailAddressSetupComponent } from './libraryModule/email-address-setup/add-email-address-setup/add-email-address-setup.component';
import { EditEmailAddressSetupComponent } from './libraryModule/email-address-setup/edit-email-address-setup/edit-email-address-setup.component';
import { MailRecipientGroupComponent } from './libraryModule/mail-recipient-group/mail-recipient-group.component';
import { AddMailRecipientGroupComponent } from './libraryModule/mail-recipient-group/add-mail-recipient-group/add-mail-recipient-group.component';
import { EditMailRecipientGroupComponent } from './libraryModule/mail-recipient-group/edit-mail-recipient-group/edit-mail-recipient-group.component';
import { FastReactIntgrationComponent } from './libraryModule/fast-react-intgration/fast-react-intgration.component';
import { AddFastReactIntgrationComponent } from './libraryModule/fast-react-intgration/add-fast-react-intgration/add-fast-react-intgration.component';
import { EditFastReactIntgrationComponent } from './libraryModule/fast-react-intgration/edit-fast-react-intgration/edit-fast-react-intgration.component';
import { StoreLocationComponent } from './libraryModule/store-location/store-location.component';
import { AddStoreLocationComponent } from './libraryModule/store-location/add-store-location/add-store-location.component';
import { EditStoreLocationComponent } from './libraryModule/store-location/edit-store-location/edit-store-location.component';
import { CurrencyConversionRateComponent } from './libraryModule/currency-conversion-rate/currency-conversion-rate.component';
import { AddCurrencyConversionRateComponent } from './libraryModule/currency-conversion-rate/add-currency-conversion-rate/add-currency-conversion-rate.component';
import { EditCurrencyConversionRateComponent } from './libraryModule/currency-conversion-rate/edit-currency-conversion-rate/edit-currency-conversion-rate.component';
import { AddYarnRateComponent } from './libraryModule/yarn-rate/add-yarn-rate/add-yarn-rate.component';
import { EditYarnRateComponent } from './libraryModule/yarn-rate/edit-yarn-rate/edit-yarn-rate.component';
import { YarnRateComponent } from './libraryModule/yarn-rate/yarn-rate.component';
import { AccountingYearComponent } from './libraryModule/accounting-year/accounting-year.component';
import { AddAccountingYearComponent } from './libraryModule/accounting-year/add-accounting-year/add-accounting-year.component';
import { EditAccountingYearComponent } from './libraryModule/accounting-year/edit-accounting-year/edit-accounting-year.component';
import { AddShareholderComponent } from './libraryModule/shareholder/add-shareholder/add-shareholder.component';
import { EmployeeInfoComponent } from './libraryModule/employee-info/employee-info.component';
import { AddEmployeeInfoComponent } from './libraryModule/employee-info/add-employee-info/add-employee-info.component';
import { EditEmployeeInfoComponent } from './libraryModule/employee-info/edit-employee-info/edit-employee-info.component';

import { ReportSettingComponent } from './libraryModule/report-setting/report-setting.component';
import { AddReportSettingComponent } from './libraryModule/report-setting/add-report-setting/add-report-setting.component';
import { EditReportSettingComponent } from './libraryModule/report-setting/edit-report-setting/edit-report-setting.component';
import { FabricDesPreCostComponent } from './merchandizer-module/fabric-des-pre-cost/fabric-des-pre-cost.component';
import { EditFabricDesPreCostComponent } from './merchandizer-module/fabric-des-pre-cost/edit-fabric-des-pre-cost/edit-fabric-des-pre-cost.component';
import { AddFabricDesPreCostComponent } from './merchandizer-module/fabric-des-pre-cost/add-fabric-des-pre-cost/add-fabric-des-pre-cost.component';
import { QuotationInqueryComponent } from './merchandizer-module/quotation-inquery/quotation-inquery.component';
import { AddQuotationInqueryComponent } from './merchandizer-module/quotation-inquery/add-quotation-inquery/add-quotation-inquery.component';
import { EditQuotationInqueryComponent } from './merchandizer-module/quotation-inquery/edit-quotation-inquery/edit-quotation-inquery.component';
import { MerchandisingComponent } from './libraryModule/VariableSettings/merchandising/merchandising.component';
import { VariableListComponent } from './libraryModule/variable-list/variable-list.component';
import { AddVariableListComponent } from './libraryModule/variable-list/add-variable-list/add-variable-list.component';
import { EditVariableListComponent } from './libraryModule/variable-list/edit-variable-list/edit-variable-list.component';
import { CommercialComponent } from './libraryModule/VariableSettings/commercial/commercial.component';
import { BankInfoComponent } from './libraryModule/bank-info/bank-info.component';
import { AddBankInfoComponent } from './libraryModule/bank-info/add-bank-info/add-bank-info.component';
import { EditBankInfoComponent } from './libraryModule/bank-info/edit-bank-info/edit-bank-info.component';
import { ProductionComponent } from './libraryModule/VariableSettings/production/production.component';
import { InventoryComponent } from './libraryModule/VariableSettings/inventory/inventory.component';
import { UserMappingComponent } from './user-mapping/user-mapping.component';
import { AddUserMappingComponent } from './user-mapping/add-user-mapping/add-user-mapping.component';
import { EditUserMappingComponent } from './user-mapping/edit-user-mapping/edit-user-mapping.component';
import { SubcontractComponent } from './libraryModule/VariableSettings/subcontract/subcontract.component';
import { PlanningComponent } from './libraryModule/VariableSettings/planning/planning.component';
import { ErpImagesComponent } from './Shared/erp-images/erp-images.component';

import { PageobjectcreatorComponent } from './Shared/pageobjectcreator/pageobjectcreator.component';
import { SalesForecastEntryComponent } from './merchandizer-module/sales-forecast-entry/sales-forecast-entry.component';
import { SampleDevelopmentOrderDetailsComponent } from './merchandizer-module/sample-development-order-details/sample-development-order-details.component';
import { AddSampleDevelopmentOrderDetailsComponent } from './merchandizer-module/sample-development-order-details/add-sample-development-order-details/add-sample-development-order-details.component';
import { EditSampleDevelopmentOrderDetailsComponent } from './merchandizer-module/sample-development-order-details/edit-sample-development-order-details/edit-sample-development-order-details.component';
import { MultipleJobWiseTrimsBookingV2Component } from './merchandizer-module/multiple-job-wise-trims-booking-v2/multiple-job-wise-trims-booking-v2.component';
import { AddMultipleJobWiseTrimsBookingV2Component } from './merchandizer-module/multiple-job-wise-trims-booking-v2/add-multiple-job-wise-trims-booking-v2/add-multiple-job-wise-trims-booking-v2.component';
import { EditMultipleJobWiseTrimsBookingV2Component } from './merchandizer-module/multiple-job-wise-trims-booking-v2/edit-multiple-job-wise-trims-booking-v2/edit-multiple-job-wise-trims-booking-v2.component';
import { SizeDitsComponent } from './merchandizer-module/sample-development-order-details/add-sample-development-order-details/size-dits/size-dits.component';
import { AddSizeDitsComponent } from './merchandizer-module/sample-development-order-details/add-sample-development-order-details/size-dits/add-size-dits/add-size-dits.component';
import { EditSizeDitsComponent } from './merchandizer-module/sample-development-order-details/add-sample-development-order-details/size-dits/edit-size-dits/edit-size-dits.component';
import { OrderOrJobSelectionFormComponent } from './merchandizer-module/order-or-job-selection-form/order-or-job-selection-form.component';

import { YarnDyeingWorkOrderComponent } from './merchandizer-module/yarn-dyeing-work-order/yarn-dyeing-work-order.component';
import { ServiceBookingForAOPWithoutOrderComponent } from './merchandizer-module/service-booking-for-aopwithout-order/service-booking-for-aopwithout-order.component';
import { AddServiceBookingForAOPWithoutOrderComponent } from './merchandizer-module/service-booking-for-aopwithout-order/add-service-booking-for-aopwithout-order/add-service-booking-for-aopwithout-order.component';
import { EditServiceBookingForAOPWithoutOrderComponent } from './merchandizer-module/service-booking-for-aopwithout-order/edit-service-booking-for-aopwithout-order/edit-service-booking-for-aopwithout-order.component';
import { AddSampleFabricBookingWithoutorderDetailsComponent } from './merchandizer-module/sample-fabric-booking-withoutorder-details/add-sample-fabric-booking-withoutorder-details/add-sample-fabric-booking-withoutorder-details.component';
import { EditSampleFabricBookingWithoutorderDetailsComponent } from './merchandizer-module/sample-fabric-booking-withoutorder-details/edit-sample-fabric-booking-withoutorder-details/edit-sample-fabric-booking-withoutorder-details.component';
import { ShowYarnDyeingWorkOrderComponent } from './merchandizer-module/yarn-dyeing-work-order/show-yarn-dyeing-work-order/show-yarn-dyeing-work-order.component';
import { YarnDyeingWODetailsComponent } from './merchandizer-module/yarn-dyeing-work-order/yarn-dyeing-wodetails/yarn-dyeing-wodetails.component';
import { ShowYarnDyeingWODetailsComponent } from './merchandizer-module/yarn-dyeing-work-order/yarn-dyeing-wodetails/show-yarn-dyeing-wodetails/show-yarn-dyeing-wodetails.component';
import { PricequotationComponent } from './merchandizer-module/pricequotation/pricequotation.component';
import { AddpricequotationComponent } from './merchandizer-module/pricequotation/addpricequotation/addpricequotation.component';
import { EditpricequotationComponent } from './merchandizer-module/pricequotation/editpricequotation/editpricequotation.component';

import { YarnDyeingWOWithoutOrderMasterComponent } from './merchandizer-module/yarn-dyeing-wowithout-order-master/yarn-dyeing-wowithout-order-master.component';
import { AddYarnDyeingWOWithoutOrderMasterComponent } from './merchandizer-module/yarn-dyeing-wowithout-order-master/add-yarn-dyeing-wowithout-order-master/add-yarn-dyeing-wowithout-order-master.component';
import { EditYarnDyeingWOWithoutOrderMasterComponent } from './merchandizer-module/yarn-dyeing-wowithout-order-master/edit-yarn-dyeing-wowithout-order-master/edit-yarn-dyeing-wowithout-order-master.component';
import { YarnDyeingWOWithoutOrderDetailsComponent } from './merchandizer-module/yarn-dyeing-wowithout-order-details/yarn-dyeing-wowithout-order-details.component';
import { AddYarnDyeingWOWithoutOrderDetailsComponent } from './merchandizer-module/yarn-dyeing-wowithout-order-details/add-yarn-dyeing-wowithout-order-details/add-yarn-dyeing-wowithout-order-details.component';
import { EditYarnDyeingWOWithoutOrderDetailsComponent } from './merchandizer-module/yarn-dyeing-wowithout-order-details/edit-yarn-dyeing-wowithout-order-details/edit-yarn-dyeing-wowithout-order-details.component';
import { TnaMailSetupComponent } from './libraryModule/tna-mail-setup/tna-mail-setup.component';
import { AddtnaMailSetupComponent } from './libraryModule/tna-mail-setup/addtna-mail-setup/addtna-mail-setup.component';
import { EdittnaMailSetupComponent } from './libraryModule/tna-mail-setup/edittna-mail-setup/edittna-mail-setup.component';
import { ReportComponent } from './libraryModule/report/report.component';
import { EditYarnBrandComponent } from './libraryModule/yarn-brand/edit-yarn-brand/edit-yarn-brand.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component:ECommerceComponent,
    },
   
    {
      path: 'iot-dashboard', 
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      loadChildren: () => import('./merchandizer-module/merchandizer-module.module')
        .then(m => m.MerchandizerModuleModule),
    },
    {
      path: 'tna',
      loadChildren: () => import('./tna/tna.module')
        .then(m => m.TnaModule),
    },
    {
      path: 'planning',
      loadChildren: () => import('./planning/planning.module')
        .then(m => m.PlanningModule),
    },
    {
      path: 'commercial',
      loadChildren: () => import('./commercial/commercial.module')
        .then(m => m.CommercialModule),
    },
   //OrderOrJobNo
   {
    path: 'OrderOrJob',
    component:OrderOrJobSelectionFormComponent,
  },

    //marchandizing Module routing
   
    // Library Module Routing

    {
      path: 'TnaMailSetup',
      component:TnaMailSetupComponent,
    },
    {
      path: 'create-TnaMailSetup',
      component:AddtnaMailSetupComponent,
    },
    {
      path: 'edit-TnaMailSetup/:id',
      component:EdittnaMailSetupComponent,
    },


    {
      path: 'yarn-count',
      component:YarnCountComponent,
    },
    {
      path: 'yarn-count-create',
      component:YarnCountCreateComponent,
    },
    {
      path: 'yarn-count-edit/:id',
      component:YarnCountEditComponent,
    },
    {
      path: 'yarn-brand',
      component:YarnBrandComponent,
    },
    {
      path: 'add-yarn-brand',
      component:AddYarnBrandComponent,
    },
    {
      path: 'yarn-brand-edit/:yarnBrandId',
      component:EditYarnBrandComponent,
    },
    
    {
      path: 'size-entry',
      component:SizeEntryComponent,
    },
 
    {
      path: 'size-entry-create',
      component:SizeEntryCreateComponent,
    },
    {
      path: 'size-entry-edit/:id',
      component:SizeEntryEditComponent,
    },

    {
      path: 'composition',
      component:CompositionComponent,
    },
    {
      path: 'composition-create',
      component:CompositionCreateComponent,
    },
    {
      path: 'country-location-mapping',
      component:CountryLocationMappingComponent,
    },
    {
      path: 'add-country-location-mapping',
      component:AddCountryLocationMappingComponent,
    },
    {
      path: 'edit-country-location-mapping/:id',
      component:EditCountryLocationMappingComponent,
    },
    {
      path: 'item-category',
      component:ItemCategoryComponent,
    },
    {
      path: 'add-item-category',
      component:AddItemCategoryComponent,
    },
    {
      path: 'edit-item-category/:id',
      component:EditItemCategoryComponent,
    },
    {
      path: 'party-type',
      component:PartyTypeComponent,
    },
    {
      path: 'add-party-type',
      component:AddPartyTypeComponent,
    },
    {
      path: 'edit-party-type/:id',
      component:EditPartyTypeComponent,
    },
    {
      path:'tNA-task-entries',
      component:TNATaskEntriesComponent,
    },
    {
      path:'add-tNA-task-entries',
      component:AddTNATaskEntriesComponent,
    },
    {
      path:'edit-tNA-task-entries/:id',
      component:EditTNATaskEntriesComponent,
    },
    {
      path:'tNA-task-name',
      component:TNATaskNameEntryComponent,
    },
    {
      path:'add-tNA-task-name',
      component:AddTNATaskNameEntryComponent,
    },
    {
      path:'edit-tNA-task-name/:id',
     component:EditTNATaskNameEntryComponent,
    }, 
    {
      path:'other-party-profile',
     component:OtherPartyProfileComponent,
    }, 
    {
      path:'add-other-party-profile',
     component:AddOtherPartyProfileComponent,
    }, 
    {
      path:'edit-other-party-profile/:id',
     component:EditOtherPartyProfileComponent,
    }, 
    {
      path:'group-profile',
     component:GroupProfileComponent,
    },
    {
      path:'add-group-profile',
     component:AddGroupProfileComponent,
    },
    {
      path:'edit-group-profile/:id',
     component:EditGroupProfileComponent,
    },
    {
      path:'department-profile',
     component:DepartmentProfileComponent,
    },
    {
      path:'add-department-profile',
     component:AddDepartmentProfileComponent,
    },
    {
      path:'edit-department-profile/:id',
     component:EditDepartmentProfileComponent,
    },
    {
      path:'division-profile',
     component:DivisionProfileComponent,
    },
    {
      path:'add-division-profile',
     component:AddDivisionProfilengComponent,
    },
    {
      path:'edit-division-profile/:id',
     component:EditDivisionProfilengComponent,
    },
    {
      path: 'yarn-count-edit/:id',
      component:YarnCountEditComponent,
    },
      {
      path: 'compositon-edit/:id',
      component:CompositionEditComponent,
    },
    {
      path: 'trims-group',
      component:TrimsGroupComponent,
    },
    {
      path: 'trims-group-create',
      component:TrimsGroupCreateComponent,
    },
    {
      path: 'trims-group-edit/:id',
      component:TrimsGroupEditComponent,
    },
    {
      path: 'page-info',
      component:PageInfoComponent,
    },
    {
      path: 'page-info-create',
      component:PageInfoCreateComponent,
    },
    {
      path: 'page-info-edit/:id',
      component:PageInfoEditComponent,
    },
    {
      path: 'terms-and-condition',
      component:TermsAndConditionComponent,
    },
    {
      path: 'terms-and-condition-create',
      component:TermsNdConditionCreateComponent,
    },
    {
      path: 'terms-and-condition-edit/:id',
      component:TermsNdConditionEditComponent,
    },
    {
      path:'section-profile',
     component:SectionProfileComponent,
    },
    {
      path:'add-section-profile',
     component:AddSectionProfileComponent,
    },
    {
      path:'edit-section-profile/:id',
     component:EditSectionProfileComponent,
    },
    {
      path:'profit-center',
     component:ProfitCenterComponent,
    },
    {
      path:'add-profit-center',
     component:AddProfitCenterComponent,
    },
    {
      path:'edit-profit-center/:id',
     component:EditProfitCenterComponent,
    },
    {
      path: 'body-part-entry',
      component:BodyPartEntryComponent,
    },
    {
      path: 'body-part-create',
      component:BodyPartCreateComponent,
    },
    {
      path: 'body-part-edit/:id',
      component:BodyPartEditComponent,
    },
    {
      path: 'Buyer-Wies-Season-list',
      component:BuyerWiesSeasonComponent,
    },
    {
      path: 'Buyer-Wies-Season-create',
      component:AddBuyerWiesSeasonComponent,
    },
    {
      path: 'Buyer-Wies-Season-edit/:id',
      component:EditBuyerWiesSeasonComponent,
    },
    {
      path: 'test-report',
      component:TestComponent,
    },
    // {
    //   path: 'test-casecaddingDDL',
    //   component:CasecaddingDDLComponent,
    // },
    {
      path: 'Journal-Setup-list',
      component:JournalSetupComponent,
    },
    {
      path: 'Journal-Setup-create',
      component:AddJournalSetupComponent,
    },
    {
      path: 'Journal-Setup-edit/:id',
      component:EditJournalSetupComponent,
    },

    {
      path: 'SizeDits-list',
      component:SizeDitsComponent,
    },
    {
      path: 'SizeDits-create',
      component:AddSizeDitsComponent,
    },
    {
      path: 'SizeDits-edit/:id',
      component:EditSizeDitsComponent,
    },

    {
      path: 'BankInfo-list',
      component:BankInfoComponent,
    },
    {
      path: 'BankInfo-create',
      component:AddBankInfoComponent,
    },
    {
      path: 'BankInfo-edit/:id',
      component:EditBankInfoComponent,
    },
    {
      path: 'EmployeeInfo-list',
      component:EmployeeInfoComponent,
    },
    {
      path: 'EmployeeInfo-create',
      component:AddEmployeeInfoComponent,
    },
    {
      path: 'EmployeeInfo-edit/:id',
      component:EditEmployeeInfoComponent,
    },
    {
      path: 'Commercial-variable-settings',
      component:CommercialComponent,
    },
    {
      path: 'Production-variable-settings',
      component:ProductionComponent,
    },

    {
      path: 'Inventory-variable-settings',
      component:InventoryComponent,
    },
    {
      path: 'Subcontract-variable-settings',
      component:SubcontractComponent,
    },
    {
      path: 'Planning-variable-settings',
      component:PlanningComponent,
    },

    {
      path: 'SampleDevelopmentOrderDetails',
      component:SampleDevelopmentOrderDetailsComponent,
    },
    {
      path: 'AddSampleDevelopmentOrderDetails',
      component:AddSampleDevelopmentOrderDetailsComponent,
    },
    {
      path: 'EditSampleDevelopmentOrderDetails/:id',
      component:EditSampleDevelopmentOrderDetailsComponent,
    },
    
    
    {
      path: 'Variable-List',
      component:VariableListComponent,
    },
    {
      path: 'VariableList-create',
      component:AddVariableListComponent,
    },
    {
      path: 'VariableList-edit/:id',
      component:EditVariableListComponent,
    },
    {
      path: 'ReportSetting-list',
      component:ReportSettingComponent,
    },
    {
      path: 'ReportSetting-create',
      component:AddReportSettingComponent,
    },
    {
      path: 'ReportSetting-edit/:id',
      component:EditReportSettingComponent,
    },
    {
    path: 'FabricDesPreCost-list',
    component:FabricDesPreCostComponent,
  }, 
  {
    path: 'FabricDesPreCost-create',
    component:AddFabricDesPreCostComponent,
  },
  {
    path: 'FabricDesPreCost-edit/:id',
    component:EditFabricDesPreCostComponent,
  },
 
    {
      path: 'depo-location-mapping',
      component:DepoLocationMappingComponent,
    },
    {
      path: 'depo-location-mapping-create',
      component:DepoLocationMappingCreateComponent,
    },
    {
      path: 'depo-location-mapping-edit/:id',
      component:DepoLocationMappingEditComponent,
    },
    {
      path:'section-profile',
     component:SectionProfileComponent,
    },
    {
      path:'add-section-profile',
     component:AddSectionProfileComponent,
    },
    {
      path:'edit-section-profile/:id',
     component:EditSectionProfileComponent,
    },
    {
      path:'profit-center',
     component:ProfitCenterComponent,
    },
    {
      path:'add-profit-center',
     component:AddProfitCenterComponent,
    },
    {
      path:'edit-profit-center/:id',
     component:EditProfitCenterComponent,
    },
    {
      path:'garments-sample-entrie',
     component:GarmentsSampleEntrieComponent
    },
    {
      path:'add-garments-sample-entrie',
     component:AddGarmentsSampleEntrieComponent
    },
    {
      path:'edit-garments-sample-entrie/:id',
     component:EditGarmentsSampleEntrieComponent
    },
    {
      path:'garments-item-entries',
     component:GarmentsItemEntriesComponent
    },
    {
      path:'add-garments-item-entries',
     component:AddGarmentsItemEntriesComponent
    },
    {
      path:'edit-garments-item-entries/:id',
     component:EditGarmentsItemEntriesComponent
    },
    {
      path:'min-lead-time-slabs',
     component:MinLeadTimeSlabsComponent
    },
    {
      path:'add-min-lead-time-slabs',
     component:AddMinLeadTimeSlabsComponent
    },
    {
      path:'edit-min-lead-time-slabs/:id',
     component:EditMinLeadTimeSlabsComponent
    },
    {
      path:'financial-parameter-setup',
     component:FinancialParameterSetupComponent
    },
    {
      path:'add-financial-parameter-setup',
     component:AddFinancialParameterSetupComponent
    },
    {
      path:'edit-financial-parameter/:id',
     component:EditFinancialParameterSetupComponent
    },
    {
      path:'capacity-allocations',
     component:CapacityAllocationsComponent
    },
    {
      path:'add-capacity-allocations',
     component:AddCapacityAllocationsComponent
    },
    {
      path:'edit-capacity-allocations/:id',
     component:EditCapacityAllocationsComponent
    },
    {
      path:'colour-entry',
     component:ColourEntryComponent
    },
    {
      path:'add-colour-entry',
     component:AddColourEntryComponent
    },
    {
      path:'edit-colour-entry/:id',
     component:EditColourEntryComponent
    },
    {
      path:'product-sub-department',
     component:ProductSubDepartmentComponent
    },
    {
      path:'add-product-sub-department',
     component:AddProductSubDepartmentComponent
    },
    {
      path:'edit-product-sub-department/:id',
     component:EditProductSubDepartmentComponent
    },
    {
      path:'item-group',
     component:ItemGroupComponent
    },
    {
      path:'add-item-group',
     component:AddItemGroupComponent
    },
    {
      path:'edit-item-group/:id',
     component:EditItemGroupComponent
    },
    {
      path: 'item-account-creation',
      component:ItemAccountCreationComponent,
    },
    {
      path: 'add-item-account-creation',
      component:AddItemAccountCreationComponent,
    },
    {
      path: 'edit-item-account-creation/:id',
      component:EditItemAccountCreationComponent,
    },
    {
      path: 'test',
      component:TestComponent,
    },
    {
      path: 'buyer-profile',
      component:BuyerProfileComponent,
    },
    {
      path: 'add-buyer-profile',
      component:AddBuyerProfileComponent,
    },
    {
      path: 'edit-buyer-profile/:id',
      component:EditBuyerProfileComponent,
    },
    {
      path: 'Report',
      component:ReportComponent,
    },


    {
      path: 'supplier-profile',
      component:SupplierProfileComponent,
    },
    {
      path: 'add-supplier-profile',
      component:AddSupplierProfileComponent,
    },
    {
      path: 'edit-supplier-profile/:id',
      component:EditSupplierProfileComponent,
    },
    {
      path: 'tNA-task-percent',
      component:TNATaskPercentComponent,
    },
    {
      path: 'add-tNA-task-percent',
      component:AddTNATaskPercentComponent,
    },
    {
      path: 'edit-tNA-task-percent/:id',
      component:EditTNATaskPercentComponent,
    },
    {
      path: 'trims-costing-template',
      component:TrimsCostingTemplateComponent,
    },
    {
      path: 'add-trims-costing-template',
      component:AddTrimsCostingTemplateComponent,
    },
    {
      path: 'edit-trims-costing-template/:id',
      component:EditTrimsCostingTemplateComponent,
    },

    {
      path: 'sewing-line',
      component:SewingLineComponent,
    },
    {
      path: 'add-sewing-line',
      component:AddSewingLineComponent,
    },
    {
      path: 'edit-sewing-line/:id',
      component:EditSewingLineComponent,
    },
    {
      path: 'sewing-operation',
      component:SewingOperationComponent,
    },
    {
      path: 'add-sewing-operation',
      component:AddSewingOperationComponent,
    },
    {
      path: 'edit-sewing-operation/:id',
      component:EditSewingOperationComponent,
    },
    {
      path: 'machine-entrie',
      component:MachineEntrieComponent,
    },
    {
      path: 'add-machine-entrie',
      component:AddMachineEntrieComponent,
    },
    {
      path: 'edit-machine-entrie/:id',
      component:EditMachineEntrieComponent,
    },
    {
      path: 'production-floor',
      component:ProductionFloorComponent,
    },
    {
      path: 'add-production-floor',
      component:AddProductionFloorComponent,
    },
    {
      path: 'edit-production-floor/:id',
      component:EditProductionFloorComponent,
    },
    {
      path: 'sample-production-team',
      component:SampleProductionTeamComponent,
    },
    
    {
      path: 'add-sample-production-team',
      component:AddSampleProductionTeamComponent,
    },
    {
      path: 'edit-sample-production-team/:id',
      component:EditSampleProductionTeamComponent,
    },
    {
      path: 'yarn-count-determination',
      component:YarnCountDeterminationComponent,
    },
    {
      path: 'add-yarn-count-determination',
      component:AddYarnCountDeterminationComponent,
    },
    {
      path: 'edit-yarn-count-determination/:id',
      component:EditYarnCountDeterminationComponent,
    },
    {
      path: 'lab-test-rate-chart',
      component:LabTestRateChartComponent,
    },
    {
      path: 'add-lab-test-rate-chart',
      component:AddLabTestRateChartComponent,
    },
    {
      path: 'edit-lab-test-rate-chart/:id',
      component:EditLabTestRateChartComponent,
    },
    {
      path: 'marketing-team-info',
      component:MarketingTeamInfoComponent,
    },
    {
      path: 'add-marketing-team-info',
      component:AddMarketingTeamInfoComponent,
    },
    {
      path: 'edit-marketing-team-info/:id',
      component:EditMarketingTeamInfoComponent,
    },
    {
      path: 'member-info',
      component:MembersInfoComponent,
    },
    {
      path: 'add-member-info',
      component:AddMembersInfoComponent,
    },
    {
      path: 'edit-member-info/:id',
      component:EditMembersInfoComponent,
    },
    {
      path: 'add-capacity-calculation',
      component:AddCapacityCalculationComponent,
    },
    {
      path: 'knitting-charge',
      component:KnittingChargeComponent,
    },
    {
      path: 'add-knitting-charge',
      component:AddKnittingChargeComponent,
    },
    {
      path: 'edit-knitting-charge/:id',
      component:EditKnittingChargeComponent,
    },
    {
      path: 'finsih-gmts-capacity-calculation',
      component:FinishGmtsCapacityCalculationComponent,
    },
    {
      path: 'email-address-setup',
      component:EmailAddressSetupComponent,
    },
    {
      path: 'add-email-address-setup',
      component:AddEmailAddressSetupComponent,
    },
    {
      path: 'edit-email-address-setup/:id',
      component:EditEmailAddressSetupComponent,
    },
    {
      path: 'mail-recipient-group',
      component:MailRecipientGroupComponent,
    },
    {
      path: 'add-mail-recipient-group',
      component:AddMailRecipientGroupComponent,
    },
    {
      path: 'edit-mail-recipient-group/:id',
      component:EditMailRecipientGroupComponent,
    },
    {
      path: 'fast-react-intgration',
      component:FastReactIntgrationComponent,
    },
    {
      path: 'add-fast-react-intgration',
      component:AddFastReactIntgrationComponent,
    },
    {
      path: 'edit-fast-react-intgration/:id',
      component:EditFastReactIntgrationComponent,
    },
    {
      path: 'store-location',
      component:StoreLocationComponent,
    },
    {
      path: 'add-store-location',
      component:AddStoreLocationComponent,
    },
    {
      path: 'edit-store-location/:id',
      component:EditStoreLocationComponent,
    },
    {
      path: 'currency-conversion-rate',
      component:CurrencyConversionRateComponent,
    },
    {
      path: 'add-currency-conversion-rate',
      component:AddCurrencyConversionRateComponent,
    },
    {
      path: 'edit-currency-conversion-rate/:id',
      component:EditCurrencyConversionRateComponent,
    },
    {
      path: 'yarn-rate',
      component:YarnRateComponent,
    },    
    {
      path: 'add-yarn-rate',
      component:AddYarnRateComponent,
    },
    {
      path: 'edit-yarn-rate/:id',
      component:EditYarnRateComponent,
    },
    
    {
      path: 'YarnDyeingWOWithoutOrderMaster',
      component:YarnDyeingWOWithoutOrderMasterComponent,
    },    
    {
      path: 'add-YarnDyeingWOWithoutOrderMaster',
      component:AddYarnDyeingWOWithoutOrderMasterComponent,
    },
    {
      path: 'edit-YarnDyeingWOWithoutOrderMaster/:id',
      component:EditYarnDyeingWOWithoutOrderMasterComponent,
    },

    {
      path: 'YarnDyeingWOWithoutOrderDetails',
      component:YarnDyeingWOWithoutOrderDetailsComponent,
    },    
    {
      path: 'add-YarnDyeingWOWithoutOrderDetails',
      component:AddYarnDyeingWOWithoutOrderDetailsComponent,
    },
    {
      path: 'edit-YarnDyeingWOWithoutOrderDetails/:id',
      component:EditYarnDyeingWOWithoutOrderDetailsComponent,
    },
    {
      path: 'accounting-year',
      component:AccountingYearComponent,
    },    
    {
      path: 'add-accounting-year',
      component:AddAccountingYearComponent,
    },
    {
      path: 'edit-accounting-year/:id',
      component:EditAccountingYearComponent,
    },
    {
      path: 'add-shareholder',
      component:AddShareholderComponent,
    },
    {
      path: 'Yarn-Dyeing-Work-Order/:id',
      component:YarnDyeingWorkOrderComponent,
    },
    {
      path: 'show-Yarn-Dyeing-Work-Order',
      component:ShowYarnDyeingWorkOrderComponent,
    },

    {
      path: 'YarnDyeingWODetails/:id',
      component:YarnDyeingWODetailsComponent,
    },
    {
      path: 'show-YarnDyeingWODetails',
      component:ShowYarnDyeingWODetailsComponent,
    },
    {
      path: 'quotation-inquery',
      component:QuotationInqueryComponent,
    },
    {
      path: 'add-quotation-inquery',
      component:AddQuotationInqueryComponent,
    },
    {
      path: 'edit-quotation-inquery/:id',
      component:EditQuotationInqueryComponent,
    },
    {
      path: 'price-quotation',
      component:PricequotationComponent,
    },
    {
      path: 'add-price-quotation',
      component:AddpricequotationComponent,
    },
    {
      path: 'edit-price-quotaion/:id',
      component:EditpricequotationComponent,
    },
    {
      path: 'merchandising',
      component:MerchandisingComponent,
    },
    {
      path: 'user-mapping',
      component:UserMappingComponent,
    },
    {
      path: 'add-user-mapping',
      component:AddUserMappingComponent,
    },
    {
      path: 'edit-user-mapping/:id',
      component:EditUserMappingComponent,
    },
    {
      path: 'erp-Images',
      component:ErpImagesComponent,
    },
     {
    path: 'page-object-creator',
    component:PageobjectcreatorComponent,
  }, 
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 

exports: [RouterModule],
})
export class PagesRoutingModule {
}
