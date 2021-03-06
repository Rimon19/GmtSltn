PGDMP     %                    x         
   GarmentERP    12.0    12.0 �   9           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            :           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ;           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            <           1262    18068 
   GarmentERP    DATABASE     �   CREATE DATABASE "GarmentERP" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "GarmentERP";
                postgres    false            	            2615    18069    a    SCHEMA        CREATE SCHEMA a;
    DROP SCHEMA a;
                postgres    false                        2615    18070 
   dbGarments    SCHEMA        CREATE SCHEMA "dbGarments";
    DROP SCHEMA "dbGarments";
                postgres    false            ^           1259    19646    BodyPartEntry    TABLE       CREATE TABLE public."BodyPartEntry" (
    "Id" integer NOT NULL,
    "BodyPartFullName" character varying(100),
    "BodyPartShortName" character varying(100),
    "EntryPages" character varying(500),
    "BodyPartType" character varying(100),
    status character varying(100)
);
 #   DROP TABLE public."BodyPartEntry";
       public         heap    postgres    false            ]           1259    19644    BodyPartEntry_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."BodyPartEntry_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."BodyPartEntry_Id_seq";
       public          postgres    false    350            =           0    0    BodyPartEntry_Id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."BodyPartEntry_Id_seq" OWNED BY public."BodyPartEntry"."Id";
          public          postgres    false    349            @           1259    19512    BodyPartType    TABLE     �   CREATE TABLE public."BodyPartType" (
    "Id" integer NOT NULL,
    "BodyPartTypeName" character varying(100),
    status character varying(100)
);
 "   DROP TABLE public."BodyPartType";
       public         heap    postgres    false            ?           1259    19510    BodyPartType_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."BodyPartType_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."BodyPartType_Id_seq";
       public          postgres    false    320            >           0    0    BodyPartType_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."BodyPartType_Id_seq" OWNED BY public."BodyPartType"."Id";
          public          postgres    false    319            �            1259    18071    BodyPartofPreCosting    TABLE     �   CREATE TABLE public."BodyPartofPreCosting" (
    "ID" integer NOT NULL,
    "Item_Group" character varying(100),
    "Type" character varying(100)
);
 *   DROP TABLE public."BodyPartofPreCosting";
       public         heap    postgres    false            �            1259    18074    BodyPartofPreCosting_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."BodyPartofPreCosting_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."BodyPartofPreCosting_ID_seq";
       public          postgres    false    204            ?           0    0    BodyPartofPreCosting_ID_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."BodyPartofPreCosting_ID_seq" OWNED BY public."BodyPartofPreCosting"."ID";
          public          postgres    false    205            F           1259    19536 
   ColorRange    TABLE     �   CREATE TABLE public."ColorRange" (
    "Id" integer NOT NULL,
    "ColorRangeName" character varying(100),
    status character varying(100)
);
     DROP TABLE public."ColorRange";
       public         heap    postgres    false            E           1259    19534    ColorRange_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ColorRange_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."ColorRange_Id_seq";
       public          postgres    false    326            @           0    0    ColorRange_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."ColorRange_Id_seq" OWNED BY public."ColorRange"."Id";
          public          postgres    false    325            B           1259    19520    CommercialInvoice    TABLE     �   CREATE TABLE public."CommercialInvoice" (
    "Id" integer NOT NULL,
    "CommercialInvoiceName" character varying(100),
    status character varying(100)
);
 '   DROP TABLE public."CommercialInvoice";
       public         heap    postgres    false            A           1259    19518    CommercialInvoice_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CommercialInvoice_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."CommercialInvoice_Id_seq";
       public          postgres    false    322            A           0    0    CommercialInvoice_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."CommercialInvoice_Id_seq" OWNED BY public."CommercialInvoice"."Id";
          public          postgres    false    321            6           1259    19469    Composition    TABLE     �   CREATE TABLE public."Composition" (
    "Id" integer NOT NULL,
    "CompositionName" character varying NOT NULL,
    "Status" character varying
);
 !   DROP TABLE public."Composition";
       public         heap    postgres    false            �            1259    18076    ConversionCostPreCosting    TABLE     �  CREATE TABLE public."ConversionCostPreCosting" (
    "ConversionCostID" integer NOT NULL,
    "PreCostingID" integer,
    "FabDescID" integer,
    "ConversionProcessID" integer,
    "ProcessLoss" double precision,
    "ReqQty" double precision,
    "AvgReqQty" double precision,
    "Charge/Unit" double precision,
    "Amount" double precision,
    "Status" character varying(50)
);
 .   DROP TABLE public."ConversionCostPreCosting";
       public         heap    postgres    false            �            1259    18079 -   ConversionCostPreCosting_ConversionCostID_seq    SEQUENCE     �   CREATE SEQUENCE public."ConversionCostPreCosting_ConversionCostID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 F   DROP SEQUENCE public."ConversionCostPreCosting_ConversionCostID_seq";
       public          postgres    false    206            B           0    0 -   ConversionCostPreCosting_ConversionCostID_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public."ConversionCostPreCosting_ConversionCostID_seq" OWNED BY public."ConversionCostPreCosting"."ConversionCostID";
          public          postgres    false    207            �            1259    18081    ConversionCostProcess    TABLE     n   CREATE TABLE public."ConversionCostProcess" (
    "ID" integer NOT NULL,
    "Name" character varying(100)
);
 +   DROP TABLE public."ConversionCostProcess";
       public         heap    postgres    false            �            1259    18084    ConversionCostProcess_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."ConversionCostProcess_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."ConversionCostProcess_ID_seq";
       public          postgres    false    208            C           0    0    ConversionCostProcess_ID_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."ConversionCostProcess_ID_seq" OWNED BY public."ConversionCostProcess"."ID";
          public          postgres    false    209            2           1259    19428    CostComponenetsMasterDetails    TABLE     �   CREATE TABLE public."CostComponenetsMasterDetails" (
    "JobNoId" integer,
    "PoNoId" integer,
    "CostComponetId" integer,
    "BudgetedCost" double precision,
    "QPrice" double precision,
    "CostComponentName" character varying(200)
);
 2   DROP TABLE public."CostComponenetsMasterDetails";
       public         heap    postgres    false            1           1259    19417    CostComponentsMaster    TABLE     u   CREATE TABLE public."CostComponentsMaster" (
    "Id" integer NOT NULL,
    "Cost_ComponetName" character varying
);
 *   DROP TABLE public."CostComponentsMaster";
       public         heap    postgres    false            b           1259    19665    CountryLocationMapping    TABLE     �   CREATE TABLE public."CountryLocationMapping" (
    "Id" integer NOT NULL,
    "CountryId" integer,
    "UltimateCountryName" character varying(100)
);
 ,   DROP TABLE public."CountryLocationMapping";
       public         heap    postgres    false            a           1259    19663    CountryLocationMapping_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."CountryLocationMapping_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."CountryLocationMapping_Id_seq";
       public          postgres    false    354            D           0    0    CountryLocationMapping_Id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."CountryLocationMapping_Id_seq" OWNED BY public."CountryLocationMapping"."Id";
          public          postgres    false    353            d           1259    19674    DepartmentProfile    TABLE     �  CREATE TABLE public."DepartmentProfile" (
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
       public         heap    postgres    false            c           1259    19672    DepartmentProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."DepartmentProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."DepartmentProfile_Id_seq";
       public          postgres    false    356            E           0    0    DepartmentProfile_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."DepartmentProfile_Id_seq" OWNED BY public."DepartmentProfile"."Id";
          public          postgres    false    355            `           1259    19657    DepoLocationMapping    TABLE     �   CREATE TABLE public."DepoLocationMapping" (
    "Id" integer NOT NULL,
    "CountryId" integer,
    "UltimateCountryId" integer,
    "CountryDepoName" character varying(100),
    status character varying(100)
);
 )   DROP TABLE public."DepoLocationMapping";
       public         heap    postgres    false            _           1259    19655    DepoLocationMapping_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."DepoLocationMapping_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."DepoLocationMapping_Id_seq";
       public          postgres    false    352            F           0    0    DepoLocationMapping_Id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."DepoLocationMapping_Id_seq" OWNED BY public."DepoLocationMapping"."Id";
          public          postgres    false    351            >           1259    19504    DiscountMethod    TABLE     �   CREATE TABLE public."DiscountMethod" (
    "Id" integer NOT NULL,
    "DiscountMethodName" character varying(100),
    status character varying(100)
);
 $   DROP TABLE public."DiscountMethod";
       public         heap    postgres    false            =           1259    19502    DiscountMethod_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."DiscountMethod_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."DiscountMethod_Id_seq";
       public          postgres    false    318            G           0    0    DiscountMethod_Id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."DiscountMethod_Id_seq" OWNED BY public."DiscountMethod"."Id";
          public          postgres    false    317            f           1259    19685    DivisionProfile    TABLE     �  CREATE TABLE public."DivisionProfile" (
    "Id" integer NOT NULL,
    "DivisionName" character varying(100),
    "ShortName" character varying(100),
    "CompanyId" integer,
    "Address" character varying(200),
    "ContactNumber" character varying(100),
    "Remark" character varying(100),
    "CountryId" integer,
    "Website" character varying(100),
    "Status" character varying(100),
    "Email" character varying(100)
);
 %   DROP TABLE public."DivisionProfile";
       public         heap    postgres    false            e           1259    19683    DivisionProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."DivisionProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."DivisionProfile_Id_seq";
       public          postgres    false    358            H           0    0    DivisionProfile_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."DivisionProfile_Id_seq" OWNED BY public."DivisionProfile"."Id";
          public          postgres    false    357            �            1259    18086 
   FabricCost    TABLE     �  CREATE TABLE public."FabricCost" (
    "FabricCostID" integer NOT NULL,
    "PreCostingID" integer,
    "BodyPartID" integer,
    "BodyPartType" character varying(100),
    "FabNature" character varying(100),
    "ColorType" character varying(100),
    "FabDescID" integer,
    "Fabric_SOurce" character varying(100),
    "Nominated_Supplier_ID" integer,
    "WidthorDiaType" character varying(100),
    "GSMorWeight" double precision,
    "ColornSizenSensitive" character varying(100),
    "Color" character varying(100),
    "Consumption_Basis" character varying(100),
    "Uom" integer,
    "Avg_Grey_Cons" double precision,
    "Rate" double precision,
    "Amount" double precision,
    "Total_Qty" double precision,
    "Total_Amount" double precision
);
     DROP TABLE public."FabricCost";
       public         heap    postgres    false            �            1259    18092    FabricCost_FabricCostID_seq    SEQUENCE     �   CREATE SEQUENCE public."FabricCost_FabricCostID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."FabricCost_FabricCostID_seq";
       public          postgres    false    210            I           0    0    FabricCost_FabricCostID_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."FabricCost_FabricCostID_seq" OWNED BY public."FabricCost"."FabricCostID";
          public          postgres    false    211            �            1259    18094    FabricDesPreCost    TABLE     W  CREATE TABLE public."FabricDesPreCost" (
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
       public         heap    postgres    false            �            1259    18100    FabricDesPreCost_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."FabricDesPreCost_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."FabricDesPreCost_ID_seq";
       public          postgres    false    212            J           0    0    FabricDesPreCost_ID_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."FabricDesPreCost_ID_seq" OWNED BY public."FabricDesPreCost"."ID";
          public          postgres    false    213            D           1259    19528    FabricNature    TABLE     �   CREATE TABLE public."FabricNature" (
    "Id" integer NOT NULL,
    "FabricNatureName" character varying(100),
    status character varying(100)
);
 "   DROP TABLE public."FabricNature";
       public         heap    postgres    false            C           1259    19526    FabricNature_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."FabricNature_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."FabricNature_Id_seq";
       public          postgres    false    324            K           0    0    FabricNature_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."FabricNature_Id_seq" OWNED BY public."FabricNature"."Id";
          public          postgres    false    323            h           1259    19696    GroupProfile    TABLE     �  CREATE TABLE public."GroupProfile" (
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
       public         heap    postgres    false            g           1259    19694    GroupProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."GroupProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."GroupProfile_Id_seq";
       public          postgres    false    360            L           0    0    GroupProfile_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."GroupProfile_Id_seq" OWNED BY public."GroupProfile"."Id";
          public          postgres    false    359            �            1259    18102    Input_Pannel_PODetails    TABLE     ~  CREATE TABLE public."Input_Pannel_PODetails" (
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
       public         heap    postgres    false            �            1259    18108 *   Input_Pannel_PODetails_Input_Pannel_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Input_Pannel_PODetails_Input_Pannel_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 C   DROP SEQUENCE public."Input_Pannel_PODetails_Input_Pannel_ID_seq";
       public          postgres    false    214            M           0    0 *   Input_Pannel_PODetails_Input_Pannel_ID_seq    SEQUENCE OWNED BY        ALTER SEQUENCE public."Input_Pannel_PODetails_Input_Pannel_ID_seq" OWNED BY public."Input_Pannel_PODetails"."Input_Pannel_ID";
          public          postgres    false    215            V           1259    19600    JournalType    TABLE     �   CREATE TABLE public."JournalType" (
    "Id" integer NOT NULL,
    "JournalTypeName" character varying(100),
    status character varying(100)
);
 !   DROP TABLE public."JournalType";
       public         heap    postgres    false            U           1259    19598    JournalType_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."JournalType_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."JournalType_Id_seq";
       public          postgres    false    342            N           0    0    JournalType_Id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."JournalType_Id_seq" OWNED BY public."JournalType"."Id";
          public          postgres    false    341            P           1259    19576    Months    TABLE     �   CREATE TABLE public."Months" (
    "Id" integer NOT NULL,
    "MonthName" character varying(100),
    "MonthNumber" integer,
    status character varying(100)
);
    DROP TABLE public."Months";
       public         heap    postgres    false            O           1259    19574    Months_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Months_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Months_Id_seq";
       public          postgres    false    336            O           0    0    Months_Id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Months_Id_seq" OWNED BY public."Months"."Id";
          public          postgres    false    335            0           1259    19408    OrderImageUploadTable    TABLE     �   CREATE TABLE public."OrderImageUploadTable" (
    "OrderImageId" numeric(100,0) NOT NULL,
    "OrderImageName" character varying(200),
    "OrderImagePath" character varying(300)
);
 +   DROP TABLE public."OrderImageUploadTable";
       public         heap    postgres    false            �            1259    18118 	   OrderItem    TABLE     f   CREATE TABLE public."OrderItem" (
    "ItemID" integer NOT NULL,
    "Name" character varying(100)
);
    DROP TABLE public."OrderItem";
       public         heap    postgres    false            �            1259    18121    OrderItem_ItemID_seq    SEQUENCE     �   CREATE SEQUENCE public."OrderItem_ItemID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."OrderItem_ItemID_seq";
       public          postgres    false    216            P           0    0    OrderItem_ItemID_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."OrderItem_ItemID_seq" OWNED BY public."OrderItem"."ItemID";
          public          postgres    false    217            l           1259    19717    OtherPartyProfile    TABLE     E  CREATE TABLE public."OtherPartyProfile" (
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
       public         heap    postgres    false            k           1259    19715    OtherPartyProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."OtherPartyProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."OtherPartyProfile_Id_seq";
       public          postgres    false    364            Q           0    0    OtherPartyProfile_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."OtherPartyProfile_Id_seq" OWNED BY public."OtherPartyProfile"."Id";
          public          postgres    false    363            :           1259    19488    PageInfo    TABLE     �   CREATE TABLE public."PageInfo" (
    "Id" integer NOT NULL,
    "PageName" character varying(100),
    "PageLink" character varying(100),
    status character varying(100)
);
    DROP TABLE public."PageInfo";
       public         heap    postgres    false            9           1259    19486    PageInfo_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."PageInfo_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."PageInfo_Id_seq";
       public          postgres    false    314            R           0    0    PageInfo_Id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."PageInfo_Id_seq" OWNED BY public."PageInfo"."Id";
          public          postgres    false    313            �            1259    18123 
   PreCosting    TABLE     I  CREATE TABLE public."PreCosting" (
    "PrecostingID" integer NOT NULL,
    "OrderID" integer,
    "Costing_Date" date,
    "Incoterm" character varying(100),
    "Incoterm_place" character varying(100),
    "eR" numeric(255,0),
    "CutSMV" numeric(255,0),
    "SewSMV" numeric(255,0),
    "QuotationId" integer,
    "ApprovedId" integer,
    "currencyId" integer,
    "jobQty" integer,
    "companyId" integer,
    "orderUOMId" integer,
    "RegionId" integer,
    "BudgetMinuite" integer,
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
    "PoId" integer,
    "BuyerId" integer,
    "CutEfficiency" numeric(100,0),
    "Sew_Efficiency" double precision
);
     DROP TABLE public."PreCosting";
       public         heap    postgres    false            �            1259    18126    PreCosting_PrecostingID_seq    SEQUENCE     �   CREATE SEQUENCE public."PreCosting_PrecostingID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."PreCosting_PrecostingID_seq";
       public          postgres    false    218            S           0    0    PreCosting_PrecostingID_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."PreCosting_PrecostingID_seq" OWNED BY public."PreCosting"."PrecostingID";
          public          postgres    false    219            J           1259    19552    ProductCategory    TABLE     �   CREATE TABLE public."ProductCategory" (
    "Id" integer NOT NULL,
    "ProductCategoryName" character varying(100),
    status character varying(100)
);
 %   DROP TABLE public."ProductCategory";
       public         heap    postgres    false            I           1259    19550    ProductCategory_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ProductCategory_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."ProductCategory_Id_seq";
       public          postgres    false    330            T           0    0    ProductCategory_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."ProductCategory_Id_seq" OWNED BY public."ProductCategory"."Id";
          public          postgres    false    329            L           1259    19560    ProductType    TABLE     �   CREATE TABLE public."ProductType" (
    "Id" integer NOT NULL,
    "ProductTypeName" character varying(100),
    status character varying(100)
);
 !   DROP TABLE public."ProductType";
       public         heap    postgres    false            K           1259    19558    ProductType_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ProductType_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."ProductType_Id_seq";
       public          postgres    false    332            U           0    0    ProductType_Id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."ProductType_Id_seq" OWNED BY public."ProductType"."Id";
          public          postgres    false    331            T           1259    19592    ProductionProcess    TABLE     �   CREATE TABLE public."ProductionProcess" (
    "Id" integer NOT NULL,
    "ProductionProcessName" character varying(100),
    status character varying(100)
);
 '   DROP TABLE public."ProductionProcess";
       public         heap    postgres    false            S           1259    19590    ProductionProcess_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ProductionProcess_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."ProductionProcess_Id_seq";
       public          postgres    false    340            V           0    0    ProductionProcess_Id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."ProductionProcess_Id_seq" OWNED BY public."ProductionProcess"."Id";
          public          postgres    false    339            p           1259    19736    ProfitCenter    TABLE     �  CREATE TABLE public."ProfitCenter" (
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
       public         heap    postgres    false            o           1259    19734    ProfitCenter_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."ProfitCenter_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."ProfitCenter_Id_seq";
       public          postgres    false    368            W           0    0    ProfitCenter_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."ProfitCenter_Id_seq" OWNED BY public."ProfitCenter"."Id";
          public          postgres    false    367            R           1259    19584 	   Resources    TABLE     �   CREATE TABLE public."Resources" (
    "Id" integer NOT NULL,
    "ResourceName" character varying(100),
    status character varying(100)
);
    DROP TABLE public."Resources";
       public         heap    postgres    false            Q           1259    19582    Resources_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Resources_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Resources_Id_seq";
       public          postgres    false    338            X           0    0    Resources_Id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Resources_Id_seq" OWNED BY public."Resources"."Id";
          public          postgres    false    337            H           1259    19544 
   SampleType    TABLE     �   CREATE TABLE public."SampleType" (
    "Id" integer NOT NULL,
    "SampleTypeName" character varying(100),
    status character varying(100)
);
     DROP TABLE public."SampleType";
       public         heap    postgres    false            G           1259    19542    SampleType_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."SampleType_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."SampleType_Id_seq";
       public          postgres    false    328            Y           0    0    SampleType_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."SampleType_Id_seq" OWNED BY public."SampleType"."Id";
          public          postgres    false    327            r           1259    19747    SectionProfile    TABLE     �  CREATE TABLE public."SectionProfile" (
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
       public         heap    postgres    false            q           1259    19745    SectionProfile_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."SectionProfile_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."SectionProfile_Id_seq";
       public          postgres    false    370            Z           0    0    SectionProfile_Id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."SectionProfile_Id_seq" OWNED BY public."SectionProfile"."Id";
          public          postgres    false    369            3           1259    19453 	   SizeEntry    TABLE     �   CREATE TABLE public."SizeEntry" (
    "Id" integer NOT NULL,
    "Sequence" integer,
    "Status" character varying,
    "SinzeName" character varying
);
    DROP TABLE public."SizeEntry";
       public         heap    postgres    false            �            1259    18128    Size_Pannel_PODetails    TABLE     �  CREATE TABLE public."Size_Pannel_PODetails" (
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
       public         heap    postgres    false            �            1259    18131 (   Size_Pannel_PODetails_Size_Pannel_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Size_Pannel_PODetails_Size_Pannel_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 A   DROP SEQUENCE public."Size_Pannel_PODetails_Size_Pannel_ID_seq";
       public          postgres    false    220            [           0    0 (   Size_Pannel_PODetails_Size_Pannel_ID_seq    SEQUENCE OWNED BY     {   ALTER SEQUENCE public."Size_Pannel_PODetails_Size_Pannel_ID_seq" OWNED BY public."Size_Pannel_PODetails"."Size_Pannel_ID";
          public          postgres    false    221            �            1259    18133    Suplier    TABLE     �  CREATE TABLE public."Suplier" (
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
       public         heap    postgres    false            �            1259    18139    Suplier_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Suplier_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Suplier_ID_seq";
       public          postgres    false    222            \           0    0    Suplier_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Suplier_ID_seq" OWNED BY public."Suplier"."ID";
          public          postgres    false    223            �            1259    18141 	   Suplyitem    TABLE     �   CREATE TABLE public."Suplyitem" (
    "ID" integer NOT NULL,
    "Name" character varying(100),
    "Description" character varying(100)
);
    DROP TABLE public."Suplyitem";
       public         heap    postgres    false            �            1259    18144    Suplyitem_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Suplyitem_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Suplyitem_ID_seq";
       public          postgres    false    224            ]           0    0    Suplyitem_ID_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Suplyitem_ID_seq" OWNED BY public."Suplyitem"."ID";
          public          postgres    false    225            t           1259    19758    TNATaskEntry    TABLE     J  CREATE TABLE public."TNATaskEntry" (
    "Id" integer NOT NULL,
    "TaskNameId" integer,
    "TaskShortName" character varying(100),
    "Penalty" character varying(100),
    "SequenceNo" integer,
    "Completion%" integer,
    "GroupName" character varying(100),
    "Status" character varying(100),
    "GroupSeqNo" integer
);
 "   DROP TABLE public."TNATaskEntry";
       public         heap    postgres    false            s           1259    19756    TNATaskEntry_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TNATaskEntry_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."TNATaskEntry_Id_seq";
       public          postgres    false    372            ^           0    0    TNATaskEntry_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."TNATaskEntry_Id_seq" OWNED BY public."TNATaskEntry"."Id";
          public          postgres    false    371            v           1259    19766    TNATaskNameEntry    TABLE     �   CREATE TABLE public."TNATaskNameEntry" (
    "Id" integer NOT NULL,
    "TNATaskName" character varying(100),
    "Status" character varying(100)
);
 &   DROP TABLE public."TNATaskNameEntry";
       public         heap    postgres    false            u           1259    19764    TNATaskNameEntry_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TNATaskNameEntry_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."TNATaskNameEntry_Id_seq";
       public          postgres    false    374            _           0    0    TNATaskNameEntry_Id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."TNATaskNameEntry_Id_seq" OWNED BY public."TNATaskNameEntry"."Id";
          public          postgres    false    373            \           1259    19638    TermsNCondition    TABLE     �   CREATE TABLE public."TermsNCondition" (
    "Id" integer NOT NULL,
    "TermsnCondition" character varying(150),
    "MoreTermsNCondition" character varying(150),
    status character varying(100)
);
 %   DROP TABLE public."TermsNCondition";
       public         heap    postgres    false            Z           1259    19630    TermsNConditionSubTable    TABLE     �   CREATE TABLE public."TermsNConditionSubTable" (
    "Id" integer NOT NULL,
    "TermsNConditionId" integer,
    "PageId" integer,
    "PageNames" character varying(150)
);
 -   DROP TABLE public."TermsNConditionSubTable";
       public         heap    postgres    false            Y           1259    19628    TermsNConditionSubTable_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TermsNConditionSubTable_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."TermsNConditionSubTable_Id_seq";
       public          postgres    false    346            `           0    0    TermsNConditionSubTable_Id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."TermsNConditionSubTable_Id_seq" OWNED BY public."TermsNConditionSubTable"."Id";
          public          postgres    false    345            [           1259    19636    TermsNCondition_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TermsNCondition_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."TermsNCondition_Id_seq";
       public          postgres    false    348            a           0    0    TermsNCondition_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."TermsNCondition_Id_seq" OWNED BY public."TermsNCondition"."Id";
          public          postgres    false    347            8           1259    19479 
   TrimsGroup    TABLE     �   CREATE TABLE public."TrimsGroup" (
    "Id" integer NOT NULL,
    "TrimsGroupName" character varying(100),
    status character varying(100)
);
     DROP TABLE public."TrimsGroup";
       public         heap    postgres    false            7           1259    19477    TrimsGroup_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."TrimsGroup_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."TrimsGroup_Id_seq";
       public          postgres    false    312            b           0    0    TrimsGroup_Id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."TrimsGroup_Id_seq" OWNED BY public."TrimsGroup"."Id";
          public          postgres    false    311            X           1259    19608    Type    TABLE     �   CREATE TABLE public."Type" (
    "Id" integer NOT NULL,
    "TypeName" character varying(100),
    status character varying(100)
);
    DROP TABLE public."Type";
       public         heap    postgres    false            W           1259    19606    Type_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Type_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Type_Id_seq";
       public          postgres    false    344            c           0    0    Type_Id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Type_Id_seq" OWNED BY public."Type"."Id";
          public          postgres    false    343            <           1259    19496    UOM    TABLE     �   CREATE TABLE public."UOM" (
    "Id" integer NOT NULL,
    "UomName" character varying(100),
    status character varying(100)
);
    DROP TABLE public."UOM";
       public         heap    postgres    false            ;           1259    19494 
   UOM_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."UOM_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public."UOM_Id_seq";
       public          postgres    false    316            d           0    0 
   UOM_Id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."UOM_Id_seq" OWNED BY public."UOM"."Id";
          public          postgres    false    315            5           1259    19463 	   YarnBrand    TABLE     �   CREATE TABLE public."YarnBrand" (
    "yarnBrandId" integer NOT NULL,
    "yarnBrandName" character varying(100),
    "sequenceNo" integer,
    status character varying(100)
);
    DROP TABLE public."YarnBrand";
       public         heap    postgres    false            4           1259    19461    YarnBrand_yarnBrandId_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnBrand_yarnBrandId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."YarnBrand_yarnBrandId_seq";
       public          postgres    false    309            e           0    0    YarnBrand_yarnBrandId_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."YarnBrand_yarnBrandId_seq" OWNED BY public."YarnBrand"."yarnBrandId";
          public          postgres    false    308            �            1259    18146 	   YarnComp1    TABLE     b   CREATE TABLE public."YarnComp1" (
    "ID" integer NOT NULL,
    "Name" character varying(100)
);
    DROP TABLE public."YarnComp1";
       public         heap    postgres    false            �            1259    18149    YarnComp1_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnComp1_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."YarnComp1_ID_seq";
       public          postgres    false    226            f           0    0    YarnComp1_ID_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."YarnComp1_ID_seq" OWNED BY public."YarnComp1"."ID";
          public          postgres    false    227            �            1259    18151    YarnCostPreCosting    TABLE     B  CREATE TABLE public."YarnCostPreCosting" (
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
       public         heap    postgres    false            �            1259    18154    YarnCostPreCosting_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnCostPreCosting_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."YarnCostPreCosting_ID_seq";
       public          postgres    false    228            g           0    0    YarnCostPreCosting_ID_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."YarnCostPreCosting_ID_seq" OWNED BY public."YarnCostPreCosting"."ID";
          public          postgres    false    229            �            1259    18156 	   YarnCount    TABLE     �   CREATE TABLE public."YarnCount" (
    "ID" integer NOT NULL,
    "Name" character varying(100),
    "Sequence" numeric(100,0),
    "Status" character varying(100)
);
    DROP TABLE public."YarnCount";
       public         heap    postgres    false            �            1259    18159    YarnCount_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnCount_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."YarnCount_ID_seq";
       public          postgres    false    230            h           0    0    YarnCount_ID_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."YarnCount_ID_seq" OWNED BY public."YarnCount"."ID";
          public          postgres    false    231            �            1259    18161    YarnType    TABLE     �   CREATE TABLE public."YarnType" (
    "ID" integer NOT NULL,
    "Type" character varying(100),
    "Description" character varying(100)
);
    DROP TABLE public."YarnType";
       public         heap    postgres    false            �            1259    18164    YarnType_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."YarnType_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."YarnType_ID_seq";
       public          postgres    false    232            i           0    0    YarnType_ID_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."YarnType_ID_seq" OWNED BY public."YarnType"."ID";
          public          postgres    false    233            N           1259    19568    Years    TABLE     r   CREATE TABLE public."Years" (
    "Id" integer NOT NULL,
    "Year" integer,
    status character varying(100)
);
    DROP TABLE public."Years";
       public         heap    postgres    false            M           1259    19566    Years_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Years_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Years_Id_seq";
       public          postgres    false    334            j           0    0    Years_Id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Years_Id_seq" OWNED BY public."Years"."Id";
          public          postgres    false    333            �            1259    18166    avg_grey_cons_fabric_cost    TABLE     @  CREATE TABLE public.avg_grey_cons_fabric_cost (
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
       public         heap    postgres    false            �            1259    18172     avg_grey_cons_fabric_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.avg_grey_cons_fabric_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.avg_grey_cons_fabric_cost_id_seq;
       public          postgres    false    234            k           0    0     avg_grey_cons_fabric_cost_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.avg_grey_cons_fabric_cost_id_seq OWNED BY public.avg_grey_cons_fabric_cost.id;
          public          postgres    false    235            �            1259    18174    commercial_cost    TABLE     �   CREATE TABLE public.commercial_cost (
    id integer NOT NULL,
    precosting_id integer,
    item character varying(255),
    rate_in character varying(255),
    amount double precision,
    status character varying(255)
);
 #   DROP TABLE public.commercial_cost;
       public         heap    postgres    false            �            1259    18180    commercial_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.commercial_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.commercial_cost_id_seq;
       public          postgres    false    236            l           0    0    commercial_cost_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.commercial_cost_id_seq OWNED BY public.commercial_cost.id;
          public          postgres    false    237            �            1259    18182    commission_cost_pre_costing    TABLE       CREATE TABLE public.commission_cost_pre_costing (
    id integer NOT NULL,
    precosting_id integer,
    particulars character varying(255),
    commn_base character varying(255),
    commn_rate character varying(255),
    amount double precision,
    status character varying(255)
);
 /   DROP TABLE public.commission_cost_pre_costing;
       public         heap    postgres    false            �            1259    18188    commission_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.commission_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.commission_cost_id_seq;
       public          postgres    false    238            m           0    0    commission_cost_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.commission_cost_id_seq OWNED BY public.commission_cost_pre_costing.id;
          public          postgres    false    239            �            1259    18190     cons_dzn_gmts_embellishment_cost    TABLE     �  CREATE TABLE public.cons_dzn_gmts_embellishment_cost (
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
       public         heap    postgres    false            �            1259    18196 '   cons_dzn_gmts_embellishment_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cons_dzn_gmts_embellishment_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public.cons_dzn_gmts_embellishment_cost_id_seq;
       public          postgres    false    240            n           0    0 '   cons_dzn_gmts_embellishment_cost_id_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public.cons_dzn_gmts_embellishment_cost_id_seq OWNED BY public.cons_dzn_gmts_embellishment_cost.id;
          public          postgres    false    241            �            1259    18198    cons_dzn_gmts_wash_cost    TABLE     p  CREATE TABLE public.cons_dzn_gmts_wash_cost (
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
       public         heap    postgres    false            �            1259    18204    cons_dzn_gmts_wash_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cons_dzn_gmts_wash_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.cons_dzn_gmts_wash_cost_id_seq;
       public          postgres    false    242            o           0    0    cons_dzn_gmts_wash_cost_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.cons_dzn_gmts_wash_cost_id_seq OWNED BY public.cons_dzn_gmts_wash_cost.id;
          public          postgres    false    243            �            1259    18206    cons_unit_gmts_trim_cost    TABLE     L  CREATE TABLE public.cons_unit_gmts_trim_cost (
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
       public         heap    postgres    false            �            1259    18212    cons_unit_gmts_trim_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cons_unit_gmts_trim_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.cons_unit_gmts_trim_cost_id_seq;
       public          postgres    false    244            p           0    0    cons_unit_gmts_trim_cost_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.cons_unit_gmts_trim_cost_id_seq OWNED BY public.cons_unit_gmts_trim_cost.id;
          public          postgres    false    245            �            1259    18214    embellishment_cost_pre_costing    TABLE     �  CREATE TABLE public.embellishment_cost_pre_costing (
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
       public         heap    postgres    false            �            1259    18220    embellishment_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.embellishment_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.embellishment_cost_id_seq;
       public          postgres    false    246            q           0    0    embellishment_cost_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.embellishment_cost_id_seq OWNED BY public.embellishment_cost_pre_costing.id;
          public          postgres    false    247            �            1259    18222    item_details_order_entry    TABLE     �  CREATE TABLE public.item_details_order_entry (
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
       public         heap    postgres    false            �            1259    18228    item_details_order_entry_id_seq    SEQUENCE     �   CREATE SEQUENCE public.item_details_order_entry_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.item_details_order_entry_id_seq;
       public          postgres    false    248            r           0    0    item_details_order_entry_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.item_details_order_entry_id_seq OWNED BY public.item_details_order_entry.id;
          public          postgres    false    249            j           1259    19709    itemcategory    TABLE     �   CREATE TABLE public.itemcategory (
    id integer NOT NULL,
    itemcategoryname character varying(100),
    status character varying(100)
);
     DROP TABLE public.itemcategory;
       public         heap    postgres    false            i           1259    19707    itemcategory_id_seq    SEQUENCE     �   CREATE SEQUENCE public.itemcategory_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.itemcategory_id_seq;
       public          postgres    false    362            s           0    0    itemcategory_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.itemcategory_id_seq OWNED BY public.itemcategory.id;
          public          postgres    false    361            �            1259    18230    other_cost_pre_costing    TABLE     �   CREATE TABLE public.other_cost_pre_costing (
    id integer NOT NULL,
    pre_costing_id integer,
    cost_component character varying(255),
    budgeted_cost double precision,
    percentage_q_price double precision
);
 *   DROP TABLE public.other_cost_pre_costing;
       public         heap    postgres    false            �            1259    18233    other_cost_pre_costing_id_seq    SEQUENCE     �   CREATE SEQUENCE public.other_cost_pre_costing_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.other_cost_pre_costing_id_seq;
       public          postgres    false    250            t           0    0    other_cost_pre_costing_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.other_cost_pre_costing_id_seq OWNED BY public.other_cost_pre_costing.id;
          public          postgres    false    251            �            1259    18235    parsial_fabric_booking_items    TABLE     �  CREATE TABLE public.parsial_fabric_booking_items (
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
    dia double precision,
    wo_qnty double precision,
    adj_qnty double precision,
    ac_wo_qnty double precision,
    rate double precision,
    amount double precision
);
 0   DROP TABLE public.parsial_fabric_booking_items;
       public         heap    postgres    false            �            1259    18241 #   parsial_fabric_booking_items_id_seq    SEQUENCE     �   CREATE SEQUENCE public.parsial_fabric_booking_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public.parsial_fabric_booking_items_id_seq;
       public          postgres    false    252            u           0    0 #   parsial_fabric_booking_items_id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public.parsial_fabric_booking_items_id_seq OWNED BY public.parsial_fabric_booking_items.id;
          public          postgres    false    253            �            1259    18243    parsial_fabric_booking_master    TABLE     �  CREATE TABLE public.parsial_fabric_booking_master (
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
       public         heap    postgres    false            �            1259    18249 $   parsial_fabric_booking_master_id_seq    SEQUENCE     �   CREATE SEQUENCE public.parsial_fabric_booking_master_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.parsial_fabric_booking_master_id_seq;
       public          postgres    false    254            v           0    0 $   parsial_fabric_booking_master_id_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.parsial_fabric_booking_master_id_seq OWNED BY public.parsial_fabric_booking_master.id;
          public          postgres    false    255            n           1259    19728 	   partytype    TABLE     �   CREATE TABLE public.partytype (
    id integer NOT NULL,
    partytypename character varying(100),
    status character varying(100)
);
    DROP TABLE public.partytype;
       public         heap    postgres    false            m           1259    19726    partytype_id_seq    SEQUENCE     �   CREATE SEQUENCE public.partytype_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.partytype_id_seq;
       public          postgres    false    366            w           0    0    partytype_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.partytype_id_seq OWNED BY public.partytype.id;
          public          postgres    false    365                        1259    18251    tblAgentInfo    TABLE     p   CREATE TABLE public."tblAgentInfo" (
    "AgentID" integer NOT NULL,
    "Agent_Name" character varying(100)
);
 "   DROP TABLE public."tblAgentInfo";
       public         heap    postgres    false                       1259    18254    tblAgentInfo_AgentID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblAgentInfo_AgentID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."tblAgentInfo_AgentID_seq";
       public          postgres    false    256            x           0    0    tblAgentInfo_AgentID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."tblAgentInfo_AgentID_seq" OWNED BY public."tblAgentInfo"."AgentID";
          public          postgres    false    257                       1259    18256    tblBuyerInfo    TABLE     �   CREATE TABLE public."tblBuyerInfo" (
    "BuyerID" integer NOT NULL,
    "Buyer_Name" character varying(70),
    "Details" character varying(100)
);
 "   DROP TABLE public."tblBuyerInfo";
       public         heap    postgres    false                       1259    18259    tblBuyerInfo_BuyerID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblBuyerInfo_BuyerID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."tblBuyerInfo_BuyerID_seq";
       public          postgres    false    258            y           0    0    tblBuyerInfo_BuyerID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."tblBuyerInfo_BuyerID_seq" OWNED BY public."tblBuyerInfo"."BuyerID";
          public          postgres    false    259                       1259    18261    tblCompanyInfo    TABLE     �   CREATE TABLE public."tblCompanyInfo" (
    "CompID" integer NOT NULL,
    "Company_Name" character varying(80),
    "Details" character varying(100)
);
 $   DROP TABLE public."tblCompanyInfo";
       public         heap    postgres    false                       1259    18264    tblCompanyInfo_CompID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblCompanyInfo_CompID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."tblCompanyInfo_CompID_seq";
       public          postgres    false    260            z           0    0    tblCompanyInfo_CompID_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."tblCompanyInfo_CompID_seq" OWNED BY public."tblCompanyInfo"."CompID";
          public          postgres    false    261                       1259    18266    tblCurrencyInfo    TABLE     x   CREATE TABLE public."tblCurrencyInfo" (
    "CurrencyID" integer NOT NULL,
    "Currency_Name" character varying(60)
);
 %   DROP TABLE public."tblCurrencyInfo";
       public         heap    postgres    false                       1259    18269    tblCurrencyInfo_CurrencyID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblCurrencyInfo_CurrencyID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."tblCurrencyInfo_CurrencyID_seq";
       public          postgres    false    262            {           0    0    tblCurrencyInfo_CurrencyID_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."tblCurrencyInfo_CurrencyID_seq" OWNED BY public."tblCurrencyInfo"."CurrencyID";
          public          postgres    false    263                       1259    18271    tblDealingMrcndiserInfo    TABLE        CREATE TABLE public."tblDealingMrcndiserInfo" (
    "ID" integer NOT NULL,
    "TeamleaderID" integer,
    "UserID" integer
);
 -   DROP TABLE public."tblDealingMrcndiserInfo";
       public         heap    postgres    false            	           1259    18274    tblDealingMrcndiserInfo_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblDealingMrcndiserInfo_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."tblDealingMrcndiserInfo_ID_seq";
       public          postgres    false    264            |           0    0    tblDealingMrcndiserInfo_ID_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."tblDealingMrcndiserInfo_ID_seq" OWNED BY public."tblDealingMrcndiserInfo"."ID";
          public          postgres    false    265            
           1259    18276    tblDepartInfo    TABLE     �   CREATE TABLE public."tblDepartInfo" (
    "DepID" integer NOT NULL,
    "Department_Name" character varying(80),
    "Details" character varying(100)
);
 #   DROP TABLE public."tblDepartInfo";
       public         heap    postgres    false                       1259    18279    tblDepartInfo_DepID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblDepartInfo_DepID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."tblDepartInfo_DepID_seq";
       public          postgres    false    266            }           0    0    tblDepartInfo_DepID_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."tblDepartInfo_DepID_seq" OWNED BY public."tblDepartInfo"."DepID";
          public          postgres    false    267                       1259    18281    tblInitialOrder    TABLE     a  CREATE TABLE public."tblInitialOrder" (
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
       public         heap    postgres    false                       1259    18287    tblInitialOrder_OrderAutoID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblInitialOrder_OrderAutoID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."tblInitialOrder_OrderAutoID_seq";
       public          postgres    false    268            ~           0    0    tblInitialOrder_OrderAutoID_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public."tblInitialOrder_OrderAutoID_seq" OWNED BY public."tblInitialOrder"."OrderAutoID";
          public          postgres    false    269                       1259    18289    tblLocationInfo    TABLE     x   CREATE TABLE public."tblLocationInfo" (
    "LocationId" integer NOT NULL,
    "Location_Name" character varying(80)
);
 %   DROP TABLE public."tblLocationInfo";
       public         heap    postgres    false                       1259    18292    tblLocationInfo_LocationId_seq    SEQUENCE     �   CREATE SEQUENCE public."tblLocationInfo_LocationId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."tblLocationInfo_LocationId_seq";
       public          postgres    false    270                       0    0    tblLocationInfo_LocationId_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."tblLocationInfo_LocationId_seq" OWNED BY public."tblLocationInfo"."LocationId";
          public          postgres    false    271                       1259    18294    tblOrderUomInfo    TABLE     t   CREATE TABLE public."tblOrderUomInfo" (
    "UOMID" integer NOT NULL,
    "Order_Uom_Name" character varying(80)
);
 %   DROP TABLE public."tblOrderUomInfo";
       public         heap    postgres    false                       1259    18297    tblOrderUomInfo_UOMID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblOrderUomInfo_UOMID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."tblOrderUomInfo_UOMID_seq";
       public          postgres    false    272            �           0    0    tblOrderUomInfo_UOMID_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."tblOrderUomInfo_UOMID_seq" OWNED BY public."tblOrderUomInfo"."UOMID";
          public          postgres    false    273                       1259    18299    tblPODetailsInfro    TABLE     !  CREATE TABLE public."tblPODetailsInfro" (
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
       public         heap    postgres    false                       1259    18305    tblPODetailsInfro_PoDetID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblPODetailsInfro_PoDetID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."tblPODetailsInfro_PoDetID_seq";
       public          postgres    false    274            �           0    0    tblPODetailsInfro_PoDetID_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."tblPODetailsInfro_PoDetID_seq" OWNED BY public."tblPODetailsInfro"."PoDetID";
          public          postgres    false    275                       1259    18307    tblPackingInfo    TABLE     u   CREATE TABLE public."tblPackingInfo" (
    "PackingID" integer NOT NULL,
    "Packing_Name" character varying(80)
);
 $   DROP TABLE public."tblPackingInfo";
       public         heap    postgres    false                       1259    18310    tblPackingInfo_PackingID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblPackingInfo_PackingID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."tblPackingInfo_PackingID_seq";
       public          postgres    false    276            �           0    0    tblPackingInfo_PackingID_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."tblPackingInfo_PackingID_seq" OWNED BY public."tblPackingInfo"."PackingID";
          public          postgres    false    277                       1259    18312    tblPoOrderStatusInfo    TABLE     t   CREATE TABLE public."tblPoOrderStatusInfo" (
    "ID" integer NOT NULL,
    "Order_Status" character varying(50)
);
 *   DROP TABLE public."tblPoOrderStatusInfo";
       public         heap    postgres    false                       1259    18315    tblPoOrderStatusInfo_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblPoOrderStatusInfo_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."tblPoOrderStatusInfo_ID_seq";
       public          postgres    false    278            �           0    0    tblPoOrderStatusInfo_ID_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."tblPoOrderStatusInfo_ID_seq" OWNED BY public."tblPoOrderStatusInfo"."ID";
          public          postgres    false    279                       1259    18317    tblPoStatus    TABLE     e   CREATE TABLE public."tblPoStatus" (
    "ID" integer NOT NULL,
    "Status" character varying(50)
);
 !   DROP TABLE public."tblPoStatus";
       public         heap    postgres    false                       1259    18320    tblPoStatus_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblPoStatus_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."tblPoStatus_ID_seq";
       public          postgres    false    280            �           0    0    tblPoStatus_ID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."tblPoStatus_ID_seq" OWNED BY public."tblPoStatus"."ID";
          public          postgres    false    281                       1259    18322    tblProductCategoryInfo    TABLE     �   CREATE TABLE public."tblProductCategoryInfo" (
    "ProdCatId" integer NOT NULL,
    "ProdCategory_Name" character varying(80)
);
 ,   DROP TABLE public."tblProductCategoryInfo";
       public         heap    postgres    false                       1259    18325 $   tblProductCategoryInfo_ProdCatId_seq    SEQUENCE     �   CREATE SEQUENCE public."tblProductCategoryInfo_ProdCatId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public."tblProductCategoryInfo_ProdCatId_seq";
       public          postgres    false    282            �           0    0 $   tblProductCategoryInfo_ProdCatId_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public."tblProductCategoryInfo_ProdCatId_seq" OWNED BY public."tblProductCategoryInfo"."ProdCatId";
          public          postgres    false    283                       1259    18327    tblProductionDeptInfo    TABLE     �   CREATE TABLE public."tblProductionDeptInfo" (
    "ID" integer NOT NULL,
    "ProdDeptName" character varying(80),
    "Department_Id" integer
);
 +   DROP TABLE public."tblProductionDeptInfo";
       public         heap    postgres    false                       1259    18330    tblProductionDeptInfo_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblProductionDeptInfo_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."tblProductionDeptInfo_ID_seq";
       public          postgres    false    284            �           0    0    tblProductionDeptInfo_ID_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."tblProductionDeptInfo_ID_seq" OWNED BY public."tblProductionDeptInfo"."ID";
          public          postgres    false    285                       1259    18332    tblRegionInfo    TABLE     r   CREATE TABLE public."tblRegionInfo" (
    "RegionID" integer NOT NULL,
    "Region_Name" character varying(50)
);
 #   DROP TABLE public."tblRegionInfo";
       public         heap    postgres    false                       1259    18335    tblRegionInfo_RegionID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblRegionInfo_RegionID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."tblRegionInfo_RegionID_seq";
       public          postgres    false    286            �           0    0    tblRegionInfo_RegionID_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."tblRegionInfo_RegionID_seq" OWNED BY public."tblRegionInfo"."RegionID";
          public          postgres    false    287                        1259    18337    tblSeasonInfo    TABLE     r   CREATE TABLE public."tblSeasonInfo" (
    "SeasonID" integer NOT NULL,
    "Season_Name" character varying(80)
);
 #   DROP TABLE public."tblSeasonInfo";
       public         heap    postgres    false            !           1259    18340    tblSeasonInfo_SeasonID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblSeasonInfo_SeasonID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."tblSeasonInfo_SeasonID_seq";
       public          postgres    false    288            �           0    0    tblSeasonInfo_SeasonID_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."tblSeasonInfo_SeasonID_seq" OWNED BY public."tblSeasonInfo"."SeasonID";
          public          postgres    false    289            "           1259    18342    tblShipmentModeInfo    TABLE     t   CREATE TABLE public."tblShipmentModeInfo" (
    "ID" integer NOT NULL,
    "Shipment_Mode" character varying(50)
);
 )   DROP TABLE public."tblShipmentModeInfo";
       public         heap    postgres    false            #           1259    18345    tblShipmentModeInfo_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblShipmentModeInfo_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."tblShipmentModeInfo_ID_seq";
       public          postgres    false    290            �           0    0    tblShipmentModeInfo_ID_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."tblShipmentModeInfo_ID_seq" OWNED BY public."tblShipmentModeInfo"."ID";
          public          postgres    false    291            $           1259    18347    tblSubDeptInfo    TABLE     �   CREATE TABLE public."tblSubDeptInfo" (
    "SubDeptID" integer NOT NULL,
    "Sub_dept_Name" character varying(60),
    "DepartmentID" integer
);
 $   DROP TABLE public."tblSubDeptInfo";
       public         heap    postgres    false            %           1259    18350    tblSubDeptInfo_SubDeptID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblSubDeptInfo_SubDeptID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."tblSubDeptInfo_SubDeptID_seq";
       public          postgres    false    292            �           0    0    tblSubDeptInfo_SubDeptID_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."tblSubDeptInfo_SubDeptID_seq" OWNED BY public."tblSubDeptInfo"."SubDeptID";
          public          postgres    false    293            &           1259    18352    tblTeamlederInfoes    TABLE     h   CREATE TABLE public."tblTeamlederInfoes" (
    "TeamleaderID" integer NOT NULL,
    "UserID" integer
);
 (   DROP TABLE public."tblTeamlederInfoes";
       public         heap    postgres    false            '           1259    18355    tblUserInfo    TABLE     G  CREATE TABLE public."tblUserInfo" (
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
       public         heap    postgres    false            (           1259    18358    tblUserTypeInfo    TABLE     s   CREATE TABLE public."tblUserTypeInfo" (
    "UserTypeID" integer NOT NULL,
    "UserType" character varying(80)
);
 %   DROP TABLE public."tblUserTypeInfo";
       public         heap    postgres    false            )           1259    18361    tblUserTypeInfo_UserTypeID_seq    SEQUENCE     �   CREATE SEQUENCE public."tblUserTypeInfo_UserTypeID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."tblUserTypeInfo_UserTypeID_seq";
       public          postgres    false    296            �           0    0    tblUserTypeInfo_UserTypeID_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."tblUserTypeInfo_UserTypeID_seq" OWNED BY public."tblUserTypeInfo"."UserTypeID";
          public          postgres    false    297            *           1259    18363    trim_cost_pre_costing    TABLE     V  CREATE TABLE public.trim_cost_pre_costing (
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
       public         heap    postgres    false            +           1259    18369    trim_cost_pre_costing_id_seq    SEQUENCE     �   CREATE SEQUENCE public.trim_cost_pre_costing_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.trim_cost_pre_costing_id_seq;
       public          postgres    false    298            �           0    0    trim_cost_pre_costing_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.trim_cost_pre_costing_id_seq OWNED BY public.trim_cost_pre_costing.id;
          public          postgres    false    299            ,           1259    18371    vw_fabriccost    VIEW     e  CREATE VIEW public.vw_fabriccost AS
 SELECT "FabricCost"."FabricCostID",
    "FabricCost"."PreCostingID",
    "tblInitialOrder"."OrderAutoID",
    "tblInitialOrder"."JobNo",
    ( SELECT sum(avg_grey_cons_fabric_cost.total_qty) AS sum
           FROM public.avg_grey_cons_fabric_cost
          WHERE (avg_grey_cons_fabric_cost.precosting_id = "FabricCost"."PreCostingID")) AS total_qty
   FROM ((public."FabricCost"
     JOIN public."PreCosting" ON (("FabricCost"."PreCostingID" = "PreCosting"."PrecostingID")))
     JOIN public."tblInitialOrder" ON (("PreCosting"."OrderID" = "tblInitialOrder"."OrderAutoID")));
     DROP VIEW public.vw_fabriccost;
       public          postgres    false    218    210    268    210    268    234    234    218            -           1259    18376 	   vw_search    VIEW     �  CREATE VIEW public.vw_search AS
 SELECT "FabricCost"."Fabric_SOurce",
    "FabricCost"."BodyPartType",
    "FabricCost"."Uom",
    "tblInitialOrder"."JobNo",
    parsial_fabric_booking_items.po_number,
    parsial_fabric_booking_items.body_part,
    parsial_fabric_booking_items.gsm,
    parsial_fabric_booking_items.construction,
    parsial_fabric_booking_items.composition
   FROM (((public."FabricCost"
     JOIN public."PreCosting" ON (("FabricCost"."PreCostingID" = "PreCosting"."PrecostingID")))
     JOIN public."tblInitialOrder" ON (("PreCosting"."OrderID" = "tblInitialOrder"."OrderAutoID")))
     JOIN public.parsial_fabric_booking_items ON ((parsial_fabric_booking_items.order_id = "tblInitialOrder"."OrderAutoID")));
    DROP VIEW public.vw_search;
       public          postgres    false    218    210    210    210    210    218    252    252    252    252    252    252    268    268            .           1259    18381    wash_cost_pre_costing    TABLE     S  CREATE TABLE public.wash_cost_pre_costing (
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
       public         heap    postgres    false            /           1259    18387    wash_cost_id_seq    SEQUENCE     �   CREATE SEQUENCE public.wash_cost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.wash_cost_id_seq;
       public          postgres    false    302            �           0    0    wash_cost_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.wash_cost_id_seq OWNED BY public.wash_cost_pre_costing.id;
          public          postgres    false    303            �           2604    19649    BodyPartEntry Id    DEFAULT     z   ALTER TABLE ONLY public."BodyPartEntry" ALTER COLUMN "Id" SET DEFAULT nextval('public."BodyPartEntry_Id_seq"'::regclass);
 C   ALTER TABLE public."BodyPartEntry" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    350    349    350            �           2604    19515    BodyPartType Id    DEFAULT     x   ALTER TABLE ONLY public."BodyPartType" ALTER COLUMN "Id" SET DEFAULT nextval('public."BodyPartType_Id_seq"'::regclass);
 B   ALTER TABLE public."BodyPartType" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    320    319    320            �           2604    18389    BodyPartofPreCosting ID    DEFAULT     �   ALTER TABLE ONLY public."BodyPartofPreCosting" ALTER COLUMN "ID" SET DEFAULT nextval('public."BodyPartofPreCosting_ID_seq"'::regclass);
 J   ALTER TABLE public."BodyPartofPreCosting" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    205    204            �           2604    19539    ColorRange Id    DEFAULT     t   ALTER TABLE ONLY public."ColorRange" ALTER COLUMN "Id" SET DEFAULT nextval('public."ColorRange_Id_seq"'::regclass);
 @   ALTER TABLE public."ColorRange" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    326    325    326            �           2604    19523    CommercialInvoice Id    DEFAULT     �   ALTER TABLE ONLY public."CommercialInvoice" ALTER COLUMN "Id" SET DEFAULT nextval('public."CommercialInvoice_Id_seq"'::regclass);
 G   ALTER TABLE public."CommercialInvoice" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    322    321    322            �           2604    18390 )   ConversionCostPreCosting ConversionCostID    DEFAULT     �   ALTER TABLE ONLY public."ConversionCostPreCosting" ALTER COLUMN "ConversionCostID" SET DEFAULT nextval('public."ConversionCostPreCosting_ConversionCostID_seq"'::regclass);
 \   ALTER TABLE public."ConversionCostPreCosting" ALTER COLUMN "ConversionCostID" DROP DEFAULT;
       public          postgres    false    207    206            �           2604    18391    ConversionCostProcess ID    DEFAULT     �   ALTER TABLE ONLY public."ConversionCostProcess" ALTER COLUMN "ID" SET DEFAULT nextval('public."ConversionCostProcess_ID_seq"'::regclass);
 K   ALTER TABLE public."ConversionCostProcess" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    209    208            �           2604    19668    CountryLocationMapping Id    DEFAULT     �   ALTER TABLE ONLY public."CountryLocationMapping" ALTER COLUMN "Id" SET DEFAULT nextval('public."CountryLocationMapping_Id_seq"'::regclass);
 L   ALTER TABLE public."CountryLocationMapping" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    353    354    354            �           2604    19677    DepartmentProfile Id    DEFAULT     �   ALTER TABLE ONLY public."DepartmentProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."DepartmentProfile_Id_seq"'::regclass);
 G   ALTER TABLE public."DepartmentProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    355    356    356            �           2604    19660    DepoLocationMapping Id    DEFAULT     �   ALTER TABLE ONLY public."DepoLocationMapping" ALTER COLUMN "Id" SET DEFAULT nextval('public."DepoLocationMapping_Id_seq"'::regclass);
 I   ALTER TABLE public."DepoLocationMapping" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    351    352    352            �           2604    19507    DiscountMethod Id    DEFAULT     |   ALTER TABLE ONLY public."DiscountMethod" ALTER COLUMN "Id" SET DEFAULT nextval('public."DiscountMethod_Id_seq"'::regclass);
 D   ALTER TABLE public."DiscountMethod" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    318    317    318            �           2604    19688    DivisionProfile Id    DEFAULT     ~   ALTER TABLE ONLY public."DivisionProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."DivisionProfile_Id_seq"'::regclass);
 E   ALTER TABLE public."DivisionProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    357    358    358            �           2604    18392    FabricCost FabricCostID    DEFAULT     �   ALTER TABLE ONLY public."FabricCost" ALTER COLUMN "FabricCostID" SET DEFAULT nextval('public."FabricCost_FabricCostID_seq"'::regclass);
 J   ALTER TABLE public."FabricCost" ALTER COLUMN "FabricCostID" DROP DEFAULT;
       public          postgres    false    211    210            �           2604    18393    FabricDesPreCost ID    DEFAULT     �   ALTER TABLE ONLY public."FabricDesPreCost" ALTER COLUMN "ID" SET DEFAULT nextval('public."FabricDesPreCost_ID_seq"'::regclass);
 F   ALTER TABLE public."FabricDesPreCost" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    213    212            �           2604    19531    FabricNature Id    DEFAULT     x   ALTER TABLE ONLY public."FabricNature" ALTER COLUMN "Id" SET DEFAULT nextval('public."FabricNature_Id_seq"'::regclass);
 B   ALTER TABLE public."FabricNature" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    324    323    324            �           2604    19699    GroupProfile Id    DEFAULT     x   ALTER TABLE ONLY public."GroupProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."GroupProfile_Id_seq"'::regclass);
 B   ALTER TABLE public."GroupProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    359    360    360            �           2604    18394 &   Input_Pannel_PODetails Input_Pannel_ID    DEFAULT     �   ALTER TABLE ONLY public."Input_Pannel_PODetails" ALTER COLUMN "Input_Pannel_ID" SET DEFAULT nextval('public."Input_Pannel_PODetails_Input_Pannel_ID_seq"'::regclass);
 Y   ALTER TABLE public."Input_Pannel_PODetails" ALTER COLUMN "Input_Pannel_ID" DROP DEFAULT;
       public          postgres    false    215    214            �           2604    19603    JournalType Id    DEFAULT     v   ALTER TABLE ONLY public."JournalType" ALTER COLUMN "Id" SET DEFAULT nextval('public."JournalType_Id_seq"'::regclass);
 A   ALTER TABLE public."JournalType" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    342    341    342            �           2604    19579 	   Months Id    DEFAULT     l   ALTER TABLE ONLY public."Months" ALTER COLUMN "Id" SET DEFAULT nextval('public."Months_Id_seq"'::regclass);
 <   ALTER TABLE public."Months" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    335    336    336            �           2604    18396    OrderItem ItemID    DEFAULT     z   ALTER TABLE ONLY public."OrderItem" ALTER COLUMN "ItemID" SET DEFAULT nextval('public."OrderItem_ItemID_seq"'::regclass);
 C   ALTER TABLE public."OrderItem" ALTER COLUMN "ItemID" DROP DEFAULT;
       public          postgres    false    217    216            �           2604    19720    OtherPartyProfile Id    DEFAULT     �   ALTER TABLE ONLY public."OtherPartyProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."OtherPartyProfile_Id_seq"'::regclass);
 G   ALTER TABLE public."OtherPartyProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    364    363    364            �           2604    19491    PageInfo Id    DEFAULT     p   ALTER TABLE ONLY public."PageInfo" ALTER COLUMN "Id" SET DEFAULT nextval('public."PageInfo_Id_seq"'::regclass);
 >   ALTER TABLE public."PageInfo" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    313    314    314            �           2604    18397    PreCosting PrecostingID    DEFAULT     �   ALTER TABLE ONLY public."PreCosting" ALTER COLUMN "PrecostingID" SET DEFAULT nextval('public."PreCosting_PrecostingID_seq"'::regclass);
 J   ALTER TABLE public."PreCosting" ALTER COLUMN "PrecostingID" DROP DEFAULT;
       public          postgres    false    219    218            �           2604    19555    ProductCategory Id    DEFAULT     ~   ALTER TABLE ONLY public."ProductCategory" ALTER COLUMN "Id" SET DEFAULT nextval('public."ProductCategory_Id_seq"'::regclass);
 E   ALTER TABLE public."ProductCategory" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    330    329    330            �           2604    19563    ProductType Id    DEFAULT     v   ALTER TABLE ONLY public."ProductType" ALTER COLUMN "Id" SET DEFAULT nextval('public."ProductType_Id_seq"'::regclass);
 A   ALTER TABLE public."ProductType" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    331    332    332            �           2604    19595    ProductionProcess Id    DEFAULT     �   ALTER TABLE ONLY public."ProductionProcess" ALTER COLUMN "Id" SET DEFAULT nextval('public."ProductionProcess_Id_seq"'::regclass);
 G   ALTER TABLE public."ProductionProcess" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    340    339    340            �           2604    19739    ProfitCenter Id    DEFAULT     x   ALTER TABLE ONLY public."ProfitCenter" ALTER COLUMN "Id" SET DEFAULT nextval('public."ProfitCenter_Id_seq"'::regclass);
 B   ALTER TABLE public."ProfitCenter" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    367    368    368            �           2604    19587    Resources Id    DEFAULT     r   ALTER TABLE ONLY public."Resources" ALTER COLUMN "Id" SET DEFAULT nextval('public."Resources_Id_seq"'::regclass);
 ?   ALTER TABLE public."Resources" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    338    337    338            �           2604    19547    SampleType Id    DEFAULT     t   ALTER TABLE ONLY public."SampleType" ALTER COLUMN "Id" SET DEFAULT nextval('public."SampleType_Id_seq"'::regclass);
 @   ALTER TABLE public."SampleType" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    327    328    328            �           2604    19750    SectionProfile Id    DEFAULT     |   ALTER TABLE ONLY public."SectionProfile" ALTER COLUMN "Id" SET DEFAULT nextval('public."SectionProfile_Id_seq"'::regclass);
 D   ALTER TABLE public."SectionProfile" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    370    369    370            �           2604    18398 $   Size_Pannel_PODetails Size_Pannel_ID    DEFAULT     �   ALTER TABLE ONLY public."Size_Pannel_PODetails" ALTER COLUMN "Size_Pannel_ID" SET DEFAULT nextval('public."Size_Pannel_PODetails_Size_Pannel_ID_seq"'::regclass);
 W   ALTER TABLE public."Size_Pannel_PODetails" ALTER COLUMN "Size_Pannel_ID" DROP DEFAULT;
       public          postgres    false    221    220            �           2604    18399 
   Suplier ID    DEFAULT     n   ALTER TABLE ONLY public."Suplier" ALTER COLUMN "ID" SET DEFAULT nextval('public."Suplier_ID_seq"'::regclass);
 =   ALTER TABLE public."Suplier" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    223    222            �           2604    18400    Suplyitem ID    DEFAULT     r   ALTER TABLE ONLY public."Suplyitem" ALTER COLUMN "ID" SET DEFAULT nextval('public."Suplyitem_ID_seq"'::regclass);
 ?   ALTER TABLE public."Suplyitem" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    225    224            �           2604    19761    TNATaskEntry Id    DEFAULT     x   ALTER TABLE ONLY public."TNATaskEntry" ALTER COLUMN "Id" SET DEFAULT nextval('public."TNATaskEntry_Id_seq"'::regclass);
 B   ALTER TABLE public."TNATaskEntry" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    372    371    372            �           2604    19769    TNATaskNameEntry Id    DEFAULT     �   ALTER TABLE ONLY public."TNATaskNameEntry" ALTER COLUMN "Id" SET DEFAULT nextval('public."TNATaskNameEntry_Id_seq"'::regclass);
 F   ALTER TABLE public."TNATaskNameEntry" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    374    373    374            �           2604    19641    TermsNCondition Id    DEFAULT     ~   ALTER TABLE ONLY public."TermsNCondition" ALTER COLUMN "Id" SET DEFAULT nextval('public."TermsNCondition_Id_seq"'::regclass);
 E   ALTER TABLE public."TermsNCondition" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    348    347    348            �           2604    19633    TermsNConditionSubTable Id    DEFAULT     �   ALTER TABLE ONLY public."TermsNConditionSubTable" ALTER COLUMN "Id" SET DEFAULT nextval('public."TermsNConditionSubTable_Id_seq"'::regclass);
 M   ALTER TABLE public."TermsNConditionSubTable" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    346    345    346            �           2604    19482    TrimsGroup Id    DEFAULT     t   ALTER TABLE ONLY public."TrimsGroup" ALTER COLUMN "Id" SET DEFAULT nextval('public."TrimsGroup_Id_seq"'::regclass);
 @   ALTER TABLE public."TrimsGroup" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    312    311    312            �           2604    19611    Type Id    DEFAULT     h   ALTER TABLE ONLY public."Type" ALTER COLUMN "Id" SET DEFAULT nextval('public."Type_Id_seq"'::regclass);
 :   ALTER TABLE public."Type" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    343    344    344            �           2604    19499    UOM Id    DEFAULT     f   ALTER TABLE ONLY public."UOM" ALTER COLUMN "Id" SET DEFAULT nextval('public."UOM_Id_seq"'::regclass);
 9   ALTER TABLE public."UOM" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    316    315    316            �           2604    19466    YarnBrand yarnBrandId    DEFAULT     �   ALTER TABLE ONLY public."YarnBrand" ALTER COLUMN "yarnBrandId" SET DEFAULT nextval('public."YarnBrand_yarnBrandId_seq"'::regclass);
 H   ALTER TABLE public."YarnBrand" ALTER COLUMN "yarnBrandId" DROP DEFAULT;
       public          postgres    false    309    308    309            �           2604    18401    YarnComp1 ID    DEFAULT     r   ALTER TABLE ONLY public."YarnComp1" ALTER COLUMN "ID" SET DEFAULT nextval('public."YarnComp1_ID_seq"'::regclass);
 ?   ALTER TABLE public."YarnComp1" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    227    226            �           2604    18402    YarnCostPreCosting ID    DEFAULT     �   ALTER TABLE ONLY public."YarnCostPreCosting" ALTER COLUMN "ID" SET DEFAULT nextval('public."YarnCostPreCosting_ID_seq"'::regclass);
 H   ALTER TABLE public."YarnCostPreCosting" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    229    228            �           2604    18403    YarnCount ID    DEFAULT     r   ALTER TABLE ONLY public."YarnCount" ALTER COLUMN "ID" SET DEFAULT nextval('public."YarnCount_ID_seq"'::regclass);
 ?   ALTER TABLE public."YarnCount" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    231    230            �           2604    18404    YarnType ID    DEFAULT     p   ALTER TABLE ONLY public."YarnType" ALTER COLUMN "ID" SET DEFAULT nextval('public."YarnType_ID_seq"'::regclass);
 >   ALTER TABLE public."YarnType" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    233    232            �           2604    19571    Years Id    DEFAULT     j   ALTER TABLE ONLY public."Years" ALTER COLUMN "Id" SET DEFAULT nextval('public."Years_Id_seq"'::regclass);
 ;   ALTER TABLE public."Years" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    333    334    334            �           2604    18405    avg_grey_cons_fabric_cost id    DEFAULT     �   ALTER TABLE ONLY public.avg_grey_cons_fabric_cost ALTER COLUMN id SET DEFAULT nextval('public.avg_grey_cons_fabric_cost_id_seq'::regclass);
 K   ALTER TABLE public.avg_grey_cons_fabric_cost ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234            �           2604    18406    commercial_cost id    DEFAULT     x   ALTER TABLE ONLY public.commercial_cost ALTER COLUMN id SET DEFAULT nextval('public.commercial_cost_id_seq'::regclass);
 A   ALTER TABLE public.commercial_cost ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    236            �           2604    18407    commission_cost_pre_costing id    DEFAULT     �   ALTER TABLE ONLY public.commission_cost_pre_costing ALTER COLUMN id SET DEFAULT nextval('public.commission_cost_id_seq'::regclass);
 M   ALTER TABLE public.commission_cost_pre_costing ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    239    238            �           2604    18408 #   cons_dzn_gmts_embellishment_cost id    DEFAULT     �   ALTER TABLE ONLY public.cons_dzn_gmts_embellishment_cost ALTER COLUMN id SET DEFAULT nextval('public.cons_dzn_gmts_embellishment_cost_id_seq'::regclass);
 R   ALTER TABLE public.cons_dzn_gmts_embellishment_cost ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    240            �           2604    18409    cons_dzn_gmts_wash_cost id    DEFAULT     �   ALTER TABLE ONLY public.cons_dzn_gmts_wash_cost ALTER COLUMN id SET DEFAULT nextval('public.cons_dzn_gmts_wash_cost_id_seq'::regclass);
 I   ALTER TABLE public.cons_dzn_gmts_wash_cost ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    243    242            �           2604    18410    cons_unit_gmts_trim_cost id    DEFAULT     �   ALTER TABLE ONLY public.cons_unit_gmts_trim_cost ALTER COLUMN id SET DEFAULT nextval('public.cons_unit_gmts_trim_cost_id_seq'::regclass);
 J   ALTER TABLE public.cons_unit_gmts_trim_cost ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    245    244            �           2604    18411 !   embellishment_cost_pre_costing id    DEFAULT     �   ALTER TABLE ONLY public.embellishment_cost_pre_costing ALTER COLUMN id SET DEFAULT nextval('public.embellishment_cost_id_seq'::regclass);
 P   ALTER TABLE public.embellishment_cost_pre_costing ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    247    246            �           2604    18412    item_details_order_entry id    DEFAULT     �   ALTER TABLE ONLY public.item_details_order_entry ALTER COLUMN id SET DEFAULT nextval('public.item_details_order_entry_id_seq'::regclass);
 J   ALTER TABLE public.item_details_order_entry ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    249    248            �           2604    19712    itemcategory id    DEFAULT     r   ALTER TABLE ONLY public.itemcategory ALTER COLUMN id SET DEFAULT nextval('public.itemcategory_id_seq'::regclass);
 >   ALTER TABLE public.itemcategory ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    362    361    362            �           2604    18413    other_cost_pre_costing id    DEFAULT     �   ALTER TABLE ONLY public.other_cost_pre_costing ALTER COLUMN id SET DEFAULT nextval('public.other_cost_pre_costing_id_seq'::regclass);
 H   ALTER TABLE public.other_cost_pre_costing ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    251    250            �           2604    18414    parsial_fabric_booking_items id    DEFAULT     �   ALTER TABLE ONLY public.parsial_fabric_booking_items ALTER COLUMN id SET DEFAULT nextval('public.parsial_fabric_booking_items_id_seq'::regclass);
 N   ALTER TABLE public.parsial_fabric_booking_items ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    253    252            �           2604    18415     parsial_fabric_booking_master id    DEFAULT     �   ALTER TABLE ONLY public.parsial_fabric_booking_master ALTER COLUMN id SET DEFAULT nextval('public.parsial_fabric_booking_master_id_seq'::regclass);
 O   ALTER TABLE public.parsial_fabric_booking_master ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    255    254            �           2604    19731    partytype id    DEFAULT     l   ALTER TABLE ONLY public.partytype ALTER COLUMN id SET DEFAULT nextval('public.partytype_id_seq'::regclass);
 ;   ALTER TABLE public.partytype ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    365    366    366            �           2604    18416    tblAgentInfo AgentID    DEFAULT     �   ALTER TABLE ONLY public."tblAgentInfo" ALTER COLUMN "AgentID" SET DEFAULT nextval('public."tblAgentInfo_AgentID_seq"'::regclass);
 G   ALTER TABLE public."tblAgentInfo" ALTER COLUMN "AgentID" DROP DEFAULT;
       public          postgres    false    257    256            �           2604    18417    tblBuyerInfo BuyerID    DEFAULT     �   ALTER TABLE ONLY public."tblBuyerInfo" ALTER COLUMN "BuyerID" SET DEFAULT nextval('public."tblBuyerInfo_BuyerID_seq"'::regclass);
 G   ALTER TABLE public."tblBuyerInfo" ALTER COLUMN "BuyerID" DROP DEFAULT;
       public          postgres    false    259    258            �           2604    18418    tblCompanyInfo CompID    DEFAULT     �   ALTER TABLE ONLY public."tblCompanyInfo" ALTER COLUMN "CompID" SET DEFAULT nextval('public."tblCompanyInfo_CompID_seq"'::regclass);
 H   ALTER TABLE public."tblCompanyInfo" ALTER COLUMN "CompID" DROP DEFAULT;
       public          postgres    false    261    260            �           2604    18419    tblCurrencyInfo CurrencyID    DEFAULT     �   ALTER TABLE ONLY public."tblCurrencyInfo" ALTER COLUMN "CurrencyID" SET DEFAULT nextval('public."tblCurrencyInfo_CurrencyID_seq"'::regclass);
 M   ALTER TABLE public."tblCurrencyInfo" ALTER COLUMN "CurrencyID" DROP DEFAULT;
       public          postgres    false    263    262            �           2604    18420    tblDealingMrcndiserInfo ID    DEFAULT     �   ALTER TABLE ONLY public."tblDealingMrcndiserInfo" ALTER COLUMN "ID" SET DEFAULT nextval('public."tblDealingMrcndiserInfo_ID_seq"'::regclass);
 M   ALTER TABLE public."tblDealingMrcndiserInfo" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    265    264            �           2604    18421    tblDepartInfo DepID    DEFAULT     �   ALTER TABLE ONLY public."tblDepartInfo" ALTER COLUMN "DepID" SET DEFAULT nextval('public."tblDepartInfo_DepID_seq"'::regclass);
 F   ALTER TABLE public."tblDepartInfo" ALTER COLUMN "DepID" DROP DEFAULT;
       public          postgres    false    267    266            �           2604    18422    tblInitialOrder OrderAutoID    DEFAULT     �   ALTER TABLE ONLY public."tblInitialOrder" ALTER COLUMN "OrderAutoID" SET DEFAULT nextval('public."tblInitialOrder_OrderAutoID_seq"'::regclass);
 N   ALTER TABLE public."tblInitialOrder" ALTER COLUMN "OrderAutoID" DROP DEFAULT;
       public          postgres    false    269    268            �           2604    18423    tblLocationInfo LocationId    DEFAULT     �   ALTER TABLE ONLY public."tblLocationInfo" ALTER COLUMN "LocationId" SET DEFAULT nextval('public."tblLocationInfo_LocationId_seq"'::regclass);
 M   ALTER TABLE public."tblLocationInfo" ALTER COLUMN "LocationId" DROP DEFAULT;
       public          postgres    false    271    270            �           2604    18424    tblOrderUomInfo UOMID    DEFAULT     �   ALTER TABLE ONLY public."tblOrderUomInfo" ALTER COLUMN "UOMID" SET DEFAULT nextval('public."tblOrderUomInfo_UOMID_seq"'::regclass);
 H   ALTER TABLE public."tblOrderUomInfo" ALTER COLUMN "UOMID" DROP DEFAULT;
       public          postgres    false    273    272            �           2604    18425    tblPODetailsInfro PoDetID    DEFAULT     �   ALTER TABLE ONLY public."tblPODetailsInfro" ALTER COLUMN "PoDetID" SET DEFAULT nextval('public."tblPODetailsInfro_PoDetID_seq"'::regclass);
 L   ALTER TABLE public."tblPODetailsInfro" ALTER COLUMN "PoDetID" DROP DEFAULT;
       public          postgres    false    275    274            �           2604    18426    tblPackingInfo PackingID    DEFAULT     �   ALTER TABLE ONLY public."tblPackingInfo" ALTER COLUMN "PackingID" SET DEFAULT nextval('public."tblPackingInfo_PackingID_seq"'::regclass);
 K   ALTER TABLE public."tblPackingInfo" ALTER COLUMN "PackingID" DROP DEFAULT;
       public          postgres    false    277    276            �           2604    18427    tblPoOrderStatusInfo ID    DEFAULT     �   ALTER TABLE ONLY public."tblPoOrderStatusInfo" ALTER COLUMN "ID" SET DEFAULT nextval('public."tblPoOrderStatusInfo_ID_seq"'::regclass);
 J   ALTER TABLE public."tblPoOrderStatusInfo" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    279    278            �           2604    18428    tblPoStatus ID    DEFAULT     v   ALTER TABLE ONLY public."tblPoStatus" ALTER COLUMN "ID" SET DEFAULT nextval('public."tblPoStatus_ID_seq"'::regclass);
 A   ALTER TABLE public."tblPoStatus" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    281    280            �           2604    18429     tblProductCategoryInfo ProdCatId    DEFAULT     �   ALTER TABLE ONLY public."tblProductCategoryInfo" ALTER COLUMN "ProdCatId" SET DEFAULT nextval('public."tblProductCategoryInfo_ProdCatId_seq"'::regclass);
 S   ALTER TABLE public."tblProductCategoryInfo" ALTER COLUMN "ProdCatId" DROP DEFAULT;
       public          postgres    false    283    282            �           2604    18430    tblProductionDeptInfo ID    DEFAULT     �   ALTER TABLE ONLY public."tblProductionDeptInfo" ALTER COLUMN "ID" SET DEFAULT nextval('public."tblProductionDeptInfo_ID_seq"'::regclass);
 K   ALTER TABLE public."tblProductionDeptInfo" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    285    284            �           2604    18431    tblRegionInfo RegionID    DEFAULT     �   ALTER TABLE ONLY public."tblRegionInfo" ALTER COLUMN "RegionID" SET DEFAULT nextval('public."tblRegionInfo_RegionID_seq"'::regclass);
 I   ALTER TABLE public."tblRegionInfo" ALTER COLUMN "RegionID" DROP DEFAULT;
       public          postgres    false    287    286            �           2604    18432    tblSeasonInfo SeasonID    DEFAULT     �   ALTER TABLE ONLY public."tblSeasonInfo" ALTER COLUMN "SeasonID" SET DEFAULT nextval('public."tblSeasonInfo_SeasonID_seq"'::regclass);
 I   ALTER TABLE public."tblSeasonInfo" ALTER COLUMN "SeasonID" DROP DEFAULT;
       public          postgres    false    289    288            �           2604    18433    tblShipmentModeInfo ID    DEFAULT     �   ALTER TABLE ONLY public."tblShipmentModeInfo" ALTER COLUMN "ID" SET DEFAULT nextval('public."tblShipmentModeInfo_ID_seq"'::regclass);
 I   ALTER TABLE public."tblShipmentModeInfo" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    291    290            �           2604    18434    tblSubDeptInfo SubDeptID    DEFAULT     �   ALTER TABLE ONLY public."tblSubDeptInfo" ALTER COLUMN "SubDeptID" SET DEFAULT nextval('public."tblSubDeptInfo_SubDeptID_seq"'::regclass);
 K   ALTER TABLE public."tblSubDeptInfo" ALTER COLUMN "SubDeptID" DROP DEFAULT;
       public          postgres    false    293    292            �           2604    18435    tblUserTypeInfo UserTypeID    DEFAULT     �   ALTER TABLE ONLY public."tblUserTypeInfo" ALTER COLUMN "UserTypeID" SET DEFAULT nextval('public."tblUserTypeInfo_UserTypeID_seq"'::regclass);
 M   ALTER TABLE public."tblUserTypeInfo" ALTER COLUMN "UserTypeID" DROP DEFAULT;
       public          postgres    false    297    296            �           2604    18436    trim_cost_pre_costing id    DEFAULT     �   ALTER TABLE ONLY public.trim_cost_pre_costing ALTER COLUMN id SET DEFAULT nextval('public.trim_cost_pre_costing_id_seq'::regclass);
 G   ALTER TABLE public.trim_cost_pre_costing ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    299    298            �           2604    18437    wash_cost_pre_costing id    DEFAULT     x   ALTER TABLE ONLY public.wash_cost_pre_costing ALTER COLUMN id SET DEFAULT nextval('public.wash_cost_id_seq'::regclass);
 G   ALTER TABLE public.wash_cost_pre_costing ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    303    302                      0    19646    BodyPartEntry 
   TABLE DATA           ~   COPY public."BodyPartEntry" ("Id", "BodyPartFullName", "BodyPartShortName", "EntryPages", "BodyPartType", status) FROM stdin;
    public          postgres    false    350   ��                 0    19512    BodyPartType 
   TABLE DATA           J   COPY public."BodyPartType" ("Id", "BodyPartTypeName", status) FROM stdin;
    public          postgres    false    320   �      �          0    18071    BodyPartofPreCosting 
   TABLE DATA           L   COPY public."BodyPartofPreCosting" ("ID", "Item_Group", "Type") FROM stdin;
    public          postgres    false    204   �                0    19536 
   ColorRange 
   TABLE DATA           F   COPY public."ColorRange" ("Id", "ColorRangeName", status) FROM stdin;
    public          postgres    false    326   ^�                0    19520    CommercialInvoice 
   TABLE DATA           T   COPY public."CommercialInvoice" ("Id", "CommercialInvoiceName", status) FROM stdin;
    public          postgres    false    322   ��      �          0    19469    Composition 
   TABLE DATA           J   COPY public."Composition" ("Id", "CompositionName", "Status") FROM stdin;
    public          postgres    false    310   ��      �          0    18076    ConversionCostPreCosting 
   TABLE DATA           �   COPY public."ConversionCostPreCosting" ("ConversionCostID", "PreCostingID", "FabDescID", "ConversionProcessID", "ProcessLoss", "ReqQty", "AvgReqQty", "Charge/Unit", "Amount", "Status") FROM stdin;
    public          postgres    false    206   ��      �          0    18081    ConversionCostProcess 
   TABLE DATA           ?   COPY public."ConversionCostProcess" ("ID", "Name") FROM stdin;
    public          postgres    false    208   ɞ      �          0    19428    CostComponenetsMasterDetails 
   TABLE DATA           �   COPY public."CostComponenetsMasterDetails" ("JobNoId", "PoNoId", "CostComponetId", "BudgetedCost", "QPrice", "CostComponentName") FROM stdin;
    public          postgres    false    306   �      �          0    19417    CostComponentsMaster 
   TABLE DATA           K   COPY public."CostComponentsMaster" ("Id", "Cost_ComponetName") FROM stdin;
    public          postgres    false    305   4�      "          0    19665    CountryLocationMapping 
   TABLE DATA           \   COPY public."CountryLocationMapping" ("Id", "CountryId", "UltimateCountryName") FROM stdin;
    public          postgres    false    354   5�      $          0    19674    DepartmentProfile 
   TABLE DATA           �   COPY public."DepartmentProfile" ("Id", "DepartmentName", "ShortName", "Division", "Address", "ContactNumber", "ContactPerson", "Remark", "CountryId", "Website", "Status", "Email") FROM stdin;
    public          postgres    false    356   Y�                 0    19657    DepoLocationMapping 
   TABLE DATA           r   COPY public."DepoLocationMapping" ("Id", "CountryId", "UltimateCountryId", "CountryDepoName", status) FROM stdin;
    public          postgres    false    352   v�      �          0    19504    DiscountMethod 
   TABLE DATA           N   COPY public."DiscountMethod" ("Id", "DiscountMethodName", status) FROM stdin;
    public          postgres    false    318   ��      &          0    19685    DivisionProfile 
   TABLE DATA           �   COPY public."DivisionProfile" ("Id", "DivisionName", "ShortName", "CompanyId", "Address", "ContactNumber", "Remark", "CountryId", "Website", "Status", "Email") FROM stdin;
    public          postgres    false    358   	�      �          0    18086 
   FabricCost 
   TABLE DATA           S  COPY public."FabricCost" ("FabricCostID", "PreCostingID", "BodyPartID", "BodyPartType", "FabNature", "ColorType", "FabDescID", "Fabric_SOurce", "Nominated_Supplier_ID", "WidthorDiaType", "GSMorWeight", "ColornSizenSensitive", "Color", "Consumption_Basis", "Uom", "Avg_Grey_Cons", "Rate", "Amount", "Total_Qty", "Total_Amount") FROM stdin;
    public          postgres    false    210   &�      �          0    18094    FabricDesPreCost 
   TABLE DATA           �   COPY public."FabricDesPreCost" ("ID", "FabNature", "Construction", "GSM/Weight", "ColorRange", "StichLength", "ProcessLoss", "Composition") FROM stdin;
    public          postgres    false    212   C�                0    19528    FabricNature 
   TABLE DATA           J   COPY public."FabricNature" ("Id", "FabricNatureName", status) FROM stdin;
    public          postgres    false    324   Т      (          0    19696    GroupProfile 
   TABLE DATA           �   COPY public."GroupProfile" ("Id", "GroupName", "ContactPerson", "ContactNumber", "CountryId", "Website", "Email", "Address", "Remark", "Status") FROM stdin;
    public          postgres    false    360   �      �          0    18102    Input_Pannel_PODetails 
   TABLE DATA           �   COPY public."Input_Pannel_PODetails" ("Input_Pannel_ID", "Po_details_ID", "CountryID", "Country_Type", "Cutt-off_Date", "Cutt_off", "Country_Shipment_date", "Remarks", "Packing_ID", "Quantity") FROM stdin;
    public          postgres    false    214   0�                0    19600    JournalType 
   TABLE DATA           H   COPY public."JournalType" ("Id", "JournalTypeName", status) FROM stdin;
    public          postgres    false    342   ��                0    19576    Months 
   TABLE DATA           L   COPY public."Months" ("Id", "MonthName", "MonthNumber", status) FROM stdin;
    public          postgres    false    336   m�      �          0    19408    OrderImageUploadTable 
   TABLE DATA           e   COPY public."OrderImageUploadTable" ("OrderImageId", "OrderImageName", "OrderImagePath") FROM stdin;
    public          postgres    false    304   �      �          0    18118 	   OrderItem 
   TABLE DATA           7   COPY public."OrderItem" ("ItemID", "Name") FROM stdin;
    public          postgres    false    216   r�      ,          0    19717    OtherPartyProfile 
   TABLE DATA           �   COPY public."OtherPartyProfile" ("Id", "OtherPartyName", "ShortName", "Address", "ContactPerson", "CountryNameId", "Designation", "Remark", "ContactNo", "Status", "Email", "URLName", "ImageName", "ImagePathName") FROM stdin;
    public          postgres    false    364   ��      �          0    19488    PageInfo 
   TABLE DATA           J   COPY public."PageInfo" ("Id", "PageName", "PageLink", status) FROM stdin;
    public          postgres    false    314   ¥      �          0    18123 
   PreCosting 
   TABLE DATA           �  COPY public."PreCosting" ("PrecostingID", "OrderID", "Costing_Date", "Incoterm", "Incoterm_place", "eR", "CutSMV", "SewSMV", "QuotationId", "ApprovedId", "currencyId", "jobQty", "companyId", "orderUOMId", "RegionId", "BudgetMinuite", "StyleRef", "StyleDesc", "Remark", agent, "machineLine", "prodLineHr", "ReadyToApproved", "imagesPath", "Fileno", "internalRef", "CopyFrom", "Unapproverequest", "PoId", "BuyerId", "CutEfficiency", "Sew_Efficiency") FROM stdin;
    public          postgres    false    218   �      
          0    19552    ProductCategory 
   TABLE DATA           P   COPY public."ProductCategory" ("Id", "ProductCategoryName", status) FROM stdin;
    public          postgres    false    330   i�                0    19560    ProductType 
   TABLE DATA           H   COPY public."ProductType" ("Id", "ProductTypeName", status) FROM stdin;
    public          postgres    false    332   Ц                0    19592    ProductionProcess 
   TABLE DATA           T   COPY public."ProductionProcess" ("Id", "ProductionProcessName", status) FROM stdin;
    public          postgres    false    340   ��      0          0    19736    ProfitCenter 
   TABLE DATA           �   COPY public."ProfitCenter" ("Id", "ProfitCenterName", "Company", "Address", "ContactNumber", "ContactPerson", "Remark", "CountryId", "Website", "Status", "Email") FROM stdin;
    public          postgres    false    368   ��                0    19584 	   Resources 
   TABLE DATA           C   COPY public."Resources" ("Id", "ResourceName", status) FROM stdin;
    public          postgres    false    338   ɧ                0    19544 
   SampleType 
   TABLE DATA           F   COPY public."SampleType" ("Id", "SampleTypeName", status) FROM stdin;
    public          postgres    false    328   S�      2          0    19747    SectionProfile 
   TABLE DATA           �   COPY public."SectionProfile" ("Id", "SectionName", "ShortName", "DepartmentId", "Address", "ContactNumber", "ContactPerson", "Remark", "CountryId", "Website", "Status", "Email") FROM stdin;
    public          postgres    false    370   �      �          0    19453 	   SizeEntry 
   TABLE DATA           N   COPY public."SizeEntry" ("Id", "Sequence", "Status", "SinzeName") FROM stdin;
    public          postgres    false    307   	�      �          0    18128    Size_Pannel_PODetails 
   TABLE DATA           �   COPY public."Size_Pannel_PODetails" ("Size_Pannel_ID", "Input_Pannel_ID", "ItemID", "Article_Number", "Color", "Size", "Quanity", "Rate", "Amount", "ExcessCut", "PlanCutQty", "Status", "BarCode") FROM stdin;
    public          postgres    false    220   :�      �          0    18133    Suplier 
   TABLE DATA           �   COPY public."Suplier" ("ID", "Name", "Designation", "CompanyName", "ContactPerson", "ContactPersionDesignation", "SuplierType", "SuplyItemID", "Nominated") FROM stdin;
    public          postgres    false    222   ��      �          0    18141 	   Suplyitem 
   TABLE DATA           B   COPY public."Suplyitem" ("ID", "Name", "Description") FROM stdin;
    public          postgres    false    224   E�      4          0    19758    TNATaskEntry 
   TABLE DATA           �   COPY public."TNATaskEntry" ("Id", "TaskNameId", "TaskShortName", "Penalty", "SequenceNo", "Completion%", "GroupName", "Status", "GroupSeqNo") FROM stdin;
    public          postgres    false    372   ��      6          0    19766    TNATaskNameEntry 
   TABLE DATA           K   COPY public."TNATaskNameEntry" ("Id", "TNATaskName", "Status") FROM stdin;
    public          postgres    false    374   ��                0    19638    TermsNCondition 
   TABLE DATA           c   COPY public."TermsNCondition" ("Id", "TermsnCondition", "MoreTermsNCondition", status) FROM stdin;
    public          postgres    false    348   ׭                0    19630    TermsNConditionSubTable 
   TABLE DATA           e   COPY public."TermsNConditionSubTable" ("Id", "TermsNConditionId", "PageId", "PageNames") FROM stdin;
    public          postgres    false    346   �      �          0    19479 
   TrimsGroup 
   TABLE DATA           F   COPY public."TrimsGroup" ("Id", "TrimsGroupName", status) FROM stdin;
    public          postgres    false    312   J�                0    19608    Type 
   TABLE DATA           :   COPY public."Type" ("Id", "TypeName", status) FROM stdin;
    public          postgres    false    344   }�      �          0    19496    UOM 
   TABLE DATA           8   COPY public."UOM" ("Id", "UomName", status) FROM stdin;
    public          postgres    false    316   W�      �          0    19463 	   YarnBrand 
   TABLE DATA           [   COPY public."YarnBrand" ("yarnBrandId", "yarnBrandName", "sequenceNo", status) FROM stdin;
    public          postgres    false    309   ÷      �          0    18146 	   YarnComp1 
   TABLE DATA           3   COPY public."YarnComp1" ("ID", "Name") FROM stdin;
    public          postgres    false    226   ��      �          0    18151    YarnCostPreCosting 
   TABLE DATA           �   COPY public."YarnCostPreCosting" ("ID", "PreCostingID", "CountID", "Comp1ID", "Percent", "YarnTypeID", "ConsQnty", "SupplierID", "Rate", "Amont") FROM stdin;
    public          postgres    false    228   8�      �          0    18156 	   YarnCount 
   TABLE DATA           I   COPY public."YarnCount" ("ID", "Name", "Sequence", "Status") FROM stdin;
    public          postgres    false    230   U�      �          0    18161    YarnType 
   TABLE DATA           A   COPY public."YarnType" ("ID", "Type", "Description") FROM stdin;
    public          postgres    false    232   ��                0    19568    Years 
   TABLE DATA           7   COPY public."Years" ("Id", "Year", status) FROM stdin;
    public          postgres    false    334   ͸      �          0    18166    avg_grey_cons_fabric_cost 
   TABLE DATA           �   COPY public.avg_grey_cons_fabric_cost (id, precosting_id, febric_cost_id, po_no, color, gmts_sizes, dia, item_sizes, finish_cons, process_loss, grey_cons, rate, amount, pcs, total_qty, total_amount, remarks) FROM stdin;
    public          postgres    false    234   O�      �          0    18174    commercial_cost 
   TABLE DATA           [   COPY public.commercial_cost (id, precosting_id, item, rate_in, amount, status) FROM stdin;
    public          postgres    false    236   l�      �          0    18182    commission_cost_pre_costing 
   TABLE DATA           }   COPY public.commission_cost_pre_costing (id, precosting_id, particulars, commn_base, commn_rate, amount, status) FROM stdin;
    public          postgres    false    238   ��      �          0    18190     cons_dzn_gmts_embellishment_cost 
   TABLE DATA           �   COPY public.cons_dzn_gmts_embellishment_cost (id, embellishment_cost_id, po_no, country, gmts_item, gmts_color, gmts_sizes, cons, rate, amount) FROM stdin;
    public          postgres    false    240   ��      �          0    18198    cons_dzn_gmts_wash_cost 
   TABLE DATA           �   COPY public.cons_dzn_gmts_wash_cost (id, wash_cost_id, po_no, country, gmts_item, gmts_color, gmts_sizes, cons, rate, amount) FROM stdin;
    public          postgres    false    242   ù      �          0    18206    cons_unit_gmts_trim_cost 
   TABLE DATA           �   COPY public.cons_unit_gmts_trim_cost (id, trim_cost_id, po_no, gmts_item, country, gmts_color, gmts_sizes, item_sizes, cons, ex_percentage, tot_cons, rate, amount, total_qty, total_amount, placement, pcs) FROM stdin;
    public          postgres    false    244   �      �          0    18214    embellishment_cost_pre_costing 
   TABLE DATA           �   COPY public.embellishment_cost_pre_costing (id, precosting_id, name, type, body_part, country, emb_supplier, cons_dzn_gmts, rate, amount, status) FROM stdin;
    public          postgres    false    246   ��      �          0    18222    item_details_order_entry 
   TABLE DATA           %  COPY public.item_details_order_entry (id, order_entry_id, item, ratio, sew_smv_pcs, cut_smv_pcs, fin_smv_pcs, complexity, print, embro_yes_no, embro_number, wash_yes_no, wash_number, sp_works_yes_no, sp_works_number, gmts_dyeing_yes_no, gmts_dyeing_number, aop_yes_no, aop_number) FROM stdin;
    public          postgres    false    248   �      *          0    19709    itemcategory 
   TABLE DATA           D   COPY public.itemcategory (id, itemcategoryname, status) FROM stdin;
    public          postgres    false    362   Ǻ      �          0    18230    other_cost_pre_costing 
   TABLE DATA           w   COPY public.other_cost_pre_costing (id, pre_costing_id, cost_component, budgeted_cost, percentage_q_price) FROM stdin;
    public          postgres    false    250   �      �          0    18235    parsial_fabric_booking_items 
   TABLE DATA           �   COPY public.parsial_fabric_booking_items (id, order_id, booking_master_id, po_number, body_part, color_type, dia_width_type, construction, composition, gsm, gmts_color, item_color, dia, wo_qnty, adj_qnty, ac_wo_qnty, rate, amount) FROM stdin;
    public          postgres    false    252   �      �          0    18243    parsial_fabric_booking_master 
   TABLE DATA           �  COPY public.parsial_fabric_booking_master (id, booking_no, booking_month, booking_year, company_name, buyer_name, fabric_nature, fabric_source, booking_date, delivery_date, pay_mode, supplier_name, currency, exchange_rate, source, attention, booking_percent, collar_excess_cut_percentage, cuff_excess_cut_percentage, ready_to_approved, internal_ref_no, file_no, un_approve_request, fabric_composition, level, remarks) FROM stdin;
    public          postgres    false    254   �      .          0    19728 	   partytype 
   TABLE DATA           >   COPY public.partytype (id, partytypename, status) FROM stdin;
    public          postgres    false    366   ��      �          0    18251    tblAgentInfo 
   TABLE DATA           A   COPY public."tblAgentInfo" ("AgentID", "Agent_Name") FROM stdin;
    public          postgres    false    256   Ļ      �          0    18256    tblBuyerInfo 
   TABLE DATA           L   COPY public."tblBuyerInfo" ("BuyerID", "Buyer_Name", "Details") FROM stdin;
    public          postgres    false    258   �      �          0    18261    tblCompanyInfo 
   TABLE DATA           O   COPY public."tblCompanyInfo" ("CompID", "Company_Name", "Details") FROM stdin;
    public          postgres    false    260   >�      �          0    18266    tblCurrencyInfo 
   TABLE DATA           J   COPY public."tblCurrencyInfo" ("CurrencyID", "Currency_Name") FROM stdin;
    public          postgres    false    262   ��      �          0    18271    tblDealingMrcndiserInfo 
   TABLE DATA           S   COPY public."tblDealingMrcndiserInfo" ("ID", "TeamleaderID", "UserID") FROM stdin;
    public          postgres    false    264   Ѽ      �          0    18276    tblDepartInfo 
   TABLE DATA           P   COPY public."tblDepartInfo" ("DepID", "Department_Name", "Details") FROM stdin;
    public          postgres    false    266   �      �          0    18281    tblInitialOrder 
   TABLE DATA           �  COPY public."tblInitialOrder" ("OrderAutoID", "JobNo", "CompanyID", "LocationID", "BuyerID", "Style_Ref", "Style_Description", "Prod_DeptID", "Sub_DeptID", "CurrencyID", "RegionID", "Product_CatID", "Team_Leader_ID", "Dealing_Merchant_ID", "BH_Merchant", "Remarks", "Shipment_Mode_ID", "Order_Uom_ID", "SMV", "Packing_ID", "Season_ID", "Agent_ID", "UserID", "Repeat_No_Job", "Order_Number", "OrderImagePath") FROM stdin;
    public          postgres    false    268   [�      �          0    18289    tblLocationInfo 
   TABLE DATA           J   COPY public."tblLocationInfo" ("LocationId", "Location_Name") FROM stdin;
    public          postgres    false    270   j�      �          0    18294    tblOrderUomInfo 
   TABLE DATA           F   COPY public."tblOrderUomInfo" ("UOMID", "Order_Uom_Name") FROM stdin;
    public          postgres    false    272   ��      �          0    18299    tblPODetailsInfro 
   TABLE DATA           }  COPY public."tblPODetailsInfro" ("PoDetID", "InitialOrderID", "POOrderStatusID", "PO_No", "PO_Received_Date", "Pub_Shipment_Date", "Org_Shipment_Date", "Fac_Receive_Date", "PO_Quantity", "Avg_Price", "Amount", "Excess_Cut", "Plan_Cut", "PoStatusID", "Projected_Po", "TNA_FromOrUpto", "Internal_RefOrGrouping", "Delay_For", "Packing_ID", "File_No", "SCorLC", "Remarks") FROM stdin;
    public          postgres    false    274   �      �          0    18307    tblPackingInfo 
   TABLE DATA           G   COPY public."tblPackingInfo" ("PackingID", "Packing_Name") FROM stdin;
    public          postgres    false    276   1�      �          0    18312    tblPoOrderStatusInfo 
   TABLE DATA           F   COPY public."tblPoOrderStatusInfo" ("ID", "Order_Status") FROM stdin;
    public          postgres    false    278   y�      �          0    18317    tblPoStatus 
   TABLE DATA           7   COPY public."tblPoStatus" ("ID", "Status") FROM stdin;
    public          postgres    false    280   ��      �          0    18322    tblProductCategoryInfo 
   TABLE DATA           T   COPY public."tblProductCategoryInfo" ("ProdCatId", "ProdCategory_Name") FROM stdin;
    public          postgres    false    282   �      �          0    18327    tblProductionDeptInfo 
   TABLE DATA           X   COPY public."tblProductionDeptInfo" ("ID", "ProdDeptName", "Department_Id") FROM stdin;
    public          postgres    false    284   >�      �          0    18332    tblRegionInfo 
   TABLE DATA           D   COPY public."tblRegionInfo" ("RegionID", "Region_Name") FROM stdin;
    public          postgres    false    286   ��      �          0    18337    tblSeasonInfo 
   TABLE DATA           D   COPY public."tblSeasonInfo" ("SeasonID", "Season_Name") FROM stdin;
    public          postgres    false    288   ��      �          0    18342    tblShipmentModeInfo 
   TABLE DATA           F   COPY public."tblShipmentModeInfo" ("ID", "Shipment_Mode") FROM stdin;
    public          postgres    false    290   5�      �          0    18347    tblSubDeptInfo 
   TABLE DATA           X   COPY public."tblSubDeptInfo" ("SubDeptID", "Sub_dept_Name", "DepartmentID") FROM stdin;
    public          postgres    false    292   w�      �          0    18352    tblTeamlederInfoes 
   TABLE DATA           H   COPY public."tblTeamlederInfoes" ("TeamleaderID", "UserID") FROM stdin;
    public          postgres    false    294   ��      �          0    18355    tblUserInfo 
   TABLE DATA           �   COPY public."tblUserInfo" ("UserID", "FullName", "Email", "Contact", "RegDate", "UserName", "UserPassword", "UserTypeID", "DeptId") FROM stdin;
    public          postgres    false    295   ��      �          0    18358    tblUserTypeInfo 
   TABLE DATA           E   COPY public."tblUserTypeInfo" ("UserTypeID", "UserType") FROM stdin;
    public          postgres    false    296   X�      �          0    18363    trim_cost_pre_costing 
   TABLE DATA           �   COPY public.trim_cost_pre_costing (id, precosting_id, group_name, country, description, band_sup_ref, remarks, nominated_supp, cons_uom, cons_unit_gmts, rate, amount, total_qty, total_amount, apvl_req, image) FROM stdin;
    public          postgres    false    298   ��      �          0    18381    wash_cost_pre_costing 
   TABLE DATA           |   COPY public.wash_cost_pre_costing (id, precosting_id, name, type, country, cons_dzn_gmts, rate, amount, status) FROM stdin;
    public          postgres    false    302   ��      �           0    0    BodyPartEntry_Id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."BodyPartEntry_Id_seq"', 4, true);
          public          postgres    false    349            �           0    0    BodyPartType_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."BodyPartType_Id_seq"', 2, true);
          public          postgres    false    319            �           0    0    BodyPartofPreCosting_ID_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."BodyPartofPreCosting_ID_seq"', 1, false);
          public          postgres    false    205            �           0    0    ColorRange_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."ColorRange_Id_seq"', 12, true);
          public          postgres    false    325            �           0    0    CommercialInvoice_Id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."CommercialInvoice_Id_seq"', 20, true);
          public          postgres    false    321            �           0    0 -   ConversionCostPreCosting_ConversionCostID_seq    SEQUENCE SET     ^   SELECT pg_catalog.setval('public."ConversionCostPreCosting_ConversionCostID_seq"', 28, true);
          public          postgres    false    207            �           0    0    ConversionCostProcess_ID_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."ConversionCostProcess_ID_seq"', 1, false);
          public          postgres    false    209            �           0    0    CountryLocationMapping_Id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."CountryLocationMapping_Id_seq"', 1, true);
          public          postgres    false    353            �           0    0    DepartmentProfile_Id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."DepartmentProfile_Id_seq"', 1, false);
          public          postgres    false    355            �           0    0    DepoLocationMapping_Id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."DepoLocationMapping_Id_seq"', 3, true);
          public          postgres    false    351            �           0    0    DiscountMethod_Id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."DiscountMethod_Id_seq"', 8, true);
          public          postgres    false    317            �           0    0    DivisionProfile_Id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."DivisionProfile_Id_seq"', 1, false);
          public          postgres    false    357            �           0    0    FabricCost_FabricCostID_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."FabricCost_FabricCostID_seq"', 20, true);
          public          postgres    false    211            �           0    0    FabricDesPreCost_ID_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."FabricDesPreCost_ID_seq"', 1, false);
          public          postgres    false    213            �           0    0    FabricNature_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."FabricNature_Id_seq"', 2, true);
          public          postgres    false    323            �           0    0    GroupProfile_Id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."GroupProfile_Id_seq"', 1, false);
          public          postgres    false    359            �           0    0 *   Input_Pannel_PODetails_Input_Pannel_ID_seq    SEQUENCE SET     \   SELECT pg_catalog.setval('public."Input_Pannel_PODetails_Input_Pannel_ID_seq"', 163, true);
          public          postgres    false    215            �           0    0    JournalType_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."JournalType_Id_seq"', 15, true);
          public          postgres    false    341            �           0    0    Months_Id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Months_Id_seq"', 13, true);
          public          postgres    false    335            �           0    0    OrderItem_ItemID_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."OrderItem_ItemID_seq"', 3, true);
          public          postgres    false    217            �           0    0    OtherPartyProfile_Id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."OtherPartyProfile_Id_seq"', 1, false);
          public          postgres    false    363            �           0    0    PageInfo_Id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."PageInfo_Id_seq"', 3, true);
          public          postgres    false    313            �           0    0    PreCosting_PrecostingID_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."PreCosting_PrecostingID_seq"', 30, true);
          public          postgres    false    219            �           0    0    ProductCategory_Id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."ProductCategory_Id_seq"', 7, true);
          public          postgres    false    329            �           0    0    ProductType_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."ProductType_Id_seq"', 1, false);
          public          postgres    false    331            �           0    0    ProductionProcess_Id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."ProductionProcess_Id_seq"', 18, true);
          public          postgres    false    339            �           0    0    ProfitCenter_Id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."ProfitCenter_Id_seq"', 1, false);
          public          postgres    false    367            �           0    0    Resources_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Resources_Id_seq"', 113, true);
          public          postgres    false    337            �           0    0    SampleType_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."SampleType_Id_seq"', 13, true);
          public          postgres    false    327            �           0    0    SectionProfile_Id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."SectionProfile_Id_seq"', 1, false);
          public          postgres    false    369            �           0    0 (   Size_Pannel_PODetails_Size_Pannel_ID_seq    SEQUENCE SET     Y   SELECT pg_catalog.setval('public."Size_Pannel_PODetails_Size_Pannel_ID_seq"', 29, true);
          public          postgres    false    221            �           0    0    Suplier_ID_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Suplier_ID_seq"', 1, false);
          public          postgres    false    223            �           0    0    Suplyitem_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Suplyitem_ID_seq"', 1, false);
          public          postgres    false    225            �           0    0    TNATaskEntry_Id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."TNATaskEntry_Id_seq"', 1, false);
          public          postgres    false    371            �           0    0    TNATaskNameEntry_Id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."TNATaskNameEntry_Id_seq"', 1, false);
          public          postgres    false    373            �           0    0    TermsNConditionSubTable_Id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."TermsNConditionSubTable_Id_seq"', 9, true);
          public          postgres    false    345            �           0    0    TermsNCondition_Id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."TermsNCondition_Id_seq"', 7, true);
          public          postgres    false    347            �           0    0    TrimsGroup_Id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."TrimsGroup_Id_seq"', 4, true);
          public          postgres    false    311            �           0    0    Type_Id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Type_Id_seq"', 276, true);
          public          postgres    false    343            �           0    0 
   UOM_Id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."UOM_Id_seq"', 56, true);
          public          postgres    false    315            �           0    0    YarnBrand_yarnBrandId_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."YarnBrand_yarnBrandId_seq"', 2, true);
          public          postgres    false    308            �           0    0    YarnComp1_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."YarnComp1_ID_seq"', 1, false);
          public          postgres    false    227            �           0    0    YarnCostPreCosting_ID_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."YarnCostPreCosting_ID_seq"', 11, true);
          public          postgres    false    229            �           0    0    YarnCount_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."YarnCount_ID_seq"', 4, true);
          public          postgres    false    231            �           0    0    YarnType_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."YarnType_ID_seq"', 1, false);
          public          postgres    false    233            �           0    0    Years_Id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Years_Id_seq"', 21, true);
          public          postgres    false    333            �           0    0     avg_grey_cons_fabric_cost_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.avg_grey_cons_fabric_cost_id_seq', 26, true);
          public          postgres    false    235            �           0    0    commercial_cost_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.commercial_cost_id_seq', 12, true);
          public          postgres    false    237            �           0    0    commission_cost_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.commission_cost_id_seq', 48, true);
          public          postgres    false    239            �           0    0 '   cons_dzn_gmts_embellishment_cost_id_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public.cons_dzn_gmts_embellishment_cost_id_seq', 9, true);
          public          postgres    false    241            �           0    0    cons_dzn_gmts_wash_cost_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.cons_dzn_gmts_wash_cost_id_seq', 30, true);
          public          postgres    false    243            �           0    0    cons_unit_gmts_trim_cost_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.cons_unit_gmts_trim_cost_id_seq', 20, true);
          public          postgres    false    245            �           0    0    embellishment_cost_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.embellishment_cost_id_seq', 13, true);
          public          postgres    false    247            �           0    0    item_details_order_entry_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.item_details_order_entry_id_seq', 21, true);
          public          postgres    false    249            �           0    0    itemcategory_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.itemcategory_id_seq', 1, false);
          public          postgres    false    361            �           0    0    other_cost_pre_costing_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.other_cost_pre_costing_id_seq', 13, true);
          public          postgres    false    251            �           0    0 #   parsial_fabric_booking_items_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.parsial_fabric_booking_items_id_seq', 3, true);
          public          postgres    false    253            �           0    0 $   parsial_fabric_booking_master_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.parsial_fabric_booking_master_id_seq', 35, true);
          public          postgres    false    255            �           0    0    partytype_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.partytype_id_seq', 1, false);
          public          postgres    false    365            �           0    0    tblAgentInfo_AgentID_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."tblAgentInfo_AgentID_seq"', 1, false);
          public          postgres    false    257            �           0    0    tblBuyerInfo_BuyerID_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."tblBuyerInfo_BuyerID_seq"', 9, true);
          public          postgres    false    259            �           0    0    tblCompanyInfo_CompID_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."tblCompanyInfo_CompID_seq"', 38, true);
          public          postgres    false    261            �           0    0    tblCurrencyInfo_CurrencyID_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."tblCurrencyInfo_CurrencyID_seq"', 1, true);
          public          postgres    false    263            �           0    0    tblDealingMrcndiserInfo_ID_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."tblDealingMrcndiserInfo_ID_seq"', 20, true);
          public          postgres    false    265            �           0    0    tblDepartInfo_DepID_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."tblDepartInfo_DepID_seq"', 1, false);
          public          postgres    false    267            �           0    0    tblInitialOrder_OrderAutoID_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."tblInitialOrder_OrderAutoID_seq"', 252, true);
          public          postgres    false    269            �           0    0    tblLocationInfo_LocationId_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."tblLocationInfo_LocationId_seq"', 16, true);
          public          postgres    false    271            �           0    0    tblOrderUomInfo_UOMID_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."tblOrderUomInfo_UOMID_seq"', 1, false);
          public          postgres    false    273            �           0    0    tblPODetailsInfro_PoDetID_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."tblPODetailsInfro_PoDetID_seq"', 130, true);
          public          postgres    false    275            �           0    0    tblPackingInfo_PackingID_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."tblPackingInfo_PackingID_seq"', 1, false);
          public          postgres    false    277            �           0    0    tblPoOrderStatusInfo_ID_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."tblPoOrderStatusInfo_ID_seq"', 1, false);
          public          postgres    false    279            �           0    0    tblPoStatus_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."tblPoStatus_ID_seq"', 2, true);
          public          postgres    false    281            �           0    0 $   tblProductCategoryInfo_ProdCatId_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public."tblProductCategoryInfo_ProdCatId_seq"', 1, false);
          public          postgres    false    283            �           0    0    tblProductionDeptInfo_ID_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."tblProductionDeptInfo_ID_seq"', 1, false);
          public          postgres    false    285            �           0    0    tblRegionInfo_RegionID_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."tblRegionInfo_RegionID_seq"', 12, true);
          public          postgres    false    287            �           0    0    tblSeasonInfo_SeasonID_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."tblSeasonInfo_SeasonID_seq"', 1, true);
          public          postgres    false    289            �           0    0    tblShipmentModeInfo_ID_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."tblShipmentModeInfo_ID_seq"', 1, false);
          public          postgres    false    291            �           0    0    tblSubDeptInfo_SubDeptID_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."tblSubDeptInfo_SubDeptID_seq"', 1, false);
          public          postgres    false    293            �           0    0    tblUserTypeInfo_UserTypeID_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."tblUserTypeInfo_UserTypeID_seq"', 1, false);
          public          postgres    false    297            �           0    0    trim_cost_pre_costing_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.trim_cost_pre_costing_id_seq', 18, true);
          public          postgres    false    299            �           0    0    wash_cost_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.wash_cost_id_seq', 12, true);
          public          postgres    false    303            �           2606    19654     BodyPartEntry BodyPartEntry_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."BodyPartEntry"
    ADD CONSTRAINT "BodyPartEntry_pkey" PRIMARY KEY ("Id");
 N   ALTER TABLE ONLY public."BodyPartEntry" DROP CONSTRAINT "BodyPartEntry_pkey";
       public            postgres    false    350            �           2606    19517    BodyPartType BodyPartType_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."BodyPartType"
    ADD CONSTRAINT "BodyPartType_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."BodyPartType" DROP CONSTRAINT "BodyPartType_pkey";
       public            postgres    false    320            �           2606    18439 .   BodyPartofPreCosting BodyPartofPreCosting_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."BodyPartofPreCosting"
    ADD CONSTRAINT "BodyPartofPreCosting_pkey" PRIMARY KEY ("ID");
 \   ALTER TABLE ONLY public."BodyPartofPreCosting" DROP CONSTRAINT "BodyPartofPreCosting_pkey";
       public            postgres    false    204            �           2606    19541    ColorRange ColorRange_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."ColorRange"
    ADD CONSTRAINT "ColorRange_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."ColorRange" DROP CONSTRAINT "ColorRange_pkey";
       public            postgres    false    326            �           2606    19525 (   CommercialInvoice CommercialInvoice_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."CommercialInvoice"
    ADD CONSTRAINT "CommercialInvoice_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."CommercialInvoice" DROP CONSTRAINT "CommercialInvoice_pkey";
       public            postgres    false    322            �           2606    19476    Composition Composition_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Composition"
    ADD CONSTRAINT "Composition_pkey" PRIMARY KEY ("Id");
 J   ALTER TABLE ONLY public."Composition" DROP CONSTRAINT "Composition_pkey";
       public            postgres    false    310            �           2606    18441 6   ConversionCostPreCosting ConversionCostPreCosting_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."ConversionCostPreCosting"
    ADD CONSTRAINT "ConversionCostPreCosting_pkey" PRIMARY KEY ("ConversionCostID");
 d   ALTER TABLE ONLY public."ConversionCostPreCosting" DROP CONSTRAINT "ConversionCostPreCosting_pkey";
       public            postgres    false    206            �           2606    18443 0   ConversionCostProcess ConversionCostProcess_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."ConversionCostProcess"
    ADD CONSTRAINT "ConversionCostProcess_pkey" PRIMARY KEY ("ID");
 ^   ALTER TABLE ONLY public."ConversionCostProcess" DROP CONSTRAINT "ConversionCostProcess_pkey";
       public            postgres    false    208            �           2606    19424 .   CostComponentsMaster CostComponentsMaster_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."CostComponentsMaster"
    ADD CONSTRAINT "CostComponentsMaster_pkey" PRIMARY KEY ("Id");
 \   ALTER TABLE ONLY public."CostComponentsMaster" DROP CONSTRAINT "CostComponentsMaster_pkey";
       public            postgres    false    305            �           2606    19670 2   CountryLocationMapping CountryLocationMapping_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."CountryLocationMapping"
    ADD CONSTRAINT "CountryLocationMapping_pkey" PRIMARY KEY ("Id");
 `   ALTER TABLE ONLY public."CountryLocationMapping" DROP CONSTRAINT "CountryLocationMapping_pkey";
       public            postgres    false    354            �           2606    19682 (   DepartmentProfile DepartmentProfile_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."DepartmentProfile"
    ADD CONSTRAINT "DepartmentProfile_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."DepartmentProfile" DROP CONSTRAINT "DepartmentProfile_pkey";
       public            postgres    false    356            �           2606    19662 ,   DepoLocationMapping DepoLocationMapping_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."DepoLocationMapping"
    ADD CONSTRAINT "DepoLocationMapping_pkey" PRIMARY KEY ("Id");
 Z   ALTER TABLE ONLY public."DepoLocationMapping" DROP CONSTRAINT "DepoLocationMapping_pkey";
       public            postgres    false    352            �           2606    19509 "   DiscountMethod DiscountMethod_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."DiscountMethod"
    ADD CONSTRAINT "DiscountMethod_pkey" PRIMARY KEY ("Id");
 P   ALTER TABLE ONLY public."DiscountMethod" DROP CONSTRAINT "DiscountMethod_pkey";
       public            postgres    false    318            �           2606    19693 $   DivisionProfile DivisionProfile_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."DivisionProfile"
    ADD CONSTRAINT "DivisionProfile_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."DivisionProfile" DROP CONSTRAINT "DivisionProfile_pkey";
       public            postgres    false    358                        2606    18445    FabricCost FabricCost_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."FabricCost"
    ADD CONSTRAINT "FabricCost_pkey" PRIMARY KEY ("FabricCostID");
 H   ALTER TABLE ONLY public."FabricCost" DROP CONSTRAINT "FabricCost_pkey";
       public            postgres    false    210                       2606    18447 &   FabricDesPreCost FabricDesPreCost_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."FabricDesPreCost"
    ADD CONSTRAINT "FabricDesPreCost_pkey" PRIMARY KEY ("ID");
 T   ALTER TABLE ONLY public."FabricDesPreCost" DROP CONSTRAINT "FabricDesPreCost_pkey";
       public            postgres    false    212            �           2606    19533    FabricNature FabricNature_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."FabricNature"
    ADD CONSTRAINT "FabricNature_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."FabricNature" DROP CONSTRAINT "FabricNature_pkey";
       public            postgres    false    324            �           2606    19704    GroupProfile GroupProfile_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."GroupProfile"
    ADD CONSTRAINT "GroupProfile_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."GroupProfile" DROP CONSTRAINT "GroupProfile_pkey";
       public            postgres    false    360                       2606    18449 2   Input_Pannel_PODetails Input_Pannel_PODetails_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Input_Pannel_PODetails"
    ADD CONSTRAINT "Input_Pannel_PODetails_pkey" PRIMARY KEY ("Input_Pannel_ID");
 `   ALTER TABLE ONLY public."Input_Pannel_PODetails" DROP CONSTRAINT "Input_Pannel_PODetails_pkey";
       public            postgres    false    214            �           2606    19605    JournalType JournalType_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."JournalType"
    ADD CONSTRAINT "JournalType_pkey" PRIMARY KEY ("Id");
 J   ALTER TABLE ONLY public."JournalType" DROP CONSTRAINT "JournalType_pkey";
       public            postgres    false    342            �           2606    19581    Months Months_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Months"
    ADD CONSTRAINT "Months_pkey" PRIMARY KEY ("Id");
 @   ALTER TABLE ONLY public."Months" DROP CONSTRAINT "Months_pkey";
       public            postgres    false    336                       2606    18453    OrderItem OrderItem_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."OrderItem"
    ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("ItemID");
 F   ALTER TABLE ONLY public."OrderItem" DROP CONSTRAINT "OrderItem_pkey";
       public            postgres    false    216            �           2606    19725 (   OtherPartyProfile OtherPartyProfile_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."OtherPartyProfile"
    ADD CONSTRAINT "OtherPartyProfile_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."OtherPartyProfile" DROP CONSTRAINT "OtherPartyProfile_pkey";
       public            postgres    false    364            �           2606    19493    PageInfo PageInfo_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."PageInfo"
    ADD CONSTRAINT "PageInfo_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."PageInfo" DROP CONSTRAINT "PageInfo_pkey";
       public            postgres    false    314                       2606    18455    PreCosting PreCosting_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."PreCosting"
    ADD CONSTRAINT "PreCosting_pkey" PRIMARY KEY ("PrecostingID");
 H   ALTER TABLE ONLY public."PreCosting" DROP CONSTRAINT "PreCosting_pkey";
       public            postgres    false    218            �           2606    19557 $   ProductCategory ProductCategory_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."ProductCategory"
    ADD CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."ProductCategory" DROP CONSTRAINT "ProductCategory_pkey";
       public            postgres    false    330            �           2606    19565    ProductType ProductType_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."ProductType"
    ADD CONSTRAINT "ProductType_pkey" PRIMARY KEY ("Id");
 J   ALTER TABLE ONLY public."ProductType" DROP CONSTRAINT "ProductType_pkey";
       public            postgres    false    332            �           2606    19597 (   ProductionProcess ProductionProcess_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."ProductionProcess"
    ADD CONSTRAINT "ProductionProcess_pkey" PRIMARY KEY ("Id");
 V   ALTER TABLE ONLY public."ProductionProcess" DROP CONSTRAINT "ProductionProcess_pkey";
       public            postgres    false    340            �           2606    19744    ProfitCenter ProfitCenter_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."ProfitCenter"
    ADD CONSTRAINT "ProfitCenter_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."ProfitCenter" DROP CONSTRAINT "ProfitCenter_pkey";
       public            postgres    false    368            �           2606    19589    Resources Resources_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Resources"
    ADD CONSTRAINT "Resources_pkey" PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public."Resources" DROP CONSTRAINT "Resources_pkey";
       public            postgres    false    338            �           2606    19549    SampleType SampleType_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."SampleType"
    ADD CONSTRAINT "SampleType_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."SampleType" DROP CONSTRAINT "SampleType_pkey";
       public            postgres    false    328            �           2606    19755 "   SectionProfile SectionProfile_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."SectionProfile"
    ADD CONSTRAINT "SectionProfile_pkey" PRIMARY KEY ("Id");
 P   ALTER TABLE ONLY public."SectionProfile" DROP CONSTRAINT "SectionProfile_pkey";
       public            postgres    false    370            �           2606    19460    SizeEntry SizeEntry_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."SizeEntry"
    ADD CONSTRAINT "SizeEntry_pkey" PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public."SizeEntry" DROP CONSTRAINT "SizeEntry_pkey";
       public            postgres    false    307                       2606    18457 0   Size_Pannel_PODetails Size_Pannel_PODetails_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Size_Pannel_PODetails"
    ADD CONSTRAINT "Size_Pannel_PODetails_pkey" PRIMARY KEY ("Size_Pannel_ID");
 ^   ALTER TABLE ONLY public."Size_Pannel_PODetails" DROP CONSTRAINT "Size_Pannel_PODetails_pkey";
       public            postgres    false    220                       2606    18459    Suplier Suplier_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Suplier"
    ADD CONSTRAINT "Suplier_pkey" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Suplier" DROP CONSTRAINT "Suplier_pkey";
       public            postgres    false    222                       2606    18461    Suplyitem Suplyitem_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Suplyitem"
    ADD CONSTRAINT "Suplyitem_pkey" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."Suplyitem" DROP CONSTRAINT "Suplyitem_pkey";
       public            postgres    false    224            �           2606    19763    TNATaskEntry TNATaskEntry_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."TNATaskEntry"
    ADD CONSTRAINT "TNATaskEntry_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."TNATaskEntry" DROP CONSTRAINT "TNATaskEntry_pkey";
       public            postgres    false    372            �           2606    19771 &   TNATaskNameEntry TNATaskNameEntry_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."TNATaskNameEntry"
    ADD CONSTRAINT "TNATaskNameEntry_pkey" PRIMARY KEY ("Id");
 T   ALTER TABLE ONLY public."TNATaskNameEntry" DROP CONSTRAINT "TNATaskNameEntry_pkey";
       public            postgres    false    374            �           2606    19635 4   TermsNConditionSubTable TermsNConditionSubTable_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."TermsNConditionSubTable"
    ADD CONSTRAINT "TermsNConditionSubTable_pkey" PRIMARY KEY ("Id");
 b   ALTER TABLE ONLY public."TermsNConditionSubTable" DROP CONSTRAINT "TermsNConditionSubTable_pkey";
       public            postgres    false    346            �           2606    19643 $   TermsNCondition TermsNCondition_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."TermsNCondition"
    ADD CONSTRAINT "TermsNCondition_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."TermsNCondition" DROP CONSTRAINT "TermsNCondition_pkey";
       public            postgres    false    348            �           2606    19484    TrimsGroup TrimsGroup_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."TrimsGroup"
    ADD CONSTRAINT "TrimsGroup_pkey" PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public."TrimsGroup" DROP CONSTRAINT "TrimsGroup_pkey";
       public            postgres    false    312            �           2606    19613    Type Type_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Type"
    ADD CONSTRAINT "Type_pkey" PRIMARY KEY ("Id");
 <   ALTER TABLE ONLY public."Type" DROP CONSTRAINT "Type_pkey";
       public            postgres    false    344            �           2606    19501    UOM UOM_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."UOM"
    ADD CONSTRAINT "UOM_pkey" PRIMARY KEY ("Id");
 :   ALTER TABLE ONLY public."UOM" DROP CONSTRAINT "UOM_pkey";
       public            postgres    false    316            K           2606    18463    tblInitialOrder Unique_JobNo 
   CONSTRAINT     ^   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "Unique_JobNo" UNIQUE ("JobNo");
 J   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "Unique_JobNo";
       public            postgres    false    268            �           2606    19468    YarnBrand YarnBrand_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public."YarnBrand"
    ADD CONSTRAINT "YarnBrand_pkey" PRIMARY KEY ("yarnBrandId");
 F   ALTER TABLE ONLY public."YarnBrand" DROP CONSTRAINT "YarnBrand_pkey";
       public            postgres    false    309                       2606    18465    YarnComp1 YarnComp1_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."YarnComp1"
    ADD CONSTRAINT "YarnComp1_pkey" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."YarnComp1" DROP CONSTRAINT "YarnComp1_pkey";
       public            postgres    false    226                       2606    18467 *   YarnCostPreCosting YarnCostPreCosting_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."YarnCostPreCosting"
    ADD CONSTRAINT "YarnCostPreCosting_pkey" PRIMARY KEY ("ID");
 X   ALTER TABLE ONLY public."YarnCostPreCosting" DROP CONSTRAINT "YarnCostPreCosting_pkey";
       public            postgres    false    228            #           2606    18469    YarnCount YarnCount_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."YarnCount"
    ADD CONSTRAINT "YarnCount_pkey" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."YarnCount" DROP CONSTRAINT "YarnCount_pkey";
       public            postgres    false    230            %           2606    18471    YarnType YarnType_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."YarnType"
    ADD CONSTRAINT "YarnType_pkey" PRIMARY KEY ("ID");
 D   ALTER TABLE ONLY public."YarnType" DROP CONSTRAINT "YarnType_pkey";
       public            postgres    false    232            �           2606    19573    Years Years_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Years"
    ADD CONSTRAINT "Years_pkey" PRIMARY KEY ("Id");
 >   ALTER TABLE ONLY public."Years" DROP CONSTRAINT "Years_pkey";
       public            postgres    false    334            '           2606    18473 8   avg_grey_cons_fabric_cost avg_grey_cons_fabric_cost_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.avg_grey_cons_fabric_cost
    ADD CONSTRAINT avg_grey_cons_fabric_cost_pkey PRIMARY KEY (id);
 b   ALTER TABLE ONLY public.avg_grey_cons_fabric_cost DROP CONSTRAINT avg_grey_cons_fabric_cost_pkey;
       public            postgres    false    234            )           2606    18475 $   commercial_cost commercial_cost_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.commercial_cost
    ADD CONSTRAINT commercial_cost_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.commercial_cost DROP CONSTRAINT commercial_cost_pkey;
       public            postgres    false    236            +           2606    18477 0   commission_cost_pre_costing commission_cost_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.commission_cost_pre_costing
    ADD CONSTRAINT commission_cost_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.commission_cost_pre_costing DROP CONSTRAINT commission_cost_pkey;
       public            postgres    false    238            -           2606    18479 F   cons_dzn_gmts_embellishment_cost cons_dzn_gmts_embellishment_cost_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.cons_dzn_gmts_embellishment_cost
    ADD CONSTRAINT cons_dzn_gmts_embellishment_cost_pkey PRIMARY KEY (id);
 p   ALTER TABLE ONLY public.cons_dzn_gmts_embellishment_cost DROP CONSTRAINT cons_dzn_gmts_embellishment_cost_pkey;
       public            postgres    false    240            /           2606    18481 4   cons_dzn_gmts_wash_cost cons_dzn_gmts_wash_cost_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.cons_dzn_gmts_wash_cost
    ADD CONSTRAINT cons_dzn_gmts_wash_cost_pkey PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public.cons_dzn_gmts_wash_cost DROP CONSTRAINT cons_dzn_gmts_wash_cost_pkey;
       public            postgres    false    242            1           2606    18483 6   cons_unit_gmts_trim_cost cons_unit_gmts_trim_cost_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.cons_unit_gmts_trim_cost
    ADD CONSTRAINT cons_unit_gmts_trim_cost_pkey PRIMARY KEY (id);
 `   ALTER TABLE ONLY public.cons_unit_gmts_trim_cost DROP CONSTRAINT cons_unit_gmts_trim_cost_pkey;
       public            postgres    false    244            3           2606    18485 6   embellishment_cost_pre_costing embellishment_cost_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.embellishment_cost_pre_costing
    ADD CONSTRAINT embellishment_cost_pkey PRIMARY KEY (id);
 `   ALTER TABLE ONLY public.embellishment_cost_pre_costing DROP CONSTRAINT embellishment_cost_pkey;
       public            postgres    false    246            5           2606    18487 6   item_details_order_entry item_details_order_entry_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.item_details_order_entry
    ADD CONSTRAINT item_details_order_entry_pkey PRIMARY KEY (id);
 `   ALTER TABLE ONLY public.item_details_order_entry DROP CONSTRAINT item_details_order_entry_pkey;
       public            postgres    false    248            �           2606    19714    itemcategory itemcategory_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.itemcategory
    ADD CONSTRAINT itemcategory_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.itemcategory DROP CONSTRAINT itemcategory_pkey;
       public            postgres    false    362            7           2606    18489 2   other_cost_pre_costing other_cost_pre_costing_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.other_cost_pre_costing
    ADD CONSTRAINT other_cost_pre_costing_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.other_cost_pre_costing DROP CONSTRAINT other_cost_pre_costing_pkey;
       public            postgres    false    250            9           2606    18491 >   parsial_fabric_booking_items parsial_fabric_booking_items_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.parsial_fabric_booking_items
    ADD CONSTRAINT parsial_fabric_booking_items_pkey PRIMARY KEY (id);
 h   ALTER TABLE ONLY public.parsial_fabric_booking_items DROP CONSTRAINT parsial_fabric_booking_items_pkey;
       public            postgres    false    252            ;           2606    18493 @   parsial_fabric_booking_master parsial_fabric_booking_master_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.parsial_fabric_booking_master
    ADD CONSTRAINT parsial_fabric_booking_master_pkey PRIMARY KEY (id);
 j   ALTER TABLE ONLY public.parsial_fabric_booking_master DROP CONSTRAINT parsial_fabric_booking_master_pkey;
       public            postgres    false    254            �           2606    19733    partytype partytype_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.partytype
    ADD CONSTRAINT partytype_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.partytype DROP CONSTRAINT partytype_pkey;
       public            postgres    false    366            =           2606    18495    tblAgentInfo tblAgentInfo_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public."tblAgentInfo"
    ADD CONSTRAINT "tblAgentInfo_pkey" PRIMARY KEY ("AgentID");
 L   ALTER TABLE ONLY public."tblAgentInfo" DROP CONSTRAINT "tblAgentInfo_pkey";
       public            postgres    false    256            ?           2606    18497    tblBuyerInfo tblBuyerInfo_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public."tblBuyerInfo"
    ADD CONSTRAINT "tblBuyerInfo_pkey" PRIMARY KEY ("BuyerID");
 L   ALTER TABLE ONLY public."tblBuyerInfo" DROP CONSTRAINT "tblBuyerInfo_pkey";
       public            postgres    false    258            A           2606    18499 "   tblCompanyInfo tblCompanyInfo_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."tblCompanyInfo"
    ADD CONSTRAINT "tblCompanyInfo_pkey" PRIMARY KEY ("CompID");
 P   ALTER TABLE ONLY public."tblCompanyInfo" DROP CONSTRAINT "tblCompanyInfo_pkey";
       public            postgres    false    260            C           2606    18501 $   tblCurrencyInfo tblCurrencyInfo_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."tblCurrencyInfo"
    ADD CONSTRAINT "tblCurrencyInfo_pkey" PRIMARY KEY ("CurrencyID");
 R   ALTER TABLE ONLY public."tblCurrencyInfo" DROP CONSTRAINT "tblCurrencyInfo_pkey";
       public            postgres    false    262            G           2606    18503 4   tblDealingMrcndiserInfo tblDealingMrcndiserInfo_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."tblDealingMrcndiserInfo"
    ADD CONSTRAINT "tblDealingMrcndiserInfo_pkey" PRIMARY KEY ("ID");
 b   ALTER TABLE ONLY public."tblDealingMrcndiserInfo" DROP CONSTRAINT "tblDealingMrcndiserInfo_pkey";
       public            postgres    false    264            I           2606    18505     tblDepartInfo tblDepartInfo_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public."tblDepartInfo"
    ADD CONSTRAINT "tblDepartInfo_pkey" PRIMARY KEY ("DepID");
 N   ALTER TABLE ONLY public."tblDepartInfo" DROP CONSTRAINT "tblDepartInfo_pkey";
       public            postgres    false    266            ]           2606    18507 $   tblInitialOrder tblInitialOrder_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "tblInitialOrder_pkey" PRIMARY KEY ("OrderAutoID");
 R   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "tblInitialOrder_pkey";
       public            postgres    false    268            _           2606    18509 $   tblLocationInfo tblLocationInfo_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."tblLocationInfo"
    ADD CONSTRAINT "tblLocationInfo_pkey" PRIMARY KEY ("LocationId");
 R   ALTER TABLE ONLY public."tblLocationInfo" DROP CONSTRAINT "tblLocationInfo_pkey";
       public            postgres    false    270            a           2606    18511 $   tblOrderUomInfo tblOrderUomInfo_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public."tblOrderUomInfo"
    ADD CONSTRAINT "tblOrderUomInfo_pkey" PRIMARY KEY ("UOMID");
 R   ALTER TABLE ONLY public."tblOrderUomInfo" DROP CONSTRAINT "tblOrderUomInfo_pkey";
       public            postgres    false    272            g           2606    18513 (   tblPODetailsInfro tblPODetailsInfro_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public."tblPODetailsInfro"
    ADD CONSTRAINT "tblPODetailsInfro_pkey" PRIMARY KEY ("PoDetID");
 V   ALTER TABLE ONLY public."tblPODetailsInfro" DROP CONSTRAINT "tblPODetailsInfro_pkey";
       public            postgres    false    274            i           2606    18515 "   tblPackingInfo tblPackingInfo_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public."tblPackingInfo"
    ADD CONSTRAINT "tblPackingInfo_pkey" PRIMARY KEY ("PackingID");
 P   ALTER TABLE ONLY public."tblPackingInfo" DROP CONSTRAINT "tblPackingInfo_pkey";
       public            postgres    false    276            k           2606    18517 .   tblPoOrderStatusInfo tblPoOrderStatusInfo_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."tblPoOrderStatusInfo"
    ADD CONSTRAINT "tblPoOrderStatusInfo_pkey" PRIMARY KEY ("ID");
 \   ALTER TABLE ONLY public."tblPoOrderStatusInfo" DROP CONSTRAINT "tblPoOrderStatusInfo_pkey";
       public            postgres    false    278            m           2606    18519    tblPoStatus tblPoStatus_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."tblPoStatus"
    ADD CONSTRAINT "tblPoStatus_pkey" PRIMARY KEY ("ID");
 J   ALTER TABLE ONLY public."tblPoStatus" DROP CONSTRAINT "tblPoStatus_pkey";
       public            postgres    false    280            o           2606    18521 2   tblProductCategoryInfo tblProductCategoryInfo_pkey 
   CONSTRAINT     }   ALTER TABLE ONLY public."tblProductCategoryInfo"
    ADD CONSTRAINT "tblProductCategoryInfo_pkey" PRIMARY KEY ("ProdCatId");
 `   ALTER TABLE ONLY public."tblProductCategoryInfo" DROP CONSTRAINT "tblProductCategoryInfo_pkey";
       public            postgres    false    282            r           2606    18523 0   tblProductionDeptInfo tblProductionDeptInfo_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."tblProductionDeptInfo"
    ADD CONSTRAINT "tblProductionDeptInfo_pkey" PRIMARY KEY ("ID");
 ^   ALTER TABLE ONLY public."tblProductionDeptInfo" DROP CONSTRAINT "tblProductionDeptInfo_pkey";
       public            postgres    false    284            t           2606    18525     tblRegionInfo tblRegionInfo_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."tblRegionInfo"
    ADD CONSTRAINT "tblRegionInfo_pkey" PRIMARY KEY ("RegionID");
 N   ALTER TABLE ONLY public."tblRegionInfo" DROP CONSTRAINT "tblRegionInfo_pkey";
       public            postgres    false    286            v           2606    18527     tblSeasonInfo tblSeasonInfo_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."tblSeasonInfo"
    ADD CONSTRAINT "tblSeasonInfo_pkey" PRIMARY KEY ("SeasonID");
 N   ALTER TABLE ONLY public."tblSeasonInfo" DROP CONSTRAINT "tblSeasonInfo_pkey";
       public            postgres    false    288            x           2606    18529 ,   tblShipmentModeInfo tblShipmentModeInfo_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."tblShipmentModeInfo"
    ADD CONSTRAINT "tblShipmentModeInfo_pkey" PRIMARY KEY ("ID");
 Z   ALTER TABLE ONLY public."tblShipmentModeInfo" DROP CONSTRAINT "tblShipmentModeInfo_pkey";
       public            postgres    false    290            {           2606    18531 "   tblSubDeptInfo tblSubDeptInfo_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public."tblSubDeptInfo"
    ADD CONSTRAINT "tblSubDeptInfo_pkey" PRIMARY KEY ("SubDeptID");
 P   ALTER TABLE ONLY public."tblSubDeptInfo" DROP CONSTRAINT "tblSubDeptInfo_pkey";
       public            postgres    false    292            ~           2606    18533 *   tblTeamlederInfoes tblTeamlederInfoes_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."tblTeamlederInfoes"
    ADD CONSTRAINT "tblTeamlederInfoes_pkey" PRIMARY KEY ("TeamleaderID");
 X   ALTER TABLE ONLY public."tblTeamlederInfoes" DROP CONSTRAINT "tblTeamlederInfoes_pkey";
       public            postgres    false    294            �           2606    18535    tblUserInfo tblUserInfo_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."tblUserInfo"
    ADD CONSTRAINT "tblUserInfo_pkey" PRIMARY KEY ("UserID");
 J   ALTER TABLE ONLY public."tblUserInfo" DROP CONSTRAINT "tblUserInfo_pkey";
       public            postgres    false    295            �           2606    18537 $   tblUserTypeInfo tblUserTypeInfo_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."tblUserTypeInfo"
    ADD CONSTRAINT "tblUserTypeInfo_pkey" PRIMARY KEY ("UserTypeID");
 R   ALTER TABLE ONLY public."tblUserTypeInfo" DROP CONSTRAINT "tblUserTypeInfo_pkey";
       public            postgres    false    296            �           2606    18539 0   trim_cost_pre_costing trim_cost_pre_costing_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.trim_cost_pre_costing
    ADD CONSTRAINT trim_cost_pre_costing_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.trim_cost_pre_costing DROP CONSTRAINT trim_cost_pre_costing_pkey;
       public            postgres    false    298            �           2606    18541 $   wash_cost_pre_costing wash_cost_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.wash_cost_pre_costing
    ADD CONSTRAINT wash_cost_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.wash_cost_pre_costing DROP CONSTRAINT wash_cost_pkey;
       public            postgres    false    302            	           1259    18542    fki_Country_InputPannel    INDEX     e   CREATE INDEX "fki_Country_InputPannel" ON public."Input_Pannel_PODetails" USING btree ("CountryID");
 -   DROP INDEX public."fki_Country_InputPannel";
       public            postgres    false    214            �           1259    18543    fki_FK_ConversionCost_FbDesc    INDEX     l   CREATE INDEX "fki_FK_ConversionCost_FbDesc" ON public."ConversionCostPreCosting" USING btree ("FabDescID");
 2   DROP INDEX public."fki_FK_ConversionCost_FbDesc";
       public            postgres    false    206            �           1259    18544     fki_FK_ConversionCost_PreCosting    INDEX     s   CREATE INDEX "fki_FK_ConversionCost_PreCosting" ON public."ConversionCostPreCosting" USING btree ("PreCostingID");
 6   DROP INDEX public."fki_FK_ConversionCost_PreCosting";
       public            postgres    false    206            �           1259    18545    fki_FK_ConversionCost_Process    INDEX     w   CREATE INDEX "fki_FK_ConversionCost_Process" ON public."ConversionCostPreCosting" USING btree ("ConversionProcessID");
 3   DROP INDEX public."fki_FK_ConversionCost_Process";
       public            postgres    false    206            D           1259    18546    fki_FK_DelaingMerchant_User    INDEX     g   CREATE INDEX "fki_FK_DelaingMerchant_User" ON public."tblDealingMrcndiserInfo" USING btree ("UserID");
 1   DROP INDEX public."fki_FK_DelaingMerchant_User";
       public            postgres    false    264            E           1259    18547     fki_FK_DelingMerchant_Teamleader    INDEX     r   CREATE INDEX "fki_FK_DelingMerchant_Teamleader" ON public."tblDealingMrcndiserInfo" USING btree ("TeamleaderID");
 6   DROP INDEX public."fki_FK_DelingMerchant_Teamleader";
       public            postgres    false    264                       1259    18548    fki_FK_FabCost_BodyPart    INDEX     Z   CREATE INDEX "fki_FK_FabCost_BodyPart" ON public."FabricCost" USING btree ("BodyPartID");
 -   DROP INDEX public."fki_FK_FabCost_BodyPart";
       public            postgres    false    210                       1259    18549    fki_FK_FabCost_PreCostingTbl    INDEX     a   CREATE INDEX "fki_FK_FabCost_PreCostingTbl" ON public."FabricCost" USING btree ("PreCostingID");
 2   DROP INDEX public."fki_FK_FabCost_PreCostingTbl";
       public            postgres    false    210                       1259    18550    fki_FK_FabCost_Supplier    INDEX     e   CREATE INDEX "fki_FK_FabCost_Supplier" ON public."FabricCost" USING btree ("Nominated_Supplier_ID");
 -   DROP INDEX public."fki_FK_FabCost_Supplier";
       public            postgres    false    210            L           1259    18551    fki_FK_InitialOrder_Agent    INDEX     _   CREATE INDEX "fki_FK_InitialOrder_Agent" ON public."tblInitialOrder" USING btree ("Agent_ID");
 /   DROP INDEX public."fki_FK_InitialOrder_Agent";
       public            postgres    false    268            M           1259    18552    fki_FK_InitialOrder_Buyer    INDEX     ^   CREATE INDEX "fki_FK_InitialOrder_Buyer" ON public."tblInitialOrder" USING btree ("BuyerID");
 /   DROP INDEX public."fki_FK_InitialOrder_Buyer";
       public            postgres    false    268            N           1259    18553    fki_FK_InitialOrder_Company    INDEX     b   CREATE INDEX "fki_FK_InitialOrder_Company" ON public."tblInitialOrder" USING btree ("CompanyID");
 1   DROP INDEX public."fki_FK_InitialOrder_Company";
       public            postgres    false    268            O           1259    18554    fki_FK_InitialOrder_Currency    INDEX     d   CREATE INDEX "fki_FK_InitialOrder_Currency" ON public."tblInitialOrder" USING btree ("CurrencyID");
 2   DROP INDEX public."fki_FK_InitialOrder_Currency";
       public            postgres    false    268            P           1259    18555 #   fki_FK_InitialOrder_DealingMerchant    INDEX     t   CREATE INDEX "fki_FK_InitialOrder_DealingMerchant" ON public."tblInitialOrder" USING btree ("Dealing_Merchant_ID");
 9   DROP INDEX public."fki_FK_InitialOrder_DealingMerchant";
       public            postgres    false    268            Q           1259    18556    fki_FK_InitialOrder_Location    INDEX     d   CREATE INDEX "fki_FK_InitialOrder_Location" ON public."tblInitialOrder" USING btree ("LocationID");
 2   DROP INDEX public."fki_FK_InitialOrder_Location";
       public            postgres    false    268            R           1259    18557     fki_FK_InitialOrder_OrderUOMInfo    INDEX     j   CREATE INDEX "fki_FK_InitialOrder_OrderUOMInfo" ON public."tblInitialOrder" USING btree ("Order_Uom_ID");
 6   DROP INDEX public."fki_FK_InitialOrder_OrderUOMInfo";
       public            postgres    false    268            S           1259    18558    fki_FK_InitialOrder_Packing    INDEX     c   CREATE INDEX "fki_FK_InitialOrder_Packing" ON public."tblInitialOrder" USING btree ("Packing_ID");
 1   DROP INDEX public."fki_FK_InitialOrder_Packing";
       public            postgres    false    268            T           1259    18559    fki_FK_InitialOrder_PodDept    INDEX     d   CREATE INDEX "fki_FK_InitialOrder_PodDept" ON public."tblInitialOrder" USING btree ("Prod_DeptID");
 1   DROP INDEX public."fki_FK_InitialOrder_PodDept";
       public            postgres    false    268            U           1259    18560     fki_FK_InitialOrder_ProdCategory    INDEX     k   CREATE INDEX "fki_FK_InitialOrder_ProdCategory" ON public."tblInitialOrder" USING btree ("Product_CatID");
 6   DROP INDEX public."fki_FK_InitialOrder_ProdCategory";
       public            postgres    false    268            V           1259    18561    fki_FK_InitialOrder_Region    INDEX     `   CREATE INDEX "fki_FK_InitialOrder_Region" ON public."tblInitialOrder" USING btree ("RegionID");
 0   DROP INDEX public."fki_FK_InitialOrder_Region";
       public            postgres    false    268            W           1259    18562    fki_FK_InitialOrder_Seasson    INDEX     b   CREATE INDEX "fki_FK_InitialOrder_Seasson" ON public."tblInitialOrder" USING btree ("Season_ID");
 1   DROP INDEX public."fki_FK_InitialOrder_Seasson";
       public            postgres    false    268            X           1259    18563     fki_FK_InitialOrder_ShipmentMode    INDEX     n   CREATE INDEX "fki_FK_InitialOrder_ShipmentMode" ON public."tblInitialOrder" USING btree ("Shipment_Mode_ID");
 6   DROP INDEX public."fki_FK_InitialOrder_ShipmentMode";
       public            postgres    false    268            Y           1259    18564    fki_FK_InitialOrder_SubDept    INDEX     c   CREATE INDEX "fki_FK_InitialOrder_SubDept" ON public."tblInitialOrder" USING btree ("Sub_DeptID");
 1   DROP INDEX public."fki_FK_InitialOrder_SubDept";
       public            postgres    false    268            Z           1259    18565    fki_FK_InitialOrder_Teamleader    INDEX     j   CREATE INDEX "fki_FK_InitialOrder_Teamleader" ON public."tblInitialOrder" USING btree ("Team_Leader_ID");
 4   DROP INDEX public."fki_FK_InitialOrder_Teamleader";
       public            postgres    false    268            [           1259    18566    fki_FK_InitialOrder_User    INDEX     \   CREATE INDEX "fki_FK_InitialOrder_User" ON public."tblInitialOrder" USING btree ("UserID");
 .   DROP INDEX public."fki_FK_InitialOrder_User";
       public            postgres    false    268            b           1259    18567 #   fki_FK_PostOderDetails_InitialOrder    INDEX     q   CREATE INDEX "fki_FK_PostOderDetails_InitialOrder" ON public."tblPODetailsInfro" USING btree ("InitialOrderID");
 9   DROP INDEX public."fki_FK_PostOderDetails_InitialOrder";
       public            postgres    false    274            c           1259    18568 #   fki_FK_PostOderDetails_POOderstatus    INDEX     r   CREATE INDEX "fki_FK_PostOderDetails_POOderstatus" ON public."tblPODetailsInfro" USING btree ("POOrderStatusID");
 9   DROP INDEX public."fki_FK_PostOderDetails_POOderstatus";
       public            postgres    false    274            d           1259    18569    fki_FK_PostOderDetails_Packing    INDEX     h   CREATE INDEX "fki_FK_PostOderDetails_Packing" ON public."tblPODetailsInfro" USING btree ("Packing_ID");
 4   DROP INDEX public."fki_FK_PostOderDetails_Packing";
       public            postgres    false    274            e           1259    18570    fki_FK_PostOderDetails_PoStatus    INDEX     i   CREATE INDEX "fki_FK_PostOderDetails_PoStatus" ON public."tblPODetailsInfro" USING btree ("PoStatusID");
 5   DROP INDEX public."fki_FK_PostOderDetails_PoStatus";
       public            postgres    false    274            p           1259    18571    fki_FK_ProducDept_Dept    INDEX     g   CREATE INDEX "fki_FK_ProducDept_Dept" ON public."tblProductionDeptInfo" USING btree ("Department_Id");
 ,   DROP INDEX public."fki_FK_ProducDept_Dept";
       public            postgres    false    284            y           1259    18572    fki_FK_SubDept_Dept    INDEX     \   CREATE INDEX "fki_FK_SubDept_Dept" ON public."tblSubDeptInfo" USING btree ("DepartmentID");
 )   DROP INDEX public."fki_FK_SubDept_Dept";
       public            postgres    false    292                       1259    18573    fki_FK_Suplier_SuplyItemID    INDEX     [   CREATE INDEX "fki_FK_Suplier_SuplyItemID" ON public."Suplier" USING btree ("SuplyItemID");
 0   DROP INDEX public."fki_FK_Suplier_SuplyItemID";
       public            postgres    false    222            |           1259    18574    fki_FK_Temleader_User    INDEX     \   CREATE INDEX "fki_FK_Temleader_User" ON public."tblTeamlederInfoes" USING btree ("UserID");
 +   DROP INDEX public."fki_FK_Temleader_User";
       public            postgres    false    294                       1259    18575    fki_FK_UserInfo_Department    INDEX     Z   CREATE INDEX "fki_FK_UserInfo_Department" ON public."tblUserInfo" USING btree ("DeptId");
 0   DROP INDEX public."fki_FK_UserInfo_Department";
       public            postgres    false    295                       1259    18576    fki_FK_YarnCost_Comp1    INDEX     ]   CREATE INDEX "fki_FK_YarnCost_Comp1" ON public."YarnCostPreCosting" USING btree ("Comp1ID");
 +   DROP INDEX public."fki_FK_YarnCost_Comp1";
       public            postgres    false    228                       1259    18577    fki_FK_YarnCost_PreCosting    INDEX     g   CREATE INDEX "fki_FK_YarnCost_PreCosting" ON public."YarnCostPreCosting" USING btree ("PreCostingID");
 0   DROP INDEX public."fki_FK_YarnCost_PreCosting";
       public            postgres    false    228                        1259    18578    fki_FK_YarnCost_YarnCount    INDEX     a   CREATE INDEX "fki_FK_YarnCost_YarnCount" ON public."YarnCostPreCosting" USING btree ("CountID");
 /   DROP INDEX public."fki_FK_YarnCost_YarnCount";
       public            postgres    false    228            !           1259    18579    fki_FK_YarnCost_YarnType    INDEX     c   CREATE INDEX "fki_FK_YarnCost_YarnType" ON public."YarnCostPreCosting" USING btree ("YarnTypeID");
 .   DROP INDEX public."fki_FK_YarnCost_YarnType";
       public            postgres    false    228                       1259    18580    fki_Fabcost_FabDescription    INDEX     \   CREATE INDEX "fki_Fabcost_FabDescription" ON public."FabricCost" USING btree ("FabDescID");
 0   DROP INDEX public."fki_Fabcost_FabDescription";
       public            postgres    false    210            
           1259    18581    fki_InputPannelwithPackingIDFK    INDEX     m   CREATE INDEX "fki_InputPannelwithPackingIDFK" ON public."Input_Pannel_PODetails" USING btree ("Packing_ID");
 4   DROP INDEX public."fki_InputPannelwithPackingIDFK";
       public            postgres    false    214                       1259    18582    fki_Input_PaanelWithSize    INDEX     k   CREATE INDEX "fki_Input_PaanelWithSize" ON public."Size_Pannel_PODetails" USING btree ("Input_Pannel_ID");
 .   DROP INDEX public."fki_Input_PaanelWithSize";
       public            postgres    false    220                       1259    18583    fki_OrderItem_SizeWise    INDEX     `   CREATE INDEX "fki_OrderItem_SizeWise" ON public."Size_Pannel_PODetails" USING btree ("ItemID");
 ,   DROP INDEX public."fki_OrderItem_SizeWise";
       public            postgres    false    220                       1259    18584    fki_PoDetailsID_InputPannel    INDEX     m   CREATE INDEX "fki_PoDetailsID_InputPannel" ON public."Input_Pannel_PODetails" USING btree ("Po_details_ID");
 1   DROP INDEX public."fki_PoDetailsID_InputPannel";
       public            postgres    false    214                       1259    18585    fki_PreCosting_InitialOrder    INDEX     [   CREATE INDEX "fki_PreCosting_InitialOrder" ON public."PreCosting" USING btree ("OrderID");
 1   DROP INDEX public."fki_PreCosting_InitialOrder";
       public            postgres    false    218            �           1259    18586    fki_user_usertype    INDEX     S   CREATE INDEX fki_user_usertype ON public."tblUserInfo" USING btree ("UserTypeID");
 %   DROP INDEX public.fki_user_usertype;
       public            postgres    false    295            �           2606    18587 *   Input_Pannel_PODetails Country_InputPannel    FK CONSTRAINT     �   ALTER TABLE ONLY public."Input_Pannel_PODetails"
    ADD CONSTRAINT "Country_InputPannel" FOREIGN KEY ("CountryID") REFERENCES public."tblRegionInfo"("RegionID");
 X   ALTER TABLE ONLY public."Input_Pannel_PODetails" DROP CONSTRAINT "Country_InputPannel";
       public          postgres    false    286    214    3444            �           2606    18592 1   ConversionCostPreCosting FK_ConversionCost_FbDesc    FK CONSTRAINT     �   ALTER TABLE ONLY public."ConversionCostPreCosting"
    ADD CONSTRAINT "FK_ConversionCost_FbDesc" FOREIGN KEY ("FabDescID") REFERENCES public."FabricDesPreCost"("ID");
 _   ALTER TABLE ONLY public."ConversionCostPreCosting" DROP CONSTRAINT "FK_ConversionCost_FbDesc";
       public          postgres    false    3334    206    212            �           2606    18597 5   ConversionCostPreCosting FK_ConversionCost_PreCosting    FK CONSTRAINT     �   ALTER TABLE ONLY public."ConversionCostPreCosting"
    ADD CONSTRAINT "FK_ConversionCost_PreCosting" FOREIGN KEY ("PreCostingID") REFERENCES public."PreCosting"("PrecostingID");
 c   ALTER TABLE ONLY public."ConversionCostPreCosting" DROP CONSTRAINT "FK_ConversionCost_PreCosting";
       public          postgres    false    3343    206    218            �           2606    18602 2   ConversionCostPreCosting FK_ConversionCost_Process    FK CONSTRAINT     �   ALTER TABLE ONLY public."ConversionCostPreCosting"
    ADD CONSTRAINT "FK_ConversionCost_Process" FOREIGN KEY ("ConversionProcessID") REFERENCES public."ConversionCostProcess"("ID");
 `   ALTER TABLE ONLY public."ConversionCostPreCosting" DROP CONSTRAINT "FK_ConversionCost_Process";
       public          postgres    false    3326    206    208            �           2606    18607 /   tblDealingMrcndiserInfo FK_DelaingMerchant_User    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblDealingMrcndiserInfo"
    ADD CONSTRAINT "FK_DelaingMerchant_User" FOREIGN KEY ("UserID") REFERENCES public."tblUserInfo"("UserID");
 ]   ALTER TABLE ONLY public."tblDealingMrcndiserInfo" DROP CONSTRAINT "FK_DelaingMerchant_User";
       public          postgres    false    295    264    3458            �           2606    18612 4   tblDealingMrcndiserInfo FK_DelingMerchant_Teamleader    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblDealingMrcndiserInfo"
    ADD CONSTRAINT "FK_DelingMerchant_Teamleader" FOREIGN KEY ("TeamleaderID") REFERENCES public."tblTeamlederInfoes"("TeamleaderID");
 b   ALTER TABLE ONLY public."tblDealingMrcndiserInfo" DROP CONSTRAINT "FK_DelingMerchant_Teamleader";
       public          postgres    false    3454    294    264            �           2606    18617    FabricCost FK_FabCost_BodyPart    FK CONSTRAINT     �   ALTER TABLE ONLY public."FabricCost"
    ADD CONSTRAINT "FK_FabCost_BodyPart" FOREIGN KEY ("BodyPartID") REFERENCES public."BodyPartofPreCosting"("ID");
 L   ALTER TABLE ONLY public."FabricCost" DROP CONSTRAINT "FK_FabCost_BodyPart";
       public          postgres    false    3319    210    204            �           2606    18622 #   FabricCost FK_FabCost_PreCostingTbl    FK CONSTRAINT     �   ALTER TABLE ONLY public."FabricCost"
    ADD CONSTRAINT "FK_FabCost_PreCostingTbl" FOREIGN KEY ("PreCostingID") REFERENCES public."PreCosting"("PrecostingID");
 Q   ALTER TABLE ONLY public."FabricCost" DROP CONSTRAINT "FK_FabCost_PreCostingTbl";
       public          postgres    false    210    218    3343            �           2606    18627    FabricCost FK_FabCost_Supplier    FK CONSTRAINT     �   ALTER TABLE ONLY public."FabricCost"
    ADD CONSTRAINT "FK_FabCost_Supplier" FOREIGN KEY ("Nominated_Supplier_ID") REFERENCES public."Suplier"("ID");
 L   ALTER TABLE ONLY public."FabricCost" DROP CONSTRAINT "FK_FabCost_Supplier";
       public          postgres    false    222    3350    210            �           2606    18632 %   tblInitialOrder FK_InitialOrder_Agent    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Agent" FOREIGN KEY ("Agent_ID") REFERENCES public."tblAgentInfo"("AgentID");
 S   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Agent";
       public          postgres    false    256    268    3389            �           2606    18637 %   tblInitialOrder FK_InitialOrder_Buyer    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Buyer" FOREIGN KEY ("BuyerID") REFERENCES public."tblBuyerInfo"("BuyerID");
 S   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Buyer";
       public          postgres    false    268    3391    258            �           2606    18642 '   tblInitialOrder FK_InitialOrder_Company    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Company" FOREIGN KEY ("CompanyID") REFERENCES public."tblCompanyInfo"("CompID");
 U   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Company";
       public          postgres    false    260    268    3393            �           2606    18647 (   tblInitialOrder FK_InitialOrder_Currency    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Currency" FOREIGN KEY ("CurrencyID") REFERENCES public."tblCurrencyInfo"("CurrencyID");
 V   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Currency";
       public          postgres    false    3395    262    268            �           2606    18652 /   tblInitialOrder FK_InitialOrder_DealingMerchant    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_DealingMerchant" FOREIGN KEY ("Dealing_Merchant_ID") REFERENCES public."tblDealingMrcndiserInfo"("ID");
 ]   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_DealingMerchant";
       public          postgres    false    268    264    3399            �           2606    18657 (   tblInitialOrder FK_InitialOrder_Location    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Location" FOREIGN KEY ("LocationID") REFERENCES public."tblLocationInfo"("LocationId");
 V   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Location";
       public          postgres    false    268    3423    270            �           2606    18662 ,   tblInitialOrder FK_InitialOrder_OrderUOMInfo    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_OrderUOMInfo" FOREIGN KEY ("Order_Uom_ID") REFERENCES public."tblOrderUomInfo"("UOMID");
 Z   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_OrderUOMInfo";
       public          postgres    false    272    3425    268            �           2606    18667 '   tblInitialOrder FK_InitialOrder_Packing    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Packing" FOREIGN KEY ("Packing_ID") REFERENCES public."tblPackingInfo"("PackingID");
 U   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Packing";
       public          postgres    false    276    3433    268            �           2606    18672 '   tblInitialOrder FK_InitialOrder_PodDept    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_PodDept" FOREIGN KEY ("Prod_DeptID") REFERENCES public."tblProductionDeptInfo"("ID");
 U   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_PodDept";
       public          postgres    false    284    268    3442            �           2606    18677 ,   tblInitialOrder FK_InitialOrder_ProdCategory    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_ProdCategory" FOREIGN KEY ("Product_CatID") REFERENCES public."tblProductCategoryInfo"("ProdCatId");
 Z   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_ProdCategory";
       public          postgres    false    3439    282    268            �           2606    18682 &   tblInitialOrder FK_InitialOrder_Region    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Region" FOREIGN KEY ("RegionID") REFERENCES public."tblRegionInfo"("RegionID");
 T   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Region";
       public          postgres    false    3444    268    286            �           2606    18687 '   tblInitialOrder FK_InitialOrder_Seasson    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Seasson" FOREIGN KEY ("Season_ID") REFERENCES public."tblSeasonInfo"("SeasonID");
 U   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Seasson";
       public          postgres    false    288    268    3446            �           2606    18692 ,   tblInitialOrder FK_InitialOrder_ShipmentMode    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_ShipmentMode" FOREIGN KEY ("Shipment_Mode_ID") REFERENCES public."tblShipmentModeInfo"("ID");
 Z   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_ShipmentMode";
       public          postgres    false    3448    290    268            �           2606    18697 '   tblInitialOrder FK_InitialOrder_SubDept    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_SubDept" FOREIGN KEY ("Sub_DeptID") REFERENCES public."tblSubDeptInfo"("SubDeptID");
 U   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_SubDept";
       public          postgres    false    292    268    3451                        2606    18702 *   tblInitialOrder FK_InitialOrder_Teamleader    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_Teamleader" FOREIGN KEY ("Team_Leader_ID") REFERENCES public."tblTeamlederInfoes"("TeamleaderID");
 X   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_Teamleader";
       public          postgres    false    268    294    3454                       2606    18707 $   tblInitialOrder FK_InitialOrder_User    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblInitialOrder"
    ADD CONSTRAINT "FK_InitialOrder_User" FOREIGN KEY ("UserID") REFERENCES public."tblUserInfo"("UserID");
 R   ALTER TABLE ONLY public."tblInitialOrder" DROP CONSTRAINT "FK_InitialOrder_User";
       public          postgres    false    3458    268    295                       2606    18712 1   tblPODetailsInfro FK_PostOderDetails_InitialOrder    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblPODetailsInfro"
    ADD CONSTRAINT "FK_PostOderDetails_InitialOrder" FOREIGN KEY ("InitialOrderID") REFERENCES public."tblInitialOrder"("OrderAutoID");
 _   ALTER TABLE ONLY public."tblPODetailsInfro" DROP CONSTRAINT "FK_PostOderDetails_InitialOrder";
       public          postgres    false    268    3421    274                       2606    18717 1   tblPODetailsInfro FK_PostOderDetails_POOderstatus    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblPODetailsInfro"
    ADD CONSTRAINT "FK_PostOderDetails_POOderstatus" FOREIGN KEY ("POOrderStatusID") REFERENCES public."tblPoOrderStatusInfo"("ID");
 _   ALTER TABLE ONLY public."tblPODetailsInfro" DROP CONSTRAINT "FK_PostOderDetails_POOderstatus";
       public          postgres    false    274    278    3435                       2606    18722 ,   tblPODetailsInfro FK_PostOderDetails_Packing    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblPODetailsInfro"
    ADD CONSTRAINT "FK_PostOderDetails_Packing" FOREIGN KEY ("Packing_ID") REFERENCES public."tblPackingInfo"("PackingID");
 Z   ALTER TABLE ONLY public."tblPODetailsInfro" DROP CONSTRAINT "FK_PostOderDetails_Packing";
       public          postgres    false    3433    274    276                       2606    18727 -   tblPODetailsInfro FK_PostOderDetails_PoStatus    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblPODetailsInfro"
    ADD CONSTRAINT "FK_PostOderDetails_PoStatus" FOREIGN KEY ("PoStatusID") REFERENCES public."tblPoStatus"("ID");
 [   ALTER TABLE ONLY public."tblPODetailsInfro" DROP CONSTRAINT "FK_PostOderDetails_PoStatus";
       public          postgres    false    274    280    3437                       2606    18732 (   tblProductionDeptInfo FK_ProducDept_Dept    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblProductionDeptInfo"
    ADD CONSTRAINT "FK_ProducDept_Dept" FOREIGN KEY ("Department_Id") REFERENCES public."tblDepartInfo"("DepID");
 V   ALTER TABLE ONLY public."tblProductionDeptInfo" DROP CONSTRAINT "FK_ProducDept_Dept";
       public          postgres    false    3401    284    266                       2606    18737    tblSubDeptInfo FK_SubDept_Dept    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblSubDeptInfo"
    ADD CONSTRAINT "FK_SubDept_Dept" FOREIGN KEY ("DepartmentID") REFERENCES public."tblDepartInfo"("DepID");
 L   ALTER TABLE ONLY public."tblSubDeptInfo" DROP CONSTRAINT "FK_SubDept_Dept";
       public          postgres    false    292    266    3401            �           2606    18742    Suplier FK_Suplier_SuplyItemID    FK CONSTRAINT     �   ALTER TABLE ONLY public."Suplier"
    ADD CONSTRAINT "FK_Suplier_SuplyItemID" FOREIGN KEY ("SuplyItemID") REFERENCES public."Suplyitem"("ID");
 L   ALTER TABLE ONLY public."Suplier" DROP CONSTRAINT "FK_Suplier_SuplyItemID";
       public          postgres    false    224    222    3353                       2606    18747 $   tblTeamlederInfoes FK_Temleader_User    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblTeamlederInfoes"
    ADD CONSTRAINT "FK_Temleader_User" FOREIGN KEY ("UserID") REFERENCES public."tblUserInfo"("UserID");
 R   ALTER TABLE ONLY public."tblTeamlederInfoes" DROP CONSTRAINT "FK_Temleader_User";
       public          postgres    false    294    295    3458            	           2606    18752    tblUserInfo FK_User_DEpt    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblUserInfo"
    ADD CONSTRAINT "FK_User_DEpt" FOREIGN KEY ("DeptId") REFERENCES public."tblDepartInfo"("DepID");
 F   ALTER TABLE ONLY public."tblUserInfo" DROP CONSTRAINT "FK_User_DEpt";
       public          postgres    false    266    295    3401            
           2606    18757     tblUserInfo FK_Userinfo_UserType    FK CONSTRAINT     �   ALTER TABLE ONLY public."tblUserInfo"
    ADD CONSTRAINT "FK_Userinfo_UserType" FOREIGN KEY ("UserTypeID") REFERENCES public."tblUserTypeInfo"("UserTypeID");
 N   ALTER TABLE ONLY public."tblUserInfo" DROP CONSTRAINT "FK_Userinfo_UserType";
       public          postgres    false    295    296    3460            �           2606    18762 $   YarnCostPreCosting FK_YarnCost_Comp1    FK CONSTRAINT     �   ALTER TABLE ONLY public."YarnCostPreCosting"
    ADD CONSTRAINT "FK_YarnCost_Comp1" FOREIGN KEY ("Comp1ID") REFERENCES public."YarnComp1"("ID");
 R   ALTER TABLE ONLY public."YarnCostPreCosting" DROP CONSTRAINT "FK_YarnCost_Comp1";
       public          postgres    false    228    3355    226            �           2606    18767 )   YarnCostPreCosting FK_YarnCost_PreCosting    FK CONSTRAINT     �   ALTER TABLE ONLY public."YarnCostPreCosting"
    ADD CONSTRAINT "FK_YarnCost_PreCosting" FOREIGN KEY ("PreCostingID") REFERENCES public."PreCosting"("PrecostingID");
 W   ALTER TABLE ONLY public."YarnCostPreCosting" DROP CONSTRAINT "FK_YarnCost_PreCosting";
       public          postgres    false    218    3343    228            �           2606    18772 (   YarnCostPreCosting FK_YarnCost_YarnCount    FK CONSTRAINT     �   ALTER TABLE ONLY public."YarnCostPreCosting"
    ADD CONSTRAINT "FK_YarnCost_YarnCount" FOREIGN KEY ("CountID") REFERENCES public."YarnCount"("ID");
 V   ALTER TABLE ONLY public."YarnCostPreCosting" DROP CONSTRAINT "FK_YarnCost_YarnCount";
       public          postgres    false    230    228    3363            �           2606    18777 '   YarnCostPreCosting FK_YarnCost_YarnType    FK CONSTRAINT     �   ALTER TABLE ONLY public."YarnCostPreCosting"
    ADD CONSTRAINT "FK_YarnCost_YarnType" FOREIGN KEY ("YarnTypeID") REFERENCES public."YarnType"("ID");
 U   ALTER TABLE ONLY public."YarnCostPreCosting" DROP CONSTRAINT "FK_YarnCost_YarnType";
       public          postgres    false    232    228    3365            �           2606    18782 !   FabricCost Fabcost_FabDescription    FK CONSTRAINT     �   ALTER TABLE ONLY public."FabricCost"
    ADD CONSTRAINT "Fabcost_FabDescription" FOREIGN KEY ("FabDescID") REFERENCES public."FabricDesPreCost"("ID");
 O   ALTER TABLE ONLY public."FabricCost" DROP CONSTRAINT "Fabcost_FabDescription";
       public          postgres    false    3334    210    212            �           2606    18787 1   Input_Pannel_PODetails InputPannelwithPackingIDFK    FK CONSTRAINT     �   ALTER TABLE ONLY public."Input_Pannel_PODetails"
    ADD CONSTRAINT "InputPannelwithPackingIDFK" FOREIGN KEY ("Packing_ID") REFERENCES public."tblPackingInfo"("PackingID");
 _   ALTER TABLE ONLY public."Input_Pannel_PODetails" DROP CONSTRAINT "InputPannelwithPackingIDFK";
       public          postgres    false    3433    276    214            �           2606    18792 *   Size_Pannel_PODetails Input_PaanelWithSize    FK CONSTRAINT     �   ALTER TABLE ONLY public."Size_Pannel_PODetails"
    ADD CONSTRAINT "Input_PaanelWithSize" FOREIGN KEY ("Input_Pannel_ID") REFERENCES public."Input_Pannel_PODetails"("Input_Pannel_ID");
 X   ALTER TABLE ONLY public."Size_Pannel_PODetails" DROP CONSTRAINT "Input_PaanelWithSize";
       public          postgres    false    3336    214    220            �           2606    18797 (   Size_Pannel_PODetails OrderItem_SizeWise    FK CONSTRAINT     �   ALTER TABLE ONLY public."Size_Pannel_PODetails"
    ADD CONSTRAINT "OrderItem_SizeWise" FOREIGN KEY ("ItemID") REFERENCES public."OrderItem"("ItemID");
 V   ALTER TABLE ONLY public."Size_Pannel_PODetails" DROP CONSTRAINT "OrderItem_SizeWise";
       public          postgres    false    3341    220    216            �           2606    18802 .   Input_Pannel_PODetails PoDetailsID_InputPannel    FK CONSTRAINT     �   ALTER TABLE ONLY public."Input_Pannel_PODetails"
    ADD CONSTRAINT "PoDetailsID_InputPannel" FOREIGN KEY ("Po_details_ID") REFERENCES public."tblPODetailsInfro"("PoDetID");
 \   ALTER TABLE ONLY public."Input_Pannel_PODetails" DROP CONSTRAINT "PoDetailsID_InputPannel";
       public          postgres    false    3431    274    214            �           2606    18807 "   PreCosting PreCosting_InitialOrder    FK CONSTRAINT     �   ALTER TABLE ONLY public."PreCosting"
    ADD CONSTRAINT "PreCosting_InitialOrder" FOREIGN KEY ("OrderID") REFERENCES public."tblInitialOrder"("OrderAutoID");
 P   ALTER TABLE ONLY public."PreCosting" DROP CONSTRAINT "PreCosting_InitialOrder";
       public          postgres    false    218    268    3421            �           2606    18812 G   avg_grey_cons_fabric_cost avg_grey_cons_fabric_cost_febric_cost_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.avg_grey_cons_fabric_cost
    ADD CONSTRAINT avg_grey_cons_fabric_cost_febric_cost_id_fkey FOREIGN KEY (febric_cost_id) REFERENCES public."FabricCost"("FabricCostID");
 q   ALTER TABLE ONLY public.avg_grey_cons_fabric_cost DROP CONSTRAINT avg_grey_cons_fabric_cost_febric_cost_id_fkey;
       public          postgres    false    234    210    3328            �           2606    18817 F   avg_grey_cons_fabric_cost avg_grey_cons_fabric_cost_precosting_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.avg_grey_cons_fabric_cost
    ADD CONSTRAINT avg_grey_cons_fabric_cost_precosting_id_fkey FOREIGN KEY (precosting_id) REFERENCES public."PreCosting"("PrecostingID");
 p   ALTER TABLE ONLY public.avg_grey_cons_fabric_cost DROP CONSTRAINT avg_grey_cons_fabric_cost_precosting_id_fkey;
       public          postgres    false    234    218    3343            �           2606    18822 2   commercial_cost commercial_cost_precosting_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.commercial_cost
    ADD CONSTRAINT commercial_cost_precosting_id_fkey FOREIGN KEY (precosting_id) REFERENCES public."PreCosting"("PrecostingID");
 \   ALTER TABLE ONLY public.commercial_cost DROP CONSTRAINT commercial_cost_precosting_id_fkey;
       public          postgres    false    3343    218    236            �           2606    18827 >   commission_cost_pre_costing commission_cost_precosting_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.commission_cost_pre_costing
    ADD CONSTRAINT commission_cost_precosting_id_fkey FOREIGN KEY (precosting_id) REFERENCES public."PreCosting"("PrecostingID");
 h   ALTER TABLE ONLY public.commission_cost_pre_costing DROP CONSTRAINT commission_cost_precosting_id_fkey;
       public          postgres    false    238    218    3343            �           2606    18832 \   cons_dzn_gmts_embellishment_cost cons_dzn_gmts_embellishment_cost_embellishment_cost_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cons_dzn_gmts_embellishment_cost
    ADD CONSTRAINT cons_dzn_gmts_embellishment_cost_embellishment_cost_id_fkey FOREIGN KEY (embellishment_cost_id) REFERENCES public.embellishment_cost_pre_costing(id);
 �   ALTER TABLE ONLY public.cons_dzn_gmts_embellishment_cost DROP CONSTRAINT cons_dzn_gmts_embellishment_cost_embellishment_cost_id_fkey;
       public          postgres    false    3379    246    240            �           2606    18837 A   cons_dzn_gmts_wash_cost cons_dzn_gmts_wash_cost_wash_cost_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cons_dzn_gmts_wash_cost
    ADD CONSTRAINT cons_dzn_gmts_wash_cost_wash_cost_id_fkey FOREIGN KEY (wash_cost_id) REFERENCES public.wash_cost_pre_costing(id);
 k   ALTER TABLE ONLY public.cons_dzn_gmts_wash_cost DROP CONSTRAINT cons_dzn_gmts_wash_cost_wash_cost_id_fkey;
       public          postgres    false    242    3464    302            �           2606    18842 C   cons_unit_gmts_trim_cost cons_unit_gmts_trim_cost_trim_cost_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cons_unit_gmts_trim_cost
    ADD CONSTRAINT cons_unit_gmts_trim_cost_trim_cost_id_fkey FOREIGN KEY (trim_cost_id) REFERENCES public.trim_cost_pre_costing(id);
 m   ALTER TABLE ONLY public.cons_unit_gmts_trim_cost DROP CONSTRAINT cons_unit_gmts_trim_cost_trim_cost_id_fkey;
       public          postgres    false    3462    298    244            �           2606    18847 @   embellishment_cost_pre_costing embellishment_cost_body_part_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.embellishment_cost_pre_costing
    ADD CONSTRAINT embellishment_cost_body_part_fkey FOREIGN KEY (body_part) REFERENCES public."BodyPartofPreCosting"("ID");
 j   ALTER TABLE ONLY public.embellishment_cost_pre_costing DROP CONSTRAINT embellishment_cost_body_part_fkey;
       public          postgres    false    246    3319    204            �           2606    18852 D   embellishment_cost_pre_costing embellishment_cost_precosting_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.embellishment_cost_pre_costing
    ADD CONSTRAINT embellishment_cost_precosting_id_fkey FOREIGN KEY (precosting_id) REFERENCES public."PreCosting"("PrecostingID");
 n   ALTER TABLE ONLY public.embellishment_cost_pre_costing DROP CONSTRAINT embellishment_cost_precosting_id_fkey;
       public          postgres    false    246    3343    218            �           2606    18857 E   item_details_order_entry item_details_order_entry_order_entry_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.item_details_order_entry
    ADD CONSTRAINT item_details_order_entry_order_entry_id_fkey FOREIGN KEY (order_entry_id) REFERENCES public."tblInitialOrder"("OrderAutoID");
 o   ALTER TABLE ONLY public.item_details_order_entry DROP CONSTRAINT item_details_order_entry_order_entry_id_fkey;
       public          postgres    false    3421    248    268            �           2606    18862 A   other_cost_pre_costing other_cost_pre_costing_pre_costing_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.other_cost_pre_costing
    ADD CONSTRAINT other_cost_pre_costing_pre_costing_id_fkey FOREIGN KEY (pre_costing_id) REFERENCES public."PreCosting"("PrecostingID");
 k   ALTER TABLE ONLY public.other_cost_pre_costing DROP CONSTRAINT other_cost_pre_costing_pre_costing_id_fkey;
       public          postgres    false    250    3343    218            �           2606    18867 P   parsial_fabric_booking_items parsial_fabric_booking_items_booking_master_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.parsial_fabric_booking_items
    ADD CONSTRAINT parsial_fabric_booking_items_booking_master_id_fkey FOREIGN KEY (booking_master_id) REFERENCES public.parsial_fabric_booking_master(id);
 z   ALTER TABLE ONLY public.parsial_fabric_booking_items DROP CONSTRAINT parsial_fabric_booking_items_booking_master_id_fkey;
       public          postgres    false    252    3387    254            �           2606    18872 G   parsial_fabric_booking_items parsial_fabric_booking_items_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.parsial_fabric_booking_items
    ADD CONSTRAINT parsial_fabric_booking_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public."tblInitialOrder"("OrderAutoID");
 q   ALTER TABLE ONLY public.parsial_fabric_booking_items DROP CONSTRAINT parsial_fabric_booking_items_order_id_fkey;
       public          postgres    false    268    252    3421                       2606    18877 ?   trim_cost_pre_costing trim_cost_pre_costing_nominated_supp_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trim_cost_pre_costing
    ADD CONSTRAINT trim_cost_pre_costing_nominated_supp_fkey FOREIGN KEY (nominated_supp) REFERENCES public."Suplier"("ID");
 i   ALTER TABLE ONLY public.trim_cost_pre_costing DROP CONSTRAINT trim_cost_pre_costing_nominated_supp_fkey;
       public          postgres    false    3350    222    298                       2606    18882 >   trim_cost_pre_costing trim_cost_pre_costing_precosting_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trim_cost_pre_costing
    ADD CONSTRAINT trim_cost_pre_costing_precosting_id_fkey FOREIGN KEY (precosting_id) REFERENCES public."PreCosting"("PrecostingID");
 h   ALTER TABLE ONLY public.trim_cost_pre_costing DROP CONSTRAINT trim_cost_pre_costing_precosting_id_fkey;
       public          postgres    false    298    3343    218                       2606    18887 2   wash_cost_pre_costing wash_cost_precosting_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.wash_cost_pre_costing
    ADD CONSTRAINT wash_cost_precosting_id_fkey FOREIGN KEY (precosting_id) REFERENCES public."PreCosting"("PrecostingID");
 \   ALTER TABLE ONLY public.wash_cost_pre_costing DROP CONSTRAINT wash_cost_precosting_id_fkey;
       public          postgres    false    3343    218    302                   x�3�LBCcΐ�N��̲T�=... O��          #   x�3��/�tL.�,K�2�t�/)�υ�c���� ��	�      �   0   x�3�,I-.
%��\F`vf^���P0�2��Js��qqq �M�         �   x�]�;�0E��yY��_�O)�Ќ�ȶbbd�v.�r���F�H�����FE;��q����;R�r����%�ЌHOx�;4gؠ������)�Ag��􎁪������r��QnK�6=9�m����+��L���M�         {   x�Mϫ�PQͫ� ��/1$�#B���Y;j�v�u��ZQ,�{}g�s��b���E�-��C���q�8E�-�i��QƳT8�p��4d�qH��"!NDF��ٕYʽN)�*���      �      x�3�,�tL.�,K����� #[�      �      x������ � �      �   :   x�3�,I-.��KW�K�MU0�2B0�2F0�2A0�2E�ɋ)��


�\1z\\\ j]$�      �     x�M�1o� �g�W0u��I:VN\EJ�H���"��HQ}1��1����;HA
.):+�C�q���U�w��u�~)�2X#-�Tn�Dzb=�DBۈ��M�{it��bNk���I�V
��pa�$g^d��^����'G��*���I��u��S���9a�5�>g�MDG�}�#�ĸQu�	t�6�8Fo�S��Jj~N:��
=;��}�G���J.����0�;3;J=s�Uf�p��R��E��)�9��۲>$�.W\��?��0      �   �   x�5��n� D��Wp��ɱr�R�F���`�vW
`��~}qMn�f5�Z�2��11] ��`{���j��)XC�}Z8�w��o���&�wlm@�As�0,��C���NX4	{�+�RF��D]�
���J�`_S"��1	&s�Sq6�D�0��s!�-�N?��打���[��L��7���j�O�V�!�/���_wɨ��Hnf��b�Md���\�-���y�t��?Bfk�      "      x�3��,.����� �      $      x������ � �          .   x�3��4�LI-����2ⴀ�8�K2�R���
�`�=... IQP      �   E   x�3�I�N�tL.�,K�2�v�qL8]C��a<SNg7ǌ3��Μ3 �4/Ƶ��t��qb���� ���      &      x������ � �      �      x������ � �      �   }   x�3�,I-.
%���F�A�.
`A#=#NC=C��dr~nA~qfIf~�X}f^�BZb�_bIiQ�B,9?����4�(2�)�h2�(��Y�`�e��0c�s�C1@Ͱ=... QB-         3   x�3����,Qp���,�PpKL*�L.�tL.�,K�2��/K�C����� ��      (      x������ � �      �   R   x�343�446����/�M��4202�50�5��,.���8��89c��͌�:,8K�M9�N�Rc�R$Ys�Jc���� �-�         �   x�uѽ� ���}�~�Z���M\\.�iQ�
�~<�$���w�?v5I.��T(��x�-Q�����h����8ktQ�!�`�-أ ��R4U|�*5>��I�+��t��Ӝ
rG_��Vto�_�����u#���Zi��Q�7Z��۱,Q^�E0������i�r�rQ:��Z��{���=�~�K`C�tx�EQ��Ȝ�         �   x�=�;�0����ǈI�c@
��ꒆ-ԶĤ�o�|߇3�����	m���(p��}M��8g(*�ՍJ�:-"*�}�	5w�z�h�;�p/��E�q���s �.�����ci��p^��R�߲���_���N�U;B�      �   Z   x�32��42���*H�.�/JLO��11PQ.#SN ����K-wO,�M�+)v
�Gb;�dY���E����ũ%�@S :�b���� I�"s      �   #   x�3�H�+�2�tN,�2�,��,*)����� b&�      ,      x������ � �      �   C   x�3��,I�-Vp�/�+�,HLO�	�&��Ŝ��%�e�\Ɯ�@A��ļ��b��$� \U� p��      �   D   x�5�1
�0��_Rd�� {2��SM��8����BM��Y�sP��3�
����|��)��a�2���W      
   W   x�3��/-)OM,*�tL.�,K�2����KO-�L��sU���L8���:L9���2�a|3ΐ�ǜ�)��$?Ə���� ϧ$�            x������ � �         �   x�ePK
�0]ON���ߥT+⦨��M[��	$Q��[cJ��33o��a-���ŧ`!�GL�Nx8�	�ͣ8���S(�FcT�ߕ��M民�L|X�F+���8>��V� �G'ax���<�J���b؋�PD�'�BI��H�m7��)'fC1����8!��F��y�{��sY      0      x������ � �         z  x�m�Iw�8��ȯ�q��DԮ��v�m"%}ϝ9�6��"�It����l��9���ArX�'�ѣ(j� �k�S�������+خn��M�.R�޿����
;'!�.b�Y�7�l%���o�[�7�sp>��68��q���C����k�a냳ۑ��6����q�}�V���6o�ak#nM��E�՞��ZˊL�>����wi�>��o$׵��(4ۼ�J�� @I<�X�s8$���ʁ$#�E�$�\�j��'�>$�xH��H 	nKY�Xkѳo�T�h��15��J�Z��C9L�K6>	U�]��Z���Vc�:=���A\&��d\�s|���<Q?ъ�`�K��L��
qC�����"���T�A<f�?�ɟxf=`#%2��k�
��r6Z�5��A����f����V�C�l���'m��q}��t�8���B�'U�\��=�ZTe�f�S�����e�B�Da�e~@;"XyY��	}�W�f�]�O��v�̓����D�և�F��<�S��F�������,�왌�4jKq8��6���UA�8HhS�G�X�T2
|�^��6q�]���{�C��4h5,�ձ������d��w��"�Nސ��Յm��d��B�A�E���Y6}"����cyH.=�ʏ.�Їm��6�)`[ɺ��I�`�^�uY�����^(�����D��>K�}���A*��=ЙG."�I�.h8f"�GF��>w35
��#х|o�[�R7rkÎ˥�(���)���-�xw���u⽓݋̒�CX�{��>�_;�E��p�u���=n��_[+j��n��E��n q�8��
ln4���o�x�<ǿ�n�eS7�}ww����m         �   x�Eο
�0������	Ĵ��(J��HG�PZs�>�:\�����N��SHq蒟I8�L#?��u�
*�>�Q��%�_���y�����Lω�{�ȷ�����;ZÞmV�ߴ����%Z�/\�J�&�Ae      2      x������ � �      �   !   x�3�4�tL.�,K��2�4�qb��b���� ���      �   I   x�32�443�4�4�̭���4B#SNcNcN��̲T�.#K��<�"N3 46SΉyɩ9�)�i\1z\\\ V      �   �   x���A
�0E��)r�v�P�"��M�C	43����J��.܄��?^%�d~�Lߓ�-M�l@u=uf98�fnJ��olg�7�mV�a�=Y�L��9��:&�N.8�]z�sMѸ$�3���x˟ɋ���0��-#T��_��/�����~�Z� `��z      �   H   x�3�,I-.Q�K�M��RR���2J2���B�y�
~@yI���1�2c�ʌ�LP��`Uf����� ��2�      4      x������ � �      6      x������ � �         &   x�3�I-�-V(���/JU(q8�K2�R�b���� ��	�         -   x���4�4��,I�Up*J�K�
rf���K�J�b���� �)
      �   #   x�3�)��-V0�tL.�,K�2���1z\\\ ٫
�         �  x�u�͎�8���Sh�@��3"����]����t&����#K�,W�~�~�y�9�-^�V ϡ$��K��w�_�]~ʪ�dY�����/E������Wﲖo�資��ש3�E���l��ko����_գ"�pn����^�����o$m�y)��Y�k��D��h�+Etʊ�=��תBMS�J�������=i��YU�E�Y+'�9�cZ��J��K(o�紦;#�:����'l����i��l���ZR�ݶ���l�Q5�_T�c���q:9��b�~p��өr��}Z��=�*-`��L�B����sT3f��tE���w�0NJ��ۖӥFi��&�Q:�Ռ�u���a5u>�,��=�3����N]��%���'���1�u�م�!��~Ӟ��G+2��E-*�+�:Q�O�*���O���Ƙ}���\�;n?r�e�5-iU��`/�1Q�ey��3-i��ʹ��ȈJ�:/���Ϫ���J�>�@����3��q*K�d���)#��~Y�}nFg�=?�����:���ظ���,˜� ?�m!D���J)�7Ap(zQ+��S�9�з��Z
������WZ�=���	?s��:?i�Ī�@-�ɐk�b������t$lӸTe�6�H%�����p��GC�q��Ү���#��Fc�2�鏻��`��}+��0�0��PY�m���8d5��W�!UQ�m����8���������Y^J�;�J>�Zo����-U#K<C�r���Ǜ7u�N/4�$��,3Z�I��*�M��l N�x��o�G�6{�\Dܔ�ظ���Gb�
6�S�c�͂�>S$����q7Ь{qC��,���N^�&u����͹n�΀7fSmD	�fU[�=���>�E��u���驩�\2�=6����_FepP�S^�Y��p5�C�t.
g��H�:��1��E����n��0������uՖr=y�'�5�r����i{��t��@�;Ӽ:`���4 ��=�fFV���vUL�������l,�'���|c�@:M����f�獦{��q�L��f��K�9��, ]'t���d��U-cC�ob�{��;c��`�٥�]� ���ę?�gS��t p�~��p��כ��@��(Z?�V��z�p���<�HO�`q��z�<�8p��|YN'��ˁDěgu�U ��Uߢ9��9[im麍��u�͉tͫ}�WK;q��yUV�{(l�y��=���a�#�.�!yG�fd䵤�b-�:�q`U�ܟ�88�CYD�N=FЫ(�jN% �,�H��K<�`��#ӹ�1P��a�:�m����:��Ŗs����a<;vm�zv��:B�X����Z�0��ǔ8{�q`[ְ)eڇ�8�T�J��Sz����[��p�_��+�t���?��5�;���󿿻k=�k����,-qr�u������v����U!�%ӭ��촁���s���Zv.�Z��p�ۆ��&��Z�։ ]�v�=t������mۣ`)d.�/ ��F�����xb�� ;]u����m������4� �N��9T�r��S����P@Ow� �OJ4)@����?���rLD��U]u���39	[�,���r�y��N��M�-�Rk�]�����I�.'@P7yd� �����B$7��yp��YB��\��V!@L���������W�h��eJ7$mF�G@��Cn?`��:�
P��/����d���1���/�	���0�m�� )u�� �U,�A ��N $�GX��>* Iݱk|� ��j�2`�K� m�2ˉ/�Ș$�P�6�D��6瑱�A��3g�t��yA��[x�t��g��fb� ���+��_�z�u��~&-ff%�t:�L8G[��� p�[Y�=HZ�]	�Z���K?@�'/���[���^Y�M �<�e�U	pOo����c�x���H�sS�>��v�W��7(��m���F'��?���??|���´      �   \  x�M��N�@��O�����si�b�kQoE�A�b�O�j�w����3�v�	W�5_�'��tH�U�|�5��)��Oq��c܍��U;%l�`��!@� P؁H"����NC��I"����Xw��0A��'�>�����iYH������74*�va�eE���7Q�lɔH\�ږz��]U�(ًH+^��u�Τ�Qն=�5��n�Cw�!2¶���wgo%�qY�NgO�T�tlMw���ސ+%��p�By� ��,�B���$v���C�(�`�=AyG��>nǮ����:��jȦv3����g$���h�=��Q~�Cs1�4ک�ˣ}^x��
��      �   #   x�3�,�4�tL.�,K�2�Lr<�!�=... ��$      �   2   x�3�,I-.��KW�K�MU0�2B0�2F0�2A0�2E0����� �a      �      x������ � �      �       x�3�L,�S0�44�tL.�,K����� N'�      �   8   x�3�,I-.��KW�K�MU0���2B3�����LP�L@b��b� �=... �7�         r   x�=Ω�@Q�ƥ��	�����\�����F�4y�<����|�)Uu�UիVj�ڨ�j����ګN��gR#��8�q<䀄�	�C&�$PJ��Q9*��Q}^��?!�K      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   �   x�34�421�t�I��N-�4�B�̒������b06��~�p&��24`F��@,(1����Ԁ̀�0�B�ļ�J�n#\$��9e�-�ڍ8C��B�H�o	�������Y��P60�\@�M���7�44���v\$W� �p�!      *      x������ � �      �      x������ � �      �      x������ � �      �   y   x�M�A
�0E�߻�08��.]u��v&YY��G(E}_>Ì��Mۚ^sb�u	Լ�A!ڽ^���ou7F��=�<v���u�ZU�i΀���iѾ��%��M��Ot'
JY�B�@Dhg=�      .      x������ � �      �      x�3��R�������       �   F   x�3��I-.-J-O,JU��+I-�K,���K���)7�2��R����3�v�2�tr���tr����� o+;      �   8   x�34��NLI-R����I���/�,K,��O���2��su�tO,�M�+)����� t��      �   ;   x�3�v�2�I�N�2�t��2�t�p�2�vw�2��/�K�2�t������ "*
�      �   2   x�3�4�4�24�4QF@ʈ���3�P��BY@(K0ed ����� _�	V      �   8   x�3�tLN�/�+)1��8��ssS��3s@L.cN_ /#1/%�8������� ��      �   �   x�m��� ���l�<�~���e�f[��_�ZQQ�x���B�?l�l�$@� ӌ�M � 9E�ewjȑ��R��*�����-�V��'�/%@����ț���`��\��6��%$4b�"�2܊q�u�F��5ٙ3�U�B�?' ���6����V�P���[���SF�ƺ��&D%���"�"��o�6�BS[Z�u[�|3�h����5e*qD�*Bq;���N$��mDi��m����~�      �      x�34����.��J����� '7      �   B   x�3�H.�2�N-�2�t���2�L)�2��N�2��I*�2��-)��t/�/��tw����� ��.      �   =   x�346�421�4����4202�50�50�3�LSӌ���H@X�@`�\1z\\\ ��Z      �   8   x�3����LQp���/R���3�R��8���J0e�Q�@U�eLP� K��qqq ��#�      �   #   x�3�t��K�,�MM�2�(��JM.�c���� �i      �   &   x�3�tL.�,K�2��̃2�9��SsRS�b���� ��	�      �   L   x�3��/-)OM,*�2����KO-�L�2����q�p�'gs�r�%&e&s�q��p�s:嗔��r��qqq �]�      �   j   x�3��M�+�4�2��IL�L1�9CRS��S��u�3�r�B&HBN��@SNϼ�ļ ӌ34/�8��4���L���d�锘Rm	28��sS��=... �M!�      �   7   x������trq�24�t,-�24���K�L�2�vL�24��,J������ �	
P      �   &   x�3�.��M-�2���+2�9KKJs�b���� ���      �   2   x�3�t�,�2��OL�2�)J���2�NM�I��%�LC� W� q�>      �   0   x�3�(�O)M.����4�2�tI���K���2����,)��b���� Ee�      �      x�3�4�2�4�2�=... 
      �   j   x�3��-R��/�L�,�rH�M���K���40472253530�420��5��5��,�(542�4�4�2��MQpJ��I�LJ�I�A5�����M� +�������� L�!S      �       x�3�tL����2�t�-�ɯLM����� TV[      �      x������ � �      �      x������ � �     