import Image from 'next/image';
import Link from 'next/link';
import SearchWebPage from '../Searchers/SearchWebPage';
import { SearchHeaderOptions } from '../SearchHeaderOptions';
import { SVGGridDots, SVGSettings } from '../Svgs';

export default function HeaderSearchPage() {
  return (
    <>
      <header className="bg-opacity-5 bg-pink-200 flex px-6 py-2 items-center justify-between gap-3 max-[639px]:flex-col max-[639px]:min-w-full">
        <Link href={''}>
          <Image
            height="200"
            width="120"
            alt={'Google Icon'}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          />
        </Link>

        <SearchWebPage />

        <div className="flex gap-5 items-center">
          <SVGSettings />

          <SVGGridDots />

          <button className="btn-pink">
            <Link href={'https://myaccount.google.com/'}>Sign In</Link>
          </button>
        </div>
      </header>

      <SearchHeaderOptions />
    </>
  );
}
