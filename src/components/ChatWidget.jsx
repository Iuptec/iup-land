// ChatWidget.jsx - Versão Gemini API (Moderna)
import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Oi! Eu sou o Assistente da Iuptec 🚀 Resolva sua dúvida comigo agora ou agende um diagnóstico gratuito de IA!'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const getGeminiResponse = async (userMessage, history) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{
                text: `Você é o assistente virtual da Iuptec, uma empresa com 30+ anos de experiência empreendedora que oferece soluções de IA.

INFORMAÇÕES DA IUPTEC:
- 30+ anos criando empresas de sucesso
- Desde 2019 em tecnologia e software
- Produtos: BEM (marketplace contábil), Iupcont (ERP), IUPSign (assinatura digital - EXIT), IUPCare (gestão clínica)
- Agora focados em IA acessível para PMEs

SOLUÇÕES:
1. Desenvolvimento Custom de IA (agentes, APIs, Make/n8n, Python)
2. Automações Prontas - Plug & Play (atendimento 24/7, qualificação leads, suporte)
3. Academia Iuptec IA - Curso completo (R$ 997)

DIFERENCIAIS:
- Experiência real empreendedora (30+ anos)
- Tecnologia acessível (preços justos)
- Atendimento regional (Triângulo Mineiro e RM BH)
- Abordagem No-Code First

CONTATO:
- Email: comercial@iuptec.com.br
- WhatsApp: (31) 98468-3944
- Endereço: Av. Anselmo Alves dos Santos, 1111, Uberlândia/MG

INSTRUÇÕES:
- Seja cordial, direto e prestativo
- Use emojis moderadamente (1-2 por mensagem)
- Respostas concisas (2-4 parágrafos máximo)
- Ofereça diagnóstico gratuito quando apropriado
- Direcione para WhatsApp para conversas mais complexas

Pergunta do usuário: ${userMessage}`
              }]
            }
          ]
        })
      })

      const data = await response.json()
      return data.candidates[0]?.content?.parts[0]?.text || null
    } catch (error) {
      console.error('Gemini API error:', error)
      return null
    }
  }

  const getFallbackResponse = (userMessage) => {
    const msg = userMessage.toLowerCase()
    
    if (msg.includes('olá') || msg.includes('oi') || msg.includes('bom dia')) {
      return 'Olá! 👋 Bem-vindo à Iuptec! Temos 30+ anos de experiência e agora oferecemos soluções de IA acessíveis. Como posso ajudar?'
    }
    
    if (msg.includes('serviço') || msg.includes('solução')) {
      return 'Oferecemos 3 soluções:\n\n1️⃣ Desenvolvimento Custom de IA\n2️⃣ Automações Prontas (Plug & Play)\n3️⃣ Academia Iuptec IA (R$ 997)\n\nQual te interessa mais?'
    }
    
    if (msg.includes('preço') || msg.includes('valor') || msg.includes('quanto')) {
      return '💰 Academia: R$ 997 (12x R$ 97,90)\n💰 Automações Prontas: A partir de R$ 2.997\n💰 Custom: Sob consulta\n\nQuer um diagnóstico gratuito?'
    }
    
    if (msg.includes('contato') || msg.includes('falar')) {
      return '📱 WhatsApp: (31) 98468-3944\n📧 Email: comercial@iuptec.com.br\n\nPreferido: chamar no WhatsApp! 😊'
    }
    
    return 'Para te ajudar melhor, recomendo falar direto:\n\n📱 WhatsApp: (31) 98468-3944\n📧 comercial@iuptec.com.br'
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      // Tentar Gemini API primeiro
      const geminiResponse = await getGeminiResponse(userMessage, messages)
      
      if (geminiResponse) {
        setMessages(prev => [...prev, { role: 'assistant', content: geminiResponse }])
      } else {
        // Fallback se Gemini falhar
        const fallbackResponse = getFallbackResponse(userMessage)
        setMessages(prev => [...prev, { role: 'assistant', content: fallbackResponse }])
      }
    } catch (error) {
      const fallbackResponse = getFallbackResponse(userMessage)
      setMessages(prev => [...prev, { role: 'assistant', content: fallbackResponse }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[360px] md:w-[420px] h-[550px] rounded-[32px] overflow-hidden flex flex-col shadow-2xl bg-dark-900/95 backdrop-blur-xl border border-white/10 border-b-4 border-b-iuptec-orange animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-dark-900 to-dark-800 text-white flex justify-between items-center border-b border-white/5">
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
          <div 
            ref={scrollRef}
            className="flex-grow p-5 overflow-y-auto space-y-5 bg-dark-950/40"
          >
            {messages.map((msg, i) => (
              <div 
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed font-medium whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-iuptec-orange to-yellow-400 text-dark-950 rounded-tr-none shadow-lg shadow-iuptec-orange/20'
                    : 'bg-dark-800/60 backdrop-blur-sm text-slate-200 rounded-tl-none border border-white/5'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

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
          <div className="p-5 border-t border-white/5 flex gap-3 bg-dark-900/20">
            <input
              type="text"
              className="flex-grow bg-dark-800/50 border border-white/10 rounded-full px-5 py-3 text-xs text-white focus:outline-none focus:border-iuptec-orange transition-colors placeholder-white/40"
              placeholder="Pergunte qualquer coisa..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="w-12 h-12 bg-gradient-to-br from-iuptec-orange to-yellow-400 hover:from-iuptec-orange/90 hover:to-yellow-400/90 rounded-full flex items-center justify-center text-dark-950 transition-all transform active:scale-90 shadow-lg shadow-iuptec-orange/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ➤
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-br from-iuptec-orange to-yellow-400 hover:from-iuptec-orange/90 hover:to-yellow-400/90 text-dark-950 rounded-full flex items-center justify-center shadow-2xl shadow-iuptec-orange/40 transition-transform hover:scale-110 active:scale-95 group relative"
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