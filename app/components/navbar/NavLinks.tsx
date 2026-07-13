import Link from "next/link";
import { navigation } from "@/app/constants/navigation";

export default function NavLinks() {
  return (
    <div className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm text-zinc-300 transition hover:text-white"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}