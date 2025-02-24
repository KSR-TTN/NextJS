// app/server-side/page.tsx
async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    return res.json();
  }
  
  export default async function ServerSidePage() {
    const posts = await getPosts();
  
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6">⚙️ Server-Side Fetching</h2>
        <ul className="list-disc pl-6 space-y-2">
          {posts.map((post: any) => (
            <li key={post.id} className="bg-green-100 p-3 rounded-lg shadow-sm">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  