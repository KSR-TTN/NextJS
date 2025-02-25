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
    revalidate: 10, 
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();

  const paths = posts.map((post: { id: number }) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking", 
  };
};
