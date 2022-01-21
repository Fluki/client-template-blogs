import { Component } from 'react';
import Loading from './Loading.js';
import ErrorMessage from './ErrorMessage.js';
import Post from './Post.js';
import api from '../utils/API.js';

class SinglePost extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  async componentDidMount() {
    const data = await api.fetchSinglePost(this.props.id);

    if (data.ok) {
      this.setState({
        loaded: true,
        post: data.post,
      });
    } else {
      this.setState({
        loaded: true,
        failed: true,
        message: data.message,
      });
    }
  }

  render() {
    if (this.state.loaded === false) {
      return <Loading />;
    }

    if (this.state.failed === true) {
      return <ErrorMessage message={this.state.message} />;
    }

    return <Post post={this.state.post} />;
  }
}

export default SinglePost;
