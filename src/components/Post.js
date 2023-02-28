import { Link } from 'react-router-dom';
import '../style/components/Post.css';

function Post(props) {
  if (props.post.img == ''){
    console.log("radi")
  }
  return (
    <Link to={`/blogs/${props.post.id}`}>
      <div className="post">
        <h2>{props.post.title}</h2>
        <img src={props.post.image !== '' ? props.post.image : ''} id="img" />
        <p className="description">{props.post.description}</p>
      </div>
    </Link>
  );
}

export default Post;
