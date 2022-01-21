import React, { Component } from 'react';
import Loading from '../components/Loading.js';
import api from '../utils/API.js';

class DeletePage extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      deleted: false,
    };
  }

  async componentDidMount() {
    const posts = await api.fetchAllPosts();
    this.setState({
      loaded: true,
      posts: posts,
    });
  }

  async onDeleteClick(id) {
    const response = await api.deletePost(id);
  }

  render() {
    if (this.state.loaded === false) {
      return <h1>Component is loading</h1>;
    } else {
      return (
        <div>
          {this.state.posts.map((post) => {
            return (
              <div>
                <h1>{post.title}</h1>
                <button onClick={() => this.onDeleteClick(post.id)}>
                  Delte Post
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default DeletePage;
