import Link from 'next/link';
import { GoogleAppsHandler } from '../GoogleAppsHandler';

export default function Header() {
  return (
    <header className="text-base text-white h-14 flex items-center px-5 justify-end w-full">
      <nav className="flex items-center gap-5 mr-5">
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
