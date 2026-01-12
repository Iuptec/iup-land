export default function Solutions() {
  const solutions = [
    {
      icon: '💻',
      title: 'Desenvolvimento Custom de IA',
      description: 'Soluções sob medida integradas aos seus sistemas',
      features: ['Agentes inteligentes', 'APIs OpenAI/Claude', 'Make/n8n', 'Python']
    },
    {
      icon: '⚡',
      title: 'Automações Prontas (Plug & Play)',
      description: 'Implementar em horas, não meses',
      features: ['Atendimento 24/7', 'Qualificação de Leads', 'Suporte Técnico', 'Gestão Financeira'],
      badge: 'Mais Popular'
    },
    {
      icon: '🎓',
      title: 'Educação em IA',
      description: 'Do básico ao avançado sem programação',
      features: ['Projetos reais', 'No-code', 'Comunidade', 'Certificado']
    }
  ]

  return (
    <section id="solucoes" className="py-24 lg:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-dark-800/60 border border-iuptec-teal/20 rounded-full text-iuptec-teal text-sm font-bold mb-6">
            Soluções
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Como podemos te ajudar</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Três caminhos para você adotar IA no seu negócio, cada um adaptado às suas necessidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <div key={idx} className="relative bg-dark-800/80 backdrop-blur-md border-2 border-transparent hover:border-iuptec-teal/40 p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-iuptec-teal/20">
              {solution.badge && (
                <div className="absolute -top-4 right-6 bg-gradient-to-r from-iuptec-teal to-cyan-400 text-dark-950 px-4 py-2 rounded-full text-sm font-bold">
                  {solution.badge}
                </div>
              )}
              <div className="text-5xl mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-white/70 mb-6">{solution.description}</p>
              <ul className="space-y-3 mb-8">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-iuptec-teal mt-2" />
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="text-iuptec-teal font-semibold hover:text-iuptec-teal/80 transition">
                Saiba mais →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
