import { useState, useRef, useEffect } from 'react';

const WA_BASE = 'https://api.whatsapp.com/send/?phone=5531975740510&text=';
const AVATAR = '/founder-geraldo-speaking-1.jpg';

const SEGMENTS = ['Varejo', 'Serviços', 'Saúde', 'Financeiro', 'Tecnologia', 'Indústria', 'Educação', 'Outro'];
const ROLES    = ['Sócio ou Fundador', 'C-Level ou Diretor', 'Gerente', 'Analista', 'Outro'];
const REVENUES = ['< R$500k', 'R$500k – R$2M', 'R$2M – R$10M', '> R$10M'];

const PROGRESS = { name:0, phone:0, city:1, email:1, company:2, segment:3, role:3, revenue:4, recommendation:5 };
const TOTAL_DOTS = 5;

function getRecommendation({ role, revenue }) {
  if (revenue === '> R$10M') {
    return { title: 'Arquitetura AI-First', desc: 'Sistemas enterprise com LLMs, RAG e microserviços que escalam.' };
  }
  if (revenue === 'R$2M – R$10M') {
    return { title: 'MVPs, Produtos & Aplicações', desc: 'Do MVP validado ao produto completo, com IA aplicada onde gera resultado.' };
  }
  return { title: 'Agentes & Automações Inteligentes', desc: 'Eliminamos trabalho manual — atendimento, pré-venda e suporte orquestrados por IA.' };
}

function contextMsg(step, data) {
  const { name, company, city, role } = data;
  if (step === 'phone')   return `Boa, ${name}! 👋 Qual o seu WhatsApp com DDD?`;
  if (step === 'city')    return 'Certo! De qual cidade você fala com a gente?';
  if (step === 'email') {
    const intro = city ? `${city}! Muita coisa acontecendo por aí. Boas empresas já estão usando IA pra ganhar terreno — você pode ser uma delas.` : 'Boa!';
    return `${intro} Me passa seu melhor e-mail que personalizo o que vou te mostrar.`;
  }
  if (step === 'company') return 'Perfeito! Como se chama a sua empresa?';
  if (step === 'segment') return `**${company}** — boa! Em qual segmento ela atua?`;
  if (step === 'role')    return 'Entendido! E como você se posiciona dentro da empresa?';
  if (step === 'revenue') {
    const intro = role === 'Sócio ou Fundador'
      ? `Fundador na veia, ${name}. Você sabe melhor do que ninguém onde o dinheiro escapa. A Iuptec entra exatamente aí — IA no processo, sem enrolação. Última pergunta:`
      : `Ótimo, ${name}! Com isso consigo indicar o caminho certo. Só mais uma:`;
    return `${intro} Qual é o faturamento anual da empresa hoje?`;
  }
  return '';
}

export default function ChatWidget() {
  const [isOpen, setIsOpen]       = useState(false);
  const [step, setStep]           = useState('intro');
  const [messages, setMessages]   = useState([]);
  const [input, setInput]         = useState('');
  const [typing, setTyping]       = useState(false);
  const [detectedCity, setDetectedCity] = useState('');
  const [dropdown, setDropdown]   = useState('');
  const [lead, setLead]           = useState({ name:'', phone:'', city:'', email:'', company:'', segment:'', role:'', revenue:'' });
  const scrollRef = useRef(null);
  const initialized = useRef(false);

  // Open from outside
  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener('openChat', open);
    return () => window.removeEventListener('openChat', open);
  }, []);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  // Init conversation once
  useEffect(() => {
    if (!isOpen || initialized.current) return;
    initialized.current = true;

    say('Na Iuptec, a gente não vende tecnologia por tecnologia. Vamos direto ao que gera resultado: menos operação manual, mais escala, margem de verdade. Me conta um pouco sobre você?', 400);
    say('Qual o seu nome?', 2000, 'name');

    // Detect city from IP (best-effort)
    fetch('https://ipapi.co/json/').then(r => r.json()).then(d => setDetectedCity(d.city || '')).catch(() => {});
  }, [isOpen]);

  function say(content, delay = 0, nextStep = null) {
    setTimeout(() => {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages(prev => [...prev, { role: 'bot', content }]);
        if (nextStep) setStep(nextStep);
      }, Math.max(600, content.length * 18));
    }, delay);
  }

  function addUser(content) {
    setMessages(prev => [...prev, { role: 'user', content }]);
  }

  function advance(nextStep, msg, delay = 600) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: 'bot', content: msg }]);
      setStep(nextStep);
    }, delay);
  }

  function formatPhone(v) {
    const d = v.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 7) return `(${d.slice(0,2)}) ${d.slice(2)}`;
    return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
  }

  function submitText() {
    const val = input.trim();
    if (!val) return;

    if (step === 'name') {
      const updated = { ...lead, name: val };
      setLead(updated);
      addUser(val);
      setInput('');
      advance('phone', contextMsg('phone', updated), 800);

    } else if (step === 'phone') {
      const updated = { ...lead, phone: val };
      setLead(updated);
      addUser(val);
      setInput('');
      advance('city', contextMsg('city', updated), 700);

    } else if (step === 'city') {
      confirmCity(val);

    } else if (step === 'email') {
      const updated = { ...lead, email: val };
      setLead(updated);
      addUser(val);
      setInput('');
      advance('company', contextMsg('company', updated), 700);

    } else if (step === 'company') {
      const updated = { ...lead, company: val };
      setLead(updated);
      addUser(val);
      setInput('');
      advance('segment', contextMsg('segment', updated), 800);
    }
  }

  function confirmCity(city) {
    const updated = { ...lead, city };
    setLead(updated);
    addUser(city);
    setInput('');
    setDetectedCity('');
    advance('email', contextMsg('email', updated), 1200);
  }

  function submitDropdown() {
    if (!dropdown) return;
    const val = dropdown;
    setDropdown('');

    if (step === 'segment') {
      const updated = { ...lead, segment: val };
      setLead(updated);
      addUser(val);
      advance('role', contextMsg('role', updated), 700);

    } else if (step === 'role') {
      const updated = { ...lead, role: val };
      setLead(updated);
      addUser(val);
      advance('revenue', contextMsg('revenue', updated), 1200);

    } else if (step === 'revenue') {
      const updated = { ...lead, revenue: val };
      setLead(updated);
      addUser(val);
      localStorage.setItem('iuptec_lead', JSON.stringify(updated));

      const rec = getRecommendation(updated);
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages(prev => [...prev, {
          role: 'bot',
          content: `${updated.name}, analisei o seu perfil e tenho uma indicação clara pra **${updated.company}**:\n\n**${rec.title}**\n${rec.desc}\n\nQuer que um especialista Iuptec detalhe como isso funciona na prática?`
        }]);
        setStep('recommendation');
      }, 1500);
    }
  }

  const progressIdx = PROGRESS[step] ?? 0;
  const isTextStep     = ['name','phone','city','email','company'].includes(step);
  const isDropdownStep = ['segment','role','revenue'].includes(step);

  const dropdownOpts = { segment: SEGMENTS, role: ROLES, revenue: REVENUES };
  const dropdownPlaceholder = {
    segment: 'Selecione o segmento da sua empresa',
    role: 'Selecione seu cargo',
    revenue: 'Selecionar faturamento',
  };

  function renderBold(text) {
    return text.split('**').map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="text-white font-bold">{part}</strong> : part
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[360px] md:w-[400px] h-[600px] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
             style={{ background: '#0f1117', border: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Progress bar */}
          <div className="flex items-center gap-1.5 px-5 pt-4 pb-3 flex-shrink-0">
            {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
              <div
                key={i}
                className="h-1 rounded-full transition-all duration-500"
                style={{
                  flex: i === 0 ? 2 : 1,
                  background: i <= progressIdx ? '#ffffff' : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto text-white/30 hover:text-white/70 transition-colors text-lg leading-none pl-3"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'items-start gap-2.5'}`}>
                {msg.role === 'bot' && (
                  <img src={AVATAR} alt="Assistente" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" />
                )}
                <div
                  className="max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed"
                  style={{
                    background: msg.role === 'user' ? '#1e2130' : '#1a1d27',
                    borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    color: 'rgba(255,255,255,0.88)',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {renderBold(msg.content)}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-start gap-2.5">
                <img src={AVATAR} alt="Assistente" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                <div className="px-4 py-3 rounded-2xl flex gap-1.5 items-center" style={{ background: '#1a1d27', borderRadius: '18px 18px 18px 4px' }}>
                  {[0,1,2].map(i => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: `${i*150}ms` }} />
                  ))}
                </div>
              </div>
            )}

            {step === 'recommendation' && (
              <div className="flex flex-col gap-2.5 mt-3">
                <button
                  onClick={() => {
                    const rec = getRecommendation(lead);
                    const msg = encodeURIComponent(`Olá! Sou ${lead.name} da ${lead.company}. Quero saber mais sobre ${rec.title}.`);
                    window.open(WA_BASE + msg, '_blank');
                  }}
                  className="w-full py-3.5 rounded-xl font-bold text-sm transition-colors"
                  style={{ background: '#FDB913', color: '#0A0F14' }}
                >
                  Quero começar agora
                </button>
                <button
                  onClick={() => {
                    const msg = encodeURIComponent(`Olá! Sou ${lead.name} da ${lead.company}. Vim do site e quero falar com um especialista.`);
                    window.open(WA_BASE + msg, '_blank');
                  }}
                  className="w-full py-3 rounded-xl font-medium text-sm text-white/60 hover:text-white/80 transition-colors flex items-center justify-center gap-2"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  💬 Falar no WhatsApp
                </button>
              </div>
            )}
          </div>

          {/* Text input */}
          {isTextStep && (
            <div className="px-4 pb-4 pt-2 flex-shrink-0 space-y-2">
              {step === 'city' && detectedCity && (
                <button
                  onClick={() => confirmCity(detectedCity)}
                  className="w-full px-4 py-2.5 rounded-full text-sm text-left flex items-center gap-2 transition-colors"
                  style={{ background: '#1e2130', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }}
                >
                  <span>📍</span>
                  <span className="font-medium">{detectedCity}</span>
                  <span className="text-xs opacity-40 ml-1">— toque para confirmar</span>
                </button>
              )}
              <div className="relative">
                <input
                  type={step === 'email' ? 'email' : 'text'}
                  value={step === 'phone' ? formatPhone(input) : input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && submitText()}
                  placeholder={
                    step === 'name'    ? 'Digite seu nome...' :
                    step === 'phone'   ? '(00) 00000-0000' :
                    step === 'city'    ? 'Digite sua cidade...' :
                    step === 'email'   ? 'seu@email.com' :
                                        'Nome da empresa...'
                  }
                  className="w-full pr-12 pl-5 py-3.5 rounded-full text-sm text-white placeholder-white/25 focus:outline-none transition-colors"
                  style={{ background: '#1e2130', border: '1px solid rgba(255,255,255,0.1)' }}
                  autoFocus
                />
                <button
                  onClick={submitText}
                  disabled={!input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center font-bold transition-opacity disabled:opacity-25"
                  style={{ background: '#ffffff', color: '#0f1117' }}
                >
                  ↑
                </button>
              </div>
              {step === 'city' && (
                <p className="text-center text-white/25 text-[10px] uppercase tracking-widest pt-1">Sua cidade</p>
              )}
            </div>
          )}

          {/* Dropdown input */}
          {isDropdownStep && (
            <div className="px-4 pb-4 pt-2 flex-shrink-0 space-y-2">
              <div className="relative">
                <select
                  value={dropdown}
                  onChange={e => setDropdown(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl text-sm text-white appearance-none focus:outline-none transition-colors cursor-pointer"
                  style={{ background: '#1e2130', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <option value="" disabled>{dropdownPlaceholder[step]}</option>
                  {dropdownOpts[step].map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none text-xs">▾</span>
              </div>
              {dropdown && (
                <button
                  onClick={submitDropdown}
                  className="w-full py-3.5 rounded-xl font-bold text-sm transition-colors"
                  style={{ background: '#FDB913', color: '#0A0F14' }}
                >
                  Continuar →
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group relative"
          style={{ background: 'linear-gradient(135deg, #FDB913, #F59E0B)' }}
        >
          <span className="text-2xl group-hover:rotate-12 transition-transform">💬</span>
          <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-iuptec-teal opacity-75" />
            <span className="relative inline-flex rounded-full h-6 w-6 bg-iuptec-teal text-[10px] items-center justify-center font-black text-dark-950">IA</span>
          </span>
        </button>
      )}
    </div>
  );
}
