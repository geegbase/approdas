import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Header.module.scss';

const Icon = ({ className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      className={className}
      onClick={onClick}
    >
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
    </svg>
  );
};

const CloseIcon = ({ className, color, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={34}
      height={34}
      className={className}
      fill={color}
      onClick={onClick}
    >
      <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
    </svg>
  );
};

export default function Header() {
  const fullMenuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleToggleMenu = () => {
    setIsActive((prevState) => !prevState);
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
        <Icon
          className={`md:hidden lg:hidden cursor-pointer z-10 fill-white`}
          onClick={handleToggleMenu}
        />
      </div>
    </header>
  );
}
