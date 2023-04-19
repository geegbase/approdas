import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-14">
      <div className="max-w-[1200px] h-full my-0 mx-auto px-[5px] py-0 flex justify-between items-center">
        <div className="font-exo2 text-2xl">Approdas</div>
        <nav>
          <ul className="flex flex-row font-exo2 text-lg">
            <li>
              <Link
                href="/"
                className="hover:text-slate-100 hover:bg-[#7c00ff] px-4 py-2 hover:rounded-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-slate-100 hover:bg-[#7c00ff] px-4 py-2 hover:rounded-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className="hover:text-slate-100 hover:bg-[#7c00ff] px-4 py-2 hover:rounded-lg"
              >
                Marketplace
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
