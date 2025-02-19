import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

export type DbClient = PostgresJsDatabase<typeof schema>; 