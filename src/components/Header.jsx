export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-dark-900/80 backdrop-blur-lg border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-14" />
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white/70 hover:text-iuptec-teal transition">Home</a>
          <a href="#solucoes" className="text-white/70 hover:text-iuptec-teal transition">Soluções</a>
          <a href="#portfolio" className="text-white/70 hover:text-iuptec-teal transition">Portfolio</a>
          <a href="#contato" className="text-white/70 hover:text-iuptec-teal transition">Contato</a>
        </nav>
        <button className="bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-iuptec-orange/50 transition">
          Fale Conosco
        </button>
      </div>
    </header>
  )
}
