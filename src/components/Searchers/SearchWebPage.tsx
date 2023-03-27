'use client';

import { SVGCross, SVGMic, SVGSearch } from '../Svgs';
import { useSearchWebPage } from '@/features/components/Searchers';

export default function SearchWebPage() {
  const { text, handleOnSubmit, handleOnChange, deleteSearch } =
    useSearchWebPage();

  return (
    <>
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="flex md:w-3/6 lg:w-max xl:w-2/6 border border-grey-400 border-opacity-30 hover:border-grey-400 rounded-full px-5 py-3 hover:shadow-md focus-within:shadow-md mr-auto max-[639px]:w-4/5 max-[639px]:m-auto max-[639px]:px-0 transition-all"
      >
        <SVGSearch />

        <input
          type={'text'}
          value={text}
          onChange={(e) => handleOnChange(e)}
          className="bg-transparent flex-grow focus:outline-none text-white px-2 border-r border-blue-200"
        />

        {text != '' && (
          <div onClick={deleteSearch}>
            <SVGCross />
          </div>
        )}

        <SVGMic />
      </form>
    </>
  );
}
