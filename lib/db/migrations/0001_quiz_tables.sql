CREATE TABLE IF NOT EXISTS "regions" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" text NOT NULL,
  "display_name" text NOT NULL,
  "code" text NOT NULL UNIQUE,
  "created_at" timestamp DEFAULT now(),
  "updated_at" timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "quiz_categories" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" text NOT NULL,
  "display_name" text NOT NULL,
  "code" text NOT NULL UNIQUE,
  "created_at" timestamp DEFAULT now(),
  "updated_at" timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "quizzes" (
  "id" serial PRIMARY KEY NOT NULL,
  "region_id" integer REFERENCES "regions"("id"),
  "category_id" integer REFERENCES "quiz_categories"("id"),
  "question" text NOT NULL,
  "explanation" text NOT NULL,
  "is_ai_generated" boolean DEFAULT false,
  "created_at" timestamp DEFAULT now(),
  "updated_at" timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "quiz_options" (
  "id" serial PRIMARY KEY NOT NULL,
  "quiz_id" integer REFERENCES "quizzes"("id"),
  "option_text" text NOT NULL,
  "is_correct" boolean DEFAULT false,
  "display_order" integer NOT NULL,
  "created_at" timestamp DEFAULT now(),
  "updated_at" timestamp DEFAULT now()
); 