import React from 'react';

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay com blur */}
      <div 
        className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Conteúdo do Modal */}
      <div className="relative z-10 w-full max-w-4xl mx-4">
        <div className="bg-dark-900 border border-iuptec-teal/30 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header do Modal */}
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {title || 'Ferramentas'}
              </h2>
              <p className="text-iuptec-teal text-sm mt-1">
                Explore nossas soluções tecnológicas
              </p>
            </div>
            
            {/* Botão Fechar */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-dark-800 transition-colors group"
              aria-label="Fechar modal"
            >
              <svg 
                className="w-6 h-6 text-iuptec-teal group-hover:text-white transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          
          {/* Conteúdo do Modal */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {children}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;