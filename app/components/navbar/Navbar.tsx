import Container from "../ui/Container";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Container>
        <nav
          className="
            mt-4
            flex
            h-16
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-black/40
            px-6
            backdrop-blur-xl
          "
        >
          <NavLogo />

          <NavLinks />

          <NavActions />
        </nav>
      </Container>
    </header>
  );
}