"use server";
import Posts from "@/components/posts/posts";
import { PostsService } from "../services/posts/index";
import InputPost from "@/components/posts/inputPost";

export default async function Home() {
  let posts = (await PostsService.getPosts()) ?? [];
  async function handleSubmit(formData:any) {
    await PostsService.postPosts(formData);
    posts = (await PostsService.getPosts()) ?? [];
  }

  return (
    <main className="flex flex-row flex-wrap justify-center gap-10">
      <InputPost></InputPost>
      <div className="flex w-full m-24 border-solid ">
        <Posts posts={posts}></Posts>
      </div>
    </main>
  );
}
