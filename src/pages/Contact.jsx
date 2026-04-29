import { contactData } from '../data/contact';
import { socialData } from '../data/socials';

const Contact = () => {
  // Filter based on the 'name' field in socialData matching 'socialKeys' in contactData
  const activeSocials = socialData.filter(link => 
    contactData.socialKeys.some(key => key.toLowerCase() === link.name.toLowerCase())
  );

  return (
    <div className="py-24 px-6 bg-black min-h-screen font-industrial text-center">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-logo text-white mb-12 tracking-widest uppercase">
          {contactData.title}
        </h1>

        <div className="space-y-12">
          {/* Email Section */}
          <section className="group">
            <a 
              href={`mailto:${contactData.email}`}
              className="inline-flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-highlight/50 group-hover:bg-zinc-950 transition-all duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-highlight"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <span className="text-xl md:text-2xl text-white tracking-widest uppercase font-bold group-hover:text-highlight transition-colors">
                {contactData.email}
              </span>
            </a>
          </section>

          {/* Description */}
          <p className="text-zinc-500 leading-relaxed max-w-lg mx-auto italic tracking-wide text-sm">
            {contactData.description}
          </p>

          {/* Social Links Layout using existing Icons */}
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            {activeSocials.map((social) => {
              
              return (
                <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-4xl hover:text-highlight transition-colors duration-300 text-white"
              >
                <social.Icon />
              </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;