import Link from 'next/link';

interface Props {
  webArticle: WebImageArticle;
}

export default function WebImageArticle({ webArticle }: Props) {
  return (
    <article className="group flex flex-col p-3 rounded-md h-auto w-auto max-w-sm m-auto gap-1 bg-blue-800 bg-opacity-20 hover:bg-pink-200 hover:bg-opacity-5 transition-colors duration-150">
      <Link href={webArticle.image.contextLink}>
        <img
          className="group-hover:shadow-xl object-contain transition-shadow  w-auto max-w-xs h-auto max-h-60 p-1 rounded-md m-auto"
          src={webArticle.link}
          alt={webArticle.title}
        />
      </Link>
      <span className="text-xs text-grey-100">
        {webArticle.image.height}x{webArticle.image.width}
      </span>

      <Link href={webArticle.image.contextLink}>
        <h2 className="text-sm group-hover:underline truncate">
          {webArticle.displayLink}
        </h2>
      </Link>

      <Link href={webArticle.image.contextLink}>
        <h2 className="text-blue-500 group-hover:underline truncate text-lg">
          {webArticle.title}
        </h2>
      </Link>
    </article>
  );
}
