import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services/index';
import { PostCard, Categories, Loader } from '../../components/BlogPage/index';

const CategoryPost = ({ posts }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="bg-lightModeBackground dark:bg-darkModeBackground px-5 pt-10 -mb-12 lg:-mb-24 font-kalam min-h-[100vh]">
      <div className="container max-w-[1400px] mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-active mb-12 capitalize">
          {slug}
        </h1>
        <Categories />
        <div>
          {posts.length < 1 && (
            <p className="sm:text-lg lg:text-xl leading-8 text-center text-white">
              Aktualnie brak postów w kategori {slug}
            </p>
          )}
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
