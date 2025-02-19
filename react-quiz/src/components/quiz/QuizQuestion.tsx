import { Quiz } from '@/types/quiz';

interface QuizQuestionProps {
  quiz: Quiz;
  onAnswer: (optionId: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export function QuizQuestion({ quiz, onAnswer, questionNumber, totalQuestions }: QuizQuestionProps) {
  return (
    <div className="p-6">
      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        質問 {questionNumber} / {totalQuestions}
      </div>
      
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {quiz.question}
      </h2>

      <div className="space-y-4">
        {quiz.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.id)}
            className="w-full p-4 text-left bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            {option.optionText}
          </button>
        ))}
      </div>
    </div>
  );
} 