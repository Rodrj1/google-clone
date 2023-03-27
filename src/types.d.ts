type WebArticle = {
  title: string;
  link: string;
  htmlSnippet: string;
};

type WebImageArticle = {
  title: string;
  link: string;
  displayLink: string;
  image: {
    contextLink: string;
    height: string;
    width: string;
    thumbnailLink: string;
  };
};
