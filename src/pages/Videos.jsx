// src/pages/Videos.jsx
import { musicVideos, liveVideos } from '../data/videos';

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
    <div className="px-2">
      <div className="flex justify-between items-start mb-2 gap-4">
        <h3 className="text-lg md:text-xl text-white uppercase tracking-wider group-hover:text-highlight transition-colors">
          {video.title}
        </h3>
        <span className="text-[9px] text-highlight border border-highlight/30 px-2 py-0.5 uppercase tracking-widest whitespace-nowrap mt-1">
          {video.type}
        </span>
      </div>
      <p className="text-zinc-500 text-sm italic font-industrial leading-relaxed">
        {video.description}
      </p>
    </div>
  </div>
);

const Videos = () => {
  return (
    <div className="py-24 px-6 bg-black min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-logo text-white mb-20 tracking-widest text-center">
          VIDEOS
        </h1>

        {/* OFFICIAL MUSIC VIDEOS SECTION */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xs uppercase tracking-[0.6em] text-zinc-500 whitespace-nowrap">
              Music Videos
            </h2>
            <div className="h-px bg-zinc-900 grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {musicVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* LIVE PERFORMANCES SECTION */}
        <section className="mb-16">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xs uppercase tracking-[0.6em] text-zinc-500 whitespace-nowrap">
              Live Performances
            </h2>
            <div className="h-px bg-zinc-900 grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {liveVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Videos;