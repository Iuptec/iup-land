import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from './ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mensagem enviada! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'comercial@iuptec.com.br', href: 'mailto:comercial@iuptec.com.br' },
    { icon: Phone, label: 'Telefone', value: '(31) 98468-3944', href: 'tel:+5531984683944' },
    { icon: MapPin, label: 'Endereço', value: 'Av. Anselmo Alves dos Santos, 1111\nUberlândia, MG', href: '#' }
  ];

  return (
    <section id="contato" className="py-12 lg:py-16 bg-dark-950 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-iuptec-teal rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-iuptec-orange rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/60 border border-iuptec-teal/20 rounded-full text-iuptec-teal text-sm font-bold mb-6">
            <Send className="w-4 h-4" />
            <span>Contato</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Pronto para Transformar seu Negócio?</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Preencha o formulário ou entre em contato diretamente. Responderemos em até 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal focus:ring-1 focus:ring-iuptec-teal/50 transition placeholder-white/40 hover:border-white/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal focus:ring-1 focus:ring-iuptec-teal/50 transition placeholder-white/40 hover:border-white/20"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Empresa</label>
                <input 
                  type="text" 
                  placeholder="Nome da empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal focus:ring-1 focus:ring-iuptec-teal/50 transition placeholder-white/40 hover:border-white/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone/WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal focus:ring-1 focus:ring-iuptec-teal/50 transition placeholder-white/40 hover:border-white/20"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Como podemos ajudar? *</label>
              <textarea 
                required 
                placeholder="Descreva seu projeto ou dúvida..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal focus:ring-1 focus:ring-iuptec-teal/50 transition resize-none placeholder-white/40 hover:border-white/20"
              />
            </div>
            
            <Button 
              variant="animated" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem →'}
            </Button>
          </form>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="group relative">
              {/* Glow discreto */}
              <div className="absolute -inset-1 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative bg-dark-800/60 backdrop-blur-xl border-2 border-white/10 group-hover:border-iuptec-teal/30 p-8 rounded-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <a 
                        key={idx} 
                        href={item.href} 
                        className="flex items-start gap-4 group/item transition-all duration-300 hover:translate-x-2"
                      >
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-iuptec-teal/30 rounded-lg blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 border border-iuptec-teal/30 rounded-lg flex items-center justify-center group-hover/item:border-iuptec-teal/60 transition-all duration-300">
                            <IconComponent className="w-5 h-5 text-iuptec-teal" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-sm text-white/60 mb-1">{item.label}</div>
                          <div className="font-medium whitespace-pre-line group-hover/item:text-iuptec-teal transition-colors duration-300">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Info adicional opcional */}
            <div className="bg-dark-800/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-iuptec-teal rounded-full mt-2 animate-pulse"></div>
                <div className="text-sm text-white/70">
                  <p className="font-medium text-white mb-1">Horário de Atendimento</p>
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