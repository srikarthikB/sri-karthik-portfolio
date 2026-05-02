import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent font-sans selection:bg-emerald-200 selection:text-emerald-900" id="page-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
