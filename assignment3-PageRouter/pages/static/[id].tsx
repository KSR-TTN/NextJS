import { GetStaticProps, GetStaticPaths } from "next";

type DataProps = {
  id: string;
  message: string;
};

type StaticPageProps = {
  data: DataProps;
};

export default function StaticPage({ data }: StaticPageProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-green-700">📸 Static Site Generation (SSG) with ISR</h2>
      {data ? (
        <div className="p-4 bg-blue-100 rounded-lg">
          <p className="text-lg text-blue-700">📄 Data for ID {data.id}: {data.message}</p>
        </div>
      ) : (
        <p className="text-gray-500 animate-pulse">No data available.</p>
      )}
    </div>
  );
}

// 🟢 Step 1: getStaticProps - Fetch data at build time and enable ISR
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      data: {
        id,
        message: post.title,
      },
    },
    revalidate: 10, // ISR: Rebuild page every 10 seconds if content changes
  };
};

// 🔷 Step 2: getStaticPaths - Define dynamic routes to pre-render
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"); // Pre-render first 5 posts
  const posts = await res.json();

  const paths = posts.map((post: { id: number }) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking", // Generate new pages at request time if not pre-rendered
  };
};
