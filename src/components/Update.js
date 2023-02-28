import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Loading from '../components/Loading.js';
import ErrorMessage from '../components/ErrorMessage.js';
import api from '../utils/API.js';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      post: {
        title: '',
        description: '',
        image: '',
      },
    };

    this.handleChange = this.handleChangeTitle.bind(this);
    this.handleChange = this.handleChangeDescription.bind(this);
    this.handleChange = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    const newPost = this.state.post;
    newPost.title = event.target.value;
    this.setState({ post: newPost });
  }

  handleChangeDescription(event) {
    const newPost = this.state.post;
    newPost.description = event.target.value;
    this.setState({ post: newPost });
  }

  handleChangeImage(event) {
    const newPost = this.state.post;
    newPost.image = event.target.value;
    this.setState({ post: newPost });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const data = await api.updatePost(this.props.id, this.state.post);

    this.setState({
      done: true,
      message: data.message,
    });
  }

  async componentDidMount() {
    const data = await api.fetchSinglePost(this.props.id);
    this.setState({
      loaded: true,
      post: data.post,
    });
  }

  render() {
    
    if (this.state.message === "Post updated.") {
      return <Navigate to="/admin" />
    }

    if (this.state.done === true) {
      return <ErrorMessage message={this.state.message} />;
    }

    if (this.state.loaded === false) {
      return <Loading />;
    }

    return (
      <form className={'postForm'} onSubmit={this.handleSubmit}>
        <button>
          <Link to="/admin"> Admin </Link>
        </button>
        <label>
          Title:
          <input
            type="text"
            value={this.state.post.title}
            onChange={(event) => this.handleChangeTitle(event)}
          />
        </label>

        <label>
          Description:
          <textarea
            type="text"
            value={this.state.post.description}
            onChange={(event) => this.handleChangeDescription(event)}
          />
        </label>

        <label>
          Image:
          <input
            type="text"
            value={this.state.post.image}
            onChange={(event) => this.handleChangeImage(event)}
          />
        </label>

        <input type="submit" value="Update" />
      </form>
    );
  }
}

export default Update;
