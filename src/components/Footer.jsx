// src/components/Footer.jsx
import Newsletter from './Newsletter';
import { socialData } from '../data/socials';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-highlight/30">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
        
        {/* SOCIAL LINKS - Now driven by data */}
        <ul className="flex space-x-8 mb-10">
          {socialData.map((social) => (
            <li key={social.name}>
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-2xl hover:text-highlight transition-colors duration-300 text-white"
              >
                <social.Icon />
              </a>
            </li>
          ))}
        </ul>

        {/* CONTACT EMAIL */}
        <a 
          href="mailto:phantomeyenyc@gmail.com" 
          className="text-xs tracking-[0.3em] uppercase hover:text-white transition-colors mb-12 text-white"
        >
          phantomeyenyc@gmail.com
        </a>

        {/* NEWSLETTER SIGNUP (Mailchimp Styled) */}
        <div className="w-full max-w-md text-center mb-16">
          <Newsletter />
          {/* <form className="flex flex-col md:flex-row gap-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="bg-zinc-950 border border-zinc-800 px-4 py-2 text-xs focus:outline-none focus:border-highlight grow tracking-widest text-white"
              required 
            />
            <button 
              type="submit" 
              className="bg-transparent border border-zinc-700 px-6 py-2 text-[10px] tracking-[0.2em] uppercase hover:bg-highlight hover:text-black hover:border-highlight transition-all duration-300 cursor-pointer"
            >
              Sign Up
            </button>
          </form> */}
        </div>


        {/* SITE INFO & LOGO */}
        <div className="flex flex-col items-center border-t border-zinc-900 pt-10 w-full text-white">
          <img 
            src="/favicon.png" 
            alt="The Phantom Eye Logo" 
            className="max-w-24 max-h-10 opacity-100 hover: transition-opacity duration-500 mb-4"
          />
          <p className="text-[9px] tracking-[0.5em] uppercase text-white">
            ©{currentYear} THE PHANTOM EYE
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;