import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!post) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container mt-5">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p className="text-muted">{post.created_at}</p>

      <Link to="/" className="btn btn-primary mt-3">
        Back to Home
      </Link>
    </div>
  );
}

export default Post;