import '../style/pages/AdminPage.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import AdminPost from '../components/AdminPost';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import api from '../utils/API.js';

class AdminPage extends Component {
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
      this.setState({
        loaded: true,
        failed: true,
        message: data.message,
      });
    }
  }

  async onDeleteClick(id) {
    await api.deletePost(id);
    const posts = this.state.posts.filter((post) => post.id !== id);
    this.setState({
      posts: posts,
    });
  }

  render() {
    if (this.state.loaded === false) {
      return <Loading />;
    }

    if (this.state.failed === true) {
      return <ErrorMessage message={this.state.message} />;
    }

    return (
      <div>
        <Link to={'/admin/create'}>
          <button><Link to="/"> Home </Link></button>
          <div className={'createPost'}>
            <div>{ 'Create post' }</div>
            <AiOutlinePlusCircle />
          </div>
        </Link>
        <div>
          {this.state.posts.map((post, key) => {
            return (
              <AdminPost
                // Dodat on confirm metod
                onDeleteClick={ (id) => { if (window.confirm('Is it ok to delete this post?')) { this.onDeleteClick(id) } } }
                post={post}
                key={key}
              />
            );
          }).reverse() }
          {/* isto primenjeno kao i u PostPage.js, samo je primenjena reverse metoda */}
        </div>
      </div>
    );
  }
}

export default AdminPage;
