import { Component } from "react";

export class Home extends Component {
  state = {
    posts: [
      { id: 1, title: "tit 1", body: "body1" },
      { id: 2, title: "tit 2", body: "body2" },
      { id: 3, title: "tit 3", body: "body3" },
    ],
  };

  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O título mudou";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  };
  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="app">
          {posts.map((p) => (
            <div> Movies: {p.title}</div>
          ))}
        </div>
      </section>
    );
  }
}
