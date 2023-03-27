'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');

  const selectOption = (option: string) => {
    if (option == 'All') router.push(`/search/web?searchTerm=${searchTerm}`);
    if (option == 'Img') router.push(`/search/image?searchTerm=${searchTerm}`);
  };

  return (
    <ul className="flex gap-5 text-white bg-opacity-5 bg-pink-200 px-44 pb-2 max-[639px]:px-20 border-b border-blue-400 border-opacity-30">
      <li
        onClick={() => selectOption('All')}
        className={`hover-transition-grey p-2 ${
          pathname === '/search/web' && '!bg-red !rounded-full'
        }`}
      >
        All
      </li>
      <li
        onClick={() => selectOption('Img')}
        className={`hover-transition-grey p-2 ${
          pathname === '/search/image' && '!bg-red !rounded-full'
        }`}
      >
        Images
      </li>
    </ul>
  );
}
