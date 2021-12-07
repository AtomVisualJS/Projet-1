/// dispatch data
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { DatagetAll } from "../asynThunk/DatagetAll";

const DataDispatch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DatagetAll());
  }, [dispatch]);
  return null;
};

export default DataDispatch;
