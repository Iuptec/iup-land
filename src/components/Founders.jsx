import { Award } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5531975740510&text=Ol%C3%A1!+Vim+do+site+e+quero+falar+com+um+especialista+Iuptec';

const founders = [
  {
    photo: '/Geraldo Frontal.png',
    badge: '🚀 35+ anos empreendendo',
    badgeClass: 'bg-iuptec-orange/15 text-iuptec-orange border-iuptec-orange/30',
    name: 'Geraldo Oliveira',
    role: 'Serial Entrepreneur & Visão de Produto',
    roleClass: 'text-iuptec-orange',
    bio: '35+ anos empreendendo. Mais de 200 negócios estruturados. Visão comercial e de produto que conecta tecnologia a resultados reais.',
    credentials: [
      { icon: '🏢', title: 'Fundador do Grupo Infoco, Iuptec e Tucont.AI', sub: 'Soluções empresariais com IA' },
      { icon: '🌱', title: 'Jornada Empreendedora', sub: 'Formação de empreendedores' },
      { icon: '✅', title: 'Mentoria com Resultados Comprovados', sub: 'Dezenas de negócios criados a partir da mentoria' },
    ],
    tags: ['Estratégias de Negócio', 'Growth Hacking', 'IA para negócios'],
    tagClass: 'bg-iuptec-orange/10 text-iuptec-orange border-iuptec-orange/20',
  },
  {
    photo: '/Foto Diego.png',
    badge: '⚡ AI Lead DreamSquad',
    badgeClass: 'bg-iuptec-teal/15 text-iuptec-teal border-iuptec-teal/30',
    name: 'Diego Dias Pereira',
    role: 'Arquiteto de Soluções & AI Lead',
    roleClass: 'text-iuptec-teal',
    bio: '14+ anos entregando soluções tecnológicas de alto impacto. Arquiteto de sistemas sustentáveis que transformam como empresas operam em um mundo AI-First.',
    credentials: [
      { icon: '🤖', title: 'AI Lead DreamSquad / Founder Iuptec / Ex-CTO Biofy', sub: 'Liderando a transformação digital e criando soluções' },
      { icon: '💡', title: 'Aprendizado no Vale do Silício — Nvidia e Oracle', sub: 'Participação em eventos e vivências na Califórnia' },
      { icon: '⚙️', title: 'Agentes IA Autônomos', sub: 'Cria soluções que funcionam sem código' },
    ],
    tags: ['IA Generativa', 'Agentes Autônomos', 'Automação'],
    tagClass: 'bg-iuptec-teal/10 text-iuptec-teal border-iuptec-teal/20',
  },
];

export default function Founders() {
  return (
    <section className="py-20 lg:py-28 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-iuptec-teal/4 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iuptec-teal/10 border border-iuptec-teal/30 rounded-full text-iuptec-teal text-sm font-bold mb-6">
            <Award className="w-4 h-4" />
            <span>Quem está ao seu lado</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Especialistas que já{' '}
            <span className="bg-gradient-to-r from-iuptec-teal to-cyan-400 text-transparent bg-clip-text">
              construíram para valer.
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Não é teoria. São décadas empreendendo, errando, aprendendo e entregando. Agora colocamos tudo isso a serviço do seu crescimento.
          </p>
        </div>

        {/* Founder cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {founders.map((f, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden bg-dark-800/60 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Photo — tall cover */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={f.photo}
                  alt={f.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 via-transparent to-transparent" />
                {/* Badge over photo */}
                <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold border ${f.badgeClass}`}>
                  {f.badge}
                </div>
              </div>

              {/* Info */}
              <div className="p-7">
                <h3 className="text-2xl font-black text-white mb-1">{f.name}</h3>
                <p className={`text-sm font-semibold mb-4 ${f.roleClass}`}>{f.role}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{f.bio}</p>

                {/* Credentials */}
                <ul className="space-y-3 mb-6">
                  {f.credentials.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-base flex-shrink-0 mt-0.5">{c.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-white/90">{c.title}</p>
                        <p className="text-xs text-white/40">{c.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="pt-4 border-t border-white/8">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Especialidades</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${f.tagClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="absolute -inset-1 bg-gradient-to-r from-iuptec-orange/20 via-yellow-400/20 to-iuptec-orange/20 rounded-3xl blur-xl" />
          <div className="relative bg-dark-800/80 backdrop-blur-xl border-2 border-iuptec-orange/30 rounded-3xl p-10">
            <p className="text-lg text-white/80 mb-2">
              Mais de <strong className="text-iuptec-orange">100 empresas</strong> já transformaram seus resultados com nossa ajuda.
            </p>
            <p className="text-white/40 text-sm mb-8">Diagnóstico gratuito · Sem compromisso · Resposta em até 24h</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300 hover:shadow-lg hover:shadow-iuptec-orange/40 hover:-translate-y-0.5"
            >
              Falar com os fundadores
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
