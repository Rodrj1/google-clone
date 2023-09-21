export const dynamic = "force-dynamic";

import { PaginationButtons } from '@/components/PaginationButtons';
import { SearchError } from '@/components/SearchError';
import { WebArticle } from '@/components/WebArticle';

type searchInformation = {
  formattedSearchTime: number;
  formattedTotalResults: number;
};

interface Props {
  searchParams: any;
}

export default async function WebSearchPage({ searchParams }: Props) {
  const index = searchParams.start || 1;

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_KEY}&cx=${process.env.CX_KEY}&q=${searchParams.searchTerm}&start=${index}`
  ).then((res) => res.json());

  const responseContext: searchInformation = response.searchInformation;
  const responseArticles: Array<WebArticle> = response.items;

  if (!responseArticles) return <SearchError />;

  return (
    <div className="flex flex-col gap-5 w-full justify-center items-center">
      <p className="pt-3 text-sky-500 text-center text-xs md:text-base">
        About {responseContext?.formattedTotalResults} results (
        {responseContext?.formattedSearchTime} seconds)
      </p>

      <ul className="grid md:grid-cols-2 grid-flow-row gap-5 w-full md:w-[90%] p-2 md:p-0">
        {responseArticles &&
          responseArticles.map((item: WebArticle) => (
            <li key={item.title}>
            <WebArticle webArticle={item} />
            </li>
          ))}
      </ul>

      <PaginationButtons />
    </div>
  );
}
