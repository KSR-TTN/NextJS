import { GetServerSideProps } from "next";

type DataProps = {
  id: string;
  message: string;
};

type SSRPageProps = {
  data: DataProps;
};

export default function SSRPage({ data }: SSRPageProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">🚀 Server-Side Rendering (SSR)</h2>
      {data ? (
        <div className="p-4 bg-yellow-100 rounded-lg">
          <p className="text-lg text-yellow-700">📦 Data for ID {data.id}: {data.message}</p>
        </div>
      ) : (
        <p className="text-gray-500 animate-pulse">No data available.</p>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
  };
};
