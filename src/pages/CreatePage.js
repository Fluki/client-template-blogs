import React, { Component, } from 'react';
import ErrorMessage from '../components/ErrorMessage.js';
import api from '../utils/API.js';
import '../style/pages/CreatePage.css';
import { Link, Navigate } from 'react-router-dom';


class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: '',
        description: '',
        image: '',
      },
      done: false,
    };

    this.handleChange = this.handleChangeTitle.bind(this);
    this.handleChange = this.handleChangeDescription.bind(this);
    this.handleChange = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    const newPost = {
      title: event.target.value,
      description: this.state.post.description,
      image: this.state.post.image,
    };

    this.setState({ post: newPost });
  }

  handleChangeDescription(event) {
    const newPost = {
      title: this.state.post.title,
      description: event.target.value,
      image: this.state.post.image,
    };

    this.setState({ post: newPost });
  }

  handleChangeImage(event) {
    const newPost = {
      title: this.state.post.title,
      description: this.state.post.description,
      image: event.target.value,
    };

    this.setState({ post: newPost });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = await api.createPost(this.state.post);

    this.setState({
      done: true,
      message: data.message,
    });
  }


  render() {

    if (this.state.message === "Post created.") {
      return <Navigate to="/admin" />
    }

    return (
      <div>

        <button><Link to="/admin"> Admin </Link></button>
        
        <h2>Create Post</h2>
        <form className={'postForm'} onSubmit={this.handleSubmit}>
          <label>
            Title
            <input
              type="text"
              value={this.state.title}
              onChange={ (event) => this.handleChangeTitle(event) }
              required
            />
          </label>

          <label>
            Description
            <textarea
              type="text"
              value={this.state.description}
              onChange={ (event) => this.handleChangeDescription(event) }
              required
            />
          </label>

          <label>
            Image
            <input
              type="text"
              value={this.state.image}
              onChange={(event) => this.handleChangeImage(event)}
            />
          </label>

          <input type="submit" value="Submit" />

        </form>

        <ErrorMessage message={ this.state.message } />
        
      </div>
    );
  }
}

export default CreatePage;
