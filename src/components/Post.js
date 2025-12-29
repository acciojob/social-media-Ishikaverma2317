import { useState } from "react";

function Post({ post, index }) {
  const [reactions, setReactions] = useState(post.reactions);

  function react(i) {
    if (i === 4) return;
    const newReactions = [...reactions];
    newReactions[i]++;
    setReactions(newReactions);
  }

  return (
    <article className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      {reactions.map((count, i) => (
        <button key={i} onClick={() => react(i)}>
          {count}
        </button>
      ))}

      <a className="button" href={`/posts/${index}`}>
        Edit
      </a>
    </article>
  );
}

export default Post;
