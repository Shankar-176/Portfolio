import { Header } from './components/Header'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './styles/theme.css'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container-narrow space-y-24 py-24">
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}