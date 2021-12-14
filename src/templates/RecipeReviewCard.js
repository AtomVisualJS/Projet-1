import * as React from "react";
import { styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { loadCSS } from "fg-loadcss";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonBasesProducts from "./ButtonBasesProducts";
import SimpleAccordion from "./SimpleAccordion";

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

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div style={{ widht: "100%" }}>
      <ButtonBasesProducts />{" "}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> 
        </IconButton>98 %
        <IconButton aria-label="share"></IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Icon
            baseClassName="fas"
            className="fa-plus-circle"
            sx={{ color: green[500] }}
          />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h3 style={{ textAlign: "center", marginBottom: "25px" }}>Method:</h3>
          <Typography paragraph>
            Tout les produits sont issus de la terre et sont fabriqués en
            France.
          </Typography>
          <SimpleAccordion />
          <Typography>
            <ButtonBasesProducts />
          </Typography>
          <br />

          <div style={{ textAlign: "center" }}></div>
        </CardContent>
      </Collapse>
    </div>
  );
}
