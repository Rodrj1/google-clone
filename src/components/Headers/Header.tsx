import Link from 'next/link';
import { GoogleAppsHandler } from '../GoogleAppsHandler';

export default function Header() {
  return (
    <header className="text-sm text-[#f4f4f4] flex items-center py-2 md:px-5 justify-evenly md:justify-end w-full">
      <nav className="flex items-center gap-1 mr-1 sm:gap-5 sm:mr-5">
        <Link
          href="https://mail.google.com"
          className="transition-all hover-transition-grey"
        >
          Gmail
        </Link>

        <Link
          href={'/search/image'}
          className="transition-all hover-transition-grey"
        >
          Images
        </Link>

        <GoogleAppsHandler />
      </nav>

      <Link className="btn-blue" href={'https://myaccount.google.com/'}>
        Sign In
      </Link>
    </header>
  );
}
