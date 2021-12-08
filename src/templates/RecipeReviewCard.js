import "../Home/css/home.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ButtonBases from "./ButtonBases";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";
import TitlebarImageList from "./TitlebarImageList";
import { useSelector } from "react-redux";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const data = useSelector((state) => state.data.data);
  const data2 = data.map((item) => {
    return (
      <div className="container" key={item._id}>
        <div style={{ textAlign: "center" }}>
          <div width="100%">
            <Card sx={{ maxWidth: "100%" }}>
              <ButtonBases />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites"></IconButton>
                <IconButton aria-label="add to favorites">
                  <Link
                    to={`/proximite/${item._id}/${item.lat}/${item.lng}/${item.title}/${item.adress}/${item.city}`}
                  >
                    <PlaceIcon />
                  </Link>
                </IconButton>
                {item.adress} {item.city}
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  Voir
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Produits :</Typography>
                  <Typography paragraph>Lait, Soja et Lait de coco</Typography>
                  <TitlebarImageList />
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
              <br />
            </Card>
          </div>
        </div>
      </div>
    );
  });
  return <div style={{ margin: "5%" }}>{data2}</div>;
}
