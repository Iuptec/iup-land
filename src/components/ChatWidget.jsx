import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Olá! 👋 Sou o assistente virtual da Iuptec. Como posso ajudar você hoje? Posso tirar dúvidas sobre nossos serviços de IA, automações e cursos.'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      })

      if (!response.ok) {
        throw new Error('Erro na resposta do servidor')
      }

      const data = await response.json()
      
      setMessages([...newMessages, {
        role: 'assistant',
        content: data.message
      }])
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro. Por favor, tente novamente ou entre em contato por WhatsApp: (31) 98468-3944'
      }])
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
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-iuptec-orange to-yellow-400 rounded-full shadow-lg hover:shadow-xl hover:shadow-iuptec-orange/50 flex items-center justify-center z-50 hover:scale-110 transition-transform text-3xl"
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] max-h-[80vh] bg-dark-900/95 backdrop-blur-xl border-2 border-iuptec-teal/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-iuptec-teal to-cyan-400 p-6 flex items-center space-x-4 flex-shrink-0">
            <div className="w-12 h-12 bg-dark-950 rounded-full flex items-center justify-center text-2xl">
              🤖
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-dark-950">Assistente Iuptec</h3>
              <p className="text-sm text-dark-950/80">Powered by IA</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition text-dark-950"
              aria-label="Fechar chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, idx) => (
              <div key={idx} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-iuptec-teal text-dark-950 rounded-tr-none'
                    : 'bg-dark-800/80 text-white border border-white/10 rounded-tl-none'
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-dark-800/80 text-white border border-white/10 p-4 rounded-2xl rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-iuptec-teal rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-iuptec-teal rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-iuptec-teal rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-dark-900/50 flex-shrink-0">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal transition text-white placeholder-white/40 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-12 h-12 bg-gradient-to-br from-iuptec-teal to-cyan-400 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-iuptec-teal/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar mensagem"
              >
                ➤
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center space-x-2 text-xs text-white/40">
              <span>Privacidade</span>
              <span>•</span>
              <span>Termos de Uso</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}