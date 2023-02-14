import { Component } from "react";

import { PostFilters } from "../../components/PostManagement/PostFilters";
import { PostCard } from "../../components/PostManagement/Post/PostCard";
import { MorePostsButton } from "../../components/PostManagement/MorePostsButton";
import { getPostsAndPhotosFromApi } from "../../utils/generics";

import "./styles.css";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: "",
  };

  componentDidMount() {
    this.loadPosts();
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await getPostsAndPhotosFromApi();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && <h1>Search value: {searchValue}</h1>}

          <PostFilters
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>

        {filteredPosts.length > 0 && <PostCard posts={filteredPosts} />}

        {filteredPosts.length === 0 && (
          <p>Não existem posts para o termo pesquisado.</p>
        )}

        <div className="button-container">
          {!searchValue && (
            <MorePostsButton
              text="Load more posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
