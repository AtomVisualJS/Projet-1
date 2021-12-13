import "../Home/css/home.css";
import * as React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import RecipeReviewCard from "../templates/RecipeReviewCard";
import PlaceIcon from "@mui/icons-material/Place";
import { Avatar } from "@mui/material";
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 150,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Home = () => {
  const item = useSelector((state) => state.data.data);
  console.log(item);

  const renderedItem = item.map((item, index) => {
    return (
      <div key={item.id}>
        <div
          className="container"
          style={{ marginTop: "5%", borderRadius: "5px" }}
        >
          <div>
            <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
              <ImageButton
                focusRipple
                key={item.nav}
                style={{
                  width: "100%",
                  height: "150px",
                }}
              >
                <ImageSrc
                  style={{ backgroundImage: `url(${item.societyImageBack})` }}
                />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Link to={`/society/${item.id}`}>
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: "relative",
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {" "}
                      {item.societyName}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </Link>
              </ImageButton>
            </Box>

            <CardContent>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.radiofrance.fr/s3/cruiser-production/2019/11/22fd4c39-08d1-4733-a9ac-fd38931ae128/870x489_gettyimages-155292650.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Link
                style={{ textDecoration: "none" }}
                to={`/position/${item.id}/${item.location.lat}/${item.location.lng}`}
              >
                <p style={{ float: "right", width: "40%", textAlign: "right" }}>
                  {item.location.address} <br />
                  {item.location.city} {item.location.cdpostal}
                  <PlaceIcon />
                </p>
               
              </Link>
              Name: Paul 
              <br />
              Profession: Agriculteur{item.profession}
              <br />
              <br />
              <h3>Produit ou Service</h3>
              <p>{item.societyDescription}</p>
              <RecipeReviewCard />
            </CardContent>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>{renderedItem}</div>
    </div>
  );
};

export default Home;
