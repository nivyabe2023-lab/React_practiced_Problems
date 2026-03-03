import { useState, useEffect, createContext } from "react";
import { Link,useNavigate } from "react-router-dom";

export const dataContext = createContext();

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const data = "Datadata";

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <dataContext.Provider value={data}>
      <div className="container">
        <h1 className="text-center mt-3">Home Page</h1>

        <div className="text-center m-3">
          <Link to="/login" className="btn btn-primary m-2">Login</Link>
          <Link to="/counter" className="btn btn-success m-2">Counter</Link>
        </div>

        <div className="row justify-content-center m-3">
          {posts.map(post => (
            <div key={post.id} className="card m-3" style={{ width: "18rem" }} onClick ={() => navigate(`/Post/${post.id}`)}>
              <div className="card-body">
                <h5>{post.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </dataContext.Provider>
  );
}

export default Home;