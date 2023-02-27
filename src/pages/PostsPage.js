import React, { Component } from 'react';
import PostPreview from '../components/PostPreview';
import Loading from '../components/Loading';
import api from '../utils/API.js';
import {Link} from "react-router-dom";


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
          <button><Link to="/admin"> Admin </Link></button>
          {
            // Posto map metoda vraca niz, samo sam primentio .reverse() metodu kako bi prikazao postove u obrnutom redosledu. 
            // Posto je baza jednostavna i nema atribut datum u sebi, svako novo-dodati post dobija novi ID koji se sam inkrementuje, stoga svaki novi post ce biti novijeg datuma od prethodnog.

            this.state.posts.map((post, key) => {
            return <PostPreview post={post} key={key} />;
            }).reverse()
          }
        </div>
      );
    }
  }
}

export default PostsPage;
