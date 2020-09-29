-- Table: public."OrderImageUploadTbl"

-- DROP TABLE public."OrderImageUploadTbl";

CREATE TABLE public."OrderImageUploadTbl"(  
"OrderImgUploadID"  INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"InitialOrderID" integer NOT NULL, 
"FileName" varchar(100) NOT NULL,
"FileSize" varchar(200) NOT NULL, 
"ImgPath" varchar(200) NOT NULL)

