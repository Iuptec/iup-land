import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Mensagem enviada! Entraremos em contato em breve.')
      setFormData({ name: '', email: '', company: '', phone: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'comercial@iuptec.com.br', href: 'mailto:comercial@iuptec.com.br' },
    { icon: '📱', label: 'Telefone', value: '(31) 98468-3944', href: 'tel:+5531984683944' },
    { icon: '📍', label: 'Endereço', value: 'Av. Anselmo Alves dos Santos, 1111\nUberlândia, MG', href: '#' }
  ]

  return (
    <section id="contato" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-iuptec-teal rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-iuptec-orange rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-dark-800/60 border border-iuptec-teal/20 rounded-full text-iuptec-teal text-sm font-bold mb-6">
            Contato
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Pronto para Transformar seu Negócio?</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Preencha o formulário ou entre em contato diretamente. Responderemos em até 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
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
                  className="w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal transition placeholder-white/40"
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
                  className="w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal transition placeholder-white/40"
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
                  className="w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal transition placeholder-white/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone/WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal transition placeholder-white/40"
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
                className="w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal transition resize-none placeholder-white/40"
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-iuptec-orange/50 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-dark-800/60 backdrop-blur-xl border-2 border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <a key={idx} href={item.href} className="flex items-start space-x-4 group">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">{item.label}</div>
                      <div className="font-medium whitespace-pre-line group-hover:text-iuptec-teal transition">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
