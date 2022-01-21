import React from 'react';
import '../style/components/admin/AdminPost.css';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';

function AdminPost(props) {
  return (
    <div className={'adminPost'}>
      <div className={'content'}>
        <h3>{props.post.title}</h3>
        <p>{`${props.post.description.substring(0, 100)}...`}</p>
      </div>

      <div className={'buttons'}>
        <div
          className={'delete'}
          onClick={() => props.onDeleteClick(props.post.id)}
        >
          <AiFillDelete />
        </div>

        <Link to={`/admin/update/${props.post.id}`}>
          <div className={'update'}>
            <GrUpdate />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AdminPost;
