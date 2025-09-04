import { createAsyncThunk } from "@reduxjs/toolkit";
import { setProducts } from "../slices/productSlice";

export const createProduct =  ({ name, file, supabase }) => {
  return async (dispatch) => {
  try {
    const fileName = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("uploads")
      .upload(`products/${fileName}`, file);

    if (uploadError) {
      throw uploadError;
    }
    const { data: publicUrlData } = supabase.storage
      .from("uploads")
      .getPublicUrl(`products/${fileName}`);
    const imageUrl = publicUrlData.publicUrl;

    const { data: uploadProduct, error } = await supabase
      .from("products")
      .insert([{ name, image: imageUrl }])
      .select();

    if (error) {
      throw error;
    }
    return uploadProduct[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
};

export const getProducts = ({ supabase }) => {
  return async (dispatch) => {
    try {
      let { data: products, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        console.log("getProducts--err-top", error);
        return;
      }

      dispatch(setProducts(products));
      return products;
    } catch (error) {
      console.log("getProducts--err", error);
    }
  };
};

