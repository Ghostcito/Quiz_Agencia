export default function Question({
  title,
  indexQuestion,
  options,
  selected,
  onChange,
}) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Pregunta {indexQuestion + 1}: {title}
      </h3>

      <div className="space-y-4">
        {options.map((option, indexOption) => (
          <label
            key={indexOption}
            className="flex items-center p-4 rounded-lg border-2 border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-all duration-200 group"
          >
            <input
              type="radio"
              name={`question-${indexQuestion}`}
              value={indexOption}
              checked={selected === indexOption}
              onChange={(e) => onChange(e.target.value)}
              className="mr-4 h-5 w-5 text-blue-600 focus:ring-blue-500 accent-blue-600"
            />
            <span className="text-gray-800 text-lg group-hover:text-blue-700 font-medium transition">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
