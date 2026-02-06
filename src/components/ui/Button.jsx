export default function Button({ 
  children, 
  variant = 'solid', 
  className = '', 
  onClick,
  ...props 
}) {
  
  const baseClasses = 'px-6 py-3 rounded-xl font-bold transition';
  
  const variants = {
    solid: 'bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 hover:shadow-lg hover:shadow-iuptec-orange/50',
    outline: 'border-2 border-iuptec-teal text-iuptec-teal hover:bg-iuptec-teal/10',
    animated: '', // Variante animada com estrutura especial
    sparkle: '' // Variante sparkle com estrutura especial
  };

  // Se for variante animada, usa estrutura especial
  if (variant === 'animated') {
    return (
      <button 
        className={`btn-animated ${baseClasses} ${className}`}
        onClick={onClick}
        {...props}
      >
        <div className="btn-animated-container-stars">
          <div className="btn-animated-stars"></div>
        </div>
        
        <div className="btn-animated-glow">
          <div className="btn-animated-circle"></div>
          <div className="btn-animated-circle"></div>
        </div>
        
        <span className="btn-animated-text">{children}</span>
      </button>
    );
  }

  // Se for variante sparkle, usa estrutura especial
  if (variant === 'sparkle') {
    return (
      <button 
        className={`btn-sparkle ${baseClasses} ${className}`}
        onClick={onClick}
        {...props}
      >
        <div className="btn-sparkle-dots-border"></div>
        
        <span className="btn-sparkle-text">{children}</span>
      </button>
    );
  }

  // Variantes normais (solid, outline)
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}