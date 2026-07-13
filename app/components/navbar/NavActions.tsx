import Button from "../ui/Button";

export default function NavActions() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <Button className="text-zinc-300 hover:text-white">
        Login
      </Button>

      <Button className="bg-white text-black hover:bg-zinc-200">
        Get Started
      </Button>
    </div>
  );
}