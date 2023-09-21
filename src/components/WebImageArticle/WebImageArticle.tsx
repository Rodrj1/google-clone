import Link from 'next/link';

interface Props {
  webArticle: WebImageArticle;
}

export default function WebImageArticle({ webArticle }: Props) {
  const articleWidth =
    webArticle.image.width > '360' ? '360' : webArticle.image.width;

  const articleHeight =
    webArticle.image.height > '460' ? '460' : webArticle.image.height;
  return (
    <Link href={webArticle.image.contextLink}>
      <article
        className="group flex flex-col p-3 rounded-md m-auto gap-1 bg-zinc-800"
        style={{
          width: articleWidth + "px",
          height: articleHeight + "px",
        }}
      >
        <picture className='h-full w-full'>
          <img
            className="group-hover:shadow-xl object-contain transition-shadow  p-1 rounded-md m-auto h-full w-full"
            src={webArticle.link}
            alt={webArticle.title}
          />
        </picture>

        <span className="text-xs text-grey-100 overflow-hidden">
          {webArticle.image.height}x{webArticle.image.width}
        </span>

        <h2 className="text-sm group-hover:underline truncate">
          {webArticle.displayLink}
        </h2>

        <h2 className="text-sky-500 group-hover:underline truncate text-lg">
          {webArticle.title}
        </h2>
      </article>
    </Link>
  );
}
