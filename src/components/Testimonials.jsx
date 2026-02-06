import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const testimonials = [
    { text: 'A Iuptec transformou nossa operação. Em 3 meses, automatizamos 80% do atendimento ao cliente com IA.', author: 'Carlos Eduardo', role: 'CEO, TechStart', rating: 5 },
    { text: 'O curso de IA me deu ferramentas para qualificar leads automaticamente. Nosso time de vendas agora foca nos melhores prospects.', author: 'Mariana Silva', role: 'Diretora Comercial, Vendas Plus', rating: 5 },
    { text: 'Depois de usar o BEM por anos, confiei na Iuptec para implementar IA no escritório. Resultado: 40% mais produtividade.', author: 'Roberto Campos', role: 'Contador, RC Contabilidade', rating: 5 }
  ];

  const stats = [
    { value: '30+', label: 'Anos de Mercado' },
    { value: '4', label: 'Produtos Desenvolvidos' },
    { value: '100+', label: 'Clientes Atendidos' },
    { value: '500+', label: 'Automações Criadas' }
  ];

  return (
    <section className="py-12 lg:py-16 bg-dark-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-iuptec-orange/5 to-transparent pointer-events-none"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: `linear-gradient(rgba(253, 185, 19, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(253, 185, 19, 0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iuptec-orange/10 border border-iuptec-orange/30 rounded-full text-iuptec-orange text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Depoimentos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">O que dizem sobre nós</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus negócios com nossa ajuda
          </p>
        </div>

        {/* Testimonials Grid - CORREÇÃO APLICADA AQUI */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, idx) => {
            const isHovered = hoveredCard === idx;
            
            return (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="testimonial-card group relative h-full" // Adicionado h-full
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br from-iuptec-orange/30 to-yellow-400/30 rounded-2xl blur-xl transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Card */}
                <div className={`relative bg-dark-800/40 backdrop-blur-xl border-2 p-8 rounded-2xl transition-all duration-300 h-full flex flex-col ${
                  isHovered 
                    ? 'border-iuptec-orange/50 bg-dark-800/60 -translate-y-2' 
                    : 'border-white/10'
                }`}>
                  
                  {/* Grid pattern interno */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl" 
                       style={{
                         backgroundImage: `linear-gradient(rgba(253, 185, 19, 0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(253, 185, 19, 0.1) 1px, transparent 1px)`,
                         backgroundSize: '20px 20px'
                       }}>
                  </div>

                  {/* Fundo sólido */}
                  <div className="absolute inset-0 bg-dark-900/40 rounded-2xl"></div>
                  
                  {/* Content - Adicionado flex-grow para ocupar espaço restante */}
                  <div className="relative z-10 flex-grow flex flex-col">
                    {/* Quote icon */}
                    <div className="relative mb-4">
                      <div className={`absolute inset-0 bg-iuptec-orange/30 rounded-lg blur-lg transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                      <Quote className="relative w-8 h-8 text-iuptec-orange/40" />
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <div key={i} className="relative">
                          <div className={`absolute inset-0 bg-iuptec-orange/30 rounded-full blur-sm transition-opacity duration-300 ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                          }`}></div>
                          <Star 
                            className="relative w-5 h-5 text-iuptec-orange fill-current transition-transform duration-300 group-hover:scale-110" 
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Text - Adicionado flex-grow para ocupar espaço */}
                    <p className="text-white/80 mb-6 leading-relaxed flex-grow">
                      "{item.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                      <div className="relative flex-shrink-0">
                        <div className={`absolute inset-0 bg-gradient-to-br from-iuptec-orange/50 to-yellow-400/50 rounded-full blur-md transition-opacity duration-300 ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        }`}></div>
                        <div className={`relative w-12 h-12 bg-gradient-to-br from-iuptec-orange/30 to-yellow-400/30 rounded-full flex items-center justify-center font-bold text-iuptec-orange border border-iuptec-orange/30 transition-all duration-300 ${
                          isHovered ? 'scale-110 border-iuptec-orange/60' : ''
                        }`}>
                          {item.author.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold drop-shadow-lg">{item.author}</div>
                        <div className="text-sm text-white/60">{item.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="relative">
          {/* Linha decorativa */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-iuptec-teal/30 to-transparent"></div>
          
          <div className="grid md:grid-cols-4 gap-8 pt-16">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="testimonial-stat group text-center relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative">
                  {/* Value */}
                  <div className="relative inline-block mb-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-iuptec-teal/30 to-cyan-400/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-5xl font-black bg-gradient-to-r from-iuptec-teal to-cyan-400 text-transparent bg-clip-text drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {stat.value}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  {/* Decorative line */}
                  <div className="mx-auto mt-4 h-1 w-0 bg-gradient-to-r from-iuptec-teal to-cyan-400 rounded-full group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}