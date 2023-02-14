import { Component } from "react";
import { PostContent } from "../PostContent";
import "./styles.css";

export class PostCard extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts">
        {posts.map((p) => (
          <PostContent
            key={p.id}
            id={p.id}
            title={p.title}
            body={p.body}
            cover={p.cover}
          />
        ))}
      </div>
    );
  }
}
