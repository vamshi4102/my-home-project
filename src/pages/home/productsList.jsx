import React, { useEffect, useState } from "react";
import CustomHeading from "../../components/customHeading";
import { featuresData } from "../../assets/brand";
import ProductCard from "../../components/productCard";
import ViewAllButton from "../../components/viewAllButton";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/product-actions";
import supabase from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

function ProductsList({ page = "" }) {
  const features = featuresData[0];
  const navigate = useNavigate();
  const navigateProducts = () => {
    navigate("products");
  };
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    getProductsNow();
  }, []);

  const getProductsNow = async () => {
    const response = await dispatch(getProducts({ supabase }));
    console.log("getProducts response", response);
  };

  const showProducts = page === "products" ? products : products.slice(0, 8);
  return (
    <div className="my-2 mt-5">
      <CustomHeading
        title={features.title}
        description={features.shortDescription}
      />
      <div className="container">
        <div
          className="row row justify-content-center row-cols-2 row-cols-lg-5 g-3 g-lg-3"
          style={{ gap: 15 }}
        >
          {products &&
            products.length > 0 &&
            showProducts.map((product) => (
              <ProductCard image={product.image} title={product.name} />
            ))}
        </div>
      </div>
      <ViewAllButton
        title={`View All ${features.title}`}
        onPress={() => navigateProducts()}
      />
    </div>
  );
}

export default ProductsList;
