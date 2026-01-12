export default function Testimonials() {
  const testimonials = [
    { text: 'A Iuptec transformou nossa operação. Em 3 meses, automatizamos 80% do atendimento ao cliente com IA.', author: 'Carlos Eduardo', role: 'CEO, TechStart', rating: 5 },
    { text: 'O curso de IA me deu ferramentas para qualificar leads automaticamente. Nosso time de vendas agora foca nos melhores prospects.', author: 'Mariana Silva', role: 'Diretora Comercial, Vendas Plus', rating: 5 },
    { text: 'Depois de usar o BEM por anos, confiei na Iuptec para implementar IA no escritório. Resultado: 40% mais produtividade.', author: 'Roberto Campos', role: 'Contador, RC Contabilidade', rating: 5 }
  ]

  const stats = [
    { value: '30+', label: 'Anos de Mercado' },
    { value: '4', label: 'Produtos Desenvolvidos' },
    { value: '100+', label: 'Clientes Atendidos' },
    { value: '500+', label: 'Automações Criadas' }
  ]

  return (
    <section className="py-24 lg:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-iuptec-orange/10 border border-iuptec-orange/30 rounded-full text-iuptec-orange text-sm font-bold mb-6">
            Depoimentos
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">O que dizem sobre nós</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus negócios com nossa ajuda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-dark-800/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-dark-800/60 hover:border-iuptec-teal/40 transition-all">
              <div className="flex space-x-1 mb-4">
                {[...Array(item.rating)].map((_, i) => <span key={i} className="text-iuptec-orange text-xl">★</span>)}
              </div>
              <p className="text-white/80 mb-6 italic">"{item.text}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-iuptec-teal to-cyan-600 rounded-full flex items-center justify-center font-bold">
                  {item.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold">{item.author}</div>
                  <div className="text-sm text-white/60">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-iuptec-teal to-cyan-400 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
