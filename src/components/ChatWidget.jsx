import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Olá! 👋 Sou o assistente virtual da Iuptec. Como posso ajudar você hoje? Posso tirar dúvidas sobre nossos serviços de IA, automações e cursos.'
    }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')

    setTimeout(() => {
      const responses = [
        'Ótima pergunta! Nossa equipe tem 30+ anos de experiência criando empresas. Que tal agendar um diagnóstico gratuito?',
        'Oferecemos 3 tipos de soluções: Desenvolvimento Custom, Automações Prontas e Educação. Qual te interessa mais?',
        'Sim, temos o curso "Do Zero ao Pro em IA" por R$ 997. Você aprende sem programar! Quer mais detalhes?',
        'Atendemos o Triângulo Mineiro e RM de BH. Podemos conversar por video chamada hoje mesmo!'
      ]
      setMessages([...newMessages, {
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)]
      }])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-iuptec-orange to-yellow-400 rounded-full shadow-lg hover:shadow-xl hover:shadow-iuptec-orange/50 flex items-center justify-center z-50 hover:scale-110 transition-transform text-3xl"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-dark-900/95 backdrop-blur-xl border-2 border-iuptec-teal/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-iuptec-teal to-cyan-400 p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-dark-950 rounded-full flex items-center justify-center text-2xl">
              🤖
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-dark-950">Assistente Iuptec</h3>
              <p className="text-sm text-dark-950/80">Powered by IA</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition text-dark-950">
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
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-dark-900/50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-3 bg-dark-800/60 border border-white/10 rounded-lg focus:outline-none focus:border-iuptec-teal transition text-white placeholder-white/40"
              />
              <button
                onClick={handleSend}
                className="w-12 h-12 bg-gradient-to-br from-iuptec-teal to-cyan-400 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-iuptec-teal/50 transition"
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
