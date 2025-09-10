// src/components/exam/ExamTimer.jsx
export default function ExamTimer({ timeLeft }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="mb-6 text-center">
      <span className="text-lg font-medium text-gray-700">
        Tiempo restante:{" "}
      </span>
      <span
        className={`text-xl font-bold ${
          timeLeft <= 60 ? "text-red-600 animate-pulse" : "text-red-600"
        }`}
      >
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}
