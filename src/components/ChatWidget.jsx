// ChatWidget.jsx - VERSÃO FINAL COM GEMINI + LIMITE + CONVERSÃO
import { useState, useRef, useEffect } from 'react'

const MAX_AI_MESSAGES = 5 // Limite de mensagens com IA

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState('initial')
  const [leadData, setLeadData] = useState({ name: '', phone: '', email: '' })
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Olá! 👋 Sou o Assistente da Iuptec. Como posso te ajudar hoje?',
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [aiMessageCount, setAiMessageCount] = useState(0)
  const [conversationHistory, setConversationHistory] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const scrollRef = useRef(null)

  const TIME_SLOTS = ['10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00']

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const addMessage = (role, content, type = null, buttons = null) => {
    setMessages(prev => [...prev, { role, content, type, buttons }])
  }

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return `(${digits}`
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const callGeminiAPI = async (userMessage) => {
    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyADzvYLSbt6s3Ug7SYTcftQdD6X8qXNt0Q'
    
    const systemPrompt = `Você é o assistente virtual da Iuptec, empresa com 30+ anos de experiência que oferece soluções de IA.

OBJETIVO: Qualificar o lead e direcionar para conversão em até 5 mensagens.

INFORMAÇÕES IUPTEC:
- 30+ anos criando empresas de sucesso
- Produtos: BEM (marketplace), Iupcont (ERP), IUPSign (EXIT), IUPCare
- Agora focados em IA acessível para PMEs

SOLUÇÕES (SEMPRE MENCIONAR):
1. **Desenvolvimento Custom de IA** - Agentes integrados, APIs OpenAI/Claude, Make/n8n
   → Para empresas que precisam solução sob medida
   
2. **Automações Prontas (Plug & Play)** - A partir de R$ 2.997
   → Atendimento 24/7, qualificação leads, suporte técnico
   → Implementação em HORAS, não meses
   
3. **Academia Iuptec IA** - R$ 997 (12x R$ 97,90)
   → Do zero ao avançado sem programar
   → 6 módulos + projetos reais + certificado

DIFERENCIAIS (MENCIONAR):
- 30+ anos de experiência real
- Preços justos (não somos caros!)
- Cases reais: 80% atendimento automatizado, 40% mais produtividade
- Atendimento regional (Triângulo Mineiro/BH)

ESTRATÉGIA DE CONVERSA:
1ª msg: Entender necessidade
2ª msg: Apresentar solução específica
3ª msg: Mostrar benefícios/cases
4ª msg: Direcionar para conversão
5ª msg: Reforçar call-to-action

CALLS-TO-ACTION (usar após 3-4 msgs):
- "Quer agendar um diagnóstico gratuito?"
- "Posso te conectar com nossa equipe agora?"
- "A Academia pode ser perfeita pra você, quer conhecer?"

IMPORTANTE:
- Seja OBJETIVO (2-3 parágrafos máximo)
- Use emojis moderadamente (1-2 por msg)
- SEMPRE direcione para produto específico
- Foque em RESULTADOS, não em tecnologia
- Mencione preços quando relevante
- Crie senso de urgência suave

NUNCA:
- Faça promessas irreais
- Fale mal de concorrentes
- Seja genérico demais
- Responda coisas fora do escopo Iuptec

Lead atual: ${leadData.name}
Mensagem ${aiMessageCount + 1}/5`

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: systemPrompt }]
              },
              ...conversationHistory,
              {
                role: 'user',
                parts: [{ text: userMessage }]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 300, // Respostas concisas
            }
          })
        }
      )

      if (!response.ok) {
        throw new Error('Gemini API error')
      }

      const data = await response.json()
      return data.candidates[0]?.content?.parts[0]?.text || null
    } catch (error) {
      console.error('Gemini error:', error)
      return null
    }
  }

  const handleInitialChoice = (choice) => {
    if (choice === 'resolve') {
      addMessage('user', 'Quero resolver minha dúvida agora')
      addMessage('assistant', 'Ótimo! Primeiro, como posso te chamar? 😊')
      setStep('name')
    } else {
      addMessage('user', 'Quero agendar diagnóstico gratuito')
      addMessage('assistant', 'Perfeito! Qual seu nome? 😊')
      setStep('name')
    }
  }

  const handleNameSubmit = () => {
    if (!input.trim()) return
    const name = input.trim()
    setLeadData(prev => ({ ...prev, name }))
    addMessage('user', name)
    addMessage('assistant', `Prazer, ${name}! 👋 Qual seu WhatsApp com DDD?`)
    setInput('')
    setStep('phone')
  }

  const handlePhoneSubmit = () => {
    if (!input.trim()) return
    const phone = input.trim()
    setLeadData(prev => ({ ...prev, phone }))
    addMessage('user', phone)
    addMessage('assistant', 'Perfeito! Qual seu melhor e-mail?')
    setInput('')
    setStep('email')
  }

  const handleEmailSubmit = () => {
    if (!input.trim()) return
    const email = input.trim()
    const finalData = { ...leadData, email }
    setLeadData(finalData)
    addMessage('user', email)
    
    localStorage.setItem('iuptec_lead', JSON.stringify(finalData))
    
    addMessage('assistant', `Dados salvos, ${finalData.name}! 🎉\n\nAgora me conta: qual sua principal dúvida ou desafio com IA?`)
    setInput('')
    setStep('chat')
    setConversationHistory([])
  }

  const handleChatSubmit = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    addMessage('user', userMessage)
    setInput('')
    setIsLoading(true)

    // Atualizar histórico
    const newHistory = [
      ...conversationHistory,
      {
        role: 'user',
        parts: [{ text: userMessage }]
      }
    ]
    setConversationHistory(newHistory)

    try {
      const aiResponse = await callGeminiAPI(userMessage)
      
      if (aiResponse) {
        const newCount = aiMessageCount + 1
        setAiMessageCount(newCount)
        
        // Se atingiu limite, adicionar botões de conversão
        if (newCount >= MAX_AI_MESSAGES) {
          addMessage('assistant', aiResponse)
          addMessage('assistant', 
            `${leadData.name}, aproveitei muito nossa conversa! 😊\n\nPara continuar te ajudando da melhor forma, escolha uma opção:`,
            null,
            [
              { text: '📅 Agendar diagnóstico gratuito', action: 'schedule' },
              { text: '📱 Falar com especialista', action: 'whatsapp' },
              { text: '🎓 Conhecer Academia (R$ 997)', action: 'academy' }
            ]
          )
          setStep('conversion')
        } else {
          addMessage('assistant', aiResponse)
          
          // Atualizar histórico com resposta da IA
          setConversationHistory([
            ...newHistory,
            {
              role: 'model',
              parts: [{ text: aiResponse }]
            }
          ])
        }
      } else {
        // Fallback se Gemini falhar
        addMessage('assistant', 
          `Desculpe, tive um problema técnico. Mas posso te ajudar:\n\n📱 WhatsApp: (31) 98468-3944\n📧 comercial@iuptec.com.br`
        )
      }
    } catch (error) {
      addMessage('assistant', 'Erro ao processar. Tente novamente ou fale conosco no WhatsApp: (31) 98468-3944')
    } finally {
      setIsLoading(false)
    }
  }

  const handleConversionAction = (action) => {
    if (action === 'schedule') {
      addMessage('user', 'Quero agendar diagnóstico')
      addMessage('assistant', 'Perfeito! Escolha o melhor dia e horário:', 'calendar')
      setStep('calendar')
    } else if (action === 'whatsapp') {
      addMessage('user', 'Quero falar com especialista')
      addMessage('assistant', 
        `Ótimo! Vou te conectar agora:\n\n📱 WhatsApp: (31) 98468-3944\n\nJá tenho seus dados aqui:\n👤 ${leadData.name}\n📱 ${leadData.phone}\n📧 ${leadData.email}\n\nNossa equipe vai te atender rapidinho! 😊`
      )
      setTimeout(() => {
        window.open(`https://wa.me/5531984683944?text=Olá! Vim do chat. Meu nome é ${leadData.name}`, '_blank')
      }, 1000)
    } else if (action === 'academy') {
      addMessage('user', 'Quero conhecer a Academia')
      addMessage('assistant',
        `A Academia Iuptec IA é perfeita pra você! 🎓\n\n✨ Do Zero ao Pro em IA\n✨ Sem programar\n✨ 6 módulos completos\n✨ Projetos reais\n✨ Certificado\n\n💰 R$ 997 (12x R$ 97,90)\n\nVamos agendar uma conversa pra eu te explicar tudo?`,
        null,
        [
          { text: '📅 Sim, agendar conversa', action: 'schedule' },
          { text: '📱 Falar agora no WhatsApp', action: 'whatsapp' }
        ]
      )
    }
  }

  const handleDateSelect = (day) => {
    setSelectedDate(day)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  const handleConfirmSchedule = () => {
    if (!selectedDate || !selectedTime) return
    
    const dateStr = `${selectedDate.getDate().toString().padStart(2, '0')}/${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}`
    const scheduleData = {
      ...leadData,
      date: dateStr,
      time: selectedTime,
      timestamp: new Date().toISOString()
    }
    
    localStorage.setItem('iuptec_schedule', JSON.stringify(scheduleData))
    
    addMessage('assistant', 
      `✅ Agendamento confirmado!\n\n📅 ${dateStr} às ${selectedTime}\n\n${leadData.name}, vamos confirmar por WhatsApp:\n📱 ${leadData.phone}\n\nAté breve! 🚀`
    )
    setStep('done')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (step === 'name') handleNameSubmit()
      else if (step === 'phone') handlePhoneSubmit()
      else if (step === 'email') handleEmailSubmit()
      else if (step === 'chat') handleChatSubmit()
    }
  }

  const generateDays = () => {
    const days = []
    const today = new Date()
    let count = 0
    let current = new Date(today)
    
    while (count < 12) {
      current.setDate(current.getDate() + 1)
      const day = current.getDay()
      if (day !== 0 && day !== 6) {
        days.push(new Date(current))
        count++
      }
    }
    return days
  }

  const availableDays = generateDays()

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
                  {step === 'chat' && aiMessageCount < MAX_AI_MESSAGES ? 
                    `${aiMessageCount}/${MAX_AI_MESSAGES} mensagens` : 'Online agora'}
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

                {/* Botões de ação */}
                {msg.buttons && (
                  <div className="flex flex-col gap-2 mt-3">
                    {msg.buttons.map((btn, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleConversionAction(btn.action)}
                        className="w-full py-3 bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 rounded-xl font-bold text-sm hover:shadow-lg transition"
                      >
                        {btn.text}
                      </button>
                    ))}
                  </div>
                )}

                {/* Calendário */}
                {msg.type === 'calendar' && step === 'calendar' && (
                  <div className="mt-4 bg-dark-800/80 backdrop-blur-sm rounded-2xl p-4 border border-white/5">
                    <div className="mb-4">
                      <div className="text-xs font-bold text-iuptec-teal mb-2">📅 Escolha o dia:</div>
                      <div className="grid grid-cols-3 gap-2">
                        {availableDays.slice(0, 9).map((day, idx) => {
                          const isSelected = selectedDate?.toDateString() === day.toDateString()
                          return (
                            <button
                              key={idx}
                              onClick={() => handleDateSelect(day)}
                              className={`p-2 rounded-lg text-xs font-medium transition ${
                                isSelected
                                  ? 'bg-iuptec-orange text-dark-950'
                                  : 'bg-dark-700/50 text-slate-300 hover:bg-dark-700 border border-white/5'
                              }`}
                            >
                              <div className="font-bold">{day.getDate()}/{day.getMonth() + 1}</div>
                              <div className="text-[10px] opacity-70">
                                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][day.getDay()]}
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {selectedDate && (
                      <div className="mb-4">
                        <div className="text-xs font-bold text-iuptec-teal mb-2">🕒 Escolha o horário:</div>
                        <div className="grid grid-cols-3 gap-2">
                          {TIME_SLOTS.map((time) => (
                            <button
                              key={time}
                              onClick={() => handleTimeSelect(time)}
                              className={`p-2 rounded-lg text-xs font-medium transition ${
                                selectedTime === time
                                  ? 'bg-iuptec-teal text-dark-950'
                                  : 'bg-dark-700/50 text-slate-300 hover:bg-dark-700 border border-white/5'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedDate && selectedTime && (
                      <button
                        onClick={handleConfirmSchedule}
                        className="w-full bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition"
                      >
                        Confirmar agendamento
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Botões iniciais */}
            {step === 'initial' && messages.length === 1 && (
              <div className="flex flex-col gap-3 mt-4">
                <button
                  onClick={() => handleInitialChoice('resolve')}
                  className="w-full py-4 bg-gradient-to-br from-iuptec-orange to-yellow-400 text-dark-950 rounded-2xl font-bold text-sm hover:shadow-lg transition"
                >
                  Resolver dúvida agora
                </button>
                <button
                  onClick={() => handleInitialChoice('schedule')}
                  className="w-full py-4 bg-dark-800/60 border-2 border-iuptec-teal text-iuptec-teal rounded-2xl font-bold text-sm hover:bg-dark-800 transition"
                >
                  Agendar diagnóstico gratuito
                </button>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-dark-800/60 backdrop-blur-sm p-4 rounded-2xl rounded-tl-none border border-white/5">
                  <span className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-iuptec-orange rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-iuptec-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-iuptec-orange rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          {step !== 'initial' && step !== 'calendar' && step !== 'done' && step !== 'conversion' && (
            <div className="p-5 border-t border-white/5 flex gap-3 bg-dark-900/20 flex-shrink-0">
              <input
                type="text"
                className="flex-grow bg-dark-800/50 border border-white/10 rounded-full px-5 py-3 text-xs text-white focus:outline-none focus:border-iuptec-orange transition-colors placeholder-white/40"
                placeholder={
                  step === 'name' ? 'Digite seu nome...' :
                  step === 'phone' ? 'Digite seu WhatsApp...' :
                  step === 'email' ? 'Digite seu e-mail...' :
                  'Digite sua mensagem...'
                }
                value={step === 'phone' ? formatPhone(input) : input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
              <button
                onClick={() => {
                  if (step === 'name') handleNameSubmit()
                  else if (step === 'phone') handlePhoneSubmit()
                  else if (step === 'email') handleEmailSubmit()
                  else if (step === 'chat') handleChatSubmit()
                }}
                disabled={isLoading || !input.trim()}
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