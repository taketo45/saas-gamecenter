import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const runMigrate = async () => {
  if (!process.env.POSTGRES_URL) {
    throw new Error('POSTGRES_URL is not defined');
  }

  const connection = postgres(process.env.POSTGRES_URL);
  const db = drizzle(connection);

  console.log('⏳ Running migrations...');
  
  await migrate(db, { migrationsFolder: 'lib/db/migrations' });
  
  console.log('✅ Migrations completed!');
  
  await connection.end();
};

runMigrate().catch((err) => {
  console.error('❌ Migration failed');
  console.error(err);
  process.exit(1);
}); 