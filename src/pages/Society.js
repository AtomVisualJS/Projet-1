import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import SingleButtonBases from "../SinglePage/SingleButtonBase.js";
import SimpleAccordion from '../templates/SimpleAccordion';
class Society extends React.Component {
  render() {
    return (
      <div>
        <div>
          <br />
        </div>
        <SingleButtonBases />
        <br />
        <Stack spacing={2}>
          <Skeleton variant="circular" width={40} height={40}></Skeleton>
          <Skeleton variant="rectangular" width={250} height={118}></Skeleton>
          <SimpleAccordion />
        </Stack>
      </div>
    );
  }
}

export default Society;
