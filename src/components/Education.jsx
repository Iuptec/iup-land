import { useState } from 'react';
import { GraduationCap, Check, ChevronDown, Library, FileCheck, Users, Award, Sparkles } from 'lucide-react';
import Button from './ui/Button';

export default function Education() {
  const [activeModule, setActiveModule] = useState(null);
  
  const modules = [
    { title: 'Fundamentos de IA para Negócios', topics: ['O que é IA', 'Casos de uso reais'] },
    { title: 'Ferramentas No-Code (Make, n8n, ManyChat)', topics: ['Make.com', 'n8n', 'Integrações'] },
    { title: 'Criando Agentes Inteligentes', topics: ['Prompts eficazes', 'Personalização'] },
    { title: 'Integrações com APIs (OpenAI, Claude)', topics: ['OpenAI API', 'Claude API'] },
    { title: 'Casos Práticos', topics: ['Atendimento 24/7', 'Automação vendas'] },
    { title: 'Como Vender Soluções de IA', topics: ['Identificar clientes', 'Precificação'] }
  ];

  const bonusIconMap = {
    '📚': Library,
    '✅': FileCheck,
    '👥': Users,
    '🏆': Award
  };

  const bonuses = [
    { icon: '📚', text: 'Biblioteca de Prompts' },
    { icon: '✅', text: 'Templates de Automações' },
    { icon: '👥', text: 'Comunidade Exclusiva' },
    { icon: '🏆', text: 'Certificado de Conclusão' }
  ];

  return (
    <section id="educacao" className="py-12\s lg:py-16 bg-dark-950 relative overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-iuptec-teal/5 to-transparent pointer-events-none"></div>
      
      {/* Grid pattern tech */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(45, 212, 191, 0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iuptec-teal/10 border border-iuptec-teal/30 rounded-full text-iuptec-teal text-sm font-bold mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Academia</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Academia Iuptec IA</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Do Zero ao Pro em IA: Aprenda a criar soluções sem programar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Módulos - Lado Esquerdo */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Conteúdo Programático</h3>
            
            {modules.map((module, idx) => (
              <div 
                key={idx} 
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-iuptec-teal/30 to-cyan-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                
                {/* Card do módulo */}
                <div className="relative bg-dark-800/40 backdrop-blur-xl border-2 border-iuptec-teal/20 group-hover:border-iuptec-teal/50 rounded-xl overflow-hidden transition-all duration-300">
                  
                  {/* Grid pattern interno */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300" 
                       style={{
                         backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(45, 212, 191, 0.1) 1px, transparent 1px)`,
                         backgroundSize: '20px 20px'
                       }}>
                  </div>

                  {/* Fundo para legibilidade */}
                  <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/60 transition-colors duration-300"></div>

                  {/* Header do módulo */}
                  <button 
                    onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                    className="relative w-full flex items-center justify-between p-6 z-10"
                  >
                    <div className="flex items-center gap-4">
                      {/* Badge número tech */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-iuptec-teal/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-10 h-10 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 border border-iuptec-teal/30 group-hover:border-iuptec-teal/60 rounded-lg flex items-center justify-center font-mono font-bold text-iuptec-teal transition-all duration-300 group-hover:scale-110">
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                      </div>
                      
                      <span className="font-bold text-left text-white group-hover:text-iuptec-teal transition-colors duration-300 drop-shadow-lg">
                        {module.title}
                      </span>
                    </div>
                    
                    <ChevronDown 
                      className={`w-5 h-5 text-iuptec-teal transition-all duration-300 flex-shrink-0 ${activeModule === idx ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {/* Conteúdo expandido com animação suave */}
                  <div 
                    className={`transition-all duration-500 ease-in-out ${
                      activeModule === idx 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="relative border-t border-iuptec-teal/10 bg-dark-800/60 px-6 pb-6 z-10">
                      <ul className="space-y-3 pt-4">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-3 group/item">
                            <div className="relative mt-0.5 flex-shrink-0">
                              <div className="absolute inset-0 bg-iuptec-teal/30 rounded-full blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                              <div className="relative w-5 h-5 rounded-full bg-iuptec-teal/20 border border-iuptec-teal/40 flex items-center justify-center">
                                <Check className="w-3 h-3 text-iuptec-teal" strokeWidth={3} />
                              </div>
                            </div>
                            <span className="text-white/80 drop-shadow-md leading-relaxed group-hover/item:text-white transition-colors duration-300">
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Card de Pricing - Lado Direito */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="group relative">
              {/* Glow effect externo */}
              <div className="absolute -inset-1 bg-gradient-to-br from-iuptec-teal/30 to-cyan-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Card principal */}
              <div className="relative bg-dark-800/60 backdrop-blur-xl border-2 border-iuptec-teal/30 hover:border-iuptec-teal/50 p-8 rounded-2xl transition-all duration-300">
                
                {/* Grid pattern sutil */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl" 
                     style={{
                       backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.1) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(45, 212, 191, 0.1) 1px, transparent 1px)`,
                       backgroundSize: '20px 20px'
                     }}>
                </div>

                {/* Fundo para legibilidade */}
                <div className="absolute inset-0 bg-dark-900/40 rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Título */}
                  <h3 className="text-2xl font-bold mb-6 drop-shadow-lg">Bônus Inclusos</h3>
                  
                  {/* Lista de Bônus */}
                  <div className="space-y-4 mb-8">
                    {bonuses.map((bonus, idx) => {
                      const IconComponent = bonusIconMap[bonus.icon];
                      return (
                        <div 
                          key={idx} 
                          className="flex items-center gap-4 p-4 bg-dark-800/60 rounded-xl border border-iuptec-teal/20 hover:border-iuptec-teal/40 hover:bg-dark-800/80 transition-all duration-300 group/bonus"
                        >
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-iuptec-teal/30 rounded-lg blur-md opacity-0 group-hover/bonus:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative w-12 h-12 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-iuptec-teal" />
                            </div>
                          </div>
                          <span className="font-medium drop-shadow-md">{bonus.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-white/10 pt-6 mb-8">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-sm text-white/60 line-through">R$ 2.997</span>
                      <span className="text-4xl font-black bg-gradient-to-r from-iuptec-orange to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
                        R$ 997
                      </span>
                    </div>
                    <p className="text-sm text-white/70 drop-shadow-md">ou 12x de R$ 97,90</p>
                  </div>

                  {/* CTA Button usando o componente Button */}
                  <div className="mb-4">
                    <Button variant="animated" className="w-full">
                      Quero Me Matricular
                    </Button>
                  </div>

                  {/* Garantia */}
                  <div className="bg-dark-800/40 rounded-xl p-4 border border-iuptec-teal/20">
                    <div className="flex items-center gap-2 text-sm text-iuptec-teal">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span className="font-semibold drop-shadow-md">
                        Garantia de 7 dias - Se não gostar, devolvemos seu dinheiro
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}