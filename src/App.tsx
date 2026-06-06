import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Quote } from './pages/Quote';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Custom Cursor Glow effect coordinate capture
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'quote':
        return <Quote />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0F172A] text-white flex flex-col font-sans overflow-x-hidden select-none selection:bg-highlight-cyan/30">
      {/* Interactive Cursor Glow Element */}
      <div
        className="hidden md:block pointer-events-none fixed w-[500px] h-[500px] rounded-full bg-secondary-blue/5 glow-blur z-[99] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />

      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
