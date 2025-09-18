import "./App.css";
import { useEffect, useState } from "react";
import Timer from "./components/ui/Timer";
import Question from "./components/Question";
import { questions } from "./data/questions";
import ProgressBar from "./components/ui/ProgressBar";
import Results from "./components/Results";
import StartExam from "./components/StartExam";

// Función para seleccionar 10 preguntas aleatorias
const getRandomQuestions = () =>
  questions.sort(() => Math.random() - 0.5).slice(0, 10);

function App() {
  const [selectedQuestions, setSelectedQuestions] =
    useState(getRandomQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const hasAnswered = answers[currentQuestion] !== undefined;
  const isLastQuestion = currentQuestion === selectedQuestions.length - 1;
  const [showResult, setShowResult] = useState(false);
  const [startExam, setStartExam] = useState(false);

  const handleStart = () => {
    setStartExam(true);
    setTimeLeft(900);
    setSelectedQuestions(getRandomQuestions());
    setCurrentQuestion(0);
    setAnswers([]);
  };

  useEffect(() => {
    if (!startExam || showResult) {
      return;
    } else if (timeLeft === 0) {
      setShowResult(true);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showResult, startExam]);

  const nextQuestion = () => {
    if (currentQuestion < selectedQuestions.length - 1) {
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
    setStartExam(false);
    setShowResult(false);
  };

  return (
    <>
      <main className="max-w-4xl mx-auto px-4 py-8">
        {!startExam ? (
          <StartExam handleStart={handleStart} />
        ) : !showResult ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <Timer timeLeft={timeLeft} />
            </div>

            <>
              <Question
                title={selectedQuestions[currentQuestion].question}
                indexQuestion={currentQuestion}
                options={selectedQuestions[currentQuestion].options}
                selected={answers[currentQuestion]}
                onChange={handleAnswerChange}
              />

              <div
                className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-200
                space-y-4 md:space-y-0 md:space-x-6"
              >
                <ProgressBar
                  current={currentQuestion}
                  total={selectedQuestions.length}
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
            questions={selectedQuestions}
            answers={answers}
            timeLeftStart={900 - timeLeft}
            onRestart={handleRestart}
          />
        )}
      </main>
    </>
  );
}

export default App;
