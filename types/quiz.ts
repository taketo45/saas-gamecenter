export interface Region {
  id: number;
  name: string;
  displayName: string;
  code: string;
}

export interface QuizCategory {
  id: number;
  name: string;
  displayName: string;
  code: string;
}

export interface QuizOption {
  id: number;
  quizId: number;
  optionText: string;
  isCorrect: boolean;
  displayOrder: number;
}

export interface Quiz {
  id: number;
  regionId: number;
  categoryId: number;
  question: string;
  explanation: string;
  options: QuizOption[];
} 