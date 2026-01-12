export default function Portfolio() {
  const products = [
    {
      year: '2024/2025',
      name: 'Plataforma Tucont Ecosystem',
      category: 'Plataforma de Contabilidade Integrativa - ERP e AI',
      description: 'Plataforma de criação de negócios que conecta empresários a contadores de forma simples e eficiente.',
      url: 'https://www.tucont.com.br',
      icon: '📄',
      side: 'left'
    },
    {
    year: '2023/2024',
      name: 'BEM - Balcão do Empresário',
      category: 'Marketplace Contábil',
      description: 'Plataforma que conecta empresários a contadores de forma simples e eficiente.',
      url: 'https://www.balcaodoempresario.com.br',
      icon: '📄',
      side: 'right'
    },
    {
      year: '2022',
      name: 'IUPCare',
      category: 'Gestão Clínica',
      description: 'Sistema completo para gestão de clínicas e consultórios médicos.',
      url: 'https://www.iupcare.com.br',
      icon: '🏥',
      side: 'left'
    },
    {
      year: '2019',
      name: 'IUPSign e IUPErp',
      category: 'ERP e Assinatura Digital',
      description: 'Solução de Gestão completa e assinatura digital com validade jurídica.',
      icon: '🔐',
      side: 'right',
      isExit: true,
      exitText: 'Vendido para Qualitycert'
    },
  ]

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-iuptec-teal rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-iuptec-orange rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-iuptec-orange/10 border border-iuptec-orange/30 rounded-full text-iuptec-orange text-sm font-bold mb-6">
            Portfólio
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Nosso Histórico em Tecnologia</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Décadas criando soluções que transformam negócios. Agora aplicamos essa expertise em IA.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-iuptec-teal via-iuptec-orange to-iuptec-teal transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-24">
            {products.map((product, idx) => (
              <div key={idx} className={`relative grid lg:grid-cols-2 gap-8 items-center ${product.side === 'right' ? 'lg:text-left' : 'lg:text-right'}`}>
                {/* Content */}
                <div className={product.side === 'right' ? 'lg:order-2' : 'lg:order-1'}>
                  <div className={`bg-dark-800/60 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-dark-800/80 hover:border-iuptec-teal/40 transition-all ${product.side === 'right' ? 'lg:ml-12' : 'lg:mr-12'}`}>
                    {product.isExit && (
                      <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 rounded-full text-sm font-bold">
                        🏆 EXIT - {product.exitText}
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-iuptec-teal/20 to-iuptec-teal/10 rounded-xl flex items-center justify-center border border-iuptec-teal/30 text-2xl">
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{product.name}</h3>
                        <span className="text-iuptec-teal text-sm font-semibold">{product.category}</span>
                      </div>
                    </div>

                    <p className="text-white/70 mb-4">{product.description}</p>

                    {product.url && (
                      <a href={product.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-iuptec-teal hover:text-iuptec-teal/80 transition">
                        <span>Visitar site</span>
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Year Badge */}
                <div className={`${product.side === 'right' ? 'lg:order-1' : 'lg:order-2'} hidden lg:flex justify-center`}>
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-iuptec-teal to-cyan-600 flex items-center justify-center">
                      <span className="text-2xl font-bold">{product.year}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Year */}
                <div className="lg:hidden mb-4">
                  <span className="inline-block px-4 py-2 bg-iuptec-teal/20 border border-iuptec-teal/30 rounded-full text-iuptec-teal font-bold">
                    {product.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="bg-dark-800/60 backdrop-blur-xl border-2 border-iuptec-teal/30 p-12 rounded-3xl inline-block">
            <h3 className="text-3xl font-black mb-4">Agora estamos aplicando essa expertise em IA 🚀</h3>
            <p className="text-xl text-white/70 mb-8">30 anos de experiência + tecnologia de ponta = Soluções que funcionam</p>
            <button className="bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-iuptec-orange/50 transition">
              Fale Conosco →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
