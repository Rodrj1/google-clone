'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { SVGArrowLeft, SVGArrowRight } from '../Svgs';

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const index = +searchParams.get('start') || 1;

  return (
    <div className="flex justify-between m-5 w-5/6">
      {index >= 10 && (
        <Link
          className="flex gap-2  items-center"
          href={`${pathname}?searchTerm=${searchTerm}&start=${index - 10}`}
        >
          <SVGArrowLeft />
          <span>Previous Page</span>
        </Link>
      )}

      {index == 1 ? (
        <>
          <div className="invisible"> </div>

          <Link
            className="flex gap-2  items-center"
            href={`${pathname}?searchTerm=${searchTerm}&start=${index + 10}`}
          >
            <span>Next Page</span>
            <SVGArrowRight />
          </Link>
        </>
      ) : (
        <Link
          className="flex gap-2  items-center"
          href={`${pathname}?searchTerm=${searchTerm}&start=${index + 10}`}
        >
          <span>Next Page</span>
          <SVGArrowRight />
        </Link>
      )}
    </div>
  );
}
