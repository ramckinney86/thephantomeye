// src/components/Header.jsx
import { NavLink, Link } from 'react-router-dom';
import { navigationData } from '../data/navigation';

const Header = () => {
  return (
    <header className="w-full">
      <div 
        className="w-full py-10 bg-zinc-900 bg-cover bg-center flex justify-center items-center border-b border-zinc-800"
        style={{ backgroundImage: `url('/assets/pink-header-bg.jpg')` }}
      >
        <div className="bg-black/85 px-12 py-8 backdrop-blur-sm transition-all duration-500 group-hover:border-zinc-500">
        <Link to="/" className="z-10">
          {/* Apply the custom font class here */}
          <h1 className="font-fun-games text-5xl md:text-7xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            THE PHANTOM EYE
          </h1>
        </Link>
        </div>
      </div>
      
      {/* Navigation bar continues below using the default 'industrial' font... */}
      <nav className="w-full bg-black ...">
        <div className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-12">
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
                        isActive ? 'text-white underline underline-offset-8' : 'text-zinc-500 hover:text-zinc-200'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;