import React from "react";
import { GetAllInfos } from "../api/GET/getInfos";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const InfosComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllInfos());
  }, [dispatch]);



    return (<div></div>)
}

export default InfosComponent;
