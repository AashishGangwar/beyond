const stats = [
  {
    number: "20+",
    label: "Career Paths",
  },
  {
    number: "500+",
    label: "Practice Questions",
  },
  {
    number: "100+",
    label: "Resources",
  },
  {
    number: "Free",
    label: "Forever",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl font-bold text-white">
            {stat.number}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}