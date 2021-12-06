import { useEffect } from "react";
import { GetAllProducts } from "../asynThunk/productsThunk";
import { useDispatch } from "react-redux";

export const ProductsDispatch = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAllProducts());
    }, [dispatch]);
    return null;
}
    

