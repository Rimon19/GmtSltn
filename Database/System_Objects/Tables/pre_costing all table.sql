6.
CREATE TABLE other_cost_pre_costing(
id serial primary key,
pre_costing_id  INTEGER REFERENCES public."PreCosting"("PrecostingID"),
Cost_Component varchar (255),
Budgeted_Cost double precision,
Percentage_Q_Price double precision,
);
5.
CREATE TABLE commission_cost_pre_costing(
id serial primary key,
precosting_id INTEGER REFERENCES public."PreCosting"("PrecostingID"),
particulars varchar (255),
commn_base varchar (255),
commn_rate  varchar (255),
amount double precision,
status varchar (255)
);
4.
CREATE TABLE commercial_cost(
id serial primary key,
precosting_id INTEGER REFERENCES public."PreCosting"("PrecostingID"),
item varchar (255),
rate_in varchar (255),
amount double precision,
status varchar (255)
);

3.
CREATE TABLE wash_cost_pre_costing(
id serial primary key,
Precosting_id INTEGER REFERENCES public."PreCosting"("PrecostingID"),
name varchar (255),
type varchar (255),
country varchar (255),
cons_dzn_gmts varchar (255),
rate varchar (255),
amount double precision,
status varchar (255)
);

2.
create table embellishment_cost_pre_costing(
id SERIAL PRIMARY KEY,
Precosting_id INTEGER REFERENCES public."PreCosting"("PrecostingID"),
name varchar (255),
type varchar (255),
body_part  INTEGER REFERENCES public."BodyPartofPreCosting"("ID"),
country varchar (255),
emb_supplier varchar (255),
cons_dzn_gmts varchar (255),
rate varchar (255),
amount double precision,
status varchar (255)
);

1.
create table trim_cost_pre_costing(
id serial primary key,
Precosting_id INTEGER REFERENCES public."PreCosting"("PrecostingID"),
group_name varchar (255),
country varchar (255),
description varchar (255),
band_sup_ref varchar (255),
remarks varchar (255),
nominated_supp INTEGER REFERENCES public.“Suplier”(“ID”),
cons_uom varchar (255),
cons_unit_gmts varchar (255),
rate varchar (255),
amount double precision,
total_qty  double precision,
total_amount  double precision,
apvl_req  varchar (255),
image varchar (255)
);
