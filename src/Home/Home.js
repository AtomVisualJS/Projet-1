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
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
import PlaceIcon from "@material-ui/icons/Place";

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const renderedItem = item.map((item, index) => {
    return (
      <div key={item.id}>
        <div
          className="container"
          style={{
            borderBottom: "2px solid black",
            backgroundColor: "white",
          }}
        >
          <div>
            <Box
              sx={{ 
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <ImageButton
                focusRipple
                key={item.nav}
                style={{
                  width: "100%",
                  height: "130px",
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
                      {item.societyName}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </Link>
              </ImageButton>
            </Box>

            <Button onClick={handleClickOpen}>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.radiofrance.fr/s3/cruiser-production/2019/11/22fd4c39-08d1-4733-a9ac-fd38931ae128/870x489_gettyimages-155292650.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <p
                style={{
                  color: "black",
                  paddingLeft: "10px",
                  fontSize: "0.8rem",
                  marginBottom: "0%",
                }}
              >
                {item.contact.userName} <br />
                {item.contact.profession}
              </p>
            </Button>
            <div style={{ float: "right", margin: "3%", fontSize: "1rem" }}>
              <Link to={`/position/${item.id}/${item.location.lat}/${item.location.lng}/${item.location.address}`}>
                {item.location.address} <br />
                {item.location.cdpostal} {item.location.city}
                <PlaceIcon />
              </Link>
            </div>
            <CardContent style={{ backgroundColor: "white" }}>
              {" "}
              <h3>Produit ou Service</h3>
              <p>{item.societyDescription}</p>
              <RecipeReviewCard />
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://cdn.radiofrance.fr/s3/cruiser-production/2019/11/22fd4c39-08d1-4733-a9ac-fd38931ae128/870x489_gettyimages-155292650.jpg"
                    sx={{ width: 56, height: 56 }}
                  />{" "}
                 {item.contact.userName}
                  {""} <br /> {item.contact.profession}
                  <Chip
                    style={{ float: "right" }}
                    icon={<MdPhone />}
                    label={item.contact.phone}
                  />
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom></Typography>
                  <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </Typography>
                  <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    En savoir plus
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            </CardContent>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>
        <br />      
        {renderedItem}
      </div>
    </div>
  );
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default Home;
