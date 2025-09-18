export default function StartExam({ handleStart }) {
  return (
    <div className="min-h-[600px] bg-gray-100 flex items-start justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            SIMULADOR DE EXAMEN OECE
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            Prepárate para el examen oficial con nuestro simulador completo
          </p>
        </div>

        <div className="bg-blue-50 rounded-md p-6 mb-8 text-left">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Instrucciones del Examen
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>10 preguntas sobre contrataciones públicas</li>
            <li>Tiempo límite: 15 minutos</li>
            <li>Puntaje mínimo para aprobar: 7/10</li>
            <li>Puedes navegar entre preguntas</li>
          </ul>
        </div>

        <button
          onClick={() => handleStart()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-4 rounded-md text-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105"
        >
          INICIAR EXAMEN
        </button>
      </div>
    </div>
  );
}
