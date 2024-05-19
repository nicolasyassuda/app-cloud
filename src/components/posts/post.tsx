export default function Post({ post }: { post: any }) {
  return (
    <div className="flex flex-col w-1/4 m-4 pl-4 pr-4 pb-4 border-solid rounded-xl bg-purple-500" style={{boxShadow:"0px 4px 5px 11px rgba(0,0,0,0.46)", WebkitBoxShadow:"0px 4px 5px 5px rgba(0,0,0,0.46)"}}>
      <h1 className="text-2xl text-white">{post.Title}</h1>
      <p className="text-white">{post.Text}</p>
    </div>
  );
}
