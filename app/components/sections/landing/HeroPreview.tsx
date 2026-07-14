import {
  Briefcase,
  Database,
  FileText,
  TrendingUp,
} from "lucide-react";

export default function HeroPreview() {
  return (
    <div className="relative hidden w-full max-w-lg lg:block">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Career Dashboard
            </h2>

            <p className="text-sm text-zinc-400">
              Your learning journey
            </p>
          </div>

          <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
            Active
          </div>
        </div>

        {/* SQL */}

        <div className="mb-5 rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
          <div className="mb-2 flex items-center gap-3">
            <Database size={18} className="text-cyan-400" />
            <span className="font-medium text-white">
              SQL Practice
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[72%] rounded-full bg-cyan-400" />
          </div>

          <p className="mt-2 text-xs text-zinc-400">
            72% Completed
          </p>
        </div>

        {/* Product */}

        <div className="mb-5 rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
          <div className="mb-2 flex items-center gap-3">
            <Briefcase size={18} className="text-violet-400" />
            <span className="font-medium text-white">
              Product Roadmap
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[45%] rounded-full bg-violet-400" />
          </div>

          <p className="mt-2 text-xs text-zinc-400">
            45% Completed
          </p>
        </div>

        {/* Resume */}

        <div className="mb-5 rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
          <div className="mb-2 flex items-center gap-3">
            <FileText size={18} className="text-amber-400" />
            <span className="font-medium text-white">
              Resume Score
            </span>
          </div>

          <div className="text-3xl font-bold text-white">
            87
            <span className="text-lg text-zinc-400">/100</span>
          </div>

          <p className="text-xs text-zinc-400">
            ATS Optimized
          </p>
        </div>

        {/* Hiring */}

        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
          <div className="mb-3 flex items-center gap-3">
            <TrendingUp size={18} className="text-emerald-400" />
            <span className="font-medium text-white">
              Companies Hiring
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Google",
              "Microsoft",
              "Uber",
              "Meesho",
              "Swiggy",
              "Amazon",
            ].map((company) => (
              <span
                key={company}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}