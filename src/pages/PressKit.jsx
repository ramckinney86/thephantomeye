import { epkData } from '../data/epk';

const PressKit = () => {
  return (
    <div className="py-24 px-6 bg-black min-h-screen font-industrial text-zinc-300">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-logo text-white mb-2 tracking-widest uppercase">The Phantom Eye</h1>
          <p className="text-highlight text-xs tracking-[0.5em] uppercase">Electronic Press Kit</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-16">
            <section className="space-y-6">
              <p className="text-xl text-white font-bold leading-tight italic">
                {epkData.bio.lead}
              </p>
              {epkData.bio.full.map((para, i) => (
                <p key={i} className="leading-relaxed text-zinc-400">{para}</p>
              ))}
            </section>

            <section>
              <h2 className="text-white text-xs tracking-[0.3em] mb-8 uppercase border-b border-zinc-800 pb-2">Videos</h2>
              <div className="space-y-8">
                {epkData.videos.map((vid, i) => (
                  <div key={i} className="aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <span className="text-zinc-700 font-mono text-xs italic">[ YouTube Embed: {vid.title} ]</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Quick Links */}
          <div className="space-y-12">
            <section className="bg-zinc-950 p-8 border border-zinc-900">
              <h3 className="text-white text-xs tracking-widest mb-6 uppercase">The Lineup</h3>
              <ul className="space-y-4">
                {epkData.members.map((m, i) => (
                  <li key={i}>
                    <p className="text-white text-sm font-bold uppercase">{m.name}</p>
                    <p className="text-zinc-500 text-[10px] tracking-widest leading-tight uppercase">{m.role}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-white text-xs tracking-widest mb-6 uppercase">Downloads</h3>
              <div className="flex flex-col gap-3">
                {epkData.downloads.map((dl, i) => (
                  <a 
                    key={i} 
                    href={dl.url} 
                    className="p-4 border border-zinc-800 hover:border-highlight/50 hover:bg-zinc-900 transition-all group flex justify-between items-center"
                  >
                    <span className="text-[10px] tracking-widest uppercase group-hover:text-highlight">{dl.label}</span>
                    <span className="text-zinc-700 text-[10px]">ZIP</span>
                  </a>
                ))}
              </div>
            </section>

            <section className="pt-6 border-t border-zinc-900">
              <p className="text-zinc-600 text-[10px] tracking-widest uppercase mb-2">Booking & Inquiry</p>
              <a href="mailto:phantomeyenyc@gmail.com" className="text-white hover:text-highlight transition-colors font-bold tracking-wider">
                phantomeyenyc@gmail.com
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressKit;