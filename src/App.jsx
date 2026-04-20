import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Site principal
import Header from './components/Header'
import Hero from './components/Hero'
import Founders from './components/Founders'
import ProblemSolution from './components/ProblemSolution'
import Solutions from './components/Solutions'
import Differentials from './components/Differentials'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import Modal from './components/ui/Modal'
import ToolsModalContent from './components/modal/ToolsModalContent'

// Páginas de educação
import Educacao from './pages/Educacao'
import Imersao from './pages/Imersao'
import ProdutividadeClaude from './pages/cursos/ProdutividadeClaude'

function HomePage() {
  const [isToolsModalOpen, setIsToolsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Header onOpenToolsModal={() => setIsToolsModalOpen(true)} />

      <main>
        <Hero />
        <Solutions />
        <Founders />
        <Portfolio />
        <Process />
        <ProblemSolution />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ChatWidget />

      {isToolsModalOpen && (
        <Modal
          isOpen={isToolsModalOpen}
          onClose={() => setIsToolsModalOpen(false)}
          title="Ferramentas Iuptec"
        >
          <ToolsModalContent />
        </Modal>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/imersao" element={<Imersao />} />
        <Route path="/cursos/produtividade-com-claude" element={<ProdutividadeClaude />} />
      </Routes>
    </BrowserRouter>
  );
}
