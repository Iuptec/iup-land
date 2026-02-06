import { useRef } from 'react';
import { ExternalLink, Trophy, FileText, Heart, Shield, ChevronRight } from 'lucide-react';
import Button from "./ui/Button";

// Mapeamento de ícones
const iconMap = {
  '📄': FileText,
  '🏥': Heart,
  '🔐': Shield,
};

const PortfolioItem = ({ product }) => {
  const IconComponent = iconMap[product.icon] || FileText;

  return (
    <div className="flex items-center gap-6 flex-shrink-0">
      {/* Year Badge - REDUZIDO */}
      <div className="flex justify-center">
        <div className="relative">
          {/* Anéis orbitais animados */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
            <div className="absolute inset-0 border-2 border-iuptec-teal/20 rounded-full"></div>
          </div>
          <div className="absolute inset-2 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
            <div className="absolute inset-0 border border-cyan-400/30 rounded-full border-dashed"></div>
          </div>
          
          {/* Glow pulsante de fundo */}
          <div className="absolute inset-0 bg-iuptec-teal/20 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Container principal do badge - TAMANHO REDUZIDO */}
          <div className="relative w-24 h-24 rounded-full bg-dark-800/80 backdrop-blur-xl border-2 border-iuptec-teal/40 flex items-center justify-center shadow-2xl shadow-iuptec-teal/30 group-hover:border-iuptec-teal/60 transition-all duration-300">
            
            {/* Grid pattern interno */}
            <div className="absolute inset-0 rounded-full opacity-10" 
                 style={{
                   backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(45, 212, 191, 0.3) 1px, transparent 1px)`,
                   backgroundSize: '6px 6px'
                 }}>
            </div>

            {/* Círculo interno com gradiente */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-iuptec-teal/30 via-dark-900/50 to-cyan-400/30 flex items-center justify-center">
              {/* Ano - TEXTO REDUZIDO */}
              <span className="text-lg font-black text-white drop-shadow-[0_0_10px_rgba(45,212,191,0.8)] z-10">
                {product.year}
              </span>
            </div>

            {/* Pontos de conexão estilo tech - TAMANHO REDUZIDO */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-iuptec-teal rounded-full shadow-lg shadow-iuptec-teal/80 animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-iuptec-teal rounded-full shadow-lg shadow-iuptec-teal/80 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/80 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Content Card - TAMANHO REDUZIDO */}
      <div className="w-[420px]">
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-iuptec-teal/30 to-cyan-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          
          {/* Card - PADDING REDUZIDO */}
          <div className="relative bg-dark-800/60 backdrop-blur-xl border-2 border-iuptec-teal/20 group-hover:border-iuptec-teal/50 p-6 rounded-2xl transition-all duration-300 group-hover:scale-[1.02]">
            
            <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl" 
                 style={{
                   backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(45, 212, 191, 0.1) 1px, transparent 1px)`,
                   backgroundSize: '20px 20px'
                 }}>
            </div>

            <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/60 transition-colors duration-300 rounded-2xl"></div>

            <div className="relative z-10">
              {/* Badge de EXIT */}
              {product.isExit && (
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 rounded-full text-xs font-bold shadow-lg shadow-iuptec-orange/50">
                    <Trophy className="w-3 h-3" />
                    <span>EXIT - {product.exitText}</span>
                  </div>
                </div>
              )}
              
              {/* Header com ícone - TAMANHOS REDUZIDOS */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  {/* Glow do ícone */}
                  <div className="absolute inset-0 bg-iuptec-teal/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Container do ícone - REDUZIDO */}
                  <div className="relative w-11 h-11 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 rounded-xl flex items-center justify-center border border-iuptec-teal/30 group-hover:border-iuptec-teal/60 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-6 h-6 text-iuptec-teal" strokeWidth={2} />
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-iuptec-teal transition-colors duration-300 drop-shadow-lg">
                    {product.name}
                  </h3>
                  <span className="text-iuptec-teal/90 text-xs font-semibold drop-shadow-md">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Descrição - TEXTO MENOR */}
              <p className="text-white/90 text-sm mb-4 leading-relaxed drop-shadow-md">
                {product.description}
              </p>

              {/* Link */}
              {product.url && (
                <a 
                  href={product.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-iuptec-teal hover:text-cyan-300 transition-colors duration-300 font-semibold text-sm group/link"
                >
                  <span>Visitar site</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Separator = () => (
  <div className="flex-shrink-0 flex items-center justify-center px-6">
    <ChevronRight className="w-6 h-6 text-iuptec-teal/40" strokeWidth={2} />
  </div>
);

export default function Portfolio() {
  const products = [
        {
      year: '2026',
      name: 'Impact Flow',
      category: 'Ferramentas',
      description: 'Transformamos desafios complexos em vantagens competitivas através de IA estratégica.',
      url: 'https://www.impact-flow.iuptec.com.br/',
      icon: '📄'
    },
    {
      year: '2026',
      name: 'Iuptec Tools',
      category: 'Ferramentas',
      description: 'Kit completo de ferramentas de IA e automações',
      url: 'https://www.tools.iuptec.com.br/',
      icon: '📄'
    },
    
    {
      year: '2024/2025',
      name: 'Plataforma Tucont Ecosystem',
      category: 'Plataforma de Contabilidade Integrativa - ERP e AI',
      description: 'Plataforma de criação de negócios que conecta empresários a contadores de forma simples e eficiente.',
      url: 'https://www.tucont.com.br',
      icon: '📄'
    },

    {
      year: '2024',
      name: 'Integração Ritz',
      category: 'Desenvolvimento',
      description: 'Integração TOTVS com CRM.',
      icon: '📄'
    },

        {
      year: '2024',
      name: 'Site Opcevê',
      category: 'Desenvolvimento',
      description: 'Desenvolvimento de Landigd Page + Blog.',
      url: 'https://www.opceve.com.br',
      icon: '📄'
    },
  

    {
      year: '2023/2024',
      name: 'BEM - Balcão do Empresário',
      category: 'Marketplace Contábil',
      description: 'Plataforma que conecta empresários a contadores de forma simples e eficiente.',
      url: 'https://www.balcaodoempresario.com.br',
      icon: '📄'
    },
  
    {
      year: '2023/2024',
      name: 'Integração Ninbi e Senven',
      category: 'Desenvolvimento',
      description: 'Integração com Portal de Fornecedores.',
      icon: '📄'
    },

    {
      year: '2022',
      name: 'IUPCare',
      category: 'Gestão Clínica',
      description: 'Sistema completo para gestão de clínicas e consultórios médicos.',
      url: 'https://iupcare.com.br/',
      icon: '🏥'
    },
    {
      year: '2019',
      name: 'IUPSign e IUPErp',
      category: 'ERP e Assinatura Digital',
      description: 'Solução de Gestão completa e assinatura digital com validade jurídica.',
      icon: '🔐',
      isExit: true,
      exitText: 'Vendido para Qualitycert'
    },
  ];

  // Duplicar os produtos para o efeito infinito - IMPORTANTE: MANTENHA 3 CÓPIAS
  const duplicatedProducts = [...products, ...products, ...products];

  return (
    <section id="portfolio" className="py-12 lg:py-16 bg-dark-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-iuptec-teal rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-iuptec-orange rounded-full blur-3xl" />
      </div>

      {/* Grid pattern tech no fundo */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(45, 212, 191, 0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iuptec-orange/10 border border-iuptec-orange/30 rounded-full text-iuptec-orange text-sm font-bold mb-6">
            <span>Experiência</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black">Confiam em Nós</h2>
        </div>

        {/* Carrossel Container */}
        <div className="portfolio-carousel-container">
          <div className="portfolio-carousel-gradient-left" />
          <div className="portfolio-carousel-gradient-right" />
          
          <div className="portfolio-carousel-track">
            {duplicatedProducts.map((product, index) => (
              <div key={`${product.name}-${index}`} className="portfolio-carousel-item">
                <PortfolioItem product={product} />
                <Separator />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}