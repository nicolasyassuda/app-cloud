'use client'
import { randomBytes } from "crypto";

import { FormEvent } from "react";

export default function InputPost() {
  async function _handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let formData = {
      UserID: randomBytes(16).toString("hex"),
      Title: e.currentTarget.title.value,
      Text: e.currentTarget.posts.value
    };
    const response = await fetch('./api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  }
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={(e) => _handleSubmit(e)}
    >
      <label htmlFor="posts" className="text-2xl">
        Deixe sua mensagem:
      </label>
      <span>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" className="h-8 rounded-md mb-2"></input>
      </span>
      <span>
        <label htmlFor="posts">Post:</label>
        <input type="text" name="posts" className="h-8 rounded-md"></input>
      </span>
      <button className=" bg-purple-900 max-w-fit p-2 mt-2 rounded-md">
        Enviar
      </button>
    </form>
  );
}
