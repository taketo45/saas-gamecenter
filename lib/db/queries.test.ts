import { getQuizRegions, getQuizCategories, getQuizzes, getQuizOptions } from './queries';
import { db } from './drizzle';
import { regions, quizCategories, quizzes, quizOptions } from './schema';
import '@testing-library/jest-dom';

jest.mock('./drizzle');

describe('Database Queries', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getQuizRegions should fetch regions from the database', async () => {
    const mockRegions = [{ id: 1, displayName: 'Region 1' }];
    db.select = jest.fn().mockReturnValue({
      from: jest.fn().mockReturnValue({
        orderBy: jest.fn().mockResolvedValue(mockRegions),
      }),
    });

    const result = await getQuizRegions();
    expect(result).toEqual(mockRegions);
    expect(db.select().from).toHaveBeenCalledWith(regions);
  });

  test('getQuizCategories should fetch categories from the database', async () => {
    const mockCategories = [{ id: 1, displayName: 'Category 1' }];
    db.select = jest.fn().mockReturnValue({
      from: jest.fn().mockReturnValue({
        orderBy: jest.fn().mockResolvedValue(mockCategories),
      }),
    });

    const result = await getQuizCategories();
    expect(result).toEqual(mockCategories);
    expect(db.select().from).toHaveBeenCalledWith(quizCategories);
  });

  test('getQuizzes should fetch quizzes based on regionId and categoryId', async () => {
    const mockQuizzes = [{ id: 1, regionId: 1, categoryId: 1 }];
    db.select = jest.fn().mockReturnValue({
      from: jest.fn().mockReturnValue({
        where: jest.fn().mockReturnValue({
          orderBy: jest.fn().mockResolvedValue(mockQuizzes),
        }),
      }),
    });

    const result = await getQuizzes(1, 1);
    expect(result).toEqual(mockQuizzes);
    expect(db.select().from).toHaveBeenCalledWith(quizzes);
  });

  test('getQuizOptions should fetch quiz options based on quizId', async () => {
    const mockOptions = [{ id: 1, quizId: 1, displayOrder: 1 }];
    db.select = jest.fn().mockReturnValue({
      from: jest.fn().mockReturnValue({
        where: jest.fn().mockReturnValue({
          orderBy: jest.fn().mockResolvedValue(mockOptions),
        }),
      }),
    });

    const result = await getQuizOptions(1);
    expect(result).toEqual(mockOptions);
    expect(db.select().from).toHaveBeenCalledWith(quizOptions);
  });
});