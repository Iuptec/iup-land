export default function ProblemSolution() {
  const problems = [
    { icon: '⏰', title: 'Processos manuais consomem tempo', description: 'Sua equipe gasta horas em tarefas repetitivas.' },
    { icon: '🤔', title: 'Falta conhecimento técnico em IA', description: 'Você sabe que IA pode ajudar, mas não sabe por onde começar.' },
    { icon: '💸', title: 'Soluções enterprise são caras demais', description: 'Grandes plataformas cobram fortunas para PMEs.' }
  ]

  return (
    <section className="py-24 lg:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-iuptec-orange/10 border border-iuptec-orange/30 rounded-full text-iuptec-orange text-sm font-bold mb-6">
            O Desafio
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Seu negócio precisa de IA, mas você não sabe por onde começar?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Entendemos os desafios que empresas enfrentam ao tentar adotar inteligência artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-dark-800/40 backdrop-blur-xl border-2 border-red-500/20 p-8 rounded-2xl">
              <div className="text-5xl mb-6">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-white/70">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-iuptec-teal to-cyan-400 rounded-full flex items-center justify-center text-3xl animate-bounce">
            ⬇️
          </div>
        </div>

        <div className="bg-dark-800/60 backdrop-blur-xl border-2 border-iuptec-teal/30 p-12 rounded-3xl text-center">
          <h3 className="text-3xl lg:text-4xl font-black mb-4">Mas calma, temos a solução!</h3>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Combinamos <strong className="text-iuptec-teal">30 anos de experiência empreendedora</strong> com as ferramentas mais modernas de IA.
          </p>
        </div>
      </div>
    </section>
  )
}
