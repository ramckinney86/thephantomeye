// src/components/Header.jsx
import { NavLink, Link } from 'react-router-dom';
import { navigationData } from '../data/navigation';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-black uppercase tracking-widest italic">
          THE PHANTOM EYE
        </Link>

        {/* Navigation Map */}
        <ul className="flex space-x-8">
          {navigationData.map((item) => (
            <li key={item.name}>
              {item.external ? (
                <a 
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-200'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;