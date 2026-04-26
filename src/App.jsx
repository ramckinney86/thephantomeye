// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white selection:bg-zinc-800">
        
        <Header />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* As you create the files in /pages, uncomment these:
              <Route path="/shows" element={<Shows />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/press" element={<Press />} />
              <Route path="/contact" element={<Contact />} />
            */}
          </Routes>
        </main>

        <footer className="py-12 border-t border-zinc-900 text-center">
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} THE PHANTOM EYE
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;