// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixes 'Router' not defined
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shows from './pages/Shows';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import Press from './pages/Press';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white selection:bg-zinc-800">
        <Header />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/press" element={<Press />} />
            {/* Add other routes here as you build the pages */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;