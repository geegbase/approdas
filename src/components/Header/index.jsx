import Link from 'next/link';

export default function Header() {
  return (
    <header className="">
      <nav className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
