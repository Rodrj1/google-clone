import Link from 'next/link';
import { GoogleAppsHandler } from '../GoogleAppsHandler';

export default function Header() {
  return (
    <header className="bg-opacity-5 bg-pink-200 text-base text-white h-14 flex gap-8 items-center px-5 justify-end w-12/12 border-b border-blue-400 border-opacity-30">
      <Link
        href="https://mail.google.com"
        className="ease-in duration-300 hover-transition-grey"
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

      <button className="btn-pink">
        <Link href={'https://myaccount.google.com/'}>Sign In</Link>
      </button>
    </header>
  );
}
