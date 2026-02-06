import React from 'react';
import { ExternalLink, Zap, TrendingUp, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

const ToolsModalContent = () => {
  const tools = [
    {
      id: 1,
      title: "Iuptec Tools",
      description: "Kit completo de ferramentas de IA e automações.",
      url: "https://tools.iuptec.com.br/",
      color: "teal",
      icon: <Zap className="w-5 h-5" />,
      features: ["Desenvolvimento", "Automação", "Ferramentas"]
    },
    {
      id: 2,
      title: "Impact Flow",
      description: "Sistema inteligente de gestão de fluxo de impacto e produtividade",
      url: "https://impact-flow.iuptec.com.br/",
      color: "orange",
      icon: <TrendingUp className="w-5 h-5" />,
      features: ["Gestão", "Produtividade", "Análise"]
    }
  ];

  const handleToolClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8">
      {/* Introdução */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-iuptec-teal/5 to-iuptec-orange/5 rounded-2xl blur-xl"></div>
        <div className="relative px-6 py-4 bg-dark-800/40 backdrop-blur-sm rounded-2xl border border-iuptec-teal/10">
          <div className="flex items-center gap-3 justify-center">
            <Sparkles className="w-5 h-5 text-iuptec-teal" />
            <p className="text-white/90 text-center font-medium">
              Acesse nossas ferramentas exclusivas desenvolvidas para otimizar seus processos
            </p>
          </div>
        </div>
      </div>

      {/* Grid de Ferramentas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="group relative"
          >
            {/* Glow effect background */}
            <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg ${
              tool.color === 'teal'
                ? 'bg-gradient-to-r from-iuptec-teal/20 to-cyan-400/20'
                : 'bg-gradient-to-r from-iuptec-orange/20 to-yellow-400/20'
            }`}></div>
            
            {/* Card principal */}
            <div className={`relative overflow-hidden rounded-2xl bg-dark-900 border transition-all duration-300 hover:scale-[1.02] ${
              tool.color === 'teal'
                ? 'border-iuptec-teal/20 hover:border-iuptec-teal/40'
                : 'border-iuptec-orange/20 hover:border-iuptec-orange/40'
            }`}>
              
              {/* Conteúdo do Card */}
              <div className="p-6 space-y-5">
                
                {/* Header: Ícone + Título inline */}
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-lg transition-colors ${
                    tool.color === 'teal'
                      ? 'bg-iuptec-teal/10 text-iuptec-teal group-hover:bg-iuptec-teal/20'
                      : 'bg-iuptec-orange/10 text-iuptec-orange group-hover:bg-iuptec-orange/20'
                  }`}>
                    {tool.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-white/70 leading-relaxed">
                  {tool.description}
                </p>

                {/* Tags de features */}
                <div className="flex flex-wrap gap-2">
                  {tool.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                        tool.color === 'teal'
                          ? 'bg-iuptec-teal/10 text-iuptec-teal/80 border border-iuptec-teal/20'
                          : 'bg-iuptec-orange/10 text-iuptec-orange/80 border border-iuptec-orange/20'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Botão de Acesso */}
                <Button
                  variant={tool.color === 'teal' ? 'sparkle' : 'animated'}
                  onClick={() => handleToolClick(tool.url)}
                  className="w-full"
                >
                  Acessar Ferramenta <ExternalLink className="w-4 h-4 inline-block ml-2" />
                </Button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Rodapé informativo */}
      <div className="pt-6 border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
          <p className="text-white/50 text-sm">
            Todas as ferramentas são desenvolvidas e mantidas pela{' '}
            <span className="text-iuptec-teal font-semibold">Iuptec</span>
          </p>
          
          <div className="flex items-center gap-2 text-iuptec-teal text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-iuptec-teal animate-pulse shadow-lg shadow-iuptec-teal/50"></div>
            <span>Sistemas ativos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsModalContent;