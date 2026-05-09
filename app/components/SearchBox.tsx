"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Site = {
  name: string;
  slug: string;
};

export default function SearchBox() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Site[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(query)}`
        );

        const data = await res.json();

        setResults(data || []);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search sites..."
        className="
          w-full rounded-2xl border border-white/10
          bg-white/5 px-5 py-4 text-lg text-white
          outline-none backdrop-blur-xl
          transition focus:border-blue-500
        "
      />

      {(results.length > 0 || loading) && (
        <div
          className="
            absolute left-0 right-0 top-full mt-3
            overflow-hidden rounded-2xl
            border border-white/10
            bg-zinc-900/95 backdrop-blur-xl
            shadow-2xl
          "
        >
          {loading ? (
            <div className="px-5 py-4 text-sm text-zinc-400">
              Searching...
            </div>
          ) : (
            results.map((site) => (
              <button
                key={site.slug}
                onClick={() => router.push(`/${site.slug}`)}
                className="
                  flex w-full items-center justify-between
                  border-b border-white/5
                  px-5 py-4 text-left
                  transition hover:bg-white/5
                  cursor-pointer
                "
              >
                <span className="font-medium text-white">
                  {site.name}
                </span>

                <span className="text-sm text-zinc-500">
                  /{site.slug}
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}