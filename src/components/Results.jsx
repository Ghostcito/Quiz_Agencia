export default function ExamResults({
  questions,
  answers,
  timeLeftStart,
  onRestart,
}) {
  const correctAnswers = questions.filter((q, index) => {
    return answers[index] === q.correct;
  }).length;
  return (
    <div className="mt-10 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Resultados del Examen
      </h2>

      {/* Puntaje */}
      <div className="text-center mb-4">
        <span className="text-5xl font-extrabold text-red-600">
          {correctAnswers} / {questions.length}
        </span>
      </div>

      {/* Tiempo */}
      <div className="text-center text-gray-600 mb-4">
        Tiempo empleado: {Math.floor(timeLeftStart / 60)} minutos y{" "}
        {timeLeftStart % 60} segundos
      </div>

      {/* Mensaje de aprobación */}
      <div className="text-center mb-8">
        {correctAnswers >= 7 ? (
          <p className="text-green-600 font-semibold">
            ¡Felicidades! Aprobaste el examen. 😊
          </p>
        ) : (
          <p className="text-red-600 font-semibold">
            En esta oportunidad NO aprobó, sin embargo, no se rinda y capacítese
            para aprobar el examen.
          </p>
        )}
      </div>

      {/* Botón volver */}
      <div className="text-center mb-8">
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          VOLVER A DAR EL EXAMEN
        </button>
      </div>

      {/* Lista de respuestas */}
      <div className="space-y-6">
        {questions.map((q, index) => {
          const userAnswer = answers[index];
          return (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-800 mb-3">{q.question}</p>

              {userAnswer === undefined ? (
                <p className="text-gray-400 italic mb-3">
                  No respondió esta pregunta.
                </p>
              ) : null}

              {q.options.map((option, optIndex) => (
                <div
                  key={optIndex}
                  className={`p-3 rounded-md mb-2 text-sm ${
                    optIndex === q.correct
                      ? "bg-green-100 border border-green-300"
                      : optIndex === userAnswer
                      ? "bg-red-100 border border-red-300"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <span className="font-medium">
                    {optIndex === q.correct
                      ? "✅"
                      : optIndex === userAnswer
                      ? "❌"
                      : ""}
                  </span>{" "}
                  {option}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
