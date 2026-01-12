export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-iuptec-teal/10 via-transparent to-iuptec-orange/10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-dark-800/60 border border-iuptec-teal/20 text-iuptec-teal text-sm font-semibold">
              <span>⚡</span>
              <span>30+ anos empreendendo</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Transforme seu Negócio com{' '}
              <span className="bg-gradient-to-r from-iuptec-teal to-cyan-400 text-transparent bg-clip-text">
                Inteligência Artificial
              </span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              30+ anos criando empresas. Agora ajudamos você a crescer com IA de forma{' '}
              <strong className="text-iuptec-teal">prática e acessível</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-iuptec-orange/50 transition">
                Começar Agora →
              </button>
              <button className="border-2 border-iuptec-teal text-iuptec-teal px-8 py-4 rounded-xl font-bold hover:bg-iuptec-teal/10 transition">
                Ver Cases
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-iuptec-teal/20 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-[60px] rounded-full border-2 border-iuptec-teal/30 bg-iuptec-teal/5 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-[120px] rounded-full border-2 border-iuptec-teal/40 bg-iuptec-teal/10"></div>
              <div className="absolute inset-[180px] rounded-full bg-gradient-to-br from-iuptec-orange to-yellow-400 flex items-center justify-center shadow-lg shadow-iuptec-orange/50">
                <span className="text-6xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
