import React, {  useEffect } from "react";
import { GetAllPosts } from "../api/GET/postsGet";
import { useDispatch} from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(GetAllPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
