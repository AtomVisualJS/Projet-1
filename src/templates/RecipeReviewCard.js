import * as React from "react";
import { styled } from "@mui/material/styles";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowDown from"@material-ui/icons/KeyboardArrowDown";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonBasesProducts from "./ButtonBasesProducts";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ widht: "100%" }}>
   
        <ButtonBasesProducts />{" "}
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> 
        </IconButton>98 %
        <IconButton aria-label="share">
         
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <KeyboardArrowDown  />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h3 style={{ textAlign: "center", marginBottom: "25px" }}>Method:</h3>
          <Typography paragraph>
            Tout les produits sont issus de la terre et sont fabriqués en
            France.
          </Typography>

          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
          <br />

          <div style={{ textAlign: "center" }}></div>
        </CardContent>
      </Collapse>
    </div>
  );
}
