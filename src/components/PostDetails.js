import React, { Component } from "react";

class PostDetails extends Component {
  state = {
    editing: false,
    title: "Hello",
    content: "First post"
  };

  render() {
    return (
      <div className="post">
        {this.state.editing ? (
          <>
            <input
              id="postTitle"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <textarea
              id="postContent"
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
            />
            <button onClick={() => this.setState({ editing: false })}>
              Save
            </button>
          </>
        ) : (
          <>
            <h3>{this.state.title}</h3>
            <p>{this.state.content}</p>
            <button
              className="button"
              onClick={() => this.setState({ editing: true })}
            >
              Edit
            </button>
          </>
        )}
      </div>
    );
  }
}

export default PostDetails;
