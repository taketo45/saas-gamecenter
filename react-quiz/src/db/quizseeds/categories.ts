import { quizCategories } from '../schema';
import type { DbClient } from '../types';

export async function seedCategories(db: DbClient) {
  await db.insert(quizCategories).values([
    {
      name: 'culture',
      displayName: '文化',
      code: 'culture-quiz',
    },
    {
      name: 'history',
      displayName: '歴史',
      code: 'history-quiz',
    },
    {
      name: 'language',
      displayName: 'ことば',
      code: 'language-quiz',
    },
    {
      name: 'people',
      displayName: '人物',
      code: 'people-quiz',
    },
    {
      name: 'economy',
      displayName: '経済',
      code: 'economy-quiz',
    },
  ]);
} 