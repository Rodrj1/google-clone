import Image from 'next/image';
import Link from 'next/link';
import SearchWebPage from '../Searchers/SearchWebPage';
import { SearchHeaderOptions } from '../SearchHeaderOptions';
import { SVGGridDots, SVGSettings } from '../Svgs';

export default function HeaderSearchPage() {
  return (
    <>
      <header className="flex px-6 py-2 items-center justify-between gap-3 max-[639px]:flex-col max-[639px]:min-w-full">
        <Link href={''}>
          <Image
            height="200"
            width="120"
            alt={'Google Icon'}
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          />
        </Link>

        <SearchWebPage />

        <div className="flex gap-5 items-center">
          <SVGSettings />

          <SVGGridDots />

          <Link
            className="btn-blue"
            href={'https://myaccount.google.com/'}
          >
            Sign In
          </Link>
        </div>
      </header>

      <SearchHeaderOptions />
    </>
  );
}
