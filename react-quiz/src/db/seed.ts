import { drizzle } from 'drizzle-orm/postgres-js';
import { createClient } from '@supabase/supabase-js';
import { seedRegions } from './quizseeds/regions';
import { seedCategories } from './quizseeds/categories';
import { seedQuizzes } from './quizseeds/quizzes';
import type { DbClient } from './types';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function seed() {
  // DbClientタイプを使用してデータベースクライアントを初期化
  const db: DbClient = drizzle(supabase);

  try {
    console.log('🌱 Seeding regions...');
    await seedRegions(db);

    console.log('🌱 Seeding categories...');
    await seedCategories(db);

    console.log('🌱 Seeding quizzes...');
    await seedQuizzes(db);

    console.log('✅ Seeding completed successfully');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    throw error;
  }
}

seed().catch((error) => {
  console.error('Failed to seed database:', error);
  process.exit(1);
}); 