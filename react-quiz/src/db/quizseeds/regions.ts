import { regions } from '../schema';
import type { DbClient } from '../types';

export async function seedRegions(db: DbClient) {
  await db.insert(regions).values([
    {
      name: 'tokyo_harajuku',
      displayName: '東京（原宿）',
      code: 'harajuku',
    },
    {
      name: 'fukuoka_hakata',
      displayName: '福岡（博多）',
      code: 'hakata',
    },
    {
      name: 'nevada_las_vegas',
      displayName: 'ネバダ（ラスベガス）',
      code: 'las_vegas',
    },
  ]);
} 