import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: [
      { id: 1, title: "Hello", author: "User 1", content: "First post" }
    ],
    title: "",
    author: "",
    content: ""
  };

  addPost = () => {
    const newPost = {
      id: this.state.posts.length + 1,
      title: this.state.title,
      author: this.state.author,
      content: this.state.content
    };

    this.setState({
      posts: [...this.state.posts, newPost],
      title: "",
      author: "",
      content: ""
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <div></div>
        </div>

        {/* CREATE POST */}
        <input
          id="postTitle"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />

        <select
          id="postAuthor"
          value={this.state.author}
          onChange={(e) => this.setState({ author: e.target.value })}
        >
          <option value="">Select Author</option>
          <option>User 1</option>
          <option>User 2</option>
          <option>User 3</option>
        </select>

        <textarea
          id="postContent"
          value={this.state.content}
          onChange={(e) => this.setState({ content: e.target.value })}
        />

        <button onClick={this.addPost}>Add Post</button>

        {/* POSTS LIST */}
        <section className="posts-list">
          <div></div>

          {this.state.posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>

              {/* REACTIONS */}
              <button>👍 0</button>
              <button>❤️ 0</button>
              <button>🔥 0</button>
              <button>🚀 0</button>
              <button>👀 0</button>

              {/* EDIT */}
              <a className="button" href={`/posts/${post.id}`}>
                Edit
              </a>
            </div>
          ))}
        </section>
      </>
    );
  }
}

export default Posts;
