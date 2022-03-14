export type BlogsPropTypes = {
  allBlogsData: [{ slug: string; title: string; date: string; author: string }];
};

export type BlogsResponseType = {
  blogsData: {
    contentHtml: string;
    date: string;
    slug: string;
    title: string;
  };
};

export type B = {
  slug: string;
  title: string;
  date: string;
  author: string;
};
