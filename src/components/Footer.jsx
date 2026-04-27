// src/components/Footer.jsx
import { FaInstagram, FaYoutube, FaSpotify, FaApple, FaBandcamp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-highlight/30">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
        
        {/* SOCIAL LINKS */}
        <ul className="flex space-x-8 mb-10">
          {[
            { Icon: FaInstagram, url: "https://www.instagram.com/the_phantom_eye/" },
            { Icon: FaYoutube, url: "https://www.youtube.com/playlist?list=PLb8aGAqQkw-sH-GGjzxkcjc0hNgZPs0Ke" },
            { Icon: FaSpotify, url: "https://open.spotify.com/artist/3tHRRcfndZ65xaKjpazGtA?si=1_lqKIC7SEuGDAy_phe3Gg" },
            { Icon: FaApple, url: "https://music.apple.com/us/artist/the-phantom-eye/1574021580" },
            { Icon: FaBandcamp, url: "https://phantomeye.bandcamp.com/" }
          ].map((social, idx) => (
            <li key={idx}>
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
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
          <h4 className="text-[10px] uppercase tracking-[0.4em] mb-4 text-white">Newsletter Signup</h4>
          <form className="flex flex-col md:flex-row gap-2">
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
          </form>
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