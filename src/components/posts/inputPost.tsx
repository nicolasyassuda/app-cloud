'use client'
import { randomBytes } from "crypto";

import { FormEvent } from "react";

export default function InputPost({call}: {call: () => void}) {
  async function _handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let formData = {
      UserID: randomBytes(16).toString("hex"),
      Title: e.currentTarget.titlepost.value,
      Text: e.currentTarget.posts.value
    };
    const response = await fetch('./api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    call();
  }
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={(e) => _handleSubmit(e)}
    >
      <label htmlFor="posts" className="text-2xl text-white">
        Deixe sua mensagem:
      </label>
      <span>
        <label htmlFor="titlepost text-white">Título:</label>
        <input type="text" name="titlepost" className="h-8 rounded-md mb-2"></input>
      </span>
      <span>
        <label htmlFor="posts text-white">Post:</label>
        <input type="text" name="posts" className="h-8 rounded-md"></input>
      </span>
      <button className=" bg-purple-900 max-w-fit p-2 mt-2 rounded-md text-white">
        Enviar
      </button>
    </form>
  );
}
