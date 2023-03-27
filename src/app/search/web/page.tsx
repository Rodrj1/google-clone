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
    <div className="text-white px-44 flex flex-col gap-5 max-[639px]:px-4 max-[639px]:gap-10 justify-center items-center">
      <p className="pt-3 max-[600px]:w-full text-blue-400">
        About {responseContext?.formattedTotalResults} results (
        {responseContext?.formattedSearchTime} seconds)
      </p>

      <div className="xl:flex xl:flex-row xl:flex-wrap xl:gap-5 xl:justify-center xl:items-center">
        {responseArticles &&
          responseArticles.map((item: WebArticle) => (
            <WebArticle key={item.title} webArticle={item} />
          ))}
      </div>

      <PaginationButtons />
    </div>
  );
}
