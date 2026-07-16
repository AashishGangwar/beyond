import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 bg-transparent">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Beyond Software. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="/about" className="text-gray-600 hover:underline dark:text-gray-300">About</a>
            <a href="/resources" className="text-gray-600 hover:underline dark:text-gray-300">Resources</a>
            <a href="/privacy" className="text-gray-600 hover:underline dark:text-gray-300">Privacy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
