import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
};

export default function ClientSide() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      if (!response.ok) throw new Error("Failed to fetch data");

      const data: Post[] = await response.json();
      setPosts(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch automatically when the component loads
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-blue-800">🌐 Client-Side Fetching Example</h2>

      <button
        onClick={fetchPosts}
        className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        🔄 Fetch Latest Posts
      </button>

      {loading && <p className="text-gray-600 animate-pulse">⏳ Loading posts...</p>}
      {error && <p className="text-red-500 font-medium">❌ {error}</p>}

      {posts && (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <strong className="block text-xl font-semibold text-gray-800">Post {post.id}</strong>
              <p className="text-gray-700 mt-1">{post.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
