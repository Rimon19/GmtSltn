PGDMP         1                x         
   GarmentERP    10.8    10.8 1   �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    17147 
   GarmentERP    DATABASE     �   CREATE DATABASE "GarmentERP" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "GarmentERP";
             postgres    false                        2615    26612    a    SCHEMA        CREATE SCHEMA a;
    DROP SCHEMA a;
             postgres    false                        2615    26611 
   dbGarments    SCHEMA        CREATE SCHEMA "dbGarments";
    DROP SCHEMA "dbGarments";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �           1259    54760    AccountingYear    TABLE     7  CREATE TABLE public."AccountingYear" (
    "Id" integer NOT NULL,
    "CompanyId" integer,
    "StartingYear" integer,
    "CurrentYear" integer,
    "StartingMonth" character varying(50),
    "EndingMonth" character varying(50),
    "PeriodName" character varying(100),
    "IsActive" character varying(50)
);
 $   DROP TABLE public."AccountingYear";
       public         postgres    false    3            �           1259    54768    AccountingYearSubInfo    TABLE     �   CREATE TABLE public."AccountingYearSubInfo" (
    "Id" integer NOT NULL,
    "StartingDate" character varying(100),
    "EndingDate" character varying(100),
    "Period" character varying(100),
    "Locked" boolean,
    "AccountingYearId" integer
);
 +   DROP TABLE public."AccountingYearSubInfo";
       public         postgres    false    3            �           1259    54766    AccountingYearSubInfo_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."AccountingYearSubInfo_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."AccountingYearSubInfo_Id_seq";
       public       postgres    false    3    468            �           0    0    AccountingYearSubInfo_Id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."AccountingYearSubInfo_Id_seq" OWNED BY public."AccountingYearSubInfo"."Id";
            public       postgres    false    467            �           1259    54758    AccountingYear_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."AccountingYear_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."AccountingYear_Id_seq";
       public       postgres    false    466    3            �           0    0    AccountingYear_Id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."AccountingYear_Id_seq" OWNED BY public."AccountingYear"."Id";
            public       postgres    false    465            �           1259    54752 
   BloodGroup    TABLE     m   CREATE TABLE public."BloodGroup" (
    "Id" integer NOT NULL,
    "BloodGroupName" character varying(100)
);
     DROP TABLE public."BloodGroup";
       public         postgres    false    3            �           1259    54750    BloodGroup_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."BloodGroup_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."BloodGroup_Id_seq";
       public       postgres    false    464    3            �           0    0    BloodGroup_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."BloodGroup_Id_seq" OWNED BY public."BloodGroup"."Id";
            public       postgres    false    463            f           1259    54131    BodyPartEntry    TABLE       CREATE TABLE public."BodyPartEntry" (
    "Id" integer NOT NULL,
    "BodyPartFullName" character varying(100),
    "BodyPartShortName" character varying(100),
    "EntryPages" character varying(500),
    "BodyPartType" character varying(100),
    status character varying(100)
);
 #   DROP TABLE public."BodyPartEntry";
       public         postgres    false    3            e           1259    54129    BodyPartEntry_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."BodyPartEntry_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."BodyPartEntry_Id_seq";
       public       postgres    false    3    358            �           0    0    BodyPartEntry_Id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."BodyPartEntry_Id_seq" OWNED BY public."BodyPartEntry"."Id";
            public       postgres    false    357            >           1259    45782    BodyPartType    TABLE     �   CREATE TABLE public."BodyPartType" (
    "Id" integer NOT NULL,
    "BodyPartTypeName" character varying(100),
    status character varying(100)
);
 "   DROP TABLE public."BodyPartType";
       public         postgres    false    3            =           1259    45780    BodyPartType_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."BodyPartType_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."BodyPartType_Id_seq";
       public       postgres    false    3    318            �           0    0    BodyPartType_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."BodyPartType_Id_seq" OWNED BY public."BodyPartType"."Id";
            public       postgres    false    317            �            1259    17148    BodyPartofPreCosting    TABLE     �   CREATE TABLE public."BodyPartofPreCosting" (
    "ID" integer NOT NULL,
    "Item_Group" character varying(100),
    "Type" character varying(100)
);
 *   DROP TABLE public."BodyPartofPreCosting";
       public         postgres    false    3            �            1259    17151    BodyPartofPreCosting_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."BodyPartofPreCosting_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."BodyPartofPreCosting_ID_seq";
       public       postgres    false    3    198            �           0    0    BodyPartofPreCosting_ID_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."BodyPartofPreCosting_ID_seq" OWNED BY public."BodyPartofPreCosting"."ID";
            public       postgres    false    199            �           1259    54779    BuyerProfile    TABLE     �  CREATE TABLE public."BuyerProfile" (
    "Id" integer NOT NULL,
    "ContactName" character varying(100),
    "ShortName" character varying(100),
    "ContactPerson" character varying(100),
    "Designation" character varying(100),
    "ExportersRef" character varying(100),
    "Email" character varying(100),
    "HttpWww" character varying(100),
    "AddressOne" character varying(100),
    "AddressTwo" character varying(100),
    "AddressThree" character varying(100),
    "AddressFour" character varying(100),
    "CountryId" integer,
    "PartyTypeIds" character varying(100),
    "TagCompany" character varying(100),
    "LinkToSupplier" character varying(100),
    "CreditLimitDays" integer,
    "CrditLimitAmount" integer,
    "CrditLimitAmountType" character varying(50),
    "DiscountMethod" character varying(50),
    "SecuirityDeducted" character varying(50),
    "VatToBeDeducted" character varying(50),
    "AitToBeDeducted" character varying(50),
    "Remark" character varying(200),
    "MarketingTeamId" integer,
    "SewingEffiMkt" numeric,
    "SewingEffiPlaning" numeric,
    "DeffdLcCost" numeric,
    "CutOffUsed" character varying(50),
    "ControlDelivery" character varying(50),
    "DeliveryBufferDays" integer,
    "MinQuotedProfit" numeric,
    "MinBudgetedProfit" numeric,
    "Status" character varying(50),
    "CommercialInvoice" character varying(100),
    "TagSample" character varying(100),
    "ImagePath" character varying(150),
    "ImageName" character varying(100)
);
 "   DROP TABLE public."BuyerProfile";
       public         postgres    false    3            �           1259    54777    BuyerProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."BuyerProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."BuyerProfile_Id_seq";
       public       postgres    false    470    3            �           0    0    BuyerProfile_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."BuyerProfile_Id_seq" OWNED BY public."BuyerProfile"."Id";
            public       postgres    false    469            ~           1259    54258    BuyerWiesSeason    TABLE     �   CREATE TABLE public."BuyerWiesSeason" (
    "Id" integer NOT NULL,
    "BuyerId" integer,
    "SeasonName" character varying(100)
);
 %   DROP TABLE public."BuyerWiesSeason";
       public         postgres    false    3            }           1259    54256    BuyerWiesSeason_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."BuyerWiesSeason_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."BuyerWiesSeason_Id_seq";
       public       postgres    false    3    382            �           0    0    BuyerWiesSeason_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."BuyerWiesSeason_Id_seq" OWNED BY public."BuyerWiesSeason"."Id";
            public       postgres    false    381            t           1259    54207    CapacityAllocation    TABLE     �   CREATE TABLE public."CapacityAllocation" (
    "Id" integer NOT NULL,
    "Company" character varying(100),
    "Location" character varying(100),
    "YearId" integer,
    "MonthId" integer
);
 (   DROP TABLE public."CapacityAllocation";
       public         postgres    false    3            s           1259    54205    CapacityAllocation_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CapacityAllocation_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."CapacityAllocation_Id_seq";
       public       postgres    false    372    3            �           0    0    CapacityAllocation_Id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."CapacityAllocation_Id_seq" OWNED BY public."CapacityAllocation"."Id";
            public       postgres    false    371            �           1259    54523    CapacityCalculation    TABLE     �  CREATE TABLE public."CapacityCalculation" (
    "Id" integer NOT NULL,
    "CompanyId" integer,
    "CapacitySource" character varying(100),
    "Location" character varying(100),
    "Year" character varying(100),
    "Month" character varying(100),
    "ManOrMachinePerLine" character varying(100),
    "BasicSAM" numeric,
    "Efficiency" numeric,
    "FinType" character varying(100),
    "Smv" numeric,
    "WoHrs" numeric
);
 )   DROP TABLE public."CapacityCalculation";
       public         postgres    false    3            �           1259    54534    CapacityCalculationMonthly    TABLE     �  CREATE TABLE public."CapacityCalculationMonthly" (
    "Id" integer NOT NULL,
    "Date" character varying(100),
    "DayStatus" character varying(100),
    "NoOfLine" integer,
    "CapacityMinutes" numeric,
    "CapacityPcs" numeric,
    "CapacityCalculationId" integer,
    "CapacityCalculationYear" character varying(100),
    "CapacityCalculationMonth" character varying(100),
    "Manpower" numeric
);
 0   DROP TABLE public."CapacityCalculationMonthly";
       public         postgres    false    3            �           1259    54532 !   CapacityCalculationMonthly_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CapacityCalculationMonthly_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."CapacityCalculationMonthly_Id_seq";
       public       postgres    false    424    3            �           0    0 !   CapacityCalculationMonthly_Id_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public."CapacityCalculationMonthly_Id_seq" OWNED BY public."CapacityCalculationMonthly"."Id";
            public       postgres    false    423            �           1259    54545    CapacityCalculationYearly    TABLE     Y  CREATE TABLE public."CapacityCalculationYearly" (
    "Id" integer NOT NULL,
    "Month" character varying(100),
    "WorkingDay" integer,
    "CapacityMinutes" numeric,
    "CapacityPcs" numeric,
    "CapacityCalculationId" integer,
    "CapacityCalculationYear" character varying(100),
    "CapacityCalculationMonth" character varying(100)
);
 /   DROP TABLE public."CapacityCalculationYearly";
       public         postgres    false    3            �           1259    54543     CapacityCalculationYearly_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CapacityCalculationYearly_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public."CapacityCalculationYearly_Id_seq";
       public       postgres    false    3    426            �           0    0     CapacityCalculationYearly_Id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."CapacityCalculationYearly_Id_seq" OWNED BY public."CapacityCalculationYearly"."Id";
            public       postgres    false    425            �           1259    54521    CapacityCalculation_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CapacityCalculation_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."CapacityCalculation_Id_seq";
       public       postgres    false    422    3            �           0    0    CapacityCalculation_Id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."CapacityCalculation_Id_seq" OWNED BY public."CapacityCalculation"."Id";
            public       postgres    false    421            D           1259    45806 
   ColorRange    TABLE     �   CREATE TABLE public."ColorRange" (
    "Id" integer NOT NULL,
    "ColorRangeName" character varying(100),
    status character varying(100)
);
     DROP TABLE public."ColorRange";
       public         postgres    false    3            C           1259    45804    ColorRange_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ColorRange_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."ColorRange_Id_seq";
       public       postgres    false    324    3            �           0    0    ColorRange_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."ColorRange_Id_seq" OWNED BY public."ColorRange"."Id";
            public       postgres    false    323            �           1259    54609 	   ColorType    TABLE     �   CREATE TABLE public."ColorType" (
    "Id" integer NOT NULL,
    "ColorTypeName" character varying(100),
    "Status" character varying(100)
);
    DROP TABLE public."ColorType";
       public         postgres    false    3            �           1259    54607    ColorType_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ColorType_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."ColorType_Id_seq";
       public       postgres    false    3    436            �           0    0    ColorType_Id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."ColorType_Id_seq" OWNED BY public."ColorType"."Id";
            public       postgres    false    435            v           1259    54215    ColourEntry    TABLE     �   CREATE TABLE public."ColourEntry" (
    "Id" integer NOT NULL,
    "ColorName" character varying(100),
    "Status" character varying(100),
    "BuyerNameId" integer
);
 !   DROP TABLE public."ColourEntry";
       public         postgres    false    3            u           1259    54213    ColourEntry_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ColourEntry_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."ColourEntry_Id_seq";
       public       postgres    false    374    3            �           0    0    ColourEntry_Id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."ColourEntry_Id_seq" OWNED BY public."ColourEntry"."Id";
            public       postgres    false    373            �           1259    54627    CommercialCost    TABLE     �   CREATE TABLE public."CommercialCost" (
    "Id" integer NOT NULL,
    "Item" character varying(100),
    "RateIn" double precision,
    "Amount" double precision,
    "Status" character varying(100),
    "PoNo" integer
);
 $   DROP TABLE public."CommercialCost";
       public         postgres    false    3            �           1259    54625    CommercialCost_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CommercialCost_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."CommercialCost_Id_seq";
       public       postgres    false    440    3            �           0    0    CommercialCost_Id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."CommercialCost_Id_seq" OWNED BY public."CommercialCost"."Id";
            public       postgres    false    439            @           1259    45790    CommercialInvoice    TABLE     �   CREATE TABLE public."CommercialInvoice" (
    "Id" integer NOT NULL,
    "CommercialInvoiceName" character varying(100),
    status character varying(100)
);
 '   DROP TABLE public."CommercialInvoice";
       public         postgres    false    3            ?           1259    45788    CommercialInvoice_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CommercialInvoice_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."CommercialInvoice_Id_seq";
       public       postgres    false    3    320            �           0    0    CommercialInvoice_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."CommercialInvoice_Id_seq" OWNED BY public."CommercialInvoice"."Id";
            public       postgres    false    319            �           1259    54598    ConsumptionEntryForm    TABLE     �  CREATE TABLE public."ConsumptionEntryForm" (
    "Id" integer NOT NULL,
    "PoNoId" integer,
    "Color" character varying(100),
    "GmtsSizes" character varying(100),
    "Dia" character varying(100),
    "ItemSizes" character varying(100),
    "FinishCons" numeric,
    "ProcessLoss" numeric,
    "GreyCons" numeric,
    "Rate" numeric,
    "Amount" numeric,
    "Pcs" numeric,
    "TotalQty" numeric,
    "TotalAmount" numeric,
    "Remarks" character varying(100)
);
 *   DROP TABLE public."ConsumptionEntryForm";
       public         postgres    false    3            �           1259    54596    ConsumptionEntryForm_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ConsumptionEntryForm_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."ConsumptionEntryForm_Id_seq";
       public       postgres    false    434    3            �           0    0    ConsumptionEntryForm_Id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."ConsumptionEntryForm_Id_seq" OWNED BY public."ConsumptionEntryForm"."Id";
            public       postgres    false    433            �           1259    54619    ConversionCostForPreCost    TABLE     j  CREATE TABLE public."ConversionCostForPreCost" (
    "Id" integer NOT NULL,
    "FabricDescriptionId" integer,
    "ProcessId" integer,
    "ProcessLoss" double precision,
    "ReqQty" double precision,
    "AvgReqQty" double precision,
    "ChargeUnit" double precision,
    "Amount" double precision,
    "Status" character varying(100),
    "PoNo" integer
);
 .   DROP TABLE public."ConversionCostForPreCost";
       public         postgres    false    3            �           1259    54617    ConversionCostForPreCost_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ConversionCostForPreCost_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."ConversionCostForPreCost_Id_seq";
       public       postgres    false    438    3            �           0    0    ConversionCostForPreCost_Id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public."ConversionCostForPreCost_Id_seq" OWNED BY public."ConversionCostForPreCost"."Id";
            public       postgres    false    437            �            1259    17158    ConversionCostProcess    TABLE     n   CREATE TABLE public."ConversionCostProcess" (
    "ID" integer NOT NULL,
    "Name" character varying(100)
);
 +   DROP TABLE public."ConversionCostProcess";
       public         postgres    false    3            �            1259    17161    ConversionCostProcess_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."ConversionCostProcess_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."ConversionCostProcess_ID_seq";
       public       postgres    false    200    3            �           0    0    ConversionCostProcess_ID_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."ConversionCostProcess_ID_seq" OWNED BY public."ConversionCostProcess"."ID";
            public       postgres    false    201            �           1259    54688    CostComponenetsMasterDetails    TABLE       CREATE TABLE public."CostComponenetsMasterDetails" (
    "Id" integer NOT NULL,
    "JobNoId" integer,
    "PoNoId" integer,
    "CostComponetId" integer,
    "BudgetedCost" double precision,
    "QPrice" double precision,
    "CostComponentName" character varying(200)
);
 2   DROP TABLE public."CostComponenetsMasterDetails";
       public         postgres    false    3            �           1259    54686 #   CostComponenetsMasterDetails_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CostComponenetsMasterDetails_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."CostComponenetsMasterDetails_Id_seq";
       public       postgres    false    450    3            �           0    0 #   CostComponenetsMasterDetails_Id_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public."CostComponenetsMasterDetails_Id_seq" OWNED BY public."CostComponenetsMasterDetails"."Id";
            public       postgres    false    449            &           1259    37640    CostComponentsMaster    TABLE     u   CREATE TABLE public."CostComponentsMaster" (
    "Id" integer NOT NULL,
    "Cost_ComponetName" character varying
);
 *   DROP TABLE public."CostComponentsMaster";
       public         postgres    false    3            *           1259    45671    CountryLocationMapping    TABLE     �   CREATE TABLE public."CountryLocationMapping" (
    "Id" integer NOT NULL,
    "CountryId" integer,
    "UltimateCountryName" character varying(100)
);
 ,   DROP TABLE public."CountryLocationMapping";
       public         postgres    false    3            )           1259    45669    CountryLocationMapping_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CountryLocationMapping_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."CountryLocationMapping_Id_seq";
       public       postgres    false    3    298            �           0    0    CountryLocationMapping_Id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."CountryLocationMapping_Id_seq" OWNED BY public."CountryLocationMapping"."Id";
            public       postgres    false    297            �           1259    54462    CurrencyConversionRate    TABLE     �   CREATE TABLE public."CurrencyConversionRate" (
    "Id" integer NOT NULL,
    "Currency" character varying(100),
    "ConversionRate" integer,
    "Date" character varying(100),
    "MarketingRate" integer
);
 ,   DROP TABLE public."CurrencyConversionRate";
       public         postgres    false    3            �           1259    54460    CurrencyConversionRate_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CurrencyConversionRate_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."CurrencyConversionRate_Id_seq";
       public       postgres    false    3    416            �           0    0    CurrencyConversionRate_Id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."CurrencyConversionRate_Id_seq" OWNED BY public."CurrencyConversionRate"."Id";
            public       postgres    false    415            �           1259    54714 
   Department    TABLE     m   CREATE TABLE public."Department" (
    "Id" integer NOT NULL,
    "DepartmentName" character varying(100)
);
     DROP TABLE public."Department";
       public         postgres    false    3            Z           1259    45897    DepartmentProfile    TABLE     �  CREATE TABLE public."DepartmentProfile" (
    "Id" integer NOT NULL,
    "DepartmentName" character varying(100),
    "ShortName" character varying(100),
    "Division" character varying(100),
    "Address" character varying(200),
    "ContactNumber" character varying(100),
    "ContactPerson" character varying(100),
    "Remark" character varying(100),
    "CountryId" integer,
    "Website" character varying(100),
    "Status" character varying(100),
    "Email" character varying(100)
);
 '   DROP TABLE public."DepartmentProfile";
       public         postgres    false    3            Y           1259    45895    DepartmentProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."DepartmentProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."DepartmentProfile_Id_seq";
       public       postgres    false    346    3            �           0    0    DepartmentProfile_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."DepartmentProfile_Id_seq" OWNED BY public."DepartmentProfile"."Id";
            public       postgres    false    345            �           1259    54712    Department_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Department_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Department_Id_seq";
       public       postgres    false    456    3            �           0    0    Department_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Department_Id_seq" OWNED BY public."Department"."Id";
            public       postgres    false    455            �           1259    54706    Designation    TABLE     o   CREATE TABLE public."Designation" (
    "Id" integer NOT NULL,
    "DesignationName" character varying(100)
);
 !   DROP TABLE public."Designation";
       public         postgres    false    3            �           1259    54704    Designation_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Designation_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Designation_Id_seq";
       public       postgres    false    454    3            �           0    0    Designation_Id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."Designation_Id_seq" OWNED BY public."Designation"."Id";
            public       postgres    false    453            <           1259    45774    DiscountMethod    TABLE     �   CREATE TABLE public."DiscountMethod" (
    "Id" integer NOT NULL,
    "DiscountMethodName" character varying(100),
    status character varying(100)
);
 $   DROP TABLE public."DiscountMethod";
       public         postgres    false    3            ;           1259    45772    DiscountMethod_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."DiscountMethod_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."DiscountMethod_Id_seq";
       public       postgres    false    3    316            �           0    0    DiscountMethod_Id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."DiscountMethod_Id_seq" OWNED BY public."DiscountMethod"."Id";
            public       postgres    false    315            �           1259    54696    Division    TABLE     i   CREATE TABLE public."Division" (
    "Id" integer NOT NULL,
    "DivisionName" character varying(100)
);
    DROP TABLE public."Division";
       public         postgres    false    3            X           1259    45886    DivisionProfile    TABLE     �  CREATE TABLE public."DivisionProfile" (
    "Id" integer NOT NULL,
    "DivisionName" character varying(100),
    "ShortName" character varying(100),
    "CompanyName" character varying(100),
    "Address" character varying(200),
    "ContactNumber" character varying(100),
    "Remark" character varying(100),
    "CountryId" integer,
    "Website" character varying(100),
    "Status" character varying(100),
    "Email" character varying(100),
    "ContactPerson" character varying(100)
);
 %   DROP TABLE public."DivisionProfile";
       public         postgres    false    3            W           1259    45884    DivisionProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."DivisionProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."DivisionProfile_Id_seq";
       public       postgres    false    3    344            �           0    0    DivisionProfile_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."DivisionProfile_Id_seq" OWNED BY public."DivisionProfile"."Id";
            public       postgres    false    343            �           1259    54694    Division_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Division_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Division_Id_seq";
       public       postgres    false    3    452            �           0    0    Division_Id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Division_Id_seq" OWNED BY public."Division"."Id";
            public       postgres    false    451            �           1259    54380    DyeingAndFinishingCharge    TABLE     $  CREATE TABLE public."DyeingAndFinishingCharge" (
    "Id" integer NOT NULL,
    "CompanyName" character varying(100),
    "ConstCompo" character varying(100),
    "ProcessType" character varying(100),
    "ProcessName" character varying(100),
    "Color" character varying(100),
    "WidthDiatype" character varying(100),
    "InHouseRate" character varying(100),
    "UOMId" integer,
    "Ratetype" character varying(100),
    "CustomerRate" character varying(100),
    "SubconBuyer" character varying(100),
    "Status" character varying(100)
);
 .   DROP TABLE public."DyeingAndFinishingCharge";
       public         postgres    false    3            �           1259    54378    DyeingAndFinishingCharge_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."DyeingAndFinishingCharge_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."DyeingAndFinishingCharge_Id_seq";
       public       postgres    false    3    404            �           0    0    DyeingAndFinishingCharge_Id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public."DyeingAndFinishingCharge_Id_seq" OWNED BY public."DyeingAndFinishingCharge"."Id";
            public       postgres    false    403            �           1259    54820 	   ERPModule    TABLE     �   CREATE TABLE public."ERPModule" (
    "Id" integer NOT NULL,
    "ModuleId" integer,
    "ModuleName" character varying(100)
);
    DROP TABLE public."ERPModule";
       public         postgres    false    3            �           1259    54818    ERPModule_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ERPModule_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."ERPModule_Id_seq";
       public       postgres    false    474    3            �           0    0    ERPModule_Id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."ERPModule_Id_seq" OWNED BY public."ERPModule"."Id";
            public       postgres    false    473            �           1259    54438    EmailAddressSetup    TABLE     �   CREATE TABLE public."EmailAddressSetup" (
    "Id" integer NOT NULL,
    "UserType" character varying(100),
    "RecipientName" character varying(100),
    "EmailAddress" character varying(100)
);
 '   DROP TABLE public."EmailAddressSetup";
       public         postgres    false    3            �           1259    54436    EmailAddressSetup_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."EmailAddressSetup_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."EmailAddressSetup_Id_seq";
       public       postgres    false    3    410            �           0    0    EmailAddressSetup_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."EmailAddressSetup_Id_seq" OWNED BY public."EmailAddressSetup"."Id";
            public       postgres    false    409            �           1259    54724    EmployeeCategory    TABLE     y   CREATE TABLE public."EmployeeCategory" (
    "Id" integer NOT NULL,
    "EmployeeCategoryName" character varying(100)
);
 &   DROP TABLE public."EmployeeCategory";
       public         postgres    false    3            �           1259    54722    EmployeeCategory_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."EmployeeCategory_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."EmployeeCategory_Id_seq";
       public       postgres    false    458    3            �           0    0    EmployeeCategory_Id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."EmployeeCategory_Id_seq" OWNED BY public."EmployeeCategory"."Id";
            public       postgres    false    457            �           1259    54556    EmployeeInfo    TABLE     9  CREATE TABLE public."EmployeeInfo" (
    "Id" integer NOT NULL,
    "EmployeeCode" character varying(50),
    "EmployeeFirstName" character varying(100),
    "EmployeeMiddleName" character varying(100),
    "EmployeeLastName" character varying(100),
    "EmployeeNameBangla" character varying(100),
    "FathersName" character varying(100),
    "FathersNameBangla" character varying(100),
    "MothersName" character varying(100),
    "MothersNameBangla" character varying(100),
    "Sex" character varying(50),
    "BirthPlace" character varying(100),
    "DateofBirth" character varying(100),
    "Age" character varying(50),
    "ReligionId" integer,
    "MaritalStatus" character varying(50),
    "BloodGroupId" integer,
    "Nationality" character varying(50),
    "NationalId" integer,
    "PassportNo" integer,
    "EmployeeCategoryId" integer,
    "DesignationLebelId" integer,
    "DesignationId" integer,
    "FunctionalSuperiorId" integer,
    "AdminSuperiorId" integer,
    "IdCardNo" integer,
    "JoiningDate" character varying(50),
    "ConfirmationDate" character varying(50),
    "PunchCardNo" integer,
    "Remarks" character varying(100),
    "CompanyId" integer,
    "LocationId" integer,
    "FloorId" integer,
    "DivisionId" integer,
    "DepartmentId" integer,
    "SectionId" integer,
    "LineNoId" integer
);
 "   DROP TABLE public."EmployeeInfo";
       public         postgres    false    3            �           1259    54554    EmployeeInfo_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."EmployeeInfo_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."EmployeeInfo_Id_seq";
       public       postgres    false    3    428            �           0    0    EmployeeInfo_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."EmployeeInfo_Id_seq" OWNED BY public."EmployeeInfo"."Id";
            public       postgres    false    427            �           1259    54659 
   FabricCost    TABLE     �  CREATE TABLE public."FabricCost" (
    "Id" integer NOT NULL,
    "PoNoId" integer,
    "GmtsItemId" integer,
    "BodyPartId" integer,
    "BodyPartTypeId" integer,
    "FabNatureId" integer,
    "ColorTypeId" integer,
    "FabricDesPreCostId" integer,
    "FabricSourceId" integer,
    "NominatedSuppId" integer,
    "WidthDiaType" character varying(100),
    "GsmWeight" numeric,
    "ColorSizeSensitive" character varying(100),
    "Color" character varying(100),
    "ConsumptionBasis" character varying(100),
    "Uom" character varying(100),
    "AvgGreyCons" numeric,
    "Rate" numeric,
    "Amount" numeric,
    "TotalQty" numeric,
    "TotalAmount" numeric,
    "PreCostingId" integer,
    "SuplierId" integer
);
     DROP TABLE public."FabricCost";
       public         postgres    false    3            �           1259    54657    FabricCost_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."FabricCost_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."FabricCost_Id_seq";
       public       postgres    false    446    3            �           0    0    FabricCost_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."FabricCost_Id_seq" OWNED BY public."FabricCost"."Id";
            public       postgres    false    445            �            1259    17171    FabricDesPreCost    TABLE     W  CREATE TABLE public."FabricDesPreCost" (
    "ID" integer NOT NULL,
    "FabNature" character varying(100),
    "Construction" character varying(100),
    "GSM/Weight" double precision,
    "ColorRange" character varying(100),
    "StichLength" double precision,
    "ProcessLoss" double precision,
    "Composition" character varying(200)
);
 &   DROP TABLE public."FabricDesPreCost";
       public         postgres    false    3            �            1259    17177    FabricDesPreCost_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."FabricDesPreCost_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."FabricDesPreCost_ID_seq";
       public       postgres    false    3    202            �           0    0    FabricDesPreCost_ID_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."FabricDesPreCost_ID_seq" OWNED BY public."FabricDesPreCost"."ID";
            public       postgres    false    203            B           1259    45798    FabricNature    TABLE     �   CREATE TABLE public."FabricNature" (
    "Id" integer NOT NULL,
    "FabricNatureName" character varying(100),
    status character varying(100)
);
 "   DROP TABLE public."FabricNature";
       public         postgres    false    3            A           1259    45796    FabricNature_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."FabricNature_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."FabricNature_Id_seq";
       public       postgres    false    3    322            �           0    0    FabricNature_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."FabricNature_Id_seq" OWNED BY public."FabricNature"."Id";
            public       postgres    false    321            �           1259    54454    FastReactIntgration    TABLE     �   CREATE TABLE public."FastReactIntgration" (
    "Id" integer NOT NULL,
    "ExportPOReceivedfrom" character varying(100),
    "ExportModule" character varying(100)
);
 )   DROP TABLE public."FastReactIntgration";
       public         postgres    false    3            �           1259    54452    FastReactIntgration_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."FastReactIntgration_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."FastReactIntgration_Id_seq";
       public       postgres    false    3    414            �           0    0    FastReactIntgration_Id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."FastReactIntgration_Id_seq" OWNED BY public."FastReactIntgration"."Id";
            public       postgres    false    413            r           1259    54188    FinancialParameterSetup    TABLE       CREATE TABLE public."FinancialParameterSetup" (
    "Id" integer NOT NULL,
    "CompanyName" character varying(100),
    "ApplyingPeriod" character varying(100),
    "To" character varying(100),
    "BEPCM" integer,
    "AskingProfit" integer,
    "NoOfFactoryMachine" integer,
    "MonthlyCMExpense" integer,
    "WorkingHour" integer,
    "CostPerMinute" integer,
    "ActualCM" integer,
    "AskingAVGRate" integer,
    "Status" character varying(100),
    "MaxProfi" integer,
    "DepreciationAndAmortization" integer,
    "InterestExpenses" integer,
    "IncomeTax" integer,
    "OperatingExpenses" integer,
    "AskingCM" integer
);
 -   DROP TABLE public."FinancialParameterSetup";
       public         postgres    false    3            q           1259    54186    FinancialParameterSetup_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."FinancialParameterSetup_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."FinancialParameterSetup_Id_seq";
       public       postgres    false    3    370            �           0    0    FinancialParameterSetup_Id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."FinancialParameterSetup_Id_seq" OWNED BY public."FinancialParameterSetup"."Id";
            public       postgres    false    369            �           1259    54736    Floor    TABLE     c   CREATE TABLE public."Floor" (
    "Id" integer NOT NULL,
    "FloorName" character varying(100)
);
    DROP TABLE public."Floor";
       public         postgres    false    3            �           1259    54734    Floor_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Floor_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Floor_Id_seq";
       public       postgres    false    460    3            �           0    0    Floor_Id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Floor_Id_seq" OWNED BY public."Floor"."Id";
            public       postgres    false    459            �           1259    54744    FunctionalSuperior    TABLE     }   CREATE TABLE public."FunctionalSuperior" (
    "Id" integer NOT NULL,
    "FunctionalSuperiorName" character varying(100)
);
 (   DROP TABLE public."FunctionalSuperior";
       public         postgres    false    3            �           1259    54742    FunctionalSuperior_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."FunctionalSuperior_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."FunctionalSuperior_Id_seq";
       public       postgres    false    462    3            �           0    0    FunctionalSuperior_Id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."FunctionalSuperior_Id_seq" OWNED BY public."FunctionalSuperior"."Id";
            public       postgres    false    461            n           1259    54172    GarmentsItemEntry    TABLE     3  CREATE TABLE public."GarmentsItemEntry" (
    "Id" integer NOT NULL,
    "ItemName" character varying(100),
    "CommercialName" character varying(100),
    "ProductCategoryId" integer,
    "ProductTypeId" integer,
    "StandardSMV" integer,
    "Efficiency" integer,
    "Status" character varying(100)
);
 '   DROP TABLE public."GarmentsItemEntry";
       public         postgres    false    3            m           1259    54170    GarmentsItemEntry_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."GarmentsItemEntry_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."GarmentsItemEntry_Id_seq";
       public       postgres    false    3    366            �           0    0    GarmentsItemEntry_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."GarmentsItemEntry_Id_seq" OWNED BY public."GarmentsItemEntry"."Id";
            public       postgres    false    365            b           1259    54115    GarmentsSampleEntry    TABLE     �   CREATE TABLE public."GarmentsSampleEntry" (
    "Id" integer NOT NULL,
    "SampleName" character varying(100),
    "SampleTypeId" integer,
    "Status" character varying(100)
);
 )   DROP TABLE public."GarmentsSampleEntry";
       public         postgres    false    3            a           1259    54113    GarmentsSampleEntry_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."GarmentsSampleEntry_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."GarmentsSampleEntry_Id_seq";
       public       postgres    false    3    354            �           0    0    GarmentsSampleEntry_Id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."GarmentsSampleEntry_Id_seq" OWNED BY public."GarmentsSampleEntry"."Id";
            public       postgres    false    353            8           1259    45755    GroupProfile    TABLE     �  CREATE TABLE public."GroupProfile" (
    "Id" integer NOT NULL,
    "GroupName" character varying(100),
    "ContactPerson" character varying(100),
    "ContactNumber" character varying(100),
    "CountryId" integer,
    "Website" character varying(100),
    "Email" character varying(100),
    "Address" character varying(200),
    "Remark" character varying(200),
    "Status" character varying(100)
);
 "   DROP TABLE public."GroupProfile";
       public         postgres    false    3            7           1259    45753    GroupProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."GroupProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."GroupProfile_Id_seq";
       public       postgres    false    3    312            �           0    0    GroupProfile_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."GroupProfile_Id_seq" OWNED BY public."GroupProfile"."Id";
            public       postgres    false    311            �            1259    17179    Input_Pannel_PODetails    TABLE     ~  CREATE TABLE public."Input_Pannel_PODetails" (
    "Input_Pannel_ID" integer NOT NULL,
    "Po_details_ID" integer,
    "CountryID" integer,
    "Country_Type" character varying(100),
    "Cutt-off_Date" date,
    "Cutt_off" character varying(150),
    "Country_Shipment_date" date,
    "Remarks" character varying(300),
    "Packing_ID" integer,
    "Quantity" double precision
);
 ,   DROP TABLE public."Input_Pannel_PODetails";
       public         postgres    false    3            �            1259    17185 *   Input_Pannel_PODetails_Input_Pannel_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Input_Pannel_PODetails_Input_Pannel_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 C   DROP SEQUENCE public."Input_Pannel_PODetails_Input_Pannel_ID_seq";
       public       postgres    false    3    204            �           0    0 *   Input_Pannel_PODetails_Input_Pannel_ID_seq    SEQUENCE OWNED BY        ALTER SEQUENCE public."Input_Pannel_PODetails_Input_Pannel_ID_seq" OWNED BY public."Input_Pannel_PODetails"."Input_Pannel_ID";
            public       postgres    false    205            .           1259    45695    ItemCategory    TABLE     �   CREATE TABLE public."ItemCategory" (
    "Id" integer NOT NULL,
    "ItemCategoryName" character varying(100),
    "Status" character varying(100)
);
 "   DROP TABLE public."ItemCategory";
       public         postgres    false    3            -           1259    45693    ItemCategory_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ItemCategory_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."ItemCategory_Id_seq";
       public       postgres    false    302    3            �           0    0    ItemCategory_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."ItemCategory_Id_seq" OWNED BY public."ItemCategory"."Id";
            public       postgres    false    301            �           1259    54648 	   ItemGroup    TABLE     �  CREATE TABLE public."ItemGroup" (
    "Id" integer NOT NULL,
    "ItemCategoryId" integer,
    "GroupCode" character varying(100),
    "ItemGroupName" character varying(100),
    "ItemType" character varying(100),
    "OrderUom" character varying(100),
    "ConsUom" character varying(100),
    "ConvFactor" integer,
    "FancyItem" character varying(100),
    "CalParameter" character varying(100),
    status character varying(100)
);
    DROP TABLE public."ItemGroup";
       public         postgres    false    3            �           1259    54646    ItemGroup_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ItemGroup_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."ItemGroup_Id_seq";
       public       postgres    false    3    444            �           0    0    ItemGroup_Id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."ItemGroup_Id_seq" OWNED BY public."ItemGroup"."Id";
            public       postgres    false    443            �           1259    54361    JournalSetup    TABLE     �   CREATE TABLE public."JournalSetup" (
    "Id" integer NOT NULL,
    "JournalTypeId" integer,
    "PreFix" character varying(100),
    "StartingNumber" integer,
    "Status" character varying(100)
);
 "   DROP TABLE public."JournalSetup";
       public         postgres    false    3            �           1259    54359    JournalSetup_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."JournalSetup_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."JournalSetup_Id_seq";
       public       postgres    false    3    400            �           0    0    JournalSetup_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."JournalSetup_Id_seq" OWNED BY public."JournalSetup"."Id";
            public       postgres    false    399            T           1259    45870    JournalType    TABLE     �   CREATE TABLE public."JournalType" (
    "Id" integer NOT NULL,
    "JournalTypeName" character varying(100),
    status character varying(100)
);
 !   DROP TABLE public."JournalType";
       public         postgres    false    3            S           1259    45868    JournalType_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."JournalType_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."JournalType_Id_seq";
       public       postgres    false    3    340            �           0    0    JournalType_Id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."JournalType_Id_seq" OWNED BY public."JournalType"."Id";
            public       postgres    false    339            �           1259    54369    KnittingCharge    TABLE     �  CREATE TABLE public."KnittingCharge" (
    "Id" integer NOT NULL,
    "CompanyName" character varying(100),
    "BodyPartId" integer,
    "ConstructionComposition" character varying(100),
    "GSM" character varying(100),
    "Gauge" character varying(100),
    "YarnDescription" character varying(100),
    "InHouseRate" integer,
    "CustomerRate" character varying(100),
    "SubconBuyer" character varying(100),
    "UOMId" integer,
    "Status" character varying(100)
);
 $   DROP TABLE public."KnittingCharge";
       public         postgres    false    3            �           1259    54367    KnittingCharge_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."KnittingCharge_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."KnittingCharge_Id_seq";
       public       postgres    false    402    3            �           0    0    KnittingCharge_Id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."KnittingCharge_Id_seq" OWNED BY public."KnittingCharge"."Id";
            public       postgres    false    401            �           1259    54350    LabTestRateChart    TABLE     r  CREATE TABLE public."LabTestRateChart" (
    "Id" integer NOT NULL,
    "TestCatagory" character varying(100),
    "TestFor" character varying(100),
    "TestItem" character varying(100),
    "Rate" integer,
    "Upcharge" integer,
    "UpchargeAmout" integer,
    "NetRate" integer,
    "Currency" character varying(100),
    "TestingCompany" character varying(100)
);
 &   DROP TABLE public."LabTestRateChart";
       public         postgres    false    3            �           1259    54348    LabTestRateChart_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."LabTestRateChart_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."LabTestRateChart_Id_seq";
       public       postgres    false    398    3            �           0    0    LabTestRateChart_Id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."LabTestRateChart_Id_seq" OWNED BY public."LabTestRateChart"."Id";
            public       postgres    false    397            �           1259    54567    LineNo    TABLE     e   CREATE TABLE public."LineNo" (
    "Id" integer NOT NULL,
    "LineNoName" character varying(100)
);
    DROP TABLE public."LineNo";
       public         postgres    false    3            �           1259    54565    LineNo_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."LineNo_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."LineNo_Id_seq";
       public       postgres    false    3    430            �           0    0    LineNo_Id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."LineNo_Id_seq" OWNED BY public."LineNo"."Id";
            public       postgres    false    429            �           1259    54286    MachineEntry    TABLE       CREATE TABLE public."MachineEntry" (
    "Id" integer NOT NULL,
    "Company" character varying(100),
    "Attachment" character varying(100),
    "Location" character varying(100),
    "ProdCapacity" integer,
    "FloorNo" character varying(100),
    "CapacityUOMId" integer,
    "MachineNo" character varying(100),
    "Brand" character varying(100),
    "Category" character varying(100),
    "Origin" character varying(100),
    "Group" character varying(100),
    "PurchaseDate" character varying(100),
    "DiaWidth" integer,
    "PurchaseCost" integer,
    "Gauge" character varying(100),
    "AccumulatedDep" integer,
    "ExtraCylinder" character varying(100),
    "DepreciationRate" integer,
    "Nooffeeder" character varying(100),
    "DepreciationMethod" character varying(100),
    "Remarks" character varying(100),
    "SequenceNo" integer,
    "Status" character varying(100)
);
 "   DROP TABLE public."MachineEntry";
       public         postgres    false    3            �           1259    54284    MachineEntry_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."MachineEntry_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."MachineEntry_Id_seq";
       public       postgres    false    388    3            �           0    0    MachineEntry_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."MachineEntry_Id_seq" OWNED BY public."MachineEntry"."Id";
            public       postgres    false    387            �           1259    54446    MailRecipientGroup    TABLE     �   CREATE TABLE public."MailRecipientGroup" (
    "Id" integer NOT NULL,
    "CompanyName" character varying(100),
    "MailItem" character varying(100),
    "YouHaveSelected" character varying(100),
    "Status" character varying(100)
);
 (   DROP TABLE public."MailRecipientGroup";
       public         postgres    false    3            �           1259    54444    MailRecipientGroup_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."MailRecipientGroup_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."MailRecipientGroup_Id_seq";
       public       postgres    false    412    3            �           0    0    MailRecipientGroup_Id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."MailRecipientGroup_Id_seq" OWNED BY public."MailRecipientGroup"."Id";
            public       postgres    false    411            �           1259    54400    MarketingTeamInfo    TABLE     %  CREATE TABLE public."MarketingTeamInfo" (
    "Id" integer NOT NULL,
    "TeamName" character varying(100),
    "TeamLeaderId" integer,
    "Designation" character varying(100),
    "Email" character varying(100),
    "ContactNo" character varying(100),
    "Status" character varying(100)
);
 '   DROP TABLE public."MarketingTeamInfo";
       public         postgres    false    3            �           1259    54398    MarketingTeamInfo_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."MarketingTeamInfo_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."MarketingTeamInfo_Id_seq";
       public       postgres    false    3    406            �           0    0    MarketingTeamInfo_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."MarketingTeamInfo_Id_seq" OWNED BY public."MarketingTeamInfo"."Id";
            public       postgres    false    405            �           1259    54411 
   MemberInfo    TABLE       CREATE TABLE public."MemberInfo" (
    "Id" integer NOT NULL,
    "MemberNameOrUserId" integer,
    "TeamLeaderId" integer,
    "Designation" character varying(100),
    "Email" character varying(100),
    "ContactNo" character varying(100),
    "Status" character varying(100)
);
     DROP TABLE public."MemberInfo";
       public         postgres    false    3            �           1259    54409    MemberInfo_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."MemberInfo_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."MemberInfo_Id_seq";
       public       postgres    false    3    408            �           0    0    MemberInfo_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."MemberInfo_Id_seq" OWNED BY public."MemberInfo"."Id";
            public       postgres    false    407            p           1259    54180    MinLeadTimeSlab    TABLE     �   CREATE TABLE public."MinLeadTimeSlab" (
    "Id" integer NOT NULL,
    "CompanyId" integer,
    "LocationId" integer,
    "YearId" integer,
    "MonthId" integer
);
 %   DROP TABLE public."MinLeadTimeSlab";
       public         postgres    false    3            o           1259    54178    MinLeadTimeSlab_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."MinLeadTimeSlab_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."MinLeadTimeSlab_Id_seq";
       public       postgres    false    3    368            �           0    0    MinLeadTimeSlab_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."MinLeadTimeSlab_Id_seq" OWNED BY public."MinLeadTimeSlab"."Id";
            public       postgres    false    367            N           1259    45846    Months    TABLE     �   CREATE TABLE public."Months" (
    "Id" integer NOT NULL,
    "MonthName" character varying(100),
    "MonthNumber" integer,
    status character varying(100)
);
    DROP TABLE public."Months";
       public         postgres    false    3            M           1259    45844    Months_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Months_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Months_Id_seq";
       public       postgres    false    3    334            �           0    0    Months_Id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Months_Id_seq" OWNED BY public."Months"."Id";
            public       postgres    false    333            �            1259    17187    OrderImageUploadTbl    TABLE     �   CREATE TABLE public."OrderImageUploadTbl" (
    "OrderImgUploadID""" integer NOT NULL,
    "InitialOrderID" integer,
    "FileName" character varying(200),
    "FileSize" character varying(300),
    "ImgPath" text
);
 )   DROP TABLE public."OrderImageUploadTbl";
       public         postgres    false    3            �            1259    17193 )   OrderImageUploadTbl_OrderImgUploadID"_seq    SEQUENCE     �   CREATE SEQUENCE public."OrderImageUploadTbl_OrderImgUploadID""_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 C   DROP SEQUENCE public."OrderImageUploadTbl_OrderImgUploadID""_seq";
       public       postgres    false    3    206            �           0    0 )   OrderImageUploadTbl_OrderImgUploadID"_seq    SEQUENCE OWNED BY        ALTER SEQUENCE public."OrderImageUploadTbl_OrderImgUploadID""_seq" OWNED BY public."OrderImageUploadTbl"."OrderImgUploadID""";
            public       postgres    false    207            �            1259    17195 	   OrderItem    TABLE     f   CREATE TABLE public."OrderItem" (
    "ItemID" integer NOT NULL,
    "Name" character varying(100)
);
    DROP TABLE public."OrderItem";
       public         postgres    false    3            �            1259    17198    OrderItem_ItemID_seq    SEQUENCE     �   CREATE SEQUENCE public."OrderItem_ItemID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."OrderItem_ItemID_seq";
       public       postgres    false    208    3            �           0    0    OrderItem_ItemID_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."OrderItem_ItemID_seq" OWNED BY public."OrderItem"."ItemID";
            public       postgres    false    209            6           1259    45743    OtherPartyProfile    TABLE     E  CREATE TABLE public."OtherPartyProfile" (
    "Id" integer NOT NULL,
    "OtherPartyName" character varying(100),
    "ShortName" character varying(100),
    "Address" character varying(100),
    "ContactPerson" character varying(100),
    "CountryNameId" integer,
    "Designation" character varying(100),
    "Remark" character varying(100),
    "ContactNo" character varying(100),
    "Status" character varying(100),
    "Email" character varying(100),
    "URLName" character varying(100),
    "ImageName" character varying(100),
    "ImagePathName" character varying(100)
);
 '   DROP TABLE public."OtherPartyProfile";
       public         postgres    false    3            5           1259    45741    OtherPartyProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."OtherPartyProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."OtherPartyProfile_Id_seq";
       public       postgres    false    3    310            �           0    0    OtherPartyProfile_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."OtherPartyProfile_Id_seq" OWNED BY public."OtherPartyProfile"."Id";
            public       postgres    false    309            h           1259    54142    PageInfo    TABLE     �   CREATE TABLE public."PageInfo" (
    "Id" integer NOT NULL,
    "PageName" character varying(100),
    "PageLink" character varying(100),
    status character varying(100)
);
    DROP TABLE public."PageInfo";
       public         postgres    false    3            g           1259    54140    PageInfo_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."PageInfo_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."PageInfo_Id_seq";
       public       postgres    false    3    360            �           0    0    PageInfo_Id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."PageInfo_Id_seq" OWNED BY public."PageInfo"."Id";
            public       postgres    false    359            0           1259    45719 	   PartyType    TABLE     �   CREATE TABLE public."PartyType" (
    "Id" integer NOT NULL,
    "PartyTypeName" character varying(100),
    "Status" character varying(100)
);
    DROP TABLE public."PartyType";
       public         postgres    false    3            /           1259    45717    PartyType_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."PartyType_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."PartyType_Id_seq";
       public       postgres    false    3    304            �           0    0    PartyType_Id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."PartyType_Id_seq" OWNED BY public."PartyType"."Id";
            public       postgres    false    303            %           1259    37619 
   PreCosting    TABLE     I  CREATE TABLE public."PreCosting" (
    "PrecostingID" integer NOT NULL,
    "OrderID" integer,
    "Costing_Date" date,
    "Incoterm" character varying(100),
    "Incoterm_place" character varying(100),
    "Sew_Efficiency" double precision,
    "PoId" integer,
    "BuyerId" integer,
    "QuotationId" integer,
    "ApprovedId" integer,
    "currencyId" integer,
    "jobQty" integer,
    "companyId" integer,
    "orderUOMId" integer,
    "RegionId" integer,
    "BudgetMinuite" integer,
    "eR" numeric(255,0),
    "CutSMV" numeric(255,0),
    "SewSMV" numeric(255,0),
    "StyleRef" character varying(255),
    "StyleDesc" character varying(255),
    "Remark" character varying(255),
    agent character varying(255),
    "machineLine" character varying(255),
    "prodLineHr" character varying(255),
    "ReadyToApproved" character varying(255),
    "imagesPath" character varying(300),
    "Fileno" character varying(255),
    "internalRef" character varying(255),
    "CopyFrom" character varying(255),
    "Unapproverequest" character varying(255),
    "CutEfficiency" numeric(100,0)
);
     DROP TABLE public."PreCosting";
       public         postgres    false    3            H           1259    45822    ProductCategory    TABLE     �   CREATE TABLE public."ProductCategory" (
    "Id" integer NOT NULL,
    "ProductCategoryName" character varying(100),
    status character varying(100)
);
 %   DROP TABLE public."ProductCategory";
       public         postgres    false    3            G           1259    45820    ProductCategory_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ProductCategory_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."ProductCategory_Id_seq";
       public       postgres    false    3    328            �           0    0    ProductCategory_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."ProductCategory_Id_seq" OWNED BY public."ProductCategory"."Id";
            public       postgres    false    327            x           1259    54223    ProductSubDepartment    TABLE     �   CREATE TABLE public."ProductSubDepartment" (
    "Id" integer NOT NULL,
    "SubDepartmentName" character varying(100),
    "DepartnemtName" character varying(100),
    "BuyerNameId" integer
);
 *   DROP TABLE public."ProductSubDepartment";
       public         postgres    false    3            w           1259    54221    ProductSubDepartment_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ProductSubDepartment_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."ProductSubDepartment_Id_seq";
       public       postgres    false    376    3            �           0    0    ProductSubDepartment_Id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."ProductSubDepartment_Id_seq" OWNED BY public."ProductSubDepartment"."Id";
            public       postgres    false    375            J           1259    45830    ProductType    TABLE     �   CREATE TABLE public."ProductType" (
    "Id" integer NOT NULL,
    "ProductTypeName" character varying(100),
    status character varying(100)
);
 !   DROP TABLE public."ProductType";
       public         postgres    false    3            I           1259    45828    ProductType_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ProductType_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."ProductType_Id_seq";
       public       postgres    false    330    3            �           0    0    ProductType_Id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."ProductType_Id_seq" OWNED BY public."ProductType"."Id";
            public       postgres    false    329            �           1259    54297    ProductionFloor    TABLE       CREATE TABLE public."ProductionFloor" (
    "Id" integer NOT NULL,
    "Company" character varying(100),
    "Location" character varying(100),
    "Floor" character varying(100),
    "FloorSequence" integer,
    "ProductionProcessId" integer,
    "Status" character varying(100)
);
 %   DROP TABLE public."ProductionFloor";
       public         postgres    false    3            �           1259    54295    ProductionFloor_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ProductionFloor_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."ProductionFloor_Id_seq";
       public       postgres    false    390    3            �           0    0    ProductionFloor_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."ProductionFloor_Id_seq" OWNED BY public."ProductionFloor"."Id";
            public       postgres    false    389            R           1259    45862    ProductionProcess    TABLE     �   CREATE TABLE public."ProductionProcess" (
    "Id" integer NOT NULL,
    "ProductionProcessName" character varying(100),
    status character varying(100)
);
 '   DROP TABLE public."ProductionProcess";
       public         postgres    false    3            Q           1259    45860    ProductionProcess_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ProductionProcess_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."ProductionProcess_Id_seq";
       public       postgres    false    338    3            �           0    0    ProductionProcess_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."ProductionProcess_Id_seq" OWNED BY public."ProductionProcess"."Id";
            public       postgres    false    337            ^           1259    45924    ProfitCenter    TABLE     �  CREATE TABLE public."ProfitCenter" (
    "Id" integer NOT NULL,
    "ProfitCenterName" character varying(100),
    "Company" character varying(100),
    "Address" character varying(200),
    "ContactNumber" character varying(100),
    "ContactPerson" character varying(100),
    "Remark" character varying(100),
    "CountryId" integer,
    "Website" character varying(100),
    "Status" character varying(100),
    "Email" character varying(100)
);
 "   DROP TABLE public."ProfitCenter";
       public         postgres    false    3            ]           1259    45922    ProfitCenter_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ProfitCenter_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."ProfitCenter_Id_seq";
       public       postgres    false    3    350            �           0    0    ProfitCenter_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."ProfitCenter_Id_seq" OWNED BY public."ProfitCenter"."Id";
            public       postgres    false    349            �           1259    54809    QuotationInquery    TABLE     �  CREATE TABLE public."QuotationInquery" (
    "Id" integer NOT NULL,
    "CompanyId" integer,
    "BuyerId" integer,
    "StyleRefName" character varying(100),
    "Season" character varying(100),
    "InqRcvdDate" character varying(100),
    "Status" character varying(100),
    "BuyerInquiryNo" character varying(100),
    "DealingMerchantId" integer,
    "GmtsItemId" integer,
    "BulkEstShipDate" character varying(100),
    "Fabrication" character varying(100),
    "BulkOfferQty" double precision,
    "BodyColor" character varying(100),
    "TargetReqQuotDate" character varying(100),
    "TargetSampSubDate" character varying(100),
    "ActualSampSendDate" character varying(100),
    "DepartmentName" character varying(100),
    "ActualQuotDate" character varying(100),
    "BuyerTargetPrice" double precision,
    "BuyerSubmitPrice" double precision,
    "Remarks" character varying(100)
);
 &   DROP TABLE public."QuotationInquery";
       public         postgres    false    3            �           1259    54807    QuotationInquery_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."QuotationInquery_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."QuotationInquery_Id_seq";
       public       postgres    false    472    3            �           0    0    QuotationInquery_Id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."QuotationInquery_Id_seq" OWNED BY public."QuotationInquery"."Id";
            public       postgres    false    471            P           1259    45854 	   Resources    TABLE     �   CREATE TABLE public."Resources" (
    "Id" integer NOT NULL,
    "ResourceName" character varying(100),
    status character varying(100)
);
    DROP TABLE public."Resources";
       public         postgres    false    3            O           1259    45852    Resources_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Resources_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Resources_Id_seq";
       public       postgres    false    3    336            �           0    0    Resources_Id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Resources_Id_seq" OWNED BY public."Resources"."Id";
            public       postgres    false    335            �           1259    54305    SampleProductionTeam    TABLE     �   CREATE TABLE public."SampleProductionTeam" (
    "Id" integer NOT NULL,
    "TeamName" character varying(100),
    "Location" character varying(100),
    "NumberofMembers" integer,
    "TeamEfficiency" integer,
    "Status" character varying(100)
);
 *   DROP TABLE public."SampleProductionTeam";
       public         postgres    false    3            �           1259    54303    SampleProductionTeam_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."SampleProductionTeam_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."SampleProductionTeam_Id_seq";
       public       postgres    false    392    3            �           0    0    SampleProductionTeam_Id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."SampleProductionTeam_Id_seq" OWNED BY public."SampleProductionTeam"."Id";
            public       postgres    false    391            F           1259    45814 
   SampleType    TABLE     �   CREATE TABLE public."SampleType" (
    "Id" integer NOT NULL,
    "SampleTypeName" character varying(100),
    status character varying(100)
);
     DROP TABLE public."SampleType";
       public         postgres    false    3            E           1259    45812    SampleType_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."SampleType_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."SampleType_Id_seq";
       public       postgres    false    3    326            �           0    0    SampleType_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."SampleType_Id_seq" OWNED BY public."SampleType"."Id";
            public       postgres    false    325            `           1259    45935    SectionProfile    TABLE     �  CREATE TABLE public."SectionProfile" (
    "Id" integer NOT NULL,
    "SectionName" character varying(100),
    "ShortName" character varying(100),
    "DepartmentId" integer,
    "Address" character varying(200),
    "ContactNumber" character varying(100),
    "ContactPerson" character varying(100),
    "Remark" character varying(100),
    "CountryId" integer,
    "Website" character varying(100),
    "Status" character varying(100),
    "Email" character varying(100)
);
 $   DROP TABLE public."SectionProfile";
       public         postgres    false    3            _           1259    45933    SectionProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."SectionProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."SectionProfile_Id_seq";
       public       postgres    false    3    352            �           0    0    SectionProfile_Id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."SectionProfile_Id_seq" OWNED BY public."SectionProfile"."Id";
            public       postgres    false    351            �           1259    54267 
   SewingLine    TABLE     I  CREATE TABLE public."SewingLine" (
    "Id" integer NOT NULL,
    "Company" character varying(100),
    "Location" character varying(100),
    "Floor" character varying(100),
    "SewingLineSequence" integer,
    "LineName" character varying(100),
    "SewingGroup" character varying(100),
    "Status" character varying(100)
);
     DROP TABLE public."SewingLine";
       public         postgres    false    3                       1259    54265    SewingLine_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."SewingLine_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."SewingLine_Id_seq";
       public       postgres    false    3    384            �           0    0    SewingLine_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."SewingLine_Id_seq" OWNED BY public."SewingLine"."Id";
            public       postgres    false    383            �           1259    54278    SewingOperation    TABLE     !  CREATE TABLE public."SewingOperation" (
    "Id" integer NOT NULL,
    "Operation" character varying(100),
    "Rate" integer,
    "UOMId" integer,
    "ResourceId" integer,
    "OperatorSMV" integer,
    "HelperSMV" integer,
    "TotalSMV" integer,
    "Action" character varying(100)
);
 %   DROP TABLE public."SewingOperation";
       public         postgres    false    3            �           1259    54276    SewingOperation_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."SewingOperation_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."SewingOperation_Id_seq";
       public       postgres    false    386    3            �           0    0    SewingOperation_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."SewingOperation_Id_seq" OWNED BY public."SewingOperation"."Id";
            public       postgres    false    385            +           1259    45677 
   SiezeEntry    TABLE     �   CREATE TABLE public."SiezeEntry" (
    "Id" integer NOT NULL,
    "Sequence" numeric,
    "Status" character varying,
    "SinzeName" character varying(100)
);
     DROP TABLE public."SiezeEntry";
       public         postgres    false    3            �            1259    17205    Size_Pannel_PODetails    TABLE     �  CREATE TABLE public."Size_Pannel_PODetails" (
    "Size_Pannel_ID" integer NOT NULL,
    "Input_Pannel_ID" integer,
    "ItemID" integer,
    "Article_Number" character varying(150),
    "Color" character varying(100),
    "Size" character varying(100),
    "Quanity" double precision,
    "Rate" numeric(255,0),
    "Amount" numeric(255,0),
    "ExcessCut" numeric(255,0),
    "PlanCutQty" numeric(255,0),
    "Status" character varying(255),
    "BarCode" boolean
);
 +   DROP TABLE public."Size_Pannel_PODetails";
       public         postgres    false    3            �            1259    17208 (   Size_Pannel_PODetails_Size_Pannel_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Size_Pannel_PODetails_Size_Pannel_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 A   DROP SEQUENCE public."Size_Pannel_PODetails_Size_Pannel_ID_seq";
       public       postgres    false    3    210            �           0    0 (   Size_Pannel_PODetails_Size_Pannel_ID_seq    SEQUENCE OWNED BY     {   ALTER SEQUENCE public."Size_Pannel_PODetails_Size_Pannel_ID_seq" OWNED BY public."Size_Pannel_PODetails"."Size_Pannel_ID";
            public       postgres    false    211            �           1259    54470    StoreLocation    TABLE       CREATE TABLE public."StoreLocation" (
    "Id" integer NOT NULL,
    "StoreName" character varying(100),
    "CompanyName" character varying(100),
    "Location" character varying(100),
    "ItemCategoryId" character varying(100),
    "Status" character varying(100)
);
 #   DROP TABLE public."StoreLocation";
       public         postgres    false    3            �           1259    54468    StoreLocation_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."StoreLocation_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."StoreLocation_Id_seq";
       public       postgres    false    418    3            �           0    0    StoreLocation_Id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."StoreLocation_Id_seq" OWNED BY public."StoreLocation"."Id";
            public       postgres    false    417            �            1259    17210    Suplier    TABLE     �  CREATE TABLE public."Suplier" (
    "ID" integer NOT NULL,
    "Name" character varying(100),
    "Designation" character varying(100),
    "CompanyName" character varying(100),
    "ContactPerson" character varying(100),
    "ContactPersionDesignation" character varying(100),
    "SuplierType" character varying(100),
    "SuplyItemID" integer,
    "Nominated" character varying(100)
);
    DROP TABLE public."Suplier";
       public         postgres    false    3            �            1259    17216    Suplier_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Suplier_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Suplier_ID_seq";
       public       postgres    false    212    3            �           0    0    Suplier_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Suplier_ID_seq" OWNED BY public."Suplier"."ID";
            public       postgres    false    213            �            1259    17218 	   Suplyitem    TABLE     �   CREATE TABLE public."Suplyitem" (
    "ID" integer NOT NULL,
    "Name" character varying(100),
    "Description" character varying(100)
);
    DROP TABLE public."Suplyitem";
       public         postgres    false    3            �            1259    17221    Suplyitem_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Suplyitem_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Suplyitem_ID_seq";
       public       postgres    false    3    214            �           0    0    Suplyitem_ID_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Suplyitem_ID_seq" OWNED BY public."Suplyitem"."ID";
            public       postgres    false    215            |           1259    54247    SupplierProfile    TABLE     �  CREATE TABLE public."SupplierProfile" (
    "Id" integer NOT NULL,
    "SupplierName" character varying(100),
    "ShortName" character varying(100),
    "ContactPerson" character varying(100),
    "Designation" character varying(100),
    "ContactNo" character varying(100),
    "Email" character varying(100),
    "HttpWww" character varying(100),
    "AddressOne" character varying(100),
    "AddressTwo" character varying(100),
    "AddressThree" character varying(100),
    "AddressFour" character varying(100),
    "CountryId" character varying(100),
    "PartyTypeIds" character varying(100),
    "TagCompany" character varying(100),
    "LinkToBuyer" character varying(100),
    "CreditLimitDays" integer,
    "CrditLimitAmount" integer,
    "CrditLimitAmountType" character varying(50),
    "DiscountMethod" character varying(50),
    "SecuirityDeducted" character varying(50),
    "VatToBeDeducted" character varying(50),
    "AitToBeDeducted" character varying(50),
    "Remark" character varying(150),
    "Individual" character varying(50),
    "Status" character varying(50),
    "SupplierNature" character varying(200),
    "Image" character varying(200),
    "TagBuyer" character varying(200),
    "SupplierRef" character varying(200)
);
 %   DROP TABLE public."SupplierProfile";
       public         postgres    false    3            {           1259    54245    SupplierProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."SupplierProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."SupplierProfile_Id_seq";
       public       postgres    false    380    3            �           0    0    SupplierProfile_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."SupplierProfile_Id_seq" OWNED BY public."SupplierProfile"."Id";
            public       postgres    false    379            4           1259    45735    TNATaskEntry    TABLE     I  CREATE TABLE public."TNATaskEntry" (
    "Id" integer NOT NULL,
    "TaskNameId" integer,
    "TaskShortName" character varying(100),
    "Penalty" character varying(100),
    "SequenceNo" integer,
    "Completion" integer,
    "GroupName" character varying(100),
    "Status" character varying(100),
    "GroupSeqNo" integer
);
 "   DROP TABLE public."TNATaskEntry";
       public         postgres    false    3            3           1259    45733    TNATaskEntry_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TNATaskEntry_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."TNATaskEntry_Id_seq";
       public       postgres    false    3    308            �           0    0    TNATaskEntry_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."TNATaskEntry_Id_seq" OWNED BY public."TNATaskEntry"."Id";
            public       postgres    false    307            2           1259    45727    TNATaskNameEntry    TABLE     �   CREATE TABLE public."TNATaskNameEntry" (
    "Id" integer NOT NULL,
    "TNATaskName" character varying(100),
    "Status" character varying(100)
);
 &   DROP TABLE public."TNATaskNameEntry";
       public         postgres    false    3            1           1259    45725    TNATaskNameEntry_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TNATaskNameEntry_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."TNATaskNameEntry_Id_seq";
       public       postgres    false    306    3            �           0    0    TNATaskNameEntry_Id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."TNATaskNameEntry_Id_seq" OWNED BY public."TNATaskNameEntry"."Id";
            public       postgres    false    305            z           1259    54239    TNATaskPercent    TABLE     �   CREATE TABLE public."TNATaskPercent" (
    "Id" integer NOT NULL,
    "TaskNameId" integer,
    "BuyerNameId" integer,
    "StartPercent" integer,
    "NoticeBefore" integer,
    "EndPercent" integer,
    "Status" character varying(100)
);
 $   DROP TABLE public."TNATaskPercent";
       public         postgres    false    3            y           1259    54237    TNATaskPercent_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TNATaskPercent_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."TNATaskPercent_Id_seq";
       public       postgres    false    378    3            �           0    0    TNATaskPercent_Id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."TNATaskPercent_Id_seq" OWNED BY public."TNATaskPercent"."Id";
            public       postgres    false    377            l           1259    54160    TermsNCondition    TABLE     �   CREATE TABLE public."TermsNCondition" (
    "Id" integer NOT NULL,
    "TermsnCondition" character varying(150),
    "MoreTermsNCondition" character varying(150),
    status character varying(100)
);
 %   DROP TABLE public."TermsNCondition";
       public         postgres    false    3            k           1259    54158    TermsNCondition_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TermsNCondition_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."TermsNCondition_Id_seq";
       public       postgres    false    364    3            �           0    0    TermsNCondition_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."TermsNCondition_Id_seq" OWNED BY public."TermsNCondition"."Id";
            public       postgres    false    363            �           1259    54637    TrimCost    TABLE     '  CREATE TABLE public."TrimCost" (
    "Id" integer NOT NULL,
    "GroupId" integer,
    "CountryId" integer,
    "Description" character varying(100),
    "BrandSupRef" character varying(100),
    "Remarks" character varying(100),
    "NominatedSuppId" integer,
    "ConsUOMId" integer,
    "ConsUnitGmts" double precision,
    "Rate" double precision,
    "Amount" double precision,
    "TotalQty" double precision,
    "TotalAmount" double precision,
    "ApvlReq" character varying(80),
    "ImagePath" character varying(200),
    "PoNo" integer
);
    DROP TABLE public."TrimCost";
       public         postgres    false    3            �           1259    54635    TrimCost_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TrimCost_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."TrimCost_Id_seq";
       public       postgres    false    3    442            �           0    0    TrimCost_Id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."TrimCost_Id_seq" OWNED BY public."TrimCost"."Id";
            public       postgres    false    441            V           1259    45878 
   TrimsGroup    TABLE     �   CREATE TABLE public."TrimsGroup" (
    "Id" integer NOT NULL,
    "TrimsGroupName" character varying(100),
    status character varying(100)
);
     DROP TABLE public."TrimsGroup";
       public         postgres    false    3            U           1259    45876    TrimsGroup_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TrimsGroup_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."TrimsGroup_Id_seq";
       public       postgres    false    342    3            �           0    0    TrimsGroup_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."TrimsGroup_Id_seq" OWNED BY public."TrimsGroup"."Id";
            public       postgres    false    341            d           1259    54123    Type    TABLE     �   CREATE TABLE public."Type" (
    "Id" integer NOT NULL,
    "TypeName" character varying(100),
    status character varying(100)
);
    DROP TABLE public."Type";
       public         postgres    false    3            c           1259    54121    Type_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Type_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Type_Id_seq";
       public       postgres    false    3    356            �           0    0    Type_Id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Type_Id_seq" OWNED BY public."Type"."Id";
            public       postgres    false    355            :           1259    45766    UOM    TABLE     �   CREATE TABLE public."UOM" (
    "Id" integer NOT NULL,
    "UomName" character varying(100),
    status character varying(100)
);
    DROP TABLE public."UOM";
       public         postgres    false    3            9           1259    45764 
   UOM_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."UOM_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public."UOM_Id_seq";
       public       postgres    false    314    3            �           0    0 
   UOM_Id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."UOM_Id_seq" OWNED BY public."UOM"."Id";
            public       postgres    false    313            \           1259    45915    Upload    TABLE     �   CREATE TABLE public."Upload" (
    "Id" integer NOT NULL,
    "Name" character varying(100),
    "Address" character varying(100),
    "ImgPath" character varying(100)
);
    DROP TABLE public."Upload";
       public         postgres    false    3            [           1259    45913    Upload_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Upload_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Upload_Id_seq";
       public       postgres    false    3    348            �           0    0    Upload_Id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Upload_Id_seq" OWNED BY public."Upload"."Id";
            public       postgres    false    347            �           1259    54839    VariableListTable    TABLE     �   CREATE TABLE public."VariableListTable" (
    "Id" integer NOT NULL,
    "CompanyId" integer,
    "ModuleId" integer,
    "VariableName" character varying(100)
);
 '   DROP TABLE public."VariableListTable";
       public         postgres    false    3            �           1259    54837    VariableListTable_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."VariableListTable_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."VariableListTable_Id_seq";
       public       postgres    false    3    478            �           0    0    VariableListTable_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."VariableListTable_Id_seq" OWNED BY public."VariableListTable"."Id";
            public       postgres    false    477            �           1259    54828    VariableSettingsTable    TABLE     �  CREATE TABLE public."VariableSettingsTable" (
    "Id" integer NOT NULL,
    "CompanyId" integer,
    "ModuleId" integer,
    "CountPageInputField" integer,
    "VariableListId" integer,
    "LabelOne" character varying(100),
    "ValueOne" character varying(300),
    "LabelTwo" character varying(100),
    "ValueTwo" character varying(300),
    "LabelThree" character varying(100),
    "ValueThree" character varying(100),
    "LabelFour" character varying(100),
    "ValueFour" character varying(100),
    "LabelFive" character varying(100),
    "ValueFive" character varying(100),
    "LabelSix" character varying(100),
    "ValueSix" character varying(100)
);
 +   DROP TABLE public."VariableSettingsTable";
       public         postgres    false    3            �           1259    54826    VariableSettingsTable_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."VariableSettingsTable_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."VariableSettingsTable_Id_seq";
       public       postgres    false    476    3            �           0    0    VariableSettingsTable_Id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."VariableSettingsTable_Id_seq" OWNED BY public."VariableSettingsTable"."Id";
            public       postgres    false    475            �           1259    54678    WashCost    TABLE     1  CREATE TABLE public."WashCost" (
    "Id" integer NOT NULL,
    "PoNo" integer,
    "Name" character varying(100),
    "TypeId" integer,
    "CountryId" integer,
    "ConsOneDznGmts" character varying(100),
    "Rate" double precision,
    "Amount" double precision,
    "Status" character varying(80)
);
    DROP TABLE public."WashCost";
       public         postgres    false    3            �           1259    54676    WashCost_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."WashCost_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."WashCost_Id_seq";
       public       postgres    false    448    3            �           0    0    WashCost_Id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."WashCost_Id_seq" OWNED BY public."WashCost"."Id";
            public       postgres    false    447            (           1259    45663 	   YarnBrand    TABLE     �   CREATE TABLE public."YarnBrand" (
    "yarnBrandId" integer NOT NULL,
    "yarnBrandName" character varying(100),
    "sequenceNo" integer,
    status character varying(100)
);
    DROP TABLE public."YarnBrand";
       public         postgres    false    3            '           1259    45661    YarnBrand_yarnBrandId_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnBrand_yarnBrandId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."YarnBrand_yarnBrandId_seq";
       public       postgres    false    296    3            �           0    0    YarnBrand_yarnBrandId_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."YarnBrand_yarnBrandId_seq" OWNED BY public."YarnBrand"."yarnBrandId";
            public       postgres    false    295            �            1259    17223 	   YarnComp1    TABLE     b   CREATE TABLE public."YarnComp1" (
    "ID" integer NOT NULL,
    "Name" character varying(100)
);
    DROP TABLE public."YarnComp1";
       public         postgres    false    3            �            1259    17226    YarnComp1_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnComp1_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."YarnComp1_ID_seq";
       public       postgres    false    216    3            �           0    0    YarnComp1_ID_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."YarnComp1_ID_seq" OWNED BY public."YarnComp1"."ID";
            public       postgres    false    217            �           1259    54587    YarnCost    TABLE     .  CREATE TABLE public."YarnCost" (
    "Id" integer NOT NULL,
    "CountId" integer,
    "PoId" integer,
    "Comp1Id" integer,
    percentage numeric,
    "Color" character varying(100),
    "TypeId" integer,
    "ConsQnty" numeric,
    "SupplierId" integer,
    "Rate" numeric,
    "Amount" numeric
);
    DROP TABLE public."YarnCost";
       public         postgres    false    3            �            1259    17228    YarnCostPreCosting    TABLE     B  CREATE TABLE public."YarnCostPreCosting" (
    "ID" integer NOT NULL,
    "PreCostingID" integer,
    "CountID" integer,
    "Comp1ID" integer,
    "Percent" double precision,
    "YarnTypeID" integer,
    "ConsQnty" double precision,
    "SupplierID" integer,
    "Rate" double precision,
    "Amont" double precision
);
 (   DROP TABLE public."YarnCostPreCosting";
       public         postgres    false    3            �            1259    17231    YarnCostPreCosting_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnCostPreCosting_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."YarnCostPreCosting_ID_seq";
       public       postgres    false    3    218            �           0    0    YarnCostPreCosting_ID_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."YarnCostPreCosting_ID_seq" OWNED BY public."YarnCostPreCosting"."ID";
            public       postgres    false    219            �           1259    54585    YarnCost_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnCost_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."YarnCost_Id_seq";
       public       postgres    false    3    432            �           0    0    YarnCost_Id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."YarnCost_Id_seq" OWNED BY public."YarnCost"."Id";
            public       postgres    false    431            �            1259    17233 	   YarnCount    TABLE     �   CREATE TABLE public."YarnCount" (
    "ID" integer NOT NULL,
    "Name" character varying(100),
    "Sequence" numeric(100,0),
    "Status" character varying(100)
);
    DROP TABLE public."YarnCount";
       public         postgres    false    3            �           1259    54313    YarnCountDetermination    TABLE     c  CREATE TABLE public."YarnCountDetermination" (
    "Id" integer NOT NULL,
    "FabricNature" character varying(100),
    "Construction" character varying(100),
    "ColorRange" character varying(100),
    "GSM" character varying(100),
    "Status" character varying(100),
    "StitchLength" numeric,
    "ProcessLoss" numeric,
    "SequenceNo" numeric
);
 ,   DROP TABLE public."YarnCountDetermination";
       public         postgres    false    3            �           1259    54324    YarnCountDeterminationChild    TABLE     �   CREATE TABLE public."YarnCountDeterminationChild" (
    "Id" integer NOT NULL,
    "CompositionId" integer,
    "Percentage" numeric,
    "YarnCountId" integer,
    "Type" character varying(100)
);
 1   DROP TABLE public."YarnCountDeterminationChild";
       public         postgres    false    3            �           1259    54322 "   YarnCountDeterminationChild_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnCountDeterminationChild_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public."YarnCountDeterminationChild_Id_seq";
       public       postgres    false    396    3            �           0    0 "   YarnCountDeterminationChild_Id_seq    SEQUENCE OWNED BY     o   ALTER SEQUENCE public."YarnCountDeterminationChild_Id_seq" OWNED BY public."YarnCountDeterminationChild"."Id";
            public       postgres    false    395            �           1259    54311    YarnCountDetermination_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnCountDetermination_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."YarnCountDetermination_Id_seq";
       public       postgres    false    3    394            �           0    0    YarnCountDetermination_Id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."YarnCountDetermination_Id_seq" OWNED BY public."YarnCountDetermination"."Id";
            public       postgres    false    393            �            1259    17236    YarnCount_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnCount_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."YarnCount_ID_seq";
       public       postgres    false    220    3            �           0    0    YarnCount_ID_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."YarnCount_ID_seq" OWNED BY public."YarnCount"."ID";
            public       postgres    false    221            �           1259    54488    YarnRate    TABLE       CREATE TABLE public."YarnRate" (
    "Id" integer NOT NULL,
    "SupplierId" integer,
    "YarnCountId" integer,
    "CompositionId" integer,
    "Percentage" numeric,
    "Type" character varying(100),
    "RateOrKg" numeric,
    "EffectiveDate" character varying(100)
);
    DROP TABLE public."YarnRate";
       public         postgres    false    3            �           1259    54486    YarnRate_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnRate_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."YarnRate_Id_seq";
       public       postgres    false    3    420            �           0    0    YarnRate_Id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."YarnRate_Id_seq" OWNED BY public."YarnRate"."Id";
            public       postgres    false    419            �            1259    17238    YarnType    TABLE     �   CREATE TABLE public."YarnType" (
    "ID" integer NOT NULL,
    "Type" character varying(100),
    "Description" character varying(100)
);
    DROP TABLE public."YarnType";
       public         postgres    false    3            �            1259    17241    YarnType_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnType_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."YarnType_ID_seq";
       public       postgres    false    222    3            �           0    0    YarnType_ID_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."YarnType_ID_seq" OWNED BY public."YarnType"."ID";
            public       postgres    false    223            L           1259    45838    Years    TABLE     r   CREATE TABLE public."Years" (
    "Id" integer NOT NULL,
    "Year" integer,
    status character varying(100)
);
    DROP TABLE public."Years";
       public         postgres    false    3            K           1259    45836    Years_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Years_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Years_Id_seq";
       public       postgres    false    332    3            �           0    0    Years_Id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Years_Id_seq" OWNED BY public."Years"."Id";
            public       postgres    false    331                       1259    17933    avg_grey_cons_fabric_cost    TABLE     @  CREATE TABLE public.avg_grey_cons_fabric_cost (
    id integer NOT NULL,
    precosting_id integer,
    febric_cost_id integer,
    po_no character varying(255),
    color character varying(255),
    gmts_sizes double precision,
    dia double precision,
    item_sizes double precision,
    finish_cons double precision,
    process_loss double precision,
    grey_cons double precision,
    rate double precision,
    amount double precision,
    pcs double precision,
    total_qty double precision,
    total_amount double precision,
    remarks character varying(255)
);
 -   DROP TABLE public.avg_grey_cons_fabric_cost;
       public         postgres    false    3                       1259    17931     avg_grey_cons_fabric_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.avg_grey_cons_fabric_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.avg_grey_cons_fabric_cost_id_seq;
       public       postgres    false    281    3            �           0    0     avg_grey_cons_fabric_cost_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.avg_grey_cons_fabric_cost_id_seq OWNED BY public.avg_grey_cons_fabric_cost.id;
            public       postgres    false    280            �            1259    17243    commercial_cost    TABLE     �   CREATE TABLE public.commercial_cost (
    id integer NOT NULL,
    precosting_id integer,
    item character varying(255),
    rate_in character varying(255),
    amount double precision,
    status character varying(255)
);
 #   DROP TABLE public.commercial_cost;
       public         postgres    false    3            �            1259    17249    commercial_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.commercial_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.commercial_cost_id_seq;
       public       postgres    false    3    224            �           0    0    commercial_cost_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.commercial_cost_id_seq OWNED BY public.commercial_cost.id;
            public       postgres    false    225            �            1259    17251    commission_cost_pre_costing    TABLE       CREATE TABLE public.commission_cost_pre_costing (
    id integer NOT NULL,
    precosting_id integer,
    particulars character varying(255),
    commn_base character varying(255),
    commn_rate character varying(255),
    amount double precision,
    status character varying(255)
);
 /   DROP TABLE public.commission_cost_pre_costing;
       public         postgres    false    3            �            1259    17257    commission_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.commission_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.commission_cost_id_seq;
       public       postgres    false    226    3            �           0    0    commission_cost_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.commission_cost_id_seq OWNED BY public.commission_cost_pre_costing.id;
            public       postgres    false    227            ,           1259    45685    composition    TABLE     �   CREATE TABLE public.composition (
    id integer NOT NULL,
    compositionname character varying NOT NULL,
    status character varying
);
    DROP TABLE public.composition;
       public         postgres    false    3                       1259    17977     cons_dzn_gmts_embellishment_cost    TABLE     �  CREATE TABLE public.cons_dzn_gmts_embellishment_cost (
    id integer NOT NULL,
    embellishment_cost_id integer,
    po_no character varying(255),
    country character varying(255),
    gmts_item character varying(255),
    gmts_color character varying(255),
    gmts_sizes character varying(255),
    cons double precision,
    rate double precision,
    amount double precision
);
 4   DROP TABLE public.cons_dzn_gmts_embellishment_cost;
       public         postgres    false    3                       1259    17975 '   cons_dzn_gmts_embellishment_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cons_dzn_gmts_embellishment_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public.cons_dzn_gmts_embellishment_cost_id_seq;
       public       postgres    false    3    285            �           0    0 '   cons_dzn_gmts_embellishment_cost_id_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public.cons_dzn_gmts_embellishment_cost_id_seq OWNED BY public.cons_dzn_gmts_embellishment_cost.id;
            public       postgres    false    284                       1259    17993    cons_dzn_gmts_wash_cost    TABLE     p  CREATE TABLE public.cons_dzn_gmts_wash_cost (
    id integer NOT NULL,
    wash_cost_id integer,
    po_no character varying(255),
    country character varying(255),
    gmts_item character varying(255),
    gmts_color character varying(255),
    gmts_sizes character varying(255),
    cons double precision,
    rate double precision,
    amount double precision
);
 +   DROP TABLE public.cons_dzn_gmts_wash_cost;
       public         postgres    false    3                       1259    17991    cons_dzn_gmts_wash_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cons_dzn_gmts_wash_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.cons_dzn_gmts_wash_cost_id_seq;
       public       postgres    false    287    3            �           0    0    cons_dzn_gmts_wash_cost_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.cons_dzn_gmts_wash_cost_id_seq OWNED BY public.cons_dzn_gmts_wash_cost.id;
            public       postgres    false    286                       1259    17961    cons_unit_gmts_trim_cost    TABLE     L  CREATE TABLE public.cons_unit_gmts_trim_cost (
    id integer NOT NULL,
    trim_cost_id integer,
    po_no character varying(255),
    gmts_item character varying(255),
    country character varying(255),
    gmts_color character varying(255),
    gmts_sizes double precision,
    item_sizes double precision,
    cons double precision,
    ex_percentage double precision,
    tot_cons double precision,
    rate double precision,
    amount double precision,
    total_qty double precision,
    total_amount double precision,
    placement double precision,
    pcs double precision
);
 ,   DROP TABLE public.cons_unit_gmts_trim_cost;
       public         postgres    false    3                       1259    17959    cons_unit_gmts_trim_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cons_unit_gmts_trim_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.cons_unit_gmts_trim_cost_id_seq;
       public       postgres    false    283    3            �           0    0    cons_unit_gmts_trim_cost_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.cons_unit_gmts_trim_cost_id_seq OWNED BY public.cons_unit_gmts_trim_cost.id;
            public       postgres    false    282            �            1259    17259    embellishment_cost_pre_costing    TABLE     �  CREATE TABLE public.embellishment_cost_pre_costing (
    id integer NOT NULL,
    precosting_id integer,
    name character varying(255),
    type character varying(255),
    body_part integer,
    country character varying(255),
    emb_supplier character varying(255),
    cons_dzn_gmts character varying(255),
    rate character varying(255),
    amount double precision,
    status character varying(255)
);
 2   DROP TABLE public.embellishment_cost_pre_costing;
       public         postgres    false    3            �            1259    17265    embellishment_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.embellishment_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.embellishment_cost_id_seq;
       public       postgres    false    3    228            �           0    0    embellishment_cost_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.embellishment_cost_id_seq OWNED BY public.embellishment_cost_pre_costing.id;
            public       postgres    false    229                       1259    17917    item_details_order_entry    TABLE     �  CREATE TABLE public.item_details_order_entry (
    id integer NOT NULL,
    order_entry_id integer,
    item character varying(255),
    ratio double precision,
    sew_smv_pcs double precision,
    cut_smv_pcs double precision,
    fin_smv_pcs double precision,
    complexity character varying(255),
    print character varying(255),
    embro_yes_no character varying(255),
    embro_number double precision,
    wash_yes_no character varying(255),
    wash_number double precision,
    sp_works_yes_no character varying(255),
    sp_works_number double precision,
    gmts_dyeing_yes_no character varying(255),
    gmts_dyeing_number double precision,
    aop_yes_no character varying(255),
    aop_number double precision
);
 ,   DROP TABLE public.item_details_order_entry;
       public         postgres    false    3                       1259    17915    item_details_order_entry_id_seq    SEQUENCE     �   CREATE SEQUENCE public.item_details_order_entry_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.item_details_order_entry_id_seq;
       public       postgres    false    3    279            �           0    0    item_details_order_entry_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.item_details_order_entry_id_seq OWNED BY public.item_details_order_entry.id;
            public       postgres    false    278                       1259    17844    other_cost_pre_costing    TABLE     �   CREATE TABLE public.other_cost_pre_costing (
    id integer NOT NULL,
    pre_costing_id integer,
    cost_component character varying(255),
    budgeted_cost double precision,
    percentage_q_price double precision
);
 *   DROP TABLE public.other_cost_pre_costing;
       public         postgres    false    3                       1259    17842    other_cost_pre_costing_id_seq    SEQUENCE     �   CREATE SEQUENCE public.other_cost_pre_costing_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.other_cost_pre_costing_id_seq;
       public       postgres    false    277    3            �           0    0    other_cost_pre_costing_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.other_cost_pre_costing_id_seq OWNED BY public.other_cost_pre_costing.id;
            public       postgres    false    276            #           1259    18052    parsial_fabric_booking_items    TABLE     �  CREATE TABLE public.parsial_fabric_booking_items (
    id integer NOT NULL,
    order_id integer,
    booking_master_id integer,
    po_number character varying(255),
    body_part character varying(255),
    color_type character varying(255),
    dia_width_type character varying(255),
    construction character varying(255),
    composition character varying(255),
    gsm character varying(255),
    gmts_color character varying(255),
    item_color character varying(255),
    dia numeric,
    wo_qnty double precision,
    adj_qnty double precision,
    ac_wo_qnty double precision,
    rate double precision,
    amount double precision
);
 0   DROP TABLE public.parsial_fabric_booking_items;
       public         postgres    false    3            "           1259    18050 #   parsial_fabric_booking_items_id_seq    SEQUENCE     �   CREATE SEQUENCE public.parsial_fabric_booking_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public.parsial_fabric_booking_items_id_seq;
       public       postgres    false    291    3            �           0    0 #   parsial_fabric_booking_items_id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public.parsial_fabric_booking_items_id_seq OWNED BY public.parsial_fabric_booking_items.id;
            public       postgres    false    290            !           1259    18020    parsial_fabric_booking_master    TABLE     �  CREATE TABLE public.parsial_fabric_booking_master (
    id integer NOT NULL,
    booking_no character varying(255) NOT NULL,
    booking_month character varying(255) NOT NULL,
    booking_year character varying(255) NOT NULL,
    company_name character varying(255) NOT NULL,
    buyer_name character varying(255) NOT NULL,
    fabric_nature character varying(255) NOT NULL,
    fabric_source character varying(255) NOT NULL,
    booking_date character varying(255) NOT NULL,
    delivery_date character varying(255) NOT NULL,
    pay_mode character varying(255) NOT NULL,
    supplier_name character varying(255) NOT NULL,
    currency character varying(255),
    exchange_rate double precision,
    source character varying(255),
    attention character varying(255),
    booking_percent double precision,
    collar_excess_cut_percentage character varying(255),
    cuff_excess_cut_percentage character varying(255),
    ready_to_approved character varying(255),
    internal_ref_no character varying(255),
    file_no character varying(255),
    un_approve_request character varying(255),
    fabric_composition character varying(255),
    level character varying(255),
    remarks character varying(255)
);
 1   DROP TABLE public.parsial_fabric_booking_master;
       public         postgres    false    3                        1259    18018 $   parsial_fabric_booking_master_id_seq    SEQUENCE     �   CREATE SEQUENCE public.parsial_fabric_booking_master_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.parsial_fabric_booking_master_id_seq;
       public       postgres    false    3    289            �           0    0 $   parsial_fabric_booking_master_id_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.parsial_fabric_booking_master_id_seq OWNED BY public.parsial_fabric_booking_master.id;
            public       postgres    false    288            j           1259    54150 	   partytype    TABLE     �   CREATE TABLE public.partytype (
    id integer NOT NULL,
    partytypename character varying(100),
    status character varying(100)
);
    DROP TABLE public.partytype;
       public         postgres    false    3            i           1259    54148    partytype_id_seq    SEQUENCE     �   CREATE SEQUENCE public.partytype_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.partytype_id_seq;
       public       postgres    false    3    362            �           0    0    partytype_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.partytype_id_seq OWNED BY public.partytype.id;
            public       postgres    false    361            �            1259    17267    tblAgentInfo    TABLE     p   CREATE TABLE public."tblAgentInfo" (
    "AgentID" integer NOT NULL,
    "Agent_Name" character varying(100)
);
 "   DROP TABLE public."tblAgentInfo";
       public         postgres    false    3            �            1259    17270    tblAgentInfo_AgentID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblAgentInfo_AgentID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."tblAgentInfo_AgentID_seq";
       public       postgres    false    230    3            �           0    0    tblAgentInfo_AgentID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."tblAgentInfo_AgentID_seq" OWNED BY public."tblAgentInfo"."AgentID";
            public       postgres    false    231            �            1259    17272    tblBuyerInfo    TABLE     �   CREATE TABLE public."tblBuyerInfo" (
    "BuyerID" integer NOT NULL,
    "Buyer_Name" character varying(70),
    "Details" character varying(100)
);
 "   DROP TABLE public."tblBuyerInfo";
       public         postgres    false    3            �            1259    17275    tblBuyerInfo_BuyerID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblBuyerInfo_BuyerID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."tblBuyerInfo_BuyerID_seq";
       public       postgres    false    232    3            �           0    0    tblBuyerInfo_BuyerID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."tblBuyerInfo_BuyerID_seq" OWNED BY public."tblBuyerInfo"."BuyerID";
            public       postgres    false    233            �            1259    17277    tblCompanyInfo    TABLE     �   CREATE TABLE public."tblCompanyInfo" (
    "CompID" integer NOT NULL,
    "Company_Name" character varying(80),
    "Details" character varying(100)
);
 $   DROP TABLE public."tblCompanyInfo";
       public         postgres    false    3            �            1259    17280    tblCompanyInfo_CompID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblCompanyInfo_CompID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."tblCompanyInfo_CompID_seq";
       public       postgres    false    3    234            �           0    0    tblCompanyInfo_CompID_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."tblCompanyInfo_CompID_seq" OWNED BY public."tblCompanyInfo"."CompID";
            public       postgres    false    235            �            1259    17282    tblCurrencyInfo    TABLE     x   CREATE TABLE public."tblCurrencyInfo" (
    "CurrencyID" integer NOT NULL,
    "Currency_Name" character varying(60)
);
 %   DROP TABLE public."tblCurrencyInfo";
       public         postgres    false    3            �            1259    17285    tblCurrencyInfo_CurrencyID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblCurrencyInfo_CurrencyID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."tblCurrencyInfo_CurrencyID_seq";
       public       postgres    false    3    236            �           0    0    tblCurrencyInfo_CurrencyID_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."tblCurrencyInfo_CurrencyID_seq" OWNED BY public."tblCurrencyInfo"."CurrencyID";
            public       postgres    false    237            �            1259    17287    tblDealingMrcndiserInfo    TABLE        CREATE TABLE public."tblDealingMrcndiserInfo" (
    "ID" integer NOT NULL,
    "TeamleaderID" integer,
    "UserID" integer
);
 -   DROP TABLE public."tblDealingMrcndiserInfo";
       public         postgres    false    3            �            1259    17290    tblDealingMrcndiserInfo_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblDealingMrcndiserInfo_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."tblDealingMrcndiserInfo_ID_seq";
       public       postgres    false    238    3                        0    0    tblDealingMrcndiserInfo_ID_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."tblDealingMrcndiserInfo_ID_seq" OWNED BY public."tblDealingMrcndiserInfo"."ID";
            public       postgres    false    239            �            1259    17292    tblDepartInfo    TABLE     �   CREATE TABLE public."tblDepartInfo" (
    "DepID" integer NOT NULL,
    "Department_Name" character varying(80),
    "Details" character varying(100)
);
 #   DROP TABLE public."tblDepartInfo";
       public         postgres    false    3            �            1259    17295    tblDepartInfo_DepID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblDepartInfo_DepID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."tblDepartInfo_DepID_seq";
       public       postgres    false    3    240                       0    0    tblDepartInfo_DepID_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."tblDepartInfo_DepID_seq" OWNED BY public."tblDepartInfo"."DepID";
            public       postgres    false    241            �            1259    17297    tblInitialOrder    TABLE     a  CREATE TABLE public."tblInitialOrder" (
    "OrderAutoID" integer NOT NULL,
    "JobNo" character varying(60),
    "CompanyID" integer,
    "LocationID" integer,
    "BuyerID" integer,
    "Style_Ref" character varying(80),
    "Style_Description" character varying(200),
    "Prod_DeptID" integer,
    "Sub_DeptID" integer,
    "CurrencyID" integer,
    "RegionID" integer,
    "Product_CatID" integer,
    "Team_Leader_ID" integer,
    "Dealing_Merchant_ID" integer,
    "BH_Merchant" character varying(80),
    "Remarks" character varying(80),
    "Shipment_Mode_ID" integer,
    "Order_Uom_ID" integer,
    "SMV" double precision,
    "Packing_ID" integer,
    "Season_ID" integer,
    "Agent_ID" integer,
    "UserID" integer,
    "Repeat_No_Job" character varying(80),
    "Order_Number" character varying(100),
    "OrderImagePath" character varying(255)
);
 %   DROP TABLE public."tblInitialOrder";
       public         postgres    false    3            �            1259    17303    tblInitialOrder_OrderAutoID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblInitialOrder_OrderAutoID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."tblInitialOrder_OrderAutoID_seq";
       public       postgres    false    3    242                       0    0    tblInitialOrder_OrderAutoID_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public."tblInitialOrder_OrderAutoID_seq" OWNED BY public."tblInitialOrder"."OrderAutoID";
            public       postgres    false    243            �            1259    17305    tblLocationInfo    TABLE     x   CREATE TABLE public."tblLocationInfo" (
    "LocationId" integer NOT NULL,
    "Location_Name" character varying(80)
);
 %   DROP TABLE public."tblLocationInfo";
       public         postgres    false    3            �            1259    17308    tblLocationInfo_LocationId_seq    SEQUENCE     �   CREATE SEQUENCE public."tblLocationInfo_LocationId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."tblLocationInfo_LocationId_seq";
       public       postgres    false    3    244                       0    0    tblLocationInfo_LocationId_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."tblLocationInfo_LocationId_seq" OWNED BY public."tblLocationInfo"."LocationId";
            public       postgres    false    245            �            1259    17310    tblOrderUomInfo    TABLE     t   CREATE TABLE public."tblOrderUomInfo" (
    "UOMID" integer NOT NULL,
    "Order_Uom_Name" character varying(80)
);
 %   DROP TABLE public."tblOrderUomInfo";
       public         postgres    false    3            �            1259    17313    tblOrderUomInfo_UOMID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblOrderUomInfo_UOMID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."tblOrderUomInfo_UOMID_seq";
       public       postgres    false    3    246                       0    0    tblOrderUomInfo_UOMID_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."tblOrderUomInfo_UOMID_seq" OWNED BY public."tblOrderUomInfo"."UOMID";
            public       postgres    false    247            �            1259    17315    tblPODetailsInfro    TABLE     !  CREATE TABLE public."tblPODetailsInfro" (
    "PoDetID" integer NOT NULL,
    "InitialOrderID" integer,
    "POOrderStatusID" integer,
    "PO_No" character varying(60),
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
    "Projected_Po" character varying(80),
    "TNA_FromOrUpto" character varying(255),
    "Internal_RefOrGrouping" character varying(80),
    "Delay_For" character varying(100),
    "Packing_ID" integer,
    "File_No" character varying(80),
    "SCorLC" character varying(80),
    "Remarks" character varying(200)
);
 '   DROP TABLE public."tblPODetailsInfro";
       public         postgres    false    3            �            1259    17321    tblPODetailsInfro_PoDetID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblPODetailsInfro_PoDetID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."tblPODetailsInfro_PoDetID_seq";
       public       postgres    false    248    3                       0    0    tblPODetailsInfro_PoDetID_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."tblPODetailsInfro_PoDetID_seq" OWNED BY public."tblPODetailsInfro"."PoDetID";
            public       postgres    false    249            �            1259    17323    tblPackingInfo    TABLE     u   CREATE TABLE public."tblPackingInfo" (
    "PackingID" integer NOT NULL,
    "Packing_Name" character varying(80)
);
 $   DROP TABLE public."tblPackingInfo";
       public         postgres    false    3            �            1259    17326    tblPackingInfo_PackingID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblPackingInfo_PackingID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."tblPackingInfo_PackingID_seq";
       public       postgres    false    250    3                       0    0    tblPackingInfo_PackingID_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."tblPackingInfo_PackingID_seq" OWNED BY public."tblPackingInfo"."PackingID";
            public       postgres    false    251            �            1259    17328    tblPoOrderStatusInfo    TABLE     t   CREATE TABLE public."tblPoOrderStatusInfo" (
    "ID" integer NOT NULL,
    "Order_Status" character varying(50)
);
 *   DROP TABLE public."tblPoOrderStatusInfo";
       public         postgres    false    3            �            1259    17331    tblPoOrderStatusInfo_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblPoOrderStatusInfo_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."tblPoOrderStatusInfo_ID_seq";
       public       postgres    false    252    3                       0    0    tblPoOrderStatusInfo_ID_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."tblPoOrderStatusInfo_ID_seq" OWNED BY public."tblPoOrderStatusInfo"."ID";
            public       postgres    false    253            �            1259    17333    tblPoStatus    TABLE     e   CREATE TABLE public."tblPoStatus" (
    "ID" integer NOT NULL,
    "Status" character varying(50)
);
 !   DROP TABLE public."tblPoStatus";
       public         postgres    false    3            �            1259    17336    tblPoStatus_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblPoStatus_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."tblPoStatus_ID_seq";
       public       postgres    false    254    3                       0    0    tblPoStatus_ID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."tblPoStatus_ID_seq" OWNED BY public."tblPoStatus"."ID";
            public       postgres    false    255            $           1259    37594    tblPreCosting    TABLE       CREATE TABLE public."tblPreCosting" (
    "Agent" character varying(100),
    "ApprovedId" integer,
    "BudgetMinuite" integer,
    "BuyerId" integer,
    "Costing_Date" date,
    "CutSMV" double precision,
    "ER" integer,
    "Fileno" character varying,
    "Incoterm" character varying(100),
    "Incoterm_place" character varying(100),
    "MachineLine" character varying(100),
    "OrderID" integer,
    "PoId" integer,
    "PrecostingID" integer NOT NULL,
    "ProdLineHr" character varying,
    "QuotationId" integer,
    "ReadyToApproved" character varying(100),
    "RegionId" integer,
    "Remark" character varying(200),
    "SewSMV" double precision,
    "Sew_Efficiency" double precision,
    "StyleDesc" character varying,
    "StyleRef" character varying(100),
    "Unapproverequest" character varying(100),
    "companyId" integer,
    "currencyId" integer,
    "internalRef" character varying(100),
    "jobQty" double precision,
    "orderUOMId" integer,
    "pordDeptId" integer,
    "CopyFrom" character varying(100)
);
 #   DROP TABLE public."tblPreCosting";
       public         postgres    false    3                        1259    17338    tblProductCategoryInfo    TABLE     �   CREATE TABLE public."tblProductCategoryInfo" (
    "ProdCatId" integer NOT NULL,
    "ProdCategory_Name" character varying(80)
);
 ,   DROP TABLE public."tblProductCategoryInfo";
       public         postgres    false    3                       1259    17341 $   tblProductCategoryInfo_ProdCatId_seq    SEQUENCE     �   CREATE SEQUENCE public."tblProductCategoryInfo_ProdCatId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public."tblProductCategoryInfo_ProdCatId_seq";
       public       postgres    false    3    256            	           0    0 $   tblProductCategoryInfo_ProdCatId_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public."tblProductCategoryInfo_ProdCatId_seq" OWNED BY public."tblProductCategoryInfo"."ProdCatId";
            public       postgres    false    257                       1259    17343    tblProductionDeptInfo    TABLE     �   CREATE TABLE public."tblProductionDeptInfo" (
    "ID" integer NOT NULL,
    "ProdDeptName" character varying(80),
    "Department_Id" integer
);
 +   DROP TABLE public."tblProductionDeptInfo";
       public         postgres    false    3                       1259    17346    tblProductionDeptInfo_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblProductionDeptInfo_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."tblProductionDeptInfo_ID_seq";
       public       postgres    false    3    258            
           0    0    tblProductionDeptInfo_ID_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."tblProductionDeptInfo_ID_seq" OWNED BY public."tblProductionDeptInfo"."ID";
            public       postgres    false    259                       1259    17348    tblRegionInfo    TABLE     r   CREATE TABLE public."tblRegionInfo" (
    "RegionID" integer NOT NULL,
    "Region_Name" character varying(50)
);
 #   DROP TABLE public."tblRegionInfo";
       public         postgres    false    3                       1259    17351    tblRegionInfo_RegionID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblRegionInfo_RegionID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."tblRegionInfo_RegionID_seq";
       public       postgres    false    260    3                       0    0    tblRegionInfo_RegionID_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."tblRegionInfo_RegionID_seq" OWNED BY public."tblRegionInfo"."RegionID";
            public       postgres    false    261                       1259    17353    tblSeasonInfo    TABLE     r   CREATE TABLE public."tblSeasonInfo" (
    "SeasonID" integer NOT NULL,
    "Season_Name" character varying(80)
);
 #   DROP TABLE public."tblSeasonInfo";
       public         postgres    false    3                       1259    17356    tblSeasonInfo_SeasonID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblSeasonInfo_SeasonID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."tblSeasonInfo_SeasonID_seq";
       public       postgres    false    3    262                       0    0    tblSeasonInfo_SeasonID_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."tblSeasonInfo_SeasonID_seq" OWNED BY public."tblSeasonInfo"."SeasonID";
            public       postgres    false    263                       1259    17358    tblShipmentModeInfo    TABLE     t   CREATE TABLE public."tblShipmentModeInfo" (
    "ID" integer NOT NULL,
    "Shipment_Mode" character varying(50)
);
 )   DROP TABLE public."tblShipmentModeInfo";
       public         postgres    false    3            	           1259    17361    tblShipmentModeInfo_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblShipmentModeInfo_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."tblShipmentModeInfo_ID_seq";
       public       postgres    false    3    264                       0    0    tblShipmentModeInfo_ID_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."tblShipmentModeInfo_ID_seq" OWNED BY public."tblShipmentModeInfo"."ID";
            public       postgres    false    265            
           1259    17363    tblSubDeptInfo    TABLE     �   CREATE TABLE public."tblSubDeptInfo" (
    "SubDeptID" integer NOT NULL,
    "Sub_dept_Name" character varying(60),
    "DepartmentID" integer
);
 $   DROP TABLE public."tblSubDeptInfo";
       public         postgres    false    3                       1259    17366    tblSubDeptInfo_SubDeptID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblSubDeptInfo_SubDeptID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."tblSubDeptInfo_SubDeptID_seq";
       public       postgres    false    266    3                       0    0    tblSubDeptInfo_SubDeptID_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."tblSubDeptInfo_SubDeptID_seq" OWNED BY public."tblSubDeptInfo"."SubDeptID";
            public       postgres    false    267                       1259    17368    tblTeamlederInfoes    TABLE     h   CREATE TABLE public."tblTeamlederInfoes" (
    "TeamleaderID" integer NOT NULL,
    "UserID" integer
);
 (   DROP TABLE public."tblTeamlederInfoes";
       public         postgres    false    3                       1259    17371    tblUserInfo    TABLE     G  CREATE TABLE public."tblUserInfo" (
    "UserID" integer NOT NULL,
    "FullName" character varying(60),
    "Email" character varying(60),
    "Contact" character varying(25),
    "RegDate" date,
    "UserName" character varying(60),
    "UserPassword" character varying(60),
    "UserTypeID" integer,
    "DeptId" integer
);
 !   DROP TABLE public."tblUserInfo";
       public         postgres    false    3                       1259    17374    tblUserTypeInfo    TABLE     s   CREATE TABLE public."tblUserTypeInfo" (
    "UserTypeID" integer NOT NULL,
    "UserType" character varying(80)
);
 %   DROP TABLE public."tblUserTypeInfo";
       public         postgres    false    3                       1259    17377    tblUserTypeInfo_UserTypeID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblUserTypeInfo_UserTypeID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."tblUserTypeInfo_UserTypeID_seq";
       public       postgres    false    270    3                       0    0    tblUserTypeInfo_UserTypeID_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."tblUserTypeInfo_UserTypeID_seq" OWNED BY public."tblUserTypeInfo"."UserTypeID";
            public       postgres    false    271                       1259    17379    trim_cost_pre_costing    TABLE     V  CREATE TABLE public.trim_cost_pre_costing (
    id integer NOT NULL,
    precosting_id integer,
    group_name character varying(255),
    country character varying(255),
    description character varying(255),
    band_sup_ref character varying(255),
    remarks character varying(255),
    nominated_supp integer,
    cons_uom character varying(255),
    cons_unit_gmts character varying(255),
    rate character varying(255),
    amount double precision,
    total_qty double precision,
    total_amount double precision,
    apvl_req character varying(255),
    image character varying(255)
);
 )   DROP TABLE public.trim_cost_pre_costing;
       public         postgres    false    3                       1259    17385    trim_cost_pre_costing_id_seq    SEQUENCE     �   CREATE SEQUENCE public.trim_cost_pre_costing_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.trim_cost_pre_costing_id_seq;
       public       postgres    false    272    3                       0    0    trim_cost_pre_costing_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.trim_cost_pre_costing_id_seq OWNED BY public.trim_cost_pre_costing.id;
            public       postgres    false    273                       1259    17387    wash_cost_pre_costing    TABLE     S  CREATE TABLE public.wash_cost_pre_costing (
    id integer NOT NULL,
    precosting_id integer,
    name character varying(255),
    type character varying(255),
    country character varying(255),
    cons_dzn_gmts character varying(255),
    rate character varying(255),
    amount double precision,
    status character varying(255)
);
 )   DROP TABLE public.wash_cost_pre_costing;
       public         postgres    false    3                       1259    17393    wash_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.wash_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.wash_cost_id_seq;
       public       postgres    false    274    3                       0    0    wash_cost_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.wash_cost_id_seq OWNED BY public.wash_cost_pre_costing.id;
            public       postgres    false    275            t           2604    54763    AccountingYear Id    DEFAULT     |   ALTER TABLE ONLY public."AccountingYear" ALTER COLUMN "Id" SET DEFAULT nextval('public."AccountingYear_Id_seq"'::regclass);
 D   ALTER TABLE public."AccountingYear" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    465    466    466            u           2604    54771    AccountingYearSubInfo Id    DEFAULT     �   ALTER TABLE ONLY public."AccountingYearSubInfo" ALTER COLUMN "Id" SET DEFAULT nextval('public."AccountingYearSubInfo_Id_seq"'::regclass);
 K   ALTER TABLE public."AccountingYearSubInfo" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    467    468    468            s           2604    54755    BloodGroup Id    DEFAULT     t   ALTER TABLE ONLY public."BloodGroup" ALTER COLUMN "Id" SET DEFAULT nextval('public."BloodGroup_Id_seq"'::regclass);
 @   ALTER TABLE public."BloodGroup" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    464    463    464            >           2604    54134    BodyPartEntry Id    DEFAULT     z   ALTER TABLE ONLY public."BodyPartEntry" ALTER COLUMN "Id" SET DEFAULT nextval('public."BodyPartEntry_Id_seq"'::regclass);
 C   ALTER TABLE public."BodyPartEntry" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    358    357    358            *           2604    45785    BodyPartType Id    DEFAULT     x   ALTER TABLE ONLY public."BodyPartType" ALTER COLUMN "Id" SET DEFAULT nextval('public."BodyPartType_Id_seq"'::regclass);
 B   ALTER TABLE public."BodyPartType" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    318    317    318            �           2604    26568    BodyPartofPreCosting ID    DEFAULT     �   ALTER TABLE ONLY public."BodyPartofPreCosting" ALTER COLUMN "ID" SET DEFAULT nextval('public."BodyPartofPreCosting_ID_seq"'::regclass);
 J   ALTER TABLE public."BodyPartofPreCosting" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    199    198            v           2604    54782    BuyerProfile Id    DEFAULT     x   ALTER TABLE ONLY public."BuyerProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."BuyerProfile_Id_seq"'::regclass);
 B   ALTER TABLE public."BuyerProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    469    470    470            J           2604    54261    BuyerWiesSeason Id    DEFAULT     ~   ALTER TABLE ONLY public."BuyerWiesSeason" ALTER COLUMN "Id" SET DEFAULT nextval('public."BuyerWiesSeason_Id_seq"'::regclass);
 E   ALTER TABLE public."BuyerWiesSeason" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    381    382    382            E           2604    54210    CapacityAllocation Id    DEFAULT     �   ALTER TABLE ONLY public."CapacityAllocation" ALTER COLUMN "Id" SET DEFAULT nextval('public."CapacityAllocation_Id_seq"'::regclass);
 H   ALTER TABLE public."CapacityAllocation" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    372    371    372            ^           2604    54526    CapacityCalculation Id    DEFAULT     �   ALTER TABLE ONLY public."CapacityCalculation" ALTER COLUMN "Id" SET DEFAULT nextval('public."CapacityCalculation_Id_seq"'::regclass);
 I   ALTER TABLE public."CapacityCalculation" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    422    421    422            _           2604    54537    CapacityCalculationMonthly Id    DEFAULT     �   ALTER TABLE ONLY public."CapacityCalculationMonthly" ALTER COLUMN "Id" SET DEFAULT nextval('public."CapacityCalculationMonthly_Id_seq"'::regclass);
 P   ALTER TABLE public."CapacityCalculationMonthly" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    423    424    424            `           2604    54548    CapacityCalculationYearly Id    DEFAULT     �   ALTER TABLE ONLY public."CapacityCalculationYearly" ALTER COLUMN "Id" SET DEFAULT nextval('public."CapacityCalculationYearly_Id_seq"'::regclass);
 O   ALTER TABLE public."CapacityCalculationYearly" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    425    426    426            -           2604    45809    ColorRange Id    DEFAULT     t   ALTER TABLE ONLY public."ColorRange" ALTER COLUMN "Id" SET DEFAULT nextval('public."ColorRange_Id_seq"'::regclass);
 @   ALTER TABLE public."ColorRange" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    324    323    324            e           2604    54612    ColorType Id    DEFAULT     r   ALTER TABLE ONLY public."ColorType" ALTER COLUMN "Id" SET DEFAULT nextval('public."ColorType_Id_seq"'::regclass);
 ?   ALTER TABLE public."ColorType" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    435    436    436            F           2604    54218    ColourEntry Id    DEFAULT     v   ALTER TABLE ONLY public."ColourEntry" ALTER COLUMN "Id" SET DEFAULT nextval('public."ColourEntry_Id_seq"'::regclass);
 A   ALTER TABLE public."ColourEntry" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    374    373    374            g           2604    54630    CommercialCost Id    DEFAULT     |   ALTER TABLE ONLY public."CommercialCost" ALTER COLUMN "Id" SET DEFAULT nextval('public."CommercialCost_Id_seq"'::regclass);
 D   ALTER TABLE public."CommercialCost" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    440    439    440            +           2604    45793    CommercialInvoice Id    DEFAULT     �   ALTER TABLE ONLY public."CommercialInvoice" ALTER COLUMN "Id" SET DEFAULT nextval('public."CommercialInvoice_Id_seq"'::regclass);
 G   ALTER TABLE public."CommercialInvoice" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    319    320    320            d           2604    54601    ConsumptionEntryForm Id    DEFAULT     �   ALTER TABLE ONLY public."ConsumptionEntryForm" ALTER COLUMN "Id" SET DEFAULT nextval('public."ConsumptionEntryForm_Id_seq"'::regclass);
 J   ALTER TABLE public."ConsumptionEntryForm" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    434    433    434            f           2604    54622    ConversionCostForPreCost Id    DEFAULT     �   ALTER TABLE ONLY public."ConversionCostForPreCost" ALTER COLUMN "Id" SET DEFAULT nextval('public."ConversionCostForPreCost_Id_seq"'::regclass);
 N   ALTER TABLE public."ConversionCostForPreCost" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    437    438    438            �           2604    26570    ConversionCostProcess ID    DEFAULT     �   ALTER TABLE ONLY public."ConversionCostProcess" ALTER COLUMN "ID" SET DEFAULT nextval('public."ConversionCostProcess_ID_seq"'::regclass);
 K   ALTER TABLE public."ConversionCostProcess" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    201    200            l           2604    54691    CostComponenetsMasterDetails Id    DEFAULT     �   ALTER TABLE ONLY public."CostComponenetsMasterDetails" ALTER COLUMN "Id" SET DEFAULT nextval('public."CostComponenetsMasterDetails_Id_seq"'::regclass);
 R   ALTER TABLE public."CostComponenetsMasterDetails" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    449    450    450            !           2604    45674    CountryLocationMapping Id    DEFAULT     �   ALTER TABLE ONLY public."CountryLocationMapping" ALTER COLUMN "Id" SET DEFAULT nextval('public."CountryLocationMapping_Id_seq"'::regclass);
 L   ALTER TABLE public."CountryLocationMapping" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    297    298    298            [           2604    54465    CurrencyConversionRate Id    DEFAULT     �   ALTER TABLE ONLY public."CurrencyConversionRate" ALTER COLUMN "Id" SET DEFAULT nextval('public."CurrencyConversionRate_Id_seq"'::regclass);
 L   ALTER TABLE public."CurrencyConversionRate" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    416    415    416            o           2604    54717    Department Id    DEFAULT     t   ALTER TABLE ONLY public."Department" ALTER COLUMN "Id" SET DEFAULT nextval('public."Department_Id_seq"'::regclass);
 @   ALTER TABLE public."Department" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    455    456    456            8           2604    45900    DepartmentProfile Id    DEFAULT     �   ALTER TABLE ONLY public."DepartmentProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."DepartmentProfile_Id_seq"'::regclass);
 G   ALTER TABLE public."DepartmentProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    345    346    346            n           2604    54709    Designation Id    DEFAULT     v   ALTER TABLE ONLY public."Designation" ALTER COLUMN "Id" SET DEFAULT nextval('public."Designation_Id_seq"'::regclass);
 A   ALTER TABLE public."Designation" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    453    454    454            )           2604    45777    DiscountMethod Id    DEFAULT     |   ALTER TABLE ONLY public."DiscountMethod" ALTER COLUMN "Id" SET DEFAULT nextval('public."DiscountMethod_Id_seq"'::regclass);
 D   ALTER TABLE public."DiscountMethod" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    315    316    316            m           2604    54699    Division Id    DEFAULT     p   ALTER TABLE ONLY public."Division" ALTER COLUMN "Id" SET DEFAULT nextval('public."Division_Id_seq"'::regclass);
 >   ALTER TABLE public."Division" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    451    452    452            7           2604    45889    DivisionProfile Id    DEFAULT     ~   ALTER TABLE ONLY public."DivisionProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."DivisionProfile_Id_seq"'::regclass);
 E   ALTER TABLE public."DivisionProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    344    343    344            U           2604    54383    DyeingAndFinishingCharge Id    DEFAULT     �   ALTER TABLE ONLY public."DyeingAndFinishingCharge" ALTER COLUMN "Id" SET DEFAULT nextval('public."DyeingAndFinishingCharge_Id_seq"'::regclass);
 N   ALTER TABLE public."DyeingAndFinishingCharge" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    404    403    404            x           2604    54823    ERPModule Id    DEFAULT     r   ALTER TABLE ONLY public."ERPModule" ALTER COLUMN "Id" SET DEFAULT nextval('public."ERPModule_Id_seq"'::regclass);
 ?   ALTER TABLE public."ERPModule" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    474    473    474            X           2604    54441    EmailAddressSetup Id    DEFAULT     �   ALTER TABLE ONLY public."EmailAddressSetup" ALTER COLUMN "Id" SET DEFAULT nextval('public."EmailAddressSetup_Id_seq"'::regclass);
 G   ALTER TABLE public."EmailAddressSetup" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    409    410    410            p           2604    54727    EmployeeCategory Id    DEFAULT     �   ALTER TABLE ONLY public."EmployeeCategory" ALTER COLUMN "Id" SET DEFAULT nextval('public."EmployeeCategory_Id_seq"'::regclass);
 F   ALTER TABLE public."EmployeeCategory" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    458    457    458            a           2604    54559    EmployeeInfo Id    DEFAULT     x   ALTER TABLE ONLY public."EmployeeInfo" ALTER COLUMN "Id" SET DEFAULT nextval('public."EmployeeInfo_Id_seq"'::regclass);
 B   ALTER TABLE public."EmployeeInfo" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    428    427    428            j           2604    54662    FabricCost Id    DEFAULT     t   ALTER TABLE ONLY public."FabricCost" ALTER COLUMN "Id" SET DEFAULT nextval('public."FabricCost_Id_seq"'::regclass);
 @   ALTER TABLE public."FabricCost" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    446    445    446            �           2604    26572    FabricDesPreCost ID    DEFAULT     �   ALTER TABLE ONLY public."FabricDesPreCost" ALTER COLUMN "ID" SET DEFAULT nextval('public."FabricDesPreCost_ID_seq"'::regclass);
 F   ALTER TABLE public."FabricDesPreCost" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    203    202            ,           2604    45801    FabricNature Id    DEFAULT     x   ALTER TABLE ONLY public."FabricNature" ALTER COLUMN "Id" SET DEFAULT nextval('public."FabricNature_Id_seq"'::regclass);
 B   ALTER TABLE public."FabricNature" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    322    321    322            Z           2604    54457    FastReactIntgration Id    DEFAULT     �   ALTER TABLE ONLY public."FastReactIntgration" ALTER COLUMN "Id" SET DEFAULT nextval('public."FastReactIntgration_Id_seq"'::regclass);
 I   ALTER TABLE public."FastReactIntgration" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    413    414    414            D           2604    54191    FinancialParameterSetup Id    DEFAULT     �   ALTER TABLE ONLY public."FinancialParameterSetup" ALTER COLUMN "Id" SET DEFAULT nextval('public."FinancialParameterSetup_Id_seq"'::regclass);
 M   ALTER TABLE public."FinancialParameterSetup" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    370    369    370            q           2604    54739    Floor Id    DEFAULT     j   ALTER TABLE ONLY public."Floor" ALTER COLUMN "Id" SET DEFAULT nextval('public."Floor_Id_seq"'::regclass);
 ;   ALTER TABLE public."Floor" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    460    459    460            r           2604    54747    FunctionalSuperior Id    DEFAULT     �   ALTER TABLE ONLY public."FunctionalSuperior" ALTER COLUMN "Id" SET DEFAULT nextval('public."FunctionalSuperior_Id_seq"'::regclass);
 H   ALTER TABLE public."FunctionalSuperior" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    462    461    462            B           2604    54175    GarmentsItemEntry Id    DEFAULT     �   ALTER TABLE ONLY public."GarmentsItemEntry" ALTER COLUMN "Id" SET DEFAULT nextval('public."GarmentsItemEntry_Id_seq"'::regclass);
 G   ALTER TABLE public."GarmentsItemEntry" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    366    365    366            <           2604    54118    GarmentsSampleEntry Id    DEFAULT     �   ALTER TABLE ONLY public."GarmentsSampleEntry" ALTER COLUMN "Id" SET DEFAULT nextval('public."GarmentsSampleEntry_Id_seq"'::regclass);
 I   ALTER TABLE public."GarmentsSampleEntry" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    353    354    354            '           2604    45758    GroupProfile Id    DEFAULT     x   ALTER TABLE ONLY public."GroupProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."GroupProfile_Id_seq"'::regclass);
 B   ALTER TABLE public."GroupProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    311    312    312            �           2604    26573 &   Input_Pannel_PODetails Input_Pannel_ID    DEFAULT     �   ALTER TABLE ONLY public."Input_Pannel_PODetails" ALTER COLUMN "Input_Pannel_ID" SET DEFAULT nextval('public."Input_Pannel_PODetails_Input_Pannel_ID_seq"'::regclass);
 Y   ALTER TABLE public."Input_Pannel_PODetails" ALTER COLUMN "Input_Pannel_ID" DROP DEFAULT;
       public       postgres    false    205    204            "           2604    45698    ItemCategory Id    DEFAULT     x   ALTER TABLE ONLY public."ItemCategory" ALTER COLUMN "Id" SET DEFAULT nextval('public."ItemCategory_Id_seq"'::regclass);
 B   ALTER TABLE public."ItemCategory" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    301    302    302            i           2604    54651    ItemGroup Id    DEFAULT     r   ALTER TABLE ONLY public."ItemGroup" ALTER COLUMN "Id" SET DEFAULT nextval('public."ItemGroup_Id_seq"'::regclass);
 ?   ALTER TABLE public."ItemGroup" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    444    443    444            S           2604    54364    JournalSetup Id    DEFAULT     x   ALTER TABLE ONLY public."JournalSetup" ALTER COLUMN "Id" SET DEFAULT nextval('public."JournalSetup_Id_seq"'::regclass);
 B   ALTER TABLE public."JournalSetup" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    400    399    400            5           2604    45873    JournalType Id    DEFAULT     v   ALTER TABLE ONLY public."JournalType" ALTER COLUMN "Id" SET DEFAULT nextval('public."JournalType_Id_seq"'::regclass);
 A   ALTER TABLE public."JournalType" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    339    340    340            T           2604    54372    KnittingCharge Id    DEFAULT     |   ALTER TABLE ONLY public."KnittingCharge" ALTER COLUMN "Id" SET DEFAULT nextval('public."KnittingCharge_Id_seq"'::regclass);
 D   ALTER TABLE public."KnittingCharge" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    402    401    402            R           2604    54353    LabTestRateChart Id    DEFAULT     �   ALTER TABLE ONLY public."LabTestRateChart" ALTER COLUMN "Id" SET DEFAULT nextval('public."LabTestRateChart_Id_seq"'::regclass);
 F   ALTER TABLE public."LabTestRateChart" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    398    397    398            b           2604    54570 	   LineNo Id    DEFAULT     l   ALTER TABLE ONLY public."LineNo" ALTER COLUMN "Id" SET DEFAULT nextval('public."LineNo_Id_seq"'::regclass);
 <   ALTER TABLE public."LineNo" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    429    430    430            M           2604    54289    MachineEntry Id    DEFAULT     x   ALTER TABLE ONLY public."MachineEntry" ALTER COLUMN "Id" SET DEFAULT nextval('public."MachineEntry_Id_seq"'::regclass);
 B   ALTER TABLE public."MachineEntry" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    387    388    388            Y           2604    54449    MailRecipientGroup Id    DEFAULT     �   ALTER TABLE ONLY public."MailRecipientGroup" ALTER COLUMN "Id" SET DEFAULT nextval('public."MailRecipientGroup_Id_seq"'::regclass);
 H   ALTER TABLE public."MailRecipientGroup" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    411    412    412            V           2604    54403    MarketingTeamInfo Id    DEFAULT     �   ALTER TABLE ONLY public."MarketingTeamInfo" ALTER COLUMN "Id" SET DEFAULT nextval('public."MarketingTeamInfo_Id_seq"'::regclass);
 G   ALTER TABLE public."MarketingTeamInfo" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    405    406    406            W           2604    54414    MemberInfo Id    DEFAULT     t   ALTER TABLE ONLY public."MemberInfo" ALTER COLUMN "Id" SET DEFAULT nextval('public."MemberInfo_Id_seq"'::regclass);
 @   ALTER TABLE public."MemberInfo" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    408    407    408            C           2604    54183    MinLeadTimeSlab Id    DEFAULT     ~   ALTER TABLE ONLY public."MinLeadTimeSlab" ALTER COLUMN "Id" SET DEFAULT nextval('public."MinLeadTimeSlab_Id_seq"'::regclass);
 E   ALTER TABLE public."MinLeadTimeSlab" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    368    367    368            2           2604    45849 	   Months Id    DEFAULT     l   ALTER TABLE ONLY public."Months" ALTER COLUMN "Id" SET DEFAULT nextval('public."Months_Id_seq"'::regclass);
 <   ALTER TABLE public."Months" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    333    334    334            �           2604    26574 %   OrderImageUploadTbl OrderImgUploadID"    DEFAULT     �   ALTER TABLE ONLY public."OrderImageUploadTbl" ALTER COLUMN "OrderImgUploadID""" SET DEFAULT nextval('public."OrderImageUploadTbl_OrderImgUploadID""_seq"'::regclass);
 Y   ALTER TABLE public."OrderImageUploadTbl" ALTER COLUMN "OrderImgUploadID""" DROP DEFAULT;
       public       postgres    false    207    206            �           2604    26575    OrderItem ItemID    DEFAULT     z   ALTER TABLE ONLY public."OrderItem" ALTER COLUMN "ItemID" SET DEFAULT nextval('public."OrderItem_ItemID_seq"'::regclass);
 C   ALTER TABLE public."OrderItem" ALTER COLUMN "ItemID" DROP DEFAULT;
       public       postgres    false    209    208            &           2604    45746    OtherPartyProfile Id    DEFAULT     �   ALTER TABLE ONLY public."OtherPartyProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."OtherPartyProfile_Id_seq"'::regclass);
 G   ALTER TABLE public."OtherPartyProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    310    309    310            ?           2604    54145    PageInfo Id    DEFAULT     p   ALTER TABLE ONLY public."PageInfo" ALTER COLUMN "Id" SET DEFAULT nextval('public."PageInfo_Id_seq"'::regclass);
 >   ALTER TABLE public."PageInfo" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    359    360    360            #           2604    45722    PartyType Id    DEFAULT     r   ALTER TABLE ONLY public."PartyType" ALTER COLUMN "Id" SET DEFAULT nextval('public."PartyType_Id_seq"'::regclass);
 ?   ALTER TABLE public."PartyType" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    304    303    304            /           2604    45825    ProductCategory Id    DEFAULT     ~   ALTER TABLE ONLY public."ProductCategory" ALTER COLUMN "Id" SET DEFAULT nextval('public."ProductCategory_Id_seq"'::regclass);
 E   ALTER TABLE public."ProductCategory" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    327    328    328            G           2604    54226    ProductSubDepartment Id    DEFAULT     �   ALTER TABLE ONLY public."ProductSubDepartment" ALTER COLUMN "Id" SET DEFAULT nextval('public."ProductSubDepartment_Id_seq"'::regclass);
 J   ALTER TABLE public."ProductSubDepartment" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    376    375    376            0           2604    45833    ProductType Id    DEFAULT     v   ALTER TABLE ONLY public."ProductType" ALTER COLUMN "Id" SET DEFAULT nextval('public."ProductType_Id_seq"'::regclass);
 A   ALTER TABLE public."ProductType" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    329    330    330            N           2604    54300    ProductionFloor Id    DEFAULT     ~   ALTER TABLE ONLY public."ProductionFloor" ALTER COLUMN "Id" SET DEFAULT nextval('public."ProductionFloor_Id_seq"'::regclass);
 E   ALTER TABLE public."ProductionFloor" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    389    390    390            4           2604    45865    ProductionProcess Id    DEFAULT     �   ALTER TABLE ONLY public."ProductionProcess" ALTER COLUMN "Id" SET DEFAULT nextval('public."ProductionProcess_Id_seq"'::regclass);
 G   ALTER TABLE public."ProductionProcess" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    337    338    338            :           2604    45927    ProfitCenter Id    DEFAULT     x   ALTER TABLE ONLY public."ProfitCenter" ALTER COLUMN "Id" SET DEFAULT nextval('public."ProfitCenter_Id_seq"'::regclass);
 B   ALTER TABLE public."ProfitCenter" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    349    350    350            w           2604    54812    QuotationInquery Id    DEFAULT     �   ALTER TABLE ONLY public."QuotationInquery" ALTER COLUMN "Id" SET DEFAULT nextval('public."QuotationInquery_Id_seq"'::regclass);
 F   ALTER TABLE public."QuotationInquery" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    471    472    472            3           2604    45857    Resources Id    DEFAULT     r   ALTER TABLE ONLY public."Resources" ALTER COLUMN "Id" SET DEFAULT nextval('public."Resources_Id_seq"'::regclass);
 ?   ALTER TABLE public."Resources" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    336    335    336            O           2604    54308    SampleProductionTeam Id    DEFAULT     �   ALTER TABLE ONLY public."SampleProductionTeam" ALTER COLUMN "Id" SET DEFAULT nextval('public."SampleProductionTeam_Id_seq"'::regclass);
 J   ALTER TABLE public."SampleProductionTeam" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    391    392    392            .           2604    45817    SampleType Id    DEFAULT     t   ALTER TABLE ONLY public."SampleType" ALTER COLUMN "Id" SET DEFAULT nextval('public."SampleType_Id_seq"'::regclass);
 @   ALTER TABLE public."SampleType" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    325    326    326            ;           2604    45938    SectionProfile Id    DEFAULT     |   ALTER TABLE ONLY public."SectionProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."SectionProfile_Id_seq"'::regclass);
 D   ALTER TABLE public."SectionProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    351    352    352            K           2604    54270    SewingLine Id    DEFAULT     t   ALTER TABLE ONLY public."SewingLine" ALTER COLUMN "Id" SET DEFAULT nextval('public."SewingLine_Id_seq"'::regclass);
 @   ALTER TABLE public."SewingLine" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    383    384    384            L           2604    54281    SewingOperation Id    DEFAULT     ~   ALTER TABLE ONLY public."SewingOperation" ALTER COLUMN "Id" SET DEFAULT nextval('public."SewingOperation_Id_seq"'::regclass);
 E   ALTER TABLE public."SewingOperation" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    386    385    386            �           2604    26577 $   Size_Pannel_PODetails Size_Pannel_ID    DEFAULT     �   ALTER TABLE ONLY public."Size_Pannel_PODetails" ALTER COLUMN "Size_Pannel_ID" SET DEFAULT nextval('public."Size_Pannel_PODetails_Size_Pannel_ID_seq"'::regclass);
 W   ALTER TABLE public."Size_Pannel_PODetails" ALTER COLUMN "Size_Pannel_ID" DROP DEFAULT;
       public       postgres    false    211    210            \           2604    54473    StoreLocation Id    DEFAULT     z   ALTER TABLE ONLY public."StoreLocation" ALTER COLUMN "Id" SET DEFAULT nextval('public."StoreLocation_Id_seq"'::regclass);
 C   ALTER TABLE public."StoreLocation" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    417    418    418            �           2604    26578 
   Suplier ID    DEFAULT     n   ALTER TABLE ONLY public."Suplier" ALTER COLUMN "ID" SET DEFAULT nextval('public."Suplier_ID_seq"'::regclass);
 =   ALTER TABLE public."Suplier" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    213    212            �           2604    26579    Suplyitem ID    DEFAULT     r   ALTER TABLE ONLY public."Suplyitem" ALTER COLUMN "ID" SET DEFAULT nextval('public."Suplyitem_ID_seq"'::regclass);
 ?   ALTER TABLE public."Suplyitem" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    215    214            I           2604    54250    SupplierProfile Id    DEFAULT     ~   ALTER TABLE ONLY public."SupplierProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."SupplierProfile_Id_seq"'::regclass);
 E   ALTER TABLE public."SupplierProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    380    379    380            %           2604    45738    TNATaskEntry Id    DEFAULT     x   ALTER TABLE ONLY public."TNATaskEntry" ALTER COLUMN "Id" SET DEFAULT nextval('public."TNATaskEntry_Id_seq"'::regclass);
 B   ALTER TABLE public."TNATaskEntry" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    308    307    308            $           2604    45730    TNATaskNameEntry Id    DEFAULT     �   ALTER TABLE ONLY public."TNATaskNameEntry" ALTER COLUMN "Id" SET DEFAULT nextval('public."TNATaskNameEntry_Id_seq"'::regclass);
 F   ALTER TABLE public."TNATaskNameEntry" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    305    306    306            H           2604    54242    TNATaskPercent Id    DEFAULT     |   ALTER TABLE ONLY public."TNATaskPercent" ALTER COLUMN "Id" SET DEFAULT nextval('public."TNATaskPercent_Id_seq"'::regclass);
 D   ALTER TABLE public."TNATaskPercent" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    378    377    378            A           2604    54163    TermsNCondition Id    DEFAULT     ~   ALTER TABLE ONLY public."TermsNCondition" ALTER COLUMN "Id" SET DEFAULT nextval('public."TermsNCondition_Id_seq"'::regclass);
 E   ALTER TABLE public."TermsNCondition" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    364    363    364            h           2604    54640    TrimCost Id    DEFAULT     p   ALTER TABLE ONLY public."TrimCost" ALTER COLUMN "Id" SET DEFAULT nextval('public."TrimCost_Id_seq"'::regclass);
 >   ALTER TABLE public."TrimCost" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    441    442    442            6           2604    45881    TrimsGroup Id    DEFAULT     t   ALTER TABLE ONLY public."TrimsGroup" ALTER COLUMN "Id" SET DEFAULT nextval('public."TrimsGroup_Id_seq"'::regclass);
 @   ALTER TABLE public."TrimsGroup" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    342    341    342            =           2604    54126    Type Id    DEFAULT     h   ALTER TABLE ONLY public."Type" ALTER COLUMN "Id" SET DEFAULT nextval('public."Type_Id_seq"'::regclass);
 :   ALTER TABLE public."Type" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    355    356    356            (           2604    45769    UOM Id    DEFAULT     f   ALTER TABLE ONLY public."UOM" ALTER COLUMN "Id" SET DEFAULT nextval('public."UOM_Id_seq"'::regclass);
 9   ALTER TABLE public."UOM" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    314    313    314            9           2604    45918 	   Upload Id    DEFAULT     l   ALTER TABLE ONLY public."Upload" ALTER COLUMN "Id" SET DEFAULT nextval('public."Upload_Id_seq"'::regclass);
 <   ALTER TABLE public."Upload" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    347    348    348            z           2604    54842    VariableListTable Id    DEFAULT     �   ALTER TABLE ONLY public."VariableListTable" ALTER COLUMN "Id" SET DEFAULT nextval('public."VariableListTable_Id_seq"'::regclass);
 G   ALTER TABLE public."VariableListTable" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    477    478    478            y           2604    54831    VariableSettingsTable Id    DEFAULT     �   ALTER TABLE ONLY public."VariableSettingsTable" ALTER COLUMN "Id" SET DEFAULT nextval('public."VariableSettingsTable_Id_seq"'::regclass);
 K   ALTER TABLE public."VariableSettingsTable" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    476    475    476            k           2604    54681    WashCost Id    DEFAULT     p   ALTER TABLE ONLY public."WashCost" ALTER COLUMN "Id" SET DEFAULT nextval('public."WashCost_Id_seq"'::regclass);
 >   ALTER TABLE public."WashCost" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    448    447    448                        2604    45666    YarnBrand yarnBrandId    DEFAULT     �   ALTER TABLE ONLY public."YarnBrand" ALTER COLUMN "yarnBrandId" SET DEFAULT nextval('public."YarnBrand_yarnBrandId_seq"'::regclass);
 H   ALTER TABLE public."YarnBrand" ALTER COLUMN "yarnBrandId" DROP DEFAULT;
       public       postgres    false    295    296    296            �           2604    26580    YarnComp1 ID    DEFAULT     r   ALTER TABLE ONLY public."YarnComp1" ALTER COLUMN "ID" SET DEFAULT nextval('public."YarnComp1_ID_seq"'::regclass);
 ?   ALTER TABLE public."YarnComp1" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    217    216            c           2604    54590    YarnCost Id    DEFAULT     p   ALTER TABLE ONLY public."YarnCost" ALTER COLUMN "Id" SET DEFAULT nextval('public."YarnCost_Id_seq"'::regclass);
 >   ALTER TABLE public."YarnCost" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    431    432    432            �           2604    26581    YarnCostPreCosting ID    DEFAULT     �   ALTER TABLE ONLY public."YarnCostPreCosting" ALTER COLUMN "ID" SET DEFAULT nextval('public."YarnCostPreCosting_ID_seq"'::regclass);
 H   ALTER TABLE public."YarnCostPreCosting" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    219    218            �           2604    26582    YarnCount ID    DEFAULT     r   ALTER TABLE ONLY public."YarnCount" ALTER COLUMN "ID" SET DEFAULT nextval('public."YarnCount_ID_seq"'::regclass);
 ?   ALTER TABLE public."YarnCount" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    221    220            P           2604    54316    YarnCountDetermination Id    DEFAULT     �   ALTER TABLE ONLY public."YarnCountDetermination" ALTER COLUMN "Id" SET DEFAULT nextval('public."YarnCountDetermination_Id_seq"'::regclass);
 L   ALTER TABLE public."YarnCountDetermination" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    394    393    394            Q           2604    54327    YarnCountDeterminationChild Id    DEFAULT     �   ALTER TABLE ONLY public."YarnCountDeterminationChild" ALTER COLUMN "Id" SET DEFAULT nextval('public."YarnCountDeterminationChild_Id_seq"'::regclass);
 Q   ALTER TABLE public."YarnCountDeterminationChild" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    396    395    396            ]           2604    54491    YarnRate Id    DEFAULT     p   ALTER TABLE ONLY public."YarnRate" ALTER COLUMN "Id" SET DEFAULT nextval('public."YarnRate_Id_seq"'::regclass);
 >   ALTER TABLE public."YarnRate" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    420    419    420            �           2604    26583    YarnType ID    DEFAULT     p   ALTER TABLE ONLY public."YarnType" ALTER COLUMN "ID" SET DEFAULT nextval('public."YarnType_ID_seq"'::regclass);
 >   ALTER TABLE public."YarnType" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    223    222            1           2604    45841    Years Id    DEFAULT     j   ALTER TABLE ONLY public."Years" ALTER COLUMN "Id" SET DEFAULT nextval('public."Years_Id_seq"'::regclass);
 ;   ALTER TABLE public."Years" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    332    331    332                       2604    17936    avg_grey_cons_fabric_cost id    DEFAULT     �   ALTER TABLE ONLY public.avg_grey_cons_fabric_cost ALTER COLUMN id SET DEFAULT nextval('public.avg_grey_cons_fabric_cost_id_seq'::regclass);
 K   ALTER TABLE public.avg_grey_cons_fabric_cost ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    281    280    281            �           2604    26584    commercial_cost id    DEFAULT     x   ALTER TABLE ONLY public.commercial_cost ALTER COLUMN id SET DEFAULT nextval('public.commercial_cost_id_seq'::regclass);
 A   ALTER TABLE public.commercial_cost ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    225    224                        2604    26585    commission_cost_pre_costing id    DEFAULT     �   ALTER TABLE ONLY public.commission_cost_pre_costing ALTER COLUMN id SET DEFAULT nextval('public.commission_cost_id_seq'::regclass);
 M   ALTER TABLE public.commission_cost_pre_costing ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    227    226                       2604    17980 #   cons_dzn_gmts_embellishment_cost id    DEFAULT     �   ALTER TABLE ONLY public.cons_dzn_gmts_embellishment_cost ALTER COLUMN id SET DEFAULT nextval('public.cons_dzn_gmts_embellishment_cost_id_seq'::regclass);
 R   ALTER TABLE public.cons_dzn_gmts_embellishment_cost ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    285    284    285                       2604    17996    cons_dzn_gmts_wash_cost id    DEFAULT     �   ALTER TABLE ONLY public.cons_dzn_gmts_wash_cost ALTER COLUMN id SET DEFAULT nextval('public.cons_dzn_gmts_wash_cost_id_seq'::regclass);
 I   ALTER TABLE public.cons_dzn_gmts_wash_cost ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    287    286    287                       2604    17964    cons_unit_gmts_trim_cost id    DEFAULT     �   ALTER TABLE ONLY public.cons_unit_gmts_trim_cost ALTER COLUMN id SET DEFAULT nextval('public.cons_unit_gmts_trim_cost_id_seq'::regclass);
 J   ALTER TABLE public.cons_unit_gmts_trim_cost ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    282    283    283                       2604    26586 !   embellishment_cost_pre_costing id    DEFAULT     �   ALTER TABLE ONLY public.embellishment_cost_pre_costing ALTER COLUMN id SET DEFAULT nextval('public.embellishment_cost_id_seq'::regclass);
 P   ALTER TABLE public.embellishment_cost_pre_costing ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    229    228                       2604    26587    item_details_order_entry id    DEFAULT     �   ALTER TABLE ONLY public.item_details_order_entry ALTER COLUMN id SET DEFAULT nextval('public.item_details_order_entry_id_seq'::regclass);
 J   ALTER TABLE public.item_details_order_entry ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    279    278    279                       2604    26588    other_cost_pre_costing id    DEFAULT     �   ALTER TABLE ONLY public.other_cost_pre_costing ALTER COLUMN id SET DEFAULT nextval('public.other_cost_pre_costing_id_seq'::regclass);
 H   ALTER TABLE public.other_cost_pre_costing ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    277    276    277                       2604    18055    parsial_fabric_booking_items id    DEFAULT     �   ALTER TABLE ONLY public.parsial_fabric_booking_items ALTER COLUMN id SET DEFAULT nextval('public.parsial_fabric_booking_items_id_seq'::regclass);
 N   ALTER TABLE public.parsial_fabric_booking_items ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    290    291    291                       2604    18023     parsial_fabric_booking_master id    DEFAULT     �   ALTER TABLE ONLY public.parsial_fabric_booking_master ALTER COLUMN id SET DEFAULT nextval('public.parsial_fabric_booking_master_id_seq'::regclass);
 O   ALTER TABLE public.parsial_fabric_booking_master ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    288    289    289            @           2604    54153    partytype id    DEFAULT     l   ALTER TABLE ONLY public.partytype ALTER COLUMN id SET DEFAULT nextval('public.partytype_id_seq'::regclass);
 ;   ALTER TABLE public.partytype ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    362    361    362                       2604    26589    tblAgentInfo AgentID    DEFAULT     �   ALTER TABLE ONLY public."tblAgentInfo" ALTER COLUMN "AgentID" SET DEFAULT nextval('public."tblAgentInfo_AgentID_seq"'::regclass);
 G   ALTER TABLE public."tblAgentInfo" ALTER COLUMN "AgentID" DROP DEFAULT;
       public       postgres    false    231    230                       2604    26590    tblBuyerInfo BuyerID    DEFAULT     �   ALTER TABLE ONLY public."tblBuyerInfo" ALTER COLUMN "BuyerID" SET DEFAULT nextval('public."tblBuyerInfo_BuyerID_seq"'::regclass);
 G   ALTER TABLE public."tblBuyerInfo" ALTER COLUMN "BuyerID" DROP DEFAULT;
       public       postgres    false    233    232                       2604    26591    tblCompanyInfo CompID    DEFAULT     �   ALTER TABLE ONLY public."tblCompanyInfo" ALTER COLUMN "CompID" SET DEFAULT nextval('public."tblCompanyInfo_CompID_seq"'::regclass);
 H   ALTER TABLE public."tblCompanyInfo" ALTER COLUMN "CompID" DROP DEFAULT;
       public       postgres    false    235    234                       2604    26592    tblCurrencyInfo CurrencyID    DEFAULT     �   ALTER TABLE ONLY public."tblCurrencyInfo" ALTER COLUMN "CurrencyID" SET DEFAULT nextval('public."tblCurrencyInfo_CurrencyID_seq"'::regclass);
 M   ALTER TABLE public."tblCurrencyInfo" ALTER COLUMN "CurrencyID" DROP DEFAULT;
       public       postgres    false    237    236                       2604    26593    tblDealingMrcndiserInfo ID    DEFAULT     �   ALTER TABLE ONLY public."tblDealingMrcndiserInfo" ALTER COLUMN "ID" SET DEFAULT nextval('public."tblDealingMrcndiserInfo_ID_seq"'::regclass);
 M   ALTER TABLE public."tblDealingMrcndiserInfo" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    239    238                       2604    26594    tblDepartInfo DepID    DEFAULT     �   ALTER TABLE ONLY public."tblDepartInfo" ALTER COLUMN "DepID" SET DEFAULT nextval('public."tblDepartInfo_DepID_seq"'::regclass);
 F   ALTER TABLE public."tblDepartInfo" ALTER COLUMN "DepID" DROP DEFAULT;
       public       postgres    false    241    240                       2604    26595    tblInitialOrder OrderAutoID    DEFAULT     �   ALTER TABLE ONLY public."tblInitialOrder" ALTER COLUMN "OrderAutoID" SET DEFAULT nextval('public."tblInitialOrder_OrderAutoID_seq"'::regclass);
 N   ALTER TABLE public."tblInitialOrder" ALTER COLUMN "OrderAutoID" DROP DEFAULT;
       public       postgres    false    243    242            	           2604    26596    tblLocationInfo LocationId    DEFAULT     �   ALTER TABLE ONLY public."tblLocationInfo" ALTER COLUMN "LocationId" SET DEFAULT nextval('public."tblLocationInfo_LocationId_seq"'::regclass);
 M   ALTER TABLE public."tblLocationInfo" ALTER COLUMN "LocationId" DROP DEFAULT;
       public       postgres    false    245    244            
           2604    26597    tblOrderUomInfo UOMID    DEFAULT     �   ALTER TABLE ONLY public."tblOrderUomInfo" ALTER COLUMN "UOMID" SET DEFAULT nextval('public."tblOrderUomInfo_UOMID_seq"'::regclass);
 H   ALTER TABLE public."tblOrderUomInfo" ALTER COLUMN "UOMID" DROP DEFAULT;
       public       postgres    false    247    246                       2604    26598    tblPODetailsInfro PoDetID    DEFAULT     �   ALTER TABLE ONLY public."tblPODetailsInfro" ALTER COLUMN "PoDetID" SET DEFAULT nextval('public."tblPODetailsInfro_PoDetID_seq"'::regclass);
 L   ALTER TABLE public."tblPODetailsInfro" ALTER COLUMN "PoDetID" DROP DEFAULT;
       public       postgres    false    249    248                       2604    26599    tblPackingInfo PackingID    DEFAULT     �   ALTER TABLE ONLY public."tblPackingInfo" ALTER COLUMN "PackingID" SET DEFAULT nextval('public."tblPackingInfo_PackingID_seq"'::regclass);
 K   ALTER TABLE public."tblPackingInfo" ALTER COLUMN "PackingID" DROP DEFAULT;
       public       postgres    false    251    250                       2604    26600    tblPoOrderStatusInfo ID    DEFAULT     �   ALTER TABLE ONLY public."tblPoOrderStatusInfo" ALTER COLUMN "ID" SET DEFAULT nextval('public."tblPoOrderStatusInfo_ID_seq"'::regclass);
 J   ALTER TABLE public."tblPoOrderStatusInfo" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    253    252                       2604    26601    tblPoStatus ID    DEFAULT     v   ALTER TABLE ONLY public."tblPoStatus" ALTER COLUMN "ID" SET DEFAULT nextval('public."tblPoStatus_ID_seq"'::regclass);
 A   ALTER TABLE public."tblPoStatus" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    255    254                       2604    26602     tblProductCategoryInfo ProdCatId    DEFAULT     �   ALTER TABLE ONLY public."tblProductCategoryInfo" ALTER COLUMN "ProdCatId" SET DEFAULT nextval('public."tblProductCategoryInfo_ProdCatId_seq"'::regclass);
 S   ALTER TABLE public."tblProductCategoryInfo" ALTER COLUMN "ProdCatId" DROP DEFAULT;
       public       postgres    false    257    256                       2604    26603    tblProductionDeptInfo ID    DEFAULT     �   ALTER TABLE ONLY public."tblProductionDeptInfo" ALTER COLUMN "ID" SET DEFAULT nextval('public."tblProductionDeptInfo_ID_seq"'::regclass);
 K   ALTER TABLE public."tblProductionDeptInfo" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    259    258                       2604    26604    tblRegionInfo RegionID    DEFAULT     �   ALTER TABLE ONLY public."tblRegionInfo" ALTER COLUMN "RegionID" SET DEFAULT nextval('public."tblRegionInfo_RegionID_seq"'::regclass);
 I   ALTER TABLE public."tblRegionInfo" ALTER COLUMN "RegionID" DROP DEFAULT;
       public       postgres    false    261    260                       2604    26605    tblSeasonInfo SeasonID    DEFAULT     �   ALTER TABLE ONLY public."tblSeasonInfo" ALTER COLUMN "SeasonID" SET DEFAULT nextval('public."tblSeasonInfo_SeasonID_seq"'::regclass);
 I   ALTER TABLE public."tblSeasonInfo" ALTER COLUMN "SeasonID" DROP DEFAULT;
       public       postgres    false    263    262                       2604    26606    tblShipmentModeInfo ID    DEFAULT     �   ALTER TABLE ONLY public."tblShipmentModeInfo" ALTER COLUMN "ID" SET DEFAULT nextval('public."tblShipmentModeInfo_ID_seq"'::regclass);
 I   ALTER TABLE public."tblShipmentModeInfo" ALTER COLUMN "ID" DROP DEFAULT;
       public       postgres    false    265    264                       2604    26607    tblSubDeptInfo SubDeptID    DEFAULT     �   ALTER TABLE ONLY public."tblSubDeptInfo" ALTER COLUMN "SubDeptID" SET DEFAULT nextval('public."tblSubDeptInfo_SubDeptID_seq"'::regclass);
 K   ALTER TABLE public."tblSubDeptInfo" ALTER COLUMN "SubDeptID" DROP DEFAULT;
       public       postgres    false    267    266                       2604    26608    tblUserTypeInfo UserTypeID    DEFAULT     �   ALTER TABLE ONLY public."tblUserTypeInfo" ALTER COLUMN "UserTypeID" SET DEFAULT nextval('public."tblUserTypeInfo_UserTypeID_seq"'::regclass);
 M   ALTER TABLE public."tblUserTypeInfo" ALTER COLUMN "UserTypeID" DROP DEFAULT;
       public       postgres    false    271    270                       2604    26609    trim_cost_pre_costing id    DEFAULT     �   ALTER TABLE ONLY public.trim_cost_pre_costing ALTER COLUMN id SET DEFAULT nextval('public.trim_cost_pre_costing_id_seq'::regclass);
 G   ALTER TABLE public.trim_cost_pre_costing ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    273    272                       2604    26610    wash_cost_pre_costing id    DEFAULT     x   ALTER TABLE ONLY public.wash_cost_pre_costing ALTER COLUMN id SET DEFAULT nextval('public.wash_cost_id_seq'::regclass);
 G   ALTER TABLE public.wash_cost_pre_costing ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    275    274            t          0    54760    AccountingYear 
   TABLE DATA               �   COPY public."AccountingYear" ("Id", "CompanyId", "StartingYear", "CurrentYear", "StartingMonth", "EndingMonth", "PeriodName", "IsActive") FROM stdin;
    public       postgres    false    466   �l      v          0    54768    AccountingYearSubInfo 
   TABLE DATA               }   COPY public."AccountingYearSubInfo" ("Id", "StartingDate", "EndingDate", "Period", "Locked", "AccountingYearId") FROM stdin;
    public       postgres    false    468   �l      r          0    54752 
   BloodGroup 
   TABLE DATA               >   COPY public."BloodGroup" ("Id", "BloodGroupName") FROM stdin;
    public       postgres    false    464   �l                0    54131    BodyPartEntry 
   TABLE DATA               ~   COPY public."BodyPartEntry" ("Id", "BodyPartFullName", "BodyPartShortName", "EntryPages", "BodyPartType", status) FROM stdin;
    public       postgres    false    358   m      �          0    45782    BodyPartType 
   TABLE DATA               J   COPY public."BodyPartType" ("Id", "BodyPartTypeName", status) FROM stdin;
    public       postgres    false    318   -m      h          0    17148    BodyPartofPreCosting 
   TABLE DATA               L   COPY public."BodyPartofPreCosting" ("ID", "Item_Group", "Type") FROM stdin;
    public       postgres    false    198   �m      x          0    54779    BuyerProfile 
   TABLE DATA               �  COPY public."BuyerProfile" ("Id", "ContactName", "ShortName", "ContactPerson", "Designation", "ExportersRef", "Email", "HttpWww", "AddressOne", "AddressTwo", "AddressThree", "AddressFour", "CountryId", "PartyTypeIds", "TagCompany", "LinkToSupplier", "CreditLimitDays", "CrditLimitAmount", "CrditLimitAmountType", "DiscountMethod", "SecuirityDeducted", "VatToBeDeducted", "AitToBeDeducted", "Remark", "MarketingTeamId", "SewingEffiMkt", "SewingEffiPlaning", "DeffdLcCost", "CutOffUsed", "ControlDelivery", "DeliveryBufferDays", "MinQuotedProfit", "MinBudgetedProfit", "Status", "CommercialInvoice", "TagSample", "ImagePath", "ImageName") FROM stdin;
    public       postgres    false    470   �m                 0    54258    BuyerWiesSeason 
   TABLE DATA               J   COPY public."BuyerWiesSeason" ("Id", "BuyerId", "SeasonName") FROM stdin;
    public       postgres    false    382   �m                0    54207    CapacityAllocation 
   TABLE DATA               `   COPY public."CapacityAllocation" ("Id", "Company", "Location", "YearId", "MonthId") FROM stdin;
    public       postgres    false    372   n      H          0    54523    CapacityCalculation 
   TABLE DATA               �   COPY public."CapacityCalculation" ("Id", "CompanyId", "CapacitySource", "Location", "Year", "Month", "ManOrMachinePerLine", "BasicSAM", "Efficiency", "FinType", "Smv", "WoHrs") FROM stdin;
    public       postgres    false    422   Wn      J          0    54534    CapacityCalculationMonthly 
   TABLE DATA               �   COPY public."CapacityCalculationMonthly" ("Id", "Date", "DayStatus", "NoOfLine", "CapacityMinutes", "CapacityPcs", "CapacityCalculationId", "CapacityCalculationYear", "CapacityCalculationMonth", "Manpower") FROM stdin;
    public       postgres    false    424   �n      L          0    54545    CapacityCalculationYearly 
   TABLE DATA               �   COPY public."CapacityCalculationYearly" ("Id", "Month", "WorkingDay", "CapacityMinutes", "CapacityPcs", "CapacityCalculationId", "CapacityCalculationYear", "CapacityCalculationMonth") FROM stdin;
    public       postgres    false    426   �n      �          0    45806 
   ColorRange 
   TABLE DATA               F   COPY public."ColorRange" ("Id", "ColorRangeName", status) FROM stdin;
    public       postgres    false    324    o      V          0    54609 	   ColorType 
   TABLE DATA               F   COPY public."ColorType" ("Id", "ColorTypeName", "Status") FROM stdin;
    public       postgres    false    436   =o                0    54215    ColourEntry 
   TABLE DATA               S   COPY public."ColourEntry" ("Id", "ColorName", "Status", "BuyerNameId") FROM stdin;
    public       postgres    false    374   eo      Z          0    54627    CommercialCost 
   TABLE DATA               ^   COPY public."CommercialCost" ("Id", "Item", "RateIn", "Amount", "Status", "PoNo") FROM stdin;
    public       postgres    false    440   �o      �          0    45790    CommercialInvoice 
   TABLE DATA               T   COPY public."CommercialInvoice" ("Id", "CommercialInvoiceName", status) FROM stdin;
    public       postgres    false    320   p      T          0    54598    ConsumptionEntryForm 
   TABLE DATA               �   COPY public."ConsumptionEntryForm" ("Id", "PoNoId", "Color", "GmtsSizes", "Dia", "ItemSizes", "FinishCons", "ProcessLoss", "GreyCons", "Rate", "Amount", "Pcs", "TotalQty", "TotalAmount", "Remarks") FROM stdin;
    public       postgres    false    434   )p      X          0    54619    ConversionCostForPreCost 
   TABLE DATA               �   COPY public."ConversionCostForPreCost" ("Id", "FabricDescriptionId", "ProcessId", "ProcessLoss", "ReqQty", "AvgReqQty", "ChargeUnit", "Amount", "Status", "PoNo") FROM stdin;
    public       postgres    false    438   �p      j          0    17158    ConversionCostProcess 
   TABLE DATA               ?   COPY public."ConversionCostProcess" ("ID", "Name") FROM stdin;
    public       postgres    false    200   .q      d          0    54688    CostComponenetsMasterDetails 
   TABLE DATA               �   COPY public."CostComponenetsMasterDetails" ("Id", "JobNoId", "PoNoId", "CostComponetId", "BudgetedCost", "QPrice", "CostComponentName") FROM stdin;
    public       postgres    false    450   xq      �          0    37640    CostComponentsMaster 
   TABLE DATA               K   COPY public."CostComponentsMaster" ("Id", "Cost_ComponetName") FROM stdin;
    public       postgres    false    294   �q      �          0    45671    CountryLocationMapping 
   TABLE DATA               \   COPY public."CountryLocationMapping" ("Id", "CountryId", "UltimateCountryName") FROM stdin;
    public       postgres    false    298   �r      B          0    54462    CurrencyConversionRate 
   TABLE DATA               o   COPY public."CurrencyConversionRate" ("Id", "Currency", "ConversionRate", "Date", "MarketingRate") FROM stdin;
    public       postgres    false    416   �r      j          0    54714 
   Department 
   TABLE DATA               >   COPY public."Department" ("Id", "DepartmentName") FROM stdin;
    public       postgres    false    456   �r      �          0    45897    DepartmentProfile 
   TABLE DATA               �   COPY public."DepartmentProfile" ("Id", "DepartmentName", "ShortName", "Division", "Address", "ContactNumber", "ContactPerson", "Remark", "CountryId", "Website", "Status", "Email") FROM stdin;
    public       postgres    false    346   s      h          0    54706    Designation 
   TABLE DATA               @   COPY public."Designation" ("Id", "DesignationName") FROM stdin;
    public       postgres    false    454   ss      �          0    45774    DiscountMethod 
   TABLE DATA               N   COPY public."DiscountMethod" ("Id", "DiscountMethodName", status) FROM stdin;
    public       postgres    false    316   �s      f          0    54696    Division 
   TABLE DATA               :   COPY public."Division" ("Id", "DivisionName") FROM stdin;
    public       postgres    false    452   �s      �          0    45886    DivisionProfile 
   TABLE DATA               �   COPY public."DivisionProfile" ("Id", "DivisionName", "ShortName", "CompanyName", "Address", "ContactNumber", "Remark", "CountryId", "Website", "Status", "Email", "ContactPerson") FROM stdin;
    public       postgres    false    344   t      6          0    54380    DyeingAndFinishingCharge 
   TABLE DATA               �   COPY public."DyeingAndFinishingCharge" ("Id", "CompanyName", "ConstCompo", "ProcessType", "ProcessName", "Color", "WidthDiatype", "InHouseRate", "UOMId", "Ratetype", "CustomerRate", "SubconBuyer", "Status") FROM stdin;
    public       postgres    false    404   ?t      |          0    54820 	   ERPModule 
   TABLE DATA               E   COPY public."ERPModule" ("Id", "ModuleId", "ModuleName") FROM stdin;
    public       postgres    false    474   �t      <          0    54438    EmailAddressSetup 
   TABLE DATA               `   COPY public."EmailAddressSetup" ("Id", "UserType", "RecipientName", "EmailAddress") FROM stdin;
    public       postgres    false    410   <u      l          0    54724    EmployeeCategory 
   TABLE DATA               J   COPY public."EmployeeCategory" ("Id", "EmployeeCategoryName") FROM stdin;
    public       postgres    false    458   �u      N          0    54556    EmployeeInfo 
   TABLE DATA               n  COPY public."EmployeeInfo" ("Id", "EmployeeCode", "EmployeeFirstName", "EmployeeMiddleName", "EmployeeLastName", "EmployeeNameBangla", "FathersName", "FathersNameBangla", "MothersName", "MothersNameBangla", "Sex", "BirthPlace", "DateofBirth", "Age", "ReligionId", "MaritalStatus", "BloodGroupId", "Nationality", "NationalId", "PassportNo", "EmployeeCategoryId", "DesignationLebelId", "DesignationId", "FunctionalSuperiorId", "AdminSuperiorId", "IdCardNo", "JoiningDate", "ConfirmationDate", "PunchCardNo", "Remarks", "CompanyId", "LocationId", "FloorId", "DivisionId", "DepartmentId", "SectionId", "LineNoId") FROM stdin;
    public       postgres    false    428   �u      `          0    54659 
   FabricCost 
   TABLE DATA               m  COPY public."FabricCost" ("Id", "PoNoId", "GmtsItemId", "BodyPartId", "BodyPartTypeId", "FabNatureId", "ColorTypeId", "FabricDesPreCostId", "FabricSourceId", "NominatedSuppId", "WidthDiaType", "GsmWeight", "ColorSizeSensitive", "Color", "ConsumptionBasis", "Uom", "AvgGreyCons", "Rate", "Amount", "TotalQty", "TotalAmount", "PreCostingId", "SuplierId") FROM stdin;
    public       postgres    false    446   �u      l          0    17171    FabricDesPreCost 
   TABLE DATA               �   COPY public."FabricDesPreCost" ("ID", "FabNature", "Construction", "GSM/Weight", "ColorRange", "StichLength", "ProcessLoss", "Composition") FROM stdin;
    public       postgres    false    202   /v      �          0    45798    FabricNature 
   TABLE DATA               J   COPY public."FabricNature" ("Id", "FabricNatureName", status) FROM stdin;
    public       postgres    false    322   �v      @          0    54454    FastReactIntgration 
   TABLE DATA               ]   COPY public."FastReactIntgration" ("Id", "ExportPOReceivedfrom", "ExportModule") FROM stdin;
    public       postgres    false    414   w                0    54188    FinancialParameterSetup 
   TABLE DATA               W  COPY public."FinancialParameterSetup" ("Id", "CompanyName", "ApplyingPeriod", "To", "BEPCM", "AskingProfit", "NoOfFactoryMachine", "MonthlyCMExpense", "WorkingHour", "CostPerMinute", "ActualCM", "AskingAVGRate", "Status", "MaxProfi", "DepreciationAndAmortization", "InterestExpenses", "IncomeTax", "OperatingExpenses", "AskingCM") FROM stdin;
    public       postgres    false    370   Hw      n          0    54736    Floor 
   TABLE DATA               4   COPY public."Floor" ("Id", "FloorName") FROM stdin;
    public       postgres    false    460   �w      p          0    54744    FunctionalSuperior 
   TABLE DATA               N   COPY public."FunctionalSuperior" ("Id", "FunctionalSuperiorName") FROM stdin;
    public       postgres    false    462   �w                0    54172    GarmentsItemEntry 
   TABLE DATA               �   COPY public."GarmentsItemEntry" ("Id", "ItemName", "CommercialName", "ProductCategoryId", "ProductTypeId", "StandardSMV", "Efficiency", "Status") FROM stdin;
    public       postgres    false    366   �w                0    54115    GarmentsSampleEntry 
   TABLE DATA               ]   COPY public."GarmentsSampleEntry" ("Id", "SampleName", "SampleTypeId", "Status") FROM stdin;
    public       postgres    false    354   x      �          0    45755    GroupProfile 
   TABLE DATA               �   COPY public."GroupProfile" ("Id", "GroupName", "ContactPerson", "ContactNumber", "CountryId", "Website", "Email", "Address", "Remark", "Status") FROM stdin;
    public       postgres    false    312   =x      n          0    17179    Input_Pannel_PODetails 
   TABLE DATA               �   COPY public."Input_Pannel_PODetails" ("Input_Pannel_ID", "Po_details_ID", "CountryID", "Country_Type", "Cutt-off_Date", "Cutt_off", "Country_Shipment_date", "Remarks", "Packing_ID", "Quantity") FROM stdin;
    public       postgres    false    204   �x      �          0    45695    ItemCategory 
   TABLE DATA               L   COPY public."ItemCategory" ("Id", "ItemCategoryName", "Status") FROM stdin;
    public       postgres    false    302   �x      ^          0    54648 	   ItemGroup 
   TABLE DATA               �   COPY public."ItemGroup" ("Id", "ItemCategoryId", "GroupCode", "ItemGroupName", "ItemType", "OrderUom", "ConsUom", "ConvFactor", "FancyItem", "CalParameter", status) FROM stdin;
    public       postgres    false    444   (y      2          0    54361    JournalSetup 
   TABLE DATA               e   COPY public."JournalSetup" ("Id", "JournalTypeId", "PreFix", "StartingNumber", "Status") FROM stdin;
    public       postgres    false    400   ny      �          0    45870    JournalType 
   TABLE DATA               H   COPY public."JournalType" ("Id", "JournalTypeName", status) FROM stdin;
    public       postgres    false    340   �y      4          0    54369    KnittingCharge 
   TABLE DATA               �   COPY public."KnittingCharge" ("Id", "CompanyName", "BodyPartId", "ConstructionComposition", "GSM", "Gauge", "YarnDescription", "InHouseRate", "CustomerRate", "SubconBuyer", "UOMId", "Status") FROM stdin;
    public       postgres    false    402   }z      0          0    54350    LabTestRateChart 
   TABLE DATA               �   COPY public."LabTestRateChart" ("Id", "TestCatagory", "TestFor", "TestItem", "Rate", "Upcharge", "UpchargeAmout", "NetRate", "Currency", "TestingCompany") FROM stdin;
    public       postgres    false    398   �z      P          0    54567    LineNo 
   TABLE DATA               6   COPY public."LineNo" ("Id", "LineNoName") FROM stdin;
    public       postgres    false    430   @{      &          0    54286    MachineEntry 
   TABLE DATA               g  COPY public."MachineEntry" ("Id", "Company", "Attachment", "Location", "ProdCapacity", "FloorNo", "CapacityUOMId", "MachineNo", "Brand", "Category", "Origin", "Group", "PurchaseDate", "DiaWidth", "PurchaseCost", "Gauge", "AccumulatedDep", "ExtraCylinder", "DepreciationRate", "Nooffeeder", "DepreciationMethod", "Remarks", "SequenceNo", "Status") FROM stdin;
    public       postgres    false    388   ]{      >          0    54446    MailRecipientGroup 
   TABLE DATA               l   COPY public."MailRecipientGroup" ("Id", "CompanyName", "MailItem", "YouHaveSelected", "Status") FROM stdin;
    public       postgres    false    412   F|      8          0    54400    MarketingTeamInfo 
   TABLE DATA               ~   COPY public."MarketingTeamInfo" ("Id", "TeamName", "TeamLeaderId", "Designation", "Email", "ContactNo", "Status") FROM stdin;
    public       postgres    false    406   �|      :          0    54411 
   MemberInfo 
   TABLE DATA               �   COPY public."MemberInfo" ("Id", "MemberNameOrUserId", "TeamLeaderId", "Designation", "Email", "ContactNo", "Status") FROM stdin;
    public       postgres    false    408   �|                0    54180    MinLeadTimeSlab 
   TABLE DATA               a   COPY public."MinLeadTimeSlab" ("Id", "CompanyId", "LocationId", "YearId", "MonthId") FROM stdin;
    public       postgres    false    368   �|      �          0    45846    Months 
   TABLE DATA               L   COPY public."Months" ("Id", "MonthName", "MonthNumber", status) FROM stdin;
    public       postgres    false    334   }      p          0    17187    OrderImageUploadTbl 
   TABLE DATA               z   COPY public."OrderImageUploadTbl" ("OrderImgUploadID""", "InitialOrderID", "FileName", "FileSize", "ImgPath") FROM stdin;
    public       postgres    false    206   �}      r          0    17195 	   OrderItem 
   TABLE DATA               7   COPY public."OrderItem" ("ItemID", "Name") FROM stdin;
    public       postgres    false    208   >�      �          0    45743    OtherPartyProfile 
   TABLE DATA               �   COPY public."OtherPartyProfile" ("Id", "OtherPartyName", "ShortName", "Address", "ContactPerson", "CountryNameId", "Designation", "Remark", "ContactNo", "Status", "Email", "URLName", "ImageName", "ImagePathName") FROM stdin;
    public       postgres    false    310   q�      
          0    54142    PageInfo 
   TABLE DATA               J   COPY public."PageInfo" ("Id", "PageName", "PageLink", status) FROM stdin;
    public       postgres    false    360   ф      �          0    45719 	   PartyType 
   TABLE DATA               F   COPY public."PartyType" ("Id", "PartyTypeName", "Status") FROM stdin;
    public       postgres    false    304   �      �          0    37619 
   PreCosting 
   TABLE DATA               �  COPY public."PreCosting" ("PrecostingID", "OrderID", "Costing_Date", "Incoterm", "Incoterm_place", "Sew_Efficiency", "PoId", "BuyerId", "QuotationId", "ApprovedId", "currencyId", "jobQty", "companyId", "orderUOMId", "RegionId", "BudgetMinuite", "eR", "CutSMV", "SewSMV", "StyleRef", "StyleDesc", "Remark", agent, "machineLine", "prodLineHr", "ReadyToApproved", "imagesPath", "Fileno", "internalRef", "CopyFrom", "Unapproverequest", "CutEfficiency") FROM stdin;
    public       postgres    false    293   >�      �          0    45822    ProductCategory 
   TABLE DATA               P   COPY public."ProductCategory" ("Id", "ProductCategoryName", status) FROM stdin;
    public       postgres    false    328   ��                0    54223    ProductSubDepartment 
   TABLE DATA               l   COPY public."ProductSubDepartment" ("Id", "SubDepartmentName", "DepartnemtName", "BuyerNameId") FROM stdin;
    public       postgres    false    376   ��      �          0    45830    ProductType 
   TABLE DATA               H   COPY public."ProductType" ("Id", "ProductTypeName", status) FROM stdin;
    public       postgres    false    330   (�      (          0    54297    ProductionFloor 
   TABLE DATA               �   COPY public."ProductionFloor" ("Id", "Company", "Location", "Floor", "FloorSequence", "ProductionProcessId", "Status") FROM stdin;
    public       postgres    false    390   x�      �          0    45862    ProductionProcess 
   TABLE DATA               T   COPY public."ProductionProcess" ("Id", "ProductionProcessName", status) FROM stdin;
    public       postgres    false    338   ��                 0    45924    ProfitCenter 
   TABLE DATA               �   COPY public."ProfitCenter" ("Id", "ProfitCenterName", "Company", "Address", "ContactNumber", "ContactPerson", "Remark", "CountryId", "Website", "Status", "Email") FROM stdin;
    public       postgres    false    350   ��      z          0    54809    QuotationInquery 
   TABLE DATA               �  COPY public."QuotationInquery" ("Id", "CompanyId", "BuyerId", "StyleRefName", "Season", "InqRcvdDate", "Status", "BuyerInquiryNo", "DealingMerchantId", "GmtsItemId", "BulkEstShipDate", "Fabrication", "BulkOfferQty", "BodyColor", "TargetReqQuotDate", "TargetSampSubDate", "ActualSampSendDate", "DepartmentName", "ActualQuotDate", "BuyerTargetPrice", "BuyerSubmitPrice", "Remarks") FROM stdin;
    public       postgres    false    472   ?�      �          0    45854 	   Resources 
   TABLE DATA               C   COPY public."Resources" ("Id", "ResourceName", status) FROM stdin;
    public       postgres    false    336   i�      *          0    54305    SampleProductionTeam 
   TABLE DATA               }   COPY public."SampleProductionTeam" ("Id", "TeamName", "Location", "NumberofMembers", "TeamEfficiency", "Status") FROM stdin;
    public       postgres    false    392   �      �          0    45814 
   SampleType 
   TABLE DATA               F   COPY public."SampleType" ("Id", "SampleTypeName", status) FROM stdin;
    public       postgres    false    326   I�                0    45935    SectionProfile 
   TABLE DATA               �   COPY public."SectionProfile" ("Id", "SectionName", "ShortName", "DepartmentId", "Address", "ContactNumber", "ContactPerson", "Remark", "CountryId", "Website", "Status", "Email") FROM stdin;
    public       postgres    false    352   �      "          0    54267 
   SewingLine 
   TABLE DATA               �   COPY public."SewingLine" ("Id", "Company", "Location", "Floor", "SewingLineSequence", "LineName", "SewingGroup", "Status") FROM stdin;
    public       postgres    false    384   �      $          0    54278    SewingOperation 
   TABLE DATA               �   COPY public."SewingOperation" ("Id", "Operation", "Rate", "UOMId", "ResourceId", "OperatorSMV", "HelperSMV", "TotalSMV", "Action") FROM stdin;
    public       postgres    false    386   ̍      �          0    45677 
   SiezeEntry 
   TABLE DATA               O   COPY public."SiezeEntry" ("Id", "Sequence", "Status", "SinzeName") FROM stdin;
    public       postgres    false    299   �      t          0    17205    Size_Pannel_PODetails 
   TABLE DATA               �   COPY public."Size_Pannel_PODetails" ("Size_Pannel_ID", "Input_Pannel_ID", "ItemID", "Article_Number", "Color", "Size", "Quanity", "Rate", "Amount", "ExcessCut", "PlanCutQty", "Status", "BarCode") FROM stdin;
    public       postgres    false    210   :�      D          0    54470    StoreLocation 
   TABLE DATA               s   COPY public."StoreLocation" ("Id", "StoreName", "CompanyName", "Location", "ItemCategoryId", "Status") FROM stdin;
    public       postgres    false    418   s�      v          0    17210    Suplier 
   TABLE DATA               �   COPY public."Suplier" ("ID", "Name", "Designation", "CompanyName", "ContactPerson", "ContactPersionDesignation", "SuplierType", "SuplyItemID", "Nominated") FROM stdin;
    public       postgres    false    212   ��      x          0    17218 	   Suplyitem 
   TABLE DATA               B   COPY public."Suplyitem" ("ID", "Name", "Description") FROM stdin;
    public       postgres    false    214   ��                0    54247    SupplierProfile 
   TABLE DATA               �  COPY public."SupplierProfile" ("Id", "SupplierName", "ShortName", "ContactPerson", "Designation", "ContactNo", "Email", "HttpWww", "AddressOne", "AddressTwo", "AddressThree", "AddressFour", "CountryId", "PartyTypeIds", "TagCompany", "LinkToBuyer", "CreditLimitDays", "CrditLimitAmount", "CrditLimitAmountType", "DiscountMethod", "SecuirityDeducted", "VatToBeDeducted", "AitToBeDeducted", "Remark", "Individual", "Status", "SupplierNature", "Image", "TagBuyer", "SupplierRef") FROM stdin;
    public       postgres    false    380   	�      �          0    45735    TNATaskEntry 
   TABLE DATA               �   COPY public."TNATaskEntry" ("Id", "TaskNameId", "TaskShortName", "Penalty", "SequenceNo", "Completion", "GroupName", "Status", "GroupSeqNo") FROM stdin;
    public       postgres    false    308   ��      �          0    45727    TNATaskNameEntry 
   TABLE DATA               K   COPY public."TNATaskNameEntry" ("Id", "TNATaskName", "Status") FROM stdin;
    public       postgres    false    306   ��                0    54239    TNATaskPercent 
   TABLE DATA               �   COPY public."TNATaskPercent" ("Id", "TaskNameId", "BuyerNameId", "StartPercent", "NoticeBefore", "EndPercent", "Status") FROM stdin;
    public       postgres    false    378   5�                0    54160    TermsNCondition 
   TABLE DATA               c   COPY public."TermsNCondition" ("Id", "TermsnCondition", "MoreTermsNCondition", status) FROM stdin;
    public       postgres    false    364   o�      \          0    54637    TrimCost 
   TABLE DATA               �   COPY public."TrimCost" ("Id", "GroupId", "CountryId", "Description", "BrandSupRef", "Remarks", "NominatedSuppId", "ConsUOMId", "ConsUnitGmts", "Rate", "Amount", "TotalQty", "TotalAmount", "ApvlReq", "ImagePath", "PoNo") FROM stdin;
    public       postgres    false    442   ��      �          0    45878 
   TrimsGroup 
   TABLE DATA               F   COPY public."TrimsGroup" ("Id", "TrimsGroupName", status) FROM stdin;
    public       postgres    false    342   ��                0    54123    Type 
   TABLE DATA               :   COPY public."Type" ("Id", "TypeName", status) FROM stdin;
    public       postgres    false    356   �      �          0    45766    UOM 
   TABLE DATA               8   COPY public."UOM" ("Id", "UomName", status) FROM stdin;
    public       postgres    false    314   ��      �          0    45915    Upload 
   TABLE DATA               F   COPY public."Upload" ("Id", "Name", "Address", "ImgPath") FROM stdin;
    public       postgres    false    348   `�      �          0    54839    VariableListTable 
   TABLE DATA               \   COPY public."VariableListTable" ("Id", "CompanyId", "ModuleId", "VariableName") FROM stdin;
    public       postgres    false    478   ��      ~          0    54828    VariableSettingsTable 
   TABLE DATA                 COPY public."VariableSettingsTable" ("Id", "CompanyId", "ModuleId", "CountPageInputField", "VariableListId", "LabelOne", "ValueOne", "LabelTwo", "ValueTwo", "LabelThree", "ValueThree", "LabelFour", "ValueFour", "LabelFive", "ValueFive", "LabelSix", "ValueSix") FROM stdin;
    public       postgres    false    476   ��      b          0    54678    WashCost 
   TABLE DATA                  COPY public."WashCost" ("Id", "PoNo", "Name", "TypeId", "CountryId", "ConsOneDznGmts", "Rate", "Amount", "Status") FROM stdin;
    public       postgres    false    448   f�      �          0    45663 	   YarnBrand 
   TABLE DATA               [   COPY public."YarnBrand" ("yarnBrandId", "yarnBrandName", "sequenceNo", status) FROM stdin;
    public       postgres    false    296   ��      z          0    17223 	   YarnComp1 
   TABLE DATA               3   COPY public."YarnComp1" ("ID", "Name") FROM stdin;
    public       postgres    false    216   �      R          0    54587    YarnCost 
   TABLE DATA               �   COPY public."YarnCost" ("Id", "CountId", "PoId", "Comp1Id", percentage, "Color", "TypeId", "ConsQnty", "SupplierId", "Rate", "Amount") FROM stdin;
    public       postgres    false    432   E�      |          0    17228    YarnCostPreCosting 
   TABLE DATA               �   COPY public."YarnCostPreCosting" ("ID", "PreCostingID", "CountID", "Comp1ID", "Percent", "YarnTypeID", "ConsQnty", "SupplierID", "Rate", "Amont") FROM stdin;
    public       postgres    false    218   ��      ~          0    17233 	   YarnCount 
   TABLE DATA               I   COPY public."YarnCount" ("ID", "Name", "Sequence", "Status") FROM stdin;
    public       postgres    false    220   ƨ      ,          0    54313    YarnCountDetermination 
   TABLE DATA               �   COPY public."YarnCountDetermination" ("Id", "FabricNature", "Construction", "ColorRange", "GSM", "Status", "StitchLength", "ProcessLoss", "SequenceNo") FROM stdin;
    public       postgres    false    394   �      .          0    54324    YarnCountDeterminationChild 
   TABLE DATA               s   COPY public."YarnCountDeterminationChild" ("Id", "CompositionId", "Percentage", "YarnCountId", "Type") FROM stdin;
    public       postgres    false    396   �      F          0    54488    YarnRate 
   TABLE DATA               �   COPY public."YarnRate" ("Id", "SupplierId", "YarnCountId", "CompositionId", "Percentage", "Type", "RateOrKg", "EffectiveDate") FROM stdin;
    public       postgres    false    420   +�      �          0    17238    YarnType 
   TABLE DATA               A   COPY public."YarnType" ("ID", "Type", "Description") FROM stdin;
    public       postgres    false    222   H�      �          0    45838    Years 
   TABLE DATA               7   COPY public."Years" ("Id", "Year", status) FROM stdin;
    public       postgres    false    332   ��      �          0    17933    avg_grey_cons_fabric_cost 
   TABLE DATA               �   COPY public.avg_grey_cons_fabric_cost (id, precosting_id, febric_cost_id, po_no, color, gmts_sizes, dia, item_sizes, finish_cons, process_loss, grey_cons, rate, amount, pcs, total_qty, total_amount, remarks) FROM stdin;
    public       postgres    false    281   �      �          0    17243    commercial_cost 
   TABLE DATA               [   COPY public.commercial_cost (id, precosting_id, item, rate_in, amount, status) FROM stdin;
    public       postgres    false    224   /�      �          0    17251    commission_cost_pre_costing 
   TABLE DATA               }   COPY public.commission_cost_pre_costing (id, precosting_id, particulars, commn_base, commn_rate, amount, status) FROM stdin;
    public       postgres    false    226   L�      �          0    45685    composition 
   TABLE DATA               B   COPY public.composition (id, compositionname, status) FROM stdin;
    public       postgres    false    300   i�      �          0    17977     cons_dzn_gmts_embellishment_cost 
   TABLE DATA               �   COPY public.cons_dzn_gmts_embellishment_cost (id, embellishment_cost_id, po_no, country, gmts_item, gmts_color, gmts_sizes, cons, rate, amount) FROM stdin;
    public       postgres    false    285   ��      �          0    17993    cons_dzn_gmts_wash_cost 
   TABLE DATA               �   COPY public.cons_dzn_gmts_wash_cost (id, wash_cost_id, po_no, country, gmts_item, gmts_color, gmts_sizes, cons, rate, amount) FROM stdin;
    public       postgres    false    287   ��      �          0    17961    cons_unit_gmts_trim_cost 
   TABLE DATA               �   COPY public.cons_unit_gmts_trim_cost (id, trim_cost_id, po_no, gmts_item, country, gmts_color, gmts_sizes, item_sizes, cons, ex_percentage, tot_cons, rate, amount, total_qty, total_amount, placement, pcs) FROM stdin;
    public       postgres    false    283   ��      �          0    17259    embellishment_cost_pre_costing 
   TABLE DATA               �   COPY public.embellishment_cost_pre_costing (id, precosting_id, name, type, body_part, country, emb_supplier, cons_dzn_gmts, rate, amount, status) FROM stdin;
    public       postgres    false    228   ݪ      �          0    17917    item_details_order_entry 
   TABLE DATA               %  COPY public.item_details_order_entry (id, order_entry_id, item, ratio, sew_smv_pcs, cut_smv_pcs, fin_smv_pcs, complexity, print, embro_yes_no, embro_number, wash_yes_no, wash_number, sp_works_yes_no, sp_works_number, gmts_dyeing_yes_no, gmts_dyeing_number, aop_yes_no, aop_number) FROM stdin;
    public       postgres    false    279   ��      �          0    17844    other_cost_pre_costing 
   TABLE DATA               w   COPY public.other_cost_pre_costing (id, pre_costing_id, cost_component, budgeted_cost, percentage_q_price) FROM stdin;
    public       postgres    false    277   C�      �          0    18052    parsial_fabric_booking_items 
   TABLE DATA               �   COPY public.parsial_fabric_booking_items (id, order_id, booking_master_id, po_number, body_part, color_type, dia_width_type, construction, composition, gsm, gmts_color, item_color, dia, wo_qnty, adj_qnty, ac_wo_qnty, rate, amount) FROM stdin;
    public       postgres    false    291   `�      �          0    18020    parsial_fabric_booking_master 
   TABLE DATA               �  COPY public.parsial_fabric_booking_master (id, booking_no, booking_month, booking_year, company_name, buyer_name, fabric_nature, fabric_source, booking_date, delivery_date, pay_mode, supplier_name, currency, exchange_rate, source, attention, booking_percent, collar_excess_cut_percentage, cuff_excess_cut_percentage, ready_to_approved, internal_ref_no, file_no, un_approve_request, fabric_composition, level, remarks) FROM stdin;
    public       postgres    false    289   }�                0    54150 	   partytype 
   TABLE DATA               >   COPY public.partytype (id, partytypename, status) FROM stdin;
    public       postgres    false    362   ��      �          0    17267    tblAgentInfo 
   TABLE DATA               A   COPY public."tblAgentInfo" ("AgentID", "Agent_Name") FROM stdin;
    public       postgres    false    230   ��      �          0    17272    tblBuyerInfo 
   TABLE DATA               L   COPY public."tblBuyerInfo" ("BuyerID", "Buyer_Name", "Details") FROM stdin;
    public       postgres    false    232   ۫      �          0    17277    tblCompanyInfo 
   TABLE DATA               O   COPY public."tblCompanyInfo" ("CompID", "Company_Name", "Details") FROM stdin;
    public       postgres    false    234   �      �          0    17282    tblCurrencyInfo 
   TABLE DATA               J   COPY public."tblCurrencyInfo" ("CurrencyID", "Currency_Name") FROM stdin;
    public       postgres    false    236   5�      �          0    17287    tblDealingMrcndiserInfo 
   TABLE DATA               S   COPY public."tblDealingMrcndiserInfo" ("ID", "TeamleaderID", "UserID") FROM stdin;
    public       postgres    false    238   Z�      �          0    17292    tblDepartInfo 
   TABLE DATA               P   COPY public."tblDepartInfo" ("DepID", "Department_Name", "Details") FROM stdin;
    public       postgres    false    240   ��      �          0    17297    tblInitialOrder 
   TABLE DATA               �  COPY public."tblInitialOrder" ("OrderAutoID", "JobNo", "CompanyID", "LocationID", "BuyerID", "Style_Ref", "Style_Description", "Prod_DeptID", "Sub_DeptID", "CurrencyID", "RegionID", "Product_CatID", "Team_Leader_ID", "Dealing_Merchant_ID", "BH_Merchant", "Remarks", "Shipment_Mode_ID", "Order_Uom_ID", "SMV", "Packing_ID", "Season_ID", "Agent_ID", "UserID", "Repeat_No_Job", "Order_Number", "OrderImagePath") FROM stdin;
    public       postgres    false    242   ̬      �          0    17305    tblLocationInfo 
   TABLE DATA               J   COPY public."tblLocationInfo" ("LocationId", "Location_Name") FROM stdin;
    public       postgres    false    244   �      �          0    17310    tblOrderUomInfo 
   TABLE DATA               F   COPY public."tblOrderUomInfo" ("UOMID", "Order_Uom_Name") FROM stdin;
    public       postgres    false    246   A�      �          0    17315    tblPODetailsInfro 
   TABLE DATA               }  COPY public."tblPODetailsInfro" ("PoDetID", "InitialOrderID", "POOrderStatusID", "PO_No", "PO_Received_Date", "Pub_Shipment_Date", "Org_Shipment_Date", "Fac_Receive_Date", "PO_Quantity", "Avg_Price", "Amount", "Excess_Cut", "Plan_Cut", "PoStatusID", "Projected_Po", "TNA_FromOrUpto", "Internal_RefOrGrouping", "Delay_For", "Packing_ID", "File_No", "SCorLC", "Remarks") FROM stdin;
    public       postgres    false    248   ��      �          0    17323    tblPackingInfo 
   TABLE DATA               G   COPY public."tblPackingInfo" ("PackingID", "Packing_Name") FROM stdin;
    public       postgres    false    250   ܭ      �          0    17328    tblPoOrderStatusInfo 
   TABLE DATA               F   COPY public."tblPoOrderStatusInfo" ("ID", "Order_Status") FROM stdin;
    public       postgres    false    252   $�      �          0    17333    tblPoStatus 
   TABLE DATA               7   COPY public."tblPoStatus" ("ID", "Status") FROM stdin;
    public       postgres    false    254   W�      �          0    37594    tblPreCosting 
   TABLE DATA               �  COPY public."tblPreCosting" ("Agent", "ApprovedId", "BudgetMinuite", "BuyerId", "Costing_Date", "CutSMV", "ER", "Fileno", "Incoterm", "Incoterm_place", "MachineLine", "OrderID", "PoId", "PrecostingID", "ProdLineHr", "QuotationId", "ReadyToApproved", "RegionId", "Remark", "SewSMV", "Sew_Efficiency", "StyleDesc", "StyleRef", "Unapproverequest", "companyId", "currencyId", "internalRef", "jobQty", "orderUOMId", "pordDeptId", "CopyFrom") FROM stdin;
    public       postgres    false    292   ��      �          0    17338    tblProductCategoryInfo 
   TABLE DATA               T   COPY public."tblProductCategoryInfo" ("ProdCatId", "ProdCategory_Name") FROM stdin;
    public       postgres    false    256   ��      �          0    17343    tblProductionDeptInfo 
   TABLE DATA               X   COPY public."tblProductionDeptInfo" ("ID", "ProdDeptName", "Department_Id") FROM stdin;
    public       postgres    false    258   �      �          0    17348    tblRegionInfo 
   TABLE DATA               D   COPY public."tblRegionInfo" ("RegionID", "Region_Name") FROM stdin;
    public       postgres    false    260   ��      �          0    17353    tblSeasonInfo 
   TABLE DATA               D   COPY public."tblSeasonInfo" ("SeasonID", "Season_Name") FROM stdin;
    public       postgres    false    262   ��      �          0    17358    tblShipmentModeInfo 
   TABLE DATA               F   COPY public."tblShipmentModeInfo" ("ID", "Shipment_Mode") FROM stdin;
    public       postgres    false    264   �      �          0    17363    tblSubDeptInfo 
   TABLE DATA               X   COPY public."tblSubDeptInfo" ("SubDeptID", "Sub_dept_Name", "DepartmentID") FROM stdin;
    public       postgres    false    266   *�      �          0    17368    tblTeamlederInfoes 
   TABLE DATA               H   COPY public."tblTeamlederInfoes" ("TeamleaderID", "UserID") FROM stdin;
    public       postgres    false    268   j�      �          0    17371    tblUserInfo 
   TABLE DATA               �   COPY public."tblUserInfo" ("UserID", "FullName", "Email", "Contact", "RegDate", "UserName", "UserPassword", "UserTypeID", "DeptId") FROM stdin;
    public       postgres    false    269   ��      �          0    17374    tblUserTypeInfo 
   TABLE DATA               E   COPY public."tblUserTypeInfo" ("UserTypeID", "UserType") FROM stdin;
    public       postgres    false    270   �      �          0    17379    trim_cost_pre_costing 
   TABLE DATA               �   COPY public.trim_cost_pre_costing (id, precosting_id, group_name, country, description, band_sup_ref, remarks, nominated_supp, cons_uom, cons_unit_gmts, rate, amount, total_qty, total_amount, apvl_req, image) FROM stdin;
    public       postgres    false    272   >�      �          0    17387    wash_cost_pre_costing 
   TABLE DATA               |   COPY public.wash_cost_pre_costing (id, precosting_id, name, type, country, cons_dzn_gmts, rate, amount, status) FROM stdin;
    public       postgres    false    274   [�                 0    0    AccountingYearSubInfo_Id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."AccountingYearSubInfo_Id_seq"', 1, false);
            public       postgres    false    467                       0    0    AccountingYear_Id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."AccountingYear_Id_seq"', 1, false);
            public       postgres    false    465                       0    0    BloodGroup_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."BloodGroup_Id_seq"', 1, false);
            public       postgres    false    463                       0    0    BodyPartEntry_Id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."BodyPartEntry_Id_seq"', 1, false);
            public       postgres    false    357                       0    0    BodyPartType_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."BodyPartType_Id_seq"', 9, true);
            public       postgres    false    317                       0    0    BodyPartofPreCosting_ID_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."BodyPartofPreCosting_ID_seq"', 1, false);
            public       postgres    false    199                       0    0    BuyerProfile_Id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."BuyerProfile_Id_seq"', 1, false);
            public       postgres    false    469                       0    0    BuyerWiesSeason_Id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."BuyerWiesSeason_Id_seq"', 1, false);
            public       postgres    false    381                       0    0    CapacityAllocation_Id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."CapacityAllocation_Id_seq"', 2, true);
            public       postgres    false    371                       0    0 !   CapacityCalculationMonthly_Id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."CapacityCalculationMonthly_Id_seq"', 2, true);
            public       postgres    false    423                       0    0     CapacityCalculationYearly_Id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."CapacityCalculationYearly_Id_seq"', 1, true);
            public       postgres    false    425                       0    0    CapacityCalculation_Id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."CapacityCalculation_Id_seq"', 1, true);
            public       postgres    false    421                       0    0    ColorRange_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."ColorRange_Id_seq"', 1, false);
            public       postgres    false    323                       0    0    ColorType_Id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."ColorType_Id_seq"', 1, true);
            public       postgres    false    435                        0    0    ColourEntry_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."ColourEntry_Id_seq"', 2, true);
            public       postgres    false    373            !           0    0    CommercialCost_Id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."CommercialCost_Id_seq"', 7, true);
            public       postgres    false    439            "           0    0    CommercialInvoice_Id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."CommercialInvoice_Id_seq"', 1, false);
            public       postgres    false    319            #           0    0    ConsumptionEntryForm_Id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."ConsumptionEntryForm_Id_seq"', 11, true);
            public       postgres    false    433            $           0    0    ConversionCostForPreCost_Id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."ConversionCostForPreCost_Id_seq"', 12, true);
            public       postgres    false    437            %           0    0    ConversionCostProcess_ID_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."ConversionCostProcess_ID_seq"', 1, false);
            public       postgres    false    201            &           0    0 #   CostComponenetsMasterDetails_Id_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public."CostComponenetsMasterDetails_Id_seq"', 1, false);
            public       postgres    false    449            '           0    0    CountryLocationMapping_Id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."CountryLocationMapping_Id_seq"', 3, true);
            public       postgres    false    297            (           0    0    CurrencyConversionRate_Id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."CurrencyConversionRate_Id_seq"', 2, true);
            public       postgres    false    415            )           0    0    DepartmentProfile_Id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."DepartmentProfile_Id_seq"', 6, true);
            public       postgres    false    345            *           0    0    Department_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Department_Id_seq"', 1, false);
            public       postgres    false    455            +           0    0    Designation_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."Designation_Id_seq"', 1, false);
            public       postgres    false    453            ,           0    0    DiscountMethod_Id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."DiscountMethod_Id_seq"', 7, true);
            public       postgres    false    315            -           0    0    DivisionProfile_Id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."DivisionProfile_Id_seq"', 2, true);
            public       postgres    false    343            .           0    0    Division_Id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Division_Id_seq"', 1, false);
            public       postgres    false    451            /           0    0    DyeingAndFinishingCharge_Id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."DyeingAndFinishingCharge_Id_seq"', 3, true);
            public       postgres    false    403            0           0    0    ERPModule_Id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."ERPModule_Id_seq"', 8, true);
            public       postgres    false    473            1           0    0    EmailAddressSetup_Id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."EmailAddressSetup_Id_seq"', 3, true);
            public       postgres    false    409            2           0    0    EmployeeCategory_Id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."EmployeeCategory_Id_seq"', 1, false);
            public       postgres    false    457            3           0    0    EmployeeInfo_Id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."EmployeeInfo_Id_seq"', 1, false);
            public       postgres    false    427            4           0    0    FabricCost_Id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."FabricCost_Id_seq"', 2, true);
            public       postgres    false    445            5           0    0    FabricDesPreCost_ID_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."FabricDesPreCost_ID_seq"', 1, false);
            public       postgres    false    203            6           0    0    FabricNature_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."FabricNature_Id_seq"', 2, true);
            public       postgres    false    321            7           0    0    FastReactIntgration_Id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."FastReactIntgration_Id_seq"', 4, true);
            public       postgres    false    413            8           0    0    FinancialParameterSetup_Id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."FinancialParameterSetup_Id_seq"', 5, true);
            public       postgres    false    369            9           0    0    Floor_Id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Floor_Id_seq"', 1, false);
            public       postgres    false    459            :           0    0    FunctionalSuperior_Id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."FunctionalSuperior_Id_seq"', 1, false);
            public       postgres    false    461            ;           0    0    GarmentsItemEntry_Id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."GarmentsItemEntry_Id_seq"', 4, true);
            public       postgres    false    365            <           0    0    GarmentsSampleEntry_Id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."GarmentsSampleEntry_Id_seq"', 4, true);
            public       postgres    false    353            =           0    0    GroupProfile_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."GroupProfile_Id_seq"', 3, true);
            public       postgres    false    311            >           0    0 *   Input_Pannel_PODetails_Input_Pannel_ID_seq    SEQUENCE SET     \   SELECT pg_catalog.setval('public."Input_Pannel_PODetails_Input_Pannel_ID_seq"', 196, true);
            public       postgres    false    205            ?           0    0    ItemCategory_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."ItemCategory_Id_seq"', 6, true);
            public       postgres    false    301            @           0    0    ItemGroup_Id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."ItemGroup_Id_seq"', 1, true);
            public       postgres    false    443            A           0    0    JournalSetup_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."JournalSetup_Id_seq"', 2, true);
            public       postgres    false    399            B           0    0    JournalType_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."JournalType_Id_seq"', 30, true);
            public       postgres    false    339            C           0    0    KnittingCharge_Id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."KnittingCharge_Id_seq"', 5, true);
            public       postgres    false    401            D           0    0    LabTestRateChart_Id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."LabTestRateChart_Id_seq"', 2, true);
            public       postgres    false    397            E           0    0    LineNo_Id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."LineNo_Id_seq"', 1, false);
            public       postgres    false    429            F           0    0    MachineEntry_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."MachineEntry_Id_seq"', 5, true);
            public       postgres    false    387            G           0    0    MailRecipientGroup_Id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."MailRecipientGroup_Id_seq"', 2, true);
            public       postgres    false    411            H           0    0    MarketingTeamInfo_Id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."MarketingTeamInfo_Id_seq"', 1, false);
            public       postgres    false    405            I           0    0    MemberInfo_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."MemberInfo_Id_seq"', 1, false);
            public       postgres    false    407            J           0    0    MinLeadTimeSlab_Id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."MinLeadTimeSlab_Id_seq"', 3, true);
            public       postgres    false    367            K           0    0    Months_Id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Months_Id_seq"', 24, true);
            public       postgres    false    333            L           0    0 )   OrderImageUploadTbl_OrderImgUploadID"_seq    SEQUENCE SET     [   SELECT pg_catalog.setval('public."OrderImageUploadTbl_OrderImgUploadID""_seq"', 97, true);
            public       postgres    false    207            M           0    0    OrderItem_ItemID_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."OrderItem_ItemID_seq"', 3, true);
            public       postgres    false    209            N           0    0    OtherPartyProfile_Id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."OtherPartyProfile_Id_seq"', 3, true);
            public       postgres    false    309            O           0    0    PageInfo_Id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."PageInfo_Id_seq"', 1, false);
            public       postgres    false    359            P           0    0    PartyType_Id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."PartyType_Id_seq"', 8, true);
            public       postgres    false    303            Q           0    0    ProductCategory_Id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."ProductCategory_Id_seq"', 14, true);
            public       postgres    false    327            R           0    0    ProductSubDepartment_Id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."ProductSubDepartment_Id_seq"', 3, true);
            public       postgres    false    375            S           0    0    ProductType_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."ProductType_Id_seq"', 14, true);
            public       postgres    false    329            T           0    0    ProductionFloor_Id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."ProductionFloor_Id_seq"', 3, true);
            public       postgres    false    389            U           0    0    ProductionProcess_Id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."ProductionProcess_Id_seq"', 36, true);
            public       postgres    false    337            V           0    0    ProfitCenter_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."ProfitCenter_Id_seq"', 3, true);
            public       postgres    false    349            W           0    0    QuotationInquery_Id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."QuotationInquery_Id_seq"', 1, true);
            public       postgres    false    471            X           0    0    Resources_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Resources_Id_seq"', 226, true);
            public       postgres    false    335            Y           0    0    SampleProductionTeam_Id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."SampleProductionTeam_Id_seq"', 5, true);
            public       postgres    false    391            Z           0    0    SampleType_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."SampleType_Id_seq"', 27, true);
            public       postgres    false    325            [           0    0    SectionProfile_Id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."SectionProfile_Id_seq"', 5, true);
            public       postgres    false    351            \           0    0    SewingLine_Id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."SewingLine_Id_seq"', 3, true);
            public       postgres    false    383            ]           0    0    SewingOperation_Id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."SewingOperation_Id_seq"', 4, true);
            public       postgres    false    385            ^           0    0 (   Size_Pannel_PODetails_Size_Pannel_ID_seq    SEQUENCE SET     Y   SELECT pg_catalog.setval('public."Size_Pannel_PODetails_Size_Pannel_ID_seq"', 68, true);
            public       postgres    false    211            _           0    0    StoreLocation_Id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."StoreLocation_Id_seq"', 25, true);
            public       postgres    false    417            `           0    0    Suplier_ID_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Suplier_ID_seq"', 1, false);
            public       postgres    false    213            a           0    0    Suplyitem_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Suplyitem_ID_seq"', 1, false);
            public       postgres    false    215            b           0    0    SupplierProfile_Id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."SupplierProfile_Id_seq"', 3, true);
            public       postgres    false    379            c           0    0    TNATaskEntry_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."TNATaskEntry_Id_seq"', 2, true);
            public       postgres    false    307            d           0    0    TNATaskNameEntry_Id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."TNATaskNameEntry_Id_seq"', 5, true);
            public       postgres    false    305            e           0    0    TNATaskPercent_Id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."TNATaskPercent_Id_seq"', 2, true);
            public       postgres    false    377            f           0    0    TermsNCondition_Id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."TermsNCondition_Id_seq"', 1, false);
            public       postgres    false    363            g           0    0    TrimCost_Id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."TrimCost_Id_seq"', 7, true);
            public       postgres    false    441            h           0    0    TrimsGroup_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."TrimsGroup_Id_seq"', 1, false);
            public       postgres    false    341            i           0    0    Type_Id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Type_Id_seq"', 276, true);
            public       postgres    false    355            j           0    0 
   UOM_Id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."UOM_Id_seq"', 56, true);
            public       postgres    false    313            k           0    0    Upload_Id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Upload_Id_seq"', 1, true);
            public       postgres    false    347            l           0    0    VariableListTable_Id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."VariableListTable_Id_seq"', 144, true);
            public       postgres    false    477            m           0    0    VariableSettingsTable_Id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."VariableSettingsTable_Id_seq"', 226, true);
            public       postgres    false    475            n           0    0    WashCost_Id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."WashCost_Id_seq"', 4, true);
            public       postgres    false    447            o           0    0    YarnBrand_yarnBrandId_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."YarnBrand_yarnBrandId_seq"', 8, true);
            public       postgres    false    295            p           0    0    YarnComp1_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."YarnComp1_ID_seq"', 1, false);
            public       postgres    false    217            q           0    0    YarnCostPreCosting_ID_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."YarnCostPreCosting_ID_seq"', 10, true);
            public       postgres    false    219            r           0    0    YarnCost_Id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."YarnCost_Id_seq"', 6, true);
            public       postgres    false    431            s           0    0 "   YarnCountDeterminationChild_Id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public."YarnCountDeterminationChild_Id_seq"', 1, false);
            public       postgres    false    395            t           0    0    YarnCountDetermination_Id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."YarnCountDetermination_Id_seq"', 1, false);
            public       postgres    false    393            u           0    0    YarnCount_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."YarnCount_ID_seq"', 3, true);
            public       postgres    false    221            v           0    0    YarnRate_Id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."YarnRate_Id_seq"', 1, false);
            public       postgres    false    419            w           0    0    YarnType_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."YarnType_ID_seq"', 1, false);
            public       postgres    false    223            x           0    0    Years_Id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Years_Id_seq"', 42, true);
            public       postgres    false    331            y           0    0     avg_grey_cons_fabric_cost_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.avg_grey_cons_fabric_cost_id_seq', 26, true);
            public       postgres    false    280            z           0    0    commercial_cost_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.commercial_cost_id_seq', 11, true);
            public       postgres    false    225            {           0    0    commission_cost_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.commission_cost_id_seq', 44, true);
            public       postgres    false    227            |           0    0 '   cons_dzn_gmts_embellishment_cost_id_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public.cons_dzn_gmts_embellishment_cost_id_seq', 9, true);
            public       postgres    false    284            }           0    0    cons_dzn_gmts_wash_cost_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.cons_dzn_gmts_wash_cost_id_seq', 30, true);
            public       postgres    false    286            ~           0    0    cons_unit_gmts_trim_cost_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.cons_unit_gmts_trim_cost_id_seq', 20, true);
            public       postgres    false    282                       0    0    embellishment_cost_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.embellishment_cost_id_seq', 11, true);
            public       postgres    false    229            �           0    0    item_details_order_entry_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.item_details_order_entry_id_seq', 48, true);
            public       postgres    false    278            �           0    0    other_cost_pre_costing_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.other_cost_pre_costing_id_seq', 10, true);
            public       postgres    false    276            �           0    0 #   parsial_fabric_booking_items_id_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public.parsial_fabric_booking_items_id_seq', 73, true);
            public       postgres    false    290            �           0    0 $   parsial_fabric_booking_master_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.parsial_fabric_booking_master_id_seq', 36, true);
            public       postgres    false    288            �           0    0    partytype_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.partytype_id_seq', 1, false);
            public       postgres    false    361            �           0    0    tblAgentInfo_AgentID_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."tblAgentInfo_AgentID_seq"', 1, false);
            public       postgres    false    231            �           0    0    tblBuyerInfo_BuyerID_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."tblBuyerInfo_BuyerID_seq"', 14, true);
            public       postgres    false    233            �           0    0    tblCompanyInfo_CompID_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."tblCompanyInfo_CompID_seq"', 73, true);
            public       postgres    false    235            �           0    0    tblCurrencyInfo_CurrencyID_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."tblCurrencyInfo_CurrencyID_seq"', 2, true);
            public       postgres    false    237            �           0    0    tblDealingMrcndiserInfo_ID_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."tblDealingMrcndiserInfo_ID_seq"', 18, true);
            public       postgres    false    239            �           0    0    tblDepartInfo_DepID_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."tblDepartInfo_DepID_seq"', 1, false);
            public       postgres    false    241            �           0    0    tblInitialOrder_OrderAutoID_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."tblInitialOrder_OrderAutoID_seq"', 337, true);
            public       postgres    false    243            �           0    0    tblLocationInfo_LocationId_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."tblLocationInfo_LocationId_seq"', 27, true);
            public       postgres    false    245            �           0    0    tblOrderUomInfo_UOMID_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."tblOrderUomInfo_UOMID_seq"', 1, false);
            public       postgres    false    247            �           0    0    tblPODetailsInfro_PoDetID_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."tblPODetailsInfro_PoDetID_seq"', 149, true);
            public       postgres    false    249            �           0    0    tblPackingInfo_PackingID_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."tblPackingInfo_PackingID_seq"', 1, false);
            public       postgres    false    251            �           0    0    tblPoOrderStatusInfo_ID_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."tblPoOrderStatusInfo_ID_seq"', 1, false);
            public       postgres    false    253            �           0    0    tblPoStatus_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."tblPoStatus_ID_seq"', 2, true);
            public       postgres    false    255            �           0    0 $   tblProductCategoryInfo_ProdCatId_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public."tblProductCategoryInfo_ProdCatId_seq"', 1, false);
            public       postgres    false    257            �           0    0    tblProductionDeptInfo_ID_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."tblProductionDeptInfo_ID_seq"', 1, false);
            public       postgres    false    259            �           0    0    tblRegionInfo_RegionID_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."tblRegionInfo_RegionID_seq"', 20, true);
            public       postgres    false    261            �           0    0    tblSeasonInfo_SeasonID_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."tblSeasonInfo_SeasonID_seq"', 1, true);
            public       postgres    false    263            �           0    0    tblShipmentModeInfo_ID_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."tblShipmentModeInfo_ID_seq"', 1, false);
            public       postgres    false    265            �           0    0    tblSubDeptInfo_SubDeptID_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."tblSubDeptInfo_SubDeptID_seq"', 1, false);
            public       postgres    false    267            �           0    0    tblUserTypeInfo_UserTypeID_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."tblUserTypeInfo_UserTypeID_seq"', 1, false);
            public       postgres    false    271            �           0    0    trim_cost_pre_costing_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.trim_cost_pre_costing_id_seq', 16, true);
            public       postgres    false    273            �           0    0    wash_cost_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.wash_cost_id_seq', 9, true);
            public       postgres    false    275            �           2606    54773 0   AccountingYearSubInfo AccountingYearSubInfo_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."AccountingYearSubInfo"
    ADD CONSTRAINT "AccountingYearSubInfo_pkey" PRIMARY KEY ("Id");
 ^   ALTER TABLE ONLY public."AccountingYearSubInfo" DROP CONSTRAINT "AccountingYearSubInfo_pkey";
       public         postgres    false    468            �           2606    54765 "   AccountingYear AccountingYear_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."AccountingYear"
    ADD CONSTRAINT "AccountingYear_pkey" PRIMARY KEY ("Id");
 P   ALTER TABLE ONLY public."AccountingYear" DROP CONSTRAINT "AccountingYear_pkey";
       public         postgres    false    466            �           2606    54757    BloodGroup BloodGroup_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."BloodGroup"
    ADD CONSTRAINT "BloodGroup_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."BloodGroup" DROP CONSTRAINT "BloodGroup_pkey";
       public         postgres    false    464            I           2606    54139     BodyPartEntry BodyPartEntry_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."BodyPartEntry"
    ADD CONSTRAINT "BodyPartEntry_pkey" PRIMARY KEY ("Id");
 N   ALTER TABLE ONLY public."BodyPartEntry" DROP CONSTRAINT "BodyPartEntry_pkey";
       public         postgres    false    358            !           2606    45787    BodyPartType BodyPartType_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."BodyPartType"
    ADD CONSTRAINT "BodyPartType_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."BodyPartType" DROP CONSTRAINT "BodyPartType_pkey";
       public         postgres    false    318            |           2606    17437 .   BodyPartofPreCosting BodyPartofPreCosting_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."BodyPartofPreCosting"
    ADD CONSTRAINT "BodyPartofPreCosting_pkey" PRIMARY KEY ("ID");
 \   ALTER TABLE ONLY public."BodyPartofPreCosting" DROP CONSTRAINT "BodyPartofPreCosting_pkey";
       public         postgres    false    198            �           2606    54787    BuyerProfile BuyerProfile_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."BuyerProfile"
    ADD CONSTRAINT "BuyerProfile_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."BuyerProfile" DROP CONSTRAINT "BuyerProfile_pkey";
       public         postgres    false    470            a           2606    54263 $   BuyerWiesSeason BuyerWiesSeason_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."BuyerWiesSeason"
    ADD CONSTRAINT "BuyerWiesSeason_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."BuyerWiesSeason" DROP CONSTRAINT "BuyerWiesSeason_pkey";
       public         postgres    false    382            W           2606    54212 *   CapacityAllocation CapacityAllocation_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."CapacityAllocation"
    ADD CONSTRAINT "CapacityAllocation_pkey" PRIMARY KEY ("Id");
 X   ALTER TABLE ONLY public."CapacityAllocation" DROP CONSTRAINT "CapacityAllocation_pkey";
       public         postgres    false    372            �           2606    54542 :   CapacityCalculationMonthly CapacityCalculationMonthly_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public."CapacityCalculationMonthly"
    ADD CONSTRAINT "CapacityCalculationMonthly_pkey" PRIMARY KEY ("Id");
 h   ALTER TABLE ONLY public."CapacityCalculationMonthly" DROP CONSTRAINT "CapacityCalculationMonthly_pkey";
       public         postgres    false    424            �           2606    54553 8   CapacityCalculationYearly CapacityCalculationYearly_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public."CapacityCalculationYearly"
    ADD CONSTRAINT "CapacityCalculationYearly_pkey" PRIMARY KEY ("Id");
 f   ALTER TABLE ONLY public."CapacityCalculationYearly" DROP CONSTRAINT "CapacityCalculationYearly_pkey";
       public         postgres    false    426            �           2606    54531 ,   CapacityCalculation CapacityCalculation_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."CapacityCalculation"
    ADD CONSTRAINT "CapacityCalculation_pkey" PRIMARY KEY ("Id");
 Z   ALTER TABLE ONLY public."CapacityCalculation" DROP CONSTRAINT "CapacityCalculation_pkey";
       public         postgres    false    422            '           2606    45811    ColorRange ColorRange_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."ColorRange"
    ADD CONSTRAINT "ColorRange_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."ColorRange" DROP CONSTRAINT "ColorRange_pkey";
       public         postgres    false    324            �           2606    54614    ColorType ColorType_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."ColorType"
    ADD CONSTRAINT "ColorType_pkey" PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public."ColorType" DROP CONSTRAINT "ColorType_pkey";
       public         postgres    false    436            Y           2606    54220    ColourEntry ColourEntry_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."ColourEntry"
    ADD CONSTRAINT "ColourEntry_pkey" PRIMARY KEY ("Id");
 J   ALTER TABLE ONLY public."ColourEntry" DROP CONSTRAINT "ColourEntry_pkey";
       public         postgres    false    374            �           2606    54632 "   CommercialCost CommercialCost_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."CommercialCost"
    ADD CONSTRAINT "CommercialCost_pkey" PRIMARY KEY ("Id");
 P   ALTER TABLE ONLY public."CommercialCost" DROP CONSTRAINT "CommercialCost_pkey";
       public         postgres    false    440            #           2606    45795 (   CommercialInvoice CommercialInvoice_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."CommercialInvoice"
    ADD CONSTRAINT "CommercialInvoice_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."CommercialInvoice" DROP CONSTRAINT "CommercialInvoice_pkey";
       public         postgres    false    320            �           2606    54606 .   ConsumptionEntryForm ConsumptionEntryForm_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."ConsumptionEntryForm"
    ADD CONSTRAINT "ConsumptionEntryForm_pkey" PRIMARY KEY ("Id");
 \   ALTER TABLE ONLY public."ConsumptionEntryForm" DROP CONSTRAINT "ConsumptionEntryForm_pkey";
       public         postgres    false    434            �           2606    54624 6   ConversionCostForPreCost ConversionCostForPreCost_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public."ConversionCostForPreCost"
    ADD CONSTRAINT "ConversionCostForPreCost_pkey" PRIMARY KEY ("Id");
 d   ALTER TABLE ONLY public."ConversionCostForPreCost" DROP CONSTRAINT "ConversionCostForPreCost_pkey";
       public         postgres    false    438            ~           2606    17441 0   ConversionCostProcess ConversionCostProcess_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."ConversionCostProcess"
    ADD CONSTRAINT "ConversionCostProcess_pkey" PRIMARY KEY ("ID");
 ^   ALTER TABLE ONLY public."ConversionCostProcess" DROP CONSTRAINT "ConversionCostProcess_pkey";
       public         postgres    false    200            �           2606    54693 >   CostComponenetsMasterDetails CostComponenetsMasterDetails_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."CostComponenetsMasterDetails"
    ADD CONSTRAINT "CostComponenetsMasterDetails_pkey" PRIMARY KEY ("Id");
 l   ALTER TABLE ONLY public."CostComponenetsMasterDetails" DROP CONSTRAINT "CostComponenetsMasterDetails_pkey";
       public         postgres    false    450                       2606    37647 .   CostComponentsMaster CostComponentsMaster_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."CostComponentsMaster"
    ADD CONSTRAINT "CostComponentsMaster_pkey" PRIMARY KEY ("Id");
 \   ALTER TABLE ONLY public."CostComponentsMaster" DROP CONSTRAINT "CostComponentsMaster_pkey";
       public         postgres    false    294                       2606    45676 2   CountryLocationMapping CountryLocationMapping_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."CountryLocationMapping"
    ADD CONSTRAINT "CountryLocationMapping_pkey" PRIMARY KEY ("Id");
 `   ALTER TABLE ONLY public."CountryLocationMapping" DROP CONSTRAINT "CountryLocationMapping_pkey";
       public         postgres    false    298            �           2606    54467 2   CurrencyConversionRate CurrencyConversionRate_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."CurrencyConversionRate"
    ADD CONSTRAINT "CurrencyConversionRate_pkey" PRIMARY KEY ("Id");
 `   ALTER TABLE ONLY public."CurrencyConversionRate" DROP CONSTRAINT "CurrencyConversionRate_pkey";
       public         postgres    false    416            =           2606    45905 (   DepartmentProfile DepartmentProfile_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."DepartmentProfile"
    ADD CONSTRAINT "DepartmentProfile_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."DepartmentProfile" DROP CONSTRAINT "DepartmentProfile_pkey";
       public         postgres    false    346            �           2606    54719    Department Department_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Department"
    ADD CONSTRAINT "Department_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."Department" DROP CONSTRAINT "Department_pkey";
       public         postgres    false    456            �           2606    54711    Designation Designation_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Designation"
    ADD CONSTRAINT "Designation_pkey" PRIMARY KEY ("Id");
 J   ALTER TABLE ONLY public."Designation" DROP CONSTRAINT "Designation_pkey";
       public         postgres    false    454                       2606    45779 "   DiscountMethod DiscountMethod_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."DiscountMethod"
    ADD CONSTRAINT "DiscountMethod_pkey" PRIMARY KEY ("Id");
 P   ALTER TABLE ONLY public."DiscountMethod" DROP CONSTRAINT "DiscountMethod_pkey";
       public         postgres    false    316            ;           2606    45894 $   DivisionProfile DivisionProfile_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."DivisionProfile"
    ADD CONSTRAINT "DivisionProfile_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."DivisionProfile" DROP CONSTRAINT "DivisionProfile_pkey";
       public         postgres    false    344            �           2606    54701    Division Division_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Division"
    ADD CONSTRAINT "Division_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."Division" DROP CONSTRAINT "Division_pkey";
       public         postgres    false    452            w           2606    54388 6   DyeingAndFinishingCharge DyeingAndFinishingCharge_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public."DyeingAndFinishingCharge"
    ADD CONSTRAINT "DyeingAndFinishingCharge_pkey" PRIMARY KEY ("Id");
 d   ALTER TABLE ONLY public."DyeingAndFinishingCharge" DROP CONSTRAINT "DyeingAndFinishingCharge_pkey";
       public         postgres    false    404            �           2606    54825    ERPModule ERPModule_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."ERPModule"
    ADD CONSTRAINT "ERPModule_pkey" PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public."ERPModule" DROP CONSTRAINT "ERPModule_pkey";
       public         postgres    false    474            }           2606    54443 (   EmailAddressSetup EmailAddressSetup_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."EmailAddressSetup"
    ADD CONSTRAINT "EmailAddressSetup_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."EmailAddressSetup" DROP CONSTRAINT "EmailAddressSetup_pkey";
       public         postgres    false    410            �           2606    54729 &   EmployeeCategory EmployeeCategory_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."EmployeeCategory"
    ADD CONSTRAINT "EmployeeCategory_pkey" PRIMARY KEY ("Id");
 T   ALTER TABLE ONLY public."EmployeeCategory" DROP CONSTRAINT "EmployeeCategory_pkey";
       public         postgres    false    458            �           2606    54564    EmployeeInfo EmployeeInfo_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."EmployeeInfo"
    ADD CONSTRAINT "EmployeeInfo_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."EmployeeInfo" DROP CONSTRAINT "EmployeeInfo_pkey";
       public         postgres    false    428            �           2606    54667    FabricCost FabricCost_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."FabricCost"
    ADD CONSTRAINT "FabricCost_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."FabricCost" DROP CONSTRAINT "FabricCost_pkey";
       public         postgres    false    446            �           2606    17445 &   FabricDesPreCost FabricDesPreCost_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."FabricDesPreCost"
    ADD CONSTRAINT "FabricDesPreCost_pkey" PRIMARY KEY ("ID");
 T   ALTER TABLE ONLY public."FabricDesPreCost" DROP CONSTRAINT "FabricDesPreCost_pkey";
       public         postgres    false    202            %           2606    45803    FabricNature FabricNature_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."FabricNature"
    ADD CONSTRAINT "FabricNature_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."FabricNature" DROP CONSTRAINT "FabricNature_pkey";
       public         postgres    false    322            �           2606    54459 ,   FastReactIntgration FastReactIntgration_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."FastReactIntgration"
    ADD CONSTRAINT "FastReactIntgration_pkey" PRIMARY KEY ("Id");
 Z   ALTER TABLE ONLY public."FastReactIntgration" DROP CONSTRAINT "FastReactIntgration_pkey";
       public         postgres    false    414            U           2606    54193 4   FinancialParameterSetup FinancialParameterSetup_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."FinancialParameterSetup"
    ADD CONSTRAINT "FinancialParameterSetup_pkey" PRIMARY KEY ("Id");
 b   ALTER TABLE ONLY public."FinancialParameterSetup" DROP CONSTRAINT "FinancialParameterSetup_pkey";
       public         postgres    false    370            �           2606    54741    Floor Floor_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Floor"
    ADD CONSTRAINT "Floor_pkey" PRIMARY KEY ("Id");
 >   ALTER TABLE ONLY public."Floor" DROP CONSTRAINT "Floor_pkey";
       public         postgres    false    460            �           2606    54749 *   FunctionalSuperior FunctionalSuperior_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."FunctionalSuperior"
    ADD CONSTRAINT "FunctionalSuperior_pkey" PRIMARY KEY ("Id");
 X   ALTER TABLE ONLY public."FunctionalSuperior" DROP CONSTRAINT "FunctionalSuperior_pkey";
       public         postgres    false    462            Q           2606    54177 (   GarmentsItemEntry GarmentsItemEntry_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."GarmentsItemEntry"
    ADD CONSTRAINT "GarmentsItemEntry_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."GarmentsItemEntry" DROP CONSTRAINT "GarmentsItemEntry_pkey";
       public         postgres    false    366            E           2606    54120 ,   GarmentsSampleEntry GarmentsSampleEntry_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."GarmentsSampleEntry"
    ADD CONSTRAINT "GarmentsSampleEntry_pkey" PRIMARY KEY ("Id");
 Z   ALTER TABLE ONLY public."GarmentsSampleEntry" DROP CONSTRAINT "GarmentsSampleEntry_pkey";
       public         postgres    false    354                       2606    45763    GroupProfile GroupProfile_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."GroupProfile"
    ADD CONSTRAINT "GroupProfile_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."GroupProfile" DROP CONSTRAINT "GroupProfile_pkey";
       public         postgres    false    312            �           2606    17447 2   Input_Pannel_PODetails Input_Pannel_PODetails_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Input_Pannel_PODetails"
    ADD CONSTRAINT "Input_Pannel_PODetails_pkey" PRIMARY KEY ("Input_Pannel_ID");
 `   ALTER TABLE ONLY public."Input_Pannel_PODetails" DROP CONSTRAINT "Input_Pannel_PODetails_pkey";
       public         postgres    false    204                       2606    45700    ItemCategory ItemCategory_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."ItemCategory"
    ADD CONSTRAINT "ItemCategory_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."ItemCategory" DROP CONSTRAINT "ItemCategory_pkey";
       public         postgres    false    302            �           2606    54656    ItemGroup ItemGroup_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."ItemGroup"
    ADD CONSTRAINT "ItemGroup_pkey" PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public."ItemGroup" DROP CONSTRAINT "ItemGroup_pkey";
       public         postgres    false    444            s           2606    54366    JournalSetup JournalSetup_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."JournalSetup"
    ADD CONSTRAINT "JournalSetup_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."JournalSetup" DROP CONSTRAINT "JournalSetup_pkey";
       public         postgres    false    400            7           2606    45875    JournalType JournalType_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."JournalType"
    ADD CONSTRAINT "JournalType_pkey" PRIMARY KEY ("Id");
 J   ALTER TABLE ONLY public."JournalType" DROP CONSTRAINT "JournalType_pkey";
       public         postgres    false    340            u           2606    54377 "   KnittingCharge KnittingCharge_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."KnittingCharge"
    ADD CONSTRAINT "KnittingCharge_pkey" PRIMARY KEY ("Id");
 P   ALTER TABLE ONLY public."KnittingCharge" DROP CONSTRAINT "KnittingCharge_pkey";
       public         postgres    false    402            q           2606    54358 &   LabTestRateChart LabTestRateChart_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."LabTestRateChart"
    ADD CONSTRAINT "LabTestRateChart_pkey" PRIMARY KEY ("Id");
 T   ALTER TABLE ONLY public."LabTestRateChart" DROP CONSTRAINT "LabTestRateChart_pkey";
       public         postgres    false    398            �           2606    54572    LineNo LineNo_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."LineNo"
    ADD CONSTRAINT "LineNo_pkey" PRIMARY KEY ("Id");
 @   ALTER TABLE ONLY public."LineNo" DROP CONSTRAINT "LineNo_pkey";
       public         postgres    false    430            g           2606    54294    MachineEntry MachineEntry_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."MachineEntry"
    ADD CONSTRAINT "MachineEntry_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."MachineEntry" DROP CONSTRAINT "MachineEntry_pkey";
       public         postgres    false    388                       2606    54451 *   MailRecipientGroup MailRecipientGroup_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."MailRecipientGroup"
    ADD CONSTRAINT "MailRecipientGroup_pkey" PRIMARY KEY ("Id");
 X   ALTER TABLE ONLY public."MailRecipientGroup" DROP CONSTRAINT "MailRecipientGroup_pkey";
       public         postgres    false    412            y           2606    54408 (   MarketingTeamInfo MarketingTeamInfo_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."MarketingTeamInfo"
    ADD CONSTRAINT "MarketingTeamInfo_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."MarketingTeamInfo" DROP CONSTRAINT "MarketingTeamInfo_pkey";
       public         postgres    false    406            {           2606    54416    MemberInfo MemberInfo_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."MemberInfo"
    ADD CONSTRAINT "MemberInfo_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."MemberInfo" DROP CONSTRAINT "MemberInfo_pkey";
       public         postgres    false    408            S           2606    54185 $   MinLeadTimeSlab MinLeadTimeSlab_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."MinLeadTimeSlab"
    ADD CONSTRAINT "MinLeadTimeSlab_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."MinLeadTimeSlab" DROP CONSTRAINT "MinLeadTimeSlab_pkey";
       public         postgres    false    368            1           2606    45851    Months Months_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Months"
    ADD CONSTRAINT "Months_pkey" PRIMARY KEY ("Id");
 @   ALTER TABLE ONLY public."Months" DROP CONSTRAINT "Months_pkey";
       public         postgres    false    334            �           2606    17449 ,   OrderImageUploadTbl OrderImageUploadTbl_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."OrderImageUploadTbl"
    ADD CONSTRAINT "OrderImageUploadTbl_pkey" PRIMARY KEY ("OrderImgUploadID""");
 Z   ALTER TABLE ONLY public."OrderImageUploadTbl" DROP CONSTRAINT "OrderImageUploadTbl_pkey";
       public         postgres    false    206            �           2606    17451    OrderItem OrderItem_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."OrderItem"
    ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("ItemID");
 F   ALTER TABLE ONLY public."OrderItem" DROP CONSTRAINT "OrderItem_pkey";
       public         postgres    false    208                       2606    45751 (   OtherPartyProfile OtherPartyProfile_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."OtherPartyProfile"
    ADD CONSTRAINT "OtherPartyProfile_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."OtherPartyProfile" DROP CONSTRAINT "OtherPartyProfile_pkey";
       public         postgres    false    310            K           2606    54147    PageInfo PageInfo_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."PageInfo"
    ADD CONSTRAINT "PageInfo_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."PageInfo" DROP CONSTRAINT "PageInfo_pkey";
       public         postgres    false    360                       2606    45724    PartyType PartyType_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."PartyType"
    ADD CONSTRAINT "PartyType_pkey" PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public."PartyType" DROP CONSTRAINT "PartyType_pkey";
       public         postgres    false    304                       2606    37623    PreCosting PreCosting_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."PreCosting"
    ADD CONSTRAINT "PreCosting_pkey" PRIMARY KEY ("PrecostingID");
 H   ALTER TABLE ONLY public."PreCosting" DROP CONSTRAINT "PreCosting_pkey";
       public         postgres    false    293            +           2606    45827 $   ProductCategory ProductCategory_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."ProductCategory"
    ADD CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."ProductCategory" DROP CONSTRAINT "ProductCategory_pkey";
       public         postgres    false    328            [           2606    54228 .   ProductSubDepartment ProductSubDepartment_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."ProductSubDepartment"
    ADD CONSTRAINT "ProductSubDepartment_pkey" PRIMARY KEY ("Id");
 \   ALTER TABLE ONLY public."ProductSubDepartment" DROP CONSTRAINT "ProductSubDepartment_pkey";
       public         postgres    false    376            -           2606    45835    ProductType ProductType_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."ProductType"
    ADD CONSTRAINT "ProductType_pkey" PRIMARY KEY ("Id");
 J   ALTER TABLE ONLY public."ProductType" DROP CONSTRAINT "ProductType_pkey";
       public         postgres    false    330            i           2606    54302 $   ProductionFloor ProductionFloor_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."ProductionFloor"
    ADD CONSTRAINT "ProductionFloor_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."ProductionFloor" DROP CONSTRAINT "ProductionFloor_pkey";
       public         postgres    false    390            5           2606    45867 (   ProductionProcess ProductionProcess_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."ProductionProcess"
    ADD CONSTRAINT "ProductionProcess_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."ProductionProcess" DROP CONSTRAINT "ProductionProcess_pkey";
       public         postgres    false    338            A           2606    45932    ProfitCenter ProfitCenter_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."ProfitCenter"
    ADD CONSTRAINT "ProfitCenter_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."ProfitCenter" DROP CONSTRAINT "ProfitCenter_pkey";
       public         postgres    false    350            �           2606    54817 &   QuotationInquery QuotationInquery_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."QuotationInquery"
    ADD CONSTRAINT "QuotationInquery_pkey" PRIMARY KEY ("Id");
 T   ALTER TABLE ONLY public."QuotationInquery" DROP CONSTRAINT "QuotationInquery_pkey";
       public         postgres    false    472            3           2606    45859    Resources Resources_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Resources"
    ADD CONSTRAINT "Resources_pkey" PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public."Resources" DROP CONSTRAINT "Resources_pkey";
       public         postgres    false    336            k           2606    54310 .   SampleProductionTeam SampleProductionTeam_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."SampleProductionTeam"
    ADD CONSTRAINT "SampleProductionTeam_pkey" PRIMARY KEY ("Id");
 \   ALTER TABLE ONLY public."SampleProductionTeam" DROP CONSTRAINT "SampleProductionTeam_pkey";
       public         postgres    false    392            )           2606    45819    SampleType SampleType_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."SampleType"
    ADD CONSTRAINT "SampleType_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."SampleType" DROP CONSTRAINT "SampleType_pkey";
       public         postgres    false    326            C           2606    45943 "   SectionProfile SectionProfile_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."SectionProfile"
    ADD CONSTRAINT "SectionProfile_pkey" PRIMARY KEY ("Id");
 P   ALTER TABLE ONLY public."SectionProfile" DROP CONSTRAINT "SectionProfile_pkey";
       public         postgres    false    352            c           2606    54275    SewingLine SewingLine_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."SewingLine"
    ADD CONSTRAINT "SewingLine_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."SewingLine" DROP CONSTRAINT "SewingLine_pkey";
       public         postgres    false    384            e           2606    54283 $   SewingOperation SewingOperation_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."SewingOperation"
    ADD CONSTRAINT "SewingOperation_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."SewingOperation" DROP CONSTRAINT "SewingOperation_pkey";
       public         postgres    false    386                       2606    45684    SiezeEntry SiezeEntry_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."SiezeEntry"
    ADD CONSTRAINT "SiezeEntry_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."SiezeEntry" DROP CONSTRAINT "SiezeEntry_pkey";
       public         postgres    false    299            �           2606    17455 0   Size_Pannel_PODetails Size_Pannel_PODetails_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Size_Pannel_PODetails"
    ADD CONSTRAINT "Size_Pannel_PODetails_pkey" PRIMARY KEY ("Size_Pannel_ID");
 ^   ALTER TABLE ONLY public."Size_Pannel_PODetails" DROP CONSTRAINT "Size_Pannel_PODetails_pkey";
       public         postgres    false    210            �           2606    54475     StoreLocation StoreLocation_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."StoreLocation"
    ADD CONSTRAINT "StoreLocation_pkey" PRIMARY KEY ("Id");
 N   ALTER TABLE ONLY public."StoreLocation" DROP CONSTRAINT "StoreLocation_pkey";
       public         postgres    false    418            �           2606    17457    Suplier Suplier_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Suplier"
    ADD CONSTRAINT "Suplier_pkey" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Suplier" DROP CONSTRAINT "Suplier_pkey";
       public         postgres    false    212            �           2606    17459    Suplyitem Suplyitem_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Suplyitem"
    ADD CONSTRAINT "Suplyitem_pkey" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."Suplyitem" DROP CONSTRAINT "Suplyitem_pkey";
       public         postgres    false    214            _           2606    54255 $   SupplierProfile SupplierProfile_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."SupplierProfile"
    ADD CONSTRAINT "SupplierProfile_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."SupplierProfile" DROP CONSTRAINT "SupplierProfile_pkey";
       public         postgres    false    380                       2606    45740    TNATaskEntry TNATaskEntry_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."TNATaskEntry"
    ADD CONSTRAINT "TNATaskEntry_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."TNATaskEntry" DROP CONSTRAINT "TNATaskEntry_pkey";
       public         postgres    false    308                       2606    45732 &   TNATaskNameEntry TNATaskNameEntry_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."TNATaskNameEntry"
    ADD CONSTRAINT "TNATaskNameEntry_pkey" PRIMARY KEY ("Id");
 T   ALTER TABLE ONLY public."TNATaskNameEntry" DROP CONSTRAINT "TNATaskNameEntry_pkey";
       public         postgres    false    306            ]           2606    54244 "   TNATaskPercent TNATaskPercent_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."TNATaskPercent"
    ADD CONSTRAINT "TNATaskPercent_pkey" PRIMARY KEY ("Id");
 P   ALTER TABLE ONLY public."TNATaskPercent" DROP CONSTRAINT "TNATaskPercent_pkey";
       public         postgres    false    378            O           2606    54165 $   TermsNCondition TermsNCondition_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."TermsNCondition"
    ADD CONSTRAINT "TermsNCondition_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."TermsNCondition" DROP CONSTRAINT "TermsNCondition_pkey";
       public         postgres    false    364            �           2606    54645    TrimCost TrimCost_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."TrimCost"
    ADD CONSTRAINT "TrimCost_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."TrimCost" DROP CONSTRAINT "TrimCost_pkey";
       public         postgres    false    442            9           2606    45883    TrimsGroup TrimsGroup_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."TrimsGroup"
    ADD CONSTRAINT "TrimsGroup_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."TrimsGroup" DROP CONSTRAINT "TrimsGroup_pkey";
       public         postgres    false    342            G           2606    54128    Type Type_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Type"
    ADD CONSTRAINT "Type_pkey" PRIMARY KEY ("Id");
 <   ALTER TABLE ONLY public."Type" DROP CONSTRAINT "Type_pkey";
       public         postgres    false    356                       2606    45771    UOM UOM_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."UOM"
    ADD CONSTRAINT "UOM_pkey" PRIMARY KEY ("Id");
 :   ALTER TABLE ONLY public."UOM" DROP CONSTRAINT "UOM_pkey";
       public         postgres    false    314            �           2606    17461    tblInitialOrder Unique_JobNo 
   CONSTRAINT     ^   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "Unique_JobNo" UNIQUE ("JobNo");
 J   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "Unique_JobNo";
       public         postgres    false    242            ?           2606    45920    Upload Upload_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Upload"
    ADD CONSTRAINT "Upload_pkey" PRIMARY KEY ("Id");
 @   ALTER TABLE ONLY public."Upload" DROP CONSTRAINT "Upload_pkey";
       public         postgres    false    348            �           2606    54844 (   VariableListTable VariableListTable_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."VariableListTable"
    ADD CONSTRAINT "VariableListTable_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."VariableListTable" DROP CONSTRAINT "VariableListTable_pkey";
       public         postgres    false    478            �           2606    54836 0   VariableSettingsTable VariableSettingsTable_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."VariableSettingsTable"
    ADD CONSTRAINT "VariableSettingsTable_pkey" PRIMARY KEY ("Id");
 ^   ALTER TABLE ONLY public."VariableSettingsTable" DROP CONSTRAINT "VariableSettingsTable_pkey";
       public         postgres    false    476            �           2606    54683    WashCost WashCost_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."WashCost"
    ADD CONSTRAINT "WashCost_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."WashCost" DROP CONSTRAINT "WashCost_pkey";
       public         postgres    false    448            	           2606    45668    YarnBrand YarnBrand_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public."YarnBrand"
    ADD CONSTRAINT "YarnBrand_pkey" PRIMARY KEY ("yarnBrandId");
 F   ALTER TABLE ONLY public."YarnBrand" DROP CONSTRAINT "YarnBrand_pkey";
       public         postgres    false    296            �           2606    17463    YarnComp1 YarnComp1_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."YarnComp1"
    ADD CONSTRAINT "YarnComp1_pkey" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."YarnComp1" DROP CONSTRAINT "YarnComp1_pkey";
       public         postgres    false    216            �           2606    17465 *   YarnCostPreCosting YarnCostPreCosting_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."YarnCostPreCosting"
    ADD CONSTRAINT "YarnCostPreCosting_pkey" PRIMARY KEY ("ID");
 X   ALTER TABLE ONLY public."YarnCostPreCosting" DROP CONSTRAINT "YarnCostPreCosting_pkey";
       public         postgres    false    218            �           2606    54595    YarnCost YarnCost_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."YarnCost"
    ADD CONSTRAINT "YarnCost_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."YarnCost" DROP CONSTRAINT "YarnCost_pkey";
       public         postgres    false    432            o           2606    54332 <   YarnCountDeterminationChild YarnCountDeterminationChild_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."YarnCountDeterminationChild"
    ADD CONSTRAINT "YarnCountDeterminationChild_pkey" PRIMARY KEY ("Id");
 j   ALTER TABLE ONLY public."YarnCountDeterminationChild" DROP CONSTRAINT "YarnCountDeterminationChild_pkey";
       public         postgres    false    396            m           2606    54321 2   YarnCountDetermination YarnCountDetermination_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."YarnCountDetermination"
    ADD CONSTRAINT "YarnCountDetermination_pkey" PRIMARY KEY ("Id");
 `   ALTER TABLE ONLY public."YarnCountDetermination" DROP CONSTRAINT "YarnCountDetermination_pkey";
       public         postgres    false    394            �           2606    17467    YarnCount YarnCount_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."YarnCount"
    ADD CONSTRAINT "YarnCount_pkey" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."YarnCount" DROP CONSTRAINT "YarnCount_pkey";
       public         postgres    false    220            �           2606    54496    YarnRate YarnRate_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."YarnRate"
    ADD CONSTRAINT "YarnRate_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."YarnRate" DROP CONSTRAINT "YarnRate_pkey";
       public         postgres    false    420            �           2606    17469    YarnType YarnType_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."YarnType"
    ADD CONSTRAINT "YarnType_pkey" PRIMARY KEY ("ID");
 D   ALTER TABLE ONLY public."YarnType" DROP CONSTRAINT "YarnType_pkey";
       public         postgres    false    222            /           2606    45843    Years Years_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Years"
    ADD CONSTRAINT "Years_pkey" PRIMARY KEY ("Id");
 >   ALTER TABLE ONLY public."Years" DROP CONSTRAINT "Years_pkey";
       public         postgres    false    332            �           2606    17941 8   avg_grey_cons_fabric_cost avg_grey_cons_fabric_cost_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.avg_grey_cons_fabric_cost
    ADD CONSTRAINT avg_grey_cons_fabric_cost_pkey PRIMARY KEY (id);
 b   ALTER TABLE ONLY public.avg_grey_cons_fabric_cost DROP CONSTRAINT avg_grey_cons_fabric_cost_pkey;
       public         postgres    false    281            �           2606    17471 $   commercial_cost commercial_cost_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.commercial_cost
    ADD CONSTRAINT commercial_cost_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.commercial_cost DROP CONSTRAINT commercial_cost_pkey;
       public         postgres    false    224            �           2606    17473 0   commission_cost_pre_costing commission_cost_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.commission_cost_pre_costing
    ADD CONSTRAINT commission_cost_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.commission_cost_pre_costing DROP CONSTRAINT commission_cost_pkey;
       public         postgres    false    226                       2606    45692    composition composition_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.composition
    ADD CONSTRAINT composition_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.composition DROP CONSTRAINT composition_pkey;
       public         postgres    false    300            �           2606    17985 F   cons_dzn_gmts_embellishment_cost cons_dzn_gmts_embellishment_cost_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.cons_dzn_gmts_embellishment_cost
    ADD CONSTRAINT cons_dzn_gmts_embellishment_cost_pkey PRIMARY KEY (id);
 p   ALTER TABLE ONLY public.cons_dzn_gmts_embellishment_cost DROP CONSTRAINT cons_dzn_gmts_embellishment_cost_pkey;
       public         postgres    false    285            �           2606    18001 4   cons_dzn_gmts_wash_cost cons_dzn_gmts_wash_cost_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.cons_dzn_gmts_wash_cost
    ADD CONSTRAINT cons_dzn_gmts_wash_cost_pkey PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public.cons_dzn_gmts_wash_cost DROP CONSTRAINT cons_dzn_gmts_wash_cost_pkey;
       public         postgres    false    287            �           2606    17969 6   cons_unit_gmts_trim_cost cons_unit_gmts_trim_cost_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.cons_unit_gmts_trim_cost
    ADD CONSTRAINT cons_unit_gmts_trim_cost_pkey PRIMARY KEY (id);
 `   ALTER TABLE ONLY public.cons_unit_gmts_trim_cost DROP CONSTRAINT cons_unit_gmts_trim_cost_pkey;
       public         postgres    false    283            �           2606    17475 6   embellishment_cost_pre_costing embellishment_cost_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.embellishment_cost_pre_costing
    ADD CONSTRAINT embellishment_cost_pkey PRIMARY KEY (id);
 `   ALTER TABLE ONLY public.embellishment_cost_pre_costing DROP CONSTRAINT embellishment_cost_pkey;
       public         postgres    false    228            �           2606    17925 6   item_details_order_entry item_details_order_entry_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.item_details_order_entry
    ADD CONSTRAINT item_details_order_entry_pkey PRIMARY KEY (id);
 `   ALTER TABLE ONLY public.item_details_order_entry DROP CONSTRAINT item_details_order_entry_pkey;
       public         postgres    false    279            �           2606    17849 2   other_cost_pre_costing other_cost_pre_costing_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.other_cost_pre_costing
    ADD CONSTRAINT other_cost_pre_costing_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.other_cost_pre_costing DROP CONSTRAINT other_cost_pre_costing_pkey;
       public         postgres    false    277                       2606    18060 >   parsial_fabric_booking_items parsial_fabric_booking_items_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.parsial_fabric_booking_items
    ADD CONSTRAINT parsial_fabric_booking_items_pkey PRIMARY KEY (id);
 h   ALTER TABLE ONLY public.parsial_fabric_booking_items DROP CONSTRAINT parsial_fabric_booking_items_pkey;
       public         postgres    false    291            �           2606    18028 @   parsial_fabric_booking_master parsial_fabric_booking_master_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.parsial_fabric_booking_master
    ADD CONSTRAINT parsial_fabric_booking_master_pkey PRIMARY KEY (id);
 j   ALTER TABLE ONLY public.parsial_fabric_booking_master DROP CONSTRAINT parsial_fabric_booking_master_pkey;
       public         postgres    false    289            M           2606    54155    partytype partytype_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.partytype
    ADD CONSTRAINT partytype_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.partytype DROP CONSTRAINT partytype_pkey;
       public         postgres    false    362            �           2606    17477    tblAgentInfo tblAgentInfo_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public."tblAgentInfo"
    ADD CONSTRAINT "tblAgentInfo_pkey" PRIMARY KEY ("AgentID");
 L   ALTER TABLE ONLY public."tblAgentInfo" DROP CONSTRAINT "tblAgentInfo_pkey";
       public         postgres    false    230            �           2606    17479    tblBuyerInfo tblBuyerInfo_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public."tblBuyerInfo"
    ADD CONSTRAINT "tblBuyerInfo_pkey" PRIMARY KEY ("BuyerID");
 L   ALTER TABLE ONLY public."tblBuyerInfo" DROP CONSTRAINT "tblBuyerInfo_pkey";
       public         postgres    false    232            �           2606    17481 "   tblCompanyInfo tblCompanyInfo_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."tblCompanyInfo"
    ADD CONSTRAINT "tblCompanyInfo_pkey" PRIMARY KEY ("CompID");
 P   ALTER TABLE ONLY public."tblCompanyInfo" DROP CONSTRAINT "tblCompanyInfo_pkey";
       public         postgres    false    234            �           2606    17483 $   tblCurrencyInfo tblCurrencyInfo_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."tblCurrencyInfo"
    ADD CONSTRAINT "tblCurrencyInfo_pkey" PRIMARY KEY ("CurrencyID");
 R   ALTER TABLE ONLY public."tblCurrencyInfo" DROP CONSTRAINT "tblCurrencyInfo_pkey";
       public         postgres    false    236            �           2606    17485 4   tblDealingMrcndiserInfo tblDealingMrcndiserInfo_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."tblDealingMrcndiserInfo"
    ADD CONSTRAINT "tblDealingMrcndiserInfo_pkey" PRIMARY KEY ("ID");
 b   ALTER TABLE ONLY public."tblDealingMrcndiserInfo" DROP CONSTRAINT "tblDealingMrcndiserInfo_pkey";
       public         postgres    false    238            �           2606    17487     tblDepartInfo tblDepartInfo_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public."tblDepartInfo"
    ADD CONSTRAINT "tblDepartInfo_pkey" PRIMARY KEY ("DepID");
 N   ALTER TABLE ONLY public."tblDepartInfo" DROP CONSTRAINT "tblDepartInfo_pkey";
       public         postgres    false    240            �           2606    17489 $   tblInitialOrder tblInitialOrder_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "tblInitialOrder_pkey" PRIMARY KEY ("OrderAutoID");
 R   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "tblInitialOrder_pkey";
       public         postgres    false    242            �           2606    17491 $   tblLocationInfo tblLocationInfo_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."tblLocationInfo"
    ADD CONSTRAINT "tblLocationInfo_pkey" PRIMARY KEY ("LocationId");
 R   ALTER TABLE ONLY public."tblLocationInfo" DROP CONSTRAINT "tblLocationInfo_pkey";
       public         postgres    false    244            �           2606    17493 $   tblOrderUomInfo tblOrderUomInfo_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public."tblOrderUomInfo"
    ADD CONSTRAINT "tblOrderUomInfo_pkey" PRIMARY KEY ("UOMID");
 R   ALTER TABLE ONLY public."tblOrderUomInfo" DROP CONSTRAINT "tblOrderUomInfo_pkey";
       public         postgres    false    246            �           2606    17495 (   tblPODetailsInfro tblPODetailsInfro_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public."tblPODetailsInfro"
    ADD CONSTRAINT "tblPODetailsInfro_pkey" PRIMARY KEY ("PoDetID");
 V   ALTER TABLE ONLY public."tblPODetailsInfro" DROP CONSTRAINT "tblPODetailsInfro_pkey";
       public         postgres    false    248            �           2606    17497 "   tblPackingInfo tblPackingInfo_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public."tblPackingInfo"
    ADD CONSTRAINT "tblPackingInfo_pkey" PRIMARY KEY ("PackingID");
 P   ALTER TABLE ONLY public."tblPackingInfo" DROP CONSTRAINT "tblPackingInfo_pkey";
       public         postgres    false    250            �           2606    17499 .   tblPoOrderStatusInfo tblPoOrderStatusInfo_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."tblPoOrderStatusInfo"
    ADD CONSTRAINT "tblPoOrderStatusInfo_pkey" PRIMARY KEY ("ID");
 \   ALTER TABLE ONLY public."tblPoOrderStatusInfo" DROP CONSTRAINT "tblPoOrderStatusInfo_pkey";
       public         postgres    false    252            �           2606    17501    tblPoStatus tblPoStatus_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."tblPoStatus"
    ADD CONSTRAINT "tblPoStatus_pkey" PRIMARY KEY ("ID");
 J   ALTER TABLE ONLY public."tblPoStatus" DROP CONSTRAINT "tblPoStatus_pkey";
       public         postgres    false    254                       2606    37601     tblPreCosting tblPreCosting_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."tblPreCosting"
    ADD CONSTRAINT "tblPreCosting_pkey" PRIMARY KEY ("PrecostingID");
 N   ALTER TABLE ONLY public."tblPreCosting" DROP CONSTRAINT "tblPreCosting_pkey";
       public         postgres    false    292            �           2606    17503 2   tblProductCategoryInfo tblProductCategoryInfo_pkey 
   CONSTRAINT     }   ALTER TABLE ONLY public."tblProductCategoryInfo"
    ADD CONSTRAINT "tblProductCategoryInfo_pkey" PRIMARY KEY ("ProdCatId");
 `   ALTER TABLE ONLY public."tblProductCategoryInfo" DROP CONSTRAINT "tblProductCategoryInfo_pkey";
       public         postgres    false    256            �           2606    17505 0   tblProductionDeptInfo tblProductionDeptInfo_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."tblProductionDeptInfo"
    ADD CONSTRAINT "tblProductionDeptInfo_pkey" PRIMARY KEY ("ID");
 ^   ALTER TABLE ONLY public."tblProductionDeptInfo" DROP CONSTRAINT "tblProductionDeptInfo_pkey";
       public         postgres    false    258            �           2606    17507     tblRegionInfo tblRegionInfo_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."tblRegionInfo"
    ADD CONSTRAINT "tblRegionInfo_pkey" PRIMARY KEY ("RegionID");
 N   ALTER TABLE ONLY public."tblRegionInfo" DROP CONSTRAINT "tblRegionInfo_pkey";
       public         postgres    false    260            �           2606    17509     tblSeasonInfo tblSeasonInfo_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."tblSeasonInfo"
    ADD CONSTRAINT "tblSeasonInfo_pkey" PRIMARY KEY ("SeasonID");
 N   ALTER TABLE ONLY public."tblSeasonInfo" DROP CONSTRAINT "tblSeasonInfo_pkey";
       public         postgres    false    262            �           2606    17511 ,   tblShipmentModeInfo tblShipmentModeInfo_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."tblShipmentModeInfo"
    ADD CONSTRAINT "tblShipmentModeInfo_pkey" PRIMARY KEY ("ID");
 Z   ALTER TABLE ONLY public."tblShipmentModeInfo" DROP CONSTRAINT "tblShipmentModeInfo_pkey";
       public         postgres    false    264            �           2606    17513 "   tblSubDeptInfo tblSubDeptInfo_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public."tblSubDeptInfo"
    ADD CONSTRAINT "tblSubDeptInfo_pkey" PRIMARY KEY ("SubDeptID");
 P   ALTER TABLE ONLY public."tblSubDeptInfo" DROP CONSTRAINT "tblSubDeptInfo_pkey";
       public         postgres    false    266            �           2606    17515 *   tblTeamlederInfoes tblTeamlederInfoes_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."tblTeamlederInfoes"
    ADD CONSTRAINT "tblTeamlederInfoes_pkey" PRIMARY KEY ("TeamleaderID");
 X   ALTER TABLE ONLY public."tblTeamlederInfoes" DROP CONSTRAINT "tblTeamlederInfoes_pkey";
       public         postgres    false    268            �           2606    17517    tblUserInfo tblUserInfo_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."tblUserInfo"
    ADD CONSTRAINT "tblUserInfo_pkey" PRIMARY KEY ("UserID");
 J   ALTER TABLE ONLY public."tblUserInfo" DROP CONSTRAINT "tblUserInfo_pkey";
       public         postgres    false    269            �           2606    17519 $   tblUserTypeInfo tblUserTypeInfo_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."tblUserTypeInfo"
    ADD CONSTRAINT "tblUserTypeInfo_pkey" PRIMARY KEY ("UserTypeID");
 R   ALTER TABLE ONLY public."tblUserTypeInfo" DROP CONSTRAINT "tblUserTypeInfo_pkey";
       public         postgres    false    270            �           2606    17521 0   trim_cost_pre_costing trim_cost_pre_costing_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.trim_cost_pre_costing
    ADD CONSTRAINT trim_cost_pre_costing_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.trim_cost_pre_costing DROP CONSTRAINT trim_cost_pre_costing_pkey;
       public         postgres    false    272            �           2606    17523 $   wash_cost_pre_costing wash_cost_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.wash_cost_pre_costing
    ADD CONSTRAINT wash_cost_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.wash_cost_pre_costing DROP CONSTRAINT wash_cost_pkey;
       public         postgres    false    274            �           1259    17524    fki_Country_InputPannel    INDEX     e   CREATE INDEX "fki_Country_InputPannel" ON public."Input_Pannel_PODetails" USING btree ("CountryID");
 -   DROP INDEX public."fki_Country_InputPannel";
       public         postgres    false    204            �           1259    17528    fki_FK_DelaingMerchant_User    INDEX     g   CREATE INDEX "fki_FK_DelaingMerchant_User" ON public."tblDealingMrcndiserInfo" USING btree ("UserID");
 1   DROP INDEX public."fki_FK_DelaingMerchant_User";
       public         postgres    false    238            �           1259    17529     fki_FK_DelingMerchant_Teamleader    INDEX     r   CREATE INDEX "fki_FK_DelingMerchant_Teamleader" ON public."tblDealingMrcndiserInfo" USING btree ("TeamleaderID");
 6   DROP INDEX public."fki_FK_DelingMerchant_Teamleader";
       public         postgres    false    238            �           1259    17532    fki_FK_InitialOrder_Agent    INDEX     _   CREATE INDEX "fki_FK_InitialOrder_Agent" ON public."tblInitialOrder" USING btree ("Agent_ID");
 /   DROP INDEX public."fki_FK_InitialOrder_Agent";
       public         postgres    false    242            �           1259    17533    fki_FK_InitialOrder_Buyer    INDEX     ^   CREATE INDEX "fki_FK_InitialOrder_Buyer" ON public."tblInitialOrder" USING btree ("BuyerID");
 /   DROP INDEX public."fki_FK_InitialOrder_Buyer";
       public         postgres    false    242            �           1259    17534    fki_FK_InitialOrder_Company    INDEX     b   CREATE INDEX "fki_FK_InitialOrder_Company" ON public."tblInitialOrder" USING btree ("CompanyID");
 1   DROP INDEX public."fki_FK_InitialOrder_Company";
       public         postgres    false    242            �           1259    17535    fki_FK_InitialOrder_Currency    INDEX     d   CREATE INDEX "fki_FK_InitialOrder_Currency" ON public."tblInitialOrder" USING btree ("CurrencyID");
 2   DROP INDEX public."fki_FK_InitialOrder_Currency";
       public         postgres    false    242            �           1259    17536 #   fki_FK_InitialOrder_DealingMerchant    INDEX     t   CREATE INDEX "fki_FK_InitialOrder_DealingMerchant" ON public."tblInitialOrder" USING btree ("Dealing_Merchant_ID");
 9   DROP INDEX public."fki_FK_InitialOrder_DealingMerchant";
       public         postgres    false    242            �           1259    17537    fki_FK_InitialOrder_Location    INDEX     d   CREATE INDEX "fki_FK_InitialOrder_Location" ON public."tblInitialOrder" USING btree ("LocationID");
 2   DROP INDEX public."fki_FK_InitialOrder_Location";
       public         postgres    false    242            �           1259    17538     fki_FK_InitialOrder_OrderUOMInfo    INDEX     j   CREATE INDEX "fki_FK_InitialOrder_OrderUOMInfo" ON public."tblInitialOrder" USING btree ("Order_Uom_ID");
 6   DROP INDEX public."fki_FK_InitialOrder_OrderUOMInfo";
       public         postgres    false    242            �           1259    17539    fki_FK_InitialOrder_Packing    INDEX     c   CREATE INDEX "fki_FK_InitialOrder_Packing" ON public."tblInitialOrder" USING btree ("Packing_ID");
 1   DROP INDEX public."fki_FK_InitialOrder_Packing";
       public         postgres    false    242            �           1259    17540    fki_FK_InitialOrder_PodDept    INDEX     d   CREATE INDEX "fki_FK_InitialOrder_PodDept" ON public."tblInitialOrder" USING btree ("Prod_DeptID");
 1   DROP INDEX public."fki_FK_InitialOrder_PodDept";
       public         postgres    false    242            �           1259    17541     fki_FK_InitialOrder_ProdCategory    INDEX     k   CREATE INDEX "fki_FK_InitialOrder_ProdCategory" ON public."tblInitialOrder" USING btree ("Product_CatID");
 6   DROP INDEX public."fki_FK_InitialOrder_ProdCategory";
       public         postgres    false    242            �           1259    17542    fki_FK_InitialOrder_Region    INDEX     `   CREATE INDEX "fki_FK_InitialOrder_Region" ON public."tblInitialOrder" USING btree ("RegionID");
 0   DROP INDEX public."fki_FK_InitialOrder_Region";
       public         postgres    false    242            �           1259    17543    fki_FK_InitialOrder_Seasson    INDEX     b   CREATE INDEX "fki_FK_InitialOrder_Seasson" ON public."tblInitialOrder" USING btree ("Season_ID");
 1   DROP INDEX public."fki_FK_InitialOrder_Seasson";
       public         postgres    false    242            �           1259    17544     fki_FK_InitialOrder_ShipmentMode    INDEX     n   CREATE INDEX "fki_FK_InitialOrder_ShipmentMode" ON public."tblInitialOrder" USING btree ("Shipment_Mode_ID");
 6   DROP INDEX public."fki_FK_InitialOrder_ShipmentMode";
       public         postgres    false    242            �           1259    17545    fki_FK_InitialOrder_SubDept    INDEX     c   CREATE INDEX "fki_FK_InitialOrder_SubDept" ON public."tblInitialOrder" USING btree ("Sub_DeptID");
 1   DROP INDEX public."fki_FK_InitialOrder_SubDept";
       public         postgres    false    242            �           1259    17546    fki_FK_InitialOrder_Teamleader    INDEX     j   CREATE INDEX "fki_FK_InitialOrder_Teamleader" ON public."tblInitialOrder" USING btree ("Team_Leader_ID");
 4   DROP INDEX public."fki_FK_InitialOrder_Teamleader";
       public         postgres    false    242            �           1259    17547    fki_FK_InitialOrder_User    INDEX     \   CREATE INDEX "fki_FK_InitialOrder_User" ON public."tblInitialOrder" USING btree ("UserID");
 .   DROP INDEX public."fki_FK_InitialOrder_User";
       public         postgres    false    242            �           1259    17548 #   fki_FK_PostOderDetails_InitialOrder    INDEX     q   CREATE INDEX "fki_FK_PostOderDetails_InitialOrder" ON public."tblPODetailsInfro" USING btree ("InitialOrderID");
 9   DROP INDEX public."fki_FK_PostOderDetails_InitialOrder";
       public         postgres    false    248            �           1259    17549 #   fki_FK_PostOderDetails_POOderstatus    INDEX     r   CREATE INDEX "fki_FK_PostOderDetails_POOderstatus" ON public."tblPODetailsInfro" USING btree ("POOrderStatusID");
 9   DROP INDEX public."fki_FK_PostOderDetails_POOderstatus";
       public         postgres    false    248            �           1259    17550    fki_FK_PostOderDetails_Packing    INDEX     h   CREATE INDEX "fki_FK_PostOderDetails_Packing" ON public."tblPODetailsInfro" USING btree ("Packing_ID");
 4   DROP INDEX public."fki_FK_PostOderDetails_Packing";
       public         postgres    false    248            �           1259    17551    fki_FK_PostOderDetails_PoStatus    INDEX     i   CREATE INDEX "fki_FK_PostOderDetails_PoStatus" ON public."tblPODetailsInfro" USING btree ("PoStatusID");
 5   DROP INDEX public."fki_FK_PostOderDetails_PoStatus";
       public         postgres    false    248            �           1259    17552    fki_FK_ProducDept_Dept    INDEX     g   CREATE INDEX "fki_FK_ProducDept_Dept" ON public."tblProductionDeptInfo" USING btree ("Department_Id");
 ,   DROP INDEX public."fki_FK_ProducDept_Dept";
       public         postgres    false    258            �           1259    17553    fki_FK_SubDept_Dept    INDEX     \   CREATE INDEX "fki_FK_SubDept_Dept" ON public."tblSubDeptInfo" USING btree ("DepartmentID");
 )   DROP INDEX public."fki_FK_SubDept_Dept";
       public         postgres    false    266            �           1259    17554    fki_FK_Suplier_SuplyItemID    INDEX     [   CREATE INDEX "fki_FK_Suplier_SuplyItemID" ON public."Suplier" USING btree ("SuplyItemID");
 0   DROP INDEX public."fki_FK_Suplier_SuplyItemID";
       public         postgres    false    212            �           1259    17555    fki_FK_Temleader_User    INDEX     \   CREATE INDEX "fki_FK_Temleader_User" ON public."tblTeamlederInfoes" USING btree ("UserID");
 +   DROP INDEX public."fki_FK_Temleader_User";
       public         postgres    false    268            �           1259    17556    fki_FK_UserInfo_Department    INDEX     Z   CREATE INDEX "fki_FK_UserInfo_Department" ON public."tblUserInfo" USING btree ("DeptId");
 0   DROP INDEX public."fki_FK_UserInfo_Department";
       public         postgres    false    269            �           1259    17557    fki_FK_YarnCost_Comp1    INDEX     ]   CREATE INDEX "fki_FK_YarnCost_Comp1" ON public."YarnCostPreCosting" USING btree ("Comp1ID");
 +   DROP INDEX public."fki_FK_YarnCost_Comp1";
       public         postgres    false    218            �           1259    17558    fki_FK_YarnCost_PreCosting    INDEX     g   CREATE INDEX "fki_FK_YarnCost_PreCosting" ON public."YarnCostPreCosting" USING btree ("PreCostingID");
 0   DROP INDEX public."fki_FK_YarnCost_PreCosting";
       public         postgres    false    218            �           1259    17559    fki_FK_YarnCost_YarnCount    INDEX     a   CREATE INDEX "fki_FK_YarnCost_YarnCount" ON public."YarnCostPreCosting" USING btree ("CountID");
 /   DROP INDEX public."fki_FK_YarnCost_YarnCount";
       public         postgres    false    218            �           1259    17560    fki_FK_YarnCost_YarnType    INDEX     c   CREATE INDEX "fki_FK_YarnCost_YarnType" ON public."YarnCostPreCosting" USING btree ("YarnTypeID");
 .   DROP INDEX public."fki_FK_YarnCost_YarnType";
       public         postgres    false    218            �           1259    17562    fki_InputPannelwithPackingIDFK    INDEX     m   CREATE INDEX "fki_InputPannelwithPackingIDFK" ON public."Input_Pannel_PODetails" USING btree ("Packing_ID");
 4   DROP INDEX public."fki_InputPannelwithPackingIDFK";
       public         postgres    false    204            �           1259    17563    fki_Input_PaanelWithSize    INDEX     k   CREATE INDEX "fki_Input_PaanelWithSize" ON public."Size_Pannel_PODetails" USING btree ("Input_Pannel_ID");
 .   DROP INDEX public."fki_Input_PaanelWithSize";
       public         postgres    false    210            �           1259    17564    fki_OrderItem_SizeWise    INDEX     `   CREATE INDEX "fki_OrderItem_SizeWise" ON public."Size_Pannel_PODetails" USING btree ("ItemID");
 ,   DROP INDEX public."fki_OrderItem_SizeWise";
       public         postgres    false    210            �           1259    17565    fki_PoDetailsID_InputPannel    INDEX     m   CREATE INDEX "fki_PoDetailsID_InputPannel" ON public."Input_Pannel_PODetails" USING btree ("Po_details_ID");
 1   DROP INDEX public."fki_PoDetailsID_InputPannel";
       public         postgres    false    204            �           1259    17567    fki_user_usertype    INDEX     S   CREATE INDEX fki_user_usertype ON public."tblUserInfo" USING btree ("UserTypeID");
 %   DROP INDEX public.fki_user_usertype;
       public         postgres    false    269            �           2606    17568 *   Input_Pannel_PODetails Country_InputPannel    FK CONSTRAINT     �   ALTER TABLE ONLY public."Input_Pannel_PODetails"
    ADD CONSTRAINT "Country_InputPannel" FOREIGN KEY ("CountryID") REFERENCES public."tblRegionInfo"("RegionID");
 X   ALTER TABLE ONLY public."Input_Pannel_PODetails" DROP CONSTRAINT "Country_InputPannel";
       public       postgres    false    204    260    3805            �           2606    17588 /   tblDealingMrcndiserInfo FK_DelaingMerchant_User    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblDealingMrcndiserInfo"
    ADD CONSTRAINT "FK_DelaingMerchant_User" FOREIGN KEY ("UserID") REFERENCES public."tblUserInfo"("UserID");
 ]   ALTER TABLE ONLY public."tblDealingMrcndiserInfo" DROP CONSTRAINT "FK_DelaingMerchant_User";
       public       postgres    false    3819    269    238            �           2606    17593 4   tblDealingMrcndiserInfo FK_DelingMerchant_Teamleader    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblDealingMrcndiserInfo"
    ADD CONSTRAINT "FK_DelingMerchant_Teamleader" FOREIGN KEY ("TeamleaderID") REFERENCES public."tblTeamlederInfoes"("TeamleaderID");
 b   ALTER TABLE ONLY public."tblDealingMrcndiserInfo" DROP CONSTRAINT "FK_DelingMerchant_Teamleader";
       public       postgres    false    3815    268    238            �           2606    17613 %   tblInitialOrder FK_InitialOrder_Agent    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Agent" FOREIGN KEY ("Agent_ID") REFERENCES public."tblAgentInfo"("AgentID");
 S   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Agent";
       public       postgres    false    230    242    3750            �           2606    17618 %   tblInitialOrder FK_InitialOrder_Buyer    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Buyer" FOREIGN KEY ("BuyerID") REFERENCES public."tblBuyerInfo"("BuyerID");
 S   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Buyer";
       public       postgres    false    3752    232    242            �           2606    17623 '   tblInitialOrder FK_InitialOrder_Company    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Company" FOREIGN KEY ("CompanyID") REFERENCES public."tblCompanyInfo"("CompID");
 U   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Company";
       public       postgres    false    242    234    3754            �           2606    17628 (   tblInitialOrder FK_InitialOrder_Currency    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Currency" FOREIGN KEY ("CurrencyID") REFERENCES public."tblCurrencyInfo"("CurrencyID");
 V   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Currency";
       public       postgres    false    3756    242    236            �           2606    17633 /   tblInitialOrder FK_InitialOrder_DealingMerchant    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_DealingMerchant" FOREIGN KEY ("Dealing_Merchant_ID") REFERENCES public."tblDealingMrcndiserInfo"("ID");
 ]   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_DealingMerchant";
       public       postgres    false    238    242    3760            �           2606    17638 (   tblInitialOrder FK_InitialOrder_Location    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Location" FOREIGN KEY ("LocationID") REFERENCES public."tblLocationInfo"("LocationId");
 V   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Location";
       public       postgres    false    242    244    3784            �           2606    17643 ,   tblInitialOrder FK_InitialOrder_OrderUOMInfo    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_OrderUOMInfo" FOREIGN KEY ("Order_Uom_ID") REFERENCES public."tblOrderUomInfo"("UOMID");
 Z   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_OrderUOMInfo";
       public       postgres    false    242    3786    246            �           2606    17648 '   tblInitialOrder FK_InitialOrder_Packing    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Packing" FOREIGN KEY ("Packing_ID") REFERENCES public."tblPackingInfo"("PackingID");
 U   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Packing";
       public       postgres    false    250    3794    242            �           2606    17653 '   tblInitialOrder FK_InitialOrder_PodDept    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_PodDept" FOREIGN KEY ("Prod_DeptID") REFERENCES public."tblProductionDeptInfo"("ID");
 U   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_PodDept";
       public       postgres    false    258    3803    242            �           2606    17658 ,   tblInitialOrder FK_InitialOrder_ProdCategory    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_ProdCategory" FOREIGN KEY ("Product_CatID") REFERENCES public."tblProductCategoryInfo"("ProdCatId");
 Z   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_ProdCategory";
       public       postgres    false    3800    242    256            �           2606    17663 &   tblInitialOrder FK_InitialOrder_Region    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Region" FOREIGN KEY ("RegionID") REFERENCES public."tblRegionInfo"("RegionID");
 T   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Region";
       public       postgres    false    260    242    3805            �           2606    17668 '   tblInitialOrder FK_InitialOrder_Seasson    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Seasson" FOREIGN KEY ("Season_ID") REFERENCES public."tblSeasonInfo"("SeasonID");
 U   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Seasson";
       public       postgres    false    242    3807    262            �           2606    17673 ,   tblInitialOrder FK_InitialOrder_ShipmentMode    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_ShipmentMode" FOREIGN KEY ("Shipment_Mode_ID") REFERENCES public."tblShipmentModeInfo"("ID");
 Z   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_ShipmentMode";
       public       postgres    false    242    264    3809            �           2606    17678 '   tblInitialOrder FK_InitialOrder_SubDept    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_SubDept" FOREIGN KEY ("Sub_DeptID") REFERENCES public."tblSubDeptInfo"("SubDeptID");
 U   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_SubDept";
       public       postgres    false    266    3812    242            �           2606    17683 *   tblInitialOrder FK_InitialOrder_Teamleader    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Teamleader" FOREIGN KEY ("Team_Leader_ID") REFERENCES public."tblTeamlederInfoes"("TeamleaderID");
 X   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Teamleader";
       public       postgres    false    242    268    3815            �           2606    17688 $   tblInitialOrder FK_InitialOrder_User    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_User" FOREIGN KEY ("UserID") REFERENCES public."tblUserInfo"("UserID");
 R   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_User";
       public       postgres    false    269    3819    242            �           2606    17693 1   tblPODetailsInfro FK_PostOderDetails_InitialOrder    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblPODetailsInfro"
    ADD CONSTRAINT "FK_PostOderDetails_InitialOrder" FOREIGN KEY ("InitialOrderID") REFERENCES public."tblInitialOrder"("OrderAutoID");
 _   ALTER TABLE ONLY public."tblPODetailsInfro" DROP CONSTRAINT "FK_PostOderDetails_InitialOrder";
       public       postgres    false    3782    248    242            �           2606    17698 1   tblPODetailsInfro FK_PostOderDetails_POOderstatus    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblPODetailsInfro"
    ADD CONSTRAINT "FK_PostOderDetails_POOderstatus" FOREIGN KEY ("POOrderStatusID") REFERENCES public."tblPoOrderStatusInfo"("ID");
 _   ALTER TABLE ONLY public."tblPODetailsInfro" DROP CONSTRAINT "FK_PostOderDetails_POOderstatus";
       public       postgres    false    3796    248    252            �           2606    17703 ,   tblPODetailsInfro FK_PostOderDetails_Packing    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblPODetailsInfro"
    ADD CONSTRAINT "FK_PostOderDetails_Packing" FOREIGN KEY ("Packing_ID") REFERENCES public."tblPackingInfo"("PackingID");
 Z   ALTER TABLE ONLY public."tblPODetailsInfro" DROP CONSTRAINT "FK_PostOderDetails_Packing";
       public       postgres    false    3794    248    250            �           2606    17708 -   tblPODetailsInfro FK_PostOderDetails_PoStatus    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblPODetailsInfro"
    ADD CONSTRAINT "FK_PostOderDetails_PoStatus" FOREIGN KEY ("PoStatusID") REFERENCES public."tblPoStatus"("ID");
 [   ALTER TABLE ONLY public."tblPODetailsInfro" DROP CONSTRAINT "FK_PostOderDetails_PoStatus";
       public       postgres    false    254    3798    248            �           2606    17713 (   tblProductionDeptInfo FK_ProducDept_Dept    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblProductionDeptInfo"
    ADD CONSTRAINT "FK_ProducDept_Dept" FOREIGN KEY ("Department_Id") REFERENCES public."tblDepartInfo"("DepID");
 V   ALTER TABLE ONLY public."tblProductionDeptInfo" DROP CONSTRAINT "FK_ProducDept_Dept";
       public       postgres    false    258    240    3762            �           2606    17718    tblSubDeptInfo FK_SubDept_Dept    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblSubDeptInfo"
    ADD CONSTRAINT "FK_SubDept_Dept" FOREIGN KEY ("DepartmentID") REFERENCES public."tblDepartInfo"("DepID");
 L   ALTER TABLE ONLY public."tblSubDeptInfo" DROP CONSTRAINT "FK_SubDept_Dept";
       public       postgres    false    240    3762    266            �           2606    17723    Suplier FK_Suplier_SuplyItemID    FK CONSTRAINT     �   ALTER TABLE ONLY public."Suplier"
    ADD CONSTRAINT "FK_Suplier_SuplyItemID" FOREIGN KEY ("SuplyItemID") REFERENCES public."Suplyitem"("ID");
 L   ALTER TABLE ONLY public."Suplier" DROP CONSTRAINT "FK_Suplier_SuplyItemID";
       public       postgres    false    214    212    3730            �           2606    17728 $   tblTeamlederInfoes FK_Temleader_User    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblTeamlederInfoes"
    ADD CONSTRAINT "FK_Temleader_User" FOREIGN KEY ("UserID") REFERENCES public."tblUserInfo"("UserID");
 R   ALTER TABLE ONLY public."tblTeamlederInfoes" DROP CONSTRAINT "FK_Temleader_User";
       public       postgres    false    3819    268    269            �           2606    17733    tblUserInfo FK_User_DEpt    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblUserInfo"
    ADD CONSTRAINT "FK_User_DEpt" FOREIGN KEY ("DeptId") REFERENCES public."tblDepartInfo"("DepID");
 F   ALTER TABLE ONLY public."tblUserInfo" DROP CONSTRAINT "FK_User_DEpt";
       public       postgres    false    240    269    3762            �           2606    17738     tblUserInfo FK_Userinfo_UserType    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblUserInfo"
    ADD CONSTRAINT "FK_Userinfo_UserType" FOREIGN KEY ("UserTypeID") REFERENCES public."tblUserTypeInfo"("UserTypeID");
 N   ALTER TABLE ONLY public."tblUserInfo" DROP CONSTRAINT "FK_Userinfo_UserType";
       public       postgres    false    3821    270    269            �           2606    17743 $   YarnCostPreCosting FK_YarnCost_Comp1    FK CONSTRAINT     �   ALTER TABLE ONLY public."YarnCostPreCosting"
    ADD CONSTRAINT "FK_YarnCost_Comp1" FOREIGN KEY ("Comp1ID") REFERENCES public."YarnComp1"("ID");
 R   ALTER TABLE ONLY public."YarnCostPreCosting" DROP CONSTRAINT "FK_YarnCost_Comp1";
       public       postgres    false    218    3732    216            �           2606    17753 (   YarnCostPreCosting FK_YarnCost_YarnCount    FK CONSTRAINT     �   ALTER TABLE ONLY public."YarnCostPreCosting"
    ADD CONSTRAINT "FK_YarnCost_YarnCount" FOREIGN KEY ("CountID") REFERENCES public."YarnCount"("ID");
 V   ALTER TABLE ONLY public."YarnCostPreCosting" DROP CONSTRAINT "FK_YarnCost_YarnCount";
       public       postgres    false    3740    218    220            �           2606    17758 '   YarnCostPreCosting FK_YarnCost_YarnType    FK CONSTRAINT     �   ALTER TABLE ONLY public."YarnCostPreCosting"
    ADD CONSTRAINT "FK_YarnCost_YarnType" FOREIGN KEY ("YarnTypeID") REFERENCES public."YarnType"("ID");
 U   ALTER TABLE ONLY public."YarnCostPreCosting" DROP CONSTRAINT "FK_YarnCost_YarnType";
       public       postgres    false    3742    222    218            �           2606    17768 1   Input_Pannel_PODetails InputPannelwithPackingIDFK    FK CONSTRAINT     �   ALTER TABLE ONLY public."Input_Pannel_PODetails"
    ADD CONSTRAINT "InputPannelwithPackingIDFK" FOREIGN KEY ("Packing_ID") REFERENCES public."tblPackingInfo"("PackingID");
 _   ALTER TABLE ONLY public."Input_Pannel_PODetails" DROP CONSTRAINT "InputPannelwithPackingIDFK";
       public       postgres    false    204    3794    250            �           2606    17773 *   Size_Pannel_PODetails Input_PaanelWithSize    FK CONSTRAINT     �   ALTER TABLE ONLY public."Size_Pannel_PODetails"
    ADD CONSTRAINT "Input_PaanelWithSize" FOREIGN KEY ("Input_Pannel_ID") REFERENCES public."Input_Pannel_PODetails"("Input_Pannel_ID");
 X   ALTER TABLE ONLY public."Size_Pannel_PODetails" DROP CONSTRAINT "Input_PaanelWithSize";
       public       postgres    false    204    210    3714            �           2606    17778 (   Size_Pannel_PODetails OrderItem_SizeWise    FK CONSTRAINT     �   ALTER TABLE ONLY public."Size_Pannel_PODetails"
    ADD CONSTRAINT "OrderItem_SizeWise" FOREIGN KEY ("ItemID") REFERENCES public."OrderItem"("ItemID");
 V   ALTER TABLE ONLY public."Size_Pannel_PODetails" DROP CONSTRAINT "OrderItem_SizeWise";
       public       postgres    false    3721    210    208            �           2606    17783 .   Input_Pannel_PODetails PoDetailsID_InputPannel    FK CONSTRAINT     �   ALTER TABLE ONLY public."Input_Pannel_PODetails"
    ADD CONSTRAINT "PoDetailsID_InputPannel" FOREIGN KEY ("Po_details_ID") REFERENCES public."tblPODetailsInfro"("PoDetID");
 \   ALTER TABLE ONLY public."Input_Pannel_PODetails" DROP CONSTRAINT "PoDetailsID_InputPannel";
       public       postgres    false    248    204    3792            �           2606    37624 "   PreCosting PreCosting_InitialOrder    FK CONSTRAINT     �   ALTER TABLE ONLY public."PreCosting"
    ADD CONSTRAINT "PreCosting_InitialOrder" FOREIGN KEY ("OrderID") REFERENCES public."tblInitialOrder"("OrderAutoID");
 P   ALTER TABLE ONLY public."PreCosting" DROP CONSTRAINT "PreCosting_InitialOrder";
       public       postgres    false    242    293    3782            �           2606    17986 \   cons_dzn_gmts_embellishment_cost cons_dzn_gmts_embellishment_cost_embellishment_cost_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cons_dzn_gmts_embellishment_cost
    ADD CONSTRAINT cons_dzn_gmts_embellishment_cost_embellishment_cost_id_fkey FOREIGN KEY (embellishment_cost_id) REFERENCES public.embellishment_cost_pre_costing(id);
 �   ALTER TABLE ONLY public.cons_dzn_gmts_embellishment_cost DROP CONSTRAINT cons_dzn_gmts_embellishment_cost_embellishment_cost_id_fkey;
       public       postgres    false    3748    285    228            �           2606    18002 A   cons_dzn_gmts_wash_cost cons_dzn_gmts_wash_cost_wash_cost_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cons_dzn_gmts_wash_cost
    ADD CONSTRAINT cons_dzn_gmts_wash_cost_wash_cost_id_fkey FOREIGN KEY (wash_cost_id) REFERENCES public.wash_cost_pre_costing(id);
 k   ALTER TABLE ONLY public.cons_dzn_gmts_wash_cost DROP CONSTRAINT cons_dzn_gmts_wash_cost_wash_cost_id_fkey;
       public       postgres    false    3825    274    287            �           2606    17970 C   cons_unit_gmts_trim_cost cons_unit_gmts_trim_cost_trim_cost_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cons_unit_gmts_trim_cost
    ADD CONSTRAINT cons_unit_gmts_trim_cost_trim_cost_id_fkey FOREIGN KEY (trim_cost_id) REFERENCES public.trim_cost_pre_costing(id);
 m   ALTER TABLE ONLY public.cons_unit_gmts_trim_cost DROP CONSTRAINT cons_unit_gmts_trim_cost_trim_cost_id_fkey;
       public       postgres    false    283    3823    272            �           2606    17803 @   embellishment_cost_pre_costing embellishment_cost_body_part_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.embellishment_cost_pre_costing
    ADD CONSTRAINT embellishment_cost_body_part_fkey FOREIGN KEY (body_part) REFERENCES public."BodyPartofPreCosting"("ID");
 j   ALTER TABLE ONLY public.embellishment_cost_pre_costing DROP CONSTRAINT embellishment_cost_body_part_fkey;
       public       postgres    false    3708    228    198            �           2606    17926 E   item_details_order_entry item_details_order_entry_order_entry_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.item_details_order_entry
    ADD CONSTRAINT item_details_order_entry_order_entry_id_fkey FOREIGN KEY (order_entry_id) REFERENCES public."tblInitialOrder"("OrderAutoID");
 o   ALTER TABLE ONLY public.item_details_order_entry DROP CONSTRAINT item_details_order_entry_order_entry_id_fkey;
       public       postgres    false    3782    242    279            �           2606    18066 P   parsial_fabric_booking_items parsial_fabric_booking_items_booking_master_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.parsial_fabric_booking_items
    ADD CONSTRAINT parsial_fabric_booking_items_booking_master_id_fkey FOREIGN KEY (booking_master_id) REFERENCES public.parsial_fabric_booking_master(id);
 z   ALTER TABLE ONLY public.parsial_fabric_booking_items DROP CONSTRAINT parsial_fabric_booking_items_booking_master_id_fkey;
       public       postgres    false    3839    289    291            �           2606    18061 G   parsial_fabric_booking_items parsial_fabric_booking_items_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.parsial_fabric_booking_items
    ADD CONSTRAINT parsial_fabric_booking_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public."tblInitialOrder"("OrderAutoID");
 q   ALTER TABLE ONLY public.parsial_fabric_booking_items DROP CONSTRAINT parsial_fabric_booking_items_order_id_fkey;
       public       postgres    false    3782    291    242            �           2606    17813 ?   trim_cost_pre_costing trim_cost_pre_costing_nominated_supp_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trim_cost_pre_costing
    ADD CONSTRAINT trim_cost_pre_costing_nominated_supp_fkey FOREIGN KEY (nominated_supp) REFERENCES public."Suplier"("ID");
 i   ALTER TABLE ONLY public.trim_cost_pre_costing DROP CONSTRAINT trim_cost_pre_costing_nominated_supp_fkey;
       public       postgres    false    3727    272    212            t      x������ � �      v      x������ � �      r      x������ � �            x������ � �      �   N   x�3��/�tL.�,K�2�t�/)�υ�9�K2R��a|N�������)�siZ�g�l�9�iȒ�h�1z\\\ )*�      h   0   x�3�,I-.
%��\F`vf^���P0�2��Js��qqq �M�      x      x������ � �             x������ � �         B   x�3�����4�4�2��uu�V���Q����qu��/-�PN��K�qO��,(-�5����� ���      H   2   x�3�47��/-I��/�42�4204��J�+M,���4 �?����� 
      J   C   x�3�4202�50�501��20 "=�(N���<NC(4204��J�+M,��4�2Bh3"A[� ]=�      L   $   x�3��J�+M,��4�4 BCN#C� W� ��]      �      x������ � �      V      x�3�L�tL.�,K����� "_�         &   x�3�,�tL.�,K�4�2�,..��˅��p��qqq �i	�      Z   a   x�3��/*QPSp�IM,��K�4�4�tL.�,K�441�2�)J�+. �J,����#�s�8+8��(pZZr"˙`n�������(Jb���� �,n      �      x������ � �      T   u   x���1�0g�1�$+M�~@���UdH�؈��D�EE;dSz1��#
��P����SE��$n�&����'>�T��).8�'��q0������o��><�]��ow$�ي��`�1b      X   p   x�}�!!P�s�@  +{�5;��5�:=��@�_~�����q��x�>�����:j���&Be�ɡZ����jݪn/˶�\��]���9��!U����<� ��7�      j   :   x�3�,I-.��KW�K�MU0�2B0�2F0�2A0�2E�ɋ)��


�\1z\\\ j]$�      d      x������ � �      �   �   x�5��n� D��Wp��ɱr�R�F���`�vW
`��~}qMn�f5�Z�2��11] ��`{���j��)XC�}Z8�w��o���&�wlm@�As�0,��C���NX4	{�+�RF��D]�
���J�`_S"��1	&s�Sq6�D�0��s!�-�N?��打���[��L��7���j�O�V�!�/���_wɨ��Hnf��b�Md���\�-���y�t��?Bfk�      �       x�3�4��� .CNC�b �������� \�      B   #   x�3�t��4�40�7��7202�4����� G1�      j      x������ � �      �   M   x�3�,..NOO���uu����Qp�sQ�w	u���S�	q�� �2�L.N%V�)��Jb5�q���6F��� ��)�      h      x������ � �      �   E   x�3�I�N�tL.�,K�2�v�q�9]C��a<Ng7ǔ3��Ό3 �4/�5�t��qb���� �Y�      f      x������ � �      �   -   x�3�����LNN_WWoo�O_�WN 0 \1z\\\ �	�      6   l   x�3��uu�V���Q����qu�,OM��M��S(�ON-.�t��Q�/K-
d�d�s���p���)�g��dp��sq�T���R�r�.A>��y��%�e�\1z\\\ �5 =      |   q   x�˽
�@E�����O�,��)m�IЅ����o��S��uI���'�%%JL�A*T�@�F��m�_ưJ�c�9�G��hq�w�[�I���e����q�O5z
��8��C"�      <   F   x�3��M,�N-��K�,N).�,�H�HLI,��/.N̳46wH�M���K���2�tO�K-J��$�0F��� �!�      l      x������ � �      N      x������ � �      `   S   x�3�441�4�4�4D�~��)9�
��y@�b���"�ܒb=����"NN������b΀�b���".#������ �(�      l   �   x�3�,I-.
%���F�A�.
`A#=#`�i�g�*d�Қ��[�_�Y����e6-3/]!-1�/���(U!���W\RT�R
�b�SN)��a�
r��1�1����l�i�gd�, 6c�"�fs� ��ZC      �   3   x�3����,Qp���,�PpKL*�L.�tL.�,K�2��/K�C����� ��      @   ,   x�3�40�70�7202�t��Q��O)�I-�2KX`J��qqq h�C         K   x�3��uu�V���Q����qu�40�70�7202 3-�L4�\�Y��,�e��0S�aF�0����bX� �G      n      x������ � �      p      x������ � �         "   x�3�����4�4�4 Bϼ��̲T�=... S
�            x�3ᬪJI)�4�tL.�,K����� I\�      �   C   x�3�L�ʌNNNCKNpL.�,K�2�,." a�F��)@NbqbJ
D<8=�!b���� �z�      n   9   x�3�4�44��4��LM-N##]#]S���J8�Є3pr��q��qqq B��      �   ?   x�3�LJJN�T��SpL.�,K�2�LII�rL�NϼDϔ3#�&e�YQY��������� ���      ^   6   x�3�4�4�,����̼tN��<06�L-�tN,*���tL.�,K����� w�b      2   $   x�3�4�La.# Y\�id��\�Y������ bKa      �   �   x�uѽ� ���}�~�Z���M\\.�iQ�
�~<�$���w�?v5I.��T(��x�-Q�����h����8ktQ�!�`�-أ ��R4U|�*5>��I�+��t��Ӝ
rG_��Vto�_�����u#���Zi��Q�7Z��۱,Q^�E0������i�r�rQ:��Z��{���=�~�K`C�tx�EQ��Ȝ�      4   W   x�3��uu�V���Q����qu�4�NN�����
NCN��̲T.c�T�`Qm��Y\$Ӏ�0�LIMI�k6�i����� ��'j      0   L   x�3�t��M�+���SPSp,(HM,J�KNU�tKL*�L.欬��4�4 Ð��Dΐ��̼t��܂ļJ�=... 4g�      P      x������ � �      &   �   x����j�@���s�I�u��6����Dr�eHV]���V�����@��6�A��oy��̫t�3C�⎔&I��2X`�[��V�X VF	L��7�bS��-�ߋ�y��|�Oq�po��	~B�Qt];]gRˮ�����UL������4bf�,�����!�Q׿헿��u�ܷ�4 i�q9ь3�8������R���?{��$�t�      >   D   x�3��uu�V���Q����qu�tI�̩T(�O)M���Sp,-�W�
rfdp:&�d��r��qqq *;�      8      x������ � �      :      x������ � �         "   x�3�47�42�4�4�2�47�M9��b���� ;��      �   �   x�=��
�0����È�ޗqQPnݤa�BmKL
y{�e����,�Й)Ah�VVG��״X��q��L G��aD.P�ED!Y����R��t�6��ˣip���g�F���X?,��������M����Ro�BX      p   �  x��XMo�8=G�b���R~H�8�ۢ�E�,�(zY��m�vk[��4�����%����妇�Ț7�CrHŰ+n4�9_���\,w����z���vUd���,�ݮ�y��O�W��x�y��k[d-�b�[�D�նH�+���N��i���+����z�E�"��3G�:���12)P�U��l)��T�<h�!M�jj�b�	Q��;*V�����I�C�m:�8u(�*Ac�,�#F<���n=q�0cs��e�#���ۃ�Ҵ�&L�h5�Є����d	��O��gEJ.<�t�T�C�a��F<��g[v�q���*�=*�i� T
D�h��n԰;Dӎ�@;jl��Q1����+2��Rk�m�����EX)���T��EZѣ��r��n؅=��A��P �%��~�z��@i3~�?�����%x���ll�l��B�V���U�&�a��r3+�J�>�Sm'f�%r���T
��R�Lo���h>��FE�,�=���t��rQT���er��(d ���B!R��]Hsm�"A��FOr��e0v-�:A��t_�q���ֵN�B��������F�FE�L�$S�3���;��ff"�S�$�ԃ��TK�z��S
$0�Bt��Q��S
$ ����D�!���t�qDh6t�@��T���=���4"%BSAZ���Tڈ�M�8�~a<�ӌ$d DT�f��S�#	� D�S�M�v�	�@����� �o|6u�w����g���~S!;����E8�L*d�&�l�-�d�rW�?��b��M�PM���*��A eq%��X�\�)�)����]��n�܀�cUʵ�{�.T�c������'���l�x���r�������x�[n�|ּ-cn�Nt�Si,:��<��K���=;�?׀k�Z����vٴZBf��\����E��GѩT�&��y��e����bSB�
l�����üMy	?�MC�&�ֿ�7�����a^���@��CSA$�8�l$�685�_'K�v�����2��$�,��%��guWA���w�i��G�ZŪ�yO����UI��Щ�X�x��΋x�}��Y�����G�IU�a����	%>�s��Z嶰��[�n�m��o]Oΐ����c60�8|����o�9k�h��ù�P�����Y�o�T�
�G������ui,�գs�9�M�v�=�-���E>�J���q��m�O8��s�5����XVy��X*ё1 _���� ���Lr��7>��S"^R�}Z��0a���7�L$�ݕ�+��m��gx��/'���z�8��̄����W(��b�ͻM�۶��u�.�jxQ$f�".?&~қ�OăF��1ĩs��j%�g2�Xi��QdjD�=�{A�$��A�jy�;�x��`���\�T���{���h����l*U}A���A���ȇ�ڼ�g�~<8�x��/���Ƈ��C�h�ԩ2�G
s�[/W�*����v��G��9,*�3� �C �����T|ѽd%E"�|(��Sy�	 ib�	"�2P�4DP /4����0����)�������?��7o�?�u��޾�ww�o?�ң�TBc@��}�-����|*�޹�ѿ7Q�9e*       r   #   x�3�H�+�2�tN,�2�,��,*)����� b&�      �   P   x�3����������LII�����4������A 9�K2�R9���8���9c�������#-�� � �b���� =�|      
      x������ � �      �   @   x�3���L ���KL.�,K�2�L���4NG��'��C�1�,..�ɛ�A�Y�rc���� �� �      �   I   x�5��	�0߳�8�`�D*�3`���Cց���Qqu-�.�Z<	f�ٲh�1�o�o��ǜ�7?*����      �   W   x�3��/-)OM,*�tL.�,K�2����KO-�L��sU���L8���:L9���2�a|3ΐ�ǜ�)��$?Ə���� ϧ$�            x�3�LO��M�+�44����� )V�      �   @   x�3�t*�LM�tL.�,K�2racΐ�Ǆ�)��$?�7�+R�`\3N�Ί���� �x      (   h   x�3��uu�V���Q����qu�42ֱ4�PP�46P�O/J�qOL�,(-�qJ�K�ILI-��N-��KWH���/�6.J��4�44�tN�KN��IM����� !�      �   �   x�ePK
�0]ON���ߥT+⦨��M[��	$Q��[cJ��33o��a-���ŧ`!�GL�Nx8�	�ͣ8���S(�FcT�ߕ��M民�L|X�F+���8>��V� �G'ax���<�J���b؋�PD�'�BI��H�m7��)'fC1����8!��F��y�{��sY          �   x�u���@�w_�����%�%��Yd�;����XX:����J|8-9(KC�QF����n�SZ:(ݵ�}��%ŀ3{�	�W�S�EI���=���ڪ:�թ�g��^4D�߼eƘɨ,o      z      x�3�4�D8��Š�\1z\\\ �aF      �   z  x�m�Iw�8��ȯ�q��DԮ��v�m"%}ϝ9�6��"�It����l��9���ArX�'�ѣ(j� �k�S�������+خn��M�.R�޿����
;'!�.b�Y�7�l%���o�[�7�sp>��68��q���C����k�a냳ۑ��6����q�}�V���6o�ak#nM��E�՞��ZˊL�>����wi�>��o$׵��(4ۼ�J�� @I<�X�s8$���ʁ$#�E�$�\�j��'�>$�xH��H 	nKY�Xkѳo�T�h��15��J�Z��C9L�K6>	U�]��Z���Vc�:=���A\&��d\�s|���<Q?ъ�`�K��L��
qC�����"���T�A<f�?�ɟxf=`#%2��k�
��r6Z�5��A����f����V�C�l���'m��q}��t�8���B�'U�\��=�ZTe�f�S�����e�B�Da�e~@;"XyY��	}�W�f�]�O��v�̓����D�և�F��<�S��F�������,�왌�4jKq8��6���UA�8HhS�G�X�T2
|�^��6q�]���{�C��4h5,�ձ������d��w��"�Nސ��Յm��d��B�A�E���Y6}"����cyH.=�ʏ.�Їm��6�)`[ɺ��I�`�^�uY�����^(�����D��>K�}���A*��=ЙG."�I�.h8f"�GF��>w35
��#х|o�[�R7rkÎ˥�(���)���-�xw���u⽓݋̒�CX�{��>�_;�E��p�u���=n��_[+j��n��E��n q�8��
ln4���o�x�<ǿ�n�eS7�}ww����m      *   F   x�3�,.�42ֱ4�PP�46P�O/J�qOL�,(-�qJ�K�ILI-��4�4�tL.�,K�2&KW� 	G�      �   �   x�M��
�0�ϓ��	Ĵ��(J��H�^B]lh�J���ӫ����fVcqh��I8�E%N4���'�$�B}n֨}p����Q̍[#�Ƶ�{���L���%Y�������oZX���
����R�t�E(         (   x�3�L)N)��4� �2�LKIKNNc�p� ���      "   �   x�mλ�0 ���+:9��cGD	2A\ԡ�X	5m�į7������<@Kg������=l�`^5�!O��gǴ�4O�d"�H�k>��g���RP���n��}�>�i~o�u  a5��-l^ȶ���*��O�,Cs���1��J:�      $   A   x�3�,.�4�4�4�4 BKN��̲T.#��!��1L܄���(64�46!#N�=... uZ[      �      x������ � �      t   )   x�3��4�4�4�4�,���0��\�Y�ʙ����� �B�      D   |   x�32�LI��uu�V���Q����qu�42ֱ4�PP�46P�O/J�qOL�,(-�qJ�K�ILI-��4�1�1�1�1���KL.�,K�22��������XL�/-�PN��U2���+F��� q;1      v   �   x���A
�0E��)r�v�P�"��M�C	43����J��.܄��?^%�d~�Lߓ�-M�l@u=uf98�fnJ��olg�7�mV�a�=Y�L��9��:&�N.8�]z�sMѸ$�3���x˟ɋ���0��-#T��_��/�����~�Z� `��z      x   H   x�3�,I-.Q�K�M��RR���2J2���B�y�
~@yI���1�2c�ʌ�LP��`Uf����� ��2�         �   x�����0D�˷D�Ii7:�� �.7"j��~?1HC�eْ�{�@�)a8�eG�-%1y��xM����V*��NZ��ji���[�2�Z!�w�o��2�e��	�!�E�,]`�Q�ҝ՝�?\�<EGc�F4+�j����u���/y�!^��d�      �   1   x�3�4�L�0LI�UPPȅ���!���g.�crIfY*�W� @5      �   *   x�3�t�0�tL.�,K�2�LIIIOO� NϼD�h� ��         *   x�3�4�4B#NcN��̲T.��	���1P�&���� �u�            x������ � �      \   a   x���1
�0����0bb��Q�N�t��`҂�&?�&|Cl�=��/$�Nh��V�ɊV��/�Ui��t0GŦ+G[��P}e2gxy�5�E�c"�8{       �      x������ � �         �  x�u�͎�8���Sh�@��3"����]����t&����#K�,W�~�~�y�9�-^�V ϡ$��K��w�_�]~ʪ�dY�����/E������Wﲖo�資��ש3�E���l��ko����_գ"�pn����^�����o$m�y)��Y�k��D��h�+Etʊ�=��תBMS�J�������=i��YU�E�Y+'�9�cZ��J��K(o�紦;#�:����'l����i��l���ZR�ݶ���l�Q5�_T�c���q:9��b�~p��өr��}Z��=�*-`��L�B����sT3f��tE���w�0NJ��ۖӥFi��&�Q:�Ռ�u���a5u>�,��=�3����N]��%���'���1�u�م�!��~Ӟ��G+2��E-*�+�:Q�O�*���O���Ƙ}���\�;n?r�e�5-iU��`/�1Q�ey��3-i��ʹ��ȈJ�:/���Ϫ���J�>�@����3��q*K�d���)#��~Y�}nFg�=?�����:���ظ���,˜� ?�m!D���J)�7Ap(zQ+��S�9�з��Z
������WZ�=���	?s��:?i�Ī�@-�ɐk�b������t$lӸTe�6�H%�����p��GC�q��Ү���#��Fc�2�鏻��`��}+��0�0��PY�m���8d5��W�!UQ�m����8���������Y^J�;�J>�Zo����-U#K<C�r���Ǜ7u�N/4�$��,3Z�I��*�M��l N�x��o�G�6{�\Dܔ�ظ���Gb�
6�S�c�͂�>S$����q7Ь{qC��,���N^�&u����͹n�΀7fSmD	�fU[�=���>�E��u���驩�\2�=6����_FepP�S^�Y��p5�C�t.
g��H�:��1��E����n��0������uՖr=y�'�5�r����i{��t��@�;Ӽ:`���4 ��=�fFV���vUL�������l,�'���|c�@:M����f�獦{��q�L��f��K�9��, ]'t���d��U-cC�ob�{��;c��`�٥�]� ���ę?�gS��t p�~��p��כ��@��(Z?�V��z�p���<�HO�`q��z�<�8p��|YN'��ˁDěgu�U ��Uߢ9��9[im麍��u�͉tͫ}�WK;q��yUV�{(l�y��=���a�#�.�!yG�fd䵤�b-�:�q`U�ܟ�88�CYD�N=FЫ(�jN% �,�H��K<�`��#ӹ�1P��a�:�m����:��Ŗs����a<;vm�zv��:B�X����Z�0��ǔ8{�q`[ְ)eڇ�8�T�J��Sz����[��p�_��+�t���?��5�;���󿿻k=�k����,-qr�u������v����U!�%ӭ��촁���s���Zv.�Z��p�ۆ��&��Z�։ ]�v�=t������mۣ`)d.�/ ��F�����xb�� ;]u����m������4� �N��9T�r��S����P@Ow� �OJ4)@����?���rLD��U]u���39	[�,���r�y��N��M�-�Rk�]�����I�.'@P7yd� �����B$7��yp��YB��\��V!@L���������W�h��eJ7$mF�G@��Cn?`��:�
P��/����d���1���/�	���0�m�� )u�� �U,�A ��N $�GX��>* Iݱk|� ��j�2`�K� m�2ˉ/�Ș$�P�6�D��6瑱�A��3g�t��yA��[x�t��g��fb� ���+��_�z�u��~&-ff%�t:�L8G[��� p�[Y�=HZ�]	�Z���K?@�'/���[���^Y�M �<�e�U	pOo����c�x���H�sS�>��v�W��7(��m���F'��?���??|���´      �   \  x�M��N�@��O�����si�b�kQoE�A�b�O�j�w����3�v�	W�5_�'��tH�U�|�5��)��Oq��c܍��U;%l�`��!@� P؁H"����NC��I"����Xw��0A��'�>�����iYH������74*�va�eE���7Q�lɔH\�ږz��]U�(ًH+^��u�Τ�Qն=�5��n�Cw�!2¶���wgo%�qY�NgO�T�tlMw���ސ+%��p�By� ��,�B���$v���C�(�`�=AyG��>nǮ����:��jȦv3����g$���h�=��Q~�Cs1�4ک�ˣ}^x��
��      �      x�3�LLL�,..���������� 7;�      �   �  x��W[s�~F�B/3��0,�b�yK�e����즶�[�1#�d8���E6N&�����n��_}�:�]�}���9�嵴�\�v��,��p�\ȕz�r��7œ�q�=i/�R�ɔ7�C:�.�Ԗ^�����:���6�����d������T�o����'��+'�U��Ku�Ÿ�X'�=ȹ�:��"	��4�����g4E����ya��z�bQV<�ת4������]��ӽr &Y�����A�xn�8��}�����VೈҕsF�wL�|�w�ʽ�S[�Y~U�r�D���~�!����I�;DĠ��v&5�H�Ꮌ�k E�0��:�M�?@�d ̲}��g�����9�'�K�s�t�׊�k�����Z���o�ܭ�����W˕�3��/�V`��N�����2��f�B�u�_d�fŏJ���ݴe�\m僆Ь�?���g��6�(�GS�)�P�m��:h���3��䘇D1`���\�L>����Ւq�L8D\N�Q�Ɵŀ�ZY@)��9��A}�vbr�Ѐ���ʐ!�_f��g�*O��8��Q�G	.��GgO
,���E���� �⹅���jUm�B�A���|���e��I��>Z�z`�WO�!C���u嵵�ѕk����Ϣ^�2:��R���Ԕ2Tgb� m�*��K���p<(��SS����Sb8
z�`��ؕ���k���ؖ����C�o�T��f�W�����h��K1d�^�Y���SdsҜ��n�Fp8�E��G-F���|�P�4������́h-F�أu���*;6�#z<b��V��7g�x����x��$w�8��LOr��Y�7��EeV��n��0�ֵ��Tk6B�U���bn���T��J�hL:�=4�S�l[y��*<$���g�8��ʔ�o&t��Vb#�j�����]/6M���ƲY��!o�61		 ��*���R��qD�V.����"��#PE?ʹ��m���_��83|U�x�P �n3�I��j^�����12�νr�����I��Ԝ8&�B����\�D<nW��,�����$0���'$�ϊ��@�=��T.la \�\&��W@-�Cb��0���{��m ��L�o}�Jsu�Ww𬼷lmUը1<D��쁫�ءn�b��fuw"��b�(�<bJJ�Czi�#x#�����W+�N�41�\�u�X�B_Jz9���J��?���-laB��$"�k�R�iy��dI?H��e
�p$ɀ�C᭳SPW m(���5d�H�|�*2�UۓdD��J03d:?uø�č,�|�r�e�
+�q��4:I>~TL� U���&�w��K`Ť��
�Eo�1��b��%�`!�&�Wb�%�Q�9�{g+*������2p�hj�ʏ���t�<�Zr�q@F��J����C:@��0�-�7j��b�H��猚=0Z��T�W(�/��Q�_�d�Cڄ�{��Z�}��j0�����kk��z�����Q����i�� cx/�ຌՠ����1�y/	�����&/T.N� {	�Z��mU� ���sDF+?�n�ZTqn5�����3���>�S�c�D���
w�(ˣ.�(�������x�k�&�q�1�k��.r(;--q�'��W�4(�"�1	���?�>��&D[Kܹt躵�hB��p�Ć��-��"��,/����-1/�+xD�
<���Pn����<�g3X�<Oe��WA����5<�a�3j�O��t��a��X>�x��Ҿ���E�^֋]�8�O `�ѥ��TQ�.�t|�*��>cS��^`c�e}+��5�8o����� ?.��6�p��h�I:a.�|�a�@jQ�^�t�&�!�l��
w���< e�M�CD{N��T�)����NL+N�v1�h�I��m8	P��[-�D6�v��֜���wAi�ҽZ[D��$���_���wqk]￧�~��m�Z���+2l���j,��9��
!��b��      ~   �  x��UMo"9=;��.+��lh>�a�C"�a`��H{1�X�[�;�����t����J��\�z�^9��ٸ�,`�[�w���óH�eA�՟�`rW��h�B��H�������\k�Q�6�����7������{~E�ۯ,�oj-�0�2��0�՜�D�0��}6{ϔ�0�oJD�(���u�t��y׳wa���V�ǰ�1`ӝEOJ��c���[^y���+,u���bT���\KX���,m!T�j�$��ʃ]6��fP�6���wn�}Us�N@��_.`��k�.a���%T>yx�#���}�8# �wB���?��׋��p�h�T~2J����r�f���������X~k���	�?�O�İ�lA%�>�,Ei�X�4��t���&G^����m�`�DP&�c��9���I�J�����S���J~f<�U�#6���;)����rPYO77&�3�P�K�5�7W3���E���`��x��pY �1<��t�Ҍ[��	^��&���zow�1�[L!$���i�!�����Ic�|�Et}$��4���¶:�4|9����W��G� 4I@�+)#�9UĂ��<;�:4�Sri=k����JuY�Y���Q����V�KL{ݚ�1�|�R H5�_����gw�8MQG�Z��QV�ћڰ�"5e�a�n1I�9x���vS�p��3����\�#_m�tЦDP�nR������$(
�Zz@#����mU͖�A��H���<W��&]����k��<L�kK*;Kwt��x�N�_�t���&O�JD°r�k���+�gk)#��;�'v%Ԧ|5\q£����:��g$k��V�ye�=I�O�} 0�s�Q�?��&��"C�����i%H�E�q�Y��T�G�L�����H?M_�^F�{�pb0��MڢS�w~��7�՘R�O�ѿ�A�і�������WWW��oI      b   I   x�3�4�Lb8�e�ihb�	dp�r�crIfY*�X"<�8(fh�ih��5AȚ�d�RAF�dc���� 0G,      �   4   x�3�,++K*NCCN��̲T.3���N8ߜ3%*♗����� �Q      z   2   x�3�,I-.��KW�K�MU0�2B0�2F0�2A0�2E0����� �a      R   T   x�u�1�0C���0U�����@���bc�`�6#�1'+$K�j�:���W9�t|d�79���O�N�=a�*,Rg�� �;�      |      x������ � �      ~      x�3�,.�4�tL.�,K����� /�t      ,      x������ � �      .      x������ � �      F      x������ � �      �   8   x�3�,I-.��KW�K�MU0���2B3�����LP�L@b��b� �=... �7�      �   r   x�=Ω�@Q�ƥ��	�����\�����F�4y�<����|�)Uu�UիVj�ڨ�j����ګN��gR#��8�q<䀄�	�C&�$PJ��Q9*��Q}^��?!�K      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   9   x�31�466�t�I��N-�4�B�ļ�J���b06�Er�X@��T�f��?F��� a��      �      x������ � �      �      x������ � �      �      x������ � �            x������ � �      �      x�3��R�������       �      x�34�tv	��� �=... .+W      �   "   x�37�����,.sc���tΌ��=... qa.      �      x�3�)-������� f�      �      x�34�4�4�24�P`*F��� /o[      �   8   x�3�tLN�/�+)1��8��ssS��3s@L.cN_ /#1/%�8������� ��      �   ?   x�366�����52�50�47�42�44�L��J��4�4aK0�Ќ$fB!�g�W� ��      �      x�32�t�H�N����� a�      �   B   x�3�H.�2�N-�2�t���2�L)�2��N�2��I*�2��-)��t/�/��tw����� ��.      �   9   x�34��466�4�,((�4202�50�52G0-LK8����$1W� ��U      �   8   x�3����LQp���/R���3�R��8���J0e�Q�@U�eLP� K��qqq ��#�      �   #   x�3�t��K�,�MM�2�(��JM.�c���� �i      �   &   x�3�tL.�,K�2��̃2�9��SsRS�b���� ��	�      �      x������ � �      �   L   x�3��/-)OM,*�2����KO-�L�2����q�p�'gs�r�%&e&s�q��p�s:嗔��r��qqq �]�      �   j   x�3��M�+�4�2��IL�L1�9CRS��S��u�3�r�B&HBN��@SNϼ�ļ ӌ34/�8��4���L���d�锘Rm	28��sS��=... �M!�      �   "   x�3��v�22�LJ�K�ILI-������� Y8�      �   &   x�3�.��M-�2���+2�9KKJs�b���� ���      �   2   x�3�t�,�2��OL�2�)J���2�NM�I��%�LC� W� q�>      �   0   x�3�(�O)M.����4�2�tI���K���2����,)��b���� Ee�      �      x�3�4�2bcN#. ����� u�      �   j   x�3��-R��/�L�,�rH�M���K���40472253530�420��5��5��,�(542�4�4�2��MQpJ��I�LJ�I�A5�����M� +�������� L�!S      �       x�3�tL����2�t�-�ɯLM����� TV[      �      x������ � �      �      x������ � �     