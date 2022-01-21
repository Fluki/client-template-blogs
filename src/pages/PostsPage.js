import React, { Component } from 'react';
import PostPreview from '../components/PostPreview';
import Loading from '../components/Loading';
import api from '../utils/API.js';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  async componentDidMount() {
    const data = await api.fetchAllPosts();
    if (data.ok) {
      this.setState({
        loaded: true,
        posts: data.posts,
      });
    } else {
      alert(data.message);
    }
  }

  render() {
    if (this.state.loaded === false) {
      return <Loading />;
    } else {
      return (
        <div>
          {this.state.posts.map((post, key) => {
            return <PostPreview post={post} key={key} />;
          })}
        </div>
      );
    }
  }
}

export default PostsPage;
