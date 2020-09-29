-- Table: public."tblAgentInfo"

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