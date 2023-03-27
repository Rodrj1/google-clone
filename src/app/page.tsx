import { Header } from '@/components/Headers';
import { SearchHome } from '@/components/Searchers';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <section>
        <Header />
      </section>
      
      <section>
        <div className="flex flex-col items-center mt-24">
          <Image
            height="500"
            width="300"
            alt={'Google Icon'}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          />
        </div>

        <SearchHome />
      </section>
    </div>
  );
}
