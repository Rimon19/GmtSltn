PGDMP     &                    x         
   GarmentERP    10.8    10.8 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1259    54847    EmpCategory    TABLE     �   CREATE TABLE public."EmpCategory" (
    "Id" integer NOT NULL,
    "Category" character varying(100),
    "EmpCatagoryId" integer
);
 !   DROP TABLE public."EmpCategory";
       public         postgres    false            �           1259    54845    EmpCategory_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."EmpCategory_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."EmpCategory_Id_seq";
       public       postgres    false    478            �           0    0    EmpCategory_Id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."EmpCategory_Id_seq" OWNED BY public."EmpCategory"."Id";
            public       postgres    false    477            v           2604    54850    EmpCategory Id    DEFAULT     v   ALTER TABLE ONLY public."EmpCategory" ALTER COLUMN "Id" SET DEFAULT nextval('public."EmpCategory_Id_seq"'::regclass);
 A   ALTER TABLE public."EmpCategory" ALTER COLUMN "Id" DROP DEFAULT;
       public       postgres    false    478    477    478            �          0    54847    EmpCategory 
   TABLE DATA               J   COPY public."EmpCategory" ("Id", "Category", "EmpCatagoryId") FROM stdin;
    public       postgres    false    478   �	       �           0    0    EmpCategory_Id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."EmpCategory_Id_seq"', 6, true);
            public       postgres    false    477            x           2606    54852    EmpCategory EmpCategory_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."EmpCategory"
    ADD CONSTRAINT "EmpCategory_pkey" PRIMARY KEY ("Id");
 J   ALTER TABLE ONLY public."EmpCategory" DROP CONSTRAINT "EmpCategory_pkey";
       public         postgres    false    478            �   r   x�3�tIM���KW�M-J�H�+�4�2�tKL.�/�D�qr委&�d��)�&�%��qrq:����e&������9}�ZS�R2�R���\&�9�yy`��&\1z\\\ 1+�     