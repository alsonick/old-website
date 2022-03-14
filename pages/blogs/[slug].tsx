// Next
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';

// Lib
import { getAllBlogSlugs, getBlogsData } from '../../lib/blogs';

// Types
import { BlogsResponseType } from '../../types/blogs';

// Components
import { Blog } from '../../components/Blog';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogsData = await getBlogsData(params!.slug);
  return {
    props: {
      blogsData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllBlogSlugs();
  return {
    paths,
    fallback: false,
  };
};

const BlogPage: NextPage<BlogsResponseType> = (props) => {
  console.log(props);
  return <Blog blogsData={props.blogsData} />;
};

export default BlogPage;
