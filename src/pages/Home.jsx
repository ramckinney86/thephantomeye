// src/pages/Home.jsx
import { homeData } from '../data/home';

const Home = () => {
  const { hero, about } = homeData;

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center bg-zinc-950 px-6">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-8xl mb-4 text-white drop-shadow-lg">
            {hero.heading}
          </h1>
          <p className="text-zinc-500 text-sm md:text-lg tracking-widest uppercase">
            {hero.subheading}
          </p>
          <a 
            href={hero.ctaLink} 
            className="mt-12 inline-block border border-zinc-700 px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 italic"
          >
            {hero.ctaText}
          </a>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-24 px-6 bg-black border-t border-zinc-900">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl mb-8 underline decoration-zinc-800 underline-offset-8">
              {about.title}
            </h2>
            <div className="space-y-6">
              {about.description.map((paragraph, index) => (
                <p key={index} className="text-zinc-400 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {about.lineup.map((member) => (
              <div key={member.name} className="border-l border-zinc-800 pl-6 py-2">
                <h3 className="text-zinc-200 text-lg">{member.name}</h3>
                <p className="text-zinc-600 text-sm italic">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;