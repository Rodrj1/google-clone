import Link from 'next/link';
import {
  SVGCalendar,
  SVGGoogleDrive,
  SVGGoogleSearch,
  SVGMail,
  SVGMaps,
  SVGMeet,
  SVGYoutube,
  SVGPlay,
  SVGGooglePhotos,
  SVGGoogleCloud,
  SVGGoogleAds,
  SVGGoogleOne,
} from '../Svgs';

export default function GoogleApps() {
  return (
    <div className="flex flex-wrap top-14 gap-8 p-3 justify-center items-center absolute h-[270px] w-[280px] sm:w-[320px] sm:p-5 sm:gap-11 bg-blue-300 md:bg-pink-100  md:bg-opacity-20 scroll- border border-blue-400 border-opacity-30 scrollbar scrollbar-thumb-blue-700">
      <Link className="google-app" href={'https://www.youtube.com'}>
        <SVGYoutube />
        Youtube
      </Link>

      <Link
        className="google-app"
        href={'https://www.google.com'}
      >
        <SVGGoogleSearch />
        Search
      </Link>

      <Link
        className="google-app"
        href={'https://www.google.com/maps'}
      >
        <SVGMaps />
        Maps
      </Link>

      <Link className="google-app" href={'https://play.google.com/store'}>
        <SVGPlay />
        Play
      </Link>

      <Link
        className="google-app"
        href={'https://meet.google.com/'}
      >
        <SVGMeet />
        Meet
      </Link>

      <Link className="google-app" href={'https://mail.google.com/'}>
        <SVGMail />
        Gmail
      </Link>

      <Link className="google-app" href={'https://drive.google.com'}>
        <SVGGoogleDrive />
        Drive
      </Link>

      <Link className="google-app" href={'https://photos.google.com'}>
        <SVGGooglePhotos />
        Photos
      </Link>

      <Link className="google-app" href={'https://console.cloud.google.com'}>
        <SVGGoogleCloud />
        Cloud
      </Link>

      <Link className="google-app" href={'https://ads.google.com'}>
        <SVGGoogleAds />
        Ads
      </Link>

      <Link className="google-app" href={'https://one.google.com/about'}>
        <SVGGoogleOne />
        One
      </Link>

      <Link
        className="google-app"
        href={'https://support.google.com/calendar/answer/37083?hl=en'}
      >
        <SVGCalendar />
        Calendar
      </Link>
    </div>
  );
}
