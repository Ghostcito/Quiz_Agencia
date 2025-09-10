import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Timer from "./components/ui/Timer";
import Question from "./components/Question";
import { questions } from "./data/questions";
import ProgressBar from "./components/ui/ProgressBar";
import Results from "./components/Results";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const hasAnswered = answers[currentQuestion] !== undefined;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (showResult) {
      return;
    } else if (timeLeft === 0) {
      setShowResult(true);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showResult]);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerChange = (value) => {
    setAnswers({
      ...answers,
      [currentQuestion]: parseInt(value),
    });
  };

  // Reiniciar examen
  const handleRestart = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(900);
  };

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {!showResult ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <Timer timeLeft={timeLeft} />
            </div>

            <>
              <Question
                title={questions[currentQuestion].question}
                indexQuestion={currentQuestion}
                options={questions[currentQuestion].options}
                selected={answers[currentQuestion]}
                onChange={handleAnswerChange}
              />

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <ProgressBar
                  current={currentQuestion}
                  total={questions.length}
                  onJumpToQuestion={setCurrentQuestion}
                />

                <div className="flex gap-4">
                  <button
                    onClick={previousQuestion}
                    disabled={currentQuestion === 0}
                    className={`px-5 py-2 rounded-full font-medium transition-colors ${
                      currentQuestion === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
                  >
                    Anterior
                  </button>

                  <button
                    onClick={isLastQuestion ? setShowResult : nextQuestion}
                    disabled={!hasAnswered}
                    className={`px-5 py-2 rounded-full font-medium transition-colors ${
                      !hasAnswered
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
                  >
                    {isLastQuestion ? "Finalizar examen" : "Siguiente"}
                  </button>
                </div>
              </div>
            </>
          </div>
        ) : (
          <Results
            questions={questions}
            answers={answers}
            timeLeftStart={900 - timeLeft}
            onRestart={handleRestart}
          />
        )}
      </main>
      <footer className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Simulador OECE Gratis
      </footer>
    </>
  );
}

export default App;
