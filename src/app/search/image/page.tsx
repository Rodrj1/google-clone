export const dynamic = "force-dynamic";

import { PaginationButtons } from '@/components/PaginationButtons';
import { SearchError } from '@/components/SearchError';
import { WebImageArticle } from '@/components/WebImageArticle';

interface Props {
  searchParams: any;
}

export default async function ImageSearchPage({ searchParams }: Props) {
  const index = searchParams.start || 1;

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_KEY}&cx=${process.env.CX_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${index}`
  ).then((res) => res.json());

  const responseArticles: Array<WebImageArticle> = response.items;

  if (!responseArticles) return <SearchError />;

  return (
    <section className="justify-center items-center text-white px-3 flex flex-col mt-5 h-auto ">
      <div className="flex flex-wrap h-auto gap-1">
        {responseArticles.map((article) => (
          <WebImageArticle key={article.link} webArticle={article} />
        ))}
      </div>

      <PaginationButtons />
    </section>
  );
}
