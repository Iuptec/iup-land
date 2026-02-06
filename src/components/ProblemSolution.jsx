import { Clock, Brain, DollarSign, ArrowDown, Sparkles } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    { 
      icon: Clock, 
      title: 'Implemente IA e automações nos processos repetitivos',

    },
    { 
      icon: Brain, 
      title: 'Eleve o nível de conhecimento em IA e ganhe competitividade', 

    },
    { 
      icon: DollarSign, 
      title: 'Implemente nossas soluções prontas e economize', 
    }
  ];

  return (
    <section className="py-24 lg:py-16 bg-dark-950 relative overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iuptec-orange/10 border border-iuptec-orange/30 rounded-full text-iuptec-orange text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>O Desafio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-8">
            Precisa de IA, mas não sabe por onde começar?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Nós Sabemos! Processos manuais, perda competitividade, soluções Enterprise caras demais...
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div 
                key={idx} 
                className="group relative"
              >
                {/* Glow effect sutil no hover */}
                <div className="absolute -inset-0.5 bg-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                
                {/* Card */}
                <div className="relative bg-dark-800/40 backdrop-blur-xl border-2 border-red-500/20 hover:border-red-500/40 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
                  {/* Ícone centralizado com efeitos */}
                  <div className="flex justify-center mb-2">
                    <div className="relative">
                      {/* Glow de fundo do ícone */}
                      <div className="absolute inset-0 bg-red-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Container do ícone */}
                      <div className="relative w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 group-hover:border-red-500/40 group-hover:bg-red-500/20 transition-all duration-300">
                        <Icon className="w-7 h-7 text-red-400 group-hover:text-red-300 transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-center group-hover:text-white transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-white/70 text-center leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Glow pulsante no fundo da seta */}
            <div className="absolute inset-0 bg-gradient-to-br from-iuptec-teal to-cyan-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
            
            {/* Círculo com seta */}
            <div className="relative w-14 h-14 bg-gradient-to-br from-iuptec-teal to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-iuptec-teal/50 animate-bounce">
              <ArrowDown className="w-7 h-7 text-dark-950" strokeWidth={3} />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center group">
          {/* Glow effect no hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-iuptec-teal/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          
          {/* Box de solução */}
          <div className="relative bg-dark-800/60 backdrop-blur-xl border-2 border-iuptec-teal/30 hover:border-iuptec-teal/50 p-8 rounded-3xl text-center transition-all duration-300">
            {/* Ícone decorativo */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* Glow do ícone */}
                <div className="absolute inset-0 bg-iuptec-teal/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative w-14 h-14 bg-iuptec-teal/10 rounded-full flex items-center justify-center border border-iuptec-teal/30 group-hover:border-iuptec-teal/50 group-hover:bg-iuptec-teal/20 transition-all duration-300">
                  <Sparkles className="w-7 h-7 text-iuptec-teal" />
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-black mb-2">
              Viu, é só começar!
            </h3>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              É dinheiro novo no caixa pois combinamos, <strong className="text-iuptec-teal">redução de custos nos processos, LTV maior com clientes satisfeitos, ofertas produtos e serviços.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}