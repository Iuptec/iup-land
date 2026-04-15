// ChatWidget.jsx - LÓGICA SIMPLES (SEM IA)
import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState('initial')
  const [leadData, setLeadData] = useState({
    name: '',
    phone: '',
    email: '',
    companySize: '',
    hasIA: '',
    goal: ''
  })
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Olá! 👋 Sou o Assistente da Iuptec. Vamos descobrir a melhor solução pra você!'
    }
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const addMessage = (role, content, buttons = null) => {
    setMessages(prev => [...prev, { role, content, buttons }])
  }

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return `(${digits}`
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const getRecommendation = () => {
    const { companySize, hasIA, goal } = leadData
    
    // Lógica de recomendação
    if (goal === 'aprender' || companySize === 'solo' || hasIA === 'nao') {
      return {
        product: 'Academia Online',
        price: 'R$ 997',
        description: '🎓 Do zero ao avançado em IA\n✨ Sem programar\n✨ 6 módulos + projetos',
        cta: 'Quero começar agora'
      }
    }
    
    if (goal === 'automatizar' || companySize === 'pequena') {
      return {
        product: 'Hiperzord',
        price: 'R$ 297/mês ou R$ 1.997/ano',
        description: '⚡ Automações prontas\n✨ Ferramentas profissionais\n✨ Implementação rápida',
        cta: 'Começar agora'
      }
    }
    
    if (goal === 'presencial') {
      return {
        product: 'Imersão IE',
        price: 'R$ 497',
        description: '🎯 Presencial\n✨ 3 semanas acompanhamento\n✨ N8N para agentes',
        cta: 'Quero participar'
      }
    }
    
    // Default: On-demand
    return {
      product: 'Desenvolvimento On-demand',
      price: 'Sob consulta',
      description: '🎯 Solução customizada\n✨ Agentes sob medida\n✨ Integração completa',
      cta: 'Falar com especialista'
    }
  }

  const handleInitialChoice = (choice) => {
    if (choice === 'start') {
      addMessage('user', 'Vamos começar!')
      addMessage('assistant', 'Ótimo! Qual seu nome? 😊')
      setStep('name')
    }
  }

  const handleNameSubmit = () => {
    if (!input.trim()) return
    const name = input.trim()
    setLeadData(prev => ({ ...prev, name }))
    addMessage('user', name)
    addMessage('assistant', `Prazer, ${name}! 👋\n\nQual seu WhatsApp com DDD?`)
    setInput('')
    setStep('phone')
  }

  const handlePhoneSubmit = () => {
    if (!input.trim()) return
    const phone = input.trim()
    setLeadData(prev => ({ ...prev, phone }))
    addMessage('user', phone)
    addMessage('assistant', 'Perfeito! E seu melhor e-mail?')
    setInput('')
    setStep('email')
  }

  const handleEmailSubmit = () => {
    if (!input.trim()) return
    const email = input.trim()
    setLeadData(prev => ({ ...prev, email }))
    addMessage('user', email)
    
    localStorage.setItem('iuptec_lead', JSON.stringify({ ...leadData, email }))
    
    addMessage('assistant', 
      'Agora, me conta:\n\nQuantas pessoas trabalham na sua empresa?',
      [
        { text: 'Só eu', value: 'solo' },
        { text: '2-10 pessoas', value: 'pequena' },
        { text: '11-50 pessoas', value: 'media' },
        { text: 'Mais de 50', value: 'grande' }
      ]
    )
    setInput('')
    setStep('companySize')
  }

  const handleCompanySize = (size) => {
    setLeadData(prev => ({ ...prev, companySize: size }))
    const sizeText = {
      'solo': 'Só eu',
      'pequena': '2-10 pessoas',
      'media': '11-50 pessoas',
      'grande': 'Mais de 50'
    }
    addMessage('user', sizeText[size])
    
    addMessage('assistant',
      'Sua empresa já usa IA de alguma forma?',
      [
        { text: 'Sim, já usamos', value: 'sim' },
        { text: 'Não, ainda não', value: 'nao' },
        { text: 'Estamos começando', value: 'comecando' }
      ]
    )
    setStep('hasIA')
  }

  const handleHasIA = (hasIA) => {
    setLeadData(prev => ({ ...prev, hasIA }))
    const hasIAText = {
      'sim': 'Sim, já usamos',
      'nao': 'Não, ainda não',
      'comecando': 'Estamos começando'
    }
    addMessage('user', hasIAText[hasIA])
    
    addMessage('assistant',
      'Qual seu principal objetivo?',
      [
        { text: '🎓 Aprender IA', value: 'aprender' },
        { text: '⚡ Automatizar processos', value: 'automatizar' },
        { text: '🎯 Imersão presencial', value: 'presencial' },
        { text: '🔧 Solução customizada', value: 'custom' }
      ]
    )
    setStep('goal')
  }

  const handleGoal = (goal) => {
    setLeadData(prev => ({ ...prev, goal }))
    const goalText = {
      'aprender': '🎓 Aprender IA',
      'automatizar': '⚡ Automatizar processos',
      'presencial': '🎯 Imersão presencial',
      'custom': '🔧 Solução customizada'
    }
    addMessage('user', goalText[goal])
    
    const finalData = { ...leadData, goal }
    const recommendation = getRecommendation()
    
    setTimeout(() => {
      addMessage('assistant',
        `Perfeito, ${leadData.name}! 🎉\n\nBaseado no seu perfil, recomendo:\n\n**${recommendation.product}**\n${recommendation.price}\n\n${recommendation.description}`,
        [
          { text: recommendation.cta, action: 'signup' },
          { text: '💬 Falar no WhatsApp', action: 'whatsapp' }
        ]
      )
      setStep('recommendation')
    }, 500)
  }

  const handleAction = (action) => {
    if (action === 'signup') {
      addMessage('user', 'Quero começar!')
      addMessage('assistant',
        `Ótimo! Vou te redirecionar para criar sua conta.\n\nVocê receberá:\n✅ Acesso imediato\n✅ Onboarding guiado\n✅ Suporte especializado`
      )
      setTimeout(() => {
        // Redirecionar para página de signup
        window.location.href = '/signup'
      }, 2000)
    } else if (action === 'whatsapp') {
      addMessage('user', 'Prefiro falar no WhatsApp')
      addMessage('assistant',
        `Perfeito! Te conectando agora:\n\n📱 (31) 98468-3944\n\n👤 ${leadData.name}\n📱 ${leadData.phone}\n📧 ${leadData.email}`
      )
      setTimeout(() => {
        window.open(`https://wa.me/5531984683944?text=Olá! Sou ${leadData.name}, vim do chat do site`, '_blank')
      }, 1000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (step === 'name') handleNameSubmit()
      else if (step === 'phone') handlePhoneSubmit()
      else if (step === 'email') handleEmailSubmit()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[360px] md:w-[420px] h-[600px] rounded-[32px] overflow-hidden flex flex-col shadow-2xl bg-dark-900/95 backdrop-blur-xl border border-white/10 border-b-4 border-b-iuptec-orange">
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-dark-900 to-dark-800 text-white flex justify-between items-center border-b border-white/5 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-iuptec-orange to-yellow-400 rounded-full flex items-center justify-center border border-white/20">
                <span className="text-xl">🤖</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-[10px] uppercase tracking-widest leading-none mb-1">
                  Assistente Iuptec
                </span>
                <span className="text-[8px] text-iuptec-teal font-bold uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  Online agora
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-dark-950/40">
            {messages.map((msg, i) => (
              <div key={i}>
                <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed font-medium whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-iuptec-orange to-yellow-400 text-dark-950 rounded-tr-none shadow-lg'
                      : 'bg-dark-800/60 backdrop-blur-sm text-slate-200 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.content}
                  </div>
                </div>

                {msg.buttons && (
                  <div className="flex flex-col gap-2 mt-3">
                    {msg.buttons.map((btn, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (btn.value) {
                            if (step === 'companySize') handleCompanySize(btn.value)
                            else if (step === 'hasIA') handleHasIA(btn.value)
                            else if (step === 'goal') handleGoal(btn.value)
                          } else if (btn.action) {
                            handleAction(btn.action)
                          }
                        }}
                        className="w-full py-3 bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 rounded-xl font-bold text-sm hover:shadow-lg transition"
                      >
                        {btn.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {step === 'initial' && messages.length === 1 && (
              <div className="flex flex-col gap-3 mt-4">
                <button
                  onClick={() => handleInitialChoice('start')}
                  className="w-full py-4 bg-gradient-to-br from-iuptec-orange to-yellow-400 text-dark-950 rounded-2xl font-bold text-sm hover:shadow-lg transition"
                >
                  Descobrir solução ideal
                </button>
              </div>
            )}
          </div>

          {/* Input */}
          {(step === 'name' || step === 'phone' || step === 'email') && (
            <div className="p-5 border-t border-white/5 flex gap-3 bg-dark-900/20 flex-shrink-0">
              <input
                type="text"
                className="flex-grow bg-dark-800/50 border border-white/10 rounded-full px-5 py-3 text-xs text-white focus:outline-none focus:border-iuptec-orange transition-colors placeholder-white/40"
                placeholder={
                  step === 'name' ? 'Digite seu nome...' :
                  step === 'phone' ? '(99) 99999-9999' :
                  'seu@email.com'
                }
                value={step === 'phone' ? formatPhone(input) : input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
              <button
                onClick={() => {
                  if (step === 'name') handleNameSubmit()
                  else if (step === 'phone') handlePhoneSubmit()
                  else if (step === 'email') handleEmailSubmit()
                }}
                disabled={!input.trim()}
                className="w-12 h-12 bg-gradient-to-br from-iuptec-orange to-yellow-400 rounded-full flex items-center justify-center text-dark-950 transition-all transform active:scale-90 shadow-lg disabled:opacity-50"
              >
                ➤
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-br from-iuptec-orange to-yellow-400 text-dark-950 rounded-full flex items-center justify-center shadow-2xl shadow-iuptec-orange/40 transition-transform hover:scale-110 active:scale-95 group relative"
        >
          <span className="text-2xl group-hover:rotate-12 transition-transform">💬</span>
          <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-iuptec-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-iuptec-teal text-[10px] items-center justify-center font-black uppercase text-dark-950">
              IA
            </span>
          </span>
        </button>
      )}
    </div>
  )
}