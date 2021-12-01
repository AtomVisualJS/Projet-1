import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GetAllPosts } from "../api/GET/postsGet";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  const renderedPosts = posts.map((post) => {
    return (
      <div key={post.id} className="box">
        <h1>{post.title}</h1>

        <img src={post.img} alt="post" width="20%" />
        <div className="info-box">
        <p>{post.body}</p>
       
        </div>  
        <Link to={`/posts/${post.id}`}>Voir plus</Link> 
      </div>
    );
  });

  return (
    <div>
      <h1>Home</h1>

      {renderedPosts}
    </div>
  );
};

export default Home;
