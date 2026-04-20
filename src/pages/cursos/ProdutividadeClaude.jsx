import { Link } from 'react-router-dom';
import { Play, CheckCircle, Clock, Monitor, Award, ChevronDown, Users } from 'lucide-react';
import { useState } from 'react';

// ─── CONFIGURAÇÃO DO CURSO ────────────────────────────────────────────────────
const CURSO = {
  slug: 'produtividade-com-claude',
  titulo: 'Produtividade com Claude',
  subtitulo: 'Domine o assistente de IA mais avançado do mundo e multiplique sua capacidade de entrega sem escrever uma linha de código.',
  publico: 'Empreendedores, gestores e profissionais que querem fazer mais em menos tempo — com IA de verdade.',
  formato: 'Online · Gravado · Acesso imediato',
  duracao: '6 horas de conteúdo',
  modulos: 8,
  preco: 297,
  precoOriginal: 597,
  parcelas: 12,
  parcelasValor: 24.75,
  checkout: 'https://wa.me/5531975740510?text=Quero+me+inscrever+no+curso+Produtividade+com+Claude',
  status: 'em_breve', // 'disponivel' | 'em_breve'
  lancamento: 'Maio 2026',
};
// ─────────────────────────────────────────────────────────────────────────────

const MODULOS = [
  {
    num: '01',
    titulo: 'Por que Claude muda tudo',
    desc: 'Entenda o que diferencia o Claude de outros modelos e como ele se torna um parceiro de trabalho real — não apenas uma ferramenta.',
    duracao: '45 min',
  },
  {
    num: '02',
    titulo: 'Escrita e comunicação 10x mais rápida',
    desc: 'E-mails, propostas, relatórios, posts e contratos gerados com qualidade em minutos. Templates e prompts prontos incluídos.',
    duracao: '50 min',
  },
  {
    num: '03',
    titulo: 'Análise de documentos e dados',
    desc: 'Envie planilhas, PDFs e contratos. O Claude lê, interpreta e entrega insights que levariam horas extrair manualmente.',
    duracao: '55 min',
  },
  {
    num: '04',
    titulo: 'Automação de tarefas recorrentes',
    desc: 'Configure fluxos que o Claude executa por você: triagem de e-mails, resumos de reunião, follow-ups e muito mais.',
    duracao: '60 min',
  },
  {
    num: '05',
    titulo: 'Claude Projects: contexto permanente',
    desc: 'Crie projetos com memória de longo prazo. O Claude aprende sobre o seu negócio e entrega respostas cada vez mais precisas.',
    duracao: '45 min',
  },
  {
    num: '06',
    titulo: 'Prompt Engineering na prática',
    desc: 'As técnicas que fazem diferença: system prompts, chain-of-thought, few-shot. Sem jargão técnico — só o que funciona.',
    duracao: '50 min',
  },
  {
    num: '07',
    titulo: 'Claude no seu negócio: casos reais',
    desc: 'Vendas, suporte, financeiro, marketing e operações. Como montar um fluxo de trabalho com IA em cada área.',
    duracao: '45 min',
  },
  {
    num: '08',
    titulo: 'Seu plano de implementação em 30 dias',
    desc: 'Saia com um plano concreto: o que implementar primeiro, como medir resultado e como evoluir semana a semana.',
    duracao: '30 min',
  },
];

const RESULTADOS = [
  'Economize 2-4 horas por dia em tarefas repetitivas',
  'Produza conteúdo e comunicação 10x mais rápido',
  'Tome decisões mais embasadas com análise de dados em segundos',
  'Configure fluxos de trabalho que funcionam sem você',
  'Entenda como aplicar IA em cada área do seu negócio',
];

const FAQS = [
  { p: 'Preciso saber programar?', r: 'Não. O curso é 100% prático e focado no uso do Claude sem código. Se você sabe usar um smartphone, você consegue acompanhar.' },
  { p: 'Por quanto tempo tenho acesso?', r: 'Acesso vitalício. Uma vez inscrito, você assiste quantas vezes quiser, no seu ritmo.' },
  { p: 'Tem certificado?', r: 'Sim. Ao concluir todos os módulos, você recebe o certificado digital de conclusão.' },
  { p: 'Qual a diferença deste curso para outros de IA?', r: 'Este curso é focado especificamente no Claude — o modelo mais avançado da Anthropic — com aplicações diretas para o dia a dia de quem tem um negócio ou cargo de gestão.' },
  { p: 'E se eu não gostar?', r: 'Garantia de 7 dias. Se dentro de uma semana não estiver satisfeito, devolvemos 100% sem perguntas.' },
];

function FAQSection() {
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

export default function ProdutividadeClaude() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/">
            <img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-10" />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/educacao" className="text-white/50 hover:text-white text-sm transition-colors">← Todos os cursos</Link>
            {CURSO.status === 'disponivel' ? (
              <a href={CURSO.checkout} target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-bold text-sm text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400">
                Inscrever agora
              </a>
            ) : (
              <span className="px-5 py-2.5 rounded-xl font-bold text-sm bg-white/10 text-white/60">
                Em breve · {CURSO.lancamento}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-iuptec-teal/6 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-iuptec-teal/10 border border-iuptec-teal/30 text-iuptec-teal text-xs font-bold rounded-full uppercase tracking-wide">Online · Gravado</span>
                {CURSO.status === 'em_breve' && (
                  <span className="px-3 py-1 bg-iuptec-orange/10 border border-iuptec-orange/30 text-iuptec-orange text-xs font-bold rounded-full uppercase tracking-wide">Lançamento {CURSO.lancamento}</span>
                )}
              </div>

              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
                {CURSO.titulo}
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-6">{CURSO.subtitulo}</p>

              <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-8">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-iuptec-teal" />{CURSO.duracao}</span>
                <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4 text-iuptec-teal" />Acesso vitalício</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-iuptec-teal" />{CURSO.modulos} módulos</span>
              </div>

              {CURSO.status === 'disponivel' ? (
                <div>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-black text-white">R$ {CURSO.preco}</span>
                    <span className="text-white/30 line-through text-lg mb-1">R$ {CURSO.precoOriginal}</span>
                  </div>
                  <p className="text-white/40 text-sm mb-5">ou {CURSO.parcelas}x de R$ {CURSO.parcelasValor}</p>
                  <a href={CURSO.checkout} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300 hover:-translate-y-0.5 text-lg">
                    Começar agora →
                  </a>
                  <p className="text-xs text-white/25 mt-2">Garantia de 7 dias · Acesso imediato</p>
                </div>
              ) : (
                <div>
                  <p className="text-white/50 text-sm mb-4">Seja avisado quando abrir inscrições:</p>
                  <a href="https://wa.me/5531975740510?text=Quero+ser+avisado+sobre+o+curso+Produtividade+com+Claude"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300 hover:-translate-y-0.5">
                    Me avise no lançamento →
                  </a>
                </div>
              )}
            </div>

            {/* Thumbnail / preview */}
            <div className="relative">
              <div className="bg-dark-800/60 border border-white/10 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-iuptec-teal/10 border border-iuptec-teal/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Play className="w-7 h-7 text-iuptec-teal ml-1" />
                  </div>
                  <p className="text-white/40 text-sm">Preview em breve</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-iuptec-teal text-dark-950 font-black text-sm px-4 py-2 rounded-xl">
                {CURSO.modulos} módulos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-14 bg-dark-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-2">Para quem é este curso</h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-xl">{CURSO.publico}</p>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-8">O que você vai conseguir fazer</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {RESULTADOS.map((r, i) => (
              <div key={i} className="flex items-start gap-3 bg-dark-800/40 border border-white/6 rounded-xl p-4 text-sm text-white/75">
                <CheckCircle className="w-5 h-5 text-iuptec-teal flex-shrink-0 mt-0.5" />
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="py-14 bg-dark-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-2">Conteúdo do curso</h2>
          <p className="text-white/40 text-sm mb-8">{CURSO.modulos} módulos · {CURSO.duracao}</p>
          <div className="space-y-3">
            {MODULOS.map((mod, i) => (
              <div key={i} className="bg-dark-800/50 border border-white/8 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-black text-white/20 mt-0.5 w-6 flex-shrink-0">{mod.num}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <h3 className="font-bold text-white text-sm">{mod.titulo}</h3>
                      <span className="text-xs text-white/30 flex-shrink-0">{mod.duracao}</span>
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUTORES */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-8">Quem ensina</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                photo: '/Geraldo Frontal.png',
                nome: 'Geraldo Oliveira',
                role: 'Estratégia & Visão de Negócio',
                roleColor: 'text-iuptec-orange',
                bio: '35+ anos empreendendo. Conecta a aplicação prática de IA ao crescimento real do negócio.',
              },
              {
                photo: '/Foto Diego.png',
                nome: 'Diego Dias Pereira',
                role: 'Arquiteto de Soluções & AI Lead',
                roleColor: 'text-iuptec-teal',
                bio: 'AI Lead DreamSquad. Especialista em IA generativa e automação com 14+ anos entregando soluções de impacto.',
              },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-4 bg-dark-800/50 border border-white/8 rounded-2xl p-5">
                <img src={f.photo} alt={f.nome} className="w-16 h-16 rounded-xl object-cover object-top flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">{f.nome}</h3>
                  <p className={`text-xs font-semibold mb-1 ${f.roleColor}`}>{f.role}</p>
                  <p className="text-white/45 text-xs leading-relaxed">{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA + PREÇO */}
      {CURSO.status === 'disponivel' && (
        <section className="py-14 bg-dark-900">
          <div className="max-w-3xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-dark-800/60 border border-iuptec-teal/25 rounded-2xl p-6 text-center">
                <Award className="w-10 h-10 text-iuptec-teal mx-auto mb-3" />
                <h3 className="font-black text-white mb-2">Garantia de 7 dias</h3>
                <p className="text-white/50 text-sm">Não gostou? Devolvemos 100% sem perguntas dentro de 7 dias.</p>
              </div>
              <div className="bg-dark-800/60 border border-iuptec-orange/25 rounded-2xl p-6 text-center">
                <div className="mb-3">
                  <span className="text-4xl font-black text-white">R$ {CURSO.preco}</span>
                  <span className="text-white/30 line-through text-sm ml-2">R$ {CURSO.precoOriginal}</span>
                </div>
                <p className="text-white/40 text-xs mb-4">ou {CURSO.parcelas}x de R$ {CURSO.parcelasValor}</p>
                <a href={CURSO.checkout} target="_blank" rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl font-black text-sm text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400">
                  Quero me inscrever →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-center mb-8">Perguntas frequentes</h2>
          <FAQSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <Link to="/">
            <img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-8 opacity-50 hover:opacity-80 transition-opacity" />
          </Link>
          <p>© 2026 Iuptec. Todos os direitos reservados.</p>
          <Link to="/educacao" className="hover:text-white/60 transition-colors">← Todos os cursos</Link>
        </div>
      </footer>
    </div>
  );
}
