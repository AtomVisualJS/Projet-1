import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GetAllPosts } from "../api/GET/postsGet";
import '../css/home.css';
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardMedia, CardActions, Button, Typography,} from "@material-ui/core";



const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  const renderedPosts = posts.map((post) => {
    return (
      <div key={post.id}>
        <Card sx={{ maxWidth: 500 }} className="cardBox" >
        <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image={post.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/posts/${post.id}`}>Voir plus</Link>
      </CardActions>
    </Card>
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
