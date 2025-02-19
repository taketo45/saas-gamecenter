import { useState } from 'react';
import { QuizQuestion } from './QuizQuestion';
import { QuizResult } from './QuizResult';
import type { Quiz, QuizOption } from '@/types/quiz';

interface QuizGameProps {
  quizzes: Quiz[];
  region: string;
  category: string;
}

export function QuizGame({ quizzes, region, category }: QuizGameProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ quizId: number; answerId: number; isCorrect: boolean }[]>([]);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const handleAnswer = async (optionId: number) => {
    const currentQuiz = quizzes[currentQuestionIndex];
    const selectedOption = currentQuiz.options.find(opt => opt.id === optionId);
    
    const answer = {
      quizId: currentQuiz.id,
      answerId: optionId,
      isCorrect: selectedOption?.isCorrect ?? false,
    };

    setAnswers([...answers, answer]);

    if (currentQuestionIndex + 1 >= quizzes.length) {
      setIsGameFinished(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (isGameFinished) {
    return <QuizResult answers={answers} region={region} category={category} />;
  }

  return (
    <QuizQuestion
      quiz={quizzes[currentQuestionIndex]}
      onAnswer={handleAnswer}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={quizzes.length}
    />
  );
} 