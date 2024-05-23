import { FormEvent } from "react";

export default function Post({ post, call }: { post: any, call: () => void}) {
  async function _handleDelete(UserID:string,Title:string) {
    console.log(UserID)
    const response = await fetch('./api/submit-form', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({UserID: UserID, Title: Title}),
      });
    call();
  }
  return (
    <div className="flex flex-col w-1/4 m-4 pl-4 pr-4 pb-4 border-solid rounded-xl bg-purple-500" style={{boxShadow:"0px 4px 5px 11px rgba(0,0,0,0.46)", WebkitBoxShadow:"0px 4px 5px 5px rgba(0,0,0,0.46)"}}>
      <h1 className="text-2xl text-white">{post.Title.S}</h1>
      <p className="text-white">{post.Text.S}</p>
      <button className="text-right font-bold text-red-600 hover:cursor-pointer" onClick={()=> _handleDelete(post.UserID.S,post.Title.S)}>Delete</button>
    </div>
  );
}
