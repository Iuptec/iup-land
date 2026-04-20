const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5531975740510&text=Ol%C3%A1!+Vim+do+site+e+quero+falar+com+um+especialista+Iuptec';

export default function Hero() {
  const scrollToSolutions = (e) => {
    e.preventDefault();
    document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-iuptec-teal/10 via-transparent to-iuptec-orange/10"></div>

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(45, 212, 191, 0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-iuptec-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-iuptec-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-dark-800/70 border border-iuptec-orange/30 text-iuptec-orange text-sm font-bold mb-8">
          <span>✦</span>
          <span>Transforme sua empresa com IA</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-4">
          Estruturamos IA{' '}
          <span className="bg-gradient-to-r from-iuptec-teal to-cyan-400 text-transparent bg-clip-text">
            no seu negócio.
          </span>
        </h1>

        <p className="text-2xl lg:text-3xl font-semibold text-white/80 mb-6">
          Opere diferente, mantenha-se relevante e competitivo.
        </p>

        {/* Subtitle */}
        <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
          Da automação inteligente à arquitetura AI-First — entregamos soluções que transformam como os negócios{' '}
          <strong className="text-iuptec-teal">competem e escalam.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300 hover:shadow-lg hover:shadow-iuptec-orange/40 hover:-translate-y-0.5"
          >
            Falar com especialista
          </a>

          <a
            href="#solucoes"
            onClick={scrollToSolutions}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 border-iuptec-teal text-iuptec-teal hover:bg-iuptec-teal/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver Soluções
          </a>
        </div>
      </div>
    </section>
  );
}
