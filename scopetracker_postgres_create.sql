-- DROP TABLE public.patients;

CREATE TABLE public.patients (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
  "identifier" varchar NOT NULL,
  "date" date NOT NULL,
  "procedure" varchar NOT NULL,
  "biopsy" boolean NOT NULL,
  "findings" varchar NOT NULL,
  "discussed" boolean NOT NULL
);

INSERT INTO public.patients VALUES (1, 'Chris', 'CL87', '2022-05-03', 'food impaction', '1', 'good findings', '0');