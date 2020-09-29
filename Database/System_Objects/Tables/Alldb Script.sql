 Table: public."tblAgentInfo"

-- DROP TABLE public."tblAgentInfo";

CREATE TABLE public."tblAgentInfo"
(
    "AgentID" integer NOT NULL DEFAULT nextval('"tblAgentInfo_AgentID_seq"'::regclass),
    "Agent_Name" character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT "tblAgentInfo_pkey" PRIMARY KEY ("AgentID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblAgentInfo"
    OWNER to postgres;




-- Table: public."tblBuyerInfo"

-- DROP TABLE public."tblBuyerInfo";

CREATE TABLE public."tblBuyerInfo"
(
    "BuyerID" integer NOT NULL DEFAULT nextval('"tblBuyerInfo_BuyerID_seq"'::regclass),
    "Buyer_Name" character varying(70) COLLATE pg_catalog."default",
    "Details" character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT "tblBuyerInfo_pkey" PRIMARY KEY ("BuyerID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblBuyerInfo"
    OWNER to postgres;




-- Table: public."tblCompanyInfo"

-- DROP TABLE public."tblCompanyInfo";

CREATE TABLE public."tblCompanyInfo"
(
    "CompID" integer NOT NULL DEFAULT nextval('"tblCompanyInfo_CompID_seq"'::regclass),
    "Company_Name" character varying(80) COLLATE pg_catalog."default",
    "Details" character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT "tblCompanyInfo_pkey" PRIMARY KEY ("CompID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblCompanyInfo"
    OWNER to postgres;




-- Table: public."tblCurrencyInfo"

-- DROP TABLE public."tblCurrencyInfo";

CREATE TABLE public."tblCurrencyInfo"
(
    "CurrencyID" integer NOT NULL DEFAULT nextval('"tblCurrencyInfo_CurrencyID_seq"'::regclass),
    "Currency_Name" character varying(60) COLLATE pg_catalog."default",
    CONSTRAINT "tblCurrencyInfo_pkey" PRIMARY KEY ("CurrencyID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblCurrencyInfo"
    OWNER to postgres;





-- Table: public."tblDealingMrcndiserInfo"

-- DROP TABLE public."tblDealingMrcndiserInfo";

CREATE TABLE public."tblDealingMrcndiserInfo"
(
    "ID" integer NOT NULL DEFAULT nextval('"tblDealingMrcndiserInfo_ID_seq"'::regclass),
    "TeamleaderID" integer,
    "UserID" integer,
    CONSTRAINT "tblDealingMrcndiserInfo_pkey" PRIMARY KEY ("ID"),
    CONSTRAINT "FK_DelaingMerchant_User" FOREIGN KEY ("UserID")
        REFERENCES public."tblUserInfo" ("UserID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_DelingMerchant_Teamleader" FOREIGN KEY ("TeamleaderID")
        REFERENCES public."tblTeamlederInfoes" ("TeamleaderID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblDealingMrcndiserInfo"
    OWNER to postgres;

-- Index: fki_FK_DelaingMerchant_User

-- DROP INDEX public."fki_FK_DelaingMerchant_User";

CREATE INDEX "fki_FK_DelaingMerchant_User"
    ON public."tblDealingMrcndiserInfo" USING btree
    ("UserID")
    TABLESPACE pg_default;

-- Index: fki_FK_DelingMerchant_Teamleader

-- DROP INDEX public."fki_FK_DelingMerchant_Teamleader";

CREATE INDEX "fki_FK_DelingMerchant_Teamleader"
    ON public."tblDealingMrcndiserInfo" USING btree
    ("TeamleaderID")
    TABLESPACE pg_default;




-- Table: public."tblDepartInfo"

-- DROP TABLE public."tblDepartInfo";

CREATE TABLE public."tblDepartInfo"
(
    "DepID" integer NOT NULL DEFAULT nextval('"tblDepartInfo_DepID_seq"'::regclass),
    "Department_Name" character varying(80) COLLATE pg_catalog."default",
    "Details" character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT "tblDepartInfo_pkey" PRIMARY KEY ("DepID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblDepartInfo"
    OWNER to postgres;




-- Table: public."tblInitialOrder"

-- DROP TABLE public."tblInitialOrder";

CREATE TABLE public."tblInitialOrder"
(
    "OrderAutoID" integer NOT NULL DEFAULT nextval('"tblInitialOrder_OrderAutoID_seq"'::regclass),
    "JobNo" character varying(60) COLLATE pg_catalog."default",
    "CompanyID" integer,
    "LocationID" integer,
    "BuyerID" integer,
    "Style_Ref" character varying(80) COLLATE pg_catalog."default",
    "Style_Description" character varying(200) COLLATE pg_catalog."default",
    "Prod_DeptID" integer,
    "Sub_DeptID" integer,
    "CurrencyID" integer,
    "RegionID" integer,
    "Product_CatID" integer,
    "Team_Leader_ID" integer,
    "Dealing_Merchant_ID" integer,
    "BH_Merchant" character varying(80) COLLATE pg_catalog."default",
    "Remarks" character varying(80) COLLATE pg_catalog."default",
    "Shipment_Mode_ID" integer,
    "Order_Uom_ID" integer,
    "SMV" double precision,
    "Packing_ID" integer,
    "Season_ID" integer,
    "Agent_ID" integer,
    "UserID" integer,
    "Repeat_No_Job" character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT "tblInitialOrder_pkey" PRIMARY KEY ("OrderAutoID"),
    CONSTRAINT "Unique_JobNo" UNIQUE ("JobNo")
,
    CONSTRAINT "FK_InitialOrder_Agent" FOREIGN KEY ("Agent_ID")
        REFERENCES public."tblAgentInfo" ("AgentID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_Buyer" FOREIGN KEY ("BuyerID")
        REFERENCES public."tblBuyerInfo" ("BuyerID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_Company" FOREIGN KEY ("CompanyID")
        REFERENCES public."tblCompanyInfo" ("CompID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_Currency" FOREIGN KEY ("CurrencyID")
        REFERENCES public."tblCurrencyInfo" ("CurrencyID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_DealingMerchant" FOREIGN KEY ("Dealing_Merchant_ID")
        REFERENCES public."tblDealingMrcndiserInfo" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_Location" FOREIGN KEY ("LocationID")
        REFERENCES public."tblLocationInfo" ("LocationId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_OrderUOMInfo" FOREIGN KEY ("Order_Uom_ID")
        REFERENCES public."tblOrderUomInfo" ("UOMID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_Packing" FOREIGN KEY ("Packing_ID")
        REFERENCES public."tblPackingInfo" ("PackingID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_PodDept" FOREIGN KEY ("Prod_DeptID")
        REFERENCES public."tblProductionDeptInfo" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_ProdCategory" FOREIGN KEY ("Product_CatID")
        REFERENCES public."tblProductCategoryInfo" ("ProdCatId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_Region" FOREIGN KEY ("RegionID")
        REFERENCES public."tblRegionInfo" ("RegionID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_Seasson" FOREIGN KEY ("Season_ID")
        REFERENCES public."tblSeasonInfo" ("SeasonID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_ShipmentMode" FOREIGN KEY ("Shipment_Mode_ID")
        REFERENCES public."tblShipmentModeInfo" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_SubDept" FOREIGN KEY ("Sub_DeptID")
        REFERENCES public."tblSubDeptInfo" ("SubDeptID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_Teamleader" FOREIGN KEY ("Team_Leader_ID")
        REFERENCES public."tblTeamlederInfoes" ("TeamleaderID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_InitialOrder_User" FOREIGN KEY ("UserID")
        REFERENCES public."tblUserInfo" ("UserID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblInitialOrder"
    OWNER to postgres;

-- Index: fki_FK_InitialOrder_Agent

-- DROP INDEX public."fki_FK_InitialOrder_Agent";

CREATE INDEX "fki_FK_InitialOrder_Agent"
    ON public."tblInitialOrder" USING btree
    ("Agent_ID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_Buyer

-- DROP INDEX public."fki_FK_InitialOrder_Buyer";

CREATE INDEX "fki_FK_InitialOrder_Buyer"
    ON public."tblInitialOrder" USING btree
    ("BuyerID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_Company

-- DROP INDEX public."fki_FK_InitialOrder_Company";

CREATE INDEX "fki_FK_InitialOrder_Company"
    ON public."tblInitialOrder" USING btree
    ("CompanyID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_Currency

-- DROP INDEX public."fki_FK_InitialOrder_Currency";

CREATE INDEX "fki_FK_InitialOrder_Currency"
    ON public."tblInitialOrder" USING btree
    ("CurrencyID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_DealingMerchant

-- DROP INDEX public."fki_FK_InitialOrder_DealingMerchant";

CREATE INDEX "fki_FK_InitialOrder_DealingMerchant"
    ON public."tblInitialOrder" USING btree
    ("Dealing_Merchant_ID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_Location

-- DROP INDEX public."fki_FK_InitialOrder_Location";

CREATE INDEX "fki_FK_InitialOrder_Location"
    ON public."tblInitialOrder" USING btree
    ("LocationID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_OrderUOMInfo

-- DROP INDEX public."fki_FK_InitialOrder_OrderUOMInfo";

CREATE INDEX "fki_FK_InitialOrder_OrderUOMInfo"
    ON public."tblInitialOrder" USING btree
    ("Order_Uom_ID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_Packing

-- DROP INDEX public."fki_FK_InitialOrder_Packing";

CREATE INDEX "fki_FK_InitialOrder_Packing"
    ON public."tblInitialOrder" USING btree
    ("Packing_ID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_PodDept

-- DROP INDEX public."fki_FK_InitialOrder_PodDept";

CREATE INDEX "fki_FK_InitialOrder_PodDept"
    ON public."tblInitialOrder" USING btree
    ("Prod_DeptID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_ProdCategory

-- DROP INDEX public."fki_FK_InitialOrder_ProdCategory";

CREATE INDEX "fki_FK_InitialOrder_ProdCategory"
    ON public."tblInitialOrder" USING btree
    ("Product_CatID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_Region

-- DROP INDEX public."fki_FK_InitialOrder_Region";

CREATE INDEX "fki_FK_InitialOrder_Region"
    ON public."tblInitialOrder" USING btree
    ("RegionID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_Seasson

-- DROP INDEX public."fki_FK_InitialOrder_Seasson";

CREATE INDEX "fki_FK_InitialOrder_Seasson"
    ON public."tblInitialOrder" USING btree
    ("Season_ID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_ShipmentMode

-- DROP INDEX public."fki_FK_InitialOrder_ShipmentMode";

CREATE INDEX "fki_FK_InitialOrder_ShipmentMode"
    ON public."tblInitialOrder" USING btree
    ("Shipment_Mode_ID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_SubDept

-- DROP INDEX public."fki_FK_InitialOrder_SubDept";

CREATE INDEX "fki_FK_InitialOrder_SubDept"
    ON public."tblInitialOrder" USING btree
    ("Sub_DeptID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_Teamleader

-- DROP INDEX public."fki_FK_InitialOrder_Teamleader";

CREATE INDEX "fki_FK_InitialOrder_Teamleader"
    ON public."tblInitialOrder" USING btree
    ("Team_Leader_ID")
    TABLESPACE pg_default;

-- Index: fki_FK_InitialOrder_User

-- DROP INDEX public."fki_FK_InitialOrder_User";

CREATE INDEX "fki_FK_InitialOrder_User"
    ON public."tblInitialOrder" USING btree
    ("UserID")
    TABLESPACE pg_default;




-- Table: public."tblLocationInfo"

-- DROP TABLE public."tblLocationInfo";

CREATE TABLE public."tblLocationInfo"
(
    "LocationId" integer NOT NULL DEFAULT nextval('"tblLocationInfo_LocationId_seq"'::regclass),
    "Location_Name" character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT "tblLocationInfo_pkey" PRIMARY KEY ("LocationId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblLocationInfo"
    OWNER to postgres;





-- Table: public."tblOrderUomInfo"

-- DROP TABLE public."tblOrderUomInfo";

CREATE TABLE public."tblOrderUomInfo"
(
    "UOMID" integer NOT NULL DEFAULT nextval('"tblOrderUomInfo_UOMID_seq"'::regclass),
    "Order_Uom_Name" character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT "tblOrderUomInfo_pkey" PRIMARY KEY ("UOMID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblOrderUomInfo"
    OWNER to postgres;





-- Table: public."tblPODetailsInfro"

-- DROP TABLE public."tblPODetailsInfro";

CREATE TABLE public."tblPODetailsInfro"
(
    "PoDetID" integer NOT NULL DEFAULT nextval('"tblPODetailsInfro_PoDetID_seq"'::regclass),
    "InitialOrderID" integer,
    "POOrderStatusID" integer,
    "PO_No" character varying(60) COLLATE pg_catalog."default",
    "PO_Received_Date" date,
    "Pub_Shipment_Date" date,
    "Org_Shipment_Date" date,
    "Fac_Receive_Date" date,
    "PO_Quantity" double precision,
    "Avg_Price" double precision,
    "Amount" double precision,
    "Excess_Cut" double precision,
    "Plan_Cut" double precision,
    "PoStatusID" integer,
    "Projected_Po" character varying(80) COLLATE pg_catalog."default",
    "TNA_FromOrUpto" date,
    "Internal_RefOrGrouping" character varying(80) COLLATE pg_catalog."default",
    "Delay_For" character varying(100) COLLATE pg_catalog."default",
    "Packing_ID" integer,
    "File_No" character varying(80) COLLATE pg_catalog."default",
    "SCorLC" character varying(80) COLLATE pg_catalog."default",
    "Remarks" character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT "tblPODetailsInfro_pkey" PRIMARY KEY ("PoDetID"),
    CONSTRAINT "FK_PostOderDetails_InitialOrder" FOREIGN KEY ("InitialOrderID")
        REFERENCES public."tblInitialOrder" ("OrderAutoID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_PostOderDetails_POOderstatus" FOREIGN KEY ("POOrderStatusID")
        REFERENCES public."tblPoOrderStatusInfo" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_PostOderDetails_Packing" FOREIGN KEY ("Packing_ID")
        REFERENCES public."tblPackingInfo" ("PackingID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_PostOderDetails_PoStatus" FOREIGN KEY ("PoStatusID")
        REFERENCES public."tblPoStatus" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblPODetailsInfro"
    OWNER to postgres;

-- Index: fki_FK_PostOderDetails_InitialOrder

-- DROP INDEX public."fki_FK_PostOderDetails_InitialOrder";

CREATE INDEX "fki_FK_PostOderDetails_InitialOrder"
    ON public."tblPODetailsInfro" USING btree
    ("InitialOrderID")
    TABLESPACE pg_default;

-- Index: fki_FK_PostOderDetails_POOderstatus

-- DROP INDEX public."fki_FK_PostOderDetails_POOderstatus";

CREATE INDEX "fki_FK_PostOderDetails_POOderstatus"
    ON public."tblPODetailsInfro" USING btree
    ("POOrderStatusID")
    TABLESPACE pg_default;

-- Index: fki_FK_PostOderDetails_Packing

-- DROP INDEX public."fki_FK_PostOderDetails_Packing";

CREATE INDEX "fki_FK_PostOderDetails_Packing"
    ON public."tblPODetailsInfro" USING btree
    ("Packing_ID")
    TABLESPACE pg_default;

-- Index: fki_FK_PostOderDetails_PoStatus

-- DROP INDEX public."fki_FK_PostOderDetails_PoStatus";

CREATE INDEX "fki_FK_PostOderDetails_PoStatus"
    ON public."tblPODetailsInfro" USING btree
    ("PoStatusID")
    TABLESPACE pg_default;




-- Table: public."tblPackingInfo"

-- DROP TABLE public."tblPackingInfo";

CREATE TABLE public."tblPackingInfo"
(
    "PackingID" integer NOT NULL DEFAULT nextval('"tblPackingInfo_PackingID_seq"'::regclass),
    "Packing_Name" character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT "tblPackingInfo_pkey" PRIMARY KEY ("PackingID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblPackingInfo"
    OWNER to postgres;



-- Table: public."tblPoOrderStatusInfo"

-- DROP TABLE public."tblPoOrderStatusInfo";

CREATE TABLE public."tblPoOrderStatusInfo"
(
    "ID" integer NOT NULL DEFAULT nextval('"tblPoOrderStatusInfo_ID_seq"'::regclass),
    "Order_Status" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "tblPoOrderStatusInfo_pkey" PRIMARY KEY ("ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblPoOrderStatusInfo"
    OWNER to postgres;




-- Table: public."tblPoStatus"

-- DROP TABLE public."tblPoStatus";

CREATE TABLE public."tblPoStatus"
(
    "ID" integer NOT NULL DEFAULT nextval('"tblPoStatus_ID_seq"'::regclass),
    "Status" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "tblPoStatus_pkey" PRIMARY KEY ("ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblPoStatus"
    OWNER to postgres;





-- Table: public."tblProductCategoryInfo"

-- DROP TABLE public."tblProductCategoryInfo";

CREATE TABLE public."tblProductCategoryInfo"
(
    "ProdCatId" integer NOT NULL DEFAULT nextval('"tblProductCategoryInfo_ProdCatId_seq"'::regclass),
    "ProdCategory_Name" character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT "tblProductCategoryInfo_pkey" PRIMARY KEY ("ProdCatId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblProductCategoryInfo"
    OWNER to postgres;




-- Table: public."tblProductionDeptInfo"

-- DROP TABLE public."tblProductionDeptInfo";

CREATE TABLE public."tblProductionDeptInfo"
(
    "ID" integer NOT NULL DEFAULT nextval('"tblProductionDeptInfo_ID_seq"'::regclass),
    "ProdDeptName" character varying(80) COLLATE pg_catalog."default",
    "Department_Id" integer,
    CONSTRAINT "tblProductionDeptInfo_pkey" PRIMARY KEY ("ID"),
    CONSTRAINT "FK_ProducDept_Dept" FOREIGN KEY ("Department_Id")
        REFERENCES public."tblDepartInfo" ("DepID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblProductionDeptInfo"
    OWNER to postgres;

-- Index: fki_FK_ProducDept_Dept

-- DROP INDEX public."fki_FK_ProducDept_Dept";

CREATE INDEX "fki_FK_ProducDept_Dept"
    ON public."tblProductionDeptInfo" USING btree
    ("Department_Id")
    TABLESPACE pg_default;




-- Table: public."tblRegionInfo"

-- DROP TABLE public."tblRegionInfo";

CREATE TABLE public."tblRegionInfo"
(
    "RegionID" integer NOT NULL DEFAULT nextval('"tblRegionInfo_RegionID_seq"'::regclass),
    "Region_Name" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "tblRegionInfo_pkey" PRIMARY KEY ("RegionID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblRegionInfo"
    OWNER to postgres;





-- Table: public."tblSeasonInfo"

-- DROP TABLE public."tblSeasonInfo";

CREATE TABLE public."tblSeasonInfo"
(
    "SeasonID" integer NOT NULL DEFAULT nextval('"tblSeasonInfo_SeasonID_seq"'::regclass),
    "Season_Name" character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT "tblSeasonInfo_pkey" PRIMARY KEY ("SeasonID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblSeasonInfo"
    OWNER to postgres;




-- Table: public."tblShipmentModeInfo"

-- DROP TABLE public."tblShipmentModeInfo";

CREATE TABLE public."tblShipmentModeInfo"
(
    "ID" integer NOT NULL DEFAULT nextval('"tblShipmentModeInfo_ID_seq"'::regclass),
    "Shipment_Mode" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "tblShipmentModeInfo_pkey" PRIMARY KEY ("ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblShipmentModeInfo"
    OWNER to postgres;




-- Table: public."tblSubDeptInfo"

-- DROP TABLE public."tblSubDeptInfo";

CREATE TABLE public."tblSubDeptInfo"
(
    "SubDeptID" integer NOT NULL DEFAULT nextval('"tblSubDeptInfo_SubDeptID_seq"'::regclass),
    "Sub_dept_Name" character varying(60) COLLATE pg_catalog."default",
    "DepartmentID" integer,
    CONSTRAINT "tblSubDeptInfo_pkey" PRIMARY KEY ("SubDeptID"),
    CONSTRAINT "FK_SubDept_Dept" FOREIGN KEY ("DepartmentID")
        REFERENCES public."tblDepartInfo" ("DepID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblSubDeptInfo"
    OWNER to postgres;

-- Index: fki_FK_SubDept_Dept

-- DROP INDEX public."fki_FK_SubDept_Dept";

CREATE INDEX "fki_FK_SubDept_Dept"
    ON public."tblSubDeptInfo" USING btree
    ("DepartmentID")
    TABLESPACE pg_default;




-- Table: public."tblTeamlederInfoes"

-- DROP TABLE public."tblTeamlederInfoes";

CREATE TABLE public."tblTeamlederInfoes"
(
    "TeamleaderID" integer NOT NULL,
    "UserID" integer,
    CONSTRAINT "tblTeamlederInfoes_pkey" PRIMARY KEY ("TeamleaderID"),
    CONSTRAINT "FK_Temleader_User" FOREIGN KEY ("UserID")
        REFERENCES public."tblUserInfo" ("UserID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblTeamlederInfoes"
    OWNER to postgres;

-- Index: fki_FK_Temleader_User

-- DROP INDEX public."fki_FK_Temleader_User";

CREATE INDEX "fki_FK_Temleader_User"
    ON public."tblTeamlederInfoes" USING btree
    ("UserID")
    TABLESPACE pg_default;




-- Table: public."tblUserInfo"

-- DROP TABLE public."tblUserInfo";

CREATE TABLE public."tblUserInfo"
(
    "UserID" integer NOT NULL,
    "FullName" character varying(60) COLLATE pg_catalog."default",
    "Email" character varying(60) COLLATE pg_catalog."default",
    "Contact" character varying(25) COLLATE pg_catalog."default",
    "RegDate" date,
    "UserName" character varying(60) COLLATE pg_catalog."default",
    "UserPassword" character varying(60) COLLATE pg_catalog."default",
    "UserTypeID" integer,
    "DeptId" integer,
    CONSTRAINT "tblUserInfo_pkey" PRIMARY KEY ("UserID"),
    CONSTRAINT "FK_User_DEpt" FOREIGN KEY ("DeptId")
        REFERENCES public."tblDepartInfo" ("DepID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_Userinfo_UserType" FOREIGN KEY ("UserTypeID")
        REFERENCES public."tblUserTypeInfo" ("UserTypeID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblUserInfo"
    OWNER to postgres;

-- Index: fki_FK_UserInfo_Department

-- DROP INDEX public."fki_FK_UserInfo_Department";

CREATE INDEX "fki_FK_UserInfo_Department"
    ON public."tblUserInfo" USING btree
    ("DeptId")
    TABLESPACE pg_default;

-- Index: fki_user_usertype

-- DROP INDEX public.fki_user_usertype;

CREATE INDEX fki_user_usertype
    ON public."tblUserInfo" USING btree
    ("UserTypeID")
    TABLESPACE pg_default;





-- Table: public."tblUserTypeInfo"

-- DROP TABLE public."tblUserTypeInfo";

CREATE TABLE public."tblUserTypeInfo"
(
    "UserTypeID" integer NOT NULL DEFAULT nextval('"tblUserTypeInfo_UserTypeID_seq"'::regclass),
    "UserType" character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT "tblUserTypeInfo_pkey" PRIMARY KEY ("UserTypeID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."tblUserTypeInfo"
    OWNER to postgres;