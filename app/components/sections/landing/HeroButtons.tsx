import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Link
        href="/roadmaps"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-200"
      >
        Explore Roadmaps
        <ArrowRight size={18} />
      </Link>

      <Link
        href="/practice"
        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
      >
        Start Practicing
      </Link>
    </div>
  );
}