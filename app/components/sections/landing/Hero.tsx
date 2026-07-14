import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090B] pt-32 pb-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:justify-between lg:px-8">
        <HeroContent />
        <HeroPreview />
      </div>
    </section>
  );
}