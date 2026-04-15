import { Code2, Zap, GraduationCap } from 'lucide-react';
import Button from './ui/Button';

export default function Solutions() {
  const solutions = [
    {
      icon: Zap,
      title: 'Hiperzord',
      description: 'Automações prontas e ferramentas profissionais',
      features: ['Atendimento 24/7', 'Qualificação de Leads', 'Automações prontas', 'Implementação rápida'],
      price: 'R$ 297/mês',
      priceDetail: 'ou R$ 1.997/ano (12x)',
      badge: 'Mais Popular',
      buttonVariant: 'animated',
      featured: true
    },
    {
      icon: GraduationCap,
      title: 'Academia Online',
      description: 'Do zero ao avançado em IA sem programar',
      features: ['6 módulos completos', 'Projetos reais', 'Comunidade exclusiva', 'Certificado'],
      price: 'R$ 997',
      priceDetail: 'ou 12x de R$ 97,90',
      buttonVariant: 'sparkle'
    },
    {
      icon: Code2,
      title: 'On-demand',
      description: 'Desenvolvimento customizado para seu negócio',
      features: ['Agentes sob medida', 'APIs OpenAI/Claude', 'Integração completa', 'Suporte dedicado'],
      price: 'Sob consulta',
      buttonVariant: 'sparkle'
    }
  ];

  return (
    <section id="solucoes" className="py-12 lg:py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-dark-800/60 border border-iuptec-teal/20 rounded-full text-iuptec-teal text-sm font-bold mb-6">
            Soluções
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Escolha Seu Caminho</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Três formas de implementar IA no seu negócio. Escolha a que faz mais sentido para você.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, idx) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={idx} 
                className={`solution-card relative bg-dark-800/80 backdrop-blur-md border-2 p-8 rounded-2xl transition-all flex flex-col ${
                  solution.featured 
                    ? 'solution-card-featured border-iuptec-orange/40' 
                    : 'border-transparent hover:border-iuptec-teal/40'
                }`}
              >
                {solution.badge && (
                  <div className="solution-badge absolute -top-4 right-6 bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 px-4 py-2 rounded-full text-sm font-bold">
                    {solution.badge}
                  </div>
                )}
                
                <div className="solution-icon-wrapper mb-6 flex justify-center">
                  <IconComponent 
                    className={`w-12 h-12 ${
                      solution.featured ? 'text-iuptec-orange' : 'text-iuptec-teal'
                    }`} 
                    strokeWidth={1.5}
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-center">{solution.title}</h3>
                <p className="text-white/70 mb-6 text-center">{solution.description}</p>
                
                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className={`text-3xl font-black mb-1 ${
                    solution.featured 
                      ? 'bg-gradient-to-r from-iuptec-orange to-yellow-400 text-transparent bg-clip-text'
                      : 'text-iuptec-teal'
                  }`}>
                    {solution.price}
                  </div>
                  {solution.priceDetail && (
                    <div className="text-sm text-white/60">{solution.priceDetail}</div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 ${
                        solution.featured ? 'bg-iuptec-orange' : 'bg-iuptec-teal'
                      }`} />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-center mt-auto">
                  <Button variant={solution.buttonVariant}>
                    {solution.price === 'Sob consulta' ? 'Falar com especialista' : 'Começar agora'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Imersão IE Card - Destaque menor */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-dark-800/80 to-dark-800/60 backdrop-blur-md border-2 border-iuptec-teal/30 p-8 rounded-2xl hover:border-iuptec-teal/50 transition-all">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-iuptec-teal" />
                </div>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Imersão IE Presencial</h3>
                <p className="text-white/70 mb-4">
                  Aprendizado hands-on com N8N para criar agentes e multiagentes + 3 semanas de acompanhamento
                </p>
                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                  <span className="text-2xl font-black text-iuptec-teal">R$ 497</span>
                  <span className="text-sm text-white/60">para alunos da Academia</span>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <Button variant="sparkle">
                  Saber mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}