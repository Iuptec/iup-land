import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5531975740510&text=Ol%C3%A1!+Vim+do+site+e+quero+falar+com+um+especialista+Iuptec';

const openChat = () => window.dispatchEvent(new CustomEvent('openChat'));

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'comercial@iuptec.com.br', href: 'mailto:comercial@iuptec.com.br' },
  { icon: Phone, label: 'Telefone', value: '(31) 98468-3944', href: 'tel:+5531984683944' },
  { icon: MapPin, label: 'Endereço', value: 'Av. Anselmo Alves dos Santos, 1111\nUberlândia, MG', href: '#' },
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-iuptec-teal rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-iuptec-orange rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/60 border border-iuptec-teal/20 rounded-full text-iuptec-teal text-sm font-bold mb-6">
            <MessageCircle className="w-4 h-4" />
            <span>Contato</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Pronto para dar o{' '}
            <span className="bg-gradient-to-r from-iuptec-teal to-cyan-400 text-transparent bg-clip-text">
              próximo passo?
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Descubra qual solução se encaixa melhor no seu negócio. Diagnóstico gratuito, sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Main CTA card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-iuptec-orange/30 to-yellow-400/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-dark-800/80 backdrop-blur-xl border-2 border-iuptec-orange/30 rounded-3xl p-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-iuptec-orange/20 to-yellow-400/20 border border-iuptec-orange/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-iuptec-orange" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black mb-3">Converse com nosso assistente</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Em menos de 2 minutos descobrimos qual solução é ideal para o seu estágio. Rápido, direto e sem enrolação.
              </p>
              <button
                onClick={openChat}
                className="w-full py-4 rounded-xl font-bold text-dark-950 bg-gradient-to-r from-iuptec-orange to-yellow-400 hover:from-yellow-400 hover:to-iuptec-orange transition-all duration-300 hover:shadow-lg hover:shadow-iuptec-orange/40 hover:-translate-y-0.5 mb-4"
              >
                Descobrir minha solução ideal
              </button>
              <p className="text-sm text-white/40">Ou prefere falar direto?</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-3 w-full py-3 rounded-xl font-bold border-2 border-iuptec-teal text-iuptec-teal hover:bg-iuptec-teal/10 transition-all duration-300"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-iuptec-teal/10 to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative bg-dark-800/60 backdrop-blur-xl border-2 border-white/10 group-hover:border-iuptec-teal/30 p-8 rounded-2xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-white/80">Informações de Contato</h3>
                <div className="space-y-5">
                  {contactInfo.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="w-11 h-11 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 border border-iuptec-teal/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:border-iuptec-teal/60 transition-colors duration-300">
                          <IconComponent className="w-5 h-5 text-iuptec-teal" />
                        </div>
                        <div>
                          <div className="text-xs text-white/40 mb-0.5">{item.label}</div>
                          <div className="font-medium text-white/80 group-hover/item:text-iuptec-teal transition-colors duration-300 whitespace-pre-line">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-dark-800/40 backdrop-blur-xl border border-white/10 p-5 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-iuptec-teal rounded-full mt-1.5 animate-pulse flex-shrink-0" />
                <div className="text-sm text-white/60">
                  <p className="font-medium text-white/80 mb-0.5">Horário de Atendimento</p>
                  <p>Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
