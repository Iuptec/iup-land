import { useState } from 'react';
import { GraduationCap, Check, ChevronDown, Library, FileCheck, Users, Award } from 'lucide-react';
import Button from './ui/Button';

export default function Education() {
  const [activeModule, setActiveModule] = useState(null);
  
  const modules = [
    { title: 'Fundamentos de IA para Negócios', topics: ['O que é IA', 'Casos de uso reais'] },
    { title: 'Ferramentas No-Code', topics: ['Make.com', 'n8n', 'Integrações'] },
    { title: 'Criando Agentes Inteligentes', topics: ['Prompts', 'Personalização'] },
    { title: 'Integrações com APIs', topics: ['OpenAI', 'Claude'] },
    { title: 'Casos Práticos', topics: ['Atendimento 24/7', 'Automação vendas'] },
    { title: 'Monetizando com IA', topics: ['Clientes', 'Precificação'] }
  ];

  const bonuses = [
    { icon: Library, text: 'Biblioteca de Prompts' },
    { icon: FileCheck, text: 'Templates de Automações' },
    { icon: Users, text: 'Comunidade Exclusiva' },
    { icon: Award, text: 'Certificado' }
  ];

  return (
    <section id="educacao" className="py-12 lg:py-16 bg-dark-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iuptec-teal/10 border border-iuptec-teal/30 rounded-full text-iuptec-teal text-sm font-bold mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Academia</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Academia Iuptec IA</h2>
          <p className="text-xl text-white/70">Do Zero ao Pro em IA</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Conteúdo Programático</h3>
            
            {modules.map((module, idx) => (
              <div key={idx} className="bg-dark-800/40 border border-iuptec-teal/20 rounded-xl p-6 hover:border-iuptec-teal/40 transition-all">
                <button 
                  onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 border border-iuptec-teal/30 rounded-lg flex items-center justify-center font-mono font-bold text-iuptec-teal">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <span className="font-bold text-white text-left">{module.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-iuptec-teal transition-transform ${activeModule === idx ? 'rotate-180' : ''}`} />
                </button>

                {activeModule === idx && (
                  <div className="border-t border-iuptec-teal/10 mt-4 pt-4">
                    <ul className="space-y-3">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-iuptec-teal/20 border border-iuptec-teal/40 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-iuptec-teal" />
                          </div>
                          <span className="text-white/80">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-dark-800/60 border border-iuptec-teal/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Bônus Inclusos</h3>
              
              <div className="space-y-4 mb-8">
                {bonuses.map((bonus, idx) => {
                  const IconComponent = bonus.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-dark-800/60 rounded-xl border border-iuptec-teal/20">
                      <div className="w-12 h-12 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-iuptec-teal" />
                      </div>
                      <span className="font-medium">{bonus.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="bg-dark-800/40 rounded-xl p-4 border border-iuptec-teal/20 mb-6">
                <div className="flex items-center gap-2 text-sm text-iuptec-teal">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Garantia de 7 dias</span>
                </div>
              </div>

              <Button variant="animated" className="w-full">
                Ver Detalhes da Academia
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}