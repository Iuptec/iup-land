export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/Logo Iuptec ciano e amarelo claro.png" alt="Iuptec" className="h-10 mb-4" />
            <p className="text-white/60 text-sm">
              Transformando experiência empreendedora em IA que funciona
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <p className="text-white/60 text-sm">comercial@iuptec.com.br</p>
            <p className="text-white/60 text-sm">(31) 98468-3944</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <div className="space-y-2 text-sm">
              <a href="https://www.tucont.com.br" className="block text-white/60 hover:text-iuptec-teal transition">Tucont</a>
              <a href="https://www.balcaodoempresario.com.br" className="block text-white/60 hover:text-iuptec-teal transition">BEM</a>
              <a href="https://www.iupcare.com.br" className="block text-white/60 hover:text-iuptec-teal transition">IupCare</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-white/40 text-sm">
          © 2025 Iuptec - Experiência + IA que Funciona
        </div>
      </div>
    </footer>
  )
}
