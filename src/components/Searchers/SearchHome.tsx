'use client';

import { useSearchHome } from '@/features/components/Searchers';
import { SVGMic, SVGSearch, SVGSpinner } from '../Svgs';

export default function Search() {
  const { text, loadingRandom, handleOnChange, handleOnSubmit, randomSearch } =
    useSearchHome();

  return (
    <>
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="flex w-full xl:w-3/6 m5-5 mx-auto max-w-[80%] border border-grey-400 border-opacity-30 hover:border-grey-400 transition-all rounded-full px-5 py-3 hover:shadow-md focus-within:shadow-md my-8"
      >
        <SVGSearch />

        <input
          type={'text'}
          value={text}
          onChange={(e) => handleOnChange(e)}
          className="bg-transparent flex-grow focus:outline-none text-white px-2"
        />

        <SVGMic />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm.space-x-4 justify-center sm:flex-row gap-5 items-center">
        <button className="btnSearch" onClick={(e) => handleOnSubmit(e)}>
          Google Search
        </button>

        <div className="flex justify-center items-center disabled:opacity-70 w-36 h-10 overflow-hidden">
          {loadingRandom == false ? (
            <button className="btnSearch" onClick={randomSearch}>
              I am feeling lucky
            </button>
          ) : (
            <SVGSpinner />
          )}
        </div>
      </div>
    </>
  );
}
