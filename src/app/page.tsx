import { Header } from '@/components/Headers';
import { SearchHome } from '@/components/Searchers';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <Header />

      <picture className="flex flex-col items-center mt-24">
        <Image
          height="500"
          width="300"
          alt={'Google Icon'}
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
        />
      </picture>

      <SearchHome />
    </main>
  );
}
