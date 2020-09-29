
create table trim_cost_pre_costing(
id serial primary key,
Precosting_id INTEGER REFERENCES public."PreCosting"("PrecostingID"),
group_name varchar (255),
country varchar (255),
description varchar (255),
band_sup_ref varchar (255),
remarks varchar (255),
nominated_supp INTEGER REFERENCES public."Suplier"("ID"),
cons_uom varchar (255),
cons_unit_gmts varchar (255),
rate varchar (255),
amount double precision,
total_qty varchar (255),
total_amount varchar (255),
apvl_req  varchar (255),
image varchar (255)
);
