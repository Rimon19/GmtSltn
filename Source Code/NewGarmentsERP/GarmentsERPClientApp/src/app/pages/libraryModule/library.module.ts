import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YarnCountComponent } from './yarn-count/yarn-count.component';
import { YarnBrandComponent } from './yarn-brand/yarn-brand.component';
import { MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatSortModule, MatDialogModule, MatSnackBarModule, MatPaginatorModule, MatIconModule, MatTableModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbUserModule, NbButtonModule, NbTabsetModule, NbActionsModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbInputModule, NbTreeGridModule, NbDialogModule, NbWindowModule, NbDatepickerModule, NbTooltipModule, NbPopoverModule, NbCheckboxModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DataTableModule } from 'angular5-data-table';
import { AddYarnBrandComponent } from './yarn-brand/add-yarn-brand/add-yarn-brand.component';
import { YarnCountCreateComponent } from './yarn-count/yarn-count-create/yarn-count-create.component';
import { YarnCountEditComponent } from './yarn-count/yarn-count-edit/yarn-count-edit.component';
import { SizeEntryComponent } from './size-entry/size-entry.component';
import { SizeEntryCreateComponent } from './size-entry/size-entry-create/size-entry-create.component';
import { SizeEntryEditComponent } from './size-entry/size-entry-edit/size-entry-edit.component';
import { CompositionComponent } from './composition/composition.component';
import { CompositionCreateComponent } from './composition/composition-create/composition-create.component';
import { CompositionEditComponent } from './composition/composition-edit/composition-edit.component';
import { TrimsGroupComponent } from './trims-group/trims-group.component';
import { TrimsGroupCreateComponent } from './trims-group/trims-group-create/trims-group-create.component';
import { TrimsGroupEditComponent } from './trims-group/trims-group-edit/trims-group-edit.component';
import { CountryLocationMappingComponent } from './country-location-mapping/country-location-mapping.component';
import { AddCountryLocationMappingComponent } from './country-location-mapping/add-country-location-mapping/add-country-location-mapping.component';
import { EditCountryLocationMappingComponent } from './country-location-mapping/edit-country-location-mapping/edit-country-location-mapping.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { AddItemCategoryComponent } from './item-category/add-item-category/add-item-category.component';
import { EditItemCategoryComponent } from './item-category/edit-item-category/edit-item-category.component';
import { PartyTypeComponent } from './party-type/party-type.component';
import { AddPartyTypeComponent } from './party-type/add-party-type/add-party-type.component';
import { EditPartyTypeComponent } from './party-type/edit-party-type/edit-party-type.component';
import { TNATaskEntriesComponent } from './tnatask-entries/tnatask-entries.component';
import { AddTNATaskEntriesComponent } from './tnatask-entries/add-tnatask-entries/add-tnatask-entries.component';
import { EditTNATaskEntriesComponent } from './tnatask-entries/edit-tnatask-entries/edit-tnatask-entries.component';
import { TNATaskNameEntryComponent } from './tnatask-name-entry/tnatask-name-entry.component';
import { AddTNATaskNameEntryComponent } from './tnatask-name-entry/add-tnatask-name-entry/add-tnatask-name-entry.component';
import { EditTNATaskNameEntryComponent } from './tnatask-name-entry/edit-tnatask-name-entry/edit-tnatask-name-entry.component';
import { PageInfoComponent } from './page-info/page-info.component';
import { PageInfoCreateComponent } from './page-info/page-info-create/page-info-create.component';
import { PageInfoEditComponent } from './page-info/page-info-edit/page-info-edit.component';
import { TestComponent } from './test/test.component';
import { BrowserModule } from '@angular/platform-browser';
import { OtherPartyProfileComponent } from './other-party-profile/other-party-profile.component';
import { AddOtherPartyProfileComponent } from './other-party-profile/add-other-party-profile/add-other-party-profile.component';
import { EditOtherPartyProfileComponent } from './other-party-profile/edit-other-party-profile/edit-other-party-profile.component';
import { GroupProfileComponent } from './group-profile/group-profile.component';
import { AddGroupProfileComponent } from './group-profile/add-group-profile/add-group-profile.component';
import { EditGroupProfileComponent } from './group-profile/edit-group-profile/edit-group-profile.component';
import { DivisionProfileComponent } from './division-profile/division-profile.component';
import { AddDivisionProfilengComponent } from './division-profile/add-division-profileng/add-division-profileng.component';
import { EditDivisionProfilengComponent } from './division-profile/edit-division-profileng/edit-division-profileng.component';
import { DepartmentProfileComponent } from './department-profile/department-profile.component';
import { AddDepartmentProfileComponent } from './department-profile/add-department-profile/add-department-profile.component';
import { EditDepartmentProfileComponent } from './department-profile/edit-department-profile/edit-department-profile.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TermsNdConditionCreateComponent } from './terms-and-condition/terms-nd-condition-create/terms-nd-condition-create.component';
import { TermsNdConditionEditComponent } from './terms-and-condition/terms-nd-condition-edit/terms-nd-condition-edit.component';
import { ProfitCenterComponent } from './profit-center/profit-center.component';
import { AddProfitCenterComponent } from './profit-center/add-profit-center/add-profit-center.component';
import { EditProfitCenterComponent } from './profit-center/edit-profit-center/edit-profit-center.component';
import { SectionProfileComponent } from './section-profile/section-profile.component';
import { AddSectionProfileComponent } from './section-profile/add-section-profile/add-section-profile.component';
import { EditSectionProfileComponent } from './section-profile/edit-section-profile/edit-section-profile.component';
import { BodyPartEntryComponent } from './body-part-entry/body-part-entry.component';
import { DepoLocationMappingComponent } from './depo-location-mapping/depo-location-mapping.component';
import { DepoLocationMappingCreateComponent } from './depo-location-mapping/depo-location-mapping-create/depo-location-mapping-create.component';
import { DepoLocationMappingEditComponent } from './depo-location-mapping/depo-location-mapping-edit/depo-location-mapping-edit.component';
import { BodyPartCreateComponent } from './body-part-entry/body-part-create/body-part-create.component';
import { BodyPartEditComponent } from './body-part-entry/body-part-edit/body-part-edit.component';
import { GarmentsSampleEntrieComponent } from './garments-sample-entrie/garments-sample-entrie.component';
import { AddGarmentsSampleEntrieComponent } from './garments-sample-entrie/add-garments-sample-entrie/add-garments-sample-entrie.component';
import { EditGarmentsSampleEntrieComponent } from './garments-sample-entrie/edit-garments-sample-entrie/edit-garments-sample-entrie.component';
import { SafeUrlPipe } from '../safe-url.pipe';
// import { BuyerwiesseasonsComponent } from './buyerwiesseasons/buyerwiesseasons.component';
import { BuyerWiesSeasonComponent } from './buyer-wies-season/buyer-wies-season.component';
import { ItemGroupComponent } from './item-group/item-group.component';
import { AddItemGroupComponent } from './item-group/add-item-group/add-item-group.component';
import { EditItemGroupComponent } from './item-group/edit-item-group/edit-item-group.component';
import { ItemAccountCreationComponent } from './item-account-creation/item-account-creation.component';
import { AddItemAccountCreationComponent } from './item-account-creation/add-item-account-creation/add-item-account-creation.component';
import { EditItemAccountCreationComponent } from './item-account-creation/edit-item-account-creation/edit-item-account-creation.component';
import { GarmentsItemEntriesComponent } from './garments-item-entries/garments-item-entries.component';
import { AddGarmentsItemEntriesComponent } from './garments-item-entries/add-garments-item-entries/add-garments-item-entries.component';
import { EditGarmentsItemEntriesComponent } from './garments-item-entries/edit-garments-item-entries/edit-garments-item-entries.component';
import { MinLeadTimeSlabsComponent } from './min-lead-time-slabs/min-lead-time-slabs.component';
import { AddMinLeadTimeSlabsComponent } from './min-lead-time-slabs/add-min-lead-time-slabs/add-min-lead-time-slabs.component';
import { EditMinLeadTimeSlabsComponent } from './min-lead-time-slabs/edit-min-lead-time-slabs/edit-min-lead-time-slabs.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { AddBuyerProfileComponent } from './buyer-profile/add-buyer-profile/add-buyer-profile.component';
import { EditBuyerProfileComponent } from './buyer-profile/edit-buyer-profile/edit-buyer-profile.component';
import { FinancialParameterSetupComponent } from './financial-parameter-setup/financial-parameter-setup.component';
import { AddFinancialParameterSetupComponent } from './financial-parameter-setup/add-financial-parameter-setup/add-financial-parameter-setup.component';
import { EditFinancialParameterSetupComponent } from './financial-parameter-setup/edit-financial-parameter-setup/edit-financial-parameter-setup.component';
import { CapacityAllocationsComponent } from './capacity-allocations/capacity-allocations.component';
import { AddCapacityAllocationsComponent } from './capacity-allocations/add-capacity-allocations/add-capacity-allocations.component';
import { EditCapacityAllocationsComponent } from './capacity-allocations/edit-capacity-allocations/edit-capacity-allocations.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { AddSupplierProfileComponent } from './supplier-profile/add-supplier-profile/add-supplier-profile.component';
import { EditSupplierProfileComponent } from './supplier-profile/edit-supplier-profile/edit-supplier-profile.component';
import { ColourEntryComponent } from './colour-entry/colour-entry.component';
import { AddColourEntryComponent } from './colour-entry/add-colour-entry/add-colour-entry.component';
import { EditColourEntryComponent } from './colour-entry/edit-colour-entry/edit-colour-entry.component';
import { ProductSubDepartmentComponent } from './product-sub-department/product-sub-department.component';
import { AddProductSubDepartmentComponent } from './product-sub-department/add-product-sub-department/add-product-sub-department.component';
import { EditProductSubDepartmentComponent } from './product-sub-department/edit-product-sub-department/edit-product-sub-department.component';
import { AddBuyerWiesSeasonComponent } from './buyer-wies-season/add-buyer-wies-season/add-buyer-wies-season.component';
import { EditBuyerWiesSeasonComponent } from './buyer-wies-season/edit-buyer-wies-season/edit-buyer-wies-season.component';
import { TNATaskPercentComponent } from './tnatask-percent/tnatask-percent.component';
import { AddTNATaskPercentComponent } from './tnatask-percent/add-tnatask-percent/add-tnatask-percent.component';
import { EditTNATaskPercentComponent } from './tnatask-percent/edit-tnatask-percent/edit-tnatask-percent.component';
import { SewingLineComponent } from './sewing-line/sewing-line.component';
import { AddSewingLineComponent } from './sewing-line/add-sewing-line/add-sewing-line.component';
import { EditSewingLineComponent } from './sewing-line/edit-sewing-line/edit-sewing-line.component';
import { SewingOperationComponent } from './sewing-operation/sewing-operation.component';
import { AddSewingOperationComponent } from './sewing-operation/add-sewing-operation/add-sewing-operation.component';
import { EditSewingOperationComponent } from './sewing-operation/edit-sewing-operation/edit-sewing-operation.component';
import { MachineEntrieComponent } from './machine-entrie/machine-entrie.component';
import { AddMachineEntrieComponent } from './machine-entrie/add-machine-entrie/add-machine-entrie.component';
import { EditMachineEntrieComponent } from './machine-entrie/edit-machine-entrie/edit-machine-entrie.component';
import { ProductionFloorComponent } from './production-floor/production-floor.component';
import { AddProductionFloorComponent } from './production-floor/add-production-floor/add-production-floor.component';
import { EditProductionFloorComponent } from './production-floor/edit-production-floor/edit-production-floor.component';
import { SampleProductionTeamComponent } from './sample-production-team/sample-production-team.component';
import { AddSampleProductionTeamComponent } from './sample-production-team/add-sample-production-team/add-sample-production-team.component';
import { EditSampleProductionTeamComponent } from './sample-production-team/edit-sample-production-team/edit-sample-production-team.component';
import { JournalSetupComponent } from './journal-setup/journal-setup.component';
import { AddJournalSetupComponent } from './journal-setup/add-journal-setup/add-journal-setup.component';
import { EditJournalSetupComponent } from './journal-setup/edit-journal-setup/edit-journal-setup.component';
//import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
//import { AddSupplierProfileComponent } from './supplier-profile/add-supplier-profile/add-supplier-profile.component';
//import { EditSupplierProfileComponent } from './supplier-profile/edit-supplier-profile/edit-supplier-profile.component';
import { YarnCountDeterminationComponent } from './yarn-count-determination/yarn-count-determination.component';
import { AddYarnCountDeterminationComponent } from './yarn-count-determination/add-yarn-count-determination/add-yarn-count-determination.component';
import { EditYarnCountDeterminationComponent } from './yarn-count-determination/edit-yarn-count-determination/edit-yarn-count-determination.component';
import { LabTestRateChartComponent } from './lab-test-rate-chart/lab-test-rate-chart.component';
import { AddLabTestRateChartComponent } from './lab-test-rate-chart/add-lab-test-rate-chart/add-lab-test-rate-chart.component';
import { EditLabTestRateChartComponent } from './lab-test-rate-chart/edit-lab-test-rate-chart/edit-lab-test-rate-chart.component';
import { TrimsCostingTemplateComponent } from './trims-costing-template/trims-costing-template.component';
import { AddTrimsCostingTemplateComponent } from './trims-costing-template/add-trims-costing-template/add-trims-costing-template.component';
import { EditTrimsCostingTemplateComponent } from './trims-costing-template/edit-trims-costing-template/edit-trims-costing-template.component';
import { MarketingTeamInfoComponent } from './marketing-team-info/marketing-team-info.component';
import { MembersInfoComponent } from './members-info/members-info.component';
import { AddMarketingTeamInfoComponent } from './marketing-team-info/add-marketing-team-info/add-marketing-team-info.component';
import { EditMarketingTeamInfoComponent } from './marketing-team-info/edit-marketing-team-info/edit-marketing-team-info.component';
import { AddMembersInfoComponent } from './members-info/add-members-info/add-members-info.component';
import { EditMembersInfoComponent } from './members-info/edit-members-info/edit-members-info.component';
import { CapacityCalculationComponent } from './capacity-calculation/capacity-calculation.component';
import { AddCapacityCalculationComponent } from './capacity-calculation/add-capacity-calculation/add-capacity-calculation.component';
import { EditCapacityCalculationComponent } from './capacity-calculation/edit-capacity-calculation/edit-capacity-calculation.component';
import { FinishGmtsCapacityCalculationComponent } from './finish-gmts-capacity-calculation/finish-gmts-capacity-calculation.component';
import { KnittingChargeComponent } from './knitting-charge/knitting-charge.component';
import { AddKnittingChargeComponent } from './knitting-charge/add-knitting-charge/add-knitting-charge.component';
import { EditKnittingChargeComponent } from './knitting-charge/edit-knitting-charge/edit-knitting-charge.component';
import { DyeingAndFinishingChargeComponent } from './dyeing-and-finishing-charge/dyeing-and-finishing-charge.component';
import { AddDyeingAndFinishingChargeComponent } from './dyeing-and-finishing-charge/add-dyeing-and-finishing-charge/add-dyeing-and-finishing-charge.component';
import { EditDyeingAndFinishingChargeComponent } from './dyeing-and-finishing-charge/edit-dyeing-and-finishing-charge/edit-dyeing-and-finishing-charge.component';
import { EmailAddressSetupComponent } from './email-address-setup/email-address-setup.component';
import { AddEmailAddressSetupComponent } from './email-address-setup/add-email-address-setup/add-email-address-setup.component';
import { EditEmailAddressSetupComponent } from './email-address-setup/edit-email-address-setup/edit-email-address-setup.component';
import { MailRecipientGroupComponent } from './mail-recipient-group/mail-recipient-group.component';
import { AddMailRecipientGroupComponent } from './mail-recipient-group/add-mail-recipient-group/add-mail-recipient-group.component';
import { EditMailRecipientGroupComponent } from './mail-recipient-group/edit-mail-recipient-group/edit-mail-recipient-group.component';
import { FastReactIntgrationComponent } from './fast-react-intgration/fast-react-intgration.component';
import { AddFastReactIntgrationComponent } from './fast-react-intgration/add-fast-react-intgration/add-fast-react-intgration.component';
import { EditFastReactIntgrationComponent } from './fast-react-intgration/edit-fast-react-intgration/edit-fast-react-intgration.component';
import { StoreLocationComponent } from './store-location/store-location.component';
import { AddStoreLocationComponent } from './store-location/add-store-location/add-store-location.component';
import { EditStoreLocationComponent } from './store-location/edit-store-location/edit-store-location.component';
import { CurrencyConversionRateComponent } from './currency-conversion-rate/currency-conversion-rate.component';
import { AddCurrencyConversionRateComponent } from './currency-conversion-rate/add-currency-conversion-rate/add-currency-conversion-rate.component';
import { EditCurrencyConversionRateComponent } from './currency-conversion-rate/edit-currency-conversion-rate/edit-currency-conversion-rate.component';
import { YarnRateComponent } from './yarn-rate/yarn-rate.component';
import { AddYarnRateComponent } from './yarn-rate/add-yarn-rate/add-yarn-rate.component';
import { EditYarnRateComponent } from './yarn-rate/edit-yarn-rate/edit-yarn-rate.component';
import { AccountingYearComponent } from './accounting-year/accounting-year.component';
import { AddAccountingYearComponent } from './accounting-year/add-accounting-year/add-accounting-year.component';
import { EditAccountingYearComponent } from './accounting-year/edit-accounting-year/edit-accounting-year.component';
import { ShareholderComponent } from './shareholder/shareholder.component';
import { AddShareholderComponent } from './shareholder/add-shareholder/add-shareholder.component';
import { EditShareholderComponent } from './shareholder/edit-shareholder/edit-shareholder.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { AddEmployeeInfoComponent } from './employee-info/add-employee-info/add-employee-info.component';
import { EditEmployeeInfoComponent } from './employee-info/edit-employee-info/edit-employee-info.component';
import { ReportSettingComponent } from './report-setting/report-setting.component';
import { AddReportSettingComponent } from './report-setting/add-report-setting/add-report-setting.component';
import { EditReportSettingComponent } from './report-setting/edit-report-setting/edit-report-setting.component';
import { MerchandisingComponent } from './VariableSettings/merchandising/merchandising.component';
import { ProductionComponent } from './VariableSettings/production/production.component';
import { InventoryComponent } from './VariableSettings/inventory/inventory.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { AddBankInfoComponent } from './bank-info/add-bank-info/add-bank-info.component';
import { EditBankInfoComponent } from './bank-info/edit-bank-info/edit-bank-info.component';
import { VariableListComponent } from './variable-list/variable-list.component';
import { AddVariableListComponent } from './variable-list/add-variable-list/add-variable-list.component';
import { EditVariableListComponent } from './variable-list/edit-variable-list/edit-variable-list.component';
import { CommercialComponent } from './VariableSettings/commercial/commercial.component';
import { NgKnifeModule } from 'ng-knife';
import { SubcontractComponent } from './VariableSettings/subcontract/subcontract.component';
import { PlanningComponent } from './VariableSettings/planning/planning.component';
import { TnaMailSetupComponent } from './tna-mail-setup/tna-mail-setup.component';
import { AddtnaMailSetupComponent } from './tna-mail-setup/addtna-mail-setup/addtna-mail-setup.component';
import { EdittnaMailSetupComponent } from './tna-mail-setup/edittna-mail-setup/edittna-mail-setup.component';
import { FastreactComparisonComponent } from './fastreact-comparison/fastreact-comparison.component';
import { AddFastreactComparisonComponent } from './fastreact-comparison/add-fastreact-comparison/add-fastreact-comparison.component';
import { EditFastreactComparisonComponent } from './fastreact-comparison/edit-fastreact-comparison/edit-fastreact-comparison.component';
import { ReportComponent } from './report/report.component';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { EditYarnBrandComponent } from './yarn-brand/edit-yarn-brand/edit-yarn-brand.component';

// import { CasecaddingDDLComponent } from './casecadding-ddl/casecadding-ddl.component';
@NgModule({
  declarations: [
    YarnCountComponent, 
    YarnCountCreateComponent,
    YarnCountEditComponent,
    SizeEntryComponent,
    YarnBrandComponent,
    AddYarnBrandComponent,
    SizeEntryCreateComponent,
    SizeEntryEditComponent,
    CompositionComponent,
    CompositionCreateComponent,
    CompositionEditComponent,
    CountryLocationMappingComponent,
    AddCountryLocationMappingComponent,
    EditCountryLocationMappingComponent,
    ItemCategoryComponent,
    AddItemCategoryComponent,
    EditItemCategoryComponent,
    PartyTypeComponent,
    AddPartyTypeComponent,
    EditPartyTypeComponent,
    TNATaskEntriesComponent,
    AddTNATaskEntriesComponent,
    EditTNATaskEntriesComponent,
    TNATaskNameEntryComponent,
    AddTNATaskNameEntryComponent,
    EditTNATaskNameEntryComponent,
    TrimsGroupComponent,
    TrimsGroupCreateComponent,
    TrimsGroupEditComponent,
    PageInfoComponent,
    PageInfoCreateComponent,
    PageInfoEditComponent,
    TestComponent,
    OtherPartyProfileComponent,
    AddOtherPartyProfileComponent,
    EditOtherPartyProfileComponent,
    GroupProfileComponent,
    AddGroupProfileComponent,
    EditGroupProfileComponent,
    DivisionProfileComponent,
    AddDivisionProfilengComponent,
    EditDivisionProfilengComponent,
    DepartmentProfileComponent,
    AddDepartmentProfileComponent,
    EditDepartmentProfileComponent,
    TermsAndConditionComponent,
    TermsNdConditionCreateComponent,
    TermsNdConditionEditComponent,
    ProfitCenterComponent,
    AddProfitCenterComponent,
    EditProfitCenterComponent,
    SectionProfileComponent,
    AddSectionProfileComponent,
    EditSectionProfileComponent,
    BodyPartEntryComponent,
    DepoLocationMappingComponent,
    DepoLocationMappingCreateComponent,
    DepoLocationMappingEditComponent,
    BodyPartCreateComponent,
    BodyPartEditComponent,
    GarmentsSampleEntrieComponent,
    AddGarmentsSampleEntrieComponent,
    EditGarmentsSampleEntrieComponent,
    ItemGroupComponent,
    AddItemGroupComponent,
    EditItemGroupComponent,
    ItemAccountCreationComponent,
    AddItemAccountCreationComponent,
    EditItemAccountCreationComponent,
    EditItemGroupComponent,
    GarmentsItemEntriesComponent,
    AddGarmentsItemEntriesComponent,
    EditGarmentsItemEntriesComponent,
    MinLeadTimeSlabsComponent,
    AddMinLeadTimeSlabsComponent,
    EditMinLeadTimeSlabsComponent,
    BuyerProfileComponent,
    AddBuyerProfileComponent,
    EditBuyerProfileComponent,
    EditMinLeadTimeSlabsComponent,
    FinancialParameterSetupComponent,
    AddFinancialParameterSetupComponent,
    EditFinancialParameterSetupComponent,
    CapacityAllocationsComponent,
    AddCapacityAllocationsComponent,
    EditCapacityAllocationsComponent,
    EditGarmentsSampleEntrieComponent,
    SafeUrlPipe,
    BuyerWiesSeasonComponent,
    BuyerWiesSeasonComponent,
    BuyerWiesSeasonComponent,
    BuyerWiesSeasonComponent,
    EditBuyerProfileComponent,
    SupplierProfileComponent,
    AddSupplierProfileComponent,
    EditSupplierProfileComponent,
    EditCapacityAllocationsComponent,
    ColourEntryComponent,
    AddColourEntryComponent,
    EditColourEntryComponent,
    ProductSubDepartmentComponent,
    AddProductSubDepartmentComponent,
    EditProductSubDepartmentComponent,
    AddBuyerWiesSeasonComponent,
    EditBuyerWiesSeasonComponent,
    TNATaskPercentComponent,
    AddTNATaskPercentComponent,
    EditTNATaskPercentComponent,
    SewingLineComponent,
    AddSewingLineComponent,
    EditSewingLineComponent,
    SewingOperationComponent,
    AddSewingOperationComponent,
    EditSewingOperationComponent,
    MachineEntrieComponent,
    AddMachineEntrieComponent,
    EditMachineEntrieComponent,
    ProductionFloorComponent,
    AddProductionFloorComponent,
    EditProductionFloorComponent,
    SampleProductionTeamComponent,
    AddSampleProductionTeamComponent,
    EditSampleProductionTeamComponent,
    SupplierProfileComponent,
    AddSupplierProfileComponent,
    EditSupplierProfileComponent,
    YarnCountDeterminationComponent,
    AddYarnCountDeterminationComponent,
    EditYarnCountDeterminationComponent,
    LabTestRateChartComponent,
    AddLabTestRateChartComponent,
    EditLabTestRateChartComponent,
    EditYarnCountDeterminationComponent,
    TrimsCostingTemplateComponent,
    AddTrimsCostingTemplateComponent,
    EditTrimsCostingTemplateComponent,
    MarketingTeamInfoComponent,
    MembersInfoComponent,
    AddMarketingTeamInfoComponent,
    EditMarketingTeamInfoComponent,
    AddMembersInfoComponent,
    EditMembersInfoComponent,
    CapacityCalculationComponent,
    AddCapacityCalculationComponent,
    EditCapacityCalculationComponent,
    FinishGmtsCapacityCalculationComponent,
    JournalSetupComponent,
    AddJournalSetupComponent,
    EditJournalSetupComponent,
    KnittingChargeComponent,
    AddKnittingChargeComponent,
    EditKnittingChargeComponent,
    DyeingAndFinishingChargeComponent,
    AddDyeingAndFinishingChargeComponent,
    EditDyeingAndFinishingChargeComponent,
    EmailAddressSetupComponent,
    AddEmailAddressSetupComponent,
    EditEmailAddressSetupComponent,
    MailRecipientGroupComponent,
    AddMailRecipientGroupComponent,
    EditMailRecipientGroupComponent,
    FastReactIntgrationComponent,
    AddFastReactIntgrationComponent,
    EditFastReactIntgrationComponent,
    StoreLocationComponent,
    AddStoreLocationComponent,
    EditStoreLocationComponent,
    CurrencyConversionRateComponent,
    AddCurrencyConversionRateComponent,
    EditCurrencyConversionRateComponent,
    EditKnittingChargeComponent,
    YarnRateComponent,
    AddYarnRateComponent,
    EditYarnRateComponent,
    AccountingYearComponent,
    AddAccountingYearComponent,
    EditAccountingYearComponent,
    ShareholderComponent,
    AddShareholderComponent,
    EditShareholderComponent,
    EditCurrencyConversionRateComponent,
    EmployeeInfoComponent,
    AddEmployeeInfoComponent,
    EditEmployeeInfoComponent,
 
    ReportSettingComponent,
    AddReportSettingComponent,
    EditReportSettingComponent,
    BankInfoComponent,
    AddBankInfoComponent,
    EditBankInfoComponent,
    VariableListComponent,
    AddVariableListComponent,
    EditVariableListComponent,
    EditReportSettingComponent,
    MerchandisingComponent,
    ProductionComponent,
    InventoryComponent,
    CommercialComponent,
    SubcontractComponent,
    PlanningComponent,
    TnaMailSetupComponent,
    AddtnaMailSetupComponent,
    EdittnaMailSetupComponent,
    FastreactComparisonComponent,
    AddFastreactComparisonComponent,
    EditFastreactComparisonComponent,
    ReportComponent,
    SafeHtmlPipe,
    EditYarnBrandComponent
    // CasecaddingDDLComponent
  ],
  imports: [
  //  BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
    MatCheckboxModule,
    HttpClientModule,
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
    NgMultiSelectDropDownModule.forRoot(),
    NgKnifeModule
    
  ]

    
})
export class LibraryModule { }
