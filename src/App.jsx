import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Timer from "./components/ui/Timer";
import Question from "./components/Question";
import { questions } from "./data/questions";
import ProgressBar from "./components/ui/ProgressBar";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(900); // 13:22
  const hasAnswered = answers[currentQuestion] !== undefined;
  const isLastQuestion = currentQuestion === questions.length - 1;

  // const [examStarted, setExamStarted] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

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
      [currentQuestion]: value,
    });
  };

  const showResult = () => {
    console.log("Respuestas del usuario:", answers);
  };

  return (
    <>
      <Header />
      <main class="max-w-4xl mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="mb-6">
            <p class="text-lg font-semibold text-gray-700"></p>
          </div>
          <Timer timeLeft={timeLeft} />

          <Question
            title={questions[currentQuestion].question}
            index={currentQuestion}
            options={questions[currentQuestion].options}
            selected={answers[currentQuestion]}
            onChange={handleAnswerChange}
          />

          <div class="flex items-center justify-between pt-6 border-t border-gray-200">
            <ProgressBar
              current={currentQuestion}
              total={questions.length}
              onJumpToQuestion={setCurrentQuestion}
            />

            <div class="flex gap-4">
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
                onClick={isLastQuestion ? showResult : nextQuestion}
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
        </div>
      </main>
      <footer className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Simulador OECE Gratis
      </footer>
    </>
  );
}

export default App;
