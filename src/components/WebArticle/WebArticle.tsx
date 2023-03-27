import Link from 'next/link';
import Parser from 'html-react-parser';

interface Props {
  webArticle: WebArticle;
}

export default function WebArticle({ webArticle }: Props) {
  return (
    <article className="bg-opacity-10 bg-blue-800 p-2 border rounded-md border-transparent flex flex-col xl:w-5/12 max-[639px]:w-full max-[639px]:gap-1 sm:w-full hover:bg-pink-200 hover:bg-opacity-5 transition-colors duration-150">
      <div className="group">
        <Link href={webArticle.link}>
          <span className="group-hover:underline text-xs text-white  transition-colors">
            {webArticle.link}
          </span>
        </Link>

        <Link
          href={webArticle.link}
          className="text-blue-500 transition-colors hover:underline decoration-blue-500"
        >
          <h2 className="group-hover:underline text-lg">{webArticle.title}</h2>
        </Link>
      </div>

      <p className='text-sm'>{Parser(webArticle.htmlSnippet)}</p>
    </article>
  );
}
