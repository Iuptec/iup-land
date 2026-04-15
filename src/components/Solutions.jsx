import { Bot, Layers, Cpu } from 'lucide-react';
import Button from './ui/Button';

// Cada solução tem: ícone, título, descrição, tags de entrega e destaque visual
const solutions = [
  {
    icon: Bot,
    tag: 'Produto de Entrada',
    title: 'Agentes & Automações Inteligentes',
    description:
      'Eliminamos trabalho manual do seu operacional. Atendimento, pré-venda, suporte, financeiro — orquestrados por IA com integrações via API.',
    deliverables: [
      'Atendimento 24/7 no WhatsApp',
      'Qualificação e pré-venda automatizada',
      'Agentes e multiagentes',
      'Integrações com CRM, ERP e APIs',
      'Suporte e financeiro automatizados',
    ],
    accent: 'teal',
    featured: false,
  },
  {
    icon: Layers,
    tag: 'Projetos On Demand',
    title: 'MVPs, Produtos & Aplicações',
    description:
      'Tiramos a ideia do papel e entregamos software real. Do MVP validado ao produto completo, com IA aplicada onde gera mais resultado.',
    deliverables: [
      'MVPs em semanas, não meses',
      'SaaS e aplicações web',
      'Produtos com IA embarcada',
      'Stack moderna e escalável',
      'Entrega iterativa com validação',
    ],
    accent: 'orange',
    featured: true,
  },
  {
    icon: Cpu,
    tag: 'Projetos On Demand',
    title: 'Arquitetura AI-First',
    description:
      'Para empresas que precisam transformar como operam. Construímos sistemas sustentáveis com IA — microserviços, LLMs, RAG e infraestrutura que escala.',
    deliverables: [
      'Arquitetura de IA enterprise',
      'Fine-tuning e RAG customizado',
      'Microserviços escaláveis',
      'Governança e IA ética',
      'Liderança técnica no projeto',
    ],
    accent: 'teal',
    featured: false,
  },
];

const accentMap = {
  teal: {
    border: 'border-iuptec-teal/20 hover:border-iuptec-teal/50',
    tag: 'text-iuptec-teal bg-iuptec-teal/10 border-iuptec-teal/20',
    icon: 'text-iuptec-teal',
    dot: 'bg-iuptec-teal',
  },
  orange: {
    border: 'border-iuptec-orange/30 hover:border-iuptec-orange/60',
    tag: 'text-iuptec-orange bg-iuptec-orange/10 border-iuptec-orange/20',
    icon: 'text-iuptec-orange',
    dot: 'bg-iuptec-orange',
  },
};

export default function Solutions() {
  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">
            O que fazemos
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            Três formas de implementar<br className="hidden lg:block" /> IA no seu negócio
          </h2>
          <p className="text-white/50 text-lg max-w-xl">
            Cada projeto começa com um diagnóstico honesto sobre o que realmente vai gerar resultado.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((s, idx) => {
            const Icon = s.icon;
            const colors = accentMap[s.accent];

            return (
              <div
                key={idx}
                className={`relative flex flex-col bg-dark-800/50 border-2 ${colors.border} rounded-2xl p-8 transition-all duration-300`}
              >
                {/* Tag */}
                <div className="mb-6">
                  <span className={`text-xs font-semibold tracking-wide uppercase border px-3 py-1 rounded-full ${colors.tag}`}>
                    {s.tag}
                  </span>
                </div>

                {/* Ícone */}
                <div className={`w-12 h-12 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} strokeWidth={1.5} />
                </div>

                {/* Título e descrição */}
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{s.description}</p>

                {/* Entregáveis */}
                <ul className="space-y-2.5 mb-10 flex-grow">
                  {s.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Button variant={s.featured ? 'animated' : 'sparkle'}>
                    Quero saber mais →
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
