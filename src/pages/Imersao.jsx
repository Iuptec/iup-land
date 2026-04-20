import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, CheckCircle, ChevronDown, Award, Zap, Brain, TrendingUp } from 'lucide-react';

// ─── ATUALIZE AQUI A CADA NOVA EDIÇÃO ────────────────────────────────────────
const EVENTO = {
  edicao: '2ª Edição',
  data: '25 de Abril de 2026',
  dataISO: '2026-04-25T08:00:00',
  horario: '8h30 — 18h00',
  local: 'FAU Uberlândia',
  cidade: 'Uberlândia — MG',
  vagas: 60,
  sympla: 'https://www.sympla.com.br/evento/imersao-inteligencia-exponencial-ih-ia/3369576',
  lotes: [
    { label: '1º Lote', prazo: 'Até 10/04', preco: 199, status: 'esgotado' },
    { label: '2º Lote', prazo: 'Até 20/04', preco: 299, status: 'ativo' },
    { label: '3º Lote', prazo: 'Até 25/04', preco: 399, status: 'breve' },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

const AGENDA = [
  { hora: '8h30',  instrutor: 'Geraldo', modulo: 'Abertura — Se reinventar é obrigatório', sub: 'Reinvenção pessoal e empresarial: quem está mudando de rota e quem corre risco de morrer.' },
  { hora: '9h15',  instrutor: 'Diego',   modulo: 'Módulo 1 — O que é IA e por que agora', sub: '' },
  { hora: '10h00', instrutor: 'Diego',   modulo: 'Módulo 2 — Assistentes de IA na prática', sub: '' },
  { hora: '11h00', instrutor: 'Diego',   modulo: 'Módulo 3 — IA com conhecimento do seu negócio (RAG)', sub: '' },
  { hora: '12h00', instrutor: '—',       modulo: 'Almoço', sub: '' },
  { hora: '13h15', instrutor: 'Geraldo', modulo: 'Módulo 4 — Escaneando Oportunidades', sub: '' },
  { hora: '14h00', instrutor: 'Diego',   modulo: 'Módulo 5 — Agentes: IA que executa', sub: '' },
  { hora: '15h00', instrutor: 'Diego',   modulo: 'Módulo 6 — Casos de uso por área', sub: '' },
  { hora: '15h50', instrutor: '—',       modulo: 'Coffee Break', sub: '' },
  { hora: '16h00', instrutor: 'Ambos',   modulo: 'Módulo 7 — Como implementar IA na sua empresa', sub: '' },
  { hora: '16h45', instrutor: 'Diego',   modulo: '🎁 Bônus — Produtividade com Claude', sub: 'Claude como co-piloto do seu trabalho: automação, análise e escrita em outro nível.', isClaudeBonus: true },
  { hora: '17h30', instrutor: 'Ambos',   modulo: 'Módulo 8 — Novidades e futuro', sub: '' },
  { hora: '18h00', instrutor: '—',       modulo: 'Encerramento', sub: '' },
];

const DEPOIMENTOS = [
  { nome: 'Alexandre Euler', cargo: 'CEO · CertiPiaui', texto: 'A imersão mudou minha visão sobre IA. Saí com agentes funcionando e economizei 20+ horas por semana. Valeu cada centavo.' },
  { nome: 'Diego Bernardes', cargo: 'Gerente de Projetos · Dhara Tecnologia', texto: 'O curso me mostrou que eu não dominava nem o básico de IA. Hoje, minhas pesquisas são muito mais precisas e meu trabalho flui com muito mais agilidade e assertividade.' },
  { nome: 'Walber Schwartz', cargo: 'CEO · Uberhub Code', texto: 'Minha experiência com a imersão promovida pela parceria IUPTEC-TUCONT foi excelente! Tanto pelo conteúdo de alto nível, quanto pela didática mão-na-massa. Recomendo para todos os profissionais e empreendedores que buscam aumentar sua produtividade com IA de forma rápida, objetiva e com profundidade.' },
];

const FAQS = [
  { p: 'Preciso saber programar?', r: 'Não. A imersão foi desenhada para profissionais e empreendedores sem background técnico. Você constrói agentes reais no dia, sem código.' },
  { p: 'O que vou conseguir fazer após a imersão?', r: 'Sair com pelo menos 2 agentes de IA e 1 assistente funcionando, prontos para usar no seu negócio.' },
  { p: 'E se eu não gostar?', r: 'Garantia incondicional até o coffee break (16h15). Se não estiver satisfeito, devolvemos 100% sem perguntas.' },
  { p: 'Qual a diferença para cursos online?', r: 'Imersão presencial com turmas pequenas, mentores que têm negócios reais e prática hands-on desde o primeiro módulo. Nada gravado, tudo ao vivo.' },
  { p: 'O evento inclui alimentação?', r: 'Sim — coffee break incluso. Almoço por conta dos participantes (há restaurantes próximos).' },
  { p: 'Posso parcelar o pagamento?', r: 'Sim. O Sympla aceita cartão de crédito parcelado. Consulte as condições no checkout.' },
];

function Countdown({ dataISO }) {
  const [time, setTime] = useState({});

  useEffect(() => {
    const calc = () => {
      const diff = new Date(dataISO) - new Date();
      if (diff <= 0) return setTime({ d: 0, h: 0, m: 0, s: 0 });
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [dataISO]);

  const pad = n => String(n).padStart(2, '0');
  const items = [
    { val: pad(time.d), label: 'dias' },
    { val: pad(time.h), label: 'horas' },
    { val: pad(time.m), label: 'min' },
    { val: pad(time.s), label: 'seg' },
  ];

  return (
    <div className="flex gap-3 justify-center">
      {items.map(({ val, label }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-16 h-16 bg-dark-800 border border-white/10 rounded-xl flex items-center justify-center text-2xl font-black text-white tabular-nums">
            {val}
          </div>
          <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3 max-w-2xl mx-auto">
      {FAQS.map((faq, i) => (
        <div key={i} className="bg-dark-800/50 border border-white/8 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left text-white/90 font-medium text-sm hover:text-white transition-colors"
          >
            {faq.p}
            <ChevronDown className={`w-4 h-4 flex-shrink-0 ml-3 transition-transform text-white/40 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-4 text-sm text-white/55 leading-relaxed border-t border-white/5 pt-3">
              {faq.r}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Imersao() {
  const loteAtivo = EVENTO.lotes.find(l => l.status === 'ativo');

  return (
    <div className="min-h-screen bg-dark-950 text-white">

      {/* Header simples */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/">
            <img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-10" />
          </Link>
          <a
            href={EVENTO.sympla}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-bold text-sm text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300"
          >
            Garantir Vaga
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-iuptec-teal/8 via-transparent to-iuptec-orange/8 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-iuptec-teal/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iuptec-orange/10 border border-iuptec-orange/30 rounded-full text-iuptec-orange text-xs font-bold uppercase tracking-widest mb-6">
            <span>⚡</span> {EVENTO.edicao} · {EVENTO.cidade}
          </div>

          <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4">
            Você Será{' '}
            <span className="bg-gradient-to-r from-iuptec-orange to-yellow-400 text-transparent bg-clip-text">
              Substituído pela IA?
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            Aprenda a usar IA para multiplicar seus resultados —{' '}
            <strong className="text-white">em 1 dia de imersão prática.</strong>
          </p>

          {/* Fórmula */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-dark-800/80 border border-iuptec-teal/20 rounded-2xl mb-8 text-sm font-bold">
            <span className="text-iuptec-teal">IH</span>
            <span className="text-white/30">+</span>
            <span className="text-iuptec-orange">IA</span>
            <span className="text-white/30">=</span>
            <span className="bg-gradient-to-r from-iuptec-teal to-cyan-400 text-transparent bg-clip-text text-base">IE</span>
            <span className="text-white/40 font-normal">Inteligência Exponencial</span>
          </div>

          {/* Info do evento */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-iuptec-teal" />{EVENTO.data}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-iuptec-teal" />{EVENTO.horario}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-iuptec-teal" />{EVENTO.local}</span>
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-3">O evento começa em</p>
            <Countdown dataISO={EVENTO.dataISO} />
          </div>

          <a
            href={EVENTO.sympla}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-black text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300 hover:shadow-xl hover:shadow-iuptec-orange/30 hover:-translate-y-0.5 text-lg"
          >
            Garantir minha vaga →
          </a>
          <p className="text-xs text-white/25 mt-3">Ingresso via Sympla · Pagamento seguro</p>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-2">Sua empresa tem <span className="text-iuptec-orange">data de validade</span>?</h2>
          <p className="text-center text-white/50 mb-10">A diferença entre quem usa IA e quem não usa está crescendo todo mês.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-800/60 border border-red-500/20 rounded-2xl p-6">
              <p className="text-red-400 font-bold text-sm uppercase tracking-wider mb-4">❌ Sem IA</p>
              {['Capacidade limitada a horas do dia', 'Uma tarefa por vez', 'Custos operacionais crescentes', 'Risco alto de substituição', 'Salário estagnado'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-2 border-b border-white/5 last:border-0 text-white/50 text-sm">
                  <span className="text-red-500/60">—</span>{item}
                </div>
              ))}
            </div>
            <div className="bg-dark-800/60 border border-iuptec-teal/30 rounded-2xl p-6">
              <p className="text-iuptec-teal font-bold text-sm uppercase tracking-wider mb-4">✓ Com Inteligência Exponencial</p>
              {['Agentes trabalhando 24/7 por você', '10+ tarefas simultâneas', 'Até 80% de economia operacional', 'Lidera a transformação', '3x mais produtivo e valorizado'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-2 border-b border-white/5 last:border-0 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-iuptec-teal flex-shrink-0" />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FÓRMULA IE */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">A fórmula</span>
          <h2 className="text-3xl lg:text-4xl font-black mt-3 mb-10">O que é <span className="bg-gradient-to-r from-iuptec-teal to-cyan-400 text-transparent bg-clip-text">Inteligência Exponencial</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, sigla: 'IH', titulo: 'Inteligência Humana', desc: 'Sua experiência, criatividade e visão estratégica — o que nenhuma IA substitui.', color: 'text-iuptec-orange', border: 'border-iuptec-orange/20' },
              { icon: Zap,   sigla: '+IA', titulo: 'Inteligência Artificial', desc: 'Velocidade, escala e automação operando sem parar enquanto você foca no que importa.', color: 'text-iuptec-teal', border: 'border-iuptec-teal/20' },
              { icon: TrendingUp, sigla: '=IE', titulo: 'Resultado Exponencial', desc: 'Quando os dois se combinam: 10x mais produtivo, 80% de economia, 3x mais competitivo.', color: 'text-yellow-400', border: 'border-yellow-400/20' },
            ].map(({ icon: Icon, sigla, titulo, desc, color, border }, i) => (
              <div key={i} className={`bg-dark-800/50 border ${border} rounded-2xl p-6 text-left`}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${color}`} />
                  <span className={`text-2xl font-black ${color}`}>{sigla}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{titulo}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">Programação</span>
          <h2 className="text-3xl font-black mt-3 mb-8">8 horas que mudam <span className="text-iuptec-orange">como você trabalha</span></h2>
          <div className="space-y-1">
            {AGENDA.map((item, i) => {
              const isBreak = item.instrutor === '—';
              const isBonus = item.modulo.startsWith('🎁');

              if (item.isClaudeBonus) {
                return (
                  <div key={i} className="relative flex items-start gap-4 px-5 py-4 rounded-xl text-sm border-2 border-[#DA7756]/40 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, rgba(218,119,86,0.08) 0%, rgba(106,64,155,0.08) 100%)' }}>
                    {/* Fundo sutil */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #DA7756 0%, transparent 60%)' }} />
                    <span className="w-12 flex-shrink-0 font-mono text-xs text-white/35 mt-0.5 relative z-10">{item.hora}</span>
                    <span className="w-14 flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full text-center bg-iuptec-teal/15 text-iuptec-teal relative z-10">
                      {item.instrutor}
                    </span>
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className="text-white font-semibold">{item.modulo}</span>
                        {/* Claude logo badge */}
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border"
                          style={{ background: 'rgba(218,119,86,0.15)', borderColor: 'rgba(218,119,86,0.4)', color: '#DA7756' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                          </svg>
                          Claude · Anthropic
                        </span>
                      </div>
                      {item.sub && <p className="text-xs text-white/45 leading-relaxed">{item.sub}</p>}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-5 py-3.5 rounded-xl text-sm ${
                    isBreak ? 'text-white/30 bg-transparent' :
                    isBonus ? 'bg-iuptec-teal/8 border border-iuptec-teal/20 text-white' :
                    'bg-dark-800/40 text-white/80'
                  }`}
                >
                  <span className="w-12 flex-shrink-0 font-mono text-xs text-white/35 mt-0.5">{item.hora}</span>
                  {!isBreak && (
                    <span className={`w-14 flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full text-center ${
                      item.instrutor === 'Geraldo' ? 'bg-iuptec-orange/15 text-iuptec-orange' :
                      item.instrutor === 'Diego'   ? 'bg-iuptec-teal/15 text-iuptec-teal' :
                      item.instrutor === 'Ambos'   ? 'bg-white/10 text-white/60' : ''
                    }`}>
                      {item.instrutor}
                    </span>
                  )}
                  <div className="flex-1">
                    <span className={isBreak ? 'text-xs uppercase tracking-widest' : ''}>{item.modulo}</span>
                    {item.sub && <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{item.sub}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSTRUTORES */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">Quem ensina</span>
          <h2 className="text-3xl font-black mt-3 mb-10">Mentores com <span className="text-iuptec-orange">negócios reais</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                photo: '/Geraldo Frontal.png',
                nome: 'Geraldo Oliveira',
                role: 'Serial Entrepreneur & Visão de Produto',
                roleColor: 'text-iuptec-orange',
                bio: '35+ anos empreendendo. Mais de 200 negócios estruturados. Conecta tecnologia e IA ao resultado real que o empreendedor precisa.',
                tags: ['Estratégias de Negócio', 'Growth Hacking', 'IA para negócios'],
                tagClass: 'bg-iuptec-orange/10 text-iuptec-orange border-iuptec-orange/20',
              },
              {
                photo: '/Foto Diego.png',
                nome: 'Diego Dias Pereira',
                role: 'Arquiteto de Soluções & AI Lead',
                roleColor: 'text-iuptec-teal',
                bio: '14+ anos entregando soluções de alto impacto. AI Lead DreamSquad, Ex-CTO Biofy. Vivência prática no Vale do Silício com Nvidia e Oracle.',
                tags: ['IA Generativa', 'Agentes Autônomos', 'Automação'],
                tagClass: 'bg-iuptec-teal/10 text-iuptec-teal border-iuptec-teal/20',
              },
            ].map((f, i) => (
              <div key={i} className="bg-dark-800/60 border border-white/10 rounded-2xl overflow-hidden">
                <div className="h-48 overflow-hidden relative">
                  <img src={f.photo} alt={f.nome} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-white">{f.nome}</h3>
                  <p className={`text-sm font-semibold mb-3 ${f.roleColor}`}>{f.role}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">{f.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((tag, j) => (
                      <span key={j} className={`px-3 py-1 rounded-full text-xs font-semibold border ${f.tagClass}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOTOS DA 1ª EDIÇÃO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">1ª Edição · Janeiro 2026</span>
          <h2 className="text-3xl font-black mt-3 mb-8">Como foi na <span className="text-iuptec-orange">prática</span></h2>
          <div className="grid grid-cols-2 gap-3">
            {/* Foto grupo — ocupa linha inteira */}
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src="/imersao-2edicao.jpg"
                alt="Turma da 1ª Edição da Imersão IE"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <p className="text-center text-white/30 text-xs mt-4">Turma completa da 1ª Edição · Uberlândia</p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">1ª Edição</span>
          <h2 className="text-3xl font-black mt-3 mb-8">O que disseram os <span className="text-white">participantes</span></h2>
          <div className="grid md:grid-cols-3 gap-5">
            {DEPOIMENTOS.map((d, i) => (
              <div key={i} className="bg-dark-800/50 border border-white/8 rounded-2xl p-5">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-iuptec-orange text-sm">★</span>)}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">"{d.texto}"</p>
                <div>
                  <p className="font-bold text-white text-sm">{d.nome}</p>
                  <p className="text-white/35 text-xs">{d.cargo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREÇOS */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">Investimento</span>
          <h2 className="text-3xl font-black mt-3 mb-3">Qualidade de São Paulo, <span className="text-iuptec-orange">90% mais barato</span></h2>
          <p className="text-white/50 mb-8 text-sm">Uma imersão em SP custa R$7.000+ com passagem e hotel. Aqui você paga a entrada e vem.</p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {EVENTO.lotes.map((lote, i) => {
              const isAtivo = lote.status === 'ativo';
              const isEsgotado = lote.status === 'esgotado';
              return (
                <div
                  key={i}
                  className={`relative rounded-2xl p-5 border-2 transition-all ${
                    isAtivo    ? 'border-iuptec-orange/60 bg-iuptec-orange/5' :
                    isEsgotado ? 'border-white/5 bg-dark-800/30 opacity-50' :
                    'border-white/10 bg-dark-800/40'
                  }`}
                >
                  {isAtivo && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-iuptec-orange text-dark-950 text-xs font-black rounded-full">DISPONÍVEL</span>
                  )}
                  <p className="font-bold text-white text-sm mb-1">{lote.label}</p>
                  <p className="text-white/35 text-xs mb-3">{lote.prazo}</p>
                  <p className="text-3xl font-black text-white mb-0.5">
                    R$ <span className={isAtivo ? 'text-iuptec-orange' : ''}>{lote.preco}</span>
                  </p>
                  <p className="text-white/30 text-xs line-through mb-4">R$ 750</p>
                  {isAtivo ? (
                    <a
                      href={EVENTO.sympla}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 rounded-xl font-bold text-sm text-center text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400"
                    >
                      Inscrever agora
                    </a>
                  ) : (
                    <div className="w-full py-2.5 rounded-xl font-bold text-sm text-center bg-white/5 text-white/30">
                      {isEsgotado ? 'Esgotado' : 'Em breve'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* O que está incluído */}
          <div className="bg-dark-800/50 border border-white/8 rounded-2xl p-6">
            <p className="font-bold text-white mb-4 text-sm">Incluído em todos os lotes:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                'Imersão completa de 8h',
                '2 Agentes IA + 1 Assistente construídos',
                'Material didático exclusivo',
                'Coffee break incluso',
                'Certificado de participação',
                'Acesso ao grupo VIP',
                'E-book: Guia Prático de IA',
                'Workshop Online de Prompts Avançados',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-iuptec-teal flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-12 bg-dark-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-dark-800/60 border-2 border-iuptec-teal/25 rounded-3xl p-8">
            <div className="w-16 h-16 bg-iuptec-teal/10 border border-iuptec-teal/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-iuptec-teal" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Garantia Incondicional</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Se até o coffee break — <strong className="text-white">16h15 do dia do evento</strong> — você não estiver satisfeito com o conteúdo, devolvemos 100% do valor pago. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-8">Perguntas <span className="text-iuptec-teal">frequentes</span></h2>
          <FAQ />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-3">Pronto para sair na frente?</h2>
          <p className="text-white/50 mb-6 text-sm">{EVENTO.data} · {EVENTO.local} · Vagas limitadas</p>
          {loteAtivo && (
            <p className="text-white/40 text-sm mb-6">Lote atual: <strong className="text-iuptec-orange">R$ {loteAtivo.preco}</strong> · {loteAtivo.prazo}</p>
          )}
          <a
            href={EVENTO.sympla}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-black text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300 hover:shadow-xl hover:shadow-iuptec-orange/30 hover:-translate-y-0.5 text-lg"
          >
            Garantir minha vaga no Sympla →
          </a>
          <p className="text-xs text-white/25 mt-3">Pagamento seguro via Sympla</p>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <Link to="/">
            <img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-8 opacity-50 hover:opacity-80 transition-opacity" />
          </Link>
          <p>© 2026 Iuptec. Todos os direitos reservados.</p>
          <Link to="/educacao" className="hover:text-white/60 transition-colors">Ver todos os cursos</Link>
        </div>
      </footer>

    </div>
  );
}
