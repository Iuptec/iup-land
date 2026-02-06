import { Code2, Zap, GraduationCap } from 'lucide-react';
import Button from './ui/Button';

export default function Solutions() {
  const solutions = [
    {
      icon: Code2,
      title: 'Desenvolvimento Custom de IA',
      description: 'Soluções sob medida integradas aos seus sistemas',
      features: ['Agentes inteligentes', 'APIs OpenAI/Claude', 'Make/n8n', 'Python'],
      buttonVariant: 'sparkle'
    },
    {
      icon: Zap,
      title: 'Automações Prontas (Plug & Play)',
      description: 'Implementar em horas, não meses',
      features: ['Atendimento 24/7', 'Qualificação de Leads', 'Suporte Técnico', 'Gestão Financeira'],
      badge: 'Mais Popular',
      buttonVariant: 'animated',
      featured: true
    },
    {
      icon: GraduationCap,
      title: 'Educação em IA',
      description: 'Do básico ao avançado sem programação',
      features: ['Projetos reais', 'No-code', 'Comunidade', 'Certificado'],
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
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Transforme-se com IA</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Escolha um caminho e implemente IA em seu negócio, cada um adaptado às suas necessidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
                    Saiba mais →
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}