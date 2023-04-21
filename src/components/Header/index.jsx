import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import HamburgerIcon from '../Icons/HamburgerIcon';
import CloseIcon from '../Icons/CloseIcon';
import styles from '@/styles/Header.module.scss';

export default function Header() {
  const fullMenuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleOpenMenu = () => {
    setIsActive(true);
  };

  const handleCloseMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (isActive) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }
    fullMenuRef.current.classList.toggle(styles['menu--open']);
  }, [isActive]);
  return (
    <header className="h-14">
      <div className={styles.fullMenu} ref={fullMenuRef}>
        <div className={styles.layer} />
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link
                href="/"
                className={styles.nav__link}
                onClick={handleCloseMenu}
              >
                Home
              </Link>
            </li>

            <li className={styles.nav__item}>
              <Link
                href="/about"
                className={styles.nav__link}
                onClick={handleCloseMenu}
              >
                About
              </Link>
            </li>

            <li className={styles.nav__item}>
              <Link
                href="/marketplace"
                className={styles.nav__link}
                onClick={handleCloseMenu}
              >
                Marketplace
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-w-[1200px] h-full my-0 mx-auto px-[5px] py-0 flex justify-between items-center">
        <div className="font-exo2 text-2xl">Approdas</div>
        <nav className="hidden md:block lg:block">
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
        {isActive ? (
          <CloseIcon
            className={`md:hidden lg:hidden cursor-pointer z-10 fill-white`}
            onClick={handleCloseMenu}
          />
        ) : (
          <HamburgerIcon
            className={`md:hidden lg:hidden cursor-pointer z-10 fill-white`}
            onClick={handleOpenMenu}
          />
        )}
      </div>
    </header>
  );
}
