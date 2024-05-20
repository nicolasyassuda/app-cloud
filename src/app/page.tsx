"use client";
import Posts from "@/components/posts/posts";
import { PostsService } from "../services/posts/index";
import InputPost from "@/components/posts/inputPost";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  },[]);

  async function getPosts() {
    let data = await fetch('./api/submit-form', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
    const posts = await data.json();
    setPosts(posts);
  }

  return (
    <main className="flex flex-row flex-wrap justify-center gap-10">
      <InputPost call={getPosts}></InputPost>
      <div className="flex w-full m-24 border-solid border-black border-2">
        <Posts posts={posts}></Posts>
      </div>
    </main>
  );
}
