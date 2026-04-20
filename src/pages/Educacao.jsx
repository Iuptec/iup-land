import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Monitor, Users, Clock, ArrowRight, Zap } from 'lucide-react';

const PRODUTOS = [
  {
    id: 'imersao',
    tipo: 'presencial',
    tipoBadge: 'Presencial · Mensal',
    tipoColor: 'text-iuptec-orange bg-iuptec-orange/10 border-iuptec-orange/25',
    titulo: 'Imersão Inteligência Exponencial',
    subtitulo: 'IH + IA = IE',
    desc: '1 dia intenso de prática real. Saia com agentes de IA funcionando, prontos para usar no seu negócio.',
    preco: 299,
    precoLabel: 'A partir de',
    status: 'disponivel',
    statusLabel: '2ª Edição · Aberta',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    infos: [
      { icon: Calendar, label: '25 de Abril · Uberlândia' },
      { icon: Clock, label: '8h presenciais' },
      { icon: Users, label: 'Turmas pequenas' },
    ],
    href: '/imersao',
    cta: 'Ver detalhes e inscrever',
    featured: true,
  },
  {
    id: 'produtividade-claude',
    tipo: 'online',
    tipoBadge: 'Online · Gravado',
    tipoColor: 'text-iuptec-teal bg-iuptec-teal/10 border-iuptec-teal/25',
    titulo: 'Produtividade com Claude',
    subtitulo: 'Faça mais em menos tempo com IA',
    desc: 'Domine o assistente de IA mais avançado do mundo e multiplique sua capacidade de entrega — sem código.',
    preco: 297,
    precoLabel: 'Por apenas',
    status: 'em_breve',
    statusLabel: 'Lançamento Maio 2026',
    statusColor: 'text-iuptec-orange bg-iuptec-orange/10 border-iuptec-orange/20',
    infos: [
      { icon: Monitor, label: 'Acesso vitalício' },
      { icon: Clock, label: '6h de conteúdo' },
      { icon: Zap, label: '8 módulos práticos' },
    ],
    href: '/cursos/produtividade-com-claude',
    cta: 'Saber mais',
    featured: false,
  },
  {
    id: 'workshops',
    tipo: 'workshop',
    tipoBadge: 'Ao Vivo · Semanal',
    tipoColor: 'text-purple-400 bg-purple-400/10 border-purple-400/25',
    titulo: 'Workshops Semanais',
    subtitulo: 'Iuptec + Tucont',
    desc: 'Encontros semanais ao vivo unindo Educação Empreendedora e IA aplicada. Aprenda, aplique e evolua toda semana.',
    preco: null,
    precoLabel: null,
    status: 'em_breve',
    statusLabel: 'Em breve',
    statusColor: 'text-white/40 bg-white/5 border-white/10',
    infos: [
      { icon: Users, label: 'Turma Iuptec + Tucont' },
      { icon: Calendar, label: 'Toda semana' },
      { icon: Zap, label: 'IA + Empreendedorismo' },
    ],
    href: null,
    cta: 'Me avise quando abrir',
    featured: false,
  },
];

const FILTROS = [
  { label: 'Todos', value: 'todos' },
  { label: 'Presencial', value: 'presencial' },
  { label: 'Online', value: 'online' },
  { label: 'Workshop', value: 'workshop' },
];

export default function Educacao() {
  const [filtro, setFiltro] = useState('todos');

  const visibles = filtro === 'todos' ? PRODUTOS : PRODUTOS.filter(p => p.tipo === filtro);

  return (
    <div className="min-h-screen bg-dark-950 text-white">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/">
            <img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-10" />
          </Link>
          <Link to="/" className="text-white/50 hover:text-white text-sm transition-colors">← Voltar ao site</Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-iuptec-teal/6 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iuptec-teal/10 border border-iuptec-teal/30 rounded-full text-iuptec-teal text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5" /> Educação Iuptec
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">
            Aprenda IA com quem{' '}
            <span className="bg-gradient-to-r from-iuptec-teal to-cyan-400 text-transparent bg-clip-text">
              usa na prática
            </span>
          </h1>
          <p className="text-lg text-white/55 max-w-xl mx-auto">
            Imersões, cursos online e workshops semanais. Do zero ao avançado — aplicado ao seu negócio.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {FILTROS.map(f => (
              <button
                key={f.value}
                onClick={() => setFiltro(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  filtro === f.value
                    ? 'bg-iuptec-teal text-dark-950 border-iuptec-teal'
                    : 'bg-dark-800/50 text-white/60 border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibles.map((produto) => (
              <div
                key={produto.id}
                className={`relative flex flex-col bg-dark-800/50 border-2 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  produto.featured
                    ? 'border-iuptec-orange/40 hover:border-iuptec-orange/70'
                    : 'border-white/8 hover:border-white/20'
                }`}
              >
                {produto.featured && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-iuptec-orange to-yellow-400" />
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Tipo + Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${produto.tipoColor}`}>
                      {produto.tipoBadge}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${produto.statusColor}`}>
                      {produto.statusLabel}
                    </span>
                  </div>

                  {/* Título */}
                  <h2 className="text-xl font-black text-white mb-1">{produto.titulo}</h2>
                  <p className="text-iuptec-teal text-xs font-semibold mb-3">{produto.subtitulo}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{produto.desc}</p>

                  {/* Infos */}
                  <div className="space-y-1.5 mb-5">
                    {produto.infos.map(({ icon: Icon, label }, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/45">
                        <Icon className="w-3.5 h-3.5 text-iuptec-teal flex-shrink-0" />
                        {label}
                      </div>
                    ))}
                  </div>

                  {/* Preço */}
                  {produto.preco && (
                    <div className="mb-4">
                      <p className="text-white/30 text-xs">{produto.precoLabel}</p>
                      <p className="text-2xl font-black text-white">R$ {produto.preco}</p>
                    </div>
                  )}

                  {/* CTA */}
                  {produto.href ? (
                    <Link
                      to={produto.href}
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                        produto.featured
                          ? 'bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 hover:from-yellow-400 hover:to-iuptec-orange'
                          : 'bg-dark-700 text-white hover:bg-dark-600 border border-white/10'
                      }`}
                    >
                      {produto.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      href="https://wa.me/5531975740510?text=Quero+ser+avisado+sobre+os+workshops+semanais+Iuptec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-dark-700 text-white/60 hover:text-white hover:bg-dark-600 border border-white/10 transition-all duration-200"
                    >
                      {produto.cta} <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARCERIA IUPTEC + TUCONT */}
      <section className="py-14 bg-dark-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Uma iniciativa</p>
          <div className="flex items-center justify-center gap-6 mb-6">
            <img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-10 opacity-80" />
            <span className="text-white/20 text-2xl font-thin">×</span>
            <span className="text-xl font-black text-white/60">Tucont.AI</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-md mx-auto">
            Unimos tecnologia e inteligência artificial da Iuptec com educação empreendedora da Tucont — para que você aprenda e aplique na mesma semana.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <Link to="/">
            <img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-8 opacity-50 hover:opacity-80 transition-opacity" />
          </Link>
          <p>© 2026 Iuptec. Todos os direitos reservados.</p>
          <Link to="/" className="hover:text-white/60 transition-colors">← Voltar ao site</Link>
        </div>
      </footer>
    </div>
  );
}
