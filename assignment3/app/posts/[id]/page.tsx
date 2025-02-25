interface PostProps {
    params: { id: string };
  }
  
  async function getPost(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: { revalidate: 10 },
    });
    if (!res.ok) return null;
    return res.json();
  }
  
  export default async function PostPage({ params }: PostProps) {
    const postPatams =  params; 
    console.log(params);
    
    const postId = postPatams.id
    if (!postId) throw new Error("Post ID not found");
  
    const post = await getPost(postId);
  
    if (!post) return <div>Post not found.</div>;
  
    return (
      <div>
        <h2 className="text-3xl font-bold mb-4">🕰️ ISR Example</h2>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">{post.title}</h3>
          <p className="mt-4 text-gray-700">{post.body}</p>
        </div>
      </div>
    );
  }
  