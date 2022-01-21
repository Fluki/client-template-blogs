import { Link } from 'react-router-dom';
import '../style/components/Post.css';

function Post(props) {
  return (
    <Link to={`/blogs/${props.post.id}`}>
      <div className="post">
        <h2>{props.post.title}</h2>
        <img src={props.post.image} alt={'log'} id="img" />
        <p className="description">{props.post.description}</p>
      </div>
    </Link>
  );
}

export default Post;
