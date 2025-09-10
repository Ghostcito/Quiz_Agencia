export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          SIMULADOR EXAMEN OECE GRATIS
        </h1>

        <nav className="inline-flex items-center px-6 py-3 border border-white/30 rounded-full text-sm">
          <span className="text-white/80">Inicio</span>
          <span className="mx-2 text-white/60">/</span>
          <span className="text-white">SIMULADOR EXAMEN OECE GRATIS</span>
        </nav>
      </div>
    </header>
  );
}
