import Question from "./Question";
export default function Exam() {
  return (
    <div class="bg-white rounded-lg shadow-lg p-8">
      <div class="mb-6">
        <p class="text-lg font-semibold text-gray-700">
          Tiempo restante: <span class="text-blue-600">13:22</span>
        </p>
      </div>

      <Question />

      <div class="flex items-center justify-between pt-6 border-t border-gray-200">
        <div class="flex items-center gap-2">
          <button class="w-10 h-10 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
            1
          </button>
          <button class="w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold hover:bg-gray-300 transition-colors">
            2
          </button>
        </div>

        <div class="flex gap-4">
          <button class="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            Anterior
          </button>
          <button class="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
