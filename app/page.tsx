import SearchBox from "./components/SearchBox";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white flex items-start justify-center pt-24 px-6">
      <div className="w-full max-w-xl space-y-6">
        <div className="space-y-1 text-center pb-5">
          <h1 className="text-6xl pb-18 tracking-normal font-medium">
            AppName
          </h1>

          <h1 className="text-3xl tracking-normal font-medium">
            Discover now
          </h1>

          <p className="text-zinc-400 text-lg">
            Search and open any site instantly.
          </p>
        </div>

        <SearchBox />
      </div>
    </main>
  );
}