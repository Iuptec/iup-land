import { useState } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Solutions from './components/Solutions'
import Differentials from './components/Differentials'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import Modal from './components/ui/Modal'
import ToolsModalContent from './components/modal/ToolsModalContent'

export default function App() {
  // Estado para controlar o modal de ferramentas
  const [isToolsModalOpen, setIsToolsModalOpen] = useState(false);

  // Função para abrir o modal
  const openToolsModal = () => {
    setIsToolsModalOpen(true);
  };

  const closeToolsModal = () => {
    setIsToolsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Header onOpenToolsModal={openToolsModal} />
      
      <main>
        <Hero />
        <Portfolio />
        <Solutions />
        <Process />
        <Education />
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
          onClose={closeToolsModal}
          title="Ferramentas Iuptec"
        >
          <ToolsModalContent />
        </Modal>
      )}
    </div>
  )
}