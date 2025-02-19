interface QuizResultProps {
  answers: { quizId: number; answerId: number; isCorrect: boolean }[];
  region: string;
  category: string;
}

export function QuizResult({ answers, region, category }: QuizResultProps) {
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const totalQuestions = answers.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        クイズ結果
      </h2>
      
      <div className="text-4xl font-bold text-orange-600 mb-6">
        {correctAnswers} / {totalQuestions}
        <span className="text-2xl ml-2">({percentage}%)</span>
      </div>

      {percentage >= 80 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            おめでとうございます！
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            表彰状を獲得しました！
          </p>
          <img
            src={`/img/quiz/award_${region}_${category}_default.jpg`}
            alt="表彰状"
            className="max-w-md mx-auto mt-4"
          />
        </div>
      )}

      <button
        onClick={() => window.location.href = '/quiz'}
        className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
      >
        クイズ選択に戻る
      </button>
    </div>
  );
} 