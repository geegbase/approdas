import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="max-w-[1200px] my-0 mx-auto py-0 px-[5px]">
        <nav className="flex gap-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
