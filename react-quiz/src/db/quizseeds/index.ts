import { drizzle } from 'drizzle-orm/postgres-js';
import { createClient } from '@supabase/supabase-js';
import { seedRegions } from './regions';
import { seedCategories } from './categories';
import { seedQuizzes } from './quizzes';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const db = drizzle(supabase);

  console.log('🌱 Seeding regions...');
  await seedRegions(db);

  console.log('🌱 Seeding categories...');
  await seedCategories(db);

  console.log('🌱 Seeding quizzes...');
  await seedQuizzes(db);

  console.log('✅ Seeding completed');
}

main().catch((err) => {
  console.error('❌ Seeding failed');
  console.error(err);
  process.exit(1);
}); 