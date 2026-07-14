import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
        🚀 India's Career Platform for Beyond Software Roles
      </div>

      <HeroHeading />

      <HeroDescription />

      <HeroButtons />

      <HeroStats />
    </div>
  );
}