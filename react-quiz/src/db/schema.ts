import { pgTable, serial, text, boolean, integer, timestamp } from 'drizzle-orm/pg-core';

export const regions = pgTable('regions', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  displayName: text('display_name').notNull(),
  code: text('code').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const quizCategories = pgTable('quiz_categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  displayName: text('display_name').notNull(),
  code: text('code').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const quizzes = pgTable('quizzes', {
  id: serial('id').primaryKey(),
  regionId: integer('region_id').references(() => regions.id),
  categoryId: integer('category_id').references(() => quizCategories.id),
  question: text('question').notNull(),
  explanation: text('explanation').notNull(),
  isAiGenerated: boolean('is_ai_generated').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const quizOptions = pgTable('quiz_options', {
  id: serial('id').primaryKey(),
  quizId: integer('quiz_id').references(() => quizzes.id),
  optionText: text('option_text').notNull(),
  isCorrect: boolean('is_correct').default(false),
  displayOrder: integer('display_order').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
}); 