using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using GarmentsERP.Model;
using GarmentsERP.Model.MarchandisingModule;
using GarmentsERP.Model.LibraryModule;
using GarmentsERP.Model.Shared;
using GarmentsERP.Model.PlanningModule;
using GarmentsERP.Model.MarchandisingModule.OfferingCost;
namespace GarmentsERP.Model
{
    public partial class GarmentERPContext:DbContext
    {
        public GarmentERPContext()
        {
        }

        public GarmentERPContext(DbContextOptions<GarmentERPContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ConversionCostProcess> ConversionCostProcess { get; set; }
        public virtual DbSet<FabricCost> FabricCost { get; set; }
        public virtual DbSet<FabricDesPreCost> FabricDesPreCost { get; set; }
        public virtual DbSet<InputPannelPodetails> InputPannelPodetails { get; set; }
        public virtual DbSet<OrderItem> OrderItem { get; set; }
        public virtual DbSet<PreCosting> PreCosting { get; set; }
        public virtual DbSet<SizePannelPodetails> Size_Pannel_PODetails { get; set; }
        public virtual DbSet<Suplier> Suplier { get; set; }
        public virtual DbSet<Suplyitem> Suplyitem { get; set; }
        public virtual DbSet<TblAgentInfo> tblAgentInfo { get; set; }
     
        public virtual DbSet<TblCompanyInfo> tblCompanyInfo { get; set; }
       
     
        public virtual DbSet<TblDepartInfo> TblDepartInfo { get; set; }
        public virtual DbSet<TblInitialOrder> tblInitialOrder { get; set; }
        public virtual DbSet<TblLocationInfo> tblLocationInfo { get; set; }
        public virtual DbSet<TblOrderUomInfo> tblOrderUomInfo { get; set; }
        public virtual DbSet<TblPackingInfo> tblPackingInfo { get; set; }
        public virtual DbSet<TblPodetailsInfro> tblPODetailsInfro { get; set; }            
        public virtual DbSet<TblProductCategoryInfo> tblProductCategoryInfo { get; set; }
        public virtual DbSet<TblProductionDeptInfo> tblProductionDeptInfo { get; set; }
        public virtual DbSet<TblRegionInfo> tblRegionInfo { get; set; }
        public virtual DbSet<TblSeasonInfo> tblSeasonInfo { get; set; }
        public virtual DbSet<TblShipmentModeInfo> tblShipmentModeInfo { get; set; }
        public virtual DbSet<TblSubDeptInfo> tblSubDeptInfo { get; set; }

        public virtual DbSet<RequiredEmbellishment> RequiredEmbellishment { get; set; }

        public virtual DbSet<ServiceBookingForKnitting> ServiceBookingForKnitting { get; set; }
        public virtual DbSet<ServiceBookingForKnitingDetail> ServiceBookingForKnitingDetail { get; set; }
        public virtual DbSet<EmbellishmentWorkOrderV2> EmbellishmentWorkOrderV2 { get; set; }
        public virtual DbSet<EmbellishmentWorkOrderV2Details> EmbellishmentWorkOrderV2Details { get; set; }
        public virtual DbSet<MultiJobWiseServiceBookingKnitting> MultiJobWiseServiceBookingKnitting { get; set; }
        public virtual DbSet<MultiJobWSBKnittingDetails> MultiJobWSBKnittingDetails { get; set; }

        public virtual DbSet<TblUserInfo> tblUserInfo { get; set; }
        public virtual DbSet<TblUserTypeInfo> TblUserTypeInfo { get; set; }
        public virtual DbSet<YarnComp1> YarnComp1 { get; set; }
        public virtual DbSet<KnittingCharge> KnittingCharge { get; set; }
        public virtual DbSet<YarnCostPreCosting> YarnCostPreCosting { get; set; }
        public virtual DbSet<YarnCount> YarnCount { get; set; }
        public virtual DbSet<yarnBrandInfo> YarnBrand { get; set; }      
        public virtual DbSet<countryLocationMapping> CountryLocationMapping { get; set; }      
        public virtual DbSet<ItemCategory> ItemCategory { get; set; }                     
        public virtual DbSet<PartyType> PartyType { get; set; }                     
        public virtual DbSet<DyeingAndFinishingCharge> DyeingAndFinishingCharge { get; set; }                     
        public virtual DbSet<TNATaskNameEntry> TNATaskNameEntry { get; set; }                     
        public virtual DbSet<TNATaskEntry> TNATaskEntry { get; set; }                     
        public virtual DbSet<OtherPartyProfile> OtherPartyProfile { get; set; }                     
        public virtual DbSet<GroupProfile> GroupProfile{ get; set; }                     
        public virtual DbSet<DepartmentProfile> DepartmentProfile { get; set; }                     
        public virtual DbSet<DivisionProfile> DivisionProfile { get; set; }                     
        public virtual DbSet<SectionProfile> SectionProfile { get; set; }                     
        public virtual DbSet<ProfitCenter> ProfitCenter { get; set; }                     
        public virtual DbSet<JournalSetup> JournalSetup { get; set; }                     
        public virtual DbSet<GarmentsSampleEntry> GarmentsSampleEntry { get; set; }                     
        public virtual DbSet<GarmentsItemEntry> GarmentsItemEntry { get; set; }                     
        public virtual DbSet<MinLeadTimeSlab> MinLeadTimeSlab { get; set; }                     
        public virtual DbSet<FinancialParameterSetup> FinancialParameterSetup { get; set; }
        public virtual DbSet<CapacityAllocation> CapacityAllocation { get; set; }
        public virtual DbSet<ProductSubDepartment> ProductSubDepartment { get; set; }
        public virtual DbSet<TNATaskPercent> TNATaskPercent { get; set; }
        public virtual DbSet<ColourEntry> ColourEntry { get; set; }
        public virtual DbSet<Upload> Upload { get; set; }                     
        public virtual DbSet<YarnType> YarnType { get; set; }
        public virtual DbSet<CommissionCostPreCosting> CommissionCostPreCosting { get; set; }
     //   public virtual DbSet<CommercialCost> CommercialCost { get; set; }
       
        public virtual DbSet<ItemDetailsOrderEntry> item_details_order_entry { get; set; }
        public virtual DbSet<AvgGreyConsFabricCost> AvgGreyConsFabricCost { get; set; }
       
        public virtual DbSet<CostComponentsMaster> CostComponentsMaster { get; set; }
        public virtual DbSet<CostComponenetsMasterDetails> CostComponenetsMasterDetails { get; set; }
        public virtual DbSet<SizeEntry> SizeEntry { get; set; }
        
        public virtual DbSet<TrimsGroup> TrimsGroup { get; set; }
        public virtual DbSet<PageInfo> PageInfo { get; set; }
        public virtual DbSet<BuyerWiesSeason> buyerWiesSeason { get; set; }
        public virtual DbSet<EmailAddressSetup> EmailAddressSetup { get; set; }
        public virtual DbSet<MailRecipientGroup> MailRecipientGroup { get; set; }
        public virtual DbSet<FastReactIntgration> FastReactIntgration { get; set; }
        public virtual DbSet<CurrencyConversionRate> CurrencyConversionRate { get; set; }
        public virtual DbSet<StoreLocation> StoreLocation { get; set; }
        public virtual DbSet<EmployeeInfo> EmployeeInfo { get; set; }
        public virtual DbSet<ReportSetting> ReportSetting { get; set; }
        public virtual DbSet<YarnCost> YarnCost { get; set; }
        public virtual DbSet<CommercialCosts> CommercialCost { get; set; }
        public virtual DbSet<SalesForecastEntry> SalesForecastEntry { get; set; }
        public virtual DbSet<SalesForecastEntryDetails> SalesForecastEntryDetails { get; set; }
        public virtual DbSet<SampleDevelopmentEntry> SampleDevelopmentEntry { get; set; }
        public virtual DbSet<SizeDits> SizeDits { get; set; }
        public virtual DbSet<QuotationInquery> QuotationInquery { get; set; }
        public virtual DbSet<TrimCost> TrimCost { get; set; }
        public virtual DbSet<WashCost> WashCost { get; set; }
        public virtual DbSet<ConversionCostForPreCost> ConversionCostForPreCost { get; set; }
        public virtual DbSet<BankInfo> BankInfo { get; set; }
        public virtual DbSet<AccountInfo> AccountInfo { get; set; }
        public virtual DbSet<TnaMailSetup> TnaMailSetup { get; set; }

        public virtual DbSet<VariableListTable> VariableListTable { get; set; }
        public virtual DbSet<ERPModule> ERPModule { get; set; }
        public virtual DbSet<AccountType> AccountType { get; set; }

        public virtual DbSet<FabricServiceBooking> FabricServiceBooking { get; set; }
        public virtual DbSet<YarnDyeingWOWithoutOrderDetail> YarnDyeingWOWithoutOrderDetail { get; set; }
        public virtual DbSet<YarnDyeingWOWithoutOrderMaster> YarnDyeingWOWithoutOrderMaster { get; set; }
        public virtual DbSet<YarnDyeingWorkOrder> YarnDyeingWorkOrder { get; set; }
        public virtual DbSet<YarnDyeingWoDetail> YarnDyeingWoDetail { get; set; }
        public virtual DbSet<BuyerWiesSeason> BuyerWiesSeason { get; set; }
        public virtual DbSet<SampleDevelopmentOrderDetails> SampleDevelopmentOrderDetails { get; set; }


        //static features
        public virtual DbSet<UOM> UOM { get; set; }
        public virtual DbSet<DiscountMethod> DiscountMethod { get; set; }
        public virtual DbSet<BodyPartType> BodyPartType { get; set; }
        public virtual DbSet<CommercialInvoice> CommercialInvoice { get; set; }
        public virtual DbSet<FabricNature> FabricNature { get; set; }
        public virtual DbSet<ColorRange> ColorRange { get; set; }
        public virtual DbSet<SampleType> SampleType { get; set; }
        public virtual DbSet<ProductCategory> ProductCategory { get; set; }
        public virtual DbSet<ProductType> ProductType { get; set; }
        public virtual DbSet<SewingLine> SewingLine { get; set; }
        public virtual DbSet<SewingOperation> SewingOperation { get; set; }
        public virtual DbSet<MachineEntry> MachineEntry { get; set; }
        public virtual DbSet<ProductionFloor> ProductionFloor { get; set; }
        public virtual DbSet<SampleProductionTeam> SampleProductionTeam { get; set; }
        public virtual DbSet<LabTestRateChart> LabTestRateChart { get; set; }
        public virtual DbSet<Years> Years { get; set; }
        public virtual DbSet<Months> Months { get; set; }
        public virtual DbSet<Resources> Resources { get; set; }
        public virtual DbSet<ProductionProcess> ProductionProcess { get; set; }
        public virtual DbSet<JournalType> JournalType { get; set; }
        public virtual DbSet<Typpe> Type { get; set; }
        public virtual DbSet<Religion> Religion { get; set; }
        public virtual DbSet<BloodGroup> BloodGroup { get; set; }
        public virtual DbSet<EmployeeCategory> EmployeeCategory { get; set; }
        public virtual DbSet<EmpCategory> EmpCategory { get; set; }
        public virtual DbSet<EmpDesignation> EmpDesignation { get; set; }
        public virtual DbSet<EmpAdditionalDesignation> EmpAdditionalDesignation { get; set; }
        public virtual DbSet<DesignationLebel> DesignationLebel { get; set; }
        public virtual DbSet<Designation> Designation { get; set; }
        public virtual DbSet<FunctionalSuperior> FunctionalSuperior { get; set; }
        public virtual DbSet<AdminSuperior> AdminSuperior { get; set; }
        public virtual DbSet<Floor> Floor { get; set; }
        public virtual DbSet<Division> Division { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Section> Section { get; set; }
        public virtual DbSet<LineNo> LineNo { get; set; }
        public virtual DbSet<Report> Report { get; set; }
        public virtual DbSet<ReportFormat> ReportFormat { get; set; }
        public virtual DbSet<Module> Module { get; set; }
        public virtual DbSet<TermsNCondition> TermsNCondition { get; set; }
        public virtual DbSet<TermsNConditionSubTable> TermsNConditionSubTable { get; set; }
        public virtual DbSet<BodyPartEntry> BodyPartEntry { get; set; }
        public virtual DbSet<DepoLocationMapping> DepoLocationMapping { get; set; }
        public virtual DbSet<ItemGroup> ItemGroup { get; set; }
        public virtual DbSet<ItemAccountCreation> ItemAccountCreation { get; set; }
        public virtual DbSet<BuyerProfile> BuyerProfile { get; set; }
        public virtual DbSet<SupplierProfile> SupplierProfile { get; set; }
        public virtual DbSet<YarnCountDetermination> YarnCountDetermination { get; set; }
        public virtual DbSet<YarnCountDeterminationChild> YarnCountDeterminationChild { get; set; }
        public virtual DbSet<TrimsCostingTemplate> TrimsCostingTemplate { get; set; }
        public virtual DbSet<MarketingTeamInfo> MarketingTeamInfo { get; set; }
        public virtual DbSet<MemberInfo> MemberInfo { get; set; }
        public virtual DbSet<CapacityCalculation> CapacityCalculation { get; set; }
        public virtual DbSet<CapacityCalculationMonthly> CapacityCalculationMonthly { get; set; }
        public virtual DbSet<CapacityCalculationYearly> CapacityCalculationYearly { get; set; }
        public virtual DbSet<YarnRate> YarnRate { get; set; }
        public virtual DbSet<AccountingYear> AccountingYear { get; set; }
        public virtual DbSet<AccountingYearSubInfo> AccountingYearSubInfo { get; set; }
        public virtual DbSet<Shareholder> Shareholder { get; set; }
        public virtual DbSet<ShareholderShareDetails> ShareholderShareDetails { get; set; }
        public DbSet<ShareholderNomineeDetails> ShareholderNomineeDetails { get; set; }
        public DbSet<ConsumptionEntryForm> ConsumptionEntryForm { get; set; }
        public DbSet<VariableSettingsTable> VariableSettingsTable { get; set; }
        public DbSet<CommissionCost> CommissionCost { get; set; }
        public DbSet<EmbellishmentCost> EmbellishmentCost { get; set; }
        public DbSet<EmbellishmentType> EmbellishmentType { get; set; }   
       public DbSet<UserMapping> UserMapping { get; set; }        
       public DbSet<ErpImages> ErpImages { get; set; }        
       public DbSet<MultipleJobWiseTrimsBookingV2> MultipleJobWiseTrimsBookingV2 { get; set; }        
       public DbSet<ShortTrimsBooking> ShortTrimsBooking { get; set; }        
        public DbSet<GarmentsERP.Model.LibraryModule.ColorType> ColorType { get; set; }
        public DbSet<SampleFabricBookingWithoutOrderMaster> SampleFabricBookingWithoutOrderMaster { get; set; }
        public DbSet<SampleFabricBookingWithoutorderDetails> SampleFabricBookingWithoutorderDetails { get; set; }
        public DbSet<MultipleJobWiseShortTrimsBookingV2> MultipleJobWiseShortTrimsBookingV2 { get; set; }
        public DbSet<MultipleJobWiseEmbellishmentWorkOrder> MultipleJobWiseEmbellishmentWorkOrder { get; set; }
        public DbSet<ServiceBookingForAOPWithoutOrder> ServiceBookingForAOPWithoutOrder { get; set; }
        public DbSet<MainFabricBookingV2> MainFabricBookingV2 { get; set; }
        public DbSet<PartialFabricBooking> PartialFabricBooking { get; set; }
        public DbSet<SampleFabricBookingWithorder> SampleFabricBookingWithorder { get; set; }
        public DbSet<ServiceBookingForAOPWithoutOrderDetails> ServiceBookingForAOPWithoutOrderDetails { get; set; }
        public DbSet<ServiceBookingForAOPV2> ServiceBookingForAOPV2 { get; set; }
        public DbSet<ServiceBookingForDyeing> ServiceBookingForDyeing { get; set; }
        public DbSet<ShortFabricBooking> ShortFabricBooking { get; set; }
        public DbSet<ServiceBookingForKnitingandDyeingWithoutOrder> ServiceBookingForKnitingandDyeingWithoutOrder { get; set; }
        public DbSet<ServiceBookingForKnitingandDyeingWithoutOrderDetails> ServiceBookingForKnitingandDyeingWithoutOrderDetails { get; set; }
        public DbSet<SampleRequisitionWithBooking> SampleRequisitionWithBooking { get; set; }
        public DbSet<SampleFabricBooking> SampleFabricBooking { get; set; }

        public DbSet<ShortFabricBookingDetails> ShortFabricBookingDetails { get; set; }
        public DbSet<SampleFabricBookingWithOrderDetails> SampleFabricBookingWithOrderDetails { get; set; }
        public DbSet<RequiredAccessories> RequiredAccessories { get; set; }
        public DbSet<Sampledetails> Sampledetails { get; set; }
        public DbSet<RequiredFabric> RequiredFabric { get; set; }
        public DbSet<CutandLayEntry> CutandLayEntry { get; set; }
        public DbSet<CutandLaydetails> CutandLaydetails { get; set; }
        public DbSet<CutandLayEntryRollWise> CutandLayEntryRollWise { get; set; }
        public DbSet<CutandLayRollWisedetails> CutandLayRollWisedetails { get; set; }
        public DbSet<CutandLayEntryRatioWiseDetails> CutandLayEntryRatioWiseDetails { get; set; }
        public DbSet<CutandLayEntryRatioWise> CutandLayEntryRatioWise { get; set; }
        public DbSet<GarmentsERP.Model.PlanningModule.CutandLayEntryRatioWise2> CutandLayEntryRatioWise2 { get; set; }
        public DbSet<GarmentsERP.Model.PlanningModule.CutandLayEntryRatioWise2Details> CutandLayEntryRatioWise2Details { get; set; }

        public DbSet<GarmentsERP.Model.PlanningModule.SewingOperationForWorkStudy> SewingOperationForWorkStudy { get; set; }
       public DbSet<GarmentsERP.Model.PlanningModule.EfficiencyPercentageSlab> EfficiencyPercentageSlab { get; set; }
        

        public DbSet<GarmentsERP.Model.PlanningModule.CutandLayEntryRatioWiseUrmi> CutandLayEntryRatioWiseUrmi { get; set; }

        public DbSet<GarmentsERP.Model.PlanningModule.CutandLayEntryRatioWiseUrmiDetails> CutandLayEntryRatioWiseUrmiDetails { get; set; }

        public DbSet<GarmentsERP.Model.Composition> Composition { get; set; }

        public DbSet<GarmentsERP.Model.MarchandisingModule.OfferingCost.OfferingCostBuyerInformation> OfferingCostBuyerInformation { get; set; }

        public DbSet<GarmentsERP.Model.MarchandisingModule.OfferingCost.OfferingCostConsumptionCost> OfferingCostConsumptionCost { get; set; }

        public DbSet<GarmentsERP.Model.MarchandisingModule.OfferingCost.OfferingCostFabricInformation> OfferingCostFabricInformation { get; set; }

        public DbSet<GarmentsERP.Model.MarchandisingModule.OfferingCost.OfferingCostFabricPriceCalculationBykg> OfferingCostFabricPriceCalculationBykg { get; set; }

        public DbSet<GarmentsERP.Model.MarchandisingModule.OfferingCost.OfferingCostGarmentsCalculation> OfferingCostGarmentsCalculation { get; set; }

        public DbSet<GarmentsERP.Model.MarchandisingModule.OfferingCost.OfferingCostInformation> OfferingCostInformation { get; set; }

        public DbSet<GarmentsERP.Model.MarchandisingModule.OfferingCost.OfferingCostTypeInfo> OfferingCostTypeInfo { get; set; }
        










    }
}
