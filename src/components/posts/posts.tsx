import Post from "./post";

export default function Posts({ posts }: { posts: any[] }) {

  return (
    <>
      <h1 className=" text-2xl text-white">Posts</h1>
      <div className="flex flex-wrap justify-around w-full">
        {posts.map((post, index) => (
          <Post key={index} post={post}></Post>
        ))}
      </div>
    </>
  );
}
