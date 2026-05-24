import SearchBox from "./components/SearchBox";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b border-none from-zinc-950 via-zinc-900 to-zinc-950 text-white flex items-start pt-12 justify-center px-6">
      <div className="w-full max-w-2xl space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400">
            ⚡ Super fast site search
          </div>
          <h2 className="text-3xl md:text-4xl pt-4 font-medium text-zinc-200">
            Discover anything instantly
          </h2>

          <p className="text-zinc-400 text-base md:text-lg max-w-md mx-auto">
            Search and open any site in seconds with a clean, modern and minimal experience.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <div className="absolute -inset-1 bg-indigo-500/10 blur-md rounded-2xl" />
          <div className="relative">
            <SearchBox />
          </div>
        </div>
      </div>
    </main>
  );
}