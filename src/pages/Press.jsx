import { pressData } from '../data/press';

const Press = () => {
  // Sort reviews by date descending
  const sortedReviews = [...pressData.reviews].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="py-24 px-6 bg-black min-h-screen font-industrial">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-logo text-white mb-16 tracking-widest text-center">
          PRESS
        </h1>

        {/* REVIEWS SECTION */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.5em] text-highlight mb-10 border-b border-highlight/20 pb-4">
            Coverage & Reviews
          </h2>
          <div className="space-y-12">
            {sortedReviews.map((item, idx) => (
              <div key={idx} className="group">
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block space-y-4"
                >
                  <p className="text-xl md:text-2xl text-white font-light leading-snug group-hover:text-highlight transition-colors duration-300">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center justify-between border-b border-zinc-900 pt-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
                      {item.outlet}
                    </span>
                    <span className="text-xs font-mono text-zinc-700">
                      {item.date}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Press;