import { epkData } from '../data/epk';
import { socialData } from '../data/socials';

const VideoCard = ({ video }) => (
  <div className="group flex flex-col">
    {/* Responsive Iframe Container */}
    <div className="relative aspect-video mb-6 border border-zinc-900 group-hover:border-highlight/50 transition-colors duration-500 bg-zinc-950">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    {/* Video Metadata */}
    <div className="px-2 border-b border-zinc-800 pb-2 mb-12">
      <div className="flex justify-between items-start mb-2 gap-4">
        <h3 className="text-lg md:text-xl text-white uppercase tracking-wider group-hover:text-highlight transition-colors">
          {video.title}
        </h3>
      </div>
      <p className="text-zinc-500 text-sm italic font-industrial leading-relaxed">
        {video.description}
      </p>
    </div>
  </div>
);

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
              <div className="gflex flex-col gap-y-20">
                {epkData.videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
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
              <h3 className="text-white text-xs tracking-widest mb-6 uppercase">Socials & Streaming</h3>
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
            </section>
            
            <section>
              <h3 className="text-white text-xs tracking-widest mb-6 uppercase">Downloads</h3>
              <div className="flex flex-col gap-3">
                {epkData.downloads.map((dl, i) => (
                  <a 
                    key={i} 
                    href={dl.url} 
                    target="_blank"
                    className="p-4 border border-zinc-800 hover:border-highlight/50 hover:bg-zinc-900 transition-all group flex justify-between items-center"
                  >
                    <span className="text-[10px] tracking-widest uppercase group-hover:text-highlight">{dl.label}</span>
                    <span className="text-zinc-700 text-[10px]">ZIP</span>
                  </a>
                ))}
              </div>
            </section>

            <section className="pt-6 border-t border-zinc-900">
              <h3 className="text-white text-xs tracking-widest mb-6 uppercase">Booking & Inquiry</h3>
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