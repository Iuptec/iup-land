export default function Process() {
  const steps = [
    { number: '01', icon: '🔍', title: 'Diagnóstico Gratuito', description: 'Conversamos sobre seus desafios e identificamos oportunidades de IA' },
    { number: '02', icon: '📝', title: 'Plano Personalizado', description: 'Proposta sob medida com cronograma, investimento e resultados esperados.' },
    { number: '03', icon: '🚀', title: 'Implementação', description: 'Desenvolvemos as soluções. Você acompanha e valida as entregas.' },
    { number: '04', icon: '🤝', title: 'Suporte Contínuo', description: 'Acompanhamos resultados e otimizamos constantemente.' }
  ]

  return (
    <section className="py-24 lg:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-iuptec-orange/10 border border-iuptec-orange/30 rounded-full text-iuptec-orange text-sm font-bold mb-6">
            Processo
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Como Funciona</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Um processo simples e transparente, do diagnóstico ao suporte contínuo.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-iuptec-teal via-iuptec-orange to-iuptec-teal" />
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-dark-800/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl text-center relative z-10 hover:bg-dark-800/60 hover:border-iuptec-teal/40 transition-all">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-iuptec-teal to-cyan-600 rounded-2xl flex items-center justify-center text-4xl">
                      {step.icon}
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-dark-950 border-2 border-iuptec-orange rounded-full flex items-center justify-center font-mono font-bold text-iuptec-orange">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
