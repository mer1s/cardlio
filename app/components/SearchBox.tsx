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
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);

    const showDropdown = loading || results.length > 0;

    return (
        <div className="relative">
            {/* Input wrapper */}
            <div className="relative">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search anything..."
                    className="
            w-full rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            px-5 py-4 text-base text-white
            outline-none
            transition
            focus:border-blue-500/60 focus:bg-white/10
            focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]
          "
                />

                {/* subtle glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
            </div>

            {/* Dropdown */}
            {showDropdown && (
                <div
                    className="
            absolute left-0 right-0 top-full mt-3
            rounded-2xl overflow-hidden
            border border-white/10
            bg-zinc-950/90 backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(0,0,0,0.6)]
          "
                >
                    <div className="max-h-72 overflow-y-auto">
                        {loading ? (
                            <div className="px-5 py-4 text-sm text-zinc-400">
                                Searching…
                            </div>
                        ) : results.length === 0 ? (
                            <div className="px-5 py-4 text-sm text-zinc-500">
                                No results found
                            </div>
                        ) : (
                            results.map((site, i) => (
                                <button
                                    key={site.slug}
                                    onClick={() => router.push(`/${site.slug}`)}
                                    className="
                    group w-full flex items-center justify-between
                    px-5 py-3 text-left
                    transition
                    hover:bg-white/5
                    active:bg-white/10
      border-b border-white/5 last:border-b-0
                  "
                                >
                                    <div className="flex flex-col">
                                        <span className="text-white font-medium group-hover:text-blue-400 transition">
                                            {site.name}
                                        </span>
                                        <span className="text-xs text-zinc-500">
                                            /{site.slug}
                                        </span>
                                    </div>

                                    <div className="text-zinc-600 group-hover:text-zinc-400 transition">
                                        ↗
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}