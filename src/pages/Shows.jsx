// src/pages/Shows.jsx
import { allShows } from '../data/shows';

const Shows = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison

  // Filter and Sort Logic
  const upcoming = allShows
    .filter(show => new Date(show.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date)); // Soonest first

  const past = allShows
    .filter(show => new Date(show.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Most recent first

  // Helper function to format date for display (e.g., 04/18/26)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
      timeZone: 'UTC' // Ensures date doesn't shift due to local time zones
    });
  };

  return (
    <div className="py-24 px-6 bg-black min-h-screen font-industrial">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-logo text-white mb-16 tracking-widest text-center">
          SHOWS
        </h1>

        {/* UPCOMING SHOWS */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.5em] text-highlight mb-10 border-b border-highlight/50 pb-4">
            Upcoming Appearances
          </h2>
          <div className="space-y-1">
            {upcoming.length > 0 ? (
              upcoming.map((show, idx) => (
                <a 
                  key={idx}
                  href={show.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid md:grid-cols-4 gap-4 py-8 border-b border-zinc-900 bg-zinc-950"
                >
                  <span className="text-highlight font-bold tracking-tighter text-xl">
                    {formatDate(show.date)}
                  </span>
                  <span className="text-white uppercase tracking-widest text-lg">
                    {show.venue}
                  </span>
                  <span className="text-zinc-500 text-sm self-center">
                    {show.location}
                  </span>
                  <span className="text-white italic text-sm md:text-right self-center">
                    {show.lineup}
                  </span>
                </a>
              ))
            ) : (
              <p className="text-zinc-400 italic tracking-widest py-10 px-4">
                No upcoming dates announced. Check back soon.
              </p>
            )}
          </div>
        </section>

        {/* ARCHIVE */}
        <section>
  <h2 className="text-xs uppercase tracking-[0.5em] text-highlight mb-10 border-b border-highlight/50 pb-4">
    Archive
  </h2>
  <div className="space-y-4">
    {past.map((show, idx) => (
      <div 
        key={idx} 
        className="grid grid-cols-1 md:grid-cols-[100px_250px_1fr_auto] gap-4 items-center border-zinc-900 py-2"
      >
        <span className="text-zinc-600 text-xs font-mono">
          {formatDate(show.date)}
        </span>
        
        <span className="text-zinc-400 uppercase text-sm tracking-widest truncate">
          {show.venue}
        </span>

        <span className="text-zinc-600 text-xs uppercase tracking-wider">
          {show.location}
        </span>

        <span className="text-zinc-400 text-xs italic md:text-right">
          {show.lineup}
        </span>
      </div>
    ))}
  </div>
</section>
      </div>
    </div>
  );
}

export default Shows;