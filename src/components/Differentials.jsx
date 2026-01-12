export default function Differentials() {
  const items = [
    { icon: '🏆', title: 'Expertise Comprovada', description: '30+ anos criando empresas de sucesso', subtitle: 'Conhecemos os desafios reais do empreendedorismo' },
    { icon: '💰', title: 'Tecnologia Acessível', description: 'Preços justos para empresas de todos os tamanhos', subtitle: 'Foco em ROI rápido' },
    { icon: '📍', title: 'Atendimento Regional', description: 'Triângulo Mineiro e RM de BH', subtitle: 'Suporte próximo e personalizado' },
    { icon: '⚡', title: 'Abordagem No-Code First', description: 'Soluções práticas e rápidas', subtitle: 'Você mantém controle e independência' }
  ]

  return (
    <section className="py-24 lg:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-dark-800/60 border border-iuptec-teal/20 rounded-full text-iuptec-teal text-sm font-bold mb-6">
            Diferenciais
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Por que escolher a Iuptec?</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Combinamos décadas de experiência com as tecnologias mais modernas do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="relative w-20 h-20 mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-iuptec-teal to-cyan-600 rounded-2xl flex items-center justify-center text-4xl hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-white/80 font-medium">{item.description}</p>
              <p className="text-sm text-white/60">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
