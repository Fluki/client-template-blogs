import { useParams, useNavigate } from 'react-router-dom';
import SinglePost from '../components/SinglePost';

function SinglePostPage() {
  const { id } = useParams();
  let navigate = useNavigate();

  return <>
    <button onClick={() => navigate(-1)}>Back</button> 
    <SinglePost id={ id } />
  </>
  
}

export default SinglePostPage;
