// src/pages/Home.jsx
import { homeData } from '../data/home';

const Home = () => {
  const { hero, about } = homeData;

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      

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