export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#27272a_0%,#09090B_55%)]" />

      <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[160px]" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
    </>
  );