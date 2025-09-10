export default function Question() {
  return (
    <div class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 mb-6">
        ¿Qué significa OECE?
      </h3>

      <div class="space-y-4">
        <label class="block">
          <input
            type="radio"
            name="oece_answer"
            value="1"
            class="sr-only peer"
          />
          <div class="p-4 bg-gray-100 rounded-lg border-2 border-transparent cursor-pointer hover:bg-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all">
            <span class="text-gray-700">
              Oficina de Evaluación de Contratos Estatales
            </span>
          </div>
        </label>

        <label class="block">
          <input
            type="radio"
            name="oece_answer"
            value="2"
            class="sr-only peer"
          />
          <div class="p-4 bg-gray-100 rounded-lg border-2 border-transparent cursor-pointer hover:bg-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all">
            <span class="text-gray-700">
              Órgano Encargado de las Contrataciones del Estado
            </span>
          </div>
        </label>

        <label class="block">
          <input
            type="radio"
            name="oece_answer"
            value="3"
            class="sr-only peer"
          />
          <div class="p-4 bg-gray-100 rounded-lg border-2 border-transparent cursor-pointer hover:bg-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all">
            <span class="text-gray-700">
              Oficina de Exámenes y Certificaciones Estatales
            </span>
          </div>
        </label>

        <label class="block">
          <input
            type="radio"
            name="oece_answer"
            value="4"
            class="sr-only peer"
          />
          <div class="p-4 bg-gray-100 rounded-lg border-2 border-transparent cursor-pointer hover:bg-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all">
            <span class="text-gray-700">
              Organismo Especial de Compras Estatales
            </span>
          </div>
        </label>
      </div>
    </div>
  );
}
