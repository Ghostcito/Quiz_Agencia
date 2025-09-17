export default function ProgressBar({ current, total, onJumpToQuestion }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onJumpToQuestion(index)}
          className={`w-8 h-8 rounded-full text-sm font-medium flex items-center justify-center transition-all
            ${
              index === current
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
