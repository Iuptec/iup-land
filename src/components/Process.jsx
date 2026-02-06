import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, FileText, Rocket, Handshake, Sparkles } from 'lucide-react';

const iconMap = {
  '🔍': Search,
  '📝': FileText,
  '🚀': Rocket,
  '🤝': Handshake,
};

const ProcessStep = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const IconComponent = iconMap[step.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      <div className="group relative">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-iuptec-teal/30 to-cyan-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        
        {/* Card */}
        <div className="relative bg-dark-800/40 backdrop-blur-xl border-2 border-iuptec-teal/20 group-hover:border-iuptec-teal/50 p-8 rounded-2xl text-center transition-all duration-300 group-hover:scale-[1.05] h-full">
          
          {/* Grid pattern sutil */}
          <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl" 
               style={{
                 backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(45, 212, 191, 0.1) 1px, transparent 1px)`,
                 backgroundSize: '20px 20px'
               }}>
          </div>

          {/* Fundo para legibilidade */}
          <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/60 transition-colors duration-300 rounded-2xl"></div>

          <div className="relative z-10">
            {/* Container do ícone com número */}
            <div className="relative inline-block mb-6">
              {/* Glow atrás do ícone */}
              <div className="absolute inset-0 bg-iuptec-teal/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Ícone principal */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-iuptec-teal/20 to-cyan-400/20 rounded-xl flex items-center justify-center border border-iuptec-teal/30 group-hover:border-iuptec-teal/60 transition-all duration-300 group-hover:scale-110">
                <IconComponent className="w-10 h-10 text-iuptec-teal group-hover:text-cyan-300 transition-colors duration-300" strokeWidth={2} />
              </div>

              {/* Badge do número */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                className="absolute -top-3 -right-3"
              >
                <div className="relative">
                  {/* Glow do número */}
                  <div className="absolute inset-0 bg-iuptec-orange/50 rounded-full blur-md animate-pulse"></div>
                  
                  {/* Círculo do número */}
                  <div className="relative w-10 h-10 bg-gradient-to-br from-iuptec-orange to-yellow-400 rounded-full flex items-center justify-center border-2 border-dark-900 shadow-lg shadow-iuptec-orange/50">
                    <span className="font-mono font-black text-dark-950 text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Conteúdo */}
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-iuptec-teal transition-colors duration-300 drop-shadow-lg">
              {step.title}
            </h3>
            <p className="text-white/80 leading-relaxed drop-shadow-md">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Process() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const steps = [
    { number: '01', icon: '🔍', title: 'Diagnóstico Gratuito', description: 'Conversamos sobre seus desafios e identificamos oportunidades de IA' },
    { number: '02', icon: '📝', title: 'Plano Personalizado', description: 'Proposta sob medida com cronograma, investimento e resultados esperados.' },
    { number: '03', icon: '🚀', title: 'Implementação', description: 'Desenvolvemos as soluções. Você acompanha e valida as entregas.' },
    { number: '04', icon: '🤝', title: 'Suporte Contínuo', description: 'Acompanhamos resultados e otimizamos constantemente.' }
  ];

  return (
    <section className="py-12 lg:py-16 bg-dark-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-iuptec-orange/5 to-transparent pointer-events-none"></div>
      
      {/* Grid pattern tech no fundo */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: `linear-gradient(rgba(253, 185, 19, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(253, 185, 19, 0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iuptec-orange/10 border border-iuptec-orange/30 rounded-full text-iuptec-orange text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Custom</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Projetos Personalizados</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Processos simples e transparentes, do diagnóstico ao suporte contínuo.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-iuptec-teal via-iuptec-orange to-iuptec-teal origin-left"
          />
          
          {/* Grid de steps */}
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <ProcessStep key={idx} step={step} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}