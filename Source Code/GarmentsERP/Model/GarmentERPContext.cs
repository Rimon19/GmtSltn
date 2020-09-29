using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using GarmentsERP.Model;
using GarmentsERP.Model.MarchandisingModule;
using GarmentsERP.Model.LibraryModule;
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

        
        public virtual DbSet<ConversionCostPreCosting> ConversionCostPreCosting { get; set; }
        public virtual DbSet<ConversionCostProcess> ConversionCostProcess { get; set; }
        public virtual DbSet<FabricCost> FabricCost { get; set; }
        public virtual DbSet<FabricDesPreCost> FabricDesPreCost { get; set; }
        public virtual DbSet<InputPannelPodetails> InputPannelPodetails { get; set; }
        public virtual DbSet<OrderImageUploadTbl> OrderImageUploadTbl { get; set; }
        public virtual DbSet<OrderItem> OrderItem { get; set; }
        public virtual DbSet<PreCosting> PreCosting { get; set; }
        public virtual DbSet<SizePannelPodetails> SizePannelPodetails { get; set; }
        public virtual DbSet<Suplier> Suplier { get; set; }
        public virtual DbSet<Suplyitem> Suplyitem { get; set; }
        public virtual DbSet<TblAgentInfo> TblAgentInfo { get; set; }
        public virtual DbSet<TblBuyerInfo> TblBuyerInfo { get; set; }
        public virtual DbSet<TblCompanyInfo> TblCompanyInfo { get; set; }
        public virtual DbSet<TblCurrencyInfo> TblCurrencyInfo { get; set; }
        public virtual DbSet<TblDealingMrcndiserInfo> TblDealingMrcndiserInfo { get; set; }
        public virtual DbSet<TblDepartInfo> TblDepartInfo { get; set; }
        public virtual DbSet<TblInitialOrder> TblInitialOrder { get; set; }
        public virtual DbSet<TblLocationInfo> TblLocationInfo { get; set; }
        public virtual DbSet<TblOrderUomInfo> TblOrderUomInfo { get; set; }
        public virtual DbSet<TblPackingInfo> TblPackingInfo { get; set; }
        public virtual DbSet<TblPodetailsInfro> TblPodetailsInfro { get; set; }
        public virtual DbSet<TblPoOrderStatusInfo> TblPoOrderStatusInfo { get; set; }
        public virtual DbSet<TblPoStatus> TblPoStatus { get; set; }
        public virtual DbSet<TblProductCategoryInfo> TblProductCategoryInfo { get; set; }
        public virtual DbSet<TblProductionDeptInfo> TblProductionDeptInfo { get; set; }
        public virtual DbSet<TblRegionInfo> TblRegionInfo { get; set; }
        public virtual DbSet<TblSeasonInfo> TblSeasonInfo { get; set; }
        public virtual DbSet<TblShipmentModeInfo> TblShipmentModeInfo { get; set; }
        public virtual DbSet<TblSubDeptInfo> TblSubDeptInfo { get; set; }
        public virtual DbSet<TblTeamlederInfoes> TblTeamlederInfoes { get; set; }
        public virtual DbSet<TblUserInfo> TblUserInfo { get; set; }
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
        public virtual DbSet<WashCostPreCosting> WashCostPreCosting { get; set; }
        public virtual DbSet<EmbellishmentCostPreCosting> EmbellishmentCostPreCosting { get; set; }
        public virtual DbSet<TrimCostPreCosting> TrimCostPreCosting { get; set; }
        public virtual DbSet<OtherCostPreCosting> OtherCostPreCosting { get; set; }
        public virtual DbSet<ItemDetailsOrderEntry> ItemDetailsOrderEntry { get; set; }
        public virtual DbSet<AvgGreyConsFabricCost> AvgGreyConsFabricCost { get; set; }
        public virtual DbSet<ConsUnitGmtsTrimCost> ConsUnitGmtsTrimCost { get; set; }
        public virtual DbSet<ConsDznGmtsEmbellishmentCost> ConsDznGmtsEmbellishmentCost { get; set; }
        public virtual DbSet<ConsDznGmtsWashCost> ConsDznGmtsWashCost { get; set; }
        public virtual DbSet<ParsialFabricBookingMaster> ParsialFabricBookingMaster { get; set; }
        public virtual DbSet<ParsialFabricBookingItems> ParsialFabricBookingItems { get; set; }
        public virtual DbSet<OrderImageUploadTable> OrderImageUploadTable { get; set; }
        public virtual DbSet<CostComponentsMaster> CostComponentsMaster { get; set; }
        public virtual DbSet<CostComponenetsMasterDetails> CostComponenetsMasterDetails { get; set; }
        public virtual DbSet<SizeEntry> SizeEntry { get; set; }
        public virtual DbSet<Composition> Composition { get; set; }
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
        public virtual DbSet<QuotationInquery> QuotationInquery { get; set; }
        public virtual DbSet<TrimCost> TrimCost { get; set; }
        public virtual DbSet<WashCost> WashCost { get; set; }
        public virtual DbSet<ConversionCostForPreCost> ConversionCostForPreCost { get; set; }



        public virtual DbSet<BuyerWiesSeason> BuyerWiesSeason { get; set; }
      
      
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
        public DbSet<CommissionCost> CommissionCost { get; set; }
        public DbSet<EmbellishmentCost> EmbellishmentCost { get; set; }
        public DbSet<EmbellishmentType> EmbellishmentType { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            /*if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("Host=localhost;Database=GarmentERP;Username=postgres;Password=123");
            }*/
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            

            modelBuilder.Entity<yarnBrandInfo>(entity =>
            {
                entity.Property(e => e.yarnBrandId).HasColumnName("yarnBrandId");

                entity.Property(e => e.yarnBrandName)
                    .HasColumnName("yarnBrandName");                  
                entity.Property(e => e.sequenceNo).HasColumnName("sequenceNo");
                entity.Property(e => e.status).HasColumnName("status");
            });
            //modelBuilder.Entity<CountryLocationMapping>(entity =>
            //{
            //    entity.Property(e => e.Id).HasColumnName("Id");

            //    entity.Property(e => e.CountryId)
            //        .HasColumnName("CountryId");
            //    entity.Property(e => e.UltimateCountryName).HasColumnName("UltimateCountryName");
                
            //});

            modelBuilder.Entity<ConversionCostPreCosting>(entity =>
            {
                entity.HasKey(e => e.ConversionCostId);

                entity.HasIndex(e => e.ConversionProcessId)
                    .HasName("fki_FK_ConversionCost_Process");

                entity.HasIndex(e => e.FabDescId)
                    .HasName("fki_FK_ConversionCost_FbDesc");

                entity.HasIndex(e => e.PreCostingId)
                    .HasName("fki_FK_ConversionCost_PreCosting");

                entity.Property(e => e.ConversionCostId).HasColumnName("ConversionCostID");

                entity.Property(e => e.ChargeUnit).HasColumnName("Charge/Unit");

                entity.Property(e => e.ConversionProcessId).HasColumnName("ConversionProcessID");

                entity.Property(e => e.FabDescId).HasColumnName("FabDescID");

                entity.Property(e => e.PreCostingId).HasColumnName("PreCostingID");

                entity.Property(e => e.Status).HasMaxLength(50);

                entity.HasOne(d => d.ConversionProcess)
                    .WithMany(p => p.ConversionCostPreCosting)
                    .HasForeignKey(d => d.ConversionProcessId)
                    .HasConstraintName("FK_ConversionCost_Process");

                entity.HasOne(d => d.FabDesc)
                    .WithMany(p => p.ConversionCostPreCosting)
                    .HasForeignKey(d => d.FabDescId)
                    .HasConstraintName("FK_ConversionCost_FbDesc");

                entity.HasOne(d => d.PreCosting)
                    .WithMany(p => p.ConversionCostPreCosting)
                    .HasForeignKey(d => d.PreCostingId)
                    .HasConstraintName("FK_ConversionCost_PreCosting");
            });

            modelBuilder.Entity<ConversionCostProcess>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name).HasMaxLength(100);
            });


           
            modelBuilder.Entity<FabricDesPreCost>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.ColorRange).HasMaxLength(100);

                entity.Property(e => e.Composition).HasMaxLength(200);

                entity.Property(e => e.Construction).HasMaxLength(100);

                entity.Property(e => e.FabNature).HasMaxLength(100);

                entity.Property(e => e.GsmWeight).HasColumnName("GSM/Weight");
            });

            modelBuilder.Entity<InputPannelPodetails>(entity =>
            {
                entity.HasKey(e => e.InputPannelId);

                entity.ToTable("Input_Pannel_PODetails");

                entity.HasIndex(e => e.CountryId)
                    .HasName("fki_Country_InputPannel");

                entity.HasIndex(e => e.PackingId)
                    .HasName("fki_InputPannelwithPackingIDFK");

                entity.HasIndex(e => e.PoDetailsId)
                    .HasName("fki_PoDetailsID_InputPannel");

                entity.Property(e => e.InputPannelId).HasColumnName("Input_Pannel_ID");

                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.Property(e => e.CountryShipmentDate)
                    .HasColumnName("Country_Shipment_date")
                    .HasColumnType("date");

                entity.Property(e => e.CountryType)
                    .HasColumnName("Country_Type")
                    .HasMaxLength(100);

                entity.Property(e => e.CuttOff)
                    .HasColumnName("Cutt_off")
                    .HasMaxLength(150);

                entity.Property(e => e.CuttOffDate)
                    .HasColumnName("Cutt-off_Date")
                    .HasColumnType("date");

                entity.Property(e => e.PackingId).HasColumnName("Packing_ID");

                entity.Property(e => e.PoDetailsId).HasColumnName("Po_details_ID");

                entity.Property(e => e.Remarks).HasMaxLength(300);

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.InputPannelPodetails)
                    .HasForeignKey(d => d.CountryId)
                    .HasConstraintName("Country_InputPannel");

                entity.HasOne(d => d.Packing)
                    .WithMany(p => p.InputPannelPodetails)
                    .HasForeignKey(d => d.PackingId)
                    .HasConstraintName("InputPannelwithPackingIDFK");

                entity.HasOne(d => d.PoDetails)
                    .WithMany(p => p.InputPannelPodetails)
                    .HasForeignKey(d => d.PoDetailsId)
                    .HasConstraintName("PoDetailsID_InputPannel");
            });

            modelBuilder.Entity<OrderImageUploadTbl>(entity =>
            {
                entity.HasKey(e => e.OrderImgUploadId);

                entity.Property(e => e.OrderImgUploadId)
                    .HasColumnName("OrderImgUploadID\"")
                    .HasDefaultValueSql("nextval('\"OrderImageUploadTbl_OrderImgUploadID\"\"_seq\"'::regclass)");

                entity.Property(e => e.FileName).HasMaxLength(200);

                entity.Property(e => e.FileSize).HasMaxLength(300);

                entity.Property(e => e.InitialOrderId).HasColumnName("InitialOrderID");
            });

            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.HasKey(e => e.ItemId);

                entity.Property(e => e.ItemId).HasColumnName("ItemID");

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<PreCosting>(entity =>
            {
                entity.HasIndex(e => e.OrderId)
                       .HasName("fki_PreCosting_InitialOrder");

                entity.Property(e => e.PrecostingId).HasColumnName("PrecostingID");

                entity.Property(e => e.CostingDate)
                    .HasColumnName("Costing_Date")
                    .HasColumnType("date");

                entity.Property(e => e.Incoterm).HasMaxLength(100);

                entity.Property(e => e.IncotermPlace)
                    .HasColumnName("Incoterm_place")
                    .HasMaxLength(100);

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.SewEfficiency).HasColumnName("Sew_Efficiency");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.PreCosting)
                    .HasForeignKey(d => d.OrderId);
            });

            modelBuilder.Entity<SizePannelPodetails>(entity =>
            {
                entity.HasKey(e => e.SizePannelId);

                entity.ToTable("Size_Pannel_PODetails");

                entity.HasIndex(e => e.InputPannelId)
                    .HasName("fki_Input_PaanelWithSize");

                entity.HasIndex(e => e.ItemId)
                    .HasName("fki_OrderItem_SizeWise");

                entity.Property(e => e.SizePannelId).HasColumnName("Size_Pannel_ID");

                entity.Property(e => e.ArticleNumber)
                    .HasColumnName("Article_Number")
                    .HasMaxLength(150);

                entity.Property(e => e.Color).HasMaxLength(100);

                entity.Property(e => e.InputPannelId).HasColumnName("Input_Pannel_ID");

                entity.Property(e => e.ItemId).HasColumnName("ItemID");

                entity.HasOne(d => d.InputPannel)
                    .WithMany(p => p.SizePannelPodetails)
                    .HasForeignKey(d => d.InputPannelId)
                    .HasConstraintName("Input_PaanelWithSize");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.SizePannelPodetails)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("OrderItem_SizeWise");
            });

            modelBuilder.Entity<Suplier>(entity =>
            {
                entity.HasIndex(e => e.SuplyItemId)
                    .HasName("fki_FK_Suplier_SuplyItemID");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CompanyName).HasMaxLength(100);

                entity.Property(e => e.ContactPersionDesignation).HasMaxLength(100);

                entity.Property(e => e.ContactPerson).HasMaxLength(100);

                entity.Property(e => e.Designation).HasMaxLength(100);

                entity.Property(e => e.Name).HasMaxLength(100);

                entity.Property(e => e.Nominated).HasMaxLength(100);

                entity.Property(e => e.SuplierType).HasMaxLength(100);

                entity.Property(e => e.SuplyItemId).HasColumnName("SuplyItemID");

                entity.HasOne(d => d.SuplyItem)
                    .WithMany(p => p.Suplier)
                    .HasForeignKey(d => d.SuplyItemId)
                    .HasConstraintName("FK_Suplier_SuplyItemID");
            });

            modelBuilder.Entity<Suplyitem>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Description).HasMaxLength(100);

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<TblAgentInfo>(entity =>
            {
                entity.HasKey(e => e.AgentId);

                entity.ToTable("tblAgentInfo");

                entity.Property(e => e.AgentId).HasColumnName("AgentID");

                entity.Property(e => e.AgentName)
                    .HasColumnName("Agent_Name")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<TblBuyerInfo>(entity =>
            {
                entity.HasKey(e => e.BuyerId);

                entity.ToTable("tblBuyerInfo");

                entity.Property(e => e.BuyerId).HasColumnName("BuyerID");

                entity.Property(e => e.BuyerName)
                    .HasColumnName("Buyer_Name")
                    .HasMaxLength(70);

                entity.Property(e => e.Details).HasMaxLength(100);
            });

            modelBuilder.Entity<TblCompanyInfo>(entity =>
            {
                entity.HasKey(e => e.CompId);

                entity.ToTable("tblCompanyInfo");

                entity.Property(e => e.CompId).HasColumnName("CompID");

                entity.Property(e => e.CompanyName)
                    .HasColumnName("Company_Name")
                    .HasMaxLength(80);

                entity.Property(e => e.Details).HasMaxLength(100);
            });

            modelBuilder.Entity<TblCurrencyInfo>(entity =>
            {
                entity.HasKey(e => e.CurrencyId);

                entity.ToTable("tblCurrencyInfo");

                entity.Property(e => e.CurrencyId).HasColumnName("CurrencyID");

                entity.Property(e => e.CurrencyName)
                    .HasColumnName("Currency_Name")
                    .HasMaxLength(60);
            });

            modelBuilder.Entity<TblDealingMrcndiserInfo>(entity =>
            {
                entity.ToTable("tblDealingMrcndiserInfo");

                entity.HasIndex(e => e.TeamleaderId)
                    .HasName("fki_FK_DelingMerchant_Teamleader");

                entity.HasIndex(e => e.UserId)
                    .HasName("fki_FK_DelaingMerchant_User");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.TeamleaderId).HasColumnName("TeamleaderID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Teamleader)
                    .WithMany(p => p.TblDealingMrcndiserInfo)
                    .HasForeignKey(d => d.TeamleaderId)
                    .HasConstraintName("FK_DelingMerchant_Teamleader");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TblDealingMrcndiserInfo)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_DelaingMerchant_User");
            });

            modelBuilder.Entity<TblDepartInfo>(entity =>
            {
                entity.HasKey(e => e.DepId);

                entity.ToTable("tblDepartInfo");

                entity.Property(e => e.DepId).HasColumnName("DepID");

                entity.Property(e => e.DepartmentName)
                    .HasColumnName("Department_Name")
                    .HasMaxLength(80);

                entity.Property(e => e.Details).HasMaxLength(100);
            });

            modelBuilder.Entity<TblInitialOrder>(entity =>
            {
                entity.HasKey(e => e.OrderAutoId);

                entity.ToTable("tblInitialOrder");

                entity.HasIndex(e => e.AgentId)
                    .HasName("fki_FK_InitialOrder_Agent");

                entity.HasIndex(e => e.BuyerId)
                    .HasName("fki_FK_InitialOrder_Buyer");

                entity.HasIndex(e => e.CompanyId)
                    .HasName("fki_FK_InitialOrder_Company");

                entity.HasIndex(e => e.CurrencyId)
                    .HasName("fki_FK_InitialOrder_Currency");

                entity.HasIndex(e => e.DealingMerchantId)
                    .HasName("fki_FK_InitialOrder_DealingMerchant");

                entity.HasIndex(e => e.JobNo)
                    .HasName("Unique_JobNo")
                    .IsUnique();

                entity.HasIndex(e => e.LocationId)
                    .HasName("fki_FK_InitialOrder_Location");

                entity.HasIndex(e => e.OrderUomId)
                    .HasName("fki_FK_InitialOrder_OrderUOMInfo");

                entity.HasIndex(e => e.PackingId)
                    .HasName("fki_FK_InitialOrder_Packing");

                entity.HasIndex(e => e.ProdDeptId)
                    .HasName("fki_FK_InitialOrder_PodDept");

                entity.HasIndex(e => e.ProductCatId)
                    .HasName("fki_FK_InitialOrder_ProdCategory");

                entity.HasIndex(e => e.RegionId)
                    .HasName("fki_FK_InitialOrder_Region");

                entity.HasIndex(e => e.SeasonId)
                    .HasName("fki_FK_InitialOrder_Seasson");

                entity.HasIndex(e => e.ShipmentModeId)
                    .HasName("fki_FK_InitialOrder_ShipmentMode");

                entity.HasIndex(e => e.SubDeptId)
                    .HasName("fki_FK_InitialOrder_SubDept");

                entity.HasIndex(e => e.TeamLeaderId)
                    .HasName("fki_FK_InitialOrder_Teamleader");

                entity.HasIndex(e => e.UserId)
                    .HasName("fki_FK_InitialOrder_User");

                entity.Property(e => e.OrderAutoId).HasColumnName("OrderAutoID");

                entity.Property(e => e.AgentId).HasColumnName("Agent_ID");

                entity.Property(e => e.BhMerchant)
                    .HasColumnName("BH_Merchant")
                    .HasMaxLength(80);

                entity.Property(e => e.BuyerId).HasColumnName("BuyerID");

                entity.Property(e => e.CompanyId).HasColumnName("CompanyID");

                entity.Property(e => e.CurrencyId).HasColumnName("CurrencyID");

                entity.Property(e => e.DealingMerchantId).HasColumnName("Dealing_Merchant_ID");

                entity.Property(e => e.JobNo).HasMaxLength(60);

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.OrderNumber)
                    .HasColumnName("Order_Number")
                    .HasMaxLength(100);

                entity.Property(e => e.OrderUomId).HasColumnName("Order_Uom_ID");

                entity.Property(e => e.PackingId).HasColumnName("Packing_ID");

                entity.Property(e => e.ProdDeptId).HasColumnName("Prod_DeptID");

                entity.Property(e => e.ProductCatId).HasColumnName("Product_CatID");

                entity.Property(e => e.RegionId).HasColumnName("RegionID");

                entity.Property(e => e.Remarks).HasMaxLength(80);

                entity.Property(e => e.RepeatNoJob)
                    .HasColumnName("Repeat_No_Job")
                    .HasMaxLength(80);

                entity.Property(e => e.SeasonId).HasColumnName("Season_ID");

                entity.Property(e => e.ShipmentModeId).HasColumnName("Shipment_Mode_ID");

                entity.Property(e => e.Smv).HasColumnName("SMV");

                entity.Property(e => e.StyleDescription)
                    .HasColumnName("Style_Description")
                    .HasMaxLength(200);

                entity.Property(e => e.StyleRef)
                    .HasColumnName("Style_Ref")
                    .HasMaxLength(80);

                entity.Property(e => e.SubDeptId).HasColumnName("Sub_DeptID");

                entity.Property(e => e.TeamLeaderId).HasColumnName("Team_Leader_ID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Agent)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.AgentId)
                    .HasConstraintName("FK_InitialOrder_Agent");

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK_InitialOrder_Buyer");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_InitialOrder_Company");

                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.CurrencyId)
                    .HasConstraintName("FK_InitialOrder_Currency");

                entity.HasOne(d => d.DealingMerchant)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.DealingMerchantId)
                    .HasConstraintName("FK_InitialOrder_DealingMerchant");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.LocationId)
                    .HasConstraintName("FK_InitialOrder_Location");

                entity.HasOne(d => d.OrderUom)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.OrderUomId)
                    .HasConstraintName("FK_InitialOrder_OrderUOMInfo");

                entity.HasOne(d => d.Packing)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.PackingId)
                    .HasConstraintName("FK_InitialOrder_Packing");

                entity.HasOne(d => d.ProdDept)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.ProdDeptId)
                    .HasConstraintName("FK_InitialOrder_PodDept");

                entity.HasOne(d => d.ProductCat)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.ProductCatId)
                    .HasConstraintName("FK_InitialOrder_ProdCategory");

                entity.HasOne(d => d.Region)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.RegionId)
                    .HasConstraintName("FK_InitialOrder_Region");

                entity.HasOne(d => d.Season)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.SeasonId)
                    .HasConstraintName("FK_InitialOrder_Seasson");

                entity.HasOne(d => d.ShipmentMode)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.ShipmentModeId)
                    .HasConstraintName("FK_InitialOrder_ShipmentMode");

                entity.HasOne(d => d.SubDept)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.SubDeptId)
                    .HasConstraintName("FK_InitialOrder_SubDept");

                entity.HasOne(d => d.TeamLeader)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.TeamLeaderId)
                    .HasConstraintName("FK_InitialOrder_Teamleader");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TblInitialOrder)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_InitialOrder_User");
            });

            modelBuilder.Entity<TblLocationInfo>(entity =>
            {
                entity.HasKey(e => e.LocationId);

                entity.ToTable("tblLocationInfo");

                entity.Property(e => e.LocationName)
                    .HasColumnName("Location_Name")
                    .HasMaxLength(80);
            });

            modelBuilder.Entity<TblOrderUomInfo>(entity =>
            {
                entity.HasKey(e => e.Uomid);

                entity.ToTable("tblOrderUomInfo");

                entity.Property(e => e.Uomid).HasColumnName("UOMID");

                entity.Property(e => e.OrderUomName)
                    .HasColumnName("Order_Uom_Name")
                    .HasMaxLength(80);
            });

            modelBuilder.Entity<TblPackingInfo>(entity =>
            {
                entity.HasKey(e => e.PackingId);

                entity.ToTable("tblPackingInfo");

                entity.Property(e => e.PackingId).HasColumnName("PackingID");

                entity.Property(e => e.PackingName)
                    .HasColumnName("Packing_Name")
                    .HasMaxLength(80);
            });

            modelBuilder.Entity<TblPodetailsInfro>(entity =>
            {
                entity.HasKey(e => e.PoDetId);

                entity.ToTable("tblPODetailsInfro");

                entity.HasIndex(e => e.InitialOrderId)
                    .HasName("fki_FK_PostOderDetails_InitialOrder");

                entity.HasIndex(e => e.PackingId)
                    .HasName("fki_FK_PostOderDetails_Packing");

                entity.HasIndex(e => e.PoStatusId)
                    .HasName("fki_FK_PostOderDetails_PoStatus");

                entity.HasIndex(e => e.PoorderStatusId)
                    .HasName("fki_FK_PostOderDetails_POOderstatus");

                entity.Property(e => e.PoDetId).HasColumnName("PoDetID");

                entity.Property(e => e.AvgPrice).HasColumnName("Avg_Price");

                entity.Property(e => e.DelayFor)
                    .HasColumnName("Delay_For")
                    .HasMaxLength(100);

                entity.Property(e => e.ExcessCut).HasColumnName("Excess_Cut");

                entity.Property(e => e.FacReceiveDate)
                    .HasColumnName("Fac_Receive_Date")
                    .HasColumnType("date");
                    

                entity.Property(e => e.FileNo)
                    .HasColumnName("File_No")
                    .HasMaxLength(80);

                entity.Property(e => e.InitialOrderId).HasColumnName("InitialOrderID");

                entity.Property(e => e.InternalRefOrGrouping)
                    .HasColumnName("Internal_RefOrGrouping")
                    .HasMaxLength(80);

                entity.Property(e => e.OrgShipmentDate)
                    .HasColumnName("Org_Shipment_Date")
                    .HasColumnType("date");
                    

                entity.Property(e => e.PackingId).HasColumnName("Packing_ID");

                entity.Property(e => e.PlanCut).HasColumnName("Plan_Cut");

                entity.Property(e => e.PoNo)
                    .HasColumnName("PO_No")
                    .HasMaxLength(60);

                entity.Property(e => e.PoQuantity).HasColumnName("PO_Quantity");

                entity.Property(e => e.PoReceivedDate)
                    .HasColumnName("PO_Received_Date")
                    .HasColumnType("date");
                    

                entity.Property(e => e.PoStatusId).HasColumnName("PoStatusID");

                entity.Property(e => e.PoorderStatusId).HasColumnName("POOrderStatusID");

                entity.Property(e => e.ProjectedPo)
                    .HasColumnName("Projected_Po")
                    .HasMaxLength(80);

                entity.Property(e => e.PubShipmentDate)
                    .HasColumnName("Pub_Shipment_Date")
                    .HasColumnType("date");
                    

                entity.Property(e => e.Remarks).HasMaxLength(200);

                entity.Property(e => e.ScorLc)
                    .HasColumnName("SCorLC")
                    .HasMaxLength(80);

                entity.Property(e => e.TnaFromOrUpto)
                    .HasColumnName("TNA_FromOrUpto")
                    .HasMaxLength(80); 
                  

                entity.HasOne(d => d.InitialOrder)
                    .WithMany(p => p.TblPodetailsInfro)
                    .HasForeignKey(d => d.InitialOrderId)
                    .HasConstraintName("FK_PostOderDetails_InitialOrder");

                entity.HasOne(d => d.Packing)
                    .WithMany(p => p.TblPodetailsInfro)
                    .HasForeignKey(d => d.PackingId)
                    .HasConstraintName("FK_PostOderDetails_Packing");

                entity.HasOne(d => d.PoStatus)
                    .WithMany(p => p.TblPodetailsInfro)
                    .HasForeignKey(d => d.PoStatusId)
                    .HasConstraintName("FK_PostOderDetails_PoStatus");

                entity.HasOne(d => d.PoorderStatus)
                    .WithMany(p => p.TblPodetailsInfro)
                    .HasForeignKey(d => d.PoorderStatusId)
                    .HasConstraintName("FK_PostOderDetails_POOderstatus");
            });

            modelBuilder.Entity<TblPoOrderStatusInfo>(entity =>
            {
                entity.ToTable("tblPoOrderStatusInfo");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.OrderStatus)
                    .HasColumnName("Order_Status")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TblPoStatus>(entity =>
            {
                entity.ToTable("tblPoStatus");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Status).HasMaxLength(50);
            });

            modelBuilder.Entity<TblProductCategoryInfo>(entity =>
            {
                entity.HasKey(e => e.ProdCatId);

                entity.ToTable("tblProductCategoryInfo");

                entity.Property(e => e.ProdCategoryName)
                    .HasColumnName("ProdCategory_Name")
                    .HasMaxLength(80);
            });

            modelBuilder.Entity<TblProductionDeptInfo>(entity =>
            {
                entity.ToTable("tblProductionDeptInfo");

                entity.HasIndex(e => e.DepartmentId)
                    .HasName("fki_FK_ProducDept_Dept");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.DepartmentId).HasColumnName("Department_Id");

                entity.Property(e => e.ProdDeptName).HasMaxLength(80);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.TblProductionDeptInfo)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_ProducDept_Dept");
            });

            modelBuilder.Entity<TblRegionInfo>(entity =>
            {
                entity.HasKey(e => e.RegionId);

                entity.ToTable("tblRegionInfo");

                entity.Property(e => e.RegionId).HasColumnName("RegionID");

                entity.Property(e => e.RegionName)
                    .HasColumnName("Region_Name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TblSeasonInfo>(entity =>
            {
                entity.HasKey(e => e.SeasonId);

                entity.ToTable("tblSeasonInfo");

                entity.Property(e => e.SeasonId).HasColumnName("SeasonID");

                entity.Property(e => e.SeasonName)
                    .HasColumnName("Season_Name")
                    .HasMaxLength(80);
            });

            modelBuilder.Entity<TblShipmentModeInfo>(entity =>
            {
                entity.ToTable("tblShipmentModeInfo");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.ShipmentMode)
                    .HasColumnName("Shipment_Mode")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TblSubDeptInfo>(entity =>
            {
                entity.HasKey(e => e.SubDeptId);

                entity.ToTable("tblSubDeptInfo");

                entity.HasIndex(e => e.DepartmentId)
                    .HasName("fki_FK_SubDept_Dept");

                entity.Property(e => e.SubDeptId).HasColumnName("SubDeptID");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.SubDeptName)
                    .HasColumnName("Sub_dept_Name")
                    .HasMaxLength(60);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.TblSubDeptInfo)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_SubDept_Dept");
            });

            modelBuilder.Entity<TblTeamlederInfoes>(entity =>
            {
                entity.HasKey(e => e.TeamleaderId);

                entity.ToTable("tblTeamlederInfoes");

                entity.HasIndex(e => e.UserId)
                    .HasName("fki_FK_Temleader_User");

                entity.Property(e => e.TeamleaderId)
                    .HasColumnName("TeamleaderID")
                    .ValueGeneratedNever();

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TblTeamlederInfoes)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Temleader_User");
            });

            modelBuilder.Entity<TblUserInfo>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("tblUserInfo");

                entity.HasIndex(e => e.DeptId)
                    .HasName("fki_FK_UserInfo_Department");

                entity.HasIndex(e => e.UserTypeId)
                    .HasName("fki_user_usertype");

                entity.Property(e => e.UserId)
                    .HasColumnName("UserID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Contact).HasMaxLength(25);

                entity.Property(e => e.Email).HasMaxLength(60);

                entity.Property(e => e.FullName).HasMaxLength(60);

                entity.Property(e => e.RegDate).HasColumnType("date");

                entity.Property(e => e.UserName).HasMaxLength(60);

                entity.Property(e => e.UserPassword).HasMaxLength(60);

                entity.Property(e => e.UserTypeId).HasColumnName("UserTypeID");

                entity.HasOne(d => d.Dept)
                    .WithMany(p => p.TblUserInfo)
                    .HasForeignKey(d => d.DeptId)
                    .HasConstraintName("FK_User_DEpt");

                entity.HasOne(d => d.UserType)
                    .WithMany(p => p.TblUserInfo)
                    .HasForeignKey(d => d.UserTypeId)
                    .HasConstraintName("FK_Userinfo_UserType");
            });

            modelBuilder.Entity<TblUserTypeInfo>(entity =>
            {
                entity.HasKey(e => e.UserTypeId);

                entity.ToTable("tblUserTypeInfo");

                entity.Property(e => e.UserTypeId).HasColumnName("UserTypeID");

                entity.Property(e => e.UserType).HasMaxLength(80);
            });

            modelBuilder.Entity<YarnComp1>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<YarnCostPreCosting>(entity =>
            {
                entity.HasIndex(e => e.Comp1Id)
                    .HasName("fki_FK_YarnCost_Comp1");

                entity.HasIndex(e => e.CountId)
                    .HasName("fki_FK_YarnCost_YarnCount");

                entity.HasIndex(e => e.PreCostingId)
                    .HasName("fki_FK_YarnCost_PreCosting");

                entity.HasIndex(e => e.YarnTypeId)
                    .HasName("fki_FK_YarnCost_YarnType");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Comp1Id).HasColumnName("Comp1ID");

                entity.Property(e => e.CountId).HasColumnName("CountID");

                entity.Property(e => e.PreCostingId).HasColumnName("PreCostingID");

                entity.Property(e => e.SupplierId).HasColumnName("SupplierID");

                entity.Property(e => e.YarnTypeId).HasColumnName("YarnTypeID");

                entity.HasOne(d => d.Comp1)
                    .WithMany(p => p.YarnCostPreCosting)
                    .HasForeignKey(d => d.Comp1Id)
                    .HasConstraintName("FK_YarnCost_Comp1");

                entity.HasOne(d => d.Count)
                    .WithMany(p => p.YarnCostPreCosting)
                    .HasForeignKey(d => d.CountId)
                    .HasConstraintName("FK_YarnCost_YarnCount");

                entity.HasOne(d => d.PreCosting)
                    .WithMany(p => p.YarnCostPreCosting)
                    .HasForeignKey(d => d.PreCostingId)
                    .HasConstraintName("FK_YarnCost_PreCosting");

                entity.HasOne(d => d.YarnType)
                    .WithMany(p => p.YarnCostPreCosting)
                    .HasForeignKey(d => d.YarnTypeId)
                    .HasConstraintName("FK_YarnCost_YarnType");
            });

            modelBuilder.Entity<YarnCount>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<YarnType>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Description).HasMaxLength(100);

                entity.Property(e => e.Type).HasMaxLength(100);
            });

            modelBuilder.HasSequence<int>("OrderImageUploadTbl_OrderImgUploadID\"_seq");

            modelBuilder.Entity<CommissionCostPreCosting>(entity =>
            {
                entity.ToTable("commission_cost_pre_costing");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("nextval('commission_cost_id_seq'::regclass)");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.CommnBase)
                    .HasColumnName("commn_base")
                    .HasMaxLength(255);

                entity.Property(e => e.CommnRate)
                    .HasColumnName("commn_rate")
                    .HasMaxLength(255);

                entity.Property(e => e.Particulars)
                    .HasColumnName("particulars")
                    .HasMaxLength(255);

                entity.Property(e => e.PrecostingId).HasColumnName("precosting_id");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);
            });

            modelBuilder.HasSequence<int>("commission_cost_id_seq");


            //modelBuilder.Entity<CommercialCost>(entity =>
            //{
            //    entity.ToTable("commercial_cost");

            //    entity.Property(e => e.Id).HasColumnName("id");

            //    entity.Property(e => e.Amount).HasColumnName("amount");

            //    entity.Property(e => e.Item)
            //        .HasColumnName("item")
            //        .HasMaxLength(255);

            //    entity.Property(e => e.PrecostingId).HasColumnName("precosting_id");

            //    entity.Property(e => e.RateIn)
            //        .HasColumnName("rate_in")
            //        .HasMaxLength(255);

            //    entity.Property(e => e.Status)
            //        .HasColumnName("status")
            //        .HasMaxLength(255);
            //});


            modelBuilder.Entity<WashCostPreCosting>(entity =>
            {
                entity.ToTable("wash_cost_pre_costing");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("nextval('wash_cost_id_seq'::regclass)");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.ConsDznGmts)
                    .HasColumnName("cons_dzn_gmts")
                    .HasMaxLength(255);

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);

                entity.Property(e => e.PrecostingId).HasColumnName("precosting_id");

                entity.Property(e => e.Rate)
                    .HasColumnName("rate")
                    .HasMaxLength(255);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .HasMaxLength(255);
            });

            modelBuilder.HasSequence<int>("wash_cost_id_seq");




            modelBuilder.Entity<EmbellishmentCostPreCosting>(entity =>
            {
                entity.ToTable("embellishment_cost_pre_costing");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("nextval('embellishment_cost_id_seq'::regclass)");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.BodyPart).HasColumnName("body_part");

                entity.Property(e => e.ConsDznGmts)
                    .HasColumnName("cons_dzn_gmts")
                    .HasMaxLength(255);

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(255);

                entity.Property(e => e.EmbSupplier)
                    .HasColumnName("emb_supplier")
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);

                entity.Property(e => e.PrecostingId).HasColumnName("precosting_id");

                entity.Property(e => e.Rate)
                    .HasColumnName("rate")
                    .HasMaxLength(255);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .HasMaxLength(255);
            });

            modelBuilder.HasSequence<int>("embellishment_cost_id_seq");



            modelBuilder.Entity<TrimCostPreCosting>(entity =>
            {
                entity.ToTable("trim_cost_pre_costing");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.ApvlReq)
                    .HasColumnName("apvl_req")
                    .HasMaxLength(255);

                entity.Property(e => e.BandSupRef)
                    .HasColumnName("band_sup_ref")
                    .HasMaxLength(255);

                entity.Property(e => e.ConsUnitGmts)
                    .HasColumnName("cons_unit_gmts")
                    .HasMaxLength(255);

                entity.Property(e => e.ConsUom)
                    .HasColumnName("cons_uom")
                    .HasMaxLength(255);

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(255);

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(255);

                entity.Property(e => e.GroupName)
                    .HasColumnName("group_name")
                    .HasMaxLength(255);

                entity.Property(e => e.Image)
                    .HasColumnName("image")
                    .HasMaxLength(255);

                entity.Property(e => e.NominatedSupp).HasColumnName("nominated_supp");

                entity.Property(e => e.PrecostingId).HasColumnName("precosting_id");

                entity.Property(e => e.Rate)
                    .HasColumnName("rate")
                    .HasMaxLength(255);

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(255);

                entity.Property(e => e.TotalAmount).HasColumnName("total_amount");

                entity.Property(e => e.TotalQty).HasColumnName("total_qty");
            });

            modelBuilder.Entity<OtherCostPreCosting>(entity =>
            {
                entity.ToTable("other_cost_pre_costing");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.BudgetedCost).HasColumnName("budgeted_cost");

                entity.Property(e => e.CostComponent)
                    .HasColumnName("cost_component")
                    .HasMaxLength(255);

                entity.Property(e => e.PercentageQPrice).HasColumnName("percentage_q_price");

                entity.Property(e => e.PreCostingId).HasColumnName("pre_costing_id");
            });


            modelBuilder.Entity<ItemDetailsOrderEntry>(entity =>
            {
                entity.ToTable("item_details_order_entry");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AopNumber).HasColumnName("aop_number");

                entity.Property(e => e.AopYesNo).HasColumnName("aop_yes_no");

                entity.Property(e => e.Complexity)
                    .HasColumnName("complexity")
                    .HasMaxLength(255);

                entity.Property(e => e.CutSmvPcs).HasColumnName("cut_smv_pcs");

                entity.Property(e => e.EmbroNumber).HasColumnName("embro_number");

                entity.Property(e => e.EmbroYesNo).HasColumnName("embro_yes_no");

                entity.Property(e => e.FinSmvPcs).HasColumnName("fin_smv_pcs");

                entity.Property(e => e.GmtsDyeingNumber).HasColumnName("gmts_dyeing_number");

                entity.Property(e => e.GmtsDyeingYesNo).HasColumnName("gmts_dyeing_yes_no");

                entity.Property(e => e.Item)
                    .HasColumnName("item")
                    .HasMaxLength(255);

                entity.Property(e => e.OrderEntryId).HasColumnName("order_entry_id");

                entity.Property(e => e.Print)
                    .HasColumnName("print")
                    .HasMaxLength(255);

                entity.Property(e => e.Ratio).HasColumnName("ratio");

                entity.Property(e => e.SewSmvPcs).HasColumnName("sew_smv_pcs");

                entity.Property(e => e.SpWorksNumber).HasColumnName("sp_works_number");

                entity.Property(e => e.SpWorksYesNo).HasColumnName("sp_works_yes_no");

                entity.Property(e => e.WashNumber).HasColumnName("wash_number");

                entity.Property(e => e.WashYesNo).HasColumnName("wash_yes_no");
            });

            modelBuilder.Entity<AvgGreyConsFabricCost>(entity =>
            {
                entity.ToTable("avg_grey_cons_fabric_cost");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.Color)
                    .HasColumnName("color")
                    .HasMaxLength(255);

                entity.Property(e => e.Dia).HasColumnName("dia");

                entity.Property(e => e.FebricCostId).HasColumnName("febric_cost_id");

                entity.Property(e => e.FinishCons).HasColumnName("finish_cons");

                entity.Property(e => e.GmtsSizes).HasColumnName("gmts_sizes");

                entity.Property(e => e.GreyCons).HasColumnName("grey_cons");

                entity.Property(e => e.ItemSizes).HasColumnName("item_sizes");

                entity.Property(e => e.Pcs).HasColumnName("pcs");

                entity.Property(e => e.PoNo)
                    .HasColumnName("po_no")
                    .HasMaxLength(255);

                entity.Property(e => e.PrecostingId).HasColumnName("precosting_id");

                entity.Property(e => e.ProcessLoss).HasColumnName("process_loss");

                entity.Property(e => e.Rate).HasColumnName("rate");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(255);

                entity.Property(e => e.TotalAmount).HasColumnName("total_amount");

                entity.Property(e => e.TotalQty).HasColumnName("total_qty");
            });
            modelBuilder.Entity<ConsUnitGmtsTrimCost>(entity =>
            {
                entity.ToTable("cons_unit_gmts_trim_cost");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.Cons).HasColumnName("cons");

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(255);

                entity.Property(e => e.ExPercentage).HasColumnName("ex_percentage");

                entity.Property(e => e.GmtsColor)
                    .HasColumnName("gmts_color")
                    .HasMaxLength(255);

                entity.Property(e => e.GmtsItem)
                    .HasColumnName("gmts_item")
                    .HasMaxLength(255);

                entity.Property(e => e.GmtsSizes).HasColumnName("gmts_sizes");

                entity.Property(e => e.ItemSizes).HasColumnName("item_sizes");

                entity.Property(e => e.Pcs).HasColumnName("pcs");

                entity.Property(e => e.Placement).HasColumnName("placement");

                entity.Property(e => e.PoNo)
                    .HasColumnName("po_no")
                    .HasMaxLength(255);

                entity.Property(e => e.Rate).HasColumnName("rate");

                entity.Property(e => e.TotCons).HasColumnName("tot_cons");

                entity.Property(e => e.TotalAmount).HasColumnName("total_amount");

                entity.Property(e => e.TotalQty).HasColumnName("total_qty");

                entity.Property(e => e.TrimCostId).HasColumnName("trim_cost_id");
            });

            modelBuilder.Entity<ConsDznGmtsEmbellishmentCost>(entity =>
            {
                entity.ToTable("cons_dzn_gmts_embellishment_cost");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.Cons).HasColumnName("cons");

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(255);

                entity.Property(e => e.EmbellishmentCostId).HasColumnName("embellishment_cost_id");

                entity.Property(e => e.GmtsColor)
                    .HasColumnName("gmts_color")
                    .HasMaxLength(255);

                entity.Property(e => e.GmtsItem)
                    .HasColumnName("gmts_item")
                    .HasMaxLength(255);

                entity.Property(e => e.GmtsSizes)
                    .HasColumnName("gmts_sizes")
                    .HasMaxLength(255);

                entity.Property(e => e.PoNo)
                    .HasColumnName("po_no")
                    .HasMaxLength(255);

                entity.Property(e => e.Rate).HasColumnName("rate");
            });

            modelBuilder.Entity<ConsDznGmtsWashCost>(entity =>
            {
                entity.ToTable("cons_dzn_gmts_wash_cost");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.Cons).HasColumnName("cons");

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(255);

                entity.Property(e => e.GmtsColor)
                    .HasColumnName("gmts_color")
                    .HasMaxLength(255);

                entity.Property(e => e.GmtsItem)
                    .HasColumnName("gmts_item")
                    .HasMaxLength(255);

                entity.Property(e => e.GmtsSizes)
                    .HasColumnName("gmts_sizes")
                    .HasMaxLength(255);

                entity.Property(e => e.PoNo)
                    .HasColumnName("po_no")
                    .HasMaxLength(255);

                entity.Property(e => e.Rate).HasColumnName("rate");

                entity.Property(e => e.WashCostId).HasColumnName("wash_cost_id");
            });

            modelBuilder.Entity<ParsialFabricBookingMaster>(entity =>
            {
                entity.ToTable("parsial_fabric_booking_master");

                entity.Property(e => e.id).HasColumnName("id");

                entity.Property(e => e.Attention)
                    .HasColumnName("attention")
                    .HasMaxLength(255);

                entity.Property(e => e.BookingDate)
                    .IsRequired()
                    .HasColumnName("booking_date")
                    .HasMaxLength(255);

                entity.Property(e => e.BookingMonth)
                    .IsRequired()
                    .HasColumnName("booking_month")
                    .HasMaxLength(255);

                entity.Property(e => e.BookingNo)
                    .IsRequired()
                    .HasColumnName("booking_no")
                    .HasMaxLength(255);

                entity.Property(e => e.BookingPercent).HasColumnName("booking_percent");

                entity.Property(e => e.BookingYear)
                    .IsRequired()
                    .HasColumnName("booking_year")
                    .HasMaxLength(255);

                entity.Property(e => e.BuyerName)
                    .IsRequired()
                    .HasColumnName("buyer_name")
                    .HasMaxLength(255);

                entity.Property(e => e.CollarExcessCutPercentage)
                    .HasColumnName("collar_excess_cut_percentage")
                    .HasMaxLength(255);

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasColumnName("company_name")
                    .HasMaxLength(255);

                entity.Property(e => e.CuffExcessCutPercentage)
                    .HasColumnName("cuff_excess_cut_percentage")
                    .HasMaxLength(255);

                entity.Property(e => e.Currency)
                    .HasColumnName("currency")
                    .HasMaxLength(255);

                entity.Property(e => e.DeliveryDate)
                    .IsRequired()
                    .HasColumnName("delivery_date")
                    .HasMaxLength(255);

                entity.Property(e => e.ExchangeRate).HasColumnName("exchange_rate");

                entity.Property(e => e.FabricComposition)
                    .HasColumnName("fabric_composition")
                    .HasMaxLength(255);

                entity.Property(e => e.FabricNature)
                    .IsRequired()
                    .HasColumnName("fabric_nature")
                    .HasMaxLength(255);

                entity.Property(e => e.FabricSource)
                    .IsRequired()
                    .HasColumnName("fabric_source")
                    .HasMaxLength(255);

                entity.Property(e => e.FileNo)
                    .HasColumnName("file_no")
                    .HasMaxLength(255);

                entity.Property(e => e.InternalRefNo)
                    .HasColumnName("internal_ref_no")
                    .HasMaxLength(255);

                entity.Property(e => e.Level)
                    .HasColumnName("level")
                    .HasMaxLength(255);

                entity.Property(e => e.PayMode)
                    .IsRequired()
                    .HasColumnName("pay_mode")
                    .HasMaxLength(255);

                entity.Property(e => e.ReadyToApproved)
                    .HasColumnName("ready_to_approved")
                    .HasMaxLength(255);

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(255);

                entity.Property(e => e.Source)
                    .HasColumnName("source")
                    .HasMaxLength(255);

                entity.Property(e => e.SupplierName)
                    .IsRequired()
                    .HasColumnName("supplier_name")
                    .HasMaxLength(255);

                entity.Property(e => e.UnApproveRequest)
                    .HasColumnName("un_approve_request")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<ParsialFabricBookingItems>(entity =>
            {
                entity.ToTable("parsial_fabric_booking_items");

                entity.Property(e => e.id).HasColumnName("id");

                entity.Property(e => e.acWoQnty).HasColumnName("ac_wo_qnty");

                entity.Property(e => e.adjQnty).HasColumnName("adj_qnty");

                entity.Property(e => e.amount).HasColumnName("amount");

                entity.Property(e => e.bodyPart)
                    .HasColumnName("body_part")
                    .HasMaxLength(255);

                entity.Property(e => e.bookingMasterId).HasColumnName("booking_master_id");

                entity.Property(e => e.colorType)
                    .HasColumnName("color_type")
                    .HasMaxLength(255);

                entity.Property(e => e.composition)
                    .HasColumnName("composition")
                    .HasMaxLength(255);

                entity.Property(e => e.construction)
                    .HasColumnName("construction")
                    .HasMaxLength(255);

                entity.Property(e => e.dia).HasColumnName("dia");

                entity.Property(e => e.diaWidthType)
                    .HasColumnName("dia_width_type")
                    .HasMaxLength(255);

                entity.Property(e => e.gmtsColor)
                    .HasColumnName("gmts_color")
                    .HasMaxLength(255);

                entity.Property(e => e.gsm)
                    .HasColumnName("gsm")
                    .HasMaxLength(255);

                entity.Property(e => e.itemColor)
                    .HasColumnName("item_color")
                    .HasMaxLength(255);          
                entity.Property(e => e.orderId).HasColumnName("order_id");

                entity.Property(e => e.poNumber)
                    .HasColumnName("po_number")
                    .HasMaxLength(255);

                entity.Property(e => e.rate).HasColumnName("rate");

                entity.Property(e => e.woQnty).HasColumnName("wo_qnty");
            });

        }

        public DbSet<GarmentsERP.Model.LibraryModule.ColorType> ColorType { get; set; }

        

        

        

        

        
    }
}
