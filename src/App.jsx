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

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Solutions />
        <Differentials />
        <Portfolio />
        <Process />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
