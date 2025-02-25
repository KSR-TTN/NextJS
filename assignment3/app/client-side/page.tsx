"use client";

import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
}

export default function ClientSidePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));``
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">🌐 Client-Side Fetching</h2>
      <ul className="list-disc pl-6 space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="bg-blue-100 p-3 rounded-lg shadow-sm">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
