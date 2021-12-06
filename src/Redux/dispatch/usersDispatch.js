import { useEffect } from "react";
import { getAllUsers } from "../asynThunk/usersThunk";
import { useDispatch } from "react-redux";

export const UsersDispatch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return null;
};
