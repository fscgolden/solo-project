DROP TABLE public.patients;

CREATE TABLE public.patients (
	"name" varchar NOT NULL,
  "identifier" varchar NOT NULL,
  "date" date NOT NULL,
  "procedure" varchar NOT NULL,
  "notes" varchar NOT NULL,
  "biopsy" boolean NOT NULL,
  "discussed" boolean NOT NULL,
  CONSTRAINT PK_Patient PRIMARY KEY ("name", "identifier")
);

INSERT INTO public.patients VALUES ('Steve', 'SD72', '2022-05-01', 'EGD endoscopy', 'normal findings', '1', '1');
INSERT INTO public.patients VALUES ('Chris', 'CL87', '2022-05-03', 'upper endoscopy', 'inflammation at duodenum', '1', '0');


-- psql -d postgres://gthifiux:nNCgALeW4jJOCodO21heQn_HQ0XzBd2w@chunee.db.elephantsql.com/gthifiux -f scopetracker_postgres_create.sql

-- CREATE TABLE public.patients (
-- 	"_id" serial NOT NULL,
-- 	"name" varchar NOT NULL,
--   "identifier" varchar NOT NULL,
--   "date" date NOT NULL,
--   "procedure" varchar NOT NULL,
--   "biopsy" boolean NOT NULL,
--   "findings" varchar NOT NULL,
--   "discussed" boolean NOT NULL
-- );

-- INSERT INTO public.patients VALUES (1, 'Chris', 'CL87', '2022-05-03', 'food impaction', '1', 'good findings', '0');