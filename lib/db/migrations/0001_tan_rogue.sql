CREATE TABLE "quiz_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"display_name" text NOT NULL,
	"code" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "quiz_categories_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "quiz_options" (
	"id" serial PRIMARY KEY NOT NULL,
	"quiz_id" integer,
	"option_text" text NOT NULL,
	"is_correct" boolean DEFAULT false,
	"display_order" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "quizzes" (
	"id" serial PRIMARY KEY NOT NULL,
	"region_id" integer,
	"category_id" integer,
	"question" text NOT NULL,
	"explanation" text NOT NULL,
	"is_ai_generated" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "regions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"display_name" text NOT NULL,
	"code" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "regions_code_unique" UNIQUE("code")
);
--> statement-breakpoint
ALTER TABLE "quiz_options" ADD CONSTRAINT "quiz_options_quiz_id_quizzes_id_fk" FOREIGN KEY ("quiz_id") REFERENCES "public"."quizzes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_category_id_quiz_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."quiz_categories"("id") ON DELETE no action ON UPDATE no action;