import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X, ChevronDown, Zap, Users, Building2, TrendingUp, Lock } from 'lucide-react';

// ─── CONFIGURAÇÃO — ATUALIZE AQUI ────────────────────────────────────────────
const CONFIG = {
  botconversa: 'https://new-backend.botconversa.com.br/api/v1/webhooks-automation/catch/136913/Ogb3eKk8Lsry/',
  asaas: {
    essencial: 'https://www.asaas.com/c/8tcrf9udy08lcl3g',
    pro:       'https://www.asaas.com/c/1tub8wrabs4opu9w',
  },
  precos: { essencial: 79, pro: 149 },
  bonusExpira: '2026-04-25T23:59:00',
};
// ─────────────────────────────────────────────────────────────────────────────

const FERRAMENTAS = {
  essencial: [
    { nome: 'ContadorGPT', desc: 'Comparativo tributário inteligente' },
    { nome: 'Tucont Smartax', desc: 'Diagnóstico da Reforma Tributária' },
    { nome: 'Elite Hub', desc: 'Análise de Balanço e DRE' },
    { nome: 'Pack de Prompts Contabilidade', desc: '4 prompts prontos para uso diário' },
  ],
  pro: [
    { nome: 'Tudo do Essencial', desc: '+ todos os recursos abaixo', destaque: true },
    { nome: 'Divitax', desc: 'Simulação de lucros na Reforma' },
    { nome: 'Contábil Pró', desc: 'Compliance de obrigações acessórias' },
    { nome: 'Impact-Flow', desc: 'Mapeamento de processos com IA' },
    { nome: 'Prompts por segmento', desc: 'Clínica, construção, comércio e mais' },
  ],
};

const PERFIS = [
  { icon: Users,     titulo: 'Contador Solo',        desc: 'Quer ganhar tempo nas análises e entregar mais valor para os clientes sem aumentar a equipe.' },
  { icon: Building2, titulo: 'Escritório Pequeno',   desc: 'Precisa padronizar processos, reduzir retrabalho e se preparar para a Reforma Tributária.' },
  { icon: TrendingUp,titulo: 'Escritório em Crescimento', desc: 'Busca diferenciais competitivos e ferramentas que posicionem o escritório como referência em IA.' },
];

const FAQS = [
  { p: 'Preciso saber programar?', r: 'Não. Todas as ferramentas são 100% no-code. Se você usa o WhatsApp, consegue usar o Contador IA.' },
  { p: 'Como recebo acesso após assinar?', r: 'Imediatamente após o pagamento você recebe no WhatsApp os links de acesso a todos os produtos do seu plano.' },
  { p: 'Posso cancelar a qualquer momento?', r: 'Sim. Sem fidelidade, sem multa. Cancele quando quiser diretamente pelo WhatsApp.' },
  { p: 'Qual a diferença entre Essencial e Pro?', r: 'O Essencial tem as 3 ferramentas principais + prompts. O Pro adiciona Divitax, Contábil Pró, Impact-Flow e os prompts segmentados por nicho.' },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/8 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-white/85 hover:text-white transition-colors">
        {faq.p}
        <ChevronDown className={`w-4 h-4 flex-shrink-0 ml-3 text-white/30 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-5 pb-4 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-3">{faq.r}</div>}
    </div>
  );
}

function BonusCountdown() {
  const [time, setTime] = useState({});
  useState(() => {
    const calc = () => {
      const diff = new Date(CONFIG.bonusExpira) - new Date();
      if (diff <= 0) return setTime({ d: 0, h: 0, m: 0, s: 0 });
      setTime({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  });
  const pad = n => String(n ?? 0).padStart(2, '0');
  return (
    <div className="flex items-center gap-2 justify-center">
      {[{ v: pad(time.d), l: 'dias' }, { v: pad(time.h), l: 'h' }, { v: pad(time.m), l: 'min' }, { v: pad(time.s), l: 'seg' }].map(({ v, l }) => (
        <div key={l} className="flex flex-col items-center">
          <span className="bg-dark-800 border border-iuptec-orange/30 rounded-lg px-2.5 py-1 font-black text-iuptec-orange tabular-nums text-sm">{v}</span>
          <span className="text-[9px] text-white/30 mt-0.5 uppercase tracking-wider">{l}</span>
        </div>
      ))}
    </div>
  );
}

export default function ContadorIA() {
  const [plano, setPlano] = useState('pro');
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', plano: 'pro' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch(CONFIG.botconversa, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, origem: 'contador-ia', data: new Date().toISOString() }),
        mode: 'no-cors',
      });
      setStatus('success');
      setTimeout(() => {
        window.location.href = CONFIG.asaas[form.plano];
      }, 1500);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/"><img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-10" /></Link>
          <a href="#assinar" className="px-5 py-2.5 rounded-xl font-bold text-sm text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400">
            Assinar agora
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-iuptec-teal/6 via-transparent to-iuptec-orange/6 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iuptec-teal/10 border border-iuptec-teal/30 rounded-full text-iuptec-teal text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5" /> Ferramentas de IA para Contabilidade
          </div>

          <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4">
            A caixa de ferramentas de IA{' '}
            <span className="bg-gradient-to-r from-iuptec-teal to-cyan-400 text-transparent bg-clip-text">
              para contadores
            </span>
          </h1>

          <p className="text-xl text-white/65 max-w-2xl mx-auto mb-8 leading-relaxed">
            5 ferramentas especializadas + prompts prontos. Tudo o que seu escritório precisa para se preparar para a Reforma Tributária e entregar mais resultado com IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="#assinar" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300 hover:-translate-y-0.5 text-lg">
              Assinar por R$79/mês →
            </a>
            <a href="#ferramentas" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 border-white/15 text-white/80 hover:border-iuptec-teal/50 hover:text-iuptec-teal transition-all duration-300">
              Ver ferramentas incluídas
            </a>
          </div>

          <p className="text-white/30 text-xs">Sem fidelidade · Cancele quando quiser · Acesso imediato via WhatsApp</p>
        </div>
      </section>

      {/* BÔNUS IMERSÃO */}
      <section className="py-6">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative bg-gradient-to-r from-iuptec-orange/10 to-yellow-400/10 border-2 border-iuptec-orange/40 rounded-2xl p-5 text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-iuptec-orange text-dark-950 text-xs font-black rounded-full uppercase tracking-wide">
              🎁 Bônus exclusivo · Imersão IE
            </div>
            <p className="text-white font-bold mt-1 mb-2">Assine até 25/04 e ganhe acesso ao conteúdo bônus da 2ª Edição da Imersão</p>
            <div className="flex items-center justify-center gap-4">
              <BonusCountdown />
              <span className="text-white/40 text-xs hidden sm:block">restantes para o bônus expirar</span>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">Para quem é</span>
          <h2 className="text-3xl font-black mt-3 mb-8">Feito para quem <span className="text-iuptec-orange">vive a contabilidade</span></h2>
          <div className="grid md:grid-cols-3 gap-5">
            {PERFIS.map(({ icon: Icon, titulo, desc }, i) => (
              <div key={i} className="bg-dark-800/50 border border-white/8 rounded-2xl p-5">
                <div className="w-10 h-10 bg-iuptec-teal/10 border border-iuptec-teal/25 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-iuptec-teal" />
                </div>
                <h3 className="font-bold text-white mb-2">{titulo}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FERRAMENTAS */}
      <section id="ferramentas" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">O que está incluído</span>
          <h2 className="text-3xl font-black mt-3 mb-8">Escolha o plano ideal</h2>

          {/* Toggle */}
          <div className="flex gap-2 p-1 bg-dark-800/60 border border-white/8 rounded-xl w-fit mx-auto mb-8">
            {['essencial', 'pro'].map(p => (
              <button key={p} onClick={() => setPlano(p)}
                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all capitalize ${plano === p ? 'bg-iuptec-teal text-dark-950' : 'text-white/50 hover:text-white'}`}>
                {p === 'essencial' ? 'Essencial — R$79' : 'Pro — R$149'}
              </button>
            ))}
          </div>

          {/* Cards lado a lado */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Essencial */}
            <div className={`rounded-2xl p-6 border-2 transition-all ${plano === 'essencial' ? 'border-iuptec-teal/50 bg-iuptec-teal/5' : 'border-white/8 bg-dark-800/40 opacity-70'}`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-black text-white text-lg">Essencial</h3>
                {plano === 'essencial' && <span className="text-xs bg-iuptec-teal text-dark-950 font-bold px-2.5 py-0.5 rounded-full">Selecionado</span>}
              </div>
              <div className="flex items-end gap-1 mb-5">
                <span className="text-4xl font-black text-white">R$79</span>
                <span className="text-white/40 text-sm mb-1">/mês</span>
              </div>
              <ul className="space-y-3">
                {FERRAMENTAS.essencial.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className="w-4 h-4 text-iuptec-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">{f.nome}</span>
                      <span className="text-white/40 ml-1.5 text-xs">{f.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#assinar" onClick={() => setForm(f => ({ ...f, plano: 'essencial' }))}
                className={`mt-6 block w-full py-3 rounded-xl font-bold text-sm text-center transition-all ${plano === 'essencial' ? 'bg-iuptec-teal text-dark-950' : 'bg-dark-700 text-white/60 hover:bg-dark-600'}`}>
                Assinar Essencial →
              </a>
            </div>

            {/* Pro */}
            <div className={`relative rounded-2xl p-6 border-2 transition-all ${plano === 'pro' ? 'border-iuptec-orange/50 bg-iuptec-orange/5' : 'border-white/8 bg-dark-800/40 opacity-70'}`}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-iuptec-orange text-dark-950 text-xs font-black rounded-full">MAIS POPULAR</div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-black text-white text-lg">Pro</h3>
                {plano === 'pro' && <span className="text-xs bg-iuptec-orange text-dark-950 font-bold px-2.5 py-0.5 rounded-full">Selecionado</span>}
              </div>
              <div className="flex items-end gap-1 mb-5">
                <span className="text-4xl font-black text-white">R$149</span>
                <span className="text-white/40 text-sm mb-1">/mês</span>
              </div>
              <ul className="space-y-3">
                {FERRAMENTAS.pro.map((f, i) => (
                  <li key={i} className={`flex items-start gap-2.5 text-sm ${f.destaque ? 'pt-1 border-t border-white/5' : ''}`}>
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${f.destaque ? 'text-iuptec-orange' : 'text-iuptec-teal'}`} />
                    <div>
                      <span className={`font-medium ${f.destaque ? 'text-iuptec-orange' : 'text-white'}`}>{f.nome}</span>
                      <span className="text-white/40 ml-1.5 text-xs">{f.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#assinar" onClick={() => setForm(f => ({ ...f, plano: 'pro' }))}
                className={`mt-6 block w-full py-3 rounded-xl font-bold text-sm text-center transition-all ${plano === 'pro' ? 'bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950' : 'bg-dark-700 text-white/60 hover:bg-dark-600'}`}>
                Assinar Pro →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">Como funciona</span>
          <h2 className="text-3xl font-black mt-3 mb-8">Acesso em <span className="text-iuptec-teal">3 passos</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '01', titulo: 'Escolha o plano', desc: 'Essencial ou Pro. Preencha o formulário com nome, e-mail e WhatsApp.' },
              { n: '02', titulo: 'Pague com segurança', desc: 'Cartão de crédito ou PIX via Asaas. Recorrência mensal, cancele quando quiser.' },
              { n: '03', titulo: 'Acesse no WhatsApp', desc: 'Você recebe os links das ferramentas imediatamente no seu WhatsApp.' },
            ].map(({ n, titulo, desc }, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-iuptec-teal/10 border border-iuptec-teal/25 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-iuptec-teal text-sm">{n}</div>
                <div>
                  <h3 className="font-bold text-white mb-1">{titulo}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="assinar" className="py-16">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-widest text-iuptec-teal uppercase">Assinar agora</span>
            <h2 className="text-3xl font-black mt-3 mb-2">Comece hoje mesmo</h2>
            <p className="text-white/50 text-sm">Preencha os dados abaixo e você será redirecionado para o pagamento</p>
          </div>

          {status === 'success' ? (
            <div className="bg-iuptec-teal/10 border border-iuptec-teal/30 rounded-2xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-iuptec-teal mx-auto mb-3" />
              <h3 className="font-black text-white text-xl mb-2">Ótimo, {form.nome.split(' ')[0]}!</h3>
              <p className="text-white/60 text-sm">Redirecionando para o pagamento...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-dark-800/50 border border-white/8 rounded-2xl p-6 space-y-4">

              {/* Seletor de plano */}
              <div className="grid grid-cols-2 gap-3 mb-2">
                {[
                  { val: 'essencial', label: 'Essencial', preco: 'R$79/mês' },
                  { val: 'pro',       label: 'Pro',       preco: 'R$149/mês' },
                ].map(op => (
                  <label key={op.val} className={`flex flex-col items-center p-3.5 rounded-xl border-2 cursor-pointer transition-all ${form.plano === op.val ? (op.val === 'pro' ? 'border-iuptec-orange/60 bg-iuptec-orange/8' : 'border-iuptec-teal/50 bg-iuptec-teal/8') : 'border-white/8 hover:border-white/20'}`}>
                    <input type="radio" name="plano" value={op.val} checked={form.plano === op.val} onChange={e => setForm(f => ({ ...f, plano: e.target.value }))} className="sr-only" />
                    <span className={`font-bold text-sm ${form.plano === op.val ? (op.val === 'pro' ? 'text-iuptec-orange' : 'text-iuptec-teal') : 'text-white/60'}`}>{op.label}</span>
                    <span className="text-white font-black">{op.preco}</span>
                  </label>
                ))}
              </div>

              {[
                { field: 'nome',      label: 'Nome completo',   placeholder: 'Seu nome',          type: 'text' },
                { field: 'email',     label: 'E-mail',          placeholder: 'seu@email.com',     type: 'email' },
                { field: 'whatsapp',  label: 'WhatsApp com DDD',placeholder: '(00) 00000-0000',   type: 'tel' },
              ].map(({ field, label, placeholder, type }) => (
                <div key={field}>
                  <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">{label}</label>
                  <input
                    type={type}
                    required
                    value={form[field]}
                    onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-iuptec-teal/50 transition-colors"
                  />
                </div>
              ))}

              <button type="submit" disabled={status === 'loading'}
                className="w-full py-4 rounded-xl font-black text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed text-base mt-2">
                {status === 'loading' ? 'Processando...' : `Assinar plano ${form.plano === 'pro' ? 'Pro — R$149/mês' : 'Essencial — R$79/mês'} →`}
              </button>

              <div className="flex items-center justify-center gap-4 pt-1 text-white/25 text-xs">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Pagamento seguro</span>
                <span>·</span>
                <span>Sem fidelidade</span>
                <span>·</span>
                <span>Cancele quando quiser</span>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-black text-center mb-8">Perguntas <span className="text-iuptec-teal">frequentes</span></h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} faq={faq} />)}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-3">Seu escritório preparado para a <span className="text-iuptec-teal">era da IA</span></h2>
          <p className="text-white/50 text-sm mb-6">Mais de 5 ferramentas por menos de R$5 por dia</p>
          <a href="#assinar" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-black text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300 hover:-translate-y-0.5 text-lg">
            Assinar agora →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <Link to="/"><img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-8 opacity-50 hover:opacity-80 transition-opacity" /></Link>
          <p>© 2026 Iuptec. Todos os direitos reservados.</p>
          <Link to="/" className="hover:text-white/60 transition-colors">← Voltar ao site</Link>
        </div>
      </footer>
    </div>
  );
}
