// src/pages/Home.jsx
import { homeData } from '../data/home';

const Home = () => {
  const { about } = homeData;

  return (
    <div className="flex flex-col">
      
      {/* BIO & LINEUP SECTION */}
      <section className="py-24 px-6 bg-black border-t border-zinc-900">
        <div className="container mx-auto max-w-4xl">
          
          {/* FULL WIDTH TEXT AREA */}
          <div className="mb-20">
            <h1 className="text-center text-4xl md:text-6xl font-logo text-white mb-12 tracking-widest uppercase">
              {about.title}
            </h1>
            <div className="space-y-8">
              {about.description.map((paragraph, index) => (
                <p key={index} className="text-zinc-400 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* 3 COLUMN LINEUP */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-highlight/30">
            {about.lineup.map((member) => (
              <div key={member.name} className="text-center group">
                <h3 className="text-zinc-200 text-xl mb-1 transition-colors">
                  {member.name}
                </h3>
                <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] italic">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;