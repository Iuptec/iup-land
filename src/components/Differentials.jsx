import { Trophy, DollarSign, MapPin, Zap, Sparkles } from 'lucide-react';

export default function Differentials() {
  const items = [

    { 
      icon: Zap, 
      title: 'Abordagem No-Code First', 
      description: 'Soluções prontas práticas e rápidas', 
      subtitle: 'Você mantém controle'
    },
    
    { 
      icon: Trophy, 
      title: 'Expertise Comprovada', 
      description: 'Desenvolvemos projetos completos.', 
      subtitle: 'Conhecemos seus desafios'
    },
    { 
      icon: DollarSign, 
      title: 'Tecnologia Acessível', 
      description: 'Preços justos, prazos adequados.', 
      subtitle: 'Foco em ROI rápido'
    },
    { 
      icon: MapPin, 
      title: 'Atendimento Nacional', 
      description: 'Para tecnologia não há limites territoriais.', 
      subtitle: 'Suporte personalizado'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-dark-950 relative overflow-hidden">
      {/* Background tech decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-iuptec-teal/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/60 border border-iuptec-teal/20 rounded-full text-iuptec-teal text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Diferenciais</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Por que escolher a Iuptec?</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Porque viabilizamos a implementação de IA para empresas de qualquer tamanho.
          </p>
        </div>

        <div className="differentials-cards max-w-6xl mx-auto">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="differentials-card group relative"
              >
                {/* Glow effect externo */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-iuptec-teal/40 to-cyan-400/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Card principal - Design Glassmorphism Tech */}
                <div className="relative h-full bg-dark-800/60 backdrop-blur-xl border-2 border-iuptec-teal/20 group-hover:border-iuptec-teal/50 rounded-2xl p-8 transition-all duration-300 overflow-hidden">
                  
                  {/* Grid pattern tech background - Muito mais sutil */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300" 
                       style={{
                         backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(45, 212, 191, 0.1) 1px, transparent 1px)`,
                         backgroundSize: '20px 20px'
                       }}>
                  </div>

                  {/* Camada de fundo sólido para melhor legibilidade */}
                  <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/60 transition-colors duration-300"></div>

                  <div className="relative space-y-4 text-center z-10">
                    {/* Ícone com efeitos futuristas */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        {/* Círculo de glow pulsante */}
                        <div className="absolute inset-0 bg-iuptec-teal/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                        
                        {/* Container do ícone */}
                        <div className="relative w-20 h-20 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 border border-iuptec-teal/30 group-hover:border-iuptec-teal/60 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                          <Icon className="w-10 h-10 text-iuptec-teal group-hover:text-cyan-300 transition-colors duration-300" strokeWidth={2} />
                        </div>

                        {/* Partículas decorativas nos cantos */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-iuptec-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Conteúdo com melhor contraste */}
                    <h3 className="text-xl font-bold text-white group-hover:text-iuptec-teal transition-colors duration-300 drop-shadow-lg">
                      {item.title}
                    </h3>
                    <p className="text-white/90 font-medium leading-relaxed drop-shadow-md">
                      {item.description}
                    </p>
                    <p className="text-sm text-white/70 group-hover:text-iuptec-teal/90 transition-colors duration-300 drop-shadow-md">
                      {item.subtitle}
                    </p>

                    {/* Barra decorativa no bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-iuptec-teal to-transparent transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}