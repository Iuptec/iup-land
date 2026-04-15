// src/pages/Onboarding.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../integrations/supabase/client'
import { toast } from 'sonner'

export default function Onboarding() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState({
    companyName: '',
    companySize: '',
    technicalLevel: '',
    mainGoal: '',
    startingProduct: ''
  })

  const totalSteps = 5

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // Salvar dados do onboarding
        const { error } = await supabase
          .from('user_profiles')
          .upsert({
            user_id: user.id,
            company_name: data.companyName,
            company_size: data.companySize,
            technical_level: data.technicalLevel,
            main_goal: data.mainGoal,
            starting_product: data.startingProduct,
            onboarding_completed: true
          })

        if (error) throw error
      }

      toast.success('Configuração concluída!')
      navigate('/dashboard')
    } catch (error) {
      console.error('Error saving onboarding:', error)
      navigate('/dashboard')
    }
  }

  const canProceed = () => {
    switch(currentStep) {
      case 1: return data.companyName.trim() !== ''
      case 2: return data.companySize !== ''
      case 3: return data.technicalLevel !== ''
      case 4: return data.mainGoal !== ''
      case 5: return data.startingProduct !== ''
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-dark-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Progress */}
        <div className="text-center mb-12">
          <p className="text-slate-500 text-sm mb-4">Etapa {currentStep} de {totalSteps}</p>
          <div className="max-w-md mx-auto h-2 bg-dark-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-iuptec-orange to-yellow-400 transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-dark-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <h1 className="text-3xl font-black text-white text-center mb-3">
            {currentStep === 1 && 'Qual o nome da sua empresa?'}
            {currentStep === 2 && 'Qual o tamanho da sua empresa?'}
            {currentStep === 3 && 'Qual seu nível técnico?'}
            {currentStep === 4 && 'Qual seu objetivo principal?'}
            {currentStep === 5 && 'Como deseja começar?'}
          </h1>
          <p className="text-slate-400 text-center mb-12">
            {currentStep === 1 && 'Vamos personalizar sua experiência'}
            {currentStep === 2 && 'Isso nos ajuda a recomendar as melhores soluções'}
            {currentStep === 3 && 'Para adequar o conteúdo ao seu nível'}
            {currentStep === 4 && 'Vamos direcionar você para o melhor caminho'}
            {currentStep === 5 && 'Escolha seu ponto de partida'}
          </p>

          {/* Step 1: Company Name */}
          {currentStep === 1 && (
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                value={data.companyName}
                onChange={e => setData({...data, companyName: e.target.value})}
                className="w-full bg-dark-800/50 border-2 border-white/10 focus:border-iuptec-orange rounded-2xl px-6 py-4 text-white text-lg focus:outline-none transition"
                placeholder="Nome da empresa"
                autoFocus
              />
            </div>
          )}

          {/* Step 2: Company Size */}
          {currentStep === 2 && (
            <div className="grid gap-4 max-w-2xl mx-auto">
              {[
                { value: 'solo', icon: '👤', label: 'Solo', desc: 'Só eu' },
                { value: 'startup', icon: '👥', label: 'Startup', desc: '2 a 250 pessoas' },
                { value: 'midsize', icon: '🏢', label: 'Média', desc: '250-5K pessoas' },
                { value: 'enterprise', icon: '🏛️', label: 'Enterprise', desc: 'Mais de 5K pessoas' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setData({...data, companySize: option.value})}
                  className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition ${
                    data.companySize === option.value
                      ? 'border-iuptec-orange bg-iuptec-orange/10'
                      : 'border-white/10 bg-dark-800/30 hover:border-white/20'
                  }`}
                >
                  <div className="text-4xl">{option.icon}</div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-white">{option.label}</div>
                    <div className="text-sm text-slate-400">{option.desc}</div>
                  </div>
                  <div className="ml-auto">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      data.companySize === option.value
                        ? 'border-iuptec-orange bg-iuptec-orange'
                        : 'border-white/20'
                    }`}>
                      {data.companySize === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 3: Technical Level */}
          {currentStep === 3 && (
            <div className="grid gap-4 max-w-2xl mx-auto">
              {[
                { value: 'non-technical', icon: '🌱', label: 'Não técnico', desc: 'Nunca programei antes' },
                { value: 'somewhat', icon: '🔧', label: 'Um pouco técnico', desc: 'Consigo escrever código simples' },
                { value: 'technical', icon: '📈', label: 'Técnico', desc: 'Já fiz deploy de código' },
                { value: 'highly-technical', icon: '⚡', label: 'Muito técnico', desc: 'Código é minha primeira língua' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setData({...data, technicalLevel: option.value})}
                  className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition ${
                    data.technicalLevel === option.value
                      ? 'border-iuptec-orange bg-iuptec-orange/10'
                      : 'border-white/10 bg-dark-800/30 hover:border-white/20'
                  }`}
                >
                  <div className="text-4xl">{option.icon}</div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-white">{option.label}</div>
                    <div className="text-sm text-slate-400">{option.desc}</div>
                  </div>
                  <div className="ml-auto">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      data.technicalLevel === option.value
                        ? 'border-iuptec-orange bg-iuptec-orange'
                        : 'border-white/20'
                    }`}>
                      {data.technicalLevel === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 4: Main Goal */}
          {currentStep === 4 && (
            <div className="grid gap-4 max-w-2xl mx-auto">
              {[
                { value: 'learn', icon: '🔍', label: 'Aprender', desc: 'Quero aprender sobre IA' },
                { value: 'automate', icon: '⚡', label: 'Automatizar', desc: 'Automatizar processos da empresa' },
                { value: 'integrate', icon: '🔧', label: 'Integrar', desc: 'Integrar IA nos sistemas atuais' },
                { value: 'scale', icon: '📈', label: 'Escalar', desc: 'Expandir uso de IA na empresa' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setData({...data, mainGoal: option.value})}
                  className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition ${
                    data.mainGoal === option.value
                      ? 'border-iuptec-orange bg-iuptec-orange/10'
                      : 'border-white/10 bg-dark-800/30 hover:border-white/20'
                  }`}
                >
                  <div className="text-4xl">{option.icon}</div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-white">{option.label}</div>
                    <div className="text-sm text-slate-400">{option.desc}</div>
                  </div>
                  <div className="ml-auto">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      data.mainGoal === option.value
                        ? 'border-iuptec-orange bg-iuptec-orange'
                        : 'border-white/20'
                    }`}>
                      {data.mainGoal === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 5: Starting Product */}
          {currentStep === 5 && (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <button
                onClick={() => setData({...data, startingProduct: 'hiperzord'})}
                className={`p-8 rounded-2xl border-2 transition text-left ${
                  data.startingProduct === 'hiperzord'
                    ? 'border-iuptec-orange bg-iuptec-orange/10'
                    : 'border-white/10 bg-dark-800/30 hover:border-white/20'
                }`}
              >
                <div className="text-4xl mb-4">⚡</div>
                <div className="text-xl font-bold text-white mb-2">Hiperzord</div>
                <div className="text-sm text-slate-400 mb-4">
                  Automações prontas e ferramentas profissionais
                </div>
                <div className="text-iuptec-orange font-bold">
                  R$ 297/mês
                </div>
              </button>

              <button
                onClick={() => setData({...data, startingProduct: 'academia'})}
                className={`p-8 rounded-2xl border-2 transition text-left ${
                  data.startingProduct === 'academia'
                    ? 'border-iuptec-orange bg-iuptec-orange/10'
                    : 'border-white/10 bg-dark-800/30 hover:border-white/20'
                }`}
              >
                <div className="text-4xl mb-4">🎓</div>
                <div className="text-xl font-bold text-white mb-2">Academia Online</div>
                <div className="text-sm text-slate-400 mb-4">
                  Aprenda IA do zero ao avançado
                </div>
                <div className="text-iuptec-orange font-bold">
                  R$ 997
                </div>
              </button>

              <button
                onClick={() => setData({...data, startingProduct: 'imersao'})}
                className={`p-8 rounded-2xl border-2 transition text-left ${
                  data.startingProduct === 'imersao'
                    ? 'border-iuptec-orange bg-iuptec-orange/10'
                    : 'border-white/10 bg-dark-800/30 hover:border-white/20'
                }`}
              >
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-xl font-bold text-white mb-2">Imersão IE</div>
                <div className="text-sm text-slate-400 mb-4">
                  Presencial com N8N e acompanhamento
                </div>
                <div className="text-iuptec-orange font-bold">
                  R$ 497
                </div>
              </button>

              <button
                onClick={() => setData({...data, startingProduct: 'on-demand'})}
                className={`p-8 rounded-2xl border-2 transition text-left ${
                  data.startingProduct === 'on-demand'
                    ? 'border-iuptec-orange bg-iuptec-orange/10'
                    : 'border-white/10 bg-dark-800/30 hover:border-white/20'
                }`}
              >
                <div className="text-4xl mb-4">🔧</div>
                <div className="text-xl font-bold text-white mb-2">On-demand</div>
                <div className="text-sm text-slate-400 mb-4">
                  Desenvolvimento customizado
                </div>
                <div className="text-iuptec-orange font-bold">
                  Sob consulta
                </div>
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 max-w-2xl mx-auto">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-6 py-3 text-slate-400 hover:text-white font-bold transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Voltar
            </button>

            <button
              onClick={() => setCurrentStep(totalSteps + 1)}
              className="text-sm text-slate-500 hover:text-slate-300 transition"
            >
              Pular esta etapa
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="px-8 py-4 bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 rounded-2xl font-bold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === totalSteps ? 'Finalizar' : 'Próximo →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}