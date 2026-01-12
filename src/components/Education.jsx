import { useState } from 'react'

export default function Education() {
  const [activeModule, setActiveModule] = useState(null)
  
  const modules = [
    { title: 'Fundamentos de IA para Negócios', topics: ['O que é IA', 'Casos de uso reais'] },
    { title: 'Ferramentas No-Code (Make, n8n, ManyChat)', topics: ['Make.com', 'n8n', 'Integrações'] },
    { title: 'Criando Agentes Inteligentes', topics: ['Prompts eficazes', 'Personalização'] },
    { title: 'Integrações com APIs (OpenAI, Claude)', topics: ['OpenAI API', 'Claude API'] },
    { title: 'Casos Práticos', topics: ['Atendimento 24/7', 'Automação vendas'] },
    { title: 'Como Vender Soluções de IA', topics: ['Identificar clientes', 'Precificação'] }
  ]

  const bonuses = [
    { icon: '📚', text: 'Biblioteca de Prompts' },
    { icon: '✅', text: 'Templates de Automações' },
    { icon: '👥', text: 'Comunidade Exclusiva' },
    { icon: '🏆', text: 'Certificado de Conclusão' }
  ]

  return (
    <section id="educacao" className="py-24 lg:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-iuptec-teal/10 border border-iuptec-teal/30 px-6 py-3 rounded-full mb-6">
            <span className="text-2xl">🎓</span>
            <span className="text-iuptec-teal font-semibold">Academia</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Academia Iuptec IA</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Do Zero ao Pro em IA: Aprenda a criar soluções sem programar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Conteúdo Programático</h3>
            {modules.map((module, idx) => (
              <div key={idx} className="bg-dark-800/40 backdrop-blur-sm border-2 border-white/5 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-10 h-10 bg-iuptec-teal/10 border border-iuptec-teal/30 rounded-lg flex items-center justify-center font-mono font-bold text-iuptec-teal">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="font-bold text-left">{module.title}</span>
                  </div>
                  <span className={`transition-transform ${activeModule === idx ? 'rotate-180' : ''}`}>⬇️</span>
                </button>
                {activeModule === idx && (
                  <div className="bg-dark-800/50 px-6 pb-6">
                    <ul className="space-y-3 pt-4">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="text-iuptec-teal">✓</span>
                          <span className="text-white/70">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="sticky top-24">
            <div className="bg-dark-800/60 backdrop-blur-xl border-2 border-iuptec-teal/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Bônus Inclusos</h3>
              <div className="space-y-4 mb-8">
                {bonuses.map((bonus, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 bg-dark-800/60 rounded-xl border border-white/10">
                    <div className="text-3xl">{bonus.icon}</div>
                    <span className="font-medium">{bonus.text}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-6 mb-8">
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-sm text-white/60 line-through">R$ 2.997</span>
                  <span className="text-4xl font-bold bg-gradient-to-r from-iuptec-orange to-yellow-400 text-transparent bg-clip-text">R$ 997</span>
                </div>
                <p className="text-sm text-white/60">ou 12x de R$ 97,90</p>
              </div>
              <button className="w-full bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-iuptec-orange/50 transition mb-4">
                Quero Me Matricular
              </button>
              <div className="bg-dark-800/40 rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-2 text-sm text-iuptec-teal">
                  <span>✓</span>
                  <span className="font-semibold">Garantia de 7 dias - Se não gostar, devolvemos seu dinheiro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
