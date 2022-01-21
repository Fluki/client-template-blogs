import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/PostPreview.css';

function PostPreviw(props) {
  return (
    <Link to={`/post/${props.post.id}`}>
      <div className={'postPreview'}>
        <h3>{props.post.title}</h3>
        <p>{props.post.description.substring(0, 100) + '...'}</p>
      </div>
    </Link>
  );
}

export default PostPreviw;
