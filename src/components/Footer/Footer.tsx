import Link from 'next/link';
import { Country } from '../Country';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 text-white w-12/12">
      <div className="w-full py-1 px-5">
        <Country />
      </div>

      <div className="flex justify-between flex-col sm:flex-row py-1 px-5">
        <ul className="flex gap-5 flex-wrap">
          <Link href={'https://www.google.com/search/howsearchworks/?fg=1'}>
            About
          </Link>
          
          <Link
            href={
              'https://ads.google.com/intl/en_ar/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'
            }
          >
            Adversiting
          </Link>

          <Link
            href={
              'https://smallbusiness.withgoogle.com/intl/es-419_ar/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=AR#!/'
            }
          >
            Business
          </Link>

          <Link
            href={
              'https://about.google/?utm_source=google-AR&utm_medium=referral&utm_campaign=hp-footer&fg=1'
            }
          >
            How Search Works
          </Link>
        </ul>

        <ul className="flex gap-5 pr-4">
          <Link href={'https://policies.google.com/privacy?hl=en-AR&fg=1'}>
            Privacy
          </Link>

          <Link href={'https://policies.google.com/terms?hl=en-AR&fg=1'}>
            Terms
          </Link>

          <Link href={'https://www.google.com/preferences?hl=en-AR&fg=1'}>
            Settings
          </Link>
        </ul>
      </div>
    </footer>
  );
}
