// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixes 'Router' not defined
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white selection:bg-zinc-800">
        <Header />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes here as you build the pages */}
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

// THIS LINE FIXES: 'App' is defined but never used 
// AND FIXES: Fast refresh only works when a file has exports
export default App;