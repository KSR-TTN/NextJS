"use client";
import { useContext, useEffect, useState } from "react";
import { LoaderContext } from "@/contextApi/loaderContext";
import Loader from "@/components/loader";
interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const loaderContext = useContext(LoaderContext);
  const [data, setData] = useState<Post[]>([]);

  if (!loaderContext) {
    throw new Error("LoaderContext must be used within a LoaderProvider");
  }

  const { loader, setLoader } = loaderContext;

  useEffect(() => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      })
      .catch(() => setLoader(false));
  }, [setLoader]);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">📜 Latest Posts</h1>

      {loader ? (
        <Loader />
      ) : (
        <div className="w-full max-w-3xl space-y-6">
          {data.slice(0, 10).map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white shadow-lg rounded-lg border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
