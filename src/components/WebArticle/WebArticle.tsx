import Link from 'next/link';
import Parser from 'html-react-parser';

interface Props {
  webArticle: WebArticle;
}

export default function WebArticle({ webArticle }: Props) {
  return (
    <article className="bg-zinc-800 p-2 border rounded-md border-transparent flex flex-col sm:w-full transition-colors duration-150">
      <div className="group">
        <Link href={webArticle.link}>
          <span className="group-hover:underline text-xs transition-colors">
            {webArticle.link}
          </span>
        </Link>

        <Link href={webArticle.link}>
          <h3 className="group-hover:underline text-lg text-sky-500 transition-colors hover:underline decoration-sky-500">
            {webArticle.title}
          </h3>
        </Link>
      </div>

      <p className="text-sm">{Parser(webArticle.htmlSnippet)}</p>
    </article>
  );
}
