import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 p-4 bg-gray-900 text-white">
      <Link href="/">
        <img src="/logo.png" alt="Logo" className="h-10 cursor-pointer" />
      </Link>
      <Link href="/" className="hover:text-gray-400">Home</Link>
      <Link href="/page1" className="hover:text-gray-400">Page 1</Link>
      <Link href="/page2" className="hover:text-gray-400">Page 2</Link>
    </nav>
  );
}